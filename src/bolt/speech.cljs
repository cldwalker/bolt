(ns bolt.speech)

(defn start []
  (.log js/console "Start!"))

(defn error [err]
  (.log js/console "Error!" err))


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

(declare results recognition)

(defn init
  []
  (def recognition (js/webkitSpeechRecognition.))
  (def results "")

  (doto recognition
    (-> .-continous (set! true))
    (-> .-interimResults (set! true))
    (-> .-onstart (set! start))
    (-> .-onerror (set! error))
    (-> .-onresult (set! result))))

(defn startButton [event]
  (.start recognition))

(init)
