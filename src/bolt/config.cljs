(ns ^:shared bolt.config)

(def config
  {:commands
   {:google {:alias "g" :url "https://google.com/search?q=%s"}
    :amazon {:alias "a" :url "http://www.amazon.com/s/?field-keywords=%s"}
    :google-maps {:alias "map" :url "https://www.google.com/maps/preview#!q=%s"}
    :archive {:alias "arch" :url "http://web.archive.org/web/*/%s"}
    :google-group {:alias "ggs" :url "http://groups.google.com/groups/dir?q=%s"}
    :youtube {:alias "v" :url "https://www.youtube.com/results?search_query=%s&utm_source=opensearch"}
    :google-define {:alias "gdef" :url "http://www.google.com/search?q=define:%s"}
    :wikipedia {:alias "w" :url "http://en.wikipedia.org/w/index.php?search=%s&fulltext=Search"}
    :gmail {:alias "gmas" :url "https://mail.google.com/mail/u/0/?shva=1#search/%s"}
    :wolfram {:alias "wram" :url "http://www.wolframalpha.com/input/?i=%s"}
    :ltgtfy {:alias "gfun" :url "http://lmgtfy.com/?q=%s"}}})
