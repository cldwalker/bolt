(defproject bolt "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.7.228" :scope "provided"]
                 [rum "0.2.6"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [secretary "1.2.2"]]

  :plugins [[lein-cljsbuild "1.1.2"]]

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:main "bolt.core"
                                   :output-to "resources/public/js/bolt.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true
                                   :warnings {:single-segment-namespace false}
                                   :asset-path "js/out"}}
                       {:id "prod"
                        :source-paths ["src"]
                        :notify-command ["say"]
                        :compiler {:output-to "resources/public/js/bolt.js"
                                   :output-dir "resources/public/js/prod-out"
                                   :optimizations :advanced
                                   :source-map "resources/public/js/bolt.js.map"
                                   :pretty-print false
                                   :asset-path "js/prod-out"
                                   :warnings {:single-segment-namespace false}
                                   :externs ["resources/externs/w3c_speech.js"]}}]})
