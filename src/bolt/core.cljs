(ns bolt.core
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [bolt.config :as config]
            [bolt.speech :as speech]
            [clojure.string :as string]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary :refer-macros [defroute]]
            [rum])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:import [goog History]))

(def app-state (atom {:user-input ""
                      :event-ch (chan 10)
                      :all-commands (map (fn [[k v]] (assoc v :name (name k)))
                                         (:commands config/config))
                      :mic-path "img/mic.gif"}))
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
  (cond
   (re-find #"nosubmit" js/window.location.search)
   (js/alert (str "Would submit: " cmd))

   (seq url)
   (let [redirect-url (build-url url (map js/encodeURIComponent (:args cmd)))]
     (swap! app assoc :message
            (string/replace-first "Redirecting with %s ..." "%s" (name (:name cmd))))
     (set! (.-location js/window) redirect-url))

   :else
   (swap! app assoc :error (str "No command found for " (:name cmd)))))

(defn handle-event [app event event-data]
  (.log js/console "Event: " (pr-str event event-data))
  (case event
    :service.search (process-search event-data (:event-ch @app))
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

(defn submit-search [e ch user-input]
  (put! ch [:service.search user-input])
  false)

(rum/defc input < rum/cursored rum/cursored-watch [ref attributes]
  [:input (merge attributes {:type "text"
                             :value @ref
                             :on-change #(reset! ref (.. % -target -value))})])
(rum/defc search-form [app]
 [:form {:onSubmit #(submit-search % (:event-ch @app) (:user-input @app))
         :className "jumbotron"}
  [:datalist#commands (map #(vector :option {:value (name %)
                                             :key (str "command-" (name %))})
                           (sort (keys (commands-index))))]
  (input (rum/cursor app [:user-input]) {:autoFocus "autofocus" :list "commands" :id "search_term"})
  [:a {:className "btn btn-default mic" :href "#" :onClick (partial speech/toggle-speech app)}
   [:img#mic {:src (:mic-path @app)}]]
  [:input {:type "submit" :value "Search" :className "btn btn-default btn-lg"}]])

(def event-loop
  {:will-mount (fn [state]
                 (go (while true
                         (let [[event event-data](<! (:event-ch @app-state))]
                           (handle-event app-state event event-data))))
                 state)})

(rum/defc commands-list [app]
  [:.jumbotron
   [:h2 (if (seq (:user-input @app)) "Matching Commands" "All Commands")]
   [:ul
    (map #(vector :li (str (:name %)
                           (when (:alias %) (str " (" (:alias %) ")"))
                           ": ")
                  [:a {:href (:url %)} (:url %)])
         (sort-by :name
                  (filter
                   #(let [first-word (or (re-find #"\S+" (:user-input @app))
                                         (:user-input @app))]
                      (or
                       (> (.indexOf (:url %) first-word) -1)
                       (> (.indexOf (str (:alias %)) first-word) -1)
                       (> (.indexOf (:name %) first-word) -1)))
                   (:all-commands @app))))]])

(rum/defc bolt-app < event-loop rum/reactive [app]
  (let [{:keys [message error]} (rum/react app)]
    [:div
     [:h1 "Welcome to Bolt!"]
     (when error
       [:div {:className "alert alert-danger"} error])
     (search-form app)
     (when message
       [:div {:className "alert alert-success"} message])
     (commands-list app)]))

;; Routing

(defroute "/" []
  (rum/mount (bolt-app app-state) (.getElementById js/document "app"))
  (when (re-find #"start" js/window.location.search)
    (speech/toggle-speech app-state #js {:preventDefault (fn [])})))

;; For browser commands
(defroute "/to/*command" {command :command}
  ;; Faster commands (no react components) in exchange for no alerts
  ((:will-mount event-loop) {})
  (put! (:event-ch @app-state) [:service.search command]))

(def history (History.))

(events/listen history EventType/NAVIGATE
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)
