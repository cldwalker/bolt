// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');

secretary.core.IRouteMatches = (function (){var obj16355 = {};
return obj16355;
})();

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if((function (){var and__4151__auto__ = this$;
if(and__4151__auto__){
return this$.secretary$core$IRouteMatches$route_matches$arity$2;
} else {
return and__4151__auto__;
}
})()){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__4799__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4163__auto__ = (secretary.core.route_matches[(function (){var G__16359 = x__4799__auto__;
return goog.typeOf(G__16359);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (secretary.core.route_matches["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("IRouteMatches.route-matches",this$);
}
}
})().call(null,this$,route);
}
});


secretary.core.IRouteValue = (function (){var obj16361 = {};
return obj16361;
})();

secretary.core.route_value = (function secretary$core$route_value(this$){
if((function (){var and__4151__auto__ = this$;
if(and__4151__auto__){
return this$.secretary$core$IRouteValue$route_value$arity$1;
} else {
return and__4151__auto__;
}
})()){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__4799__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4163__auto__ = (secretary.core.route_value[(function (){var G__16365 = x__4799__auto__;
return goog.typeOf(G__16365);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (secretary.core.route_value["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("IRouteValue.route-value",this$);
}
}
})().call(null,this$);
}
});


secretary.core.IRenderRoute = (function (){var obj16367 = {};
return obj16367;
})();

secretary.core.render_route = (function() {
var secretary$core$render_route = null;
var secretary$core$render_route__1 = (function (this$){
if((function (){var and__4151__auto__ = this$;
if(and__4151__auto__){
return this$.secretary$core$IRenderRoute$render_route$arity$1;
} else {
return and__4151__auto__;
}
})()){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__4799__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4163__auto__ = (secretary.core.render_route[(function (){var G__16373 = x__4799__auto__;
return goog.typeOf(G__16373);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (secretary.core.render_route["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$);
}
});
var secretary$core$render_route__2 = (function (this$,params){
if((function (){var and__4151__auto__ = this$;
if(and__4151__auto__){
return this$.secretary$core$IRenderRoute$render_route$arity$2;
} else {
return and__4151__auto__;
}
})()){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__4799__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4163__auto__ = (secretary.core.render_route[(function (){var G__16375 = x__4799__auto__;
return goog.typeOf(G__16375);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (secretary.core.render_route["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
})().call(null,this$,params);
}
});
secretary$core$render_route = function(this$,params){
switch(arguments.length){
case 1:
return secretary$core$render_route__1.call(this,this$);
case 2:
return secretary$core$render_route__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
secretary$core$render_route.cljs$core$IFn$_invoke$arity$1 = secretary$core$render_route__1;
secretary$core$render_route.cljs$core$IFn$_invoke$arity$2 = secretary$core$render_route__2;
return secretary$core$render_route;
})()
;

secretary.core._STAR_config_STAR_ = (function (){var G__16376 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$prefix,""], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16376) : cljs.core.atom.call(null,G__16376));
})();
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__16378 = secretary.core._STAR_config_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16378) : cljs.core.deref.call(null,G__16378));
})(),path__$1);
});
/**
 * Associates a value val for *config* at path.
 */
secretary.core.set_config_BANG_ = (function secretary$core$set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
/**
 * Given a key and a value return and encoded key-value pair.
 */
secretary.core.encode_pair = (function (){var method_table__5058__auto__ = (function (){var G__16379 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16379) : cljs.core.atom.call(null,G__16379));
})();
var prefer_table__5059__auto__ = (function (){var G__16380 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16380) : cljs.core.atom.call(null,G__16380));
})();
var method_cache__5060__auto__ = (function (){var G__16381 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16381) : cljs.core.atom.call(null,G__16381));
})();
var cached_hierarchy__5061__auto__ = (function (){var G__16382 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16382) : cljs.core.atom.call(null,G__16382));
})();
var hierarchy__5062__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("secretary.core","encode-pair"),((function (method_table__5058__auto__,prefer_table__5059__auto__,method_cache__5060__auto__,cached_hierarchy__5061__auto__,hierarchy__5062__auto__){
return (function (p__16383){
var vec__16384 = p__16383;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16384,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16384,(1),null);
if((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v))){
return cljs.core.constant$keyword$secretary$core_SLASH_sequential;
} else {
if((function (){var or__4163__auto__ = cljs.core.map_QMARK_(v);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var G__16386 = v;
if(G__16386){
var bit__4837__auto__ = (G__16386.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__4837__auto__) || (G__16386.cljs$core$IRecord$)){
return true;
} else {
if((!G__16386.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__16386);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__16386);
}
}
})()){
return cljs.core.constant$keyword$secretary$core_SLASH_map;
} else {
return null;
}
}
});})(method_table__5058__auto__,prefer_table__5059__auto__,method_cache__5060__auto__,cached_hierarchy__5061__auto__,hierarchy__5062__auto__))
,cljs.core.constant$keyword$default,hierarchy__5062__auto__,method_table__5058__auto__,prefer_table__5059__auto__,method_cache__5060__auto__,cached_hierarchy__5061__auto__));
})();
secretary.core.key_index = (function() {
var secretary$core$key_index = null;
var secretary$core$key_index__1 = (function (k){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("[]")].join('');
});
var secretary$core$key_index__2 = (function (k,index){
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("["),cljs.core.str(index),cljs.core.str("]")].join('');
});
secretary$core$key_index = function(k,index){
switch(arguments.length){
case 1:
return secretary$core$key_index__1.call(this,k);
case 2:
return secretary$core$key_index__2.call(this,k,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
secretary$core$key_index.cljs$core$IFn$_invoke$arity$1 = secretary$core$key_index__1;
secretary$core$key_index.cljs$core$IFn$_invoke$arity$2 = secretary$core$key_index__2;
return secretary$core$key_index;
})()
;
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$secretary$core_SLASH_sequential,(function (p__16387){
var vec__16388 = p__16387;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16388,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16388,(1),null);
var encoded = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__16388,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$1(k),x], null));
var G__16389 = pair;
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__16389) : secretary.core.encode_pair.call(null,G__16389));
});})(vec__16388,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$secretary$core_SLASH_map,(function (p__16390){
var vec__16391 = p__16390;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16391,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16391,(1),null);
var encoded = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__16391,k,v){
return (function (p__16392){
var vec__16393 = p__16392;
var ik = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16393,(0),null);
var iv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16393,(1),null);
var G__16394 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,cljs.core.name(ik)),iv], null);
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__16394) : secretary.core.encode_pair.call(null,G__16394));
});})(vec__16391,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$default,(function (p__16395){
var vec__16396 = p__16395;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16396,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16396,(1),null);
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str((function (){var G__16397 = [cljs.core.str(v)].join('');
return (secretary.core.encode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode.cljs$core$IFn$_invoke$arity$1(G__16397) : secretary.core.encode.call(null,G__16397));
})())].join('');
}));
/**
 * Convert a map of query parameters into url encoded string.
 */
secretary.core.encode_query_params = (function secretary$core$encode_query_params(query_params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode_pair,query_params));
});
/**
 * Like js/encodeURIComponent excepts ignore slashes.
 */
secretary.core.encode_uri = (function secretary$core$encode_uri(uri){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode,clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
 * Parse a value from a serialized query-string key index. If the
 * index value is empty 0 is returned, if it's a digit it returns the
 * js/parseInt value, otherwise it returns the extracted index.
 */
secretary.core.parse_path = (function secretary$core$parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq(index_re,path);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (index_re,parts){
return (function (p__16401){
var vec__16402 = p__16401;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16402,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16402,(1),null);
if(cljs.core.empty_QMARK_(part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,part))){
var G__16403 = part;
return parseInt(G__16403);
} else {
return part;

}
}
});})(index_re,parts))
,parts);
});
/**
 * Return a key path for a serialized query-string entry.
 * 
 * Ex.
 * 
 * (key-parse "foo[][a][][b]")
 * ;; => ("foo" 0 "a" 0 "b")
 * 
 */
secretary.core.key_parse = (function secretary$core$key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__16405 = cljs.core.re_matches(re,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16405,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16405,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16405,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path(path):null);
return cljs.core.cons(key,parsed_path);
});
/**
 * Like assoc-in but numbers in path create vectors instead of maps.
 * 
 * Ex.
 * 
 * (assoc-in-query-params {} ["foo" 0] 1)
 * ;; => {"foo" [1]}
 * 
 * (assoc-in-query-params {} ["foo" 0 "a"] 1)
 * ;; => {"foo" [{"a" 1}]}
 * 
 */
secretary.core.assoc_in_query_params = (function secretary$core$assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),xs);
}),xs);
});
var hs = heads(path);
var m__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (heads,hs){
return (function (m__$1,h){
if((typeof cljs.core.last(h) === 'number') && (!(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.butlast(h)))))){
return cljs.core.assoc_in(m__$1,cljs.core.butlast(h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
});})(heads,hs))
,m,hs);
if((cljs.core.last(path) === (0))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,cljs.core.butlast(path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in(m__$1,path,v);
}
});
/**
 * Extract a map of query parameters from a query string.
 */
secretary.core.decode_query_params = (function secretary$core$decode_query_params(query_string){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/);
var params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parts){
return (function (m,part){
var vec__16408 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(part,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16408,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16408,(1),null);
return secretary.core.assoc_in_query_params(m,secretary.core.key_parse(k),(function (){var G__16409 = v;
return (secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(G__16409) : secretary.core.decode.call(null,G__16409));
})());
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys(params);
return params__$1;
});
/**
 * Like re-matches but result is a always vector. If re does not
 * capture matches then it will return a vector of [m m] as if it had a
 * single capture. Other wise it maintains consistent behavior with
 * re-matches.
 */
secretary.core.re_matches_STAR_ = (function secretary$core$re_matches_STAR_(re,s){
var ms = cljs.core.re_matches(re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_(ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set("\\.*+|?()[]{}$^");
secretary.core.re_escape = (function secretary$core$re_escape(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,c){
if(cljs.core.truth_((function (){var G__16411 = c;
return (secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1(G__16411) : secretary.core.re_escape_chars.call(null,G__16411));
})())){
return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
/**
 * Attempt to lex a single token from s with clauses. Each clause is a
 * pair of [regexp action] where action is a function. regexp is
 * expected to begin with ^ and contain a single capture. If the
 * attempt is successful a vector of [s-without-token (action capture)]
 * is returned. Otherwise the result is nil.
 */
secretary.core.lex_STAR_ = (function secretary$core$lex_STAR_(s,clauses){
return cljs.core.some((function (p__16416){
var vec__16417 = p__16416;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16417,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16417,(1),null);
var temp__4126__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__16418 = temp__4126__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16418,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16418,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(m)),(function (){var G__16419 = c;
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__16419) : action.call(null,G__16419));
})()], null);
} else {
return null;
}
}),clauses);
});
/**
 * Return a pair of [regex params]. regex is a compiled regular
 * expression for matching routes. params is a list of route param
 * names (:*, :id, etc.).
 */
secretary.core.lex_route = (function secretary$core$lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(s__$1)){
var vec__16422 = secretary.core.lex_STAR_(s__$1,clauses);
var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16422,(0),null);
var vec__16423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16422,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16423,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16423,(1),null);
var G__16424 = s__$2;
var G__16425 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__16426 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,p);
s__$1 = G__16424;
pattern = G__16425;
params = G__16426;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
 * Given a route return an instance of IRouteMatches.
 */
secretary.core.compile_route = (function secretary$core$compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq(v))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v):cljs.core.constant$keyword$_STAR_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape(v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__16432 = secretary.core.lex_route(orig_route,clauses);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16432,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16432,(1),null);
if(typeof secretary.core.t16433 !== 'undefined'){
} else {

/**
* @constructor
*/
secretary.core.t16433 = (function (params,re,vec__16432,clauses,orig_route,compile_route,meta16434){
this.params = params;
this.re = re;
this.vec__16432 = vec__16432;
this.clauses = clauses;
this.orig_route = orig_route;
this.compile_route = compile_route;
this.meta16434 = meta16434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
secretary.core.t16433.prototype.secretary$core$IRouteMatches$ = true;

secretary.core.t16433.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__16432,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__4126__auto__ = secretary.core.re_matches_STAR_(self__.re,route);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__16436 = temp__4126__auto__;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16436,(0),null);
var ms = cljs.core.nthnext(vec__16436,(1));
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(self__.params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.decode,ms)))], 0));
} else {
return null;
}
});})(clauses,vec__16432,re,params))
;

secretary.core.t16433.prototype.secretary$core$IRouteValue$ = true;

secretary.core.t16433.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__16432,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__16432,re,params))
;

secretary.core.t16433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__16432,re,params){
return (function (_16435){
var self__ = this;
var _16435__$1 = this;
return self__.meta16434;
});})(clauses,vec__16432,re,params))
;

secretary.core.t16433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__16432,re,params){
return (function (_16435,meta16434__$1){
var self__ = this;
var _16435__$1 = this;
return (new secretary.core.t16433(self__.params,self__.re,self__.vec__16432,self__.clauses,self__.orig_route,self__.compile_route,meta16434__$1));
});})(clauses,vec__16432,re,params))
;

secretary.core.t16433.cljs$lang$type = true;

secretary.core.t16433.cljs$lang$ctorStr = "secretary.core/t16433";

secretary.core.t16433.cljs$lang$ctorPrWriter = ((function (clauses,vec__16432,re,params){
return (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"secretary.core/t16433");
});})(clauses,vec__16432,re,params))
;

secretary.core.__GT_t16433 = ((function (clauses,vec__16432,re,params){
return (function secretary$core$compile_route_$___GT_t16433(params__$1,re__$1,vec__16432__$1,clauses__$1,orig_route__$1,compile_route__$1,meta16434){
return (new secretary.core.t16433(params__$1,re__$1,vec__16432__$1,clauses__$1,orig_route__$1,compile_route__$1,meta16434));
});})(clauses,vec__16432,re,params))
;

}

return (new secretary.core.t16433(params,re,vec__16432,clauses,orig_route,secretary$core$compile_route,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * @param {...*} var_args
 */
secretary.core.render_route_STAR_ = (function() { 
var secretary$core$render_route_STAR___delegate = function (obj,args){
if((function (){var G__16438 = obj;
if(G__16438){
var bit__4837__auto__ = null;
if(cljs.core.truth_((function (){var or__4163__auto__ = bit__4837__auto__;
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
return G__16438.secretary$core$IRenderRoute$;
}
})())){
return true;
} else {
if((!G__16438.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__16438);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__16438);
}
})()){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route,obj,args);
} else {
return null;
}
};
var secretary$core$render_route_STAR_ = function (obj,var_args){
var args = null;
if (arguments.length > 1) {
var G__16439__i = 0, G__16439__a = new Array(arguments.length -  1);
while (G__16439__i < G__16439__a.length) {G__16439__a[G__16439__i] = arguments[G__16439__i + 1]; ++G__16439__i;}
  args = new cljs.core.IndexedSeq(G__16439__a,0);
} 
return secretary$core$render_route_STAR___delegate.call(this,obj,args);};
secretary$core$render_route_STAR_.cljs$lang$maxFixedArity = 1;
secretary$core$render_route_STAR_.cljs$lang$applyTo = (function (arglist__16440){
var obj = cljs.core.first(arglist__16440);
var args = cljs.core.rest(arglist__16440);
return secretary$core$render_route_STAR___delegate(obj,args);
});
secretary$core$render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = secretary$core$render_route_STAR___delegate;
return secretary$core$render_route_STAR_;
})()
;
secretary.core._STAR_routes_STAR_ = (function (){var G__16441 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16441) : cljs.core.atom.call(null,G__16441));
})();
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route(obj):obj);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv((function (p__16444){
var vec__16445 = p__16444;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16445,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16445,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
var G__16448 = secretary.core._STAR_routes_STAR_;
var G__16449 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16448,G__16449) : cljs.core.reset_BANG_.call(null,G__16448,G__16449));
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some((function (p__16453){
var vec__16454 = p__16453;
var compiled_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16454,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16454,(1),null);
var temp__4126__auto__ = secretary.core.route_matches(compiled_route,route);
if(cljs.core.truth_(temp__4126__auto__)){
var params = temp__4126__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$action,action,cljs.core.constant$keyword$params,params,cljs.core.constant$keyword$route,compiled_route], null);
} else {
return null;
}
}),(function (){var G__16455 = secretary.core._STAR_routes_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16455) : cljs.core.deref.call(null,G__16455));
})());
});
/**
 * Returns original route value as set in defroute when passed a URI path.
 */
secretary.core.locate_route_value = (function secretary$core$locate_route_value(uri){
return secretary.core.route_value(cljs.core.constant$keyword$route.cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route(uri)));
});
secretary.core.prefix = (function secretary$core$prefix(){
return [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$prefix], null)))].join('');
});
secretary.core.uri_without_prefix = (function secretary$core$uri_without_prefix(uri){
return clojure.string.replace(uri,cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(secretary.core.prefix())].join('')),"");
});
/**
 * Ensures that the uri has a leading slash
 */
secretary.core.uri_with_leading_slash = (function secretary$core$uri_with_leading_slash(uri){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(uri))){
return uri;
} else {
return [cljs.core.str("/"),cljs.core.str(uri)].join('');
}
});
/**
 * Dispatch an action for a given route if it matches the URI path.
 */
secretary.core.dispatch_BANG_ = (function secretary$core$dispatch_BANG_(uri){
var vec__16459 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(secretary.core.uri_without_prefix(uri),/\?/);
var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16459,(0),null);
var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16459,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash(uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$query_DASH_params,secretary.core.decode_query_params(query_string)], null):null);
var map__16460 = secretary.core.locate_route(uri_path__$1);
var map__16460__$1 = ((cljs.core.seq_QMARK_(map__16460))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16460):map__16460);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16460__$1,cljs.core.constant$keyword$params);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16460__$1,cljs.core.constant$keyword$action);
var action__$1 = (function (){var or__4163__auto__ = action;
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,query_params], 0));
var G__16461 = params__$1;
return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(G__16461) : action__$1.call(null,G__16461));
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__16464){
var vec__16465 = p__16464;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16465,(0),null);
var validation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16465,(1),null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,key);
if(cljs.core.truth_(cljs.core.re_matches(validation,value))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),validations));
});
secretary.core.params_valid_QMARK_ = (function secretary$core$params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_(secretary.core.invalid_params(params,validations));
});
cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__16466,route){
var vec__16467 = p__16466;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16467,(0),null);
var validations = cljs.core.nthnext(vec__16467,(1));
var vec__16468 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16468,(0),null);
var validations__$1 = cljs.core.nthnext(vec__16468,(1));
var params = secretary.core.compile_route(route_string__$1).secretary$core$IRouteMatches$route_matches$arity$2(null,route);
if(secretary.core.params_valid_QMARK_(params,validations__$1)){
return params;
} else {
return null;
}
});

RegExp.prototype.secretary$core$IRouteMatches$ = true;

RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__4126__auto__ = secretary.core.re_matches_STAR_(this$__$1,route);
if(cljs.core.truth_(temp__4126__auto__)){
var vec__16469 = temp__4126__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16469,(0),null);
var ms = cljs.core.nthnext(vec__16469,(1));
return cljs.core.vec(ms);
} else {
return null;
}
});

(secretary.core.IRouteMatches["string"] = true);

(secretary.core.route_matches["string"] = (function (this$,route){
return secretary.core.compile_route(this$).secretary$core$IRouteMatches$route_matches$arity$2(null,route);
}));
cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__16470){
var vec__16471 = p__16470;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16471,(0),null);
var validations = cljs.core.nthnext(vec__16471,(1));
var vec__16472 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16472,(0),null);
var validations__$1 = cljs.core.nthnext(vec__16472,(1));
return cljs.core.vec(cljs.core.cons(secretary.core.route_value(route_string__$1),validations__$1));
});

RegExp.prototype.secretary$core$IRouteValue$ = true;

RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

(secretary.core.IRouteValue["string"] = true);

(secretary.core.route_value["string"] = (function (this$){
return secretary.core.compile_route(this$).secretary$core$IRouteValue$route_value$arity$1(null);
}));
cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__16473,params){
var vec__16474 = p__16473;
var route_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16474,(0),null);
var validations = cljs.core.nthnext(vec__16474,(1));
var vec__16475 = this;
var route_string__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16475,(0),null);
var validations__$1 = cljs.core.nthnext(vec__16475,(1));
var invalid = secretary.core.invalid_params(params,validations__$1);
if(cljs.core.empty_QMARK_(invalid)){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(route_string__$1,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not build route: invalid params",invalid);
}
});

(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function() {
var G__16479 = null;
var G__16479__1 = (function (this$){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__16479__2 = (function (this$,params){
var map__16476 = params;
var map__16476__$1 = ((cljs.core.seq_QMARK_(map__16476))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16476):map__16476);
var m = map__16476__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16476__$1,cljs.core.constant$keyword$query_DASH_params);
var a = (function (){var G__16477 = m;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16477) : cljs.core.atom.call(null,G__16477));
})();
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__16476,map__16476__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($1,"*"))?$1:cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,(1))));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__16478 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16478) : cljs.core.deref.call(null,G__16478));
})(),lookup);
var replacement = ((cljs.core.sequential_QMARK_(v))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,lookup,cljs.core.next(v));

return secretary.core.encode_uri(cljs.core.first(v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri(v):$1));
return replacement;
});})(map__16476,map__16476__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$prefix], null))),cljs.core.str(path)].join('');
var temp__4124__auto__ = (function (){var and__4151__auto__ = query_params;
if(cljs.core.truth_(and__4151__auto__)){
return secretary.core.encode_query_params(query_params);
} else {
return and__4151__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var query_string = temp__4124__auto__;
return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else {
return path__$1;
}
});
G__16479 = function(this$,params){
switch(arguments.length){
case 1:
return G__16479__1.call(this,this$);
case 2:
return G__16479__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16479.cljs$core$IFn$_invoke$arity$1 = G__16479__1;
G__16479.cljs$core$IFn$_invoke$arity$2 = G__16479__2;
return G__16479;
})()
);
