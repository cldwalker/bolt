(ns bolt.core
  (:require
   [cljs.core.async :refer [put! <! >! chan timeout]]
   [bolt.config :as config]
   [clojure.string :as string]
   [rum])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def app-state (atom {}))
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

;; UI

(defn submit-search [e]
  (put! event-ch [:service.search
                  (-> (.querySelector js/document "#search_term")
                      .-value)])
  false)

(rum/defc search-form []
 [:form {:onSubmit submit-search
         :className "jumbotron"}
  [:datalist#commands (map #(vector :option {:value (name %)})
                           (sort (keys (commands-index))))]
  [:input#search_term {:type "text" :autoFocus "autofocus" :list "commands"}]
  [:a {:className "btn btn-default mic" :href "#" :onClick #(prn "MIC" %)}
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

(rum/mount (bolt-app)(.getElementById js/document "app"))
