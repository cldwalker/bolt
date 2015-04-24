(ns bolt.speech
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [clojure.string :as string]))

(defn start [_ app]
  (.log js/console "Started speech capture.")
  (swap! app assoc :recognizing true :mic-path "img/mic-animate.gif"))

(defn error [err app]
  (.log js/console "Error while capturing speech!" err)
  (swap! app assoc :recognizing false :mic-path "img/mic-slash.gif"))

(defn end [_ app]
  (.log js/console "Finished speech capture.")
  (swap! app assoc :recognizing false :mic-path "img/mic.gif"))

(defn result [event-data app]
  (let [result-indices (range (.-resultIndex event-data) (.. event-data -results -length))
        result (reduce (fn [accum idx]
                         #_(.debug js/console "STEP" idx (-> event-data .-results))
                         (str accum (-> event-data .-results (aget idx) (aget 0) .-transcript)))
                       "" result-indices)]
    (.debug js/console "Interim result" result)
    (when-let [final-result (some #(when (-> event-data .-results (aget %) .-isFinal)
                                     (-> event-data .-results (aget %) (aget 0) .-transcript))
                                  result-indices)]
      (.log js/console "Final result" final-result)
      (swap! app assoc :user-input (string/lower-case final-result))
      (put! (:event-ch @app) [:service.search (string/lower-case final-result)]))))

(defn event-loop [ch app]
  (go (while true
        (let [[event event-data] (<! ch)]
          #_(.log js/console (pr-str event event-data))
          (case event
            :start (start event-data app)
            :error (error event-data app)
            :result (result event-data app)
            :end (end event-data app)
            (println "Unknown event" event))))))

(defn ->recognition
  [app]
  (let [recognition (js/webkitSpeechRecognition.)
        ch (chan)]
    (doto recognition
      (-> .-interimResults (set! true))
      (-> .-onstart (set! #(put! ch [:start %])))
      (-> .-onerror (set! #(put! ch [:error %])))
      (-> .-onresult (set! #(put! ch [:result %])))
      (-> .-onend (set! #(put! ch [:end %]))))
    (event-loop ch app)
    recognition))

(defn toggle-speech [app event]
  (.preventDefault event)
  (if (.-webkitSpeechRecognition js/window)
    (let [recognition (or (:recognition @app) (->recognition app))]
      (when (not= recognition (:recognition @app))
        (swap! app assoc :recognition recognition))
      (if (:recognizing @app) (.stop recognition) (.start recognition)))
    (js/alert "Web Speech API is not supported by this browser. Use Chrome version 25 or later.")))
