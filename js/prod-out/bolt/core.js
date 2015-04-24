// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('bolt.core');
goog.require('cljs.core');
goog.require('bolt.speech');
goog.require('secretary.core');
goog.require('bolt.config');
goog.require('goog.history.EventType');
goog.require('rum');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');
bolt.core.app_state = (function (){var G__16018 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$user_DASH_input,"",cljs.core.constant$keyword$event_DASH_ch,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10)),cljs.core.constant$keyword$all_DASH_commands,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16019){
var vec__16020 = p__16019;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16020,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16020,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.constant$keyword$name,cljs.core.name(k));
}),cljs.core.constant$keyword$commands.cljs$core$IFn$_invoke$arity$1(bolt.config.config)),cljs.core.constant$keyword$mic_DASH_path,"img/mic.gif"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16018) : cljs.core.atom.call(null,G__16018));
})();
bolt.core.commands_index = cljs.core.memoize((function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16021){
var vec__16022 = p__16021;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16022,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16022,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}),cljs.core.constant$keyword$commands.cljs$core$IFn$_invoke$arity$1(bolt.config.config))),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (cmd){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$alias.cljs$core$IFn$_invoke$arity$1(cmd)),cmd], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$alias,cljs.core.vals(cljs.core.constant$keyword$commands.cljs$core$IFn$_invoke$arity$1(bolt.config.config)))))], 0));
}));
/**
 * For now this is just a local config lookup but this could interact
 * with another service.
 */
bolt.core.input__GT_cmd = (function bolt$core$input__GT_cmd(input){
var vec__16026 = clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var G__16028 = input;
return decodeURIComponent(G__16028);
})(),/\s+/);
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16026,(0),null);
var args = cljs.core.nthnext(vec__16026,(1));
var cmd_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){return (bolt.core.commands_index.cljs$core$IFn$_invoke$arity$0 ? bolt.core.commands_index.cljs$core$IFn$_invoke$arity$0() : bolt.core.commands_index.call(null));
})(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cmd));
var vec__16027 = (cljs.core.truth_((function (){var and__4151__auto__ = (cmd_map == null);
if(and__4151__auto__){
return cljs.core.constant$keyword$default.cljs$core$IFn$_invoke$arity$1(bolt.config.config);
} else {
return and__4151__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$default.cljs$core$IFn$_invoke$arity$1(bolt.config.config),cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){return (bolt.core.commands_index.cljs$core$IFn$_invoke$arity$0 ? bolt.core.commands_index.cljs$core$IFn$_invoke$arity$0() : bolt.core.commands_index.call(null));
})(),cljs.core.constant$keyword$default.cljs$core$IFn$_invoke$arity$1(bolt.config.config)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd], null),args)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd,cmd_map,args], null));
var cmd__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16027,(0),null);
var cmd_map__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16027,(1),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16027,(2),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cmd_map__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,cmd__$1,cljs.core.constant$keyword$args,args__$1], null)], 0));
});
bolt.core.process_search = (function bolt$core$process_search(event_data,ch){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ui$search,bolt.core.input__GT_cmd(event_data)], null));
});
bolt.core.build_url = (function bolt$core$build_url(url,args){
var expected_args = cljs.core.count(cljs.core.re_seq(/%s/,url));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),expected_args)){
return clojure.string.replace_first(url,"%s",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.string.replace,url,"%s",args);

}
});
bolt.core.handle_search_result = (function bolt$core$handle_search_result(app,p__16030){
var map__16039 = p__16030;
var map__16039__$1 = ((cljs.core.seq_QMARK_(map__16039))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16039):map__16039);
var cmd = map__16039__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16039__$1,cljs.core.constant$keyword$url);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16039__$1,cljs.core.constant$keyword$args);
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16039__$1,cljs.core.constant$keyword$names);
if(cljs.core.truth_(cljs.core.re_find(/nosubmit/,window.location.search))){
var G__16040 = [cljs.core.str("Would submit: "),cljs.core.str(cmd)].join('');
return alert(G__16040);
} else {
if(cljs.core.seq(names)){
var seq__16041 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__16039,map__16039__$1,cmd,url,args,names){
return (function (p1__16029_SHARP_){
return bolt.core.input__GT_cmd(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16029_SHARP_], null),args)));
});})(map__16039,map__16039__$1,cmd,url,args,names))
,names));
var chunk__16042 = null;
var count__16043 = (0);
var i__16044 = (0);
while(true){
if((i__16044 < count__16043)){
var group_cmd = chunk__16042.cljs$core$IIndexed$_nth$arity$2(null,i__16044);
var G__16045_16047 = bolt.core.build_url(cljs.core.constant$keyword$url.cljs$core$IFn$_invoke$arity$1(group_cmd),cljs.core.map.cljs$core$IFn$_invoke$arity$2(encodeURIComponent,args));
window.open(G__16045_16047);

var G__16048 = seq__16041;
var G__16049 = chunk__16042;
var G__16050 = count__16043;
var G__16051 = (i__16044 + (1));
seq__16041 = G__16048;
chunk__16042 = G__16049;
count__16043 = G__16050;
i__16044 = G__16051;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__16041);
if(temp__4126__auto__){
var seq__16041__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16041__$1)){
var c__4948__auto__ = cljs.core.chunk_first(seq__16041__$1);
var G__16052 = cljs.core.chunk_rest(seq__16041__$1);
var G__16053 = c__4948__auto__;
var G__16054 = cljs.core.count(c__4948__auto__);
var G__16055 = (0);
seq__16041 = G__16052;
chunk__16042 = G__16053;
count__16043 = G__16054;
i__16044 = G__16055;
continue;
} else {
var group_cmd = cljs.core.first(seq__16041__$1);
var G__16046_16056 = bolt.core.build_url(cljs.core.constant$keyword$url.cljs$core$IFn$_invoke$arity$1(group_cmd),cljs.core.map.cljs$core$IFn$_invoke$arity$2(encodeURIComponent,args));
window.open(G__16046_16056);

var G__16057 = cljs.core.next(seq__16041__$1);
var G__16058 = null;
var G__16059 = (0);
var G__16060 = (0);
seq__16041 = G__16057;
chunk__16042 = G__16058;
count__16043 = G__16059;
i__16044 = G__16060;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.seq(url)){
var redirect_url = bolt.core.build_url(url,cljs.core.map.cljs$core$IFn$_invoke$arity$2(encodeURIComponent,args));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,cljs.core.constant$keyword$message,clojure.string.replace_first("Redirecting with %s ...","%s",cljs.core.name(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cmd))));

return window.location = redirect_url;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,cljs.core.constant$keyword$error,[cljs.core.str("No command found for "),cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cmd))].join(''));

}
}
}
});
bolt.core.handle_event = (function bolt$core$handle_event(app,event,event_data){
console.log("Event: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([event,event_data], 0)));

var G__16063 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__16063) {
case "ui.search":
return bolt.core.handle_search_result(app,event_data);

break;
case "service.search":
return bolt.core.process_search(event_data,cljs.core.constant$keyword$event_DASH_ch.cljs$core$IFn$_invoke$arity$1((function (){var G__16064 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16064) : cljs.core.deref.call(null,G__16064));
})()));

break;
default:
return console.log("No event found for",event,event_data);

}
});
bolt.core.dom__GT_component = (function (){var G__16066 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16066) : cljs.core.atom.call(null,G__16066));
})();
bolt.core.debuggable = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$did_DASH_mount,(function (state){
var temp__4126__auto___16067 = cljs.core.constant$keyword$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state).getDOMNode();
if(cljs.core.truth_(temp__4126__auto___16067)){
var dom_16068 = temp__4126__auto___16067;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bolt.core.dom__GT_component,cljs.core.assoc,dom_16068,cljs.core.constant$keyword$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
} else {
}

return state;
})], null);
bolt.core.selector__GT_state = (function bolt$core$selector__GT_state(selector){
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__16072 = bolt.core.dom__GT_component;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16072) : cljs.core.deref.call(null,G__16072));
})(),(function (){var G__16073 = selector;
return document.querySelector(G__16073);
})());
if(cljs.core.truth_(temp__4124__auto__)){
var component = temp__4124__auto__;
var G__16074 = (component.props[":rum/state"]);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16074) : cljs.core.deref.call(null,G__16074));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["No component found"], 0));
}
});
bolt.core.submit_search = (function bolt$core$submit_search(e,ch,user_input){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$service$search,user_input], null));

return false;
});
var render_fn__11176__auto___16080 = (function (ref,attributes){
var attrs16076 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attributes,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$value,(function (){var G__16077 = ref;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16077) : cljs.core.deref.call(null,G__16077));
})(),cljs.core.constant$keyword$on_DASH_change,(function (p1__16075_SHARP_){
var G__16078 = ref;
var G__16079 = p1__16075_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16078,G__16079) : cljs.core.reset_BANG_.call(null,G__16078,G__16079));
})], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.interpreter.create_element,"input",((cljs.core.map_QMARK_(attrs16076))?sablono.interpreter.attributes(attrs16076):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16076))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16076)], null))));
});
var render_mixin__11177__auto___16081 = rum.render__GT_mixin(render_fn__11176__auto___16080);
var class__11178__auto___16082 = rum.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__11177__auto___16081], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.cursored,rum.cursored_watch], null)),"input");
var ctor__11179__auto___16083 = ((function (render_fn__11176__auto___16080,render_mixin__11177__auto___16081,class__11178__auto___16082){
return (function() { 
var G__16084__delegate = function (args__11180__auto__){
var state__11181__auto__ = rum.args__GT_state(args__11180__auto__);
return rum.element.cljs$core$IFn$_invoke$arity$variadic(class__11178__auto___16082,state__11181__auto__,cljs.core.array_seq([null], 0));
};
var G__16084 = function (var_args){
var args__11180__auto__ = null;
if (arguments.length > 0) {
var G__16085__i = 0, G__16085__a = new Array(arguments.length -  0);
while (G__16085__i < G__16085__a.length) {G__16085__a[G__16085__i] = arguments[G__16085__i + 0]; ++G__16085__i;}
  args__11180__auto__ = new cljs.core.IndexedSeq(G__16085__a,0);
} 
return G__16084__delegate.call(this,args__11180__auto__);};
G__16084.cljs$lang$maxFixedArity = 0;
G__16084.cljs$lang$applyTo = (function (arglist__16086){
var args__11180__auto__ = cljs.core.seq(arglist__16086);
return G__16084__delegate(args__11180__auto__);
});
G__16084.cljs$core$IFn$_invoke$arity$variadic = G__16084__delegate;
return G__16084;
})()
;})(render_fn__11176__auto___16080,render_mixin__11177__auto___16081,class__11178__auto___16082))
;
bolt.core.input = cljs.core.with_meta(ctor__11179__auto___16083,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$rum_SLASH_class,class__11178__auto___16082], null));
var render_fn__11176__auto___16108 = (function (app){
var G__16092 = "form";
var G__16093 = {"onSubmit": ((function (G__16092){
return (function (p1__16087_SHARP_){
return bolt.core.submit_search(p1__16087_SHARP_,cljs.core.constant$keyword$event_DASH_ch.cljs$core$IFn$_invoke$arity$1((function (){var G__16098 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16098) : cljs.core.deref.call(null,G__16098));
})()),cljs.core.constant$keyword$user_DASH_input.cljs$core$IFn$_invoke$arity$1((function (){var G__16099 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16099) : cljs.core.deref.call(null,G__16099));
})()));
});})(G__16092))
, "className": "jumbotron"};
var G__16094 = (function (){var attrs16089 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16092,G__16093){
return (function (p1__16088_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$value,cljs.core.name(p1__16088_SHARP_),cljs.core.constant$keyword$key,[cljs.core.str("command-"),cljs.core.str(cljs.core.name(p1__16088_SHARP_))].join('')], null)],null));
});})(G__16092,G__16093))
,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys((function (){return (bolt.core.commands_index.cljs$core$IFn$_invoke$arity$0 ? bolt.core.commands_index.cljs$core$IFn$_invoke$arity$0() : bolt.core.commands_index.call(null));
})())));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"datalist",((cljs.core.map_QMARK_(attrs16089))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$id,"commands"], null),attrs16089], 0))):{"id": "commands"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16089))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16089)], null))));
})();
var G__16095 = sablono.interpreter.interpret((function (){var G__16100 = rum.cursor(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$user_DASH_input], null));
var G__16101 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$autoFocus,"autofocus",cljs.core.constant$keyword$list,"commands",cljs.core.constant$keyword$id,"search_term"], null);
return (bolt.core.input.cljs$core$IFn$_invoke$arity$2 ? bolt.core.input.cljs$core$IFn$_invoke$arity$2(G__16100,G__16101) : bolt.core.input.call(null,G__16100,G__16101));
})());
var G__16096 = (function (){var G__16102 = "a";
var G__16103 = {"className": "btn btn-default mic", "href": "#", "onClick": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bolt.speech.toggle_speech,app)};
var G__16104 = (function (){var G__16105 = "img";
var G__16106 = {"id": "mic", "src": cljs.core.constant$keyword$mic_DASH_path.cljs$core$IFn$_invoke$arity$1((function (){var G__16107 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16107) : cljs.core.deref.call(null,G__16107));
})())};
return React.createElement(G__16105,G__16106);
})();
return React.createElement(G__16102,G__16103,G__16104);
})();
var G__16097 = sablono.interpreter.create_element("input",{"type": "submit", "value": "Search", "className": "btn btn-default btn-lg"});
return React.createElement(G__16092,G__16093,G__16094,G__16095,G__16096,G__16097);
});
var render_mixin__11177__auto___16109 = rum.render__GT_mixin(render_fn__11176__auto___16108);
var class__11178__auto___16110 = rum.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__11177__auto___16109], null),null),"search-form");
var ctor__11179__auto___16111 = ((function (render_fn__11176__auto___16108,render_mixin__11177__auto___16109,class__11178__auto___16110){
return (function() { 
var G__16112__delegate = function (args__11180__auto__){
var state__11181__auto__ = rum.args__GT_state(args__11180__auto__);
return rum.element.cljs$core$IFn$_invoke$arity$variadic(class__11178__auto___16110,state__11181__auto__,cljs.core.array_seq([null], 0));
};
var G__16112 = function (var_args){
var args__11180__auto__ = null;
if (arguments.length > 0) {
var G__16113__i = 0, G__16113__a = new Array(arguments.length -  0);
while (G__16113__i < G__16113__a.length) {G__16113__a[G__16113__i] = arguments[G__16113__i + 0]; ++G__16113__i;}
  args__11180__auto__ = new cljs.core.IndexedSeq(G__16113__a,0);
} 
return G__16112__delegate.call(this,args__11180__auto__);};
G__16112.cljs$lang$maxFixedArity = 0;
G__16112.cljs$lang$applyTo = (function (arglist__16114){
var args__11180__auto__ = cljs.core.seq(arglist__16114);
return G__16112__delegate(args__11180__auto__);
});
G__16112.cljs$core$IFn$_invoke$arity$variadic = G__16112__delegate;
return G__16112;
})()
;})(render_fn__11176__auto___16108,render_mixin__11177__auto___16109,class__11178__auto___16110))
;
bolt.core.search_form = cljs.core.with_meta(ctor__11179__auto___16111,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$rum_SLASH_class,class__11178__auto___16110], null));
bolt.core.event_loop = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$will_DASH_mount,(function (state){
var c__12724__auto___16149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___16149){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___16149){
return (function (state_16132){
var state_val_16133 = (state_16132[(1)]);
if((state_val_16133 === (7))){
var inst_16121 = (state_16132[(2)]);
var inst_16122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16121,(0),null);
var inst_16123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16121,(1),null);
var inst_16124 = bolt.core.handle_event(bolt.core.app_state,inst_16122,inst_16123);
var state_16132__$1 = (function (){var statearr_16134 = state_16132;
(statearr_16134[(7)] = inst_16124);

return statearr_16134;
})();
var statearr_16135_16150 = state_16132__$1;
(statearr_16135_16150[(2)] = null);

(statearr_16135_16150[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16133 === (6))){
var inst_16128 = (state_16132[(2)]);
var state_16132__$1 = state_16132;
var statearr_16136_16151 = state_16132__$1;
(statearr_16136_16151[(2)] = inst_16128);

(statearr_16136_16151[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16133 === (5))){
var state_16132__$1 = state_16132;
var statearr_16137_16152 = state_16132__$1;
(statearr_16137_16152[(2)] = null);

(statearr_16137_16152[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16133 === (4))){
var inst_16118 = (function (){var G__16138 = bolt.core.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16138) : cljs.core.deref.call(null,G__16138));
})();
var inst_16119 = cljs.core.constant$keyword$event_DASH_ch.cljs$core$IFn$_invoke$arity$1(inst_16118);
var state_16132__$1 = state_16132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16132__$1,(7),inst_16119);
} else {
if((state_val_16133 === (3))){
var inst_16130 = (state_16132[(2)]);
var state_16132__$1 = state_16132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16132__$1,inst_16130);
} else {
if((state_val_16133 === (2))){
var state_16132__$1 = state_16132;
var statearr_16139_16153 = state_16132__$1;
(statearr_16139_16153[(1)] = (4));



return cljs.core.constant$keyword$recur;
} else {
if((state_val_16133 === (1))){
var state_16132__$1 = state_16132;
var statearr_16141_16154 = state_16132__$1;
(statearr_16141_16154[(2)] = null);

(statearr_16141_16154[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__12724__auto___16149))
;
return ((function (switch__12644__auto__,c__12724__auto___16149){
return (function() {
var bolt$core$state_machine__12645__auto__ = null;
var bolt$core$state_machine__12645__auto____0 = (function (){
var statearr_16145 = [null,null,null,null,null,null,null,null];
(statearr_16145[(0)] = bolt$core$state_machine__12645__auto__);

(statearr_16145[(1)] = (1));

return statearr_16145;
});
var bolt$core$state_machine__12645__auto____1 = (function (state_16132){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_16132);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e16146){if((e16146 instanceof Object)){
var ex__12648__auto__ = e16146;
var statearr_16147_16155 = state_16132;
(statearr_16147_16155[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16132);

return cljs.core.constant$keyword$recur;
} else {
throw e16146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__16156 = state_16132;
state_16132 = G__16156;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
bolt$core$state_machine__12645__auto__ = function(state_16132){
switch(arguments.length){
case 0:
return bolt$core$state_machine__12645__auto____0.call(this);
case 1:
return bolt$core$state_machine__12645__auto____1.call(this,state_16132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bolt$core$state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = bolt$core$state_machine__12645__auto____0;
bolt$core$state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = bolt$core$state_machine__12645__auto____1;
return bolt$core$state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___16149))
})();
var state__12726__auto__ = (function (){var statearr_16148 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_16148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___16149);

return statearr_16148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___16149))
);


return state;
})], null);
var render_fn__11176__auto___16170 = (function (app){
var G__16161 = "div";
var G__16162 = {"className": "jumbotron"};
var G__16163 = (function (){var attrs16159 = ((cljs.core.seq(cljs.core.constant$keyword$user_DASH_input.cljs$core$IFn$_invoke$arity$1((function (){var G__16165 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16165) : cljs.core.deref.call(null,G__16165));
})())))?"Matching Commands":"All Commands");
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",((cljs.core.map_QMARK_(attrs16159))?sablono.interpreter.attributes(attrs16159):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16159))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16159)], null))));
})();
var G__16164 = (function (){var attrs16160 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16161,G__16162,G__16163){
return (function (p1__16157_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$li,[cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(p1__16157_SHARP_)),cljs.core.str((cljs.core.truth_(cljs.core.constant$keyword$alias.cljs$core$IFn$_invoke$arity$1(p1__16157_SHARP_))?[cljs.core.str(" ("),cljs.core.str(cljs.core.constant$keyword$alias.cljs$core$IFn$_invoke$arity$1(p1__16157_SHARP_)),cljs.core.str(")")].join(''):null)),cljs.core.str(": ")].join(''),(cljs.core.truth_(cljs.core.constant$keyword$names.cljs$core$IFn$_invoke$arity$1(p1__16157_SHARP_))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.constant$keyword$names.cljs$core$IFn$_invoke$arity$1(p1__16157_SHARP_)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,cljs.core.constant$keyword$url.cljs$core$IFn$_invoke$arity$1(p1__16157_SHARP_)], null),cljs.core.constant$keyword$url.cljs$core$IFn$_invoke$arity$1(p1__16157_SHARP_)], null))],null));
});})(G__16161,G__16162,G__16163))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$name,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__16161,G__16162,G__16163){
return (function (p1__16158_SHARP_){
var first_word = (function (){var or__4163__auto__ = cljs.core.re_find(/\S+/,cljs.core.constant$keyword$user_DASH_input.cljs$core$IFn$_invoke$arity$1((function (){var G__16167 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16167) : cljs.core.deref.call(null,G__16167));
})()));
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
return cljs.core.constant$keyword$user_DASH_input.cljs$core$IFn$_invoke$arity$1((function (){var G__16168 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16168) : cljs.core.deref.call(null,G__16168));
})());
}
})();
return (([cljs.core.str(cljs.core.constant$keyword$url.cljs$core$IFn$_invoke$arity$1(p1__16158_SHARP_))].join('').indexOf(first_word) > (-1))) || (([cljs.core.str(cljs.core.constant$keyword$alias.cljs$core$IFn$_invoke$arity$1(p1__16158_SHARP_))].join('').indexOf(first_word) > (-1))) || (([cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(p1__16158_SHARP_))].join('').indexOf(first_word) > (-1)));
});})(G__16161,G__16162,G__16163))
,cljs.core.constant$keyword$all_DASH_commands.cljs$core$IFn$_invoke$arity$1((function (){var G__16169 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16169) : cljs.core.deref.call(null,G__16169));
})()))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"ul",((cljs.core.map_QMARK_(attrs16160))?sablono.interpreter.attributes(attrs16160):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs16160))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs16160)], null))));
})();
return React.createElement(G__16161,G__16162,G__16163,G__16164);
});
var render_mixin__11177__auto___16171 = rum.render__GT_mixin(render_fn__11176__auto___16170);
var class__11178__auto___16172 = rum.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__11177__auto___16171], null),null),"commands-list");
var ctor__11179__auto___16173 = ((function (render_fn__11176__auto___16170,render_mixin__11177__auto___16171,class__11178__auto___16172){
return (function() { 
var G__16174__delegate = function (args__11180__auto__){
var state__11181__auto__ = rum.args__GT_state(args__11180__auto__);
return rum.element.cljs$core$IFn$_invoke$arity$variadic(class__11178__auto___16172,state__11181__auto__,cljs.core.array_seq([null], 0));
};
var G__16174 = function (var_args){
var args__11180__auto__ = null;
if (arguments.length > 0) {
var G__16175__i = 0, G__16175__a = new Array(arguments.length -  0);
while (G__16175__i < G__16175__a.length) {G__16175__a[G__16175__i] = arguments[G__16175__i + 0]; ++G__16175__i;}
  args__11180__auto__ = new cljs.core.IndexedSeq(G__16175__a,0);
} 
return G__16174__delegate.call(this,args__11180__auto__);};
G__16174.cljs$lang$maxFixedArity = 0;
G__16174.cljs$lang$applyTo = (function (arglist__16176){
var args__11180__auto__ = cljs.core.seq(arglist__16176);
return G__16174__delegate(args__11180__auto__);
});
G__16174.cljs$core$IFn$_invoke$arity$variadic = G__16174__delegate;
return G__16174;
})()
;})(render_fn__11176__auto___16170,render_mixin__11177__auto___16171,class__11178__auto___16172))
;
bolt.core.commands_list = cljs.core.with_meta(ctor__11179__auto___16173,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$rum_SLASH_class,class__11178__auto___16172], null));
var render_fn__11176__auto___16180 = (function (app){
return sablono.interpreter.interpret((function (){var map__16177 = rum.react(app);
var map__16177__$1 = ((cljs.core.seq_QMARK_(map__16177))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16177):map__16177);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16177__$1,cljs.core.constant$keyword$error);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16177__$1,cljs.core.constant$keyword$message);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Welcome to Bolt!"], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$className,"alert alert-danger"], null),error], null):null),(function (){var G__16178 = app;
return (bolt.core.search_form.cljs$core$IFn$_invoke$arity$1 ? bolt.core.search_form.cljs$core$IFn$_invoke$arity$1(G__16178) : bolt.core.search_form.call(null,G__16178));
})(),(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$className,"alert alert-success"], null),message], null):null),(function (){var G__16179 = app;
return (bolt.core.commands_list.cljs$core$IFn$_invoke$arity$1 ? bolt.core.commands_list.cljs$core$IFn$_invoke$arity$1(G__16179) : bolt.core.commands_list.call(null,G__16179));
})()], null);
})());
});
var render_mixin__11177__auto___16181 = rum.render__GT_mixin(render_fn__11176__auto___16180);
var class__11178__auto___16182 = rum.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__11177__auto___16181], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bolt.core.event_loop,rum.reactive], null)),"bolt-app");
var ctor__11179__auto___16183 = ((function (render_fn__11176__auto___16180,render_mixin__11177__auto___16181,class__11178__auto___16182){
return (function() { 
var G__16184__delegate = function (args__11180__auto__){
var state__11181__auto__ = rum.args__GT_state(args__11180__auto__);
return rum.element.cljs$core$IFn$_invoke$arity$variadic(class__11178__auto___16182,state__11181__auto__,cljs.core.array_seq([null], 0));
};
var G__16184 = function (var_args){
var args__11180__auto__ = null;
if (arguments.length > 0) {
var G__16185__i = 0, G__16185__a = new Array(arguments.length -  0);
while (G__16185__i < G__16185__a.length) {G__16185__a[G__16185__i] = arguments[G__16185__i + 0]; ++G__16185__i;}
  args__11180__auto__ = new cljs.core.IndexedSeq(G__16185__a,0);
} 
return G__16184__delegate.call(this,args__11180__auto__);};
G__16184.cljs$lang$maxFixedArity = 0;
G__16184.cljs$lang$applyTo = (function (arglist__16186){
var args__11180__auto__ = cljs.core.seq(arglist__16186);
return G__16184__delegate(args__11180__auto__);
});
G__16184.cljs$core$IFn$_invoke$arity$variadic = G__16184__delegate;
return G__16184;
})()
;})(render_fn__11176__auto___16180,render_mixin__11177__auto___16181,class__11178__auto___16182))
;
bolt.core.bolt_app = cljs.core.with_meta(ctor__11179__auto___16183,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$rum_SLASH_class,class__11178__auto___16182], null));
var action__15761__auto___16191 = (function (params__15762__auto__){
if(cljs.core.map_QMARK_(params__15762__auto__)){
var map__16187 = params__15762__auto__;
var map__16187__$1 = ((cljs.core.seq_QMARK_(map__16187))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16187):map__16187);
rum.mount((function (){var G__16188 = bolt.core.app_state;
return (bolt.core.bolt_app.cljs$core$IFn$_invoke$arity$1 ? bolt.core.bolt_app.cljs$core$IFn$_invoke$arity$1(G__16188) : bolt.core.bolt_app.call(null,G__16188));
})(),document.getElementById("app"));

if(cljs.core.truth_(cljs.core.re_find(/start/,window.location.search))){
return bolt.speech.toggle_speech(bolt.core.app_state,{"preventDefault": ((function (map__16187,map__16187__$1){
return (function (){
return null;
});})(map__16187,map__16187__$1))
});
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_(params__15762__auto__)){
var vec__16189 = params__15762__auto__;
rum.mount((function (){var G__16190 = bolt.core.app_state;
return (bolt.core.bolt_app.cljs$core$IFn$_invoke$arity$1 ? bolt.core.bolt_app.cljs$core$IFn$_invoke$arity$1(G__16190) : bolt.core.bolt_app.call(null,G__16190));
})(),document.getElementById("app"));

if(cljs.core.truth_(cljs.core.re_find(/start/,window.location.search))){
return bolt.speech.toggle_speech(bolt.core.app_state,{"preventDefault": ((function (vec__16189){
return (function (){
return null;
});})(vec__16189))
});
} else {
return null;
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__15761__auto___16191);

var action__15761__auto___16196 = (function (params__15762__auto__){
if(cljs.core.map_QMARK_(params__15762__auto__)){
var map__16192 = params__15762__auto__;
var map__16192__$1 = ((cljs.core.seq_QMARK_(map__16192))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16192):map__16192);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16192__$1,cljs.core.constant$keyword$command);
cljs.core.constant$keyword$will_DASH_mount.cljs$core$IFn$_invoke$arity$1(bolt.core.event_loop).call(null,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$event_DASH_ch.cljs$core$IFn$_invoke$arity$1((function (){var G__16193 = bolt.core.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16193) : cljs.core.deref.call(null,G__16193));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$service$search,command], null));
} else {
if(cljs.core.vector_QMARK_(params__15762__auto__)){
var map__16194 = params__15762__auto__;
var map__16194__$1 = ((cljs.core.seq_QMARK_(map__16194))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16194):map__16194);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16194__$1,cljs.core.constant$keyword$command);
cljs.core.constant$keyword$will_DASH_mount.cljs$core$IFn$_invoke$arity$1(bolt.core.event_loop).call(null,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$event_DASH_ch.cljs$core$IFn$_invoke$arity$1((function (){var G__16195 = bolt.core.app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16195) : cljs.core.deref.call(null,G__16195));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$service$search,command], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/to/*command",action__15761__auto___16196);

bolt.core.history = (new goog.History());
var G__16197_16200 = bolt.core.history;
var G__16198_16201 = goog.history.EventType.NAVIGATE;
var G__16199_16202 = ((function (G__16197_16200,G__16198_16201){
return (function (e){
return secretary.core.dispatch_BANG_(e.token);
});})(G__16197_16200,G__16198_16201))
;
goog.events.listen(G__16197_16200,G__16198_16201,G__16199_16202);
bolt.core.history.setEnabled(true);
