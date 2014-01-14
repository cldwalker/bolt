(ns bolt.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]]
                   [secretary.macros :refer [defroute]])
  (:require [goog.events :as events]
              [cljs.core.async :refer [put! <! >! chan timeout]]
              [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [secretary.core :as secretary]
              [clojure.string :as string]
              [bolt.config :as config])
  (:import [goog History]
           [goog.history EventType]))

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
            (dom/input #js {:type "text" :id "search_term" :autoFocus "autofocus"})
            (dom/input #js {:type "submit" :value "Search"}))))

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

(defn handle-search-result [app]
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
      (def cursor app) ;; need global access to this for other routes
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
                 (handle-search-result app))))))

;; Routing

(defroute "/" []
  (om/root app-state bolt-app (.getElementById js/document "app")))

(defroute "/to/:command" [command]
  (om/root app-state bolt-app (.getElementById js/document "app"))
  ;; need cursor for error handling
  (om/update! cursor assoc :search-result (process-search command)))

(def history (History.))

(events/listen history EventType/NAVIGATE
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)

