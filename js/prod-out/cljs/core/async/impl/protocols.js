// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

cljs.core.async.impl.protocols.ReadPort = (function (){var obj20623 = {};
return obj20623;
})();

/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((function (){var and__4151__auto__ = port;
if(and__4151__auto__){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else {
return and__4151__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__4799__auto__ = (((port == null))?null:port);
return (function (){var or__4163__auto__ = (cljs.core.async.impl.protocols.take_BANG_[(function (){var G__20627 = x__4799__auto__;
return goog.typeOf(G__20627);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});


cljs.core.async.impl.protocols.WritePort = (function (){var obj20629 = {};
return obj20629;
})();

/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 * Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((function (){var and__4151__auto__ = port;
if(and__4151__auto__){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else {
return and__4151__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__4799__auto__ = (((port == null))?null:port);
return (function (){var or__4163__auto__ = (cljs.core.async.impl.protocols.put_BANG_[(function (){var G__20633 = x__4799__auto__;
return goog.typeOf(G__20633);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});


cljs.core.async.impl.protocols.Channel = (function (){var obj20635 = {};
return obj20635;
})();

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((function (){var and__4151__auto__ = chan;
if(and__4151__auto__){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else {
return and__4151__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__4799__auto__ = (((chan == null))?null:chan);
return (function (){var or__4163__auto__ = (cljs.core.async.impl.protocols.close_BANG_[(function (){var G__20639 = x__4799__auto__;
return goog.typeOf(G__20639);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
})().call(null,chan);
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((function (){var and__4151__auto__ = chan;
if(and__4151__auto__){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else {
return and__4151__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__4799__auto__ = (((chan == null))?null:chan);
return (function (){var or__4163__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[(function (){var G__20643 = x__4799__auto__;
return goog.typeOf(G__20643);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.closed?",chan);
}
}
})().call(null,chan);
}
});


cljs.core.async.impl.protocols.Handler = (function (){var obj20645 = {};
return obj20645;
})();

/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((function (){var and__4151__auto__ = h;
if(and__4151__auto__){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else {
return and__4151__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__4799__auto__ = (((h == null))?null:h);
return (function (){var or__4163__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[(function (){var G__20649 = x__4799__auto__;
return goog.typeOf(G__20649);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.active?",h);
}
}
})().call(null,h);
}
});

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((function (){var and__4151__auto__ = h;
if(and__4151__auto__){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else {
return and__4151__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__4799__auto__ = (((h == null))?null:h);
return (function (){var or__4163__auto__ = (cljs.core.async.impl.protocols.commit[(function (){var G__20653 = x__4799__auto__;
return goog.typeOf(G__20653);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.commit",h);
}
}
})().call(null,h);
}
});


cljs.core.async.impl.protocols.Buffer = (function (){var obj20655 = {};
return obj20655;
})();

cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((function (){var and__4151__auto__ = b;
if(and__4151__auto__){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else {
return and__4151__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__4799__auto__ = (((b == null))?null:b);
return (function (){var or__4163__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[(function (){var G__20659 = x__4799__auto__;
return goog.typeOf(G__20659);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((function (){var and__4151__auto__ = b;
if(and__4151__auto__){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else {
return and__4151__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__4799__auto__ = (((b == null))?null:b);
return (function (){var or__4163__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[(function (){var G__20663 = x__4799__auto__;
return goog.typeOf(G__20663);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((function (){var and__4151__auto__ = b;
if(and__4151__auto__){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else {
return and__4151__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__4799__auto__ = (((b == null))?null:b);
return (function (){var or__4163__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[(function (){var G__20667 = x__4799__auto__;
return goog.typeOf(G__20667);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function() {
var cljs$core$async$impl$protocols$add_BANG_ = null;
var cljs$core$async$impl$protocols$add_BANG___1 = (function (b){
return b;
});
var cljs$core$async$impl$protocols$add_BANG___2 = (function (b,itm){
if(!((itm == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"itm","itm",-713282527,null)))], 0)))].join('')));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_(b,itm);
});
cljs$core$async$impl$protocols$add_BANG_ = function(b,itm){
switch(arguments.length){
case 1:
return cljs$core$async$impl$protocols$add_BANG___1.call(this,b);
case 2:
return cljs$core$async$impl$protocols$add_BANG___2.call(this,b,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$impl$protocols$add_BANG_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$impl$protocols$add_BANG___1;
cljs$core$async$impl$protocols$add_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$impl$protocols$add_BANG___2;
return cljs$core$async$impl$protocols$add_BANG_;
})()
;

cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj20669 = {};
return obj20669;
})();

