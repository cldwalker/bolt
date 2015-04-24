// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('rum');
goog.require('cljs.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_();
var last_id_16504 = cljs.core.volatile_BANG_((0));
rum.next_id = ((function (last_id_16504){
return (function rum$next_id(){
return last_id_16504.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(last_id_16504.cljs$core$IDeref$_deref$arity$1(null) + (1)));
});})(last_id_16504))
;
rum.state = (function rum$state(comp){
return (comp.props[":rum/state"]);
});
rum.id = (function rum$id(comp){
return cljs.core.constant$keyword$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1((function (){var G__16506 = rum.state(comp);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16506) : cljs.core.deref.call(null,G__16506));
})());
});
rum.fns = (function rum$fns(fn_key,classes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_key,classes));
});
/**
 * @param {...*} var_args
 */
rum.call_all = (function() { 
var rum$call_all__delegate = function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
};
var rum$call_all = function (state,fns,var_args){
var args = null;
if (arguments.length > 2) {
var G__16507__i = 0, G__16507__a = new Array(arguments.length -  2);
while (G__16507__i < G__16507__a.length) {G__16507__a[G__16507__i] = arguments[G__16507__i + 2]; ++G__16507__i;}
  args = new cljs.core.IndexedSeq(G__16507__a,0);
} 
return rum$call_all__delegate.call(this,state,fns,args);};
rum$call_all.cljs$lang$maxFixedArity = 2;
rum$call_all.cljs$lang$applyTo = (function (arglist__16508){
var state = cljs.core.first(arglist__16508);
arglist__16508 = cljs.core.next(arglist__16508);
var fns = cljs.core.first(arglist__16508);
var args = cljs.core.rest(arglist__16508);
return rum$call_all__delegate(state,fns,args);
});
rum$call_all.cljs$core$IFn$_invoke$arity$variadic = rum$call_all__delegate;
return rum$call_all;
})()
;
rum.build_class = (function rum$build_class(classes,display_name){
var init = rum.fns(cljs.core.constant$keyword$init,classes);
var will_mount = rum.fns(cljs.core.constant$keyword$will_DASH_mount,classes);
var did_mount = rum.fns(cljs.core.constant$keyword$did_DASH_mount,classes);
var transfer_state = rum.fns(cljs.core.constant$keyword$transfer_DASH_state,classes);
var should_update = rum.fns(cljs.core.constant$keyword$should_DASH_update,classes);
var will_update = rum.fns(cljs.core.constant$keyword$will_DASH_update,classes);
var render = cljs.core.first(rum.fns(cljs.core.constant$keyword$render,classes));
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__16510_SHARP_,p2__16509_SHARP_){
var G__16528 = p1__16510_SHARP_;
return (p2__16509_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__16509_SHARP_.cljs$core$IFn$_invoke$arity$1(G__16528) : p2__16509_SHARP_.call(null,G__16528));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.fns(cljs.core.constant$keyword$wrap_DASH_render,classes));
var did_update = rum.fns(cljs.core.constant$keyword$did_DASH_update,classes);
var will_unmount = rum.fns(cljs.core.constant$keyword$will_DASH_unmount,classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.call_all.cljs$core$IFn$_invoke$arity$variadic((props[":rum/state"]),init,cljs.core.array_seq([props], 0));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var G__16529 = {"componentDidUpdate": ((cljs.core.empty_QMARK_(did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_(rum.state(this$),rum.call_all(cljs.core._deref(rum.state(this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "displayName": display_name, "componentWillUnmount": ((cljs.core.empty_QMARK_(will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.state(this$),rum.call_all(cljs.core._deref(rum.state(this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "componentWillReceiveProps": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (next_props){
var this$ = this;
var old_state = (function (){var G__16530 = rum.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16530) : cljs.core.deref.call(null,G__16530));
})();
var next_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$rum_SLASH_react_DASH_component,this$,cljs.core.constant$keyword$rum_SLASH_id,cljs.core.constant$keyword$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state(next_props)], 0));
var next_state__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (p1__16512_SHARP_,p2__16511_SHARP_){
var G__16531 = old_state;
var G__16532 = p1__16512_SHARP_;
return (p2__16511_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__16511_SHARP_.cljs$core$IFn$_invoke$arity$2(G__16531,G__16532) : p2__16511_SHARP_.call(null,G__16531,G__16532));
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
,next_state,transfer_state);
return (next_props[":rum/state"] = cljs.core.volatile_BANG_(next_state__$1));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
, "shouldComponentUpdate": ((cljs.core.empty_QMARK_(should_update))?cljs.core.constantly(true):((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (next_props,_){
var this$ = this;
var old_state = (function (){var G__16533 = rum.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16533) : cljs.core.deref.call(null,G__16533));
})();
var new_state = (function (){var G__16534 = (next_props[":rum/state"]);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16534) : cljs.core.deref.call(null,G__16534));
})();
var or__4163__auto__ = cljs.core.some(((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (p1__16513_SHARP_){
var G__16537 = old_state;
var G__16538 = new_state;
return (p1__16513_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__16513_SHARP_.cljs$core$IFn$_invoke$arity$2(G__16537,G__16538) : p1__16513_SHARP_.call(null,G__16537,G__16538));
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
,should_update);
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "render": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
var state = rum.state(this$);
var vec__16539 = (function (){var G__16540 = (function (){var G__16541 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16541) : cljs.core.deref.call(null,G__16541));
})();
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__16540) : wrapped_render.call(null,G__16540));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16539,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16539,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
, "componentWillUpdate": ((cljs.core.empty_QMARK_(will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (next_props,_){
var this$ = this;
var new_state = (next_props[":rum/state"]);
return cljs.core._vreset_BANG_(new_state,rum.call_all(cljs.core._deref(new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "getInitialState": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$rum_SLASH_react_DASH_component,this$,cljs.core.constant$keyword$rum_SLASH_id,rum.next_id()], null),props__GT_state(props)], 0));
return (props[":rum/state"] = cljs.core.volatile_BANG_(state));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
, "componentDidMount": ((cljs.core.empty_QMARK_(did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.state(this$),rum.call_all(cljs.core._deref(rum.state(this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "componentWillMount": ((cljs.core.empty_QMARK_(will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.state(this$),rum.call_all(cljs.core._deref(rum.state(this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
)};
return React.createClass(G__16529);
});
rum.schedule = (function (){var and__4151__auto__ = typeof window !== 'undefined';
if(and__4151__auto__){
var or__4163__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4163__auto____$1)){
return or__4163__auto____$1;
} else {
var or__4163__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4163__auto____$2)){
return or__4163__auto____$2;
} else {
var or__4163__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__4163__auto____$3)){
return or__4163__auto____$3;
} else {
return ((function (or__4163__auto____$3,or__4163__auto____$2,or__4163__auto____$1,or__4163__auto__,and__4151__auto__){
return (function (p1__16542_SHARP_){
var G__16545 = p1__16542_SHARP_;
var G__16546 = (16);
return setTimeout(G__16545,G__16546);
});
;})(or__4163__auto____$3,or__4163__auto____$2,or__4163__auto____$1,or__4163__auto__,and__4151__auto__))
}
}
}
}
} else {
return and__4151__auto__;
}
})();
rum.compare_by = (function rum$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare((function (){var G__16549 = x;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__16549) : keyfn.call(null,G__16549));
})(),(function (){var G__16550 = y;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__16550) : keyfn.call(null,G__16550));
})());
});
});
rum.empty_queue = cljs.core.sorted_set_by(rum.compare_by(rum.id));
rum.render_queue = cljs.core.volatile_BANG_(rum.empty_queue);
rum.render = (function rum$render(){
var queue = (function (){var G__16558 = rum.render_queue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16558) : cljs.core.deref.call(null,G__16558));
})();
cljs.core.vreset_BANG_(rum.render_queue,rum.empty_queue);

var seq__16559 = cljs.core.seq(queue);
var chunk__16561 = null;
var count__16562 = (0);
var i__16563 = (0);
while(true){
if((i__16563 < count__16562)){
var comp = chunk__16561.cljs$core$IIndexed$_nth$arity$2(null,i__16563);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__16565 = seq__16559;
var G__16566 = chunk__16561;
var G__16567 = count__16562;
var G__16568 = (i__16563 + (1));
seq__16559 = G__16565;
chunk__16561 = G__16566;
count__16562 = G__16567;
i__16563 = G__16568;
continue;
} else {
var G__16569 = seq__16559;
var G__16570 = chunk__16561;
var G__16571 = count__16562;
var G__16572 = (i__16563 + (1));
seq__16559 = G__16569;
chunk__16561 = G__16570;
count__16562 = G__16571;
i__16563 = G__16572;
continue;
}
} else {
var temp__4126__auto__ = cljs.core.seq(seq__16559);
if(temp__4126__auto__){
var seq__16559__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16559__$1)){
var c__4948__auto__ = cljs.core.chunk_first(seq__16559__$1);
var G__16573 = cljs.core.chunk_rest(seq__16559__$1);
var G__16574 = c__4948__auto__;
var G__16575 = cljs.core.count(c__4948__auto__);
var G__16576 = (0);
seq__16559 = G__16573;
chunk__16561 = G__16574;
count__16562 = G__16575;
i__16563 = G__16576;
continue;
} else {
var comp = cljs.core.first(seq__16559__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__16577 = cljs.core.next(seq__16559__$1);
var G__16578 = null;
var G__16579 = (0);
var G__16580 = (0);
seq__16559 = G__16577;
chunk__16561 = G__16578;
count__16562 = G__16579;
i__16563 = G__16580;
continue;
} else {
var G__16581 = cljs.core.next(seq__16559__$1);
var G__16582 = null;
var G__16583 = (0);
var G__16584 = (0);
seq__16559 = G__16581;
chunk__16561 = G__16582;
count__16562 = G__16583;
i__16563 = G__16584;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.request_render = (function rum$request_render(component){
if(cljs.core.empty_QMARK_((function (){var G__16587 = rum.render_queue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16587) : cljs.core.deref.call(null,G__16587));
})())){
var G__16588_16589 = rum.render;
(rum.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.schedule.cljs$core$IFn$_invoke$arity$1(G__16588_16589) : rum.schedule.call(null,G__16588_16589));
} else {
}

return cljs.core._vreset_BANG_(rum.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.render_queue),component));
});
rum.mount = (function rum$mount(component,node){
var G__16592 = component;
var G__16593 = node;
return React.render(G__16592,G__16593);
});
rum.render__GT_mixin = (function rum$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$render,(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn,cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.render_state__GT_mixin = (function rum$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$render,(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_fn,state,cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.args__GT_state = (function rum$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$rum_SLASH_args,args], null);
});
/**
 * @param {...*} var_args
 */
rum.element = (function() { 
var rum$element__delegate = function (class$,state,p__16594){
var vec__16598 = p__16594;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16598,(0),null);
var props__$1 = (function (){var or__4163__auto__ = props;
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
return {};
}
})();
(props__$1[":rum/state"] = state);

var G__16599 = class$;
var G__16600 = props__$1;
return React.createElement(G__16599,G__16600);
};
var rum$element = function (class$,state,var_args){
var p__16594 = null;
if (arguments.length > 2) {
var G__16601__i = 0, G__16601__a = new Array(arguments.length -  2);
while (G__16601__i < G__16601__a.length) {G__16601__a[G__16601__i] = arguments[G__16601__i + 2]; ++G__16601__i;}
  p__16594 = new cljs.core.IndexedSeq(G__16601__a,0);
} 
return rum$element__delegate.call(this,class$,state,p__16594);};
rum$element.cljs$lang$maxFixedArity = 2;
rum$element.cljs$lang$applyTo = (function (arglist__16602){
var class$ = cljs.core.first(arglist__16602);
arglist__16602 = cljs.core.next(arglist__16602);
var state = cljs.core.first(arglist__16602);
var p__16594 = cljs.core.rest(arglist__16602);
return rum$element__delegate(class$,state,p__16594);
});
rum$element.cljs$core$IFn$_invoke$arity$variadic = rum$element__delegate;
return rum$element;
})()
;
rum.ctor__GT_class = (function rum$ctor__GT_class(ctor){
return cljs.core.constant$keyword$rum_SLASH_class.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor));
});
rum.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 * @param {...*} var_args
 */
rum.local = (function() { 
var rum$local__delegate = function (initial,p__16603){
var vec__16607 = p__16603;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16607,(0),null);
var key__$1 = (function (){var or__4163__auto__ = key;
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
return cljs.core.constant$keyword$rum_SLASH_local;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$transfer_DASH_state,((function (key__$1,vec__16607,key){
return (function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,key__$1,(function (){var G__16608 = key__$1;
return (old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(G__16608) : old.call(null,G__16608));
})());
});})(key__$1,vec__16607,key))
,cljs.core.constant$keyword$will_DASH_mount,((function (key__$1,vec__16607,key){
return (function (state){
var local_state = (function (){var G__16609 = initial;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16609) : cljs.core.atom.call(null,G__16609));
})();
var component = cljs.core.constant$keyword$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key__$1,((function (local_state,component,key__$1,vec__16607,key){
return (function (_,___$1,___$2,___$3){
return rum.request_render(component);
});})(local_state,component,key__$1,vec__16607,key))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key__$1,local_state);
});})(key__$1,vec__16607,key))
], null);
};
var rum$local = function (initial,var_args){
var p__16603 = null;
if (arguments.length > 1) {
var G__16610__i = 0, G__16610__a = new Array(arguments.length -  1);
while (G__16610__i < G__16610__a.length) {G__16610__a[G__16610__i] = arguments[G__16610__i + 1]; ++G__16610__i;}
  p__16603 = new cljs.core.IndexedSeq(G__16610__a,0);
} 
return rum$local__delegate.call(this,initial,p__16603);};
rum$local.cljs$lang$maxFixedArity = 1;
rum$local.cljs$lang$applyTo = (function (arglist__16611){
var initial = cljs.core.first(arglist__16611);
var p__16603 = cljs.core.rest(arglist__16611);
return rum$local__delegate(initial,p__16603);
});
rum$local.cljs$core$IFn$_invoke$arity$variadic = rum$local__delegate;
return rum$local;
})()
;
rum.reactive_key = (function rum$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(cljs.core.constant$keyword$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$transfer_DASH_state,(function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,cljs.core.constant$keyword$rum_SLASH_refs,cljs.core.constant$keyword$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$1(old));
}),cljs.core.constant$keyword$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_16612 = rum._STAR_reactions_STAR_;
rum._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.constant$keyword$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.constant$keyword$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__16613 = (function (){var G__16614 = state;
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(G__16614) : render_fn.call(null,G__16614));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16613,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16613,(1),null);
var new_reactions = (function (){var G__16615 = rum._STAR_reactions_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16615) : cljs.core.deref.call(null,G__16615));
})();
var key = rum.reactive_key(state);
var seq__16616_16628 = cljs.core.seq(old_reactions);
var chunk__16617_16629 = null;
var count__16618_16630 = (0);
var i__16619_16631 = (0);
while(true){
if((i__16619_16631 < count__16618_16630)){
var ref_16632 = chunk__16617_16629.cljs$core$IIndexed$_nth$arity$2(null,i__16619_16631);
if(cljs.core.contains_QMARK_(new_reactions,ref_16632)){
} else {
cljs.core.remove_watch(ref_16632,key);
}

var G__16633 = seq__16616_16628;
var G__16634 = chunk__16617_16629;
var G__16635 = count__16618_16630;
var G__16636 = (i__16619_16631 + (1));
seq__16616_16628 = G__16633;
chunk__16617_16629 = G__16634;
count__16618_16630 = G__16635;
i__16619_16631 = G__16636;
continue;
} else {
var temp__4126__auto___16637 = cljs.core.seq(seq__16616_16628);
if(temp__4126__auto___16637){
var seq__16616_16638__$1 = temp__4126__auto___16637;
if(cljs.core.chunked_seq_QMARK_(seq__16616_16638__$1)){
var c__4948__auto___16639 = cljs.core.chunk_first(seq__16616_16638__$1);
var G__16640 = cljs.core.chunk_rest(seq__16616_16638__$1);
var G__16641 = c__4948__auto___16639;
var G__16642 = cljs.core.count(c__4948__auto___16639);
var G__16643 = (0);
seq__16616_16628 = G__16640;
chunk__16617_16629 = G__16641;
count__16618_16630 = G__16642;
i__16619_16631 = G__16643;
continue;
} else {
var ref_16644 = cljs.core.first(seq__16616_16638__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_16644)){
} else {
cljs.core.remove_watch(ref_16644,key);
}

var G__16645 = cljs.core.next(seq__16616_16638__$1);
var G__16646 = null;
var G__16647 = (0);
var G__16648 = (0);
seq__16616_16628 = G__16645;
chunk__16617_16629 = G__16646;
count__16618_16630 = G__16647;
i__16619_16631 = G__16648;
continue;
}
} else {
}
}
break;
}

var seq__16620_16649 = cljs.core.seq(new_reactions);
var chunk__16621_16650 = null;
var count__16622_16651 = (0);
var i__16623_16652 = (0);
while(true){
if((i__16623_16652 < count__16622_16651)){
var ref_16653 = chunk__16621_16650.cljs$core$IIndexed$_nth$arity$2(null,i__16623_16652);
if(cljs.core.contains_QMARK_(old_reactions,ref_16653)){
} else {
cljs.core.add_watch(ref_16653,key,((function (seq__16620_16649,chunk__16621_16650,count__16622_16651,i__16623_16652,ref_16653,comp,old_reactions,vec__16613,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16612){
return (function (_,___$1,___$2,___$3){
return rum.request_render(comp);
});})(seq__16620_16649,chunk__16621_16650,count__16622_16651,i__16623_16652,ref_16653,comp,old_reactions,vec__16613,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16612))
);
}

var G__16654 = seq__16620_16649;
var G__16655 = chunk__16621_16650;
var G__16656 = count__16622_16651;
var G__16657 = (i__16623_16652 + (1));
seq__16620_16649 = G__16654;
chunk__16621_16650 = G__16655;
count__16622_16651 = G__16656;
i__16623_16652 = G__16657;
continue;
} else {
var temp__4126__auto___16658 = cljs.core.seq(seq__16620_16649);
if(temp__4126__auto___16658){
var seq__16620_16659__$1 = temp__4126__auto___16658;
if(cljs.core.chunked_seq_QMARK_(seq__16620_16659__$1)){
var c__4948__auto___16660 = cljs.core.chunk_first(seq__16620_16659__$1);
var G__16661 = cljs.core.chunk_rest(seq__16620_16659__$1);
var G__16662 = c__4948__auto___16660;
var G__16663 = cljs.core.count(c__4948__auto___16660);
var G__16664 = (0);
seq__16620_16649 = G__16661;
chunk__16621_16650 = G__16662;
count__16622_16651 = G__16663;
i__16623_16652 = G__16664;
continue;
} else {
var ref_16665 = cljs.core.first(seq__16620_16659__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_16665)){
} else {
cljs.core.add_watch(ref_16665,key,((function (seq__16620_16649,chunk__16621_16650,count__16622_16651,i__16623_16652,ref_16665,seq__16620_16659__$1,temp__4126__auto___16658,comp,old_reactions,vec__16613,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16612){
return (function (_,___$1,___$2,___$3){
return rum.request_render(comp);
});})(seq__16620_16649,chunk__16621_16650,count__16622_16651,i__16623_16652,ref_16665,seq__16620_16659__$1,temp__4126__auto___16658,comp,old_reactions,vec__16613,dom,next_state,new_reactions,key,_STAR_reactions_STAR_16612))
);
}

var G__16666 = cljs.core.next(seq__16620_16659__$1);
var G__16667 = null;
var G__16668 = (0);
var G__16669 = (0);
seq__16620_16649 = G__16666;
chunk__16621_16650 = G__16667;
count__16622_16651 = G__16668;
i__16623_16652 = G__16669;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.constant$keyword$rum_SLASH_refs,new_reactions)], null);
}finally {rum._STAR_reactions_STAR_ = _STAR_reactions_STAR_16612;
}});
}),cljs.core.constant$keyword$will_DASH_unmount,(function (state){
var key_16670 = rum.reactive_key(state);
var seq__16624_16671 = cljs.core.seq(cljs.core.constant$keyword$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__16625_16672 = null;
var count__16626_16673 = (0);
var i__16627_16674 = (0);
while(true){
if((i__16627_16674 < count__16626_16673)){
var ref_16675 = chunk__16625_16672.cljs$core$IIndexed$_nth$arity$2(null,i__16627_16674);
cljs.core.remove_watch(ref_16675,key_16670);

var G__16676 = seq__16624_16671;
var G__16677 = chunk__16625_16672;
var G__16678 = count__16626_16673;
var G__16679 = (i__16627_16674 + (1));
seq__16624_16671 = G__16676;
chunk__16625_16672 = G__16677;
count__16626_16673 = G__16678;
i__16627_16674 = G__16679;
continue;
} else {
var temp__4126__auto___16680 = cljs.core.seq(seq__16624_16671);
if(temp__4126__auto___16680){
var seq__16624_16681__$1 = temp__4126__auto___16680;
if(cljs.core.chunked_seq_QMARK_(seq__16624_16681__$1)){
var c__4948__auto___16682 = cljs.core.chunk_first(seq__16624_16681__$1);
var G__16683 = cljs.core.chunk_rest(seq__16624_16681__$1);
var G__16684 = c__4948__auto___16682;
var G__16685 = cljs.core.count(c__4948__auto___16682);
var G__16686 = (0);
seq__16624_16671 = G__16683;
chunk__16625_16672 = G__16684;
count__16626_16673 = G__16685;
i__16627_16674 = G__16686;
continue;
} else {
var ref_16687 = cljs.core.first(seq__16624_16681__$1);
cljs.core.remove_watch(ref_16687,key_16670);

var G__16688 = cljs.core.next(seq__16624_16681__$1);
var G__16689 = null;
var G__16690 = (0);
var G__16691 = (0);
seq__16624_16671 = G__16688;
chunk__16625_16672 = G__16689;
count__16626_16673 = G__16690;
i__16627_16674 = G__16691;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.constant$keyword$rum_SLASH_refs);
})], null);
rum.react = (function rum$react(ref){
cljs.core._vreset_BANG_(rum._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum._STAR_reactions_STAR_),ref));

var G__16693 = ref;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16693) : cljs.core.deref.call(null,G__16693));
});

/**
* @constructor
*/
rum.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
rum.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,"#<Cursor: ");

cljs.core.pr_writer(cljs.core._deref(this$__$1),writer,opts);

return cljs.core._write(writer,">");
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__16694 = cljs.core._deref(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16694) : f.call(null,G__16694));
})());
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__16695 = cljs.core._deref(this$__$1);
var G__16696 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16695,G__16696) : f.call(null,G__16695,G__16696));
})());
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__16697 = cljs.core._deref(this$__$1);
var G__16698 = a;
var G__16699 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16697,G__16698,G__16699) : f.call(null,G__16697,G__16698,G__16699));
})());
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core._deref(this$__$1),a,b,xs));
});

rum.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.parent,self__.setter,new_value);

return new_value;
});

rum.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__16700 = this$__$1;
return goog.getUid(G__16700);
});

rum.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch(self__.parent,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),this$__$1),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = (function (){var G__16701 = oldp;
return (self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(G__16701) : self__.getter.call(null,G__16701));
})();
var new$ = (function (){var G__16702 = newp;
return (self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(G__16702) : self__.getter.call(null,G__16702));
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
var G__16703 = key;
var G__16704 = this$__$1;
var G__16705 = old;
var G__16706 = new$;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16703,G__16704,G__16705,G__16706) : f.call(null,G__16703,G__16704,G__16705,G__16706));
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch(self__.parent,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),this$__$1));

return this$__$1;
});

rum.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__16707 = cljs.core._deref(self__.parent);
return (self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(G__16707) : self__.getter.call(null,G__16707));
});

rum.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

rum.LensCursor.cljs$lang$type = true;

rum.LensCursor.cljs$lang$ctorStr = "rum/LensCursor";

rum.LensCursor.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"rum/LensCursor");
});

rum.__GT_LensCursor = (function rum$__GT_LensCursor(parent,getter,setter){
return (new rum.LensCursor(parent,getter,setter));
});

rum.cursor = (function rum$cursor(ref,path){
var getter = (function (p1__16708_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__16708_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__16709_SHARP_,p2__16710_SHARP_){
return cljs.core.assoc_in(p1__16709_SHARP_,path,p2__16710_SHARP_);
});})(getter))
;
if((ref instanceof rum.LensCursor)){
return (new rum.LensCursor(ref.parent,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter(focus,what);
var focus__$2 = ref.setter.call(null,where,focus__$1);
return focus__$2;
});})(getter,setter))
));
} else {
return (new rum.LensCursor(ref,getter,setter));
}
});
rum.deref_args = (function rum$deref_args(xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16711_SHARP_){
if((function (){var G__16714 = p1__16711_SHARP_;
if(G__16714){
var bit__4837__auto__ = (G__16714.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4837__auto__) || (G__16714.cljs$core$IDeref$)){
return true;
} else {
if((!G__16714.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__16714);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__16714);
}
})()){
var G__16715 = p1__16711_SHARP_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16715) : cljs.core.deref.call(null,G__16715));
} else {
return p1__16711_SHARP_;
}
}),xs);
});
rum.cursored = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$transfer_DASH_state,(function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,cljs.core.constant$keyword$rum_SLASH_om_DASH_args,cljs.core.constant$keyword$rum_SLASH_om_DASH_args.cljs$core$IFn$_invoke$arity$1(old));
}),cljs.core.constant$keyword$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$rum_SLASH_om_DASH_args.cljs$core$IFn$_invoke$arity$1(old_state),rum.deref_args(cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state)));
}),cljs.core.constant$keyword$wrap_DASH_render,(function (render_fn){
return (function (state){
var vec__16716 = (function (){var G__16717 = state;
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(G__16717) : render_fn.call(null,G__16717));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16716,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16716,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.constant$keyword$rum_SLASH_om_DASH_args,rum.deref_args(cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.cursored_key = (function rum$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(cljs.core.constant$keyword$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$did_DASH_mount,(function (state){
var seq__16718_16734 = cljs.core.seq(cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
var chunk__16720_16735 = null;
var count__16721_16736 = (0);
var i__16722_16737 = (0);
while(true){
if((i__16722_16737 < count__16721_16736)){
var arg_16738 = chunk__16720_16735.cljs$core$IIndexed$_nth$arity$2(null,i__16722_16737);
if((function (){var G__16724 = arg_16738;
if(G__16724){
var bit__4837__auto__ = (G__16724.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4837__auto__) || (G__16724.cljs$core$IWatchable$)){
return true;
} else {
if((!G__16724.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__16724);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__16724);
}
})()){
cljs.core.add_watch(arg_16738,rum.cursored_key(state),((function (seq__16718_16734,chunk__16720_16735,count__16721_16736,i__16722_16737,arg_16738){
return (function (_,___$1,___$2,___$3){
return rum.request_render(cljs.core.constant$keyword$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});})(seq__16718_16734,chunk__16720_16735,count__16721_16736,i__16722_16737,arg_16738))
);

var G__16739 = seq__16718_16734;
var G__16740 = chunk__16720_16735;
var G__16741 = count__16721_16736;
var G__16742 = (i__16722_16737 + (1));
seq__16718_16734 = G__16739;
chunk__16720_16735 = G__16740;
count__16721_16736 = G__16741;
i__16722_16737 = G__16742;
continue;
} else {
var G__16743 = seq__16718_16734;
var G__16744 = chunk__16720_16735;
var G__16745 = count__16721_16736;
var G__16746 = (i__16722_16737 + (1));
seq__16718_16734 = G__16743;
chunk__16720_16735 = G__16744;
count__16721_16736 = G__16745;
i__16722_16737 = G__16746;
continue;
}
} else {
var temp__4126__auto___16747 = cljs.core.seq(seq__16718_16734);
if(temp__4126__auto___16747){
var seq__16718_16748__$1 = temp__4126__auto___16747;
if(cljs.core.chunked_seq_QMARK_(seq__16718_16748__$1)){
var c__4948__auto___16749 = cljs.core.chunk_first(seq__16718_16748__$1);
var G__16750 = cljs.core.chunk_rest(seq__16718_16748__$1);
var G__16751 = c__4948__auto___16749;
var G__16752 = cljs.core.count(c__4948__auto___16749);
var G__16753 = (0);
seq__16718_16734 = G__16750;
chunk__16720_16735 = G__16751;
count__16721_16736 = G__16752;
i__16722_16737 = G__16753;
continue;
} else {
var arg_16754 = cljs.core.first(seq__16718_16748__$1);
if((function (){var G__16725 = arg_16754;
if(G__16725){
var bit__4837__auto__ = (G__16725.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4837__auto__) || (G__16725.cljs$core$IWatchable$)){
return true;
} else {
if((!G__16725.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__16725);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__16725);
}
})()){
cljs.core.add_watch(arg_16754,rum.cursored_key(state),((function (seq__16718_16734,chunk__16720_16735,count__16721_16736,i__16722_16737,arg_16754,seq__16718_16748__$1,temp__4126__auto___16747){
return (function (_,___$1,___$2,___$3){
return rum.request_render(cljs.core.constant$keyword$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});})(seq__16718_16734,chunk__16720_16735,count__16721_16736,i__16722_16737,arg_16754,seq__16718_16748__$1,temp__4126__auto___16747))
);

var G__16755 = cljs.core.next(seq__16718_16748__$1);
var G__16756 = null;
var G__16757 = (0);
var G__16758 = (0);
seq__16718_16734 = G__16755;
chunk__16720_16735 = G__16756;
count__16721_16736 = G__16757;
i__16722_16737 = G__16758;
continue;
} else {
var G__16759 = cljs.core.next(seq__16718_16748__$1);
var G__16760 = null;
var G__16761 = (0);
var G__16762 = (0);
seq__16718_16734 = G__16759;
chunk__16720_16735 = G__16760;
count__16721_16736 = G__16761;
i__16722_16737 = G__16762;
continue;
}
}
} else {
}
}
break;
}

return state;
}),cljs.core.constant$keyword$will_DASH_unmount,(function (state){
var seq__16726_16763 = cljs.core.seq(cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
var chunk__16728_16764 = null;
var count__16729_16765 = (0);
var i__16730_16766 = (0);
while(true){
if((i__16730_16766 < count__16729_16765)){
var arg_16767 = chunk__16728_16764.cljs$core$IIndexed$_nth$arity$2(null,i__16730_16766);
if((function (){var G__16732 = arg_16767;
if(G__16732){
var bit__4837__auto__ = (G__16732.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4837__auto__) || (G__16732.cljs$core$IWatchable$)){
return true;
} else {
if((!G__16732.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__16732);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__16732);
}
})()){
cljs.core.remove_watch(arg_16767,rum.cursored_key(state));

var G__16768 = seq__16726_16763;
var G__16769 = chunk__16728_16764;
var G__16770 = count__16729_16765;
var G__16771 = (i__16730_16766 + (1));
seq__16726_16763 = G__16768;
chunk__16728_16764 = G__16769;
count__16729_16765 = G__16770;
i__16730_16766 = G__16771;
continue;
} else {
var G__16772 = seq__16726_16763;
var G__16773 = chunk__16728_16764;
var G__16774 = count__16729_16765;
var G__16775 = (i__16730_16766 + (1));
seq__16726_16763 = G__16772;
chunk__16728_16764 = G__16773;
count__16729_16765 = G__16774;
i__16730_16766 = G__16775;
continue;
}
} else {
var temp__4126__auto___16776 = cljs.core.seq(seq__16726_16763);
if(temp__4126__auto___16776){
var seq__16726_16777__$1 = temp__4126__auto___16776;
if(cljs.core.chunked_seq_QMARK_(seq__16726_16777__$1)){
var c__4948__auto___16778 = cljs.core.chunk_first(seq__16726_16777__$1);
var G__16779 = cljs.core.chunk_rest(seq__16726_16777__$1);
var G__16780 = c__4948__auto___16778;
var G__16781 = cljs.core.count(c__4948__auto___16778);
var G__16782 = (0);
seq__16726_16763 = G__16779;
chunk__16728_16764 = G__16780;
count__16729_16765 = G__16781;
i__16730_16766 = G__16782;
continue;
} else {
var arg_16783 = cljs.core.first(seq__16726_16777__$1);
if((function (){var G__16733 = arg_16783;
if(G__16733){
var bit__4837__auto__ = (G__16733.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4837__auto__) || (G__16733.cljs$core$IWatchable$)){
return true;
} else {
if((!G__16733.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__16733);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__16733);
}
})()){
cljs.core.remove_watch(arg_16783,rum.cursored_key(state));

var G__16784 = cljs.core.next(seq__16726_16777__$1);
var G__16785 = null;
var G__16786 = (0);
var G__16787 = (0);
seq__16726_16763 = G__16784;
chunk__16728_16764 = G__16785;
count__16729_16765 = G__16786;
i__16730_16766 = G__16787;
continue;
} else {
var G__16788 = cljs.core.next(seq__16726_16777__$1);
var G__16789 = null;
var G__16790 = (0);
var G__16791 = (0);
seq__16726_16763 = G__16788;
chunk__16728_16764 = G__16789;
count__16729_16765 = G__16790;
i__16730_16766 = G__16791;
continue;
}
}
} else {
}
}
break;
}

return state;
})], null);
