(defproject bolt "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0" :scope "provided"]
                 [org.clojure/clojurescript "0.0-3117" :scope "provided"]
                 [rum "0.2.6"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [secretary "0.4.0"]]

  :plugins [[lein-cljsbuild "1.0.5"]]

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:main "bolt.core"
                                   :output-to "resources/public/js/bolt.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true
                                   :asset-path "js/out"}}
                       {:id "release"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "resources/public/js/bolt.js"
                                   :source-map "resources/public/js/bolt.js.map"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :output-wrapper false
                                   :preamble ["om/react.min.js"]
                                   :externs ["om/externs/react.js"]
                                   :closure-warnings
                                   {:non-standard-jsdoc :off}}}]})
