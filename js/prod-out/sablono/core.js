// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__16796__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__16795 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(0),null);
var body = cljs.core.nthnext(vec__16795,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__16796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16797__i = 0, G__16797__a = new Array(arguments.length -  0);
while (G__16797__i < G__16797__a.length) {G__16797__a[G__16797__i] = arguments[G__16797__i + 0]; ++G__16797__i;}
  args = new cljs.core.IndexedSeq(G__16797__a,0);
} 
return G__16796__delegate.call(this,args);};
G__16796.cljs$lang$maxFixedArity = 0;
G__16796.cljs$lang$applyTo = (function (arglist__16798){
var args = cljs.core.seq(arglist__16798);
return G__16796__delegate(args);
});
G__16796.cljs$core$IFn$_invoke$arity$variadic = G__16796__delegate;
return G__16796;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4917__auto__ = (function sablono$core$update_arglists_$_iter__16805(s__16806){
return (new cljs.core.LazySeq(null,(function (){
var s__16806__$1 = s__16806;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16806__$1);
if(temp__4126__auto__){
var s__16806__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16806__$2)){
var c__4915__auto__ = cljs.core.chunk_first(s__16806__$2);
var size__4916__auto__ = cljs.core.count(c__4915__auto__);
var b__16808 = cljs.core.chunk_buffer(size__4916__auto__);
if((function (){var i__16807 = (0);
while(true){
if((i__16807 < size__4916__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4915__auto__,i__16807);
cljs.core.chunk_append(b__16808,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__16811 = (i__16807 + (1));
i__16807 = G__16811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16808),sablono$core$update_arglists_$_iter__16805(cljs.core.chunk_rest(s__16806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16808),null);
}
} else {
var args = cljs.core.first(s__16806__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__16805(cljs.core.rest(s__16806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4917__auto__(arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
var G__16813 = element;
return React.renderToString(G__16813);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
var G__16815 = element;
return React.renderToStaticMarkup(G__16815);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 * @param {...*} var_args
 */
sablono.core.include_css = (function() { 
var sablono$core$include_css__delegate = function (styles){
var iter__4917__auto__ = (function sablono$core$include_css_$_iter__16822(s__16823){
return (new cljs.core.LazySeq(null,(function (){
var s__16823__$1 = s__16823;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16823__$1);
if(temp__4126__auto__){
var s__16823__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16823__$2)){
var c__4915__auto__ = cljs.core.chunk_first(s__16823__$2);
var size__4916__auto__ = cljs.core.count(c__4915__auto__);
var b__16825 = cljs.core.chunk_buffer(size__4916__auto__);
if((function (){var i__16824 = (0);
while(true){
if((i__16824 < size__4916__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4915__auto__,i__16824);
cljs.core.chunk_append(b__16825,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"text/css",cljs.core.constant$keyword$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$rel,"stylesheet"], null)], null));

var G__16828 = (i__16824 + (1));
i__16824 = G__16828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16825),sablono$core$include_css_$_iter__16822(cljs.core.chunk_rest(s__16823__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16825),null);
}
} else {
var style = cljs.core.first(s__16823__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"text/css",cljs.core.constant$keyword$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$rel,"stylesheet"], null)], null),sablono$core$include_css_$_iter__16822(cljs.core.rest(s__16823__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4917__auto__(styles);
};
var sablono$core$include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__16829__i = 0, G__16829__a = new Array(arguments.length -  0);
while (G__16829__i < G__16829__a.length) {G__16829__a[G__16829__i] = arguments[G__16829__i + 0]; ++G__16829__i;}
  styles = new cljs.core.IndexedSeq(G__16829__a,0);
} 
return sablono$core$include_css__delegate.call(this,styles);};
sablono$core$include_css.cljs$lang$maxFixedArity = 0;
sablono$core$include_css.cljs$lang$applyTo = (function (arglist__16830){
var styles = cljs.core.seq(arglist__16830);
return sablono$core$include_css__delegate(styles);
});
sablono$core$include_css.cljs$core$IFn$_invoke$arity$variadic = sablono$core$include_css__delegate;
return sablono$core$include_css;
})()
;
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__16835 = (function (){return goog.dom.getDocument();
})().body;
var G__16836 = (function (){var G__16837 = "script";
var G__16838 = {"src": src};
return goog.dom.createDom(G__16837,G__16838);
})();
return goog.dom.appendChild(G__16835,G__16836);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 * @param {...*} var_args
 */
sablono.core.link_to16839 = (function() { 
var sablono$core$link_to16839__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var sablono$core$link_to16839 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__16840__i = 0, G__16840__a = new Array(arguments.length -  1);
while (G__16840__i < G__16840__a.length) {G__16840__a[G__16840__i] = arguments[G__16840__i + 1]; ++G__16840__i;}
  content = new cljs.core.IndexedSeq(G__16840__a,0);
} 
return sablono$core$link_to16839__delegate.call(this,url,content);};
sablono$core$link_to16839.cljs$lang$maxFixedArity = 1;
sablono$core$link_to16839.cljs$lang$applyTo = (function (arglist__16841){
var url = cljs.core.first(arglist__16841);
var content = cljs.core.rest(arglist__16841);
return sablono$core$link_to16839__delegate(url,content);
});
sablono$core$link_to16839.cljs$core$IFn$_invoke$arity$variadic = sablono$core$link_to16839__delegate;
return sablono$core$link_to16839;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to16839);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 * @param {...*} var_args
 */
sablono.core.mail_to16842 = (function() { 
var sablono$core$mail_to16842__delegate = function (e_mail,p__16843){
var vec__16845 = p__16843;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16845,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4163__auto__ = content;
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
return e_mail;
}
})()], null);
};
var sablono$core$mail_to16842 = function (e_mail,var_args){
var p__16843 = null;
if (arguments.length > 1) {
var G__16846__i = 0, G__16846__a = new Array(arguments.length -  1);
while (G__16846__i < G__16846__a.length) {G__16846__a[G__16846__i] = arguments[G__16846__i + 1]; ++G__16846__i;}
  p__16843 = new cljs.core.IndexedSeq(G__16846__a,0);
} 
return sablono$core$mail_to16842__delegate.call(this,e_mail,p__16843);};
sablono$core$mail_to16842.cljs$lang$maxFixedArity = 1;
sablono$core$mail_to16842.cljs$lang$applyTo = (function (arglist__16847){
var e_mail = cljs.core.first(arglist__16847);
var p__16843 = cljs.core.rest(arglist__16847);
return sablono$core$mail_to16842__delegate(e_mail,p__16843);
});
sablono$core$mail_to16842.cljs$core$IFn$_invoke$arity$variadic = sablono$core$mail_to16842__delegate;
return sablono$core$mail_to16842;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to16842);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list16848 = (function sablono$core$unordered_list16848(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul,(function (){var iter__4917__auto__ = (function sablono$core$unordered_list16848_$_iter__16855(s__16856){
return (new cljs.core.LazySeq(null,(function (){
var s__16856__$1 = s__16856;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16856__$1);
if(temp__4126__auto__){
var s__16856__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16856__$2)){
var c__4915__auto__ = cljs.core.chunk_first(s__16856__$2);
var size__4916__auto__ = cljs.core.count(c__4915__auto__);
var b__16858 = cljs.core.chunk_buffer(size__4916__auto__);
if((function (){var i__16857 = (0);
while(true){
if((i__16857 < size__4916__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4915__auto__,i__16857);
cljs.core.chunk_append(b__16858,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,x], null));

var G__16861 = (i__16857 + (1));
i__16857 = G__16861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16858),sablono$core$unordered_list16848_$_iter__16855(cljs.core.chunk_rest(s__16856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16858),null);
}
} else {
var x = cljs.core.first(s__16856__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,x], null),sablono$core$unordered_list16848_$_iter__16855(cljs.core.rest(s__16856__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4917__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list16848);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list16862 = (function sablono$core$ordered_list16862(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ol,(function (){var iter__4917__auto__ = (function sablono$core$ordered_list16862_$_iter__16869(s__16870){
return (new cljs.core.LazySeq(null,(function (){
var s__16870__$1 = s__16870;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16870__$1);
if(temp__4126__auto__){
var s__16870__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16870__$2)){
var c__4915__auto__ = cljs.core.chunk_first(s__16870__$2);
var size__4916__auto__ = cljs.core.count(c__4915__auto__);
var b__16872 = cljs.core.chunk_buffer(size__4916__auto__);
if((function (){var i__16871 = (0);
while(true){
if((i__16871 < size__4916__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4915__auto__,i__16871);
cljs.core.chunk_append(b__16872,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,x], null));

var G__16875 = (i__16871 + (1));
i__16871 = G__16875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16872),sablono$core$ordered_list16862_$_iter__16869(cljs.core.chunk_rest(s__16870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16872),null);
}
} else {
var x = cljs.core.first(s__16870__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,x], null),sablono$core$ordered_list16862_$_iter__16869(cljs.core.rest(s__16870__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4917__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list16862);
/**
 * Create an image element.
 */
sablono.core.image16876 = (function() {
var sablono$core$image16876 = null;
var sablono$core$image16876__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var sablono$core$image16876__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$alt,alt], null)], null);
});
sablono$core$image16876 = function(src,alt){
switch(arguments.length){
case 1:
return sablono$core$image16876__1.call(this,src);
case 2:
return sablono$core$image16876__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$image16876.cljs$core$IFn$_invoke$arity$1 = sablono$core$image16876__1;
sablono$core$image16876.cljs$core$IFn$_invoke$arity$2 = sablono$core$image16876__2;
return sablono$core$image16876;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image16876);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16877_SHARP_,p2__16878_SHARP_){
return [cljs.core.str(p1__16877_SHARP_),cljs.core.str("["),cljs.core.str(p2__16878_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16879_SHARP_,p2__16880_SHARP_){
return [cljs.core.str(p1__16879_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16880_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,type,cljs.core.constant$keyword$name,sablono.core.make_name(name),cljs.core.constant$keyword$id,sablono.core.make_id(name),cljs.core.constant$keyword$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field16881 = (function() {
var sablono$core$color_field16881 = null;
var sablono$core$color_field16881__1 = (function (name__10896__auto__){
return sablono$core$color_field16881.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$color_field16881__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$color_field16881 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$color_field16881__1.call(this,name__10896__auto__);
case 2:
return sablono$core$color_field16881__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$color_field16881.cljs$core$IFn$_invoke$arity$1 = sablono$core$color_field16881__1;
sablono$core$color_field16881.cljs$core$IFn$_invoke$arity$2 = sablono$core$color_field16881__2;
return sablono$core$color_field16881;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field16881);

/**
 * Creates a date input field.
 */
sablono.core.date_field16884 = (function() {
var sablono$core$date_field16884 = null;
var sablono$core$date_field16884__1 = (function (name__10896__auto__){
return sablono$core$date_field16884.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$date_field16884__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$date_field16884 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$date_field16884__1.call(this,name__10896__auto__);
case 2:
return sablono$core$date_field16884__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$date_field16884.cljs$core$IFn$_invoke$arity$1 = sablono$core$date_field16884__1;
sablono$core$date_field16884.cljs$core$IFn$_invoke$arity$2 = sablono$core$date_field16884__2;
return sablono$core$date_field16884;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field16884);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field16887 = (function() {
var sablono$core$datetime_field16887 = null;
var sablono$core$datetime_field16887__1 = (function (name__10896__auto__){
return sablono$core$datetime_field16887.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$datetime_field16887__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$datetime_field16887 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$datetime_field16887__1.call(this,name__10896__auto__);
case 2:
return sablono$core$datetime_field16887__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$datetime_field16887.cljs$core$IFn$_invoke$arity$1 = sablono$core$datetime_field16887__1;
sablono$core$datetime_field16887.cljs$core$IFn$_invoke$arity$2 = sablono$core$datetime_field16887__2;
return sablono$core$datetime_field16887;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field16887);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field16890 = (function() {
var sablono$core$datetime_local_field16890 = null;
var sablono$core$datetime_local_field16890__1 = (function (name__10896__auto__){
return sablono$core$datetime_local_field16890.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$datetime_local_field16890__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$datetime_local_field16890 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$datetime_local_field16890__1.call(this,name__10896__auto__);
case 2:
return sablono$core$datetime_local_field16890__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$datetime_local_field16890.cljs$core$IFn$_invoke$arity$1 = sablono$core$datetime_local_field16890__1;
sablono$core$datetime_local_field16890.cljs$core$IFn$_invoke$arity$2 = sablono$core$datetime_local_field16890__2;
return sablono$core$datetime_local_field16890;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field16890);

/**
 * Creates a email input field.
 */
sablono.core.email_field16893 = (function() {
var sablono$core$email_field16893 = null;
var sablono$core$email_field16893__1 = (function (name__10896__auto__){
return sablono$core$email_field16893.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$email_field16893__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$email_field16893 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$email_field16893__1.call(this,name__10896__auto__);
case 2:
return sablono$core$email_field16893__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$email_field16893.cljs$core$IFn$_invoke$arity$1 = sablono$core$email_field16893__1;
sablono$core$email_field16893.cljs$core$IFn$_invoke$arity$2 = sablono$core$email_field16893__2;
return sablono$core$email_field16893;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field16893);

/**
 * Creates a file input field.
 */
sablono.core.file_field16896 = (function() {
var sablono$core$file_field16896 = null;
var sablono$core$file_field16896__1 = (function (name__10896__auto__){
return sablono$core$file_field16896.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$file_field16896__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$file_field16896 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$file_field16896__1.call(this,name__10896__auto__);
case 2:
return sablono$core$file_field16896__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$file_field16896.cljs$core$IFn$_invoke$arity$1 = sablono$core$file_field16896__1;
sablono$core$file_field16896.cljs$core$IFn$_invoke$arity$2 = sablono$core$file_field16896__2;
return sablono$core$file_field16896;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field16896);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field16899 = (function() {
var sablono$core$hidden_field16899 = null;
var sablono$core$hidden_field16899__1 = (function (name__10896__auto__){
return sablono$core$hidden_field16899.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$hidden_field16899__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$hidden_field16899 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$hidden_field16899__1.call(this,name__10896__auto__);
case 2:
return sablono$core$hidden_field16899__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$hidden_field16899.cljs$core$IFn$_invoke$arity$1 = sablono$core$hidden_field16899__1;
sablono$core$hidden_field16899.cljs$core$IFn$_invoke$arity$2 = sablono$core$hidden_field16899__2;
return sablono$core$hidden_field16899;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field16899);

/**
 * Creates a month input field.
 */
sablono.core.month_field16902 = (function() {
var sablono$core$month_field16902 = null;
var sablono$core$month_field16902__1 = (function (name__10896__auto__){
return sablono$core$month_field16902.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$month_field16902__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$month_field16902 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$month_field16902__1.call(this,name__10896__auto__);
case 2:
return sablono$core$month_field16902__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$month_field16902.cljs$core$IFn$_invoke$arity$1 = sablono$core$month_field16902__1;
sablono$core$month_field16902.cljs$core$IFn$_invoke$arity$2 = sablono$core$month_field16902__2;
return sablono$core$month_field16902;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field16902);

/**
 * Creates a number input field.
 */
sablono.core.number_field16905 = (function() {
var sablono$core$number_field16905 = null;
var sablono$core$number_field16905__1 = (function (name__10896__auto__){
return sablono$core$number_field16905.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$number_field16905__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$number_field16905 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$number_field16905__1.call(this,name__10896__auto__);
case 2:
return sablono$core$number_field16905__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$number_field16905.cljs$core$IFn$_invoke$arity$1 = sablono$core$number_field16905__1;
sablono$core$number_field16905.cljs$core$IFn$_invoke$arity$2 = sablono$core$number_field16905__2;
return sablono$core$number_field16905;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field16905);

/**
 * Creates a password input field.
 */
sablono.core.password_field16908 = (function() {
var sablono$core$password_field16908 = null;
var sablono$core$password_field16908__1 = (function (name__10896__auto__){
return sablono$core$password_field16908.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$password_field16908__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$password_field16908 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$password_field16908__1.call(this,name__10896__auto__);
case 2:
return sablono$core$password_field16908__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$password_field16908.cljs$core$IFn$_invoke$arity$1 = sablono$core$password_field16908__1;
sablono$core$password_field16908.cljs$core$IFn$_invoke$arity$2 = sablono$core$password_field16908__2;
return sablono$core$password_field16908;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field16908);

/**
 * Creates a range input field.
 */
sablono.core.range_field16911 = (function() {
var sablono$core$range_field16911 = null;
var sablono$core$range_field16911__1 = (function (name__10896__auto__){
return sablono$core$range_field16911.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$range_field16911__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$range_field16911 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$range_field16911__1.call(this,name__10896__auto__);
case 2:
return sablono$core$range_field16911__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$range_field16911.cljs$core$IFn$_invoke$arity$1 = sablono$core$range_field16911__1;
sablono$core$range_field16911.cljs$core$IFn$_invoke$arity$2 = sablono$core$range_field16911__2;
return sablono$core$range_field16911;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field16911);

/**
 * Creates a search input field.
 */
sablono.core.search_field16914 = (function() {
var sablono$core$search_field16914 = null;
var sablono$core$search_field16914__1 = (function (name__10896__auto__){
return sablono$core$search_field16914.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$search_field16914__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$search_field16914 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$search_field16914__1.call(this,name__10896__auto__);
case 2:
return sablono$core$search_field16914__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$search_field16914.cljs$core$IFn$_invoke$arity$1 = sablono$core$search_field16914__1;
sablono$core$search_field16914.cljs$core$IFn$_invoke$arity$2 = sablono$core$search_field16914__2;
return sablono$core$search_field16914;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field16914);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field16917 = (function() {
var sablono$core$tel_field16917 = null;
var sablono$core$tel_field16917__1 = (function (name__10896__auto__){
return sablono$core$tel_field16917.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$tel_field16917__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$tel_field16917 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$tel_field16917__1.call(this,name__10896__auto__);
case 2:
return sablono$core$tel_field16917__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$tel_field16917.cljs$core$IFn$_invoke$arity$1 = sablono$core$tel_field16917__1;
sablono$core$tel_field16917.cljs$core$IFn$_invoke$arity$2 = sablono$core$tel_field16917__2;
return sablono$core$tel_field16917;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field16917);

/**
 * Creates a text input field.
 */
sablono.core.text_field16920 = (function() {
var sablono$core$text_field16920 = null;
var sablono$core$text_field16920__1 = (function (name__10896__auto__){
return sablono$core$text_field16920.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$text_field16920__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$text_field16920 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$text_field16920__1.call(this,name__10896__auto__);
case 2:
return sablono$core$text_field16920__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$text_field16920.cljs$core$IFn$_invoke$arity$1 = sablono$core$text_field16920__1;
sablono$core$text_field16920.cljs$core$IFn$_invoke$arity$2 = sablono$core$text_field16920__2;
return sablono$core$text_field16920;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field16920);

/**
 * Creates a time input field.
 */
sablono.core.time_field16923 = (function() {
var sablono$core$time_field16923 = null;
var sablono$core$time_field16923__1 = (function (name__10896__auto__){
return sablono$core$time_field16923.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$time_field16923__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$time_field16923 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$time_field16923__1.call(this,name__10896__auto__);
case 2:
return sablono$core$time_field16923__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$time_field16923.cljs$core$IFn$_invoke$arity$1 = sablono$core$time_field16923__1;
sablono$core$time_field16923.cljs$core$IFn$_invoke$arity$2 = sablono$core$time_field16923__2;
return sablono$core$time_field16923;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field16923);

/**
 * Creates a url input field.
 */
sablono.core.url_field16926 = (function() {
var sablono$core$url_field16926 = null;
var sablono$core$url_field16926__1 = (function (name__10896__auto__){
return sablono$core$url_field16926.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$url_field16926__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$url_field16926 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$url_field16926__1.call(this,name__10896__auto__);
case 2:
return sablono$core$url_field16926__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$url_field16926.cljs$core$IFn$_invoke$arity$1 = sablono$core$url_field16926__1;
sablono$core$url_field16926.cljs$core$IFn$_invoke$arity$2 = sablono$core$url_field16926__2;
return sablono$core$url_field16926;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field16926);

/**
 * Creates a week input field.
 */
sablono.core.week_field16929 = (function() {
var sablono$core$week_field16929 = null;
var sablono$core$week_field16929__1 = (function (name__10896__auto__){
return sablono$core$week_field16929.cljs$core$IFn$_invoke$arity$2(name__10896__auto__,null);
});
var sablono$core$week_field16929__2 = (function (name__10896__auto__,value__10897__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10896__auto__,value__10897__auto__);
});
sablono$core$week_field16929 = function(name__10896__auto__,value__10897__auto__){
switch(arguments.length){
case 1:
return sablono$core$week_field16929__1.call(this,name__10896__auto__);
case 2:
return sablono$core$week_field16929__2.call(this,name__10896__auto__,value__10897__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$week_field16929.cljs$core$IFn$_invoke$arity$1 = sablono$core$week_field16929__1;
sablono$core$week_field16929.cljs$core$IFn$_invoke$arity$2 = sablono$core$week_field16929__2;
return sablono$core$week_field16929;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field16929);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box16932 = (function() {
var sablono$core$check_box16932 = null;
var sablono$core$check_box16932__1 = (function (name){
return sablono$core$check_box16932.cljs$core$IFn$_invoke$arity$2(name,null);
});
var sablono$core$check_box16932__2 = (function (name,checked_QMARK_){
return sablono$core$check_box16932.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var sablono$core$check_box16932__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"checkbox",cljs.core.constant$keyword$name,sablono.core.make_name(name),cljs.core.constant$keyword$id,sablono.core.make_id(name),cljs.core.constant$keyword$value,value,cljs.core.constant$keyword$checked,checked_QMARK_], null)], null);
});
sablono$core$check_box16932 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return sablono$core$check_box16932__1.call(this,name);
case 2:
return sablono$core$check_box16932__2.call(this,name,checked_QMARK_);
case 3:
return sablono$core$check_box16932__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$check_box16932.cljs$core$IFn$_invoke$arity$1 = sablono$core$check_box16932__1;
sablono$core$check_box16932.cljs$core$IFn$_invoke$arity$2 = sablono$core$check_box16932__2;
sablono$core$check_box16932.cljs$core$IFn$_invoke$arity$3 = sablono$core$check_box16932__3;
return sablono$core$check_box16932;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box16932);
/**
 * Creates a radio button.
 */
sablono.core.radio_button16938 = (function() {
var sablono$core$radio_button16938 = null;
var sablono$core$radio_button16938__1 = (function (group){
return sablono$core$radio_button16938.cljs$core$IFn$_invoke$arity$2(group,null);
});
var sablono$core$radio_button16938__2 = (function (group,checked_QMARK_){
return sablono$core$radio_button16938.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var sablono$core$radio_button16938__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"radio",cljs.core.constant$keyword$name,sablono.core.make_name(group),cljs.core.constant$keyword$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$value,value,cljs.core.constant$keyword$checked,checked_QMARK_], null)], null);
});
sablono$core$radio_button16938 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return sablono$core$radio_button16938__1.call(this,group);
case 2:
return sablono$core$radio_button16938__2.call(this,group,checked_QMARK_);
case 3:
return sablono$core$radio_button16938__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$radio_button16938.cljs$core$IFn$_invoke$arity$1 = sablono$core$radio_button16938__1;
sablono$core$radio_button16938.cljs$core$IFn$_invoke$arity$2 = sablono$core$radio_button16938__2;
sablono$core$radio_button16938.cljs$core$IFn$_invoke$arity$3 = sablono$core$radio_button16938__3;
return sablono$core$radio_button16938;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button16938);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options16944 = (function() {
var sablono$core$select_options16944 = null;
var sablono$core$select_options16944__1 = (function (coll){
return sablono$core$select_options16944.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var sablono$core$select_options16944__2 = (function (coll,selected){
var iter__4917__auto__ = (function sablono$core$select_options16944_$_iter__16965(s__16966){
return (new cljs.core.LazySeq(null,(function (){
var s__16966__$1 = s__16966;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16966__$1);
if(temp__4126__auto__){
var s__16966__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16966__$2)){
var c__4915__auto__ = cljs.core.chunk_first(s__16966__$2);
var size__4916__auto__ = cljs.core.count(c__4915__auto__);
var b__16968 = cljs.core.chunk_buffer(size__4916__auto__);
if((function (){var i__16967 = (0);
while(true){
if((i__16967 < size__4916__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4915__auto__,i__16967);
cljs.core.chunk_append(b__16968,((cljs.core.sequential_QMARK_(x))?(function (){var vec__16973 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16973,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16973,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16973,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$label,text], null),sablono$core$select_options16944.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$value,val,cljs.core.constant$keyword$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$disabled,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__16975 = (i__16967 + (1));
i__16967 = G__16975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16968),sablono$core$select_options16944_$_iter__16965(cljs.core.chunk_rest(s__16966__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16968),null);
}
} else {
var x = cljs.core.first(s__16966__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__16974 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16974,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16974,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16974,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$label,text], null),sablono$core$select_options16944.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$value,val,cljs.core.constant$keyword$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$disabled,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),sablono$core$select_options16944_$_iter__16965(cljs.core.rest(s__16966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4917__auto__(coll);
});
sablono$core$select_options16944 = function(coll,selected){
switch(arguments.length){
case 1:
return sablono$core$select_options16944__1.call(this,coll);
case 2:
return sablono$core$select_options16944__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$select_options16944.cljs$core$IFn$_invoke$arity$1 = sablono$core$select_options16944__1;
sablono$core$select_options16944.cljs$core$IFn$_invoke$arity$2 = sablono$core$select_options16944__2;
return sablono$core$select_options16944;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options16944);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down16976 = (function() {
var sablono$core$drop_down16976 = null;
var sablono$core$drop_down16976__2 = (function (name,options){
return sablono$core$drop_down16976.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var sablono$core$drop_down16976__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,sablono.core.make_name(name),cljs.core.constant$keyword$id,sablono.core.make_id(name)], null),(function (){var G__16982 = options;
var G__16983 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__16982,G__16983) : sablono.core.select_options.call(null,G__16982,G__16983));
})()], null);
});
sablono$core$drop_down16976 = function(name,options,selected){
switch(arguments.length){
case 2:
return sablono$core$drop_down16976__2.call(this,name,options);
case 3:
return sablono$core$drop_down16976__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$drop_down16976.cljs$core$IFn$_invoke$arity$2 = sablono$core$drop_down16976__2;
sablono$core$drop_down16976.cljs$core$IFn$_invoke$arity$3 = sablono$core$drop_down16976__3;
return sablono$core$drop_down16976;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down16976);
/**
 * Creates a text area element.
 */
sablono.core.text_area16984 = (function() {
var sablono$core$text_area16984 = null;
var sablono$core$text_area16984__1 = (function (name){
return sablono$core$text_area16984.cljs$core$IFn$_invoke$arity$2(name,null);
});
var sablono$core$text_area16984__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$name,sablono.core.make_name(name),cljs.core.constant$keyword$id,sablono.core.make_id(name),cljs.core.constant$keyword$value,value], null)], null);
});
sablono$core$text_area16984 = function(name,value){
switch(arguments.length){
case 1:
return sablono$core$text_area16984__1.call(this,name);
case 2:
return sablono$core$text_area16984__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$text_area16984.cljs$core$IFn$_invoke$arity$1 = sablono$core$text_area16984__1;
sablono$core$text_area16984.cljs$core$IFn$_invoke$arity$2 = sablono$core$text_area16984__2;
return sablono$core$text_area16984;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area16984);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label16987 = (function sablono$core$label16987(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label16987);
/**
 * Creates a submit button.
 */
sablono.core.submit_button16988 = (function sablono$core$submit_button16988(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,"submit",cljs.core.constant$keyword$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button16988);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button16989 = (function sablono$core$reset_button16989(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,"reset",cljs.core.constant$keyword$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button16989);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 * @param {...*} var_args
 */
sablono.core.form_to16990 = (function() { 
var sablono$core$form_to16990__delegate = function (p__16991,body){
var vec__16995 = p__16991;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16995,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16995,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$get,null,cljs.core.constant$keyword$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$method,method_str,cljs.core.constant$keyword$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$method,"POST",cljs.core.constant$keyword$action,action_uri], null),(function (){var G__16996 = "_method";
var G__16997 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__16996,G__16997) : sablono.core.hidden_field.call(null,G__16996,G__16997));
})()], null)),body));
};
var sablono$core$form_to16990 = function (p__16991,var_args){
var body = null;
if (arguments.length > 1) {
var G__16998__i = 0, G__16998__a = new Array(arguments.length -  1);
while (G__16998__i < G__16998__a.length) {G__16998__a[G__16998__i] = arguments[G__16998__i + 1]; ++G__16998__i;}
  body = new cljs.core.IndexedSeq(G__16998__a,0);
} 
return sablono$core$form_to16990__delegate.call(this,p__16991,body);};
sablono$core$form_to16990.cljs$lang$maxFixedArity = 1;
sablono$core$form_to16990.cljs$lang$applyTo = (function (arglist__16999){
var p__16991 = cljs.core.first(arglist__16999);
var body = cljs.core.rest(arglist__16999);
return sablono$core$form_to16990__delegate(p__16991,body);
});
sablono$core$form_to16990.cljs$core$IFn$_invoke$arity$variadic = sablono$core$form_to16990__delegate;
return sablono$core$form_to16990;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to16990);
