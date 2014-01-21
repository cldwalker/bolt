(ns bolt.speech)

(defn start []
  (.log js/console "Start!"))

(defn error [err]
  (.log js/console "Error!" err))


;; recognition.onresult = function(event) {
;;     var interim_transcript = '';
;;     console.log(event.resultIndex, event.results.length);
;;     for (var i = event.resultIndex; i < event.results.length; ++i) {
;; 	if (event.results[i].isFinal) {
;;             final_transcript += event.results[i][0].transcript;
;; 	} else {
;;             interim_transcript += event.results[i][0].transcript;
;; 	}
;;     }

;;     search_term.value = final_transcript;
;;     console.log("result!");

;; }

(defn result [event]
  (.log js/console (.-resultIndex event) (.. event -results -length)))

(defn init
  []
  (def recognition (js/webkitSpeechRecognition.))
  (doto recognition
    (-> .-continous (set! true))
    (-> .-interimResults (set! true))
    (-> .-onstart (set! start))
    (-> .-onerror (set! error))
    (-> .-onresult (set! result))))

(defn startButton [event]
  (.start recognition))

(init)
