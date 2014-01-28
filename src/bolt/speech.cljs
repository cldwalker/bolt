(ns bolt.speech)

(declare recognizing recognition)

(defn set-image [path]
  (-> (.querySelector js/document "#mic") .-src (set! path)))

(defn start [e]
  (.log js/console "Started speech capture.")
  (def recognizing true)
  (set-image "img/mic-animate.gif"))

(defn error [err]
  (.log js/console "Error while capturing speech!" err)
  (def recognizing false)
  (set-image "img/mic-slash.gif"))

(defn end [err]
  (.log js/console "Finished speech capture.")
  (def recognizing false)
  (set-image "img/mic.gif"))

(def results "")

(defn result [event]
  (let [result-indices (range (.-resultIndex event) (.. event -results -length))
        result (reduce (fn [accum idx]
                         (.log js/console "STEP" idx (-> event .-results))
                         (str accum (-> event .-results (aget idx) (aget 0) .-transcript)))
                       "" result-indices)]
    (.log js/console "Interim result" result)
    (when (some #(-> event .-results (aget %) .-isFinal) result-indices)
      (.log js/console "Final result" result)
      (-> (.querySelector js/document "#search_term") .-value (set! result))
      (def results (str results result)))))

(defn ->recognition
  []
  (doto (js/webkitSpeechRecognition.)
    #_(-> .-continuous (set! true)) ;; TODO
    (-> .-interimResults (set! true))
    (-> .-onstart (set! start))
    (-> .-onerror (set! error))
    (-> .-onresult (set! result))
    (-> .-onend (set! end))))

(defn toggle-speech [event]
  (if (.-webkitSpeechRecognition js/window)
    (do
      (when-not recognition
        (def recognition (->recognition)))

      (if recognizing (.stop recognition) (.start recognition)))
  (js/alert "Web Speech API is not supported by this browser. Use Chrome version 25 or later.")))


