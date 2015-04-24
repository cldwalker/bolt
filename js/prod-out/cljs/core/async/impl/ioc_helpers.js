// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$finished);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t20567 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t20567 = (function (f,fn_handler,meta20568){
this.f = f;
this.fn_handler = fn_handler;
this.meta20568 = meta20568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t20567.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t20567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t20567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t20567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20569){
var self__ = this;
var _20569__$1 = this;
return self__.meta20568;
});

cljs.core.async.impl.ioc_helpers.t20567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20569,meta20568__$1){
var self__ = this;
var _20569__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t20567(self__.f,self__.fn_handler,meta20568__$1));
});

cljs.core.async.impl.ioc_helpers.t20567.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t20567.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t20567";

cljs.core.async.impl.ioc_helpers.t20567.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async.impl.ioc-helpers/t20567");
});

cljs.core.async.impl.ioc_helpers.__GT_t20567 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t20567(f__$1,fn_handler__$1,meta20568){
return (new cljs.core.async.impl.ioc_helpers.t20567(f__$1,fn_handler__$1,meta20568));
});

}

return (new cljs.core.async.impl.ioc_helpers.t20567(f,cljs$core$async$impl$ioc_helpers$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e20571){if((e20571 instanceof Object)){
var ex = e20571;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e20571;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_20575_20578 = state;
(statearr_20575_20578[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_20575_20578[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_20576_20579 = state;
(statearr_20576_20579[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__20577 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20577) : cljs.core.deref.call(null,G__20577));
})());

(statearr_20576_20579[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_20583_20586 = state;
(statearr_20583_20586[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_20583_20586[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_20584_20587 = state;
(statearr_20584_20587[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__20585 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20585) : cljs.core.deref.call(null,G__20585));
})());

(statearr_20584_20587[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4758__auto__,k__4759__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4758__auto____$1,k__4759__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4760__auto__,k20589,else__4761__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
var G__20591 = (((k20589 instanceof cljs.core.Keyword))?k20589.fqn:null);
switch (G__20591) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20589,else__4761__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4772__auto__,writer__4773__auto__,opts__4774__auto__){
var self__ = this;
var this__4772__auto____$1 = this;
var pr_pair__4775__auto__ = ((function (this__4772__auto____$1){
return (function (keyval__4776__auto__){
return cljs.core.pr_sequential_writer(writer__4773__auto__,cljs.core.pr_writer,""," ","",opts__4774__auto__,keyval__4776__auto__);
});})(this__4772__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4773__auto__,pr_pair__4775__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4774__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4756__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4752__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4762__auto__){
var self__ = this;
var this__4762__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4753__auto__){
var self__ = this;
var this__4753__auto____$1 = this;
var h__4579__auto__ = self__.__hash;
if(!((h__4579__auto__ == null))){
return h__4579__auto__;
} else {
var h__4579__auto____$1 = cljs.core.hash_imap(this__4753__auto____$1);
self__.__hash = h__4579__auto____$1;

return h__4579__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4754__auto__,other__4755__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4151__auto__ = other__4755__auto__;
if(cljs.core.truth_(and__4151__auto__)){
return ((this__4754__auto____$1.constructor === other__4755__auto__.constructor)) && (cljs.core.equiv_map(this__4754__auto____$1,other__4755__auto__));
} else {
return and__4151__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4767__auto__,k__4768__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$finally_DASH_block,null,cljs.core.constant$keyword$catch_DASH_block,null,cljs.core.constant$keyword$catch_DASH_exception,null,cljs.core.constant$keyword$prev,null,cljs.core.constant$keyword$continue_DASH_block,null], null), null),k__4768__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4767__auto____$1),self__.__meta),k__4768__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4768__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4765__auto__,k__4766__auto__,G__20588){
var self__ = this;
var this__4765__auto____$1 = this;
var pred__20592 = cljs.core.keyword_identical_QMARK_;
var expr__20593 = k__4766__auto__;
if(cljs.core.truth_((function (){var G__20595 = cljs.core.constant$keyword$catch_DASH_block;
var G__20596 = expr__20593;
return (pred__20592.cljs$core$IFn$_invoke$arity$2 ? pred__20592.cljs$core$IFn$_invoke$arity$2(G__20595,G__20596) : pred__20592.call(null,G__20595,G__20596));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__20588,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20597 = cljs.core.constant$keyword$catch_DASH_exception;
var G__20598 = expr__20593;
return (pred__20592.cljs$core$IFn$_invoke$arity$2 ? pred__20592.cljs$core$IFn$_invoke$arity$2(G__20597,G__20598) : pred__20592.call(null,G__20597,G__20598));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__20588,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20599 = cljs.core.constant$keyword$finally_DASH_block;
var G__20600 = expr__20593;
return (pred__20592.cljs$core$IFn$_invoke$arity$2 ? pred__20592.cljs$core$IFn$_invoke$arity$2(G__20599,G__20600) : pred__20592.call(null,G__20599,G__20600));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__20588,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20601 = cljs.core.constant$keyword$continue_DASH_block;
var G__20602 = expr__20593;
return (pred__20592.cljs$core$IFn$_invoke$arity$2 ? pred__20592.cljs$core$IFn$_invoke$arity$2(G__20601,G__20602) : pred__20592.call(null,G__20601,G__20602));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__20588,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20603 = cljs.core.constant$keyword$prev;
var G__20604 = expr__20593;
return (pred__20592.cljs$core$IFn$_invoke$arity$2 ? pred__20592.cljs$core$IFn$_invoke$arity$2(G__20603,G__20604) : pred__20592.call(null,G__20603,G__20604));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__20588,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4766__auto__,G__20588),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4770__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4757__auto__,G__20588){
var self__ = this;
var this__4757__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__20588,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4763__auto__,entry__4764__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4764__auto__)){
return cljs.core._assoc(this__4763__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4764__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4764__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4763__auto____$1,entry__4764__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4792__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4792__auto__,writer__4793__auto__){
return cljs.core._write(writer__4793__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__20590){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(G__20590),cljs.core.constant$keyword$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(G__20590),cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(G__20590),cljs.core.constant$keyword$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(G__20590),cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(G__20590),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20590,cljs.core.constant$keyword$catch_DASH_block,cljs.core.array_seq([cljs.core.constant$keyword$catch_DASH_exception,cljs.core.constant$keyword$finally_DASH_block,cljs.core.constant$keyword$continue_DASH_block,cljs.core.constant$keyword$prev], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_20607 = state;
(statearr_20607[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_20607;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__4151__auto__ = exception;
if(cljs.core.truth_(and__4151__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__4151__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__4151__auto__ = exception;
if(cljs.core.truth_(and__4151__auto__)){
var and__4151__auto____$1 = catch_block;
if(cljs.core.truth_(and__4151__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__4151__auto____$1;
}
} else {
return and__4151__auto__;
}
})())){
var statearr_20613 = state;
(statearr_20613[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_20613[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_20613[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_20613[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$catch_DASH_block,null,cljs.core.array_seq([cljs.core.constant$keyword$catch_DASH_exception,null], 0)));

return statearr_20613;
} else {
if(cljs.core.truth_((function (){var and__4151__auto__ = exception;
if(cljs.core.truth_(and__4151__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__4151__auto__;
}
})())){
var statearr_20614_20618 = state;
(statearr_20614_20618[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__20619 = state;
state = G__20619;
continue;
} else {
if(cljs.core.truth_((function (){var and__4151__auto__ = exception;
if(cljs.core.truth_(and__4151__auto__)){
var and__4151__auto____$1 = cljs.core.not(catch_block);
if(and__4151__auto____$1){
return cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4151__auto____$1;
}
} else {
return and__4151__auto__;
}
})())){
var statearr_20615 = state;
(statearr_20615[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_20615[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$finally_DASH_block,null));

return statearr_20615;
} else {
if(cljs.core.truth_((function (){var and__4151__auto__ = cljs.core.not(exception);
if(and__4151__auto__){
return cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4151__auto__;
}
})())){
var statearr_20616 = state;
(statearr_20616[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_20616[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$finally_DASH_block,null));

return statearr_20616;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_20617 = state;
(statearr_20617[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_20617[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_20617;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
