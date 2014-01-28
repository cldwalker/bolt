(ns bolt.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]]
                   [secretary.macros :refer [defroute]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [secretary.core :as secretary]
            [clojure.string :as string]
            [bolt.speech :as speech]
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
             (dom/input #js {:id "search_term" :type "text" :autoFocus "autofocus"})
             (dom/a #js {:className "btn btn-default mic" :href "#" :onClick speech/startButton }
                         (dom/img #js {:src "img/mic.gif"}))
             (dom/input #js {:type "submit" :value "Search" :className "btn btn-default btn-lg"}))))

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

(defn process-search*
  "For now this is just a local config lookup but this could interact
  with another service."
  [input]
  (let [[cmd & args] (string/split input #"\s+")]
    {:name cmd
     :url (get (commands-index) (keyword cmd))
     :args args}))

(defn process-search
  [event-data chan]
  (put! chan [:ui.search (process-search* event-data)]))

(defn handle-event [app event event-data {:keys [chan]}]
  (.log js/console "Event: " (pr-str event event-data))
  (case event
    :service.search (process-search event-data chan)
    :ui.search  (om/update! app assoc :search-result event-data)
    (.log js/console "No event found for" event event-data)))

(defn build-url [url args]
  (let [expected-args (count (re-seq #"%s" url))]
    (cond
      (= 1 expected-args) (string/replace-first url "%s" (string/join " " args))
      ;; TODO: error for non-matching args
      :else (apply string/replace url "%s" args))))

(defn handle-search-result [app]
  (let [{:keys [url] :as cmd} (:search-result app)]
    (if url
      ;; TODO: url encode args
      (let [redirect-url (build-url url (:args cmd))]
        (om/update! app assoc :message "Redirecting ...")
        (set! (.-location js/window) redirect-url))
      (om/update! app assoc :error (str "No command found for " (:name cmd))))
    nil))

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
                   (:error app)))
               (when (:message app)
                 (dom/div
                   #js {:className "alert alert-success"}
                   (:message app)))
               (om/build search-form app {:opts {:chan (om/get-state owner :chan)}})
               (when (:search-result app)
                 (handle-search-result app))))))

;; Routing

(defroute "/" []
  (om/root app-state bolt-app (.getElementById js/document "app")))

(defroute "/to/:command" [command]
  (om/root app-state bolt-app (.getElementById js/document "app"))
  ;; need cursor for error handling
  (om/update! cursor assoc :search-result (process-search* command)))

(def history (History.))

(events/listen history EventType/NAVIGATE
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)
