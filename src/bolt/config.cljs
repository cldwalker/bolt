(ns ^:shared bolt.config)

(def config
  {:default :google
   :commands
   {:google {:alias "g" :url "https://google.com/search?q=%s"}
    :google-lucky {:alias "gl" :url "http://www.google.com/search?sourceid=navclient&btnI=I&q=%s"}
    :google-shopping {:alias "gshop" :url "https://www.google.com/?gws_rd=ssl#q=%s&tbm=shop"}
    :amazon {:alias "a" :url "http://www.amazon.com/s/?field-keywords=%s"}
    :google-maps {:alias "map" :url "https://www.google.com/maps/preview#!q=%s"}
    :archive {:alias "arch" :url "http://web.archive.org/web/*/%s"}
    :youtube {:alias "v" :url "https://www.youtube.com/results?search_query=%s&utm_source=opensearch"}
    :google-define {:alias "gd" :url "http://www.google.com/search?q=define:%s"}
    :wikipedia {:alias "w" :url "http://en.wikipedia.org/wiki/Special:Search?search=%s"}
    :wikidata {:alias "wd" :url "http://www.wikidata.org/wiki/Special:Search?search=%s"}
    :scholar {:alias "sc" :url "https://scholar.google.com/scholar?q=%s"}
    ; url doesnt work on phone
    :gmail {:alias "gmas" :url "https://mail.google.com/mail/u/0/?shva=1#search/%s"}
    :wolfram {:alias "wolf" :url "http://www.wolframalpha.com/input/?i=%s"}
    :lastfm {:alias "lfm" :url "http://www.last.fm/search?q=%s"}
    :clojuredocs {:alias "cd" :url "http://clojuredocs.org/search?q=%s"}
    :flickr {:alias "fl" :url "http://www.flickr.com/search/?q=%s"}
    :imdb {:url "http://www.imdb.com/find?q=%s&s=all"}
    :rotten {:url "http://www.rottentomatoes.com/search/?search=%s"}
    :domainr {:url "https://domai.nr/?q=%s"}
    :google-domain {:url "https://domains.google.com/registrar?s=%s"}
    :freebase {:alias "fb" :url "http://www.freebase.com/search?query=%s"}
    :twitter {:url "https://twitter.com/search?q=%s"}
    :urbandictionary {:alias "urban" :url "http://www.urbandictionary.com/define.php?term=%s"}
    :github-lucky {:alias "ghl" :url "http://tagaholic.me/github-lucky/?query=%s"}
    :crossclj {:alias "cclj" :url "http://crossclj.info/search?q=%s"}
    :drive {:alias "dr" :url "https://drive.google.com/drive/search?q=%s"}
    :bus {:url "http://openmbta.org/routes/Bus#%s"}
    :fandango {:alias "fan" :url "http://www.fandango.com/search/?q=%s"}

    ;; groups
    :film {:names ["fandango" "imdb" "rotten"]}
    :find {:names ["google" "wikipedia" "wikidata" "freebase"]}
    :buy {:names ["amazon" "google-shopping"]}
    :domain {:names ["domainr" "google-domain"]}

    ;; not used on phone
    :google-group {:alias "ggs" :url "http://groups.google.com/groups/dir?q=%s"}
    :ltgtfy {:alias "gfun" :url "http://lmgtfy.com/?q=%s"}

    ;; just for phone
    :github {:alias "gh" :url "https://github.com/search?q=%s&ref=simplesearch"}
    ;; blank out find_loc for localized search
    :yelp {:alias "y" :url "http://www.yelp.com/search?find_desc=%s&find_loc="}
    :clojars {:alias "cl" :url "http://clojars.org/search?q=%s"}
    :devdocs {:alias "dev" :url "http://devdocs.io/#q=%s"} ;voice-trouble

    ;; semtag
    :tag {:alias "pss" :url "http://semtag.me#/search?query=%s"}
    :search {:alias "psr" :url "http://semtag.me#/search?query=%s&search-type=regex"}
    :type {:alias "pst" :url "http://semtag.me#/type/%s"}
    :thing {:alias "pse" :url "http://semtag.me#/thing/%s"} ;voice-trouble
    ;; local dev
    :semtag-search {:alias "ss" :url "http://localhost:8000/semtag-web-dev.html#/search?query=%s"}
    :semtag-regex-search {:alias "sr" :url "http://localhost:8000/semtag-web-dev.html#/search?query=%s&search-type=regex"}
    :semtag-type {:alias "st" :url "http://localhost:8000/semtag-web-dev.html#/type/%s"}
    :semtag-thing {:alias "se" :url "http://localhost:8000/semtag-web-dev.html#/thing/%s"}}})
