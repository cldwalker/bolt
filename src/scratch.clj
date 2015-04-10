(ns scratch)

(comment
(def cmds
  (->> (slurp "resources/queriac-cmds.txt")
       (clojure.string/split-lines)
       (map #(clojure.string/split % #"\s*\|\s*"))))

;; Main cmds
(->> cmds
     (filter #(.contains (second %) "(q)"))
     (remove #(.contains (second %) "javascript:"))
     (map #(zipmap [:name :url :alias] %))
     (map #(update-in % [:url]
                      (fn [x]
                        (clojure.string/replace-first x "(q)" "%s"))))
     (#(with-out-str (clojure.pprint/pprint %)))
     (spit "resources/queriac-commands.edn"))

;; bookmarks or bookmarklets
(->> cmds
     ;; (filter #(.contains (second %) "javascript:"))
     (remove #(.contains (second %) "(q)")))

;; | incorrectly parsed
(->> cmds
     (filter #(> (count %) 3)))
 )
