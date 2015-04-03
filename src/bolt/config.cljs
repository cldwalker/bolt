(ns ^:shared bolt.config)

(def config
  {:default :google
   :commands
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
    :ltgtfy {:alias "gfun" :url "http://lmgtfy.com/?q=%s"}
    :lastfm {:url "http://www.last.fm/search?q=%s"}
    :clojuredocs {:alias "cd" :url "http://clojuredocs.org/search?q=%s"}
    :flickr {:alias "fl" :url "http://www.flickr.com/search/?q=%s"}
    :scholar {:alias "sc" :url "https://scholar.google.com/scholar?q=%s"}

    ;; just for voice
    :github {:alias "gh" :url "https://github.com/search?q=%s&ref=simplesearch"}
    :yelp {:alias "y" :url "http://www.yelp.com/search?find_desc=%s&src=opensearch"}
    :clojars {:alias "cl" :url "http://clojars.org/search?q=%s"}

    ;; for local dev
    :semtag-search {:alias "ss" :url "http://localhost:8000/semtag-web-dev.html#/search?query=%s"}
    :semtag-regex-search {:alias "sr" :url "http://localhost:8000/semtag-web-dev.html#/search?query=%s&search-type=regex"}
    :semtag-type {:alias "st" :url "http://localhost:8000/semtag-web-dev.html#/type/%s"}
    :semtag-thing {:alias "se" :url "http://localhost:8000/semtag-web-dev.html#/thing/%s"}}})
