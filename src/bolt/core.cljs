(ns bolt.core
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [bolt.config :as config]
            [bolt.speech :as speech]
            [clojure.string :as string]
            [secretary.core :as secretary]
            [goog.events :as events]
            [rum])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [secretary.macros :refer [defroute]])
  (:import [goog History]
           [goog.history EventType]))

(def app-state (atom {:user-input ""}))
(def event-ch (chan 10))
(def commands-index
  (memoize (fn []
             (merge
               (->> (:commands config/config)
                    (map (fn [[k v]] [k (:url v)]))
                    (into {}))
               (->> (:commands config/config)
                    vals
                    (filter :alias)
                    (map (fn [cmd] [(keyword (:alias cmd)) (:url cmd)]))
                    (into {}))))))

;; Event handling

(defn process-search*
  "For now this is just a local config lookup but this could interact
  with another service."
  [input]
  ;; decode to use as a default search engine
  (let [[cmd & args] (-> input js/decodeURIComponent (string/split #"\s+"))
        url (get (commands-index) (keyword cmd))
        [cmd url args] (if (and (nil? url) (:default config/config))
                         [(:default config/config)
                          (get (commands-index) (:default config/config))
                          (into [cmd] args)]
                         [cmd url args])]
    {:name cmd :url url :args args}))

(defn process-search
  [event-data ch]
  (put! ch [:ui.search (process-search* event-data)]))

(defn build-url [url args]
  (let [expected-args (count (re-seq #"%s" url))]
    (cond
      (= 1 expected-args) (string/replace-first url "%s" (string/join " " args))
      ;; TODO: error for non-matching args
      :else (apply string/replace url "%s" args))))

(defn handle-search-result [app {:keys [url] :as cmd}]
  (if url
    ;; TODO: url encode args
    (let [redirect-url (build-url url (:args cmd))]
      (swap! app assoc :message
             (string/replace-first "Redirecting with %s ..." "%s" (name (:name cmd))))
      (set! (.-location js/window) redirect-url))
    (swap! app assoc :error (str "No command found for " (:name cmd)))))

(defn handle-event [app event event-data]
  (.log js/console "Event: " (pr-str event event-data))
  (case event
    :service.search (process-search event-data event-ch)
    :ui.search      (handle-search-result app event-data)
    (.log js/console "No event found for" event event-data)))

;; UI debugging
(def dom->component (atom {}))

;; Mixin to debug state for component by selector
;; Just drop it on any defc e.g. < debuggable
(def debuggable
  {:did-mount (fn [state]
                ;; Save component since another mixin may change state later
                (when-let [dom (.getDOMNode (:rum/react-component state))]
                  (swap! dom->component assoc dom (:rum/react-component state)))
                state)})

(defn selector->state [selector]
  (if-let [component (cljs.core/get @dom->component (js/document.querySelector selector))]
    @(aget (.-props component) ":rum/state")
    (cljs.core/println "No component found")))

#_(selector->state "#app div")
#_(selector->state "input")

;; UI

(defn submit-search [e ch]
  (put! ch [:service.search (:user-input @app-state)])
  false)

(rum/defc input < rum/cursored rum/cursored-watch [ref attributes]
  [:input (merge attributes {:type "text"
                             :value @ref
                             :on-change #(reset! ref (.. % -target -value))})])
(rum/defc search-form []
 [:form {:onSubmit #(submit-search % event-ch)
         :className "jumbotron"}
  [:datalist#commands (map #(vector :option {:value (name %)
                                             :key (str "command-" (name %))})
                           (sort (keys (commands-index))))]
  (input (rum/cursor app-state [:user-input]) {:autoFocus "autofocus" :list "commands" :id "search_term"})
  [:a {:className "btn btn-default mic" :href "#" :onClick (partial speech/toggle-speech "#search_term" "#search_submit")}
   [:img#mic {:src "img/mic.gif"}]]
  [:input#search_submit {:type "submit" :value "Search" :className "btn btn-default btn-lg"}]])

(def event-loop
  {:will-mount (fn [state]
                 (go (while true
                         (let [[event event-data](<! event-ch)]
                           (handle-event app-state event event-data))))
                 state)})

(rum/defc bolt-app < event-loop rum/reactive []
  (let [{:keys [message error]} (rum/react app-state)]
    [:div
     [:h1 "Welcome to Bolt!"]
     (when error
       [:div {:className "alert alert-danger"} error])
     (search-form)
     (when message
       [:div {:className "alert alert-success"} message])]))

;; Routing

(defroute "/" []
  (rum/mount (bolt-app) (.getElementById js/document "app")))

;; For browser commands
(defroute "/to/:command" [command]
  ;; Faster commands (no react components) in exchange for no alerts
  ((:will-mount event-loop) {})
  (put! event-ch [:service.search command]))

(def history (History.))

(events/listen history EventType/NAVIGATE
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)
