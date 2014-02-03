(ns bolt.speech
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [clojure.string :as string]))

(declare recognizing recognition img-elem input-elem button-elem)

(defn set-image [path]
  (-> img-elem .-src (set! path)))

(defn start [e]
  (.log js/console "Started speech capture.")
  (def recognizing true)
  (set-image "img/mic-animate.gif"))

(defn error [err]
  (.log js/console "Error while capturing speech!" err)
  (def recognizing false)
  (set-image "img/mic-slash.gif"))

(defn end [e]
  (.log js/console "Finished speech capture.")
  (def recognizing false)
  (set-image "img/mic.gif"))

(defn result [event]
  (let [result-indices (range (.-resultIndex event) (.. event -results -length))
        result (reduce (fn [accum idx]
                         (str accum (-> event .-results (aget idx) (aget 0) .-transcript)))
                       "" result-indices)]
    (.log js/console "Possible speech result:" result)
    (when (some #(-> event .-results (aget %) .-isFinal) result-indices)
      (.log js/console "Final speech result:" result)
      (-> input-elem .-value (set! (string/lower-case result)))
      (.click button-elem))))

(defn event-loop [ch]
  (go (while true
        (let [[event event-data] (<! ch)]
          #_(.log js/console (pr-str event event-data))
          (case event
            :start (start event-data)
            :error (error event-data)
            :result (result event-data)
            :end (end event-data)
            (println "Unknown event" event))))))

(defn ->recognition
  []
  (let [recognition (js/webkitSpeechRecognition.)
        ch (chan)]
    (doto recognition
      (-> .-interimResults (set! true))
      (-> .-onstart (set! #(put! ch [:start %])))
      (-> .-onerror (set! #(put! ch [:error %])))
      (-> .-onresult (set! #(put! ch [:result %])))
      (-> .-onend (set! #(put! ch [:end %]))))
    (event-loop ch)
    recognition))

(defn toggle-speech [input-id button-id event]
  (if (.-webkitSpeechRecognition js/window)
    (do
      (when-not recognition
        (def input-elem (.querySelector js/document input-id))
        (def button-elem (.querySelector js/document button-id))
        (def img-elem (.-target event))
        (def recognition (->recognition)))

      (if recognizing (.stop recognition) (.start recognition)))
  (js/alert "Web Speech API is not supported by this browser. Use Chrome version 25 or later.")))


