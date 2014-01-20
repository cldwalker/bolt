(ns ^:shared bolt.config)

(def config
  {:commands
   {:google {:url "https://google.com/search?q=%s"}
    :youtube {:alias "v" :url "https://youtube.com/search?q=%s"}}})
