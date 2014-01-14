(ns bolt.core
    (:require-macros [cljs.core.async.macros :refer [go alt!]])
    (:require [goog.events :as events]
              [cljs.core.async :refer [put! <! >! chan timeout]]
              [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [clojure.string :as string]
              [bolt.config :as config]))

;; Lets you do (prn "stuff") to the console
(enable-console-print!)

(def app-state
  (atom {}))

(defn submit-search [chan e]
  (put! chan [:service.search
              (-> (.querySelector js/document "#search_term")
                  .-value)])
  false)

(defn search-form [app owner {:keys [chan]}]
  (om/component
   (dom/form #js {:onSubmit #(submit-search chan %)
                  :className "jumbotron"}
            (dom/input #js {:type "text" :id "search_term"})
            (dom/input #js {:type "submit" :value "Search"}))))

;; TODO: give each element a :key
(defn render-table [headers rows]
  (apply dom/table
         #js {:className "table table-striped"}
         nil
         (dom/caption nil (str "Found " (count rows) " results"))
         (apply dom/tr nil
                  (map
                   (fn [value] (dom/th nil value))
                   headers))
         (map #(apply dom/tr
                       nil
                       (map
                        (fn [value] (dom/td nil value))
                        %))
               rows)))

(defn click-id-link [chan id e]
  (.log js/console e)
  (put! chan [:service.id id])
  false)

(defn search-results [app owner {:keys [chan]}]
  (om/component
   (dom/div
    #js {:id "search_results"}
    (if-let [result (:search-result app)]
      (do (.log js/console "DATA" result)
          (render-table ["h1" "h2"] [["c1" "c2"] ["d1" "d2"]]))
      ""))))

(defn process-search
  "For now this is just a local config lookup but this could interact
  with another service."
  [input]
  (let [[cmd & args] (string/split input #"\s+")]
    {:name cmd
     :url (get-in config/config [:commands (keyword cmd)])
     :args args}))

(defn handle-event [app event event-data {:keys [chan]}]
  (.log js/console "Event: " (pr-str event event-data))
  (case event
    :service.search (put! chan [:ui.search (process-search event-data)])
    :ui.search  (om/update! app assoc :search-result event-data)
    (.log js/console "No event found for" event event-data)))

(defn handle-search-result [app opts]
  (let [{:keys [url] :as cmd} (:search-result app)]
    (if url
      ;; TODO: url encode args
      ;; TODO: error for non-matching args
      (let [redirect-url (apply string/replace url "%s" (:args cmd))]
        (prn js/console redirect-url)
        (set! (.-location js/window) redirect-url))
      (do
        (om/update! app assoc :error (str "No command found for " (:name cmd)))
        nil))))

(defn bolt-app [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [main-chan (chan 10)]
        (om/set-state! owner :chan main-chan)
        (go (while true
              (let [[event event-data](<! main-chan)]
                (handle-event
                  app
                  event
                  event-data
                  {:chan main-chan}))))))
    om/IRender
    (render [_]
      (dom/div nil
               (dom/h1 nil "Welcome to Bolt!")
               (when (:error app)
                 (dom/div
                   #js {:className "alert alert-danger"}
                   nil
                   (:error app)))
               (om/build search-form app {:opts {:chan (om/get-state owner :chan)}})
               (when (:search-result app)
                 (handle-search-result app {:chan (om/get-state owner :chan)}))))))

(om/root app-state bolt-app (.getElementById js/document "app"))
