## Description
This project commands the web with our own words, not Google's, Siri or any other generic interface.
Bolt can be used as your browser's default search engine and as a customizable voice assitant on
your phone. This is an experimental successor to [queriac](https://github.com/cldwalker/queriac),
[yubnub](http://yubnub.org/), etc.

## How it works

Bolt works by translating our words (commands) to urls. For example, the devdocs command is the url
`http://devdocs.io/#q=%s`. When we enter `devdocs onclick`, we are taken to
`http://devdocs.io/#q=onclick`.

## Use it

Try the [demo](https://googledrive.com/host/0B66TjgTudHqHbHlQUnpGaVdHS28/index.html).

To use the demo as I use it:

* As my default search engine.
  * In Chrome, you'll find this in settings under "Manage search engines...". Add an
  entry for `https://googledrive.com/host/0B66TjgTudHqHbHlQUnpGaVdHS28/index.html#/to/%s` and click
  "Make default".
  * Any commands I type into the address bar are translated by bolt.
* As a one-click voice assistant.
  * In Android Chrome, I navigate to `https://googledrive.com/host/0B66TjgTudHqHbHlQUnpGaVdHS28/index.html?start=1`. In the upper-right menu, I select "Add to homescreen".
  * To voice command anything, I click on the url icon and speak.

## Dev it

To try this out locally:

```sh
$ lein cljsbuild once dev
$ cd resources/public
$ python -m SimpleHTTPServer 5000
$ open http://localhost:5000/
```

## Configuration

Commands are just data, in the form of [edn](https://github.com/edn-format/edn).
You can configure these in src/bolt/config.cljs.

## Bugs/Issues
Please report them [on github](http://github.com/cldwalker/bolt/issues).

## Limitations

Speech recognition only works on Chrome 25+. This should work on any phone that has Chrome e.g. droids
and iphone.

## License
See LICENSE.TXT

## Credits

Images were taken from [this sample project](https://github.com/GoogleChrome/webplatform-samples)

## TODO
* advanced compilation
* non-shitty UI
* custom https domain
* consider bookmarklet support
* consider user-specific commands

## Links
* [bookmarks](http://semtag.me/#/search?query=web_command) I keep on web commands.
