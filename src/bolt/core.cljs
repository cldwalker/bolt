(ns bolt.core
  (:require
   [rum]
   [cljs.core.async :refer [put! <! >! chan timeout]]
   [bolt.config :as config])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def app-state (atom {}))
(def event-ch (chan 10))

(defn handle-event [app event event-data]
  (.log js/console "Event: " (pr-str event event-data))
  ;; (case event
  ;;   :service.search (process-search event-data chan)
  ;;   :ui.search  (om/update! app assoc :search-result event-data)
  ;;   (.log js/console "No event found for" event event-data))
  )

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
