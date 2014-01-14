(ns bolt.core
    (:require-macros [cljs.core.async.macros :refer [go alt!]])
    (:require [goog.events :as events]
              [cljs.core.async :refer [put! <! >! chan timeout]]
              [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
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
   (dom/form #js {:onSubmit #(submit-search chan %) }
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

(defn search-results [app owner {:keys [result chan]}]
  (om/component
   (dom/div
    #js {:id "search_results"}
    (if result
      (do (.log js/console "DATA" result)
          (render-table ["h1" "h2"] [["c1" "c2"] ["d1" "d2"]]))
      ""))))

(defn handle-event [app event event-data {:keys [chan]}]
  (.log js/console "Event: " (pr-str event) event-data)
  (case event
    :service.search (put! chan [:ui.search (get-in config/config [:commands (keyword event-data)])])
    :ui.search  (om/update! app assoc :search-result event-data)
    (.log js/console "No event found for" event event-data)))

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
                             {:chan main-chan}))))
                    (put! main-chan [:ui.search "found"])))
      om/IRender
      (render [_]
              (dom/div nil
                       (dom/h1 nil "Welcome to Bolt!")
                       (om/build search-form app {:opts {:chan (om/get-state owner :chan)}})
                       ;; Consider not rendering these when they have no results
                       (om/build search-results app {:opts {:result (:search-result app)
                                                            :chan (om/get-state owner :chan)}})
                       ))))

(om/root app-state bolt-app (.getElementById js/document "app"))
