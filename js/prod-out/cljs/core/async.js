// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t17155 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17155 = (function (f,fn_handler,meta17156){
this.f = f;
this.fn_handler = fn_handler;
this.meta17156 = meta17156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17155.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17157){
var self__ = this;
var _17157__$1 = this;
return self__.meta17156;
});

cljs.core.async.t17155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17157,meta17156__$1){
var self__ = this;
var _17157__$1 = this;
return (new cljs.core.async.t17155(self__.f,self__.fn_handler,meta17156__$1));
});

cljs.core.async.t17155.cljs$lang$type = true;

cljs.core.async.t17155.cljs$lang$ctorStr = "cljs.core.async/t17155";

cljs.core.async.t17155.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t17155");
});

cljs.core.async.__GT_t17155 = (function cljs$core$async$fn_handler_$___GT_t17155(f__$1,fn_handler__$1,meta17156){
return (new cljs.core.async.t17155(f__$1,fn_handler__$1,meta17156));
});

}

return (new cljs.core.async.t17155(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__17159 = buff;
if(G__17159){
var bit__4837__auto__ = null;
if(cljs.core.truth_((function (){var or__4163__auto__ = bit__4837__auto__;
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
return G__17159.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17159.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17159);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17159);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1(null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_17176 = (function (){var G__17173 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17173) : cljs.core.deref.call(null,G__17173));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__17174_17177 = val_17176;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17174_17177) : fn1.call(null,G__17174_17177));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17176,ret){
return (function (){
var G__17175 = val_17176;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17175) : fn1.call(null,G__17175));
});})(val_17176,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__17186 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17186) : cljs.core.deref.call(null,G__17186));
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__17187 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17187) : cljs.core.deref.call(null,G__17187));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__17188_17190 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17188_17190) : fn1.call(null,G__17188_17190));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__17189 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17189) : fn1.call(null,G__17189));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5048__auto___17191 = n;
var x_17192 = (0);
while(true){
if((x_17192 < n__5048__auto___17191)){
(a[x_17192] = (0));

var G__17193 = (x_17192 + (1));
x_17192 = G__17193;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__17194 = (i + (1));
i = G__17194;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (function (){var G__17202 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17202) : cljs.core.atom.call(null,G__17202));
})();
if(typeof cljs.core.async.t17203 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17203 = (function (flag,alt_flag,meta17204){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17204 = meta17204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17203.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17206 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17206) : cljs.core.deref.call(null,G__17206));
});})(flag))
;

cljs.core.async.t17203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17207_17209 = self__.flag;
var G__17208_17210 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17207_17209,G__17208_17210) : cljs.core.reset_BANG_.call(null,G__17207_17209,G__17208_17210));

return true;
});})(flag))
;

cljs.core.async.t17203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17205){
var self__ = this;
var _17205__$1 = this;
return self__.meta17204;
});})(flag))
;

cljs.core.async.t17203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17205,meta17204__$1){
var self__ = this;
var _17205__$1 = this;
return (new cljs.core.async.t17203(self__.flag,self__.alt_flag,meta17204__$1));
});})(flag))
;

cljs.core.async.t17203.cljs$lang$type = true;

cljs.core.async.t17203.cljs$lang$ctorStr = "cljs.core.async/t17203";

cljs.core.async.t17203.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t17203");
});})(flag))
;

cljs.core.async.__GT_t17203 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t17203(flag__$1,alt_flag__$1,meta17204){
return (new cljs.core.async.t17203(flag__$1,alt_flag__$1,meta17204));
});})(flag))
;

}

return (new cljs.core.async.t17203(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t17214 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17214 = (function (cb,flag,alt_handler,meta17215){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17215 = meta17215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17214.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t17214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t17214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17216){
var self__ = this;
var _17216__$1 = this;
return self__.meta17215;
});

cljs.core.async.t17214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17216,meta17215__$1){
var self__ = this;
var _17216__$1 = this;
return (new cljs.core.async.t17214(self__.cb,self__.flag,self__.alt_handler,meta17215__$1));
});

cljs.core.async.t17214.cljs$lang$type = true;

cljs.core.async.t17214.cljs$lang$ctorStr = "cljs.core.async/t17214";

cljs.core.async.t17214.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t17214");
});

cljs.core.async.__GT_t17214 = (function cljs$core$async$alt_handler_$___GT_t17214(cb__$1,flag__$1,alt_handler__$1,meta17215){
return (new cljs.core.async.t17214(cb__$1,flag__$1,alt_handler__$1,meta17215));
});

}

return (new cljs.core.async.t17214(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__17224 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__17224) : port.call(null,G__17224));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__17225 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__17225) : port.call(null,G__17225));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17217_SHARP_){
var G__17226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17217_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17226) : fret.call(null,G__17226));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17218_SHARP_){
var G__17227 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17218_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17227) : fret.call(null,G__17227));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17228 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17228) : cljs.core.deref.call(null,G__17228));
})(),(function (){var or__4163__auto__ = wport;
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17229 = (i + (1));
i = G__17229;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4163__auto__ = ret;
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$default)){
var temp__4126__auto__ = (function (){var and__4151__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4151__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4151__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__17230){
var map__17232 = p__17230;
var map__17232__$1 = ((cljs.core.seq_QMARK_(map__17232))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17232):map__17232);
var opts = map__17232__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__17230 = null;
if (arguments.length > 1) {
var G__17233__i = 0, G__17233__a = new Array(arguments.length -  1);
while (G__17233__i < G__17233__a.length) {G__17233__a[G__17233__i] = arguments[G__17233__i + 1]; ++G__17233__i;}
  p__17230 = new cljs.core.IndexedSeq(G__17233__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__17230);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__17234){
var ports = cljs.core.first(arglist__17234);
var p__17230 = cljs.core.rest(arglist__17234);
return cljs$core$async$alts_BANG___delegate(ports,p__17230);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__12724__auto___17332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___17332){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___17332){
return (function (state_17308){
var state_val_17309 = (state_17308[(1)]);
if((state_val_17309 === (7))){
var inst_17304 = (state_17308[(2)]);
var state_17308__$1 = state_17308;
var statearr_17310_17333 = state_17308__$1;
(statearr_17310_17333[(2)] = inst_17304);

(statearr_17310_17333[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17309 === (1))){
var state_17308__$1 = state_17308;
var statearr_17311_17334 = state_17308__$1;
(statearr_17311_17334[(2)] = null);

(statearr_17311_17334[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17309 === (4))){
var inst_17287 = (state_17308[(7)]);
var inst_17287__$1 = (state_17308[(2)]);
var inst_17288 = (inst_17287__$1 == null);
var state_17308__$1 = (function (){var statearr_17312 = state_17308;
(statearr_17312[(7)] = inst_17287__$1);

return statearr_17312;
})();
if(cljs.core.truth_(inst_17288)){
var statearr_17313_17335 = state_17308__$1;
(statearr_17313_17335[(1)] = (5));

} else {
var statearr_17314_17336 = state_17308__$1;
(statearr_17314_17336[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17309 === (13))){
var state_17308__$1 = state_17308;
var statearr_17315_17337 = state_17308__$1;
(statearr_17315_17337[(2)] = null);

(statearr_17315_17337[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17309 === (6))){
var inst_17287 = (state_17308[(7)]);
var state_17308__$1 = state_17308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17308__$1,(11),to,inst_17287);
} else {
if((state_val_17309 === (3))){
var inst_17306 = (state_17308[(2)]);
var state_17308__$1 = state_17308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17308__$1,inst_17306);
} else {
if((state_val_17309 === (12))){
var state_17308__$1 = state_17308;
var statearr_17316_17338 = state_17308__$1;
(statearr_17316_17338[(2)] = null);

(statearr_17316_17338[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17309 === (2))){
var state_17308__$1 = state_17308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17308__$1,(4),from);
} else {
if((state_val_17309 === (11))){
var inst_17297 = (state_17308[(2)]);
var state_17308__$1 = state_17308;
if(cljs.core.truth_(inst_17297)){
var statearr_17317_17339 = state_17308__$1;
(statearr_17317_17339[(1)] = (12));

} else {
var statearr_17318_17340 = state_17308__$1;
(statearr_17318_17340[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17309 === (9))){
var state_17308__$1 = state_17308;
var statearr_17319_17341 = state_17308__$1;
(statearr_17319_17341[(2)] = null);

(statearr_17319_17341[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17309 === (5))){
var state_17308__$1 = state_17308;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17320_17342 = state_17308__$1;
(statearr_17320_17342[(1)] = (8));

} else {
var statearr_17321_17343 = state_17308__$1;
(statearr_17321_17343[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17309 === (14))){
var inst_17302 = (state_17308[(2)]);
var state_17308__$1 = state_17308;
var statearr_17322_17344 = state_17308__$1;
(statearr_17322_17344[(2)] = inst_17302);

(statearr_17322_17344[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17309 === (10))){
var inst_17294 = (state_17308[(2)]);
var state_17308__$1 = state_17308;
var statearr_17323_17345 = state_17308__$1;
(statearr_17323_17345[(2)] = inst_17294);

(statearr_17323_17345[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17309 === (8))){
var inst_17291 = cljs.core.async.close_BANG_(to);
var state_17308__$1 = state_17308;
var statearr_17324_17346 = state_17308__$1;
(statearr_17324_17346[(2)] = inst_17291);

(statearr_17324_17346[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__12724__auto___17332))
;
return ((function (switch__12644__auto__,c__12724__auto___17332){
return (function() {
var cljs$core$async$pipe_$_state_machine__12645__auto__ = null;
var cljs$core$async$pipe_$_state_machine__12645__auto____0 = (function (){
var statearr_17328 = [null,null,null,null,null,null,null,null];
(statearr_17328[(0)] = cljs$core$async$pipe_$_state_machine__12645__auto__);

(statearr_17328[(1)] = (1));

return statearr_17328;
});
var cljs$core$async$pipe_$_state_machine__12645__auto____1 = (function (state_17308){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_17308);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e17329){if((e17329 instanceof Object)){
var ex__12648__auto__ = e17329;
var statearr_17330_17347 = state_17308;
(statearr_17330_17347[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17308);

return cljs.core.constant$keyword$recur;
} else {
throw e17329;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__17348 = state_17308;
state_17308 = G__17348;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__12645__auto__ = function(state_17308){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__12645__auto____1.call(this,state_17308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__12645__auto____0;
cljs$core$async$pipe_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__12645__auto____1;
return cljs$core$async$pipe_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___17332))
})();
var state__12726__auto__ = (function (){var statearr_17331 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_17331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___17332);

return statearr_17331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___17332))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__17534){
var vec__17535 = p__17534;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17535,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17535,(1),null);
var job = vec__17535;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12724__auto___17719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___17719,res,vec__17535,v,p,job,jobs,results){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___17719,res,vec__17535,v,p,job,jobs,results){
return (function (state_17540){
var state_val_17541 = (state_17540[(1)]);
if((state_val_17541 === (2))){
var inst_17537 = (state_17540[(2)]);
var inst_17538 = cljs.core.async.close_BANG_(res);
var state_17540__$1 = (function (){var statearr_17542 = state_17540;
(statearr_17542[(7)] = inst_17537);

return statearr_17542;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17540__$1,inst_17538);
} else {
if((state_val_17541 === (1))){
var state_17540__$1 = state_17540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17540__$1,(2),res,v);
} else {
return null;
}
}
});})(c__12724__auto___17719,res,vec__17535,v,p,job,jobs,results))
;
return ((function (switch__12644__auto__,c__12724__auto___17719,res,vec__17535,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0 = (function (){
var statearr_17546 = [null,null,null,null,null,null,null,null];
(statearr_17546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__);

(statearr_17546[(1)] = (1));

return statearr_17546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1 = (function (state_17540){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_17540);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e17547){if((e17547 instanceof Object)){
var ex__12648__auto__ = e17547;
var statearr_17548_17720 = state_17540;
(statearr_17548_17720[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17540);

return cljs.core.constant$keyword$recur;
} else {
throw e17547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__17721 = state_17540;
state_17540 = G__17721;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__ = function(state_17540){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1.call(this,state_17540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___17719,res,vec__17535,v,p,job,jobs,results))
})();
var state__12726__auto__ = (function (){var statearr_17549 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_17549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___17719);

return statearr_17549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___17719,res,vec__17535,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17550){
var vec__17551 = p__17550;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17551,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17551,(1),null);
var job = vec__17551;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__17552_17722 = v;
var G__17553_17723 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__17552_17722,G__17553_17723) : xf.call(null,G__17552_17722,G__17553_17723));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5048__auto___17724 = n;
var __17725 = (0);
while(true){
if((__17725 < n__5048__auto___17724)){
var G__17554_17726 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17554_17726) {
case "async":
var c__12724__auto___17728 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17725,c__12724__auto___17728,G__17554_17726,n__5048__auto___17724,jobs,results,process,async){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (__17725,c__12724__auto___17728,G__17554_17726,n__5048__auto___17724,jobs,results,process,async){
return (function (state_17567){
var state_val_17568 = (state_17567[(1)]);
if((state_val_17568 === (7))){
var inst_17563 = (state_17567[(2)]);
var state_17567__$1 = state_17567;
var statearr_17569_17729 = state_17567__$1;
(statearr_17569_17729[(2)] = inst_17563);

(statearr_17569_17729[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17568 === (6))){
var state_17567__$1 = state_17567;
var statearr_17570_17730 = state_17567__$1;
(statearr_17570_17730[(2)] = null);

(statearr_17570_17730[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17568 === (5))){
var state_17567__$1 = state_17567;
var statearr_17571_17731 = state_17567__$1;
(statearr_17571_17731[(2)] = null);

(statearr_17571_17731[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17568 === (4))){
var inst_17557 = (state_17567[(2)]);
var inst_17558 = async(inst_17557);
var state_17567__$1 = state_17567;
if(cljs.core.truth_(inst_17558)){
var statearr_17572_17732 = state_17567__$1;
(statearr_17572_17732[(1)] = (5));

} else {
var statearr_17573_17733 = state_17567__$1;
(statearr_17573_17733[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17568 === (3))){
var inst_17565 = (state_17567[(2)]);
var state_17567__$1 = state_17567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17567__$1,inst_17565);
} else {
if((state_val_17568 === (2))){
var state_17567__$1 = state_17567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17567__$1,(4),jobs);
} else {
if((state_val_17568 === (1))){
var state_17567__$1 = state_17567;
var statearr_17574_17734 = state_17567__$1;
(statearr_17574_17734[(2)] = null);

(statearr_17574_17734[(1)] = (2));


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
});})(__17725,c__12724__auto___17728,G__17554_17726,n__5048__auto___17724,jobs,results,process,async))
;
return ((function (__17725,switch__12644__auto__,c__12724__auto___17728,G__17554_17726,n__5048__auto___17724,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0 = (function (){
var statearr_17578 = [null,null,null,null,null,null,null];
(statearr_17578[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__);

(statearr_17578[(1)] = (1));

return statearr_17578;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1 = (function (state_17567){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_17567);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e17579){if((e17579 instanceof Object)){
var ex__12648__auto__ = e17579;
var statearr_17580_17735 = state_17567;
(statearr_17580_17735[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17567);

return cljs.core.constant$keyword$recur;
} else {
throw e17579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__17736 = state_17567;
state_17567 = G__17736;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__ = function(state_17567){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1.call(this,state_17567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__;
})()
;})(__17725,switch__12644__auto__,c__12724__auto___17728,G__17554_17726,n__5048__auto___17724,jobs,results,process,async))
})();
var state__12726__auto__ = (function (){var statearr_17581 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_17581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___17728);

return statearr_17581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(__17725,c__12724__auto___17728,G__17554_17726,n__5048__auto___17724,jobs,results,process,async))
);


break;
case "compute":
var c__12724__auto___17737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17725,c__12724__auto___17737,G__17554_17726,n__5048__auto___17724,jobs,results,process,async){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (__17725,c__12724__auto___17737,G__17554_17726,n__5048__auto___17724,jobs,results,process,async){
return (function (state_17594){
var state_val_17595 = (state_17594[(1)]);
if((state_val_17595 === (7))){
var inst_17590 = (state_17594[(2)]);
var state_17594__$1 = state_17594;
var statearr_17596_17738 = state_17594__$1;
(statearr_17596_17738[(2)] = inst_17590);

(statearr_17596_17738[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17595 === (6))){
var state_17594__$1 = state_17594;
var statearr_17597_17739 = state_17594__$1;
(statearr_17597_17739[(2)] = null);

(statearr_17597_17739[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17595 === (5))){
var state_17594__$1 = state_17594;
var statearr_17598_17740 = state_17594__$1;
(statearr_17598_17740[(2)] = null);

(statearr_17598_17740[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17595 === (4))){
var inst_17584 = (state_17594[(2)]);
var inst_17585 = process(inst_17584);
var state_17594__$1 = state_17594;
if(cljs.core.truth_(inst_17585)){
var statearr_17599_17741 = state_17594__$1;
(statearr_17599_17741[(1)] = (5));

} else {
var statearr_17600_17742 = state_17594__$1;
(statearr_17600_17742[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17595 === (3))){
var inst_17592 = (state_17594[(2)]);
var state_17594__$1 = state_17594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17594__$1,inst_17592);
} else {
if((state_val_17595 === (2))){
var state_17594__$1 = state_17594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17594__$1,(4),jobs);
} else {
if((state_val_17595 === (1))){
var state_17594__$1 = state_17594;
var statearr_17601_17743 = state_17594__$1;
(statearr_17601_17743[(2)] = null);

(statearr_17601_17743[(1)] = (2));


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
});})(__17725,c__12724__auto___17737,G__17554_17726,n__5048__auto___17724,jobs,results,process,async))
;
return ((function (__17725,switch__12644__auto__,c__12724__auto___17737,G__17554_17726,n__5048__auto___17724,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0 = (function (){
var statearr_17605 = [null,null,null,null,null,null,null];
(statearr_17605[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__);

(statearr_17605[(1)] = (1));

return statearr_17605;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1 = (function (state_17594){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_17594);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e17606){if((e17606 instanceof Object)){
var ex__12648__auto__ = e17606;
var statearr_17607_17744 = state_17594;
(statearr_17607_17744[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17594);

return cljs.core.constant$keyword$recur;
} else {
throw e17606;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__17745 = state_17594;
state_17594 = G__17745;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__ = function(state_17594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1.call(this,state_17594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__;
})()
;})(__17725,switch__12644__auto__,c__12724__auto___17737,G__17554_17726,n__5048__auto___17724,jobs,results,process,async))
})();
var state__12726__auto__ = (function (){var statearr_17608 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_17608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___17737);

return statearr_17608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(__17725,c__12724__auto___17737,G__17554_17726,n__5048__auto___17724,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17746 = (__17725 + (1));
__17725 = G__17746;
continue;
} else {
}
break;
}

var c__12724__auto___17747 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___17747,jobs,results,process,async){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___17747,jobs,results,process,async){
return (function (state_17630){
var state_val_17631 = (state_17630[(1)]);
if((state_val_17631 === (9))){
var inst_17623 = (state_17630[(2)]);
var state_17630__$1 = (function (){var statearr_17632 = state_17630;
(statearr_17632[(7)] = inst_17623);

return statearr_17632;
})();
var statearr_17633_17748 = state_17630__$1;
(statearr_17633_17748[(2)] = null);

(statearr_17633_17748[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17631 === (8))){
var inst_17616 = (state_17630[(8)]);
var inst_17621 = (state_17630[(2)]);
var state_17630__$1 = (function (){var statearr_17634 = state_17630;
(statearr_17634[(9)] = inst_17621);

return statearr_17634;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17630__$1,(9),results,inst_17616);
} else {
if((state_val_17631 === (7))){
var inst_17626 = (state_17630[(2)]);
var state_17630__$1 = state_17630;
var statearr_17635_17749 = state_17630__$1;
(statearr_17635_17749[(2)] = inst_17626);

(statearr_17635_17749[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17631 === (6))){
var inst_17616 = (state_17630[(8)]);
var inst_17611 = (state_17630[(10)]);
var inst_17616__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17617 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17618 = [inst_17611,inst_17616__$1];
var inst_17619 = (new cljs.core.PersistentVector(null,2,(5),inst_17617,inst_17618,null));
var state_17630__$1 = (function (){var statearr_17636 = state_17630;
(statearr_17636[(8)] = inst_17616__$1);

return statearr_17636;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17630__$1,(8),jobs,inst_17619);
} else {
if((state_val_17631 === (5))){
var inst_17614 = cljs.core.async.close_BANG_(jobs);
var state_17630__$1 = state_17630;
var statearr_17637_17750 = state_17630__$1;
(statearr_17637_17750[(2)] = inst_17614);

(statearr_17637_17750[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17631 === (4))){
var inst_17611 = (state_17630[(10)]);
var inst_17611__$1 = (state_17630[(2)]);
var inst_17612 = (inst_17611__$1 == null);
var state_17630__$1 = (function (){var statearr_17638 = state_17630;
(statearr_17638[(10)] = inst_17611__$1);

return statearr_17638;
})();
if(cljs.core.truth_(inst_17612)){
var statearr_17639_17751 = state_17630__$1;
(statearr_17639_17751[(1)] = (5));

} else {
var statearr_17640_17752 = state_17630__$1;
(statearr_17640_17752[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17631 === (3))){
var inst_17628 = (state_17630[(2)]);
var state_17630__$1 = state_17630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17630__$1,inst_17628);
} else {
if((state_val_17631 === (2))){
var state_17630__$1 = state_17630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17630__$1,(4),from);
} else {
if((state_val_17631 === (1))){
var state_17630__$1 = state_17630;
var statearr_17641_17753 = state_17630__$1;
(statearr_17641_17753[(2)] = null);

(statearr_17641_17753[(1)] = (2));


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
}
}
});})(c__12724__auto___17747,jobs,results,process,async))
;
return ((function (switch__12644__auto__,c__12724__auto___17747,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0 = (function (){
var statearr_17645 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__);

(statearr_17645[(1)] = (1));

return statearr_17645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1 = (function (state_17630){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_17630);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e17646){if((e17646 instanceof Object)){
var ex__12648__auto__ = e17646;
var statearr_17647_17754 = state_17630;
(statearr_17647_17754[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17630);

return cljs.core.constant$keyword$recur;
} else {
throw e17646;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__17755 = state_17630;
state_17630 = G__17755;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__ = function(state_17630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1.call(this,state_17630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___17747,jobs,results,process,async))
})();
var state__12726__auto__ = (function (){var statearr_17648 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_17648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___17747);

return statearr_17648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___17747,jobs,results,process,async))
);


var c__12724__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto__,jobs,results,process,async){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto__,jobs,results,process,async){
return (function (state_17686){
var state_val_17687 = (state_17686[(1)]);
if((state_val_17687 === (7))){
var inst_17682 = (state_17686[(2)]);
var state_17686__$1 = state_17686;
var statearr_17688_17756 = state_17686__$1;
(statearr_17688_17756[(2)] = inst_17682);

(statearr_17688_17756[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (20))){
var state_17686__$1 = state_17686;
var statearr_17689_17757 = state_17686__$1;
(statearr_17689_17757[(2)] = null);

(statearr_17689_17757[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (1))){
var state_17686__$1 = state_17686;
var statearr_17690_17758 = state_17686__$1;
(statearr_17690_17758[(2)] = null);

(statearr_17690_17758[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (4))){
var inst_17651 = (state_17686[(7)]);
var inst_17651__$1 = (state_17686[(2)]);
var inst_17652 = (inst_17651__$1 == null);
var state_17686__$1 = (function (){var statearr_17691 = state_17686;
(statearr_17691[(7)] = inst_17651__$1);

return statearr_17691;
})();
if(cljs.core.truth_(inst_17652)){
var statearr_17692_17759 = state_17686__$1;
(statearr_17692_17759[(1)] = (5));

} else {
var statearr_17693_17760 = state_17686__$1;
(statearr_17693_17760[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (15))){
var inst_17664 = (state_17686[(8)]);
var state_17686__$1 = state_17686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17686__$1,(18),to,inst_17664);
} else {
if((state_val_17687 === (21))){
var inst_17677 = (state_17686[(2)]);
var state_17686__$1 = state_17686;
var statearr_17694_17761 = state_17686__$1;
(statearr_17694_17761[(2)] = inst_17677);

(statearr_17694_17761[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (13))){
var inst_17679 = (state_17686[(2)]);
var state_17686__$1 = (function (){var statearr_17695 = state_17686;
(statearr_17695[(9)] = inst_17679);

return statearr_17695;
})();
var statearr_17696_17762 = state_17686__$1;
(statearr_17696_17762[(2)] = null);

(statearr_17696_17762[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (6))){
var inst_17651 = (state_17686[(7)]);
var state_17686__$1 = state_17686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17686__$1,(11),inst_17651);
} else {
if((state_val_17687 === (17))){
var inst_17672 = (state_17686[(2)]);
var state_17686__$1 = state_17686;
if(cljs.core.truth_(inst_17672)){
var statearr_17697_17763 = state_17686__$1;
(statearr_17697_17763[(1)] = (19));

} else {
var statearr_17698_17764 = state_17686__$1;
(statearr_17698_17764[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (3))){
var inst_17684 = (state_17686[(2)]);
var state_17686__$1 = state_17686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17686__$1,inst_17684);
} else {
if((state_val_17687 === (12))){
var inst_17661 = (state_17686[(10)]);
var state_17686__$1 = state_17686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17686__$1,(14),inst_17661);
} else {
if((state_val_17687 === (2))){
var state_17686__$1 = state_17686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17686__$1,(4),results);
} else {
if((state_val_17687 === (19))){
var state_17686__$1 = state_17686;
var statearr_17699_17765 = state_17686__$1;
(statearr_17699_17765[(2)] = null);

(statearr_17699_17765[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (11))){
var inst_17661 = (state_17686[(2)]);
var state_17686__$1 = (function (){var statearr_17700 = state_17686;
(statearr_17700[(10)] = inst_17661);

return statearr_17700;
})();
var statearr_17701_17766 = state_17686__$1;
(statearr_17701_17766[(2)] = null);

(statearr_17701_17766[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (9))){
var state_17686__$1 = state_17686;
var statearr_17702_17767 = state_17686__$1;
(statearr_17702_17767[(2)] = null);

(statearr_17702_17767[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (5))){
var state_17686__$1 = state_17686;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17703_17768 = state_17686__$1;
(statearr_17703_17768[(1)] = (8));

} else {
var statearr_17704_17769 = state_17686__$1;
(statearr_17704_17769[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (14))){
var inst_17666 = (state_17686[(11)]);
var inst_17664 = (state_17686[(8)]);
var inst_17664__$1 = (state_17686[(2)]);
var inst_17665 = (inst_17664__$1 == null);
var inst_17666__$1 = cljs.core.not(inst_17665);
var state_17686__$1 = (function (){var statearr_17705 = state_17686;
(statearr_17705[(11)] = inst_17666__$1);

(statearr_17705[(8)] = inst_17664__$1);

return statearr_17705;
})();
if(inst_17666__$1){
var statearr_17706_17770 = state_17686__$1;
(statearr_17706_17770[(1)] = (15));

} else {
var statearr_17707_17771 = state_17686__$1;
(statearr_17707_17771[(1)] = (16));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (16))){
var inst_17666 = (state_17686[(11)]);
var state_17686__$1 = state_17686;
var statearr_17708_17772 = state_17686__$1;
(statearr_17708_17772[(2)] = inst_17666);

(statearr_17708_17772[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (10))){
var inst_17658 = (state_17686[(2)]);
var state_17686__$1 = state_17686;
var statearr_17709_17773 = state_17686__$1;
(statearr_17709_17773[(2)] = inst_17658);

(statearr_17709_17773[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (18))){
var inst_17669 = (state_17686[(2)]);
var state_17686__$1 = state_17686;
var statearr_17710_17774 = state_17686__$1;
(statearr_17710_17774[(2)] = inst_17669);

(statearr_17710_17774[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17687 === (8))){
var inst_17655 = cljs.core.async.close_BANG_(to);
var state_17686__$1 = state_17686;
var statearr_17711_17775 = state_17686__$1;
(statearr_17711_17775[(2)] = inst_17655);

(statearr_17711_17775[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12724__auto__,jobs,results,process,async))
;
return ((function (switch__12644__auto__,c__12724__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0 = (function (){
var statearr_17715 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17715[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__);

(statearr_17715[(1)] = (1));

return statearr_17715;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1 = (function (state_17686){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_17686);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e17716){if((e17716 instanceof Object)){
var ex__12648__auto__ = e17716;
var statearr_17717_17776 = state_17686;
(statearr_17717_17776[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17686);

return cljs.core.constant$keyword$recur;
} else {
throw e17716;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__17777 = state_17686;
state_17686 = G__17777;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__ = function(state_17686){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1.call(this,state_17686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto__,jobs,results,process,async))
})();
var state__12726__auto__ = (function (){var statearr_17718 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_17718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto__);

return statearr_17718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto__,jobs,results,process,async))
);

return c__12724__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$async);
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$compute);
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12724__auto___17900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___17900,tc,fc){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___17900,tc,fc){
return (function (state_17874){
var state_val_17875 = (state_17874[(1)]);
if((state_val_17875 === (7))){
var inst_17870 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
var statearr_17876_17901 = state_17874__$1;
(statearr_17876_17901[(2)] = inst_17870);

(statearr_17876_17901[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17875 === (1))){
var state_17874__$1 = state_17874;
var statearr_17877_17902 = state_17874__$1;
(statearr_17877_17902[(2)] = null);

(statearr_17877_17902[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17875 === (4))){
var inst_17851 = (state_17874[(7)]);
var inst_17851__$1 = (state_17874[(2)]);
var inst_17852 = (inst_17851__$1 == null);
var state_17874__$1 = (function (){var statearr_17878 = state_17874;
(statearr_17878[(7)] = inst_17851__$1);

return statearr_17878;
})();
if(cljs.core.truth_(inst_17852)){
var statearr_17879_17903 = state_17874__$1;
(statearr_17879_17903[(1)] = (5));

} else {
var statearr_17880_17904 = state_17874__$1;
(statearr_17880_17904[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17875 === (13))){
var state_17874__$1 = state_17874;
var statearr_17881_17905 = state_17874__$1;
(statearr_17881_17905[(2)] = null);

(statearr_17881_17905[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17875 === (6))){
var inst_17851 = (state_17874[(7)]);
var inst_17857 = (function (){var G__17882 = inst_17851;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__17882) : p.call(null,G__17882));
})();
var state_17874__$1 = state_17874;
if(cljs.core.truth_(inst_17857)){
var statearr_17883_17906 = state_17874__$1;
(statearr_17883_17906[(1)] = (9));

} else {
var statearr_17884_17907 = state_17874__$1;
(statearr_17884_17907[(1)] = (10));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17875 === (3))){
var inst_17872 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17874__$1,inst_17872);
} else {
if((state_val_17875 === (12))){
var state_17874__$1 = state_17874;
var statearr_17885_17908 = state_17874__$1;
(statearr_17885_17908[(2)] = null);

(statearr_17885_17908[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17875 === (2))){
var state_17874__$1 = state_17874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17874__$1,(4),ch);
} else {
if((state_val_17875 === (11))){
var inst_17851 = (state_17874[(7)]);
var inst_17861 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17874__$1,(8),inst_17861,inst_17851);
} else {
if((state_val_17875 === (9))){
var state_17874__$1 = state_17874;
var statearr_17886_17909 = state_17874__$1;
(statearr_17886_17909[(2)] = tc);

(statearr_17886_17909[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17875 === (5))){
var inst_17854 = cljs.core.async.close_BANG_(tc);
var inst_17855 = cljs.core.async.close_BANG_(fc);
var state_17874__$1 = (function (){var statearr_17887 = state_17874;
(statearr_17887[(8)] = inst_17854);

return statearr_17887;
})();
var statearr_17888_17910 = state_17874__$1;
(statearr_17888_17910[(2)] = inst_17855);

(statearr_17888_17910[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17875 === (14))){
var inst_17868 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
var statearr_17889_17911 = state_17874__$1;
(statearr_17889_17911[(2)] = inst_17868);

(statearr_17889_17911[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17875 === (10))){
var state_17874__$1 = state_17874;
var statearr_17890_17912 = state_17874__$1;
(statearr_17890_17912[(2)] = fc);

(statearr_17890_17912[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17875 === (8))){
var inst_17863 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
if(cljs.core.truth_(inst_17863)){
var statearr_17891_17913 = state_17874__$1;
(statearr_17891_17913[(1)] = (12));

} else {
var statearr_17892_17914 = state_17874__$1;
(statearr_17892_17914[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__12724__auto___17900,tc,fc))
;
return ((function (switch__12644__auto__,c__12724__auto___17900,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__12645__auto__ = null;
var cljs$core$async$split_$_state_machine__12645__auto____0 = (function (){
var statearr_17896 = [null,null,null,null,null,null,null,null,null];
(statearr_17896[(0)] = cljs$core$async$split_$_state_machine__12645__auto__);

(statearr_17896[(1)] = (1));

return statearr_17896;
});
var cljs$core$async$split_$_state_machine__12645__auto____1 = (function (state_17874){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_17874);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e17897){if((e17897 instanceof Object)){
var ex__12648__auto__ = e17897;
var statearr_17898_17915 = state_17874;
(statearr_17898_17915[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17874);

return cljs.core.constant$keyword$recur;
} else {
throw e17897;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__17916 = state_17874;
state_17874 = G__17916;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__12645__auto__ = function(state_17874){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__12645__auto____1.call(this,state_17874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__12645__auto____0;
cljs$core$async$split_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__12645__auto____1;
return cljs$core$async$split_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___17900,tc,fc))
})();
var state__12726__auto__ = (function (){var statearr_17899 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_17899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___17900);

return statearr_17899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___17900,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12724__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto__){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto__){
return (function (state_17965){
var state_val_17966 = (state_17965[(1)]);
if((state_val_17966 === (7))){
var inst_17961 = (state_17965[(2)]);
var state_17965__$1 = state_17965;
var statearr_17967_17985 = state_17965__$1;
(statearr_17967_17985[(2)] = inst_17961);

(statearr_17967_17985[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17966 === (6))){
var inst_17954 = (state_17965[(7)]);
var inst_17951 = (state_17965[(8)]);
var inst_17958 = (function (){var G__17968 = inst_17951;
var G__17969 = inst_17954;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17968,G__17969) : f.call(null,G__17968,G__17969));
})();
var inst_17951__$1 = inst_17958;
var state_17965__$1 = (function (){var statearr_17970 = state_17965;
(statearr_17970[(8)] = inst_17951__$1);

return statearr_17970;
})();
var statearr_17971_17986 = state_17965__$1;
(statearr_17971_17986[(2)] = null);

(statearr_17971_17986[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17966 === (5))){
var inst_17951 = (state_17965[(8)]);
var state_17965__$1 = state_17965;
var statearr_17972_17987 = state_17965__$1;
(statearr_17972_17987[(2)] = inst_17951);

(statearr_17972_17987[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17966 === (4))){
var inst_17954 = (state_17965[(7)]);
var inst_17954__$1 = (state_17965[(2)]);
var inst_17955 = (inst_17954__$1 == null);
var state_17965__$1 = (function (){var statearr_17973 = state_17965;
(statearr_17973[(7)] = inst_17954__$1);

return statearr_17973;
})();
if(cljs.core.truth_(inst_17955)){
var statearr_17974_17988 = state_17965__$1;
(statearr_17974_17988[(1)] = (5));

} else {
var statearr_17975_17989 = state_17965__$1;
(statearr_17975_17989[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17966 === (3))){
var inst_17963 = (state_17965[(2)]);
var state_17965__$1 = state_17965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17965__$1,inst_17963);
} else {
if((state_val_17966 === (2))){
var state_17965__$1 = state_17965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17965__$1,(4),ch);
} else {
if((state_val_17966 === (1))){
var inst_17951 = init;
var state_17965__$1 = (function (){var statearr_17976 = state_17965;
(statearr_17976[(8)] = inst_17951);

return statearr_17976;
})();
var statearr_17977_17990 = state_17965__$1;
(statearr_17977_17990[(2)] = null);

(statearr_17977_17990[(1)] = (2));


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
});})(c__12724__auto__))
;
return ((function (switch__12644__auto__,c__12724__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12645__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12645__auto____0 = (function (){
var statearr_17981 = [null,null,null,null,null,null,null,null,null];
(statearr_17981[(0)] = cljs$core$async$reduce_$_state_machine__12645__auto__);

(statearr_17981[(1)] = (1));

return statearr_17981;
});
var cljs$core$async$reduce_$_state_machine__12645__auto____1 = (function (state_17965){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_17965);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e17982){if((e17982 instanceof Object)){
var ex__12648__auto__ = e17982;
var statearr_17983_17991 = state_17965;
(statearr_17983_17991[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17965);

return cljs.core.constant$keyword$recur;
} else {
throw e17982;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__17992 = state_17965;
state_17965 = G__17992;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12645__auto__ = function(state_17965){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12645__auto____1.call(this,state_17965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12645__auto____0;
cljs$core$async$reduce_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12645__auto____1;
return cljs$core$async$reduce_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto__))
})();
var state__12726__auto__ = (function (){var statearr_17984 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_17984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto__);

return statearr_17984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto__))
);

return c__12724__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__12724__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto__){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto__){
return (function (state_18069){
var state_val_18070 = (state_18069[(1)]);
if((state_val_18070 === (7))){
var inst_18051 = (state_18069[(2)]);
var state_18069__$1 = state_18069;
var statearr_18071_18094 = state_18069__$1;
(statearr_18071_18094[(2)] = inst_18051);

(statearr_18071_18094[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18070 === (1))){
var inst_18045 = cljs.core.seq(coll);
var inst_18046 = inst_18045;
var state_18069__$1 = (function (){var statearr_18072 = state_18069;
(statearr_18072[(7)] = inst_18046);

return statearr_18072;
})();
var statearr_18073_18095 = state_18069__$1;
(statearr_18073_18095[(2)] = null);

(statearr_18073_18095[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18070 === (4))){
var inst_18046 = (state_18069[(7)]);
var inst_18049 = cljs.core.first(inst_18046);
var state_18069__$1 = state_18069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18069__$1,(7),ch,inst_18049);
} else {
if((state_val_18070 === (13))){
var inst_18063 = (state_18069[(2)]);
var state_18069__$1 = state_18069;
var statearr_18074_18096 = state_18069__$1;
(statearr_18074_18096[(2)] = inst_18063);

(statearr_18074_18096[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18070 === (6))){
var inst_18054 = (state_18069[(2)]);
var state_18069__$1 = state_18069;
if(cljs.core.truth_(inst_18054)){
var statearr_18075_18097 = state_18069__$1;
(statearr_18075_18097[(1)] = (8));

} else {
var statearr_18076_18098 = state_18069__$1;
(statearr_18076_18098[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18070 === (3))){
var inst_18067 = (state_18069[(2)]);
var state_18069__$1 = state_18069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18069__$1,inst_18067);
} else {
if((state_val_18070 === (12))){
var state_18069__$1 = state_18069;
var statearr_18077_18099 = state_18069__$1;
(statearr_18077_18099[(2)] = null);

(statearr_18077_18099[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18070 === (2))){
var inst_18046 = (state_18069[(7)]);
var state_18069__$1 = state_18069;
if(cljs.core.truth_(inst_18046)){
var statearr_18078_18100 = state_18069__$1;
(statearr_18078_18100[(1)] = (4));

} else {
var statearr_18079_18101 = state_18069__$1;
(statearr_18079_18101[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18070 === (11))){
var inst_18060 = cljs.core.async.close_BANG_(ch);
var state_18069__$1 = state_18069;
var statearr_18080_18102 = state_18069__$1;
(statearr_18080_18102[(2)] = inst_18060);

(statearr_18080_18102[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18070 === (9))){
var state_18069__$1 = state_18069;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18081_18103 = state_18069__$1;
(statearr_18081_18103[(1)] = (11));

} else {
var statearr_18082_18104 = state_18069__$1;
(statearr_18082_18104[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18070 === (5))){
var inst_18046 = (state_18069[(7)]);
var state_18069__$1 = state_18069;
var statearr_18083_18105 = state_18069__$1;
(statearr_18083_18105[(2)] = inst_18046);

(statearr_18083_18105[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18070 === (10))){
var inst_18065 = (state_18069[(2)]);
var state_18069__$1 = state_18069;
var statearr_18084_18106 = state_18069__$1;
(statearr_18084_18106[(2)] = inst_18065);

(statearr_18084_18106[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18070 === (8))){
var inst_18046 = (state_18069[(7)]);
var inst_18056 = cljs.core.next(inst_18046);
var inst_18046__$1 = inst_18056;
var state_18069__$1 = (function (){var statearr_18085 = state_18069;
(statearr_18085[(7)] = inst_18046__$1);

return statearr_18085;
})();
var statearr_18086_18107 = state_18069__$1;
(statearr_18086_18107[(2)] = null);

(statearr_18086_18107[(1)] = (2));


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
}
}
}
}
}
}
});})(c__12724__auto__))
;
return ((function (switch__12644__auto__,c__12724__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__12645__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__12645__auto____0 = (function (){
var statearr_18090 = [null,null,null,null,null,null,null,null];
(statearr_18090[(0)] = cljs$core$async$onto_chan_$_state_machine__12645__auto__);

(statearr_18090[(1)] = (1));

return statearr_18090;
});
var cljs$core$async$onto_chan_$_state_machine__12645__auto____1 = (function (state_18069){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_18069);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e18091){if((e18091 instanceof Object)){
var ex__12648__auto__ = e18091;
var statearr_18092_18108 = state_18069;
(statearr_18092_18108[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18069);

return cljs.core.constant$keyword$recur;
} else {
throw e18091;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__18109 = state_18069;
state_18069 = G__18109;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__12645__auto__ = function(state_18069){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__12645__auto____1.call(this,state_18069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__12645__auto____0;
cljs$core$async$onto_chan_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__12645__auto____1;
return cljs$core$async$onto_chan_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto__))
})();
var state__12726__auto__ = (function (){var statearr_18093 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_18093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto__);

return statearr_18093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto__))
);

return c__12724__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj18111 = {};
return obj18111;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4151__auto__ = _;
if(and__4151__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4151__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4799__auto__ = (((_ == null))?null:_);
return (function (){var or__4163__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__18115 = x__4799__auto__;
return goog.typeOf(G__18115);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj18117 = {};
return obj18117;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4151__auto__ = m;
if(and__4151__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4151__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4799__auto__ = (((m == null))?null:m);
return (function (){var or__4163__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__18121 = x__4799__auto__;
return goog.typeOf(G__18121);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4151__auto__ = m;
if(and__4151__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4151__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4799__auto__ = (((m == null))?null:m);
return (function (){var or__4163__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__18125 = x__4799__auto__;
return goog.typeOf(G__18125);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4151__auto__ = m;
if(and__4151__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4151__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4799__auto__ = (((m == null))?null:m);
return (function (){var or__4163__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__18129 = x__4799__auto__;
return goog.typeOf(G__18129);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__18359 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18359) : cljs.core.atom.call(null,G__18359));
})();
var m = (function (){
if(typeof cljs.core.async.t18360 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18360 = (function (cs,ch,mult,meta18361){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18361 = meta18361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18360.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18360.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18360.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18360.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18363_18588 = self__.cs;
var G__18364_18589 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18363_18588,G__18364_18589) : cljs.core.reset_BANG_.call(null,G__18363_18588,G__18364_18589));

return null;
});})(cs))
;

cljs.core.async.t18360.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18360.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18362){
var self__ = this;
var _18362__$1 = this;
return self__.meta18361;
});})(cs))
;

cljs.core.async.t18360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18362,meta18361__$1){
var self__ = this;
var _18362__$1 = this;
return (new cljs.core.async.t18360(self__.cs,self__.ch,self__.mult,meta18361__$1));
});})(cs))
;

cljs.core.async.t18360.cljs$lang$type = true;

cljs.core.async.t18360.cljs$lang$ctorStr = "cljs.core.async/t18360";

cljs.core.async.t18360.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t18360");
});})(cs))
;

cljs.core.async.__GT_t18360 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t18360(cs__$1,ch__$1,mult__$1,meta18361){
return (new cljs.core.async.t18360(cs__$1,ch__$1,mult__$1,meta18361));
});})(cs))
;

}

return (new cljs.core.async.t18360(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__18365 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18365) : cljs.core.atom.call(null,G__18365));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12724__auto___18590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___18590,cs,m,dchan,dctr,done){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___18590,cs,m,dchan,dctr,done){
return (function (state_18496){
var state_val_18497 = (state_18496[(1)]);
if((state_val_18497 === (7))){
var inst_18492 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18498_18591 = state_18496__$1;
(statearr_18498_18591[(2)] = inst_18492);

(statearr_18498_18591[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (20))){
var inst_18397 = (state_18496[(7)]);
var inst_18407 = cljs.core.first(inst_18397);
var inst_18408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18407,(0),null);
var inst_18409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18407,(1),null);
var state_18496__$1 = (function (){var statearr_18499 = state_18496;
(statearr_18499[(8)] = inst_18408);

return statearr_18499;
})();
if(cljs.core.truth_(inst_18409)){
var statearr_18500_18592 = state_18496__$1;
(statearr_18500_18592[(1)] = (22));

} else {
var statearr_18501_18593 = state_18496__$1;
(statearr_18501_18593[(1)] = (23));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (27))){
var inst_18439 = (state_18496[(9)]);
var inst_18444 = (state_18496[(10)]);
var inst_18368 = (state_18496[(11)]);
var inst_18437 = (state_18496[(12)]);
var inst_18444__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18437,inst_18439);
var inst_18445 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18444__$1,inst_18368,done);
var state_18496__$1 = (function (){var statearr_18502 = state_18496;
(statearr_18502[(10)] = inst_18444__$1);

return statearr_18502;
})();
if(cljs.core.truth_(inst_18445)){
var statearr_18503_18594 = state_18496__$1;
(statearr_18503_18594[(1)] = (30));

} else {
var statearr_18504_18595 = state_18496__$1;
(statearr_18504_18595[(1)] = (31));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (1))){
var state_18496__$1 = state_18496;
var statearr_18505_18596 = state_18496__$1;
(statearr_18505_18596[(2)] = null);

(statearr_18505_18596[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (24))){
var inst_18397 = (state_18496[(7)]);
var inst_18414 = (state_18496[(2)]);
var inst_18415 = cljs.core.next(inst_18397);
var inst_18377 = inst_18415;
var inst_18378 = null;
var inst_18379 = (0);
var inst_18380 = (0);
var state_18496__$1 = (function (){var statearr_18506 = state_18496;
(statearr_18506[(13)] = inst_18380);

(statearr_18506[(14)] = inst_18377);

(statearr_18506[(15)] = inst_18414);

(statearr_18506[(16)] = inst_18379);

(statearr_18506[(17)] = inst_18378);

return statearr_18506;
})();
var statearr_18507_18597 = state_18496__$1;
(statearr_18507_18597[(2)] = null);

(statearr_18507_18597[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (39))){
var state_18496__$1 = state_18496;
var statearr_18511_18598 = state_18496__$1;
(statearr_18511_18598[(2)] = null);

(statearr_18511_18598[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (4))){
var inst_18368 = (state_18496[(11)]);
var inst_18368__$1 = (state_18496[(2)]);
var inst_18369 = (inst_18368__$1 == null);
var state_18496__$1 = (function (){var statearr_18512 = state_18496;
(statearr_18512[(11)] = inst_18368__$1);

return statearr_18512;
})();
if(cljs.core.truth_(inst_18369)){
var statearr_18513_18599 = state_18496__$1;
(statearr_18513_18599[(1)] = (5));

} else {
var statearr_18514_18600 = state_18496__$1;
(statearr_18514_18600[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (15))){
var inst_18380 = (state_18496[(13)]);
var inst_18377 = (state_18496[(14)]);
var inst_18379 = (state_18496[(16)]);
var inst_18378 = (state_18496[(17)]);
var inst_18393 = (state_18496[(2)]);
var inst_18394 = (inst_18380 + (1));
var tmp18508 = inst_18377;
var tmp18509 = inst_18379;
var tmp18510 = inst_18378;
var inst_18377__$1 = tmp18508;
var inst_18378__$1 = tmp18510;
var inst_18379__$1 = tmp18509;
var inst_18380__$1 = inst_18394;
var state_18496__$1 = (function (){var statearr_18515 = state_18496;
(statearr_18515[(13)] = inst_18380__$1);

(statearr_18515[(18)] = inst_18393);

(statearr_18515[(14)] = inst_18377__$1);

(statearr_18515[(16)] = inst_18379__$1);

(statearr_18515[(17)] = inst_18378__$1);

return statearr_18515;
})();
var statearr_18516_18601 = state_18496__$1;
(statearr_18516_18601[(2)] = null);

(statearr_18516_18601[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (21))){
var inst_18418 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18520_18602 = state_18496__$1;
(statearr_18520_18602[(2)] = inst_18418);

(statearr_18520_18602[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (31))){
var inst_18444 = (state_18496[(10)]);
var inst_18448 = done(null);
var inst_18449 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18444);
var state_18496__$1 = (function (){var statearr_18521 = state_18496;
(statearr_18521[(19)] = inst_18448);

return statearr_18521;
})();
var statearr_18522_18603 = state_18496__$1;
(statearr_18522_18603[(2)] = inst_18449);

(statearr_18522_18603[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (32))){
var inst_18439 = (state_18496[(9)]);
var inst_18436 = (state_18496[(20)]);
var inst_18438 = (state_18496[(21)]);
var inst_18437 = (state_18496[(12)]);
var inst_18451 = (state_18496[(2)]);
var inst_18452 = (inst_18439 + (1));
var tmp18517 = inst_18436;
var tmp18518 = inst_18438;
var tmp18519 = inst_18437;
var inst_18436__$1 = tmp18517;
var inst_18437__$1 = tmp18519;
var inst_18438__$1 = tmp18518;
var inst_18439__$1 = inst_18452;
var state_18496__$1 = (function (){var statearr_18523 = state_18496;
(statearr_18523[(9)] = inst_18439__$1);

(statearr_18523[(20)] = inst_18436__$1);

(statearr_18523[(21)] = inst_18438__$1);

(statearr_18523[(22)] = inst_18451);

(statearr_18523[(12)] = inst_18437__$1);

return statearr_18523;
})();
var statearr_18524_18604 = state_18496__$1;
(statearr_18524_18604[(2)] = null);

(statearr_18524_18604[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (40))){
var inst_18464 = (state_18496[(23)]);
var inst_18468 = done(null);
var inst_18469 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18464);
var state_18496__$1 = (function (){var statearr_18525 = state_18496;
(statearr_18525[(24)] = inst_18468);

return statearr_18525;
})();
var statearr_18526_18605 = state_18496__$1;
(statearr_18526_18605[(2)] = inst_18469);

(statearr_18526_18605[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (33))){
var inst_18455 = (state_18496[(25)]);
var inst_18457 = cljs.core.chunked_seq_QMARK_(inst_18455);
var state_18496__$1 = state_18496;
if(inst_18457){
var statearr_18527_18606 = state_18496__$1;
(statearr_18527_18606[(1)] = (36));

} else {
var statearr_18528_18607 = state_18496__$1;
(statearr_18528_18607[(1)] = (37));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (13))){
var inst_18387 = (state_18496[(26)]);
var inst_18390 = cljs.core.async.close_BANG_(inst_18387);
var state_18496__$1 = state_18496;
var statearr_18529_18608 = state_18496__$1;
(statearr_18529_18608[(2)] = inst_18390);

(statearr_18529_18608[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (22))){
var inst_18408 = (state_18496[(8)]);
var inst_18411 = cljs.core.async.close_BANG_(inst_18408);
var state_18496__$1 = state_18496;
var statearr_18530_18609 = state_18496__$1;
(statearr_18530_18609[(2)] = inst_18411);

(statearr_18530_18609[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (36))){
var inst_18455 = (state_18496[(25)]);
var inst_18459 = cljs.core.chunk_first(inst_18455);
var inst_18460 = cljs.core.chunk_rest(inst_18455);
var inst_18461 = cljs.core.count(inst_18459);
var inst_18436 = inst_18460;
var inst_18437 = inst_18459;
var inst_18438 = inst_18461;
var inst_18439 = (0);
var state_18496__$1 = (function (){var statearr_18531 = state_18496;
(statearr_18531[(9)] = inst_18439);

(statearr_18531[(20)] = inst_18436);

(statearr_18531[(21)] = inst_18438);

(statearr_18531[(12)] = inst_18437);

return statearr_18531;
})();
var statearr_18532_18610 = state_18496__$1;
(statearr_18532_18610[(2)] = null);

(statearr_18532_18610[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (41))){
var inst_18455 = (state_18496[(25)]);
var inst_18471 = (state_18496[(2)]);
var inst_18472 = cljs.core.next(inst_18455);
var inst_18436 = inst_18472;
var inst_18437 = null;
var inst_18438 = (0);
var inst_18439 = (0);
var state_18496__$1 = (function (){var statearr_18533 = state_18496;
(statearr_18533[(9)] = inst_18439);

(statearr_18533[(20)] = inst_18436);

(statearr_18533[(21)] = inst_18438);

(statearr_18533[(27)] = inst_18471);

(statearr_18533[(12)] = inst_18437);

return statearr_18533;
})();
var statearr_18534_18611 = state_18496__$1;
(statearr_18534_18611[(2)] = null);

(statearr_18534_18611[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (43))){
var state_18496__$1 = state_18496;
var statearr_18535_18612 = state_18496__$1;
(statearr_18535_18612[(2)] = null);

(statearr_18535_18612[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (29))){
var inst_18480 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18536_18613 = state_18496__$1;
(statearr_18536_18613[(2)] = inst_18480);

(statearr_18536_18613[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (44))){
var inst_18489 = (state_18496[(2)]);
var state_18496__$1 = (function (){var statearr_18537 = state_18496;
(statearr_18537[(28)] = inst_18489);

return statearr_18537;
})();
var statearr_18538_18614 = state_18496__$1;
(statearr_18538_18614[(2)] = null);

(statearr_18538_18614[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (6))){
var inst_18428 = (state_18496[(29)]);
var inst_18427 = (function (){var G__18539 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18539) : cljs.core.deref.call(null,G__18539));
})();
var inst_18428__$1 = cljs.core.keys(inst_18427);
var inst_18429 = cljs.core.count(inst_18428__$1);
var inst_18430 = (function (){var G__18540 = dctr;
var G__18541 = inst_18429;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18540,G__18541) : cljs.core.reset_BANG_.call(null,G__18540,G__18541));
})();
var inst_18435 = cljs.core.seq(inst_18428__$1);
var inst_18436 = inst_18435;
var inst_18437 = null;
var inst_18438 = (0);
var inst_18439 = (0);
var state_18496__$1 = (function (){var statearr_18542 = state_18496;
(statearr_18542[(9)] = inst_18439);

(statearr_18542[(20)] = inst_18436);

(statearr_18542[(21)] = inst_18438);

(statearr_18542[(30)] = inst_18430);

(statearr_18542[(12)] = inst_18437);

(statearr_18542[(29)] = inst_18428__$1);

return statearr_18542;
})();
var statearr_18543_18615 = state_18496__$1;
(statearr_18543_18615[(2)] = null);

(statearr_18543_18615[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (28))){
var inst_18436 = (state_18496[(20)]);
var inst_18455 = (state_18496[(25)]);
var inst_18455__$1 = cljs.core.seq(inst_18436);
var state_18496__$1 = (function (){var statearr_18544 = state_18496;
(statearr_18544[(25)] = inst_18455__$1);

return statearr_18544;
})();
if(inst_18455__$1){
var statearr_18545_18616 = state_18496__$1;
(statearr_18545_18616[(1)] = (33));

} else {
var statearr_18546_18617 = state_18496__$1;
(statearr_18546_18617[(1)] = (34));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (25))){
var inst_18439 = (state_18496[(9)]);
var inst_18438 = (state_18496[(21)]);
var inst_18441 = (inst_18439 < inst_18438);
var inst_18442 = inst_18441;
var state_18496__$1 = state_18496;
if(cljs.core.truth_(inst_18442)){
var statearr_18547_18618 = state_18496__$1;
(statearr_18547_18618[(1)] = (27));

} else {
var statearr_18548_18619 = state_18496__$1;
(statearr_18548_18619[(1)] = (28));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (34))){
var state_18496__$1 = state_18496;
var statearr_18549_18620 = state_18496__$1;
(statearr_18549_18620[(2)] = null);

(statearr_18549_18620[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (17))){
var state_18496__$1 = state_18496;
var statearr_18550_18621 = state_18496__$1;
(statearr_18550_18621[(2)] = null);

(statearr_18550_18621[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (3))){
var inst_18494 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18496__$1,inst_18494);
} else {
if((state_val_18497 === (12))){
var inst_18423 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18551_18622 = state_18496__$1;
(statearr_18551_18622[(2)] = inst_18423);

(statearr_18551_18622[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (2))){
var state_18496__$1 = state_18496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18496__$1,(4),ch);
} else {
if((state_val_18497 === (23))){
var state_18496__$1 = state_18496;
var statearr_18552_18623 = state_18496__$1;
(statearr_18552_18623[(2)] = null);

(statearr_18552_18623[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (35))){
var inst_18478 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18553_18624 = state_18496__$1;
(statearr_18553_18624[(2)] = inst_18478);

(statearr_18553_18624[(1)] = (29));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (19))){
var inst_18397 = (state_18496[(7)]);
var inst_18401 = cljs.core.chunk_first(inst_18397);
var inst_18402 = cljs.core.chunk_rest(inst_18397);
var inst_18403 = cljs.core.count(inst_18401);
var inst_18377 = inst_18402;
var inst_18378 = inst_18401;
var inst_18379 = inst_18403;
var inst_18380 = (0);
var state_18496__$1 = (function (){var statearr_18554 = state_18496;
(statearr_18554[(13)] = inst_18380);

(statearr_18554[(14)] = inst_18377);

(statearr_18554[(16)] = inst_18379);

(statearr_18554[(17)] = inst_18378);

return statearr_18554;
})();
var statearr_18555_18625 = state_18496__$1;
(statearr_18555_18625[(2)] = null);

(statearr_18555_18625[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (11))){
var inst_18377 = (state_18496[(14)]);
var inst_18397 = (state_18496[(7)]);
var inst_18397__$1 = cljs.core.seq(inst_18377);
var state_18496__$1 = (function (){var statearr_18556 = state_18496;
(statearr_18556[(7)] = inst_18397__$1);

return statearr_18556;
})();
if(inst_18397__$1){
var statearr_18557_18626 = state_18496__$1;
(statearr_18557_18626[(1)] = (16));

} else {
var statearr_18558_18627 = state_18496__$1;
(statearr_18558_18627[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (9))){
var inst_18425 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18559_18628 = state_18496__$1;
(statearr_18559_18628[(2)] = inst_18425);

(statearr_18559_18628[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (5))){
var inst_18375 = (function (){var G__18560 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18560) : cljs.core.deref.call(null,G__18560));
})();
var inst_18376 = cljs.core.seq(inst_18375);
var inst_18377 = inst_18376;
var inst_18378 = null;
var inst_18379 = (0);
var inst_18380 = (0);
var state_18496__$1 = (function (){var statearr_18561 = state_18496;
(statearr_18561[(13)] = inst_18380);

(statearr_18561[(14)] = inst_18377);

(statearr_18561[(16)] = inst_18379);

(statearr_18561[(17)] = inst_18378);

return statearr_18561;
})();
var statearr_18562_18629 = state_18496__$1;
(statearr_18562_18629[(2)] = null);

(statearr_18562_18629[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (14))){
var state_18496__$1 = state_18496;
var statearr_18563_18630 = state_18496__$1;
(statearr_18563_18630[(2)] = null);

(statearr_18563_18630[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (45))){
var inst_18486 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18564_18631 = state_18496__$1;
(statearr_18564_18631[(2)] = inst_18486);

(statearr_18564_18631[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (26))){
var inst_18428 = (state_18496[(29)]);
var inst_18482 = (state_18496[(2)]);
var inst_18483 = cljs.core.seq(inst_18428);
var state_18496__$1 = (function (){var statearr_18565 = state_18496;
(statearr_18565[(31)] = inst_18482);

return statearr_18565;
})();
if(inst_18483){
var statearr_18566_18632 = state_18496__$1;
(statearr_18566_18632[(1)] = (42));

} else {
var statearr_18567_18633 = state_18496__$1;
(statearr_18567_18633[(1)] = (43));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (16))){
var inst_18397 = (state_18496[(7)]);
var inst_18399 = cljs.core.chunked_seq_QMARK_(inst_18397);
var state_18496__$1 = state_18496;
if(inst_18399){
var statearr_18568_18634 = state_18496__$1;
(statearr_18568_18634[(1)] = (19));

} else {
var statearr_18569_18635 = state_18496__$1;
(statearr_18569_18635[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (38))){
var inst_18475 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18570_18636 = state_18496__$1;
(statearr_18570_18636[(2)] = inst_18475);

(statearr_18570_18636[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (30))){
var state_18496__$1 = state_18496;
var statearr_18571_18637 = state_18496__$1;
(statearr_18571_18637[(2)] = null);

(statearr_18571_18637[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (10))){
var inst_18380 = (state_18496[(13)]);
var inst_18378 = (state_18496[(17)]);
var inst_18386 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18378,inst_18380);
var inst_18387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18386,(0),null);
var inst_18388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18386,(1),null);
var state_18496__$1 = (function (){var statearr_18572 = state_18496;
(statearr_18572[(26)] = inst_18387);

return statearr_18572;
})();
if(cljs.core.truth_(inst_18388)){
var statearr_18573_18638 = state_18496__$1;
(statearr_18573_18638[(1)] = (13));

} else {
var statearr_18574_18639 = state_18496__$1;
(statearr_18574_18639[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (18))){
var inst_18421 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18575_18640 = state_18496__$1;
(statearr_18575_18640[(2)] = inst_18421);

(statearr_18575_18640[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (42))){
var state_18496__$1 = state_18496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18496__$1,(45),dchan);
} else {
if((state_val_18497 === (37))){
var inst_18368 = (state_18496[(11)]);
var inst_18464 = (state_18496[(23)]);
var inst_18455 = (state_18496[(25)]);
var inst_18464__$1 = cljs.core.first(inst_18455);
var inst_18465 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18464__$1,inst_18368,done);
var state_18496__$1 = (function (){var statearr_18576 = state_18496;
(statearr_18576[(23)] = inst_18464__$1);

return statearr_18576;
})();
if(cljs.core.truth_(inst_18465)){
var statearr_18577_18641 = state_18496__$1;
(statearr_18577_18641[(1)] = (39));

} else {
var statearr_18578_18642 = state_18496__$1;
(statearr_18578_18642[(1)] = (40));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18497 === (8))){
var inst_18380 = (state_18496[(13)]);
var inst_18379 = (state_18496[(16)]);
var inst_18382 = (inst_18380 < inst_18379);
var inst_18383 = inst_18382;
var state_18496__$1 = state_18496;
if(cljs.core.truth_(inst_18383)){
var statearr_18579_18643 = state_18496__$1;
(statearr_18579_18643[(1)] = (10));

} else {
var statearr_18580_18644 = state_18496__$1;
(statearr_18580_18644[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12724__auto___18590,cs,m,dchan,dctr,done))
;
return ((function (switch__12644__auto__,c__12724__auto___18590,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12645__auto__ = null;
var cljs$core$async$mult_$_state_machine__12645__auto____0 = (function (){
var statearr_18584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18584[(0)] = cljs$core$async$mult_$_state_machine__12645__auto__);

(statearr_18584[(1)] = (1));

return statearr_18584;
});
var cljs$core$async$mult_$_state_machine__12645__auto____1 = (function (state_18496){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_18496);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e18585){if((e18585 instanceof Object)){
var ex__12648__auto__ = e18585;
var statearr_18586_18645 = state_18496;
(statearr_18586_18645[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18496);

return cljs.core.constant$keyword$recur;
} else {
throw e18585;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__18646 = state_18496;
state_18496 = G__18646;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12645__auto__ = function(state_18496){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12645__auto____1.call(this,state_18496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12645__auto____0;
cljs$core$async$mult_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12645__auto____1;
return cljs$core$async$mult_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___18590,cs,m,dchan,dctr,done))
})();
var state__12726__auto__ = (function (){var statearr_18587 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_18587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___18590);

return statearr_18587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___18590,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj18651 = {};
return obj18651;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4151__auto__ = m;
if(and__4151__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4151__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4799__auto__ = (((m == null))?null:m);
return (function (){var or__4163__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__18655 = x__4799__auto__;
return goog.typeOf(G__18655);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4151__auto__ = m;
if(and__4151__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4151__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4799__auto__ = (((m == null))?null:m);
return (function (){var or__4163__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__18659 = x__4799__auto__;
return goog.typeOf(G__18659);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4151__auto__ = m;
if(and__4151__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4151__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4799__auto__ = (((m == null))?null:m);
return (function (){var or__4163__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__18663 = x__4799__auto__;
return goog.typeOf(G__18663);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4151__auto__ = m;
if(and__4151__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4151__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4799__auto__ = (((m == null))?null:m);
return (function (){var or__4163__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__18667 = x__4799__auto__;
return goog.typeOf(G__18667);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4151__auto__ = m;
if(and__4151__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4151__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4799__auto__ = (((m == null))?null:m);
return (function (){var or__4163__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__18671 = x__4799__auto__;
return goog.typeOf(G__18671);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18672){
var map__18678 = p__18672;
var map__18678__$1 = ((cljs.core.seq_QMARK_(map__18678))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18678):map__18678);
var opts = map__18678__$1;
var statearr_18679_18683 = state;
(statearr_18679_18683[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__18678,map__18678__$1,opts){
return (function (val){
var statearr_18680_18684 = state;
(statearr_18680_18684[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18678,map__18678__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18681_18685 = state;
(statearr_18681_18685[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__18682 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18682) : cljs.core.deref.call(null,G__18682));
})());


return cljs.core.constant$keyword$recur;
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18672 = null;
if (arguments.length > 3) {
var G__18686__i = 0, G__18686__a = new Array(arguments.length -  3);
while (G__18686__i < G__18686__a.length) {G__18686__a[G__18686__i] = arguments[G__18686__i + 3]; ++G__18686__i;}
  p__18672 = new cljs.core.IndexedSeq(G__18686__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18672);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18687){
var state = cljs.core.first(arglist__18687);
arglist__18687 = cljs.core.next(arglist__18687);
var cont_block = cljs.core.first(arglist__18687);
arglist__18687 = cljs.core.next(arglist__18687);
var ports = cljs.core.first(arglist__18687);
var p__18672 = cljs.core.rest(arglist__18687);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__18672);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__18821 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18821) : cljs.core.atom.call(null,G__18821));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$pause,null,cljs.core.constant$keyword$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$solo);
var solo_mode = (function (){var G__18822 = cljs.core.constant$keyword$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18822) : cljs.core.atom.call(null,G__18822));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__18823 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__18823) : attr.call(null,G__18823));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__18824 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18824) : cljs.core.deref.call(null,G__18824));
})();
var mode = (function (){var G__18825 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18825) : cljs.core.deref.call(null,G__18825));
})();
var solos = pick(cljs.core.constant$keyword$solo,chs);
var pauses = pick(cljs.core.constant$keyword$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$solos,solos,cljs.core.constant$keyword$mutes,pick(cljs.core.constant$keyword$mute,chs),cljs.core.constant$keyword$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t18826 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18826 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18827){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18827 = meta18827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18826.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18826.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18826.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18826.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18829_18954 = self__.cs;
var G__18830_18955 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18829_18954,G__18830_18955) : cljs.core.reset_BANG_.call(null,G__18829_18954,G__18830_18955));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18826.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18826.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__18831 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__18831) : self__.solo_modes.call(null,G__18831));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__18832_18956 = self__.solo_mode;
var G__18833_18957 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18832_18956,G__18833_18957) : cljs.core.reset_BANG_.call(null,G__18832_18956,G__18833_18957));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18826.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18826.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18828){
var self__ = this;
var _18828__$1 = this;
return self__.meta18827;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18828,meta18827__$1){
var self__ = this;
var _18828__$1 = this;
return (new cljs.core.async.t18826(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18827__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18826.cljs$lang$type = true;

cljs.core.async.t18826.cljs$lang$ctorStr = "cljs.core.async/t18826";

cljs.core.async.t18826.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t18826");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18826 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t18826(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18827){
return (new cljs.core.async.t18826(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18827));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18826(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12724__auto___18958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___18958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___18958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18905){
var state_val_18906 = (state_18905[(1)]);
if((state_val_18906 === (7))){
var inst_18847 = (state_18905[(7)]);
var inst_18852 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18847);
var state_18905__$1 = state_18905;
var statearr_18907_18959 = state_18905__$1;
(statearr_18907_18959[(2)] = inst_18852);

(statearr_18907_18959[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (20))){
var inst_18862 = (state_18905[(8)]);
var state_18905__$1 = state_18905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18905__$1,(23),out,inst_18862);
} else {
if((state_val_18906 === (1))){
var inst_18837 = (state_18905[(9)]);
var inst_18837__$1 = calc_state();
var inst_18838 = cljs.core.seq_QMARK_(inst_18837__$1);
var state_18905__$1 = (function (){var statearr_18908 = state_18905;
(statearr_18908[(9)] = inst_18837__$1);

return statearr_18908;
})();
if(inst_18838){
var statearr_18909_18960 = state_18905__$1;
(statearr_18909_18960[(1)] = (2));

} else {
var statearr_18910_18961 = state_18905__$1;
(statearr_18910_18961[(1)] = (3));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (24))){
var inst_18855 = (state_18905[(10)]);
var inst_18847 = inst_18855;
var state_18905__$1 = (function (){var statearr_18911 = state_18905;
(statearr_18911[(7)] = inst_18847);

return statearr_18911;
})();
var statearr_18912_18962 = state_18905__$1;
(statearr_18912_18962[(2)] = null);

(statearr_18912_18962[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (4))){
var inst_18837 = (state_18905[(9)]);
var inst_18843 = (state_18905[(2)]);
var inst_18844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18843,cljs.core.constant$keyword$reads);
var inst_18845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18843,cljs.core.constant$keyword$mutes);
var inst_18846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18843,cljs.core.constant$keyword$solos);
var inst_18847 = inst_18837;
var state_18905__$1 = (function (){var statearr_18913 = state_18905;
(statearr_18913[(11)] = inst_18845);

(statearr_18913[(12)] = inst_18846);

(statearr_18913[(13)] = inst_18844);

(statearr_18913[(7)] = inst_18847);

return statearr_18913;
})();
var statearr_18914_18963 = state_18905__$1;
(statearr_18914_18963[(2)] = null);

(statearr_18914_18963[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (15))){
var state_18905__$1 = state_18905;
var statearr_18915_18964 = state_18905__$1;
(statearr_18915_18964[(2)] = null);

(statearr_18915_18964[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (21))){
var inst_18855 = (state_18905[(10)]);
var inst_18847 = inst_18855;
var state_18905__$1 = (function (){var statearr_18916 = state_18905;
(statearr_18916[(7)] = inst_18847);

return statearr_18916;
})();
var statearr_18917_18965 = state_18905__$1;
(statearr_18917_18965[(2)] = null);

(statearr_18917_18965[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (13))){
var inst_18901 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
var statearr_18918_18966 = state_18905__$1;
(statearr_18918_18966[(2)] = inst_18901);

(statearr_18918_18966[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (22))){
var inst_18899 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
var statearr_18919_18967 = state_18905__$1;
(statearr_18919_18967[(2)] = inst_18899);

(statearr_18919_18967[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (6))){
var inst_18903 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18905__$1,inst_18903);
} else {
if((state_val_18906 === (25))){
var state_18905__$1 = state_18905;
var statearr_18920_18968 = state_18905__$1;
(statearr_18920_18968[(2)] = null);

(statearr_18920_18968[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (17))){
var inst_18878 = (state_18905[(14)]);
var state_18905__$1 = state_18905;
var statearr_18921_18969 = state_18905__$1;
(statearr_18921_18969[(2)] = inst_18878);

(statearr_18921_18969[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (3))){
var inst_18837 = (state_18905[(9)]);
var state_18905__$1 = state_18905;
var statearr_18922_18970 = state_18905__$1;
(statearr_18922_18970[(2)] = inst_18837);

(statearr_18922_18970[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (12))){
var inst_18858 = (state_18905[(15)]);
var inst_18878 = (state_18905[(14)]);
var inst_18863 = (state_18905[(16)]);
var inst_18878__$1 = (function (){var G__18923 = inst_18863;
return (inst_18858.cljs$core$IFn$_invoke$arity$1 ? inst_18858.cljs$core$IFn$_invoke$arity$1(G__18923) : inst_18858.call(null,G__18923));
})();
var state_18905__$1 = (function (){var statearr_18924 = state_18905;
(statearr_18924[(14)] = inst_18878__$1);

return statearr_18924;
})();
if(cljs.core.truth_(inst_18878__$1)){
var statearr_18925_18971 = state_18905__$1;
(statearr_18925_18971[(1)] = (17));

} else {
var statearr_18926_18972 = state_18905__$1;
(statearr_18926_18972[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (2))){
var inst_18837 = (state_18905[(9)]);
var inst_18840 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18837);
var state_18905__$1 = state_18905;
var statearr_18927_18973 = state_18905__$1;
(statearr_18927_18973[(2)] = inst_18840);

(statearr_18927_18973[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (23))){
var inst_18890 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
if(cljs.core.truth_(inst_18890)){
var statearr_18928_18974 = state_18905__$1;
(statearr_18928_18974[(1)] = (24));

} else {
var statearr_18929_18975 = state_18905__$1;
(statearr_18929_18975[(1)] = (25));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (19))){
var inst_18887 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
if(cljs.core.truth_(inst_18887)){
var statearr_18930_18976 = state_18905__$1;
(statearr_18930_18976[(1)] = (20));

} else {
var statearr_18931_18977 = state_18905__$1;
(statearr_18931_18977[(1)] = (21));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (11))){
var inst_18862 = (state_18905[(8)]);
var inst_18868 = (inst_18862 == null);
var state_18905__$1 = state_18905;
if(cljs.core.truth_(inst_18868)){
var statearr_18932_18978 = state_18905__$1;
(statearr_18932_18978[(1)] = (14));

} else {
var statearr_18933_18979 = state_18905__$1;
(statearr_18933_18979[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (9))){
var inst_18855 = (state_18905[(10)]);
var inst_18855__$1 = (state_18905[(2)]);
var inst_18856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18855__$1,cljs.core.constant$keyword$reads);
var inst_18857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18855__$1,cljs.core.constant$keyword$mutes);
var inst_18858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18855__$1,cljs.core.constant$keyword$solos);
var state_18905__$1 = (function (){var statearr_18934 = state_18905;
(statearr_18934[(15)] = inst_18858);

(statearr_18934[(17)] = inst_18857);

(statearr_18934[(10)] = inst_18855__$1);

return statearr_18934;
})();
return cljs.core.async.ioc_alts_BANG_(state_18905__$1,(10),inst_18856);
} else {
if((state_val_18906 === (5))){
var inst_18847 = (state_18905[(7)]);
var inst_18850 = cljs.core.seq_QMARK_(inst_18847);
var state_18905__$1 = state_18905;
if(inst_18850){
var statearr_18935_18980 = state_18905__$1;
(statearr_18935_18980[(1)] = (7));

} else {
var statearr_18936_18981 = state_18905__$1;
(statearr_18936_18981[(1)] = (8));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (14))){
var inst_18863 = (state_18905[(16)]);
var inst_18870 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18863);
var state_18905__$1 = state_18905;
var statearr_18937_18982 = state_18905__$1;
(statearr_18937_18982[(2)] = inst_18870);

(statearr_18937_18982[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (26))){
var inst_18895 = (state_18905[(2)]);
var state_18905__$1 = state_18905;
var statearr_18938_18983 = state_18905__$1;
(statearr_18938_18983[(2)] = inst_18895);

(statearr_18938_18983[(1)] = (22));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (16))){
var inst_18873 = (state_18905[(2)]);
var inst_18874 = calc_state();
var inst_18847 = inst_18874;
var state_18905__$1 = (function (){var statearr_18939 = state_18905;
(statearr_18939[(18)] = inst_18873);

(statearr_18939[(7)] = inst_18847);

return statearr_18939;
})();
var statearr_18940_18984 = state_18905__$1;
(statearr_18940_18984[(2)] = null);

(statearr_18940_18984[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (10))){
var inst_18863 = (state_18905[(16)]);
var inst_18862 = (state_18905[(8)]);
var inst_18861 = (state_18905[(2)]);
var inst_18862__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18861,(0),null);
var inst_18863__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18861,(1),null);
var inst_18864 = (inst_18862__$1 == null);
var inst_18865 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18863__$1,change);
var inst_18866 = (inst_18864) || (inst_18865);
var state_18905__$1 = (function (){var statearr_18941 = state_18905;
(statearr_18941[(16)] = inst_18863__$1);

(statearr_18941[(8)] = inst_18862__$1);

return statearr_18941;
})();
if(cljs.core.truth_(inst_18866)){
var statearr_18942_18985 = state_18905__$1;
(statearr_18942_18985[(1)] = (11));

} else {
var statearr_18943_18986 = state_18905__$1;
(statearr_18943_18986[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (18))){
var inst_18858 = (state_18905[(15)]);
var inst_18857 = (state_18905[(17)]);
var inst_18863 = (state_18905[(16)]);
var inst_18882 = cljs.core.empty_QMARK_(inst_18858);
var inst_18883 = (function (){var G__18944 = inst_18863;
return (inst_18857.cljs$core$IFn$_invoke$arity$1 ? inst_18857.cljs$core$IFn$_invoke$arity$1(G__18944) : inst_18857.call(null,G__18944));
})();
var inst_18884 = cljs.core.not(inst_18883);
var inst_18885 = (inst_18882) && (inst_18884);
var state_18905__$1 = state_18905;
var statearr_18945_18987 = state_18905__$1;
(statearr_18945_18987[(2)] = inst_18885);

(statearr_18945_18987[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_18906 === (8))){
var inst_18847 = (state_18905[(7)]);
var state_18905__$1 = state_18905;
var statearr_18946_18988 = state_18905__$1;
(statearr_18946_18988[(2)] = inst_18847);

(statearr_18946_18988[(1)] = (9));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12724__auto___18958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12644__auto__,c__12724__auto___18958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12645__auto__ = null;
var cljs$core$async$mix_$_state_machine__12645__auto____0 = (function (){
var statearr_18950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18950[(0)] = cljs$core$async$mix_$_state_machine__12645__auto__);

(statearr_18950[(1)] = (1));

return statearr_18950;
});
var cljs$core$async$mix_$_state_machine__12645__auto____1 = (function (state_18905){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_18905);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e18951){if((e18951 instanceof Object)){
var ex__12648__auto__ = e18951;
var statearr_18952_18989 = state_18905;
(statearr_18952_18989[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18905);

return cljs.core.constant$keyword$recur;
} else {
throw e18951;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__18990 = state_18905;
state_18905 = G__18990;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12645__auto__ = function(state_18905){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12645__auto____1.call(this,state_18905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12645__auto____0;
cljs$core$async$mix_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12645__auto____1;
return cljs$core$async$mix_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___18958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12726__auto__ = (function (){var statearr_18953 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_18953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___18958);

return statearr_18953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___18958,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj18992 = {};
return obj18992;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4151__auto__ = p;
if(and__4151__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4151__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4799__auto__ = (((p == null))?null:p);
return (function (){var or__4163__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__18996 = x__4799__auto__;
return goog.typeOf(G__18996);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4151__auto__ = p;
if(and__4151__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4151__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4799__auto__ = (((p == null))?null:p);
return (function (){var or__4163__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__19000 = x__4799__auto__;
return goog.typeOf(G__19000);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__4151__auto__ = p;
if(and__4151__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4151__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4799__auto__ = (((p == null))?null:p);
return (function (){var or__4163__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__19006 = x__4799__auto__;
return goog.typeOf(G__19006);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__4151__auto__ = p;
if(and__4151__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4151__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4799__auto__ = (((p == null))?null:p);
return (function (){var or__4163__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__19008 = x__4799__auto__;
return goog.typeOf(G__19008);
})()]);
if(or__4163__auto__){
return or__4163__auto__;
} else {
var or__4163__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4163__auto____$1){
return or__4163__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__19147 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19147) : cljs.core.atom.call(null,G__19147));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19149 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19149) : cljs.core.deref.call(null,G__19149));
})(),topic);
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4163__auto__,mults){
return (function (p1__19009_SHARP_){
if(cljs.core.truth_((function (){var G__19150 = topic;
return (p1__19009_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19009_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19150) : p1__19009_SHARP_.call(null,G__19150));
})())){
return p1__19009_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19009_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__19151 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__19151) : buf_fn.call(null,G__19151));
})())));
}
});})(or__4163__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19152 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19152 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19153){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19153 = meta19153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19152.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19152.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__19155 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__19155) : self__.ensure_mult.call(null,G__19155));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19152.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19156 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19156) : cljs.core.deref.call(null,G__19156));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t19152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19157 = self__.mults;
var G__19158 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19157,G__19158) : cljs.core.reset_BANG_.call(null,G__19157,G__19158));
});})(mults,ensure_mult))
;

cljs.core.async.t19152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19152.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19154){
var self__ = this;
var _19154__$1 = this;
return self__.meta19153;
});})(mults,ensure_mult))
;

cljs.core.async.t19152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19154,meta19153__$1){
var self__ = this;
var _19154__$1 = this;
return (new cljs.core.async.t19152(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19153__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19152.cljs$lang$type = true;

cljs.core.async.t19152.cljs$lang$ctorStr = "cljs.core.async/t19152";

cljs.core.async.t19152.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t19152");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19152 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t19152(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19153){
return (new cljs.core.async.t19152(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19153));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19152(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12724__auto___19281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___19281,mults,ensure_mult,p){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___19281,mults,ensure_mult,p){
return (function (state_19230){
var state_val_19231 = (state_19230[(1)]);
if((state_val_19231 === (7))){
var inst_19226 = (state_19230[(2)]);
var state_19230__$1 = state_19230;
var statearr_19232_19282 = state_19230__$1;
(statearr_19232_19282[(2)] = inst_19226);

(statearr_19232_19282[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (20))){
var state_19230__$1 = state_19230;
var statearr_19233_19283 = state_19230__$1;
(statearr_19233_19283[(2)] = null);

(statearr_19233_19283[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (1))){
var state_19230__$1 = state_19230;
var statearr_19234_19284 = state_19230__$1;
(statearr_19234_19284[(2)] = null);

(statearr_19234_19284[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (24))){
var inst_19209 = (state_19230[(7)]);
var inst_19218 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19209);
var state_19230__$1 = state_19230;
var statearr_19235_19285 = state_19230__$1;
(statearr_19235_19285[(2)] = inst_19218);

(statearr_19235_19285[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (4))){
var inst_19161 = (state_19230[(8)]);
var inst_19161__$1 = (state_19230[(2)]);
var inst_19162 = (inst_19161__$1 == null);
var state_19230__$1 = (function (){var statearr_19236 = state_19230;
(statearr_19236[(8)] = inst_19161__$1);

return statearr_19236;
})();
if(cljs.core.truth_(inst_19162)){
var statearr_19237_19286 = state_19230__$1;
(statearr_19237_19286[(1)] = (5));

} else {
var statearr_19238_19287 = state_19230__$1;
(statearr_19238_19287[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (15))){
var inst_19203 = (state_19230[(2)]);
var state_19230__$1 = state_19230;
var statearr_19239_19288 = state_19230__$1;
(statearr_19239_19288[(2)] = inst_19203);

(statearr_19239_19288[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (21))){
var inst_19223 = (state_19230[(2)]);
var state_19230__$1 = (function (){var statearr_19240 = state_19230;
(statearr_19240[(9)] = inst_19223);

return statearr_19240;
})();
var statearr_19241_19289 = state_19230__$1;
(statearr_19241_19289[(2)] = null);

(statearr_19241_19289[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (13))){
var inst_19185 = (state_19230[(10)]);
var inst_19187 = cljs.core.chunked_seq_QMARK_(inst_19185);
var state_19230__$1 = state_19230;
if(inst_19187){
var statearr_19242_19290 = state_19230__$1;
(statearr_19242_19290[(1)] = (16));

} else {
var statearr_19243_19291 = state_19230__$1;
(statearr_19243_19291[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (22))){
var inst_19215 = (state_19230[(2)]);
var state_19230__$1 = state_19230;
if(cljs.core.truth_(inst_19215)){
var statearr_19244_19292 = state_19230__$1;
(statearr_19244_19292[(1)] = (23));

} else {
var statearr_19245_19293 = state_19230__$1;
(statearr_19245_19293[(1)] = (24));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (6))){
var inst_19211 = (state_19230[(11)]);
var inst_19209 = (state_19230[(7)]);
var inst_19161 = (state_19230[(8)]);
var inst_19209__$1 = (function (){var G__19246 = inst_19161;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__19246) : topic_fn.call(null,G__19246));
})();
var inst_19210 = (function (){var G__19247 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19247) : cljs.core.deref.call(null,G__19247));
})();
var inst_19211__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19210,inst_19209__$1);
var state_19230__$1 = (function (){var statearr_19248 = state_19230;
(statearr_19248[(11)] = inst_19211__$1);

(statearr_19248[(7)] = inst_19209__$1);

return statearr_19248;
})();
if(cljs.core.truth_(inst_19211__$1)){
var statearr_19249_19294 = state_19230__$1;
(statearr_19249_19294[(1)] = (19));

} else {
var statearr_19250_19295 = state_19230__$1;
(statearr_19250_19295[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (25))){
var inst_19220 = (state_19230[(2)]);
var state_19230__$1 = state_19230;
var statearr_19251_19296 = state_19230__$1;
(statearr_19251_19296[(2)] = inst_19220);

(statearr_19251_19296[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (17))){
var inst_19185 = (state_19230[(10)]);
var inst_19194 = cljs.core.first(inst_19185);
var inst_19195 = cljs.core.async.muxch_STAR_(inst_19194);
var inst_19196 = cljs.core.async.close_BANG_(inst_19195);
var inst_19197 = cljs.core.next(inst_19185);
var inst_19171 = inst_19197;
var inst_19172 = null;
var inst_19173 = (0);
var inst_19174 = (0);
var state_19230__$1 = (function (){var statearr_19252 = state_19230;
(statearr_19252[(12)] = inst_19173);

(statearr_19252[(13)] = inst_19174);

(statearr_19252[(14)] = inst_19172);

(statearr_19252[(15)] = inst_19171);

(statearr_19252[(16)] = inst_19196);

return statearr_19252;
})();
var statearr_19253_19297 = state_19230__$1;
(statearr_19253_19297[(2)] = null);

(statearr_19253_19297[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (3))){
var inst_19228 = (state_19230[(2)]);
var state_19230__$1 = state_19230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19230__$1,inst_19228);
} else {
if((state_val_19231 === (12))){
var inst_19205 = (state_19230[(2)]);
var state_19230__$1 = state_19230;
var statearr_19254_19298 = state_19230__$1;
(statearr_19254_19298[(2)] = inst_19205);

(statearr_19254_19298[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (2))){
var state_19230__$1 = state_19230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19230__$1,(4),ch);
} else {
if((state_val_19231 === (23))){
var state_19230__$1 = state_19230;
var statearr_19255_19299 = state_19230__$1;
(statearr_19255_19299[(2)] = null);

(statearr_19255_19299[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (19))){
var inst_19211 = (state_19230[(11)]);
var inst_19161 = (state_19230[(8)]);
var inst_19213 = cljs.core.async.muxch_STAR_(inst_19211);
var state_19230__$1 = state_19230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19230__$1,(22),inst_19213,inst_19161);
} else {
if((state_val_19231 === (11))){
var inst_19185 = (state_19230[(10)]);
var inst_19171 = (state_19230[(15)]);
var inst_19185__$1 = cljs.core.seq(inst_19171);
var state_19230__$1 = (function (){var statearr_19256 = state_19230;
(statearr_19256[(10)] = inst_19185__$1);

return statearr_19256;
})();
if(inst_19185__$1){
var statearr_19257_19300 = state_19230__$1;
(statearr_19257_19300[(1)] = (13));

} else {
var statearr_19258_19301 = state_19230__$1;
(statearr_19258_19301[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (9))){
var inst_19207 = (state_19230[(2)]);
var state_19230__$1 = state_19230;
var statearr_19259_19302 = state_19230__$1;
(statearr_19259_19302[(2)] = inst_19207);

(statearr_19259_19302[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (5))){
var inst_19168 = (function (){var G__19260 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19260) : cljs.core.deref.call(null,G__19260));
})();
var inst_19169 = cljs.core.vals(inst_19168);
var inst_19170 = cljs.core.seq(inst_19169);
var inst_19171 = inst_19170;
var inst_19172 = null;
var inst_19173 = (0);
var inst_19174 = (0);
var state_19230__$1 = (function (){var statearr_19261 = state_19230;
(statearr_19261[(12)] = inst_19173);

(statearr_19261[(13)] = inst_19174);

(statearr_19261[(14)] = inst_19172);

(statearr_19261[(15)] = inst_19171);

return statearr_19261;
})();
var statearr_19262_19303 = state_19230__$1;
(statearr_19262_19303[(2)] = null);

(statearr_19262_19303[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (14))){
var state_19230__$1 = state_19230;
var statearr_19266_19304 = state_19230__$1;
(statearr_19266_19304[(2)] = null);

(statearr_19266_19304[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (16))){
var inst_19185 = (state_19230[(10)]);
var inst_19189 = cljs.core.chunk_first(inst_19185);
var inst_19190 = cljs.core.chunk_rest(inst_19185);
var inst_19191 = cljs.core.count(inst_19189);
var inst_19171 = inst_19190;
var inst_19172 = inst_19189;
var inst_19173 = inst_19191;
var inst_19174 = (0);
var state_19230__$1 = (function (){var statearr_19267 = state_19230;
(statearr_19267[(12)] = inst_19173);

(statearr_19267[(13)] = inst_19174);

(statearr_19267[(14)] = inst_19172);

(statearr_19267[(15)] = inst_19171);

return statearr_19267;
})();
var statearr_19268_19305 = state_19230__$1;
(statearr_19268_19305[(2)] = null);

(statearr_19268_19305[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (10))){
var inst_19173 = (state_19230[(12)]);
var inst_19174 = (state_19230[(13)]);
var inst_19172 = (state_19230[(14)]);
var inst_19171 = (state_19230[(15)]);
var inst_19179 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19172,inst_19174);
var inst_19180 = cljs.core.async.muxch_STAR_(inst_19179);
var inst_19181 = cljs.core.async.close_BANG_(inst_19180);
var inst_19182 = (inst_19174 + (1));
var tmp19263 = inst_19173;
var tmp19264 = inst_19172;
var tmp19265 = inst_19171;
var inst_19171__$1 = tmp19265;
var inst_19172__$1 = tmp19264;
var inst_19173__$1 = tmp19263;
var inst_19174__$1 = inst_19182;
var state_19230__$1 = (function (){var statearr_19269 = state_19230;
(statearr_19269[(17)] = inst_19181);

(statearr_19269[(12)] = inst_19173__$1);

(statearr_19269[(13)] = inst_19174__$1);

(statearr_19269[(14)] = inst_19172__$1);

(statearr_19269[(15)] = inst_19171__$1);

return statearr_19269;
})();
var statearr_19270_19306 = state_19230__$1;
(statearr_19270_19306[(2)] = null);

(statearr_19270_19306[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (18))){
var inst_19200 = (state_19230[(2)]);
var state_19230__$1 = state_19230;
var statearr_19271_19307 = state_19230__$1;
(statearr_19271_19307[(2)] = inst_19200);

(statearr_19271_19307[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19231 === (8))){
var inst_19173 = (state_19230[(12)]);
var inst_19174 = (state_19230[(13)]);
var inst_19176 = (inst_19174 < inst_19173);
var inst_19177 = inst_19176;
var state_19230__$1 = state_19230;
if(cljs.core.truth_(inst_19177)){
var statearr_19272_19308 = state_19230__$1;
(statearr_19272_19308[(1)] = (10));

} else {
var statearr_19273_19309 = state_19230__$1;
(statearr_19273_19309[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12724__auto___19281,mults,ensure_mult,p))
;
return ((function (switch__12644__auto__,c__12724__auto___19281,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__12645__auto__ = null;
var cljs$core$async$pub_$_state_machine__12645__auto____0 = (function (){
var statearr_19277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19277[(0)] = cljs$core$async$pub_$_state_machine__12645__auto__);

(statearr_19277[(1)] = (1));

return statearr_19277;
});
var cljs$core$async$pub_$_state_machine__12645__auto____1 = (function (state_19230){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_19230);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e19278){if((e19278 instanceof Object)){
var ex__12648__auto__ = e19278;
var statearr_19279_19310 = state_19230;
(statearr_19279_19310[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19230);

return cljs.core.constant$keyword$recur;
} else {
throw e19278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__19311 = state_19230;
state_19230 = G__19311;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__12645__auto__ = function(state_19230){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__12645__auto____1.call(this,state_19230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__12645__auto____0;
cljs$core$async$pub_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__12645__auto____1;
return cljs$core$async$pub_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___19281,mults,ensure_mult,p))
})();
var state__12726__auto__ = (function (){var statearr_19280 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_19280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___19281);

return statearr_19280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___19281,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__19392 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19392) : cljs.core.atom.call(null,G__19392));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__12724__auto___19465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___19465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___19465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19431){
var state_val_19432 = (state_19431[(1)]);
if((state_val_19432 === (7))){
var state_19431__$1 = state_19431;
var statearr_19433_19466 = state_19431__$1;
(statearr_19433_19466[(2)] = null);

(statearr_19433_19466[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19432 === (1))){
var state_19431__$1 = state_19431;
var statearr_19434_19467 = state_19431__$1;
(statearr_19434_19467[(2)] = null);

(statearr_19434_19467[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19432 === (4))){
var inst_19395 = (state_19431[(7)]);
var inst_19397 = (inst_19395 < cnt);
var state_19431__$1 = state_19431;
if(cljs.core.truth_(inst_19397)){
var statearr_19435_19468 = state_19431__$1;
(statearr_19435_19468[(1)] = (6));

} else {
var statearr_19436_19469 = state_19431__$1;
(statearr_19436_19469[(1)] = (7));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19432 === (15))){
var inst_19427 = (state_19431[(2)]);
var state_19431__$1 = state_19431;
var statearr_19437_19470 = state_19431__$1;
(statearr_19437_19470[(2)] = inst_19427);

(statearr_19437_19470[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19432 === (13))){
var inst_19420 = cljs.core.async.close_BANG_(out);
var state_19431__$1 = state_19431;
var statearr_19438_19471 = state_19431__$1;
(statearr_19438_19471[(2)] = inst_19420);

(statearr_19438_19471[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19432 === (6))){
var state_19431__$1 = state_19431;
var statearr_19439_19472 = state_19431__$1;
(statearr_19439_19472[(2)] = null);

(statearr_19439_19472[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19432 === (3))){
var inst_19429 = (state_19431[(2)]);
var state_19431__$1 = state_19431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19431__$1,inst_19429);
} else {
if((state_val_19432 === (12))){
var inst_19417 = (state_19431[(8)]);
var inst_19417__$1 = (state_19431[(2)]);
var inst_19418 = cljs.core.some(cljs.core.nil_QMARK_,inst_19417__$1);
var state_19431__$1 = (function (){var statearr_19440 = state_19431;
(statearr_19440[(8)] = inst_19417__$1);

return statearr_19440;
})();
if(cljs.core.truth_(inst_19418)){
var statearr_19441_19473 = state_19431__$1;
(statearr_19441_19473[(1)] = (13));

} else {
var statearr_19442_19474 = state_19431__$1;
(statearr_19442_19474[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19432 === (2))){
var inst_19394 = (function (){var G__19443 = dctr;
var G__19444 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19443,G__19444) : cljs.core.reset_BANG_.call(null,G__19443,G__19444));
})();
var inst_19395 = (0);
var state_19431__$1 = (function (){var statearr_19445 = state_19431;
(statearr_19445[(7)] = inst_19395);

(statearr_19445[(9)] = inst_19394);

return statearr_19445;
})();
var statearr_19446_19475 = state_19431__$1;
(statearr_19446_19475[(2)] = null);

(statearr_19446_19475[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19432 === (11))){
var inst_19395 = (state_19431[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19431,(10),Object,null,(9));
var inst_19404 = (function (){var G__19447 = inst_19395;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__19447) : chs__$1.call(null,G__19447));
})();
var inst_19405 = (function (){var G__19448 = inst_19395;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__19448) : done.call(null,G__19448));
})();
var inst_19406 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19404,inst_19405);
var state_19431__$1 = state_19431;
var statearr_19449_19476 = state_19431__$1;
(statearr_19449_19476[(2)] = inst_19406);


cljs.core.async.impl.ioc_helpers.process_exception(state_19431__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19432 === (9))){
var inst_19395 = (state_19431[(7)]);
var inst_19408 = (state_19431[(2)]);
var inst_19409 = (inst_19395 + (1));
var inst_19395__$1 = inst_19409;
var state_19431__$1 = (function (){var statearr_19450 = state_19431;
(statearr_19450[(10)] = inst_19408);

(statearr_19450[(7)] = inst_19395__$1);

return statearr_19450;
})();
var statearr_19451_19477 = state_19431__$1;
(statearr_19451_19477[(2)] = null);

(statearr_19451_19477[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19432 === (5))){
var inst_19415 = (state_19431[(2)]);
var state_19431__$1 = (function (){var statearr_19452 = state_19431;
(statearr_19452[(11)] = inst_19415);

return statearr_19452;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19431__$1,(12),dchan);
} else {
if((state_val_19432 === (14))){
var inst_19417 = (state_19431[(8)]);
var inst_19422 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19417);
var state_19431__$1 = state_19431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19431__$1,(16),out,inst_19422);
} else {
if((state_val_19432 === (16))){
var inst_19424 = (state_19431[(2)]);
var state_19431__$1 = (function (){var statearr_19453 = state_19431;
(statearr_19453[(12)] = inst_19424);

return statearr_19453;
})();
var statearr_19454_19478 = state_19431__$1;
(statearr_19454_19478[(2)] = null);

(statearr_19454_19478[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19432 === (10))){
var inst_19399 = (state_19431[(2)]);
var inst_19400 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19431__$1 = (function (){var statearr_19455 = state_19431;
(statearr_19455[(13)] = inst_19399);

return statearr_19455;
})();
var statearr_19456_19479 = state_19431__$1;
(statearr_19456_19479[(2)] = inst_19400);


cljs.core.async.impl.ioc_helpers.process_exception(state_19431__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19432 === (8))){
var inst_19413 = (state_19431[(2)]);
var state_19431__$1 = state_19431;
var statearr_19457_19480 = state_19431__$1;
(statearr_19457_19480[(2)] = inst_19413);

(statearr_19457_19480[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__12724__auto___19465,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12644__auto__,c__12724__auto___19465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__12645__auto__ = null;
var cljs$core$async$map_$_state_machine__12645__auto____0 = (function (){
var statearr_19461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19461[(0)] = cljs$core$async$map_$_state_machine__12645__auto__);

(statearr_19461[(1)] = (1));

return statearr_19461;
});
var cljs$core$async$map_$_state_machine__12645__auto____1 = (function (state_19431){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_19431);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e19462){if((e19462 instanceof Object)){
var ex__12648__auto__ = e19462;
var statearr_19463_19481 = state_19431;
(statearr_19463_19481[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19431);

return cljs.core.constant$keyword$recur;
} else {
throw e19462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__19482 = state_19431;
state_19431 = G__19482;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__12645__auto__ = function(state_19431){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__12645__auto____1.call(this,state_19431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__12645__auto____0;
cljs$core$async$map_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__12645__auto____1;
return cljs$core$async$map_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___19465,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12726__auto__ = (function (){var statearr_19464 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_19464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___19465);

return statearr_19464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___19465,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12724__auto___19592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___19592,out){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___19592,out){
return (function (state_19568){
var state_val_19569 = (state_19568[(1)]);
if((state_val_19569 === (7))){
var inst_19548 = (state_19568[(7)]);
var inst_19547 = (state_19568[(8)]);
var inst_19547__$1 = (state_19568[(2)]);
var inst_19548__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19547__$1,(0),null);
var inst_19549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19547__$1,(1),null);
var inst_19550 = (inst_19548__$1 == null);
var state_19568__$1 = (function (){var statearr_19570 = state_19568;
(statearr_19570[(7)] = inst_19548__$1);

(statearr_19570[(9)] = inst_19549);

(statearr_19570[(8)] = inst_19547__$1);

return statearr_19570;
})();
if(cljs.core.truth_(inst_19550)){
var statearr_19571_19593 = state_19568__$1;
(statearr_19571_19593[(1)] = (8));

} else {
var statearr_19572_19594 = state_19568__$1;
(statearr_19572_19594[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19569 === (1))){
var inst_19539 = cljs.core.vec(chs);
var inst_19540 = inst_19539;
var state_19568__$1 = (function (){var statearr_19573 = state_19568;
(statearr_19573[(10)] = inst_19540);

return statearr_19573;
})();
var statearr_19574_19595 = state_19568__$1;
(statearr_19574_19595[(2)] = null);

(statearr_19574_19595[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19569 === (4))){
var inst_19540 = (state_19568[(10)]);
var state_19568__$1 = state_19568;
return cljs.core.async.ioc_alts_BANG_(state_19568__$1,(7),inst_19540);
} else {
if((state_val_19569 === (6))){
var inst_19564 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19575_19596 = state_19568__$1;
(statearr_19575_19596[(2)] = inst_19564);

(statearr_19575_19596[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19569 === (3))){
var inst_19566 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19568__$1,inst_19566);
} else {
if((state_val_19569 === (2))){
var inst_19540 = (state_19568[(10)]);
var inst_19542 = cljs.core.count(inst_19540);
var inst_19543 = (inst_19542 > (0));
var state_19568__$1 = state_19568;
if(cljs.core.truth_(inst_19543)){
var statearr_19577_19597 = state_19568__$1;
(statearr_19577_19597[(1)] = (4));

} else {
var statearr_19578_19598 = state_19568__$1;
(statearr_19578_19598[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19569 === (11))){
var inst_19540 = (state_19568[(10)]);
var inst_19557 = (state_19568[(2)]);
var tmp19576 = inst_19540;
var inst_19540__$1 = tmp19576;
var state_19568__$1 = (function (){var statearr_19579 = state_19568;
(statearr_19579[(10)] = inst_19540__$1);

(statearr_19579[(11)] = inst_19557);

return statearr_19579;
})();
var statearr_19580_19599 = state_19568__$1;
(statearr_19580_19599[(2)] = null);

(statearr_19580_19599[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19569 === (9))){
var inst_19548 = (state_19568[(7)]);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19568__$1,(11),out,inst_19548);
} else {
if((state_val_19569 === (5))){
var inst_19562 = cljs.core.async.close_BANG_(out);
var state_19568__$1 = state_19568;
var statearr_19581_19600 = state_19568__$1;
(statearr_19581_19600[(2)] = inst_19562);

(statearr_19581_19600[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19569 === (10))){
var inst_19560 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19582_19601 = state_19568__$1;
(statearr_19582_19601[(2)] = inst_19560);

(statearr_19582_19601[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19569 === (8))){
var inst_19548 = (state_19568[(7)]);
var inst_19540 = (state_19568[(10)]);
var inst_19549 = (state_19568[(9)]);
var inst_19547 = (state_19568[(8)]);
var inst_19552 = (function (){var c = inst_19549;
var v = inst_19548;
var vec__19545 = inst_19547;
var cs = inst_19540;
return ((function (c,v,vec__19545,cs,inst_19548,inst_19540,inst_19549,inst_19547,state_val_19569,c__12724__auto___19592,out){
return (function (p1__19483_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19483_SHARP_);
});
;})(c,v,vec__19545,cs,inst_19548,inst_19540,inst_19549,inst_19547,state_val_19569,c__12724__auto___19592,out))
})();
var inst_19553 = cljs.core.filterv(inst_19552,inst_19540);
var inst_19540__$1 = inst_19553;
var state_19568__$1 = (function (){var statearr_19583 = state_19568;
(statearr_19583[(10)] = inst_19540__$1);

return statearr_19583;
})();
var statearr_19584_19602 = state_19568__$1;
(statearr_19584_19602[(2)] = null);

(statearr_19584_19602[(1)] = (2));


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
}
}
}
}
});})(c__12724__auto___19592,out))
;
return ((function (switch__12644__auto__,c__12724__auto___19592,out){
return (function() {
var cljs$core$async$merge_$_state_machine__12645__auto__ = null;
var cljs$core$async$merge_$_state_machine__12645__auto____0 = (function (){
var statearr_19588 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19588[(0)] = cljs$core$async$merge_$_state_machine__12645__auto__);

(statearr_19588[(1)] = (1));

return statearr_19588;
});
var cljs$core$async$merge_$_state_machine__12645__auto____1 = (function (state_19568){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_19568);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e19589){if((e19589 instanceof Object)){
var ex__12648__auto__ = e19589;
var statearr_19590_19603 = state_19568;
(statearr_19590_19603[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19568);

return cljs.core.constant$keyword$recur;
} else {
throw e19589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__19604 = state_19568;
state_19568 = G__19604;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__12645__auto__ = function(state_19568){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__12645__auto____1.call(this,state_19568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__12645__auto____0;
cljs$core$async$merge_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__12645__auto____1;
return cljs$core$async$merge_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___19592,out))
})();
var state__12726__auto__ = (function (){var statearr_19591 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_19591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___19592);

return statearr_19591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___19592,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12724__auto___19700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___19700,out){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___19700,out){
return (function (state_19677){
var state_val_19678 = (state_19677[(1)]);
if((state_val_19678 === (7))){
var inst_19659 = (state_19677[(7)]);
var inst_19659__$1 = (state_19677[(2)]);
var inst_19660 = (inst_19659__$1 == null);
var inst_19661 = cljs.core.not(inst_19660);
var state_19677__$1 = (function (){var statearr_19679 = state_19677;
(statearr_19679[(7)] = inst_19659__$1);

return statearr_19679;
})();
if(inst_19661){
var statearr_19680_19701 = state_19677__$1;
(statearr_19680_19701[(1)] = (8));

} else {
var statearr_19681_19702 = state_19677__$1;
(statearr_19681_19702[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19678 === (1))){
var inst_19654 = (0);
var state_19677__$1 = (function (){var statearr_19682 = state_19677;
(statearr_19682[(8)] = inst_19654);

return statearr_19682;
})();
var statearr_19683_19703 = state_19677__$1;
(statearr_19683_19703[(2)] = null);

(statearr_19683_19703[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19678 === (4))){
var state_19677__$1 = state_19677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19677__$1,(7),ch);
} else {
if((state_val_19678 === (6))){
var inst_19672 = (state_19677[(2)]);
var state_19677__$1 = state_19677;
var statearr_19684_19704 = state_19677__$1;
(statearr_19684_19704[(2)] = inst_19672);

(statearr_19684_19704[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19678 === (3))){
var inst_19674 = (state_19677[(2)]);
var inst_19675 = cljs.core.async.close_BANG_(out);
var state_19677__$1 = (function (){var statearr_19685 = state_19677;
(statearr_19685[(9)] = inst_19674);

return statearr_19685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19677__$1,inst_19675);
} else {
if((state_val_19678 === (2))){
var inst_19654 = (state_19677[(8)]);
var inst_19656 = (inst_19654 < n);
var state_19677__$1 = state_19677;
if(cljs.core.truth_(inst_19656)){
var statearr_19686_19705 = state_19677__$1;
(statearr_19686_19705[(1)] = (4));

} else {
var statearr_19687_19706 = state_19677__$1;
(statearr_19687_19706[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19678 === (11))){
var inst_19654 = (state_19677[(8)]);
var inst_19664 = (state_19677[(2)]);
var inst_19665 = (inst_19654 + (1));
var inst_19654__$1 = inst_19665;
var state_19677__$1 = (function (){var statearr_19688 = state_19677;
(statearr_19688[(8)] = inst_19654__$1);

(statearr_19688[(10)] = inst_19664);

return statearr_19688;
})();
var statearr_19689_19707 = state_19677__$1;
(statearr_19689_19707[(2)] = null);

(statearr_19689_19707[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19678 === (9))){
var state_19677__$1 = state_19677;
var statearr_19690_19708 = state_19677__$1;
(statearr_19690_19708[(2)] = null);

(statearr_19690_19708[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19678 === (5))){
var state_19677__$1 = state_19677;
var statearr_19691_19709 = state_19677__$1;
(statearr_19691_19709[(2)] = null);

(statearr_19691_19709[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19678 === (10))){
var inst_19669 = (state_19677[(2)]);
var state_19677__$1 = state_19677;
var statearr_19692_19710 = state_19677__$1;
(statearr_19692_19710[(2)] = inst_19669);

(statearr_19692_19710[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19678 === (8))){
var inst_19659 = (state_19677[(7)]);
var state_19677__$1 = state_19677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19677__$1,(11),out,inst_19659);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12724__auto___19700,out))
;
return ((function (switch__12644__auto__,c__12724__auto___19700,out){
return (function() {
var cljs$core$async$take_$_state_machine__12645__auto__ = null;
var cljs$core$async$take_$_state_machine__12645__auto____0 = (function (){
var statearr_19696 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19696[(0)] = cljs$core$async$take_$_state_machine__12645__auto__);

(statearr_19696[(1)] = (1));

return statearr_19696;
});
var cljs$core$async$take_$_state_machine__12645__auto____1 = (function (state_19677){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_19677);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e19697){if((e19697 instanceof Object)){
var ex__12648__auto__ = e19697;
var statearr_19698_19711 = state_19677;
(statearr_19698_19711[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19677);

return cljs.core.constant$keyword$recur;
} else {
throw e19697;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__19712 = state_19677;
state_19677 = G__19712;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__12645__auto__ = function(state_19677){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__12645__auto____1.call(this,state_19677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__12645__auto____0;
cljs$core$async$take_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__12645__auto____1;
return cljs$core$async$take_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___19700,out))
})();
var state__12726__auto__ = (function (){var statearr_19699 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_19699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___19700);

return statearr_19699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___19700,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t19725 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19725 = (function (ch,f,map_LT_,meta19726){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19726 = meta19726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19725.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19725.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t19725.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19725.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t19728 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19728 = (function (fn1,_,meta19726,map_LT_,f,ch,meta19729){
this.fn1 = fn1;
this._ = _;
this.meta19726 = meta19726;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19729 = meta19729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19728.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19728.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t19728.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19713_SHARP_){
var G__19731 = (((p1__19713_SHARP_ == null))?null:(function (){var G__19732 = p1__19713_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19732) : self__.f.call(null,G__19732));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19731) : f1.call(null,G__19731));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19730){
var self__ = this;
var _19730__$1 = this;
return self__.meta19729;
});})(___$1))
;

cljs.core.async.t19728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19730,meta19729__$1){
var self__ = this;
var _19730__$1 = this;
return (new cljs.core.async.t19728(self__.fn1,self__._,self__.meta19726,self__.map_LT_,self__.f,self__.ch,meta19729__$1));
});})(___$1))
;

cljs.core.async.t19728.cljs$lang$type = true;

cljs.core.async.t19728.cljs$lang$ctorStr = "cljs.core.async/t19728";

cljs.core.async.t19728.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t19728");
});})(___$1))
;

cljs.core.async.__GT_t19728 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t19728(fn1__$1,___$2,meta19726__$1,map_LT___$1,f__$1,ch__$1,meta19729){
return (new cljs.core.async.t19728(fn1__$1,___$2,meta19726__$1,map_LT___$1,f__$1,ch__$1,meta19729));
});})(___$1))
;

}

return (new cljs.core.async.t19728(fn1,___$1,self__.meta19726,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4151__auto__ = ret;
if(cljs.core.truth_(and__4151__auto__)){
return !(((function (){var G__19733 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19733) : cljs.core.deref.call(null,G__19733));
})() == null));
} else {
return and__4151__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19734 = (function (){var G__19735 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19735) : cljs.core.deref.call(null,G__19735));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19734) : self__.f.call(null,G__19734));
})());
} else {
return ret;
}
});

cljs.core.async.t19725.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19725.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t19725.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t19725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19727){
var self__ = this;
var _19727__$1 = this;
return self__.meta19726;
});

cljs.core.async.t19725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19727,meta19726__$1){
var self__ = this;
var _19727__$1 = this;
return (new cljs.core.async.t19725(self__.ch,self__.f,self__.map_LT_,meta19726__$1));
});

cljs.core.async.t19725.cljs$lang$type = true;

cljs.core.async.t19725.cljs$lang$ctorStr = "cljs.core.async/t19725";

cljs.core.async.t19725.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t19725");
});

cljs.core.async.__GT_t19725 = (function cljs$core$async$map_LT__$___GT_t19725(ch__$1,f__$1,map_LT___$1,meta19726){
return (new cljs.core.async.t19725(ch__$1,f__$1,map_LT___$1,meta19726));
});

}

return (new cljs.core.async.t19725(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t19740 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19740 = (function (ch,f,map_GT_,meta19741){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19741 = meta19741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19740.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19740.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__19743 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19743) : self__.f.call(null,G__19743));
})(),fn1);
});

cljs.core.async.t19740.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19740.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t19740.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19740.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t19740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19742){
var self__ = this;
var _19742__$1 = this;
return self__.meta19741;
});

cljs.core.async.t19740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19742,meta19741__$1){
var self__ = this;
var _19742__$1 = this;
return (new cljs.core.async.t19740(self__.ch,self__.f,self__.map_GT_,meta19741__$1));
});

cljs.core.async.t19740.cljs$lang$type = true;

cljs.core.async.t19740.cljs$lang$ctorStr = "cljs.core.async/t19740";

cljs.core.async.t19740.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t19740");
});

cljs.core.async.__GT_t19740 = (function cljs$core$async$map_GT__$___GT_t19740(ch__$1,f__$1,map_GT___$1,meta19741){
return (new cljs.core.async.t19740(ch__$1,f__$1,map_GT___$1,meta19741));
});

}

return (new cljs.core.async.t19740(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t19748 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19748 = (function (ch,p,filter_GT_,meta19749){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19749 = meta19749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19748.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__19751 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__19751) : self__.p.call(null,G__19751));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t19748.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t19748.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t19748.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t19748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19750){
var self__ = this;
var _19750__$1 = this;
return self__.meta19749;
});

cljs.core.async.t19748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19750,meta19749__$1){
var self__ = this;
var _19750__$1 = this;
return (new cljs.core.async.t19748(self__.ch,self__.p,self__.filter_GT_,meta19749__$1));
});

cljs.core.async.t19748.cljs$lang$type = true;

cljs.core.async.t19748.cljs$lang$ctorStr = "cljs.core.async/t19748";

cljs.core.async.t19748.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t19748");
});

cljs.core.async.__GT_t19748 = (function cljs$core$async$filter_GT__$___GT_t19748(ch__$1,p__$1,filter_GT___$1,meta19749){
return (new cljs.core.async.t19748(ch__$1,p__$1,filter_GT___$1,meta19749));
});

}

return (new cljs.core.async.t19748(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12724__auto___19839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___19839,out){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___19839,out){
return (function (state_19817){
var state_val_19818 = (state_19817[(1)]);
if((state_val_19818 === (7))){
var inst_19813 = (state_19817[(2)]);
var state_19817__$1 = state_19817;
var statearr_19819_19840 = state_19817__$1;
(statearr_19819_19840[(2)] = inst_19813);

(statearr_19819_19840[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19818 === (1))){
var state_19817__$1 = state_19817;
var statearr_19820_19841 = state_19817__$1;
(statearr_19820_19841[(2)] = null);

(statearr_19820_19841[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19818 === (4))){
var inst_19799 = (state_19817[(7)]);
var inst_19799__$1 = (state_19817[(2)]);
var inst_19800 = (inst_19799__$1 == null);
var state_19817__$1 = (function (){var statearr_19821 = state_19817;
(statearr_19821[(7)] = inst_19799__$1);

return statearr_19821;
})();
if(cljs.core.truth_(inst_19800)){
var statearr_19822_19842 = state_19817__$1;
(statearr_19822_19842[(1)] = (5));

} else {
var statearr_19823_19843 = state_19817__$1;
(statearr_19823_19843[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19818 === (6))){
var inst_19799 = (state_19817[(7)]);
var inst_19804 = (function (){var G__19824 = inst_19799;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__19824) : p.call(null,G__19824));
})();
var state_19817__$1 = state_19817;
if(cljs.core.truth_(inst_19804)){
var statearr_19825_19844 = state_19817__$1;
(statearr_19825_19844[(1)] = (8));

} else {
var statearr_19826_19845 = state_19817__$1;
(statearr_19826_19845[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_19818 === (3))){
var inst_19815 = (state_19817[(2)]);
var state_19817__$1 = state_19817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19817__$1,inst_19815);
} else {
if((state_val_19818 === (2))){
var state_19817__$1 = state_19817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19817__$1,(4),ch);
} else {
if((state_val_19818 === (11))){
var inst_19807 = (state_19817[(2)]);
var state_19817__$1 = state_19817;
var statearr_19827_19846 = state_19817__$1;
(statearr_19827_19846[(2)] = inst_19807);

(statearr_19827_19846[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19818 === (9))){
var state_19817__$1 = state_19817;
var statearr_19828_19847 = state_19817__$1;
(statearr_19828_19847[(2)] = null);

(statearr_19828_19847[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19818 === (5))){
var inst_19802 = cljs.core.async.close_BANG_(out);
var state_19817__$1 = state_19817;
var statearr_19829_19848 = state_19817__$1;
(statearr_19829_19848[(2)] = inst_19802);

(statearr_19829_19848[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19818 === (10))){
var inst_19810 = (state_19817[(2)]);
var state_19817__$1 = (function (){var statearr_19830 = state_19817;
(statearr_19830[(8)] = inst_19810);

return statearr_19830;
})();
var statearr_19831_19849 = state_19817__$1;
(statearr_19831_19849[(2)] = null);

(statearr_19831_19849[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_19818 === (8))){
var inst_19799 = (state_19817[(7)]);
var state_19817__$1 = state_19817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19817__$1,(11),out,inst_19799);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12724__auto___19839,out))
;
return ((function (switch__12644__auto__,c__12724__auto___19839,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__12645__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__12645__auto____0 = (function (){
var statearr_19835 = [null,null,null,null,null,null,null,null,null];
(statearr_19835[(0)] = cljs$core$async$filter_LT__$_state_machine__12645__auto__);

(statearr_19835[(1)] = (1));

return statearr_19835;
});
var cljs$core$async$filter_LT__$_state_machine__12645__auto____1 = (function (state_19817){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_19817);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e19836){if((e19836 instanceof Object)){
var ex__12648__auto__ = e19836;
var statearr_19837_19850 = state_19817;
(statearr_19837_19850[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19817);

return cljs.core.constant$keyword$recur;
} else {
throw e19836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__19851 = state_19817;
state_19817 = G__19851;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__12645__auto__ = function(state_19817){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__12645__auto____1.call(this,state_19817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__12645__auto____0;
cljs$core$async$filter_LT__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__12645__auto____1;
return cljs$core$async$filter_LT__$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___19839,out))
})();
var state__12726__auto__ = (function (){var statearr_19838 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_19838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___19839);

return statearr_19838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___19839,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12724__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto__){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto__){
return (function (state_20021){
var state_val_20022 = (state_20021[(1)]);
if((state_val_20022 === (7))){
var inst_20017 = (state_20021[(2)]);
var state_20021__$1 = state_20021;
var statearr_20023_20065 = state_20021__$1;
(statearr_20023_20065[(2)] = inst_20017);

(statearr_20023_20065[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (20))){
var inst_19987 = (state_20021[(7)]);
var inst_19998 = (state_20021[(2)]);
var inst_19999 = cljs.core.next(inst_19987);
var inst_19973 = inst_19999;
var inst_19974 = null;
var inst_19975 = (0);
var inst_19976 = (0);
var state_20021__$1 = (function (){var statearr_20024 = state_20021;
(statearr_20024[(8)] = inst_19998);

(statearr_20024[(9)] = inst_19973);

(statearr_20024[(10)] = inst_19975);

(statearr_20024[(11)] = inst_19976);

(statearr_20024[(12)] = inst_19974);

return statearr_20024;
})();
var statearr_20025_20066 = state_20021__$1;
(statearr_20025_20066[(2)] = null);

(statearr_20025_20066[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (1))){
var state_20021__$1 = state_20021;
var statearr_20026_20067 = state_20021__$1;
(statearr_20026_20067[(2)] = null);

(statearr_20026_20067[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (4))){
var inst_19962 = (state_20021[(13)]);
var inst_19962__$1 = (state_20021[(2)]);
var inst_19963 = (inst_19962__$1 == null);
var state_20021__$1 = (function (){var statearr_20027 = state_20021;
(statearr_20027[(13)] = inst_19962__$1);

return statearr_20027;
})();
if(cljs.core.truth_(inst_19963)){
var statearr_20028_20068 = state_20021__$1;
(statearr_20028_20068[(1)] = (5));

} else {
var statearr_20029_20069 = state_20021__$1;
(statearr_20029_20069[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (15))){
var state_20021__$1 = state_20021;
var statearr_20033_20070 = state_20021__$1;
(statearr_20033_20070[(2)] = null);

(statearr_20033_20070[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (21))){
var state_20021__$1 = state_20021;
var statearr_20034_20071 = state_20021__$1;
(statearr_20034_20071[(2)] = null);

(statearr_20034_20071[(1)] = (23));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (13))){
var inst_19973 = (state_20021[(9)]);
var inst_19975 = (state_20021[(10)]);
var inst_19976 = (state_20021[(11)]);
var inst_19974 = (state_20021[(12)]);
var inst_19983 = (state_20021[(2)]);
var inst_19984 = (inst_19976 + (1));
var tmp20030 = inst_19973;
var tmp20031 = inst_19975;
var tmp20032 = inst_19974;
var inst_19973__$1 = tmp20030;
var inst_19974__$1 = tmp20032;
var inst_19975__$1 = tmp20031;
var inst_19976__$1 = inst_19984;
var state_20021__$1 = (function (){var statearr_20035 = state_20021;
(statearr_20035[(14)] = inst_19983);

(statearr_20035[(9)] = inst_19973__$1);

(statearr_20035[(10)] = inst_19975__$1);

(statearr_20035[(11)] = inst_19976__$1);

(statearr_20035[(12)] = inst_19974__$1);

return statearr_20035;
})();
var statearr_20036_20072 = state_20021__$1;
(statearr_20036_20072[(2)] = null);

(statearr_20036_20072[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (22))){
var state_20021__$1 = state_20021;
var statearr_20037_20073 = state_20021__$1;
(statearr_20037_20073[(2)] = null);

(statearr_20037_20073[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (6))){
var inst_19962 = (state_20021[(13)]);
var inst_19971 = (function (){var G__20038 = inst_19962;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20038) : f.call(null,G__20038));
})();
var inst_19972 = cljs.core.seq(inst_19971);
var inst_19973 = inst_19972;
var inst_19974 = null;
var inst_19975 = (0);
var inst_19976 = (0);
var state_20021__$1 = (function (){var statearr_20039 = state_20021;
(statearr_20039[(9)] = inst_19973);

(statearr_20039[(10)] = inst_19975);

(statearr_20039[(11)] = inst_19976);

(statearr_20039[(12)] = inst_19974);

return statearr_20039;
})();
var statearr_20040_20074 = state_20021__$1;
(statearr_20040_20074[(2)] = null);

(statearr_20040_20074[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (17))){
var inst_19987 = (state_20021[(7)]);
var inst_19991 = cljs.core.chunk_first(inst_19987);
var inst_19992 = cljs.core.chunk_rest(inst_19987);
var inst_19993 = cljs.core.count(inst_19991);
var inst_19973 = inst_19992;
var inst_19974 = inst_19991;
var inst_19975 = inst_19993;
var inst_19976 = (0);
var state_20021__$1 = (function (){var statearr_20041 = state_20021;
(statearr_20041[(9)] = inst_19973);

(statearr_20041[(10)] = inst_19975);

(statearr_20041[(11)] = inst_19976);

(statearr_20041[(12)] = inst_19974);

return statearr_20041;
})();
var statearr_20042_20075 = state_20021__$1;
(statearr_20042_20075[(2)] = null);

(statearr_20042_20075[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (3))){
var inst_20019 = (state_20021[(2)]);
var state_20021__$1 = state_20021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20021__$1,inst_20019);
} else {
if((state_val_20022 === (12))){
var inst_20007 = (state_20021[(2)]);
var state_20021__$1 = state_20021;
var statearr_20043_20076 = state_20021__$1;
(statearr_20043_20076[(2)] = inst_20007);

(statearr_20043_20076[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (2))){
var state_20021__$1 = state_20021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20021__$1,(4),in$);
} else {
if((state_val_20022 === (23))){
var inst_20015 = (state_20021[(2)]);
var state_20021__$1 = state_20021;
var statearr_20044_20077 = state_20021__$1;
(statearr_20044_20077[(2)] = inst_20015);

(statearr_20044_20077[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (19))){
var inst_20002 = (state_20021[(2)]);
var state_20021__$1 = state_20021;
var statearr_20045_20078 = state_20021__$1;
(statearr_20045_20078[(2)] = inst_20002);

(statearr_20045_20078[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (11))){
var inst_19987 = (state_20021[(7)]);
var inst_19973 = (state_20021[(9)]);
var inst_19987__$1 = cljs.core.seq(inst_19973);
var state_20021__$1 = (function (){var statearr_20046 = state_20021;
(statearr_20046[(7)] = inst_19987__$1);

return statearr_20046;
})();
if(inst_19987__$1){
var statearr_20047_20079 = state_20021__$1;
(statearr_20047_20079[(1)] = (14));

} else {
var statearr_20048_20080 = state_20021__$1;
(statearr_20048_20080[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (9))){
var inst_20009 = (state_20021[(2)]);
var inst_20010 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20021__$1 = (function (){var statearr_20049 = state_20021;
(statearr_20049[(15)] = inst_20009);

return statearr_20049;
})();
if(cljs.core.truth_(inst_20010)){
var statearr_20050_20081 = state_20021__$1;
(statearr_20050_20081[(1)] = (21));

} else {
var statearr_20051_20082 = state_20021__$1;
(statearr_20051_20082[(1)] = (22));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (5))){
var inst_19965 = cljs.core.async.close_BANG_(out);
var state_20021__$1 = state_20021;
var statearr_20052_20083 = state_20021__$1;
(statearr_20052_20083[(2)] = inst_19965);

(statearr_20052_20083[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (14))){
var inst_19987 = (state_20021[(7)]);
var inst_19989 = cljs.core.chunked_seq_QMARK_(inst_19987);
var state_20021__$1 = state_20021;
if(inst_19989){
var statearr_20053_20084 = state_20021__$1;
(statearr_20053_20084[(1)] = (17));

} else {
var statearr_20054_20085 = state_20021__$1;
(statearr_20054_20085[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (16))){
var inst_20005 = (state_20021[(2)]);
var state_20021__$1 = state_20021;
var statearr_20055_20086 = state_20021__$1;
(statearr_20055_20086[(2)] = inst_20005);

(statearr_20055_20086[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20022 === (10))){
var inst_19976 = (state_20021[(11)]);
var inst_19974 = (state_20021[(12)]);
var inst_19981 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19974,inst_19976);
var state_20021__$1 = state_20021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20021__$1,(13),out,inst_19981);
} else {
if((state_val_20022 === (18))){
var inst_19987 = (state_20021[(7)]);
var inst_19996 = cljs.core.first(inst_19987);
var state_20021__$1 = state_20021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20021__$1,(20),out,inst_19996);
} else {
if((state_val_20022 === (8))){
var inst_19975 = (state_20021[(10)]);
var inst_19976 = (state_20021[(11)]);
var inst_19978 = (inst_19976 < inst_19975);
var inst_19979 = inst_19978;
var state_20021__$1 = state_20021;
if(cljs.core.truth_(inst_19979)){
var statearr_20056_20087 = state_20021__$1;
(statearr_20056_20087[(1)] = (10));

} else {
var statearr_20057_20088 = state_20021__$1;
(statearr_20057_20088[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12724__auto__))
;
return ((function (switch__12644__auto__,c__12724__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12645__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12645__auto____0 = (function (){
var statearr_20061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20061[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12645__auto__);

(statearr_20061[(1)] = (1));

return statearr_20061;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12645__auto____1 = (function (state_20021){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_20021);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e20062){if((e20062 instanceof Object)){
var ex__12648__auto__ = e20062;
var statearr_20063_20089 = state_20021;
(statearr_20063_20089[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20021);

return cljs.core.constant$keyword$recur;
} else {
throw e20062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__20090 = state_20021;
state_20021 = G__20090;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12645__auto__ = function(state_20021){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12645__auto____1.call(this,state_20021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12645__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12645__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto__))
})();
var state__12726__auto__ = (function (){var statearr_20064 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_20064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto__);

return statearr_20064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto__))
);

return c__12724__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12724__auto___20195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___20195,out){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___20195,out){
return (function (state_20170){
var state_val_20171 = (state_20170[(1)]);
if((state_val_20171 === (7))){
var inst_20165 = (state_20170[(2)]);
var state_20170__$1 = state_20170;
var statearr_20172_20196 = state_20170__$1;
(statearr_20172_20196[(2)] = inst_20165);

(statearr_20172_20196[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20171 === (1))){
var inst_20147 = null;
var state_20170__$1 = (function (){var statearr_20173 = state_20170;
(statearr_20173[(7)] = inst_20147);

return statearr_20173;
})();
var statearr_20174_20197 = state_20170__$1;
(statearr_20174_20197[(2)] = null);

(statearr_20174_20197[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20171 === (4))){
var inst_20150 = (state_20170[(8)]);
var inst_20150__$1 = (state_20170[(2)]);
var inst_20151 = (inst_20150__$1 == null);
var inst_20152 = cljs.core.not(inst_20151);
var state_20170__$1 = (function (){var statearr_20175 = state_20170;
(statearr_20175[(8)] = inst_20150__$1);

return statearr_20175;
})();
if(inst_20152){
var statearr_20176_20198 = state_20170__$1;
(statearr_20176_20198[(1)] = (5));

} else {
var statearr_20177_20199 = state_20170__$1;
(statearr_20177_20199[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20171 === (6))){
var state_20170__$1 = state_20170;
var statearr_20178_20200 = state_20170__$1;
(statearr_20178_20200[(2)] = null);

(statearr_20178_20200[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20171 === (3))){
var inst_20167 = (state_20170[(2)]);
var inst_20168 = cljs.core.async.close_BANG_(out);
var state_20170__$1 = (function (){var statearr_20179 = state_20170;
(statearr_20179[(9)] = inst_20167);

return statearr_20179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20170__$1,inst_20168);
} else {
if((state_val_20171 === (2))){
var state_20170__$1 = state_20170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20170__$1,(4),ch);
} else {
if((state_val_20171 === (11))){
var inst_20150 = (state_20170[(8)]);
var inst_20159 = (state_20170[(2)]);
var inst_20147 = inst_20150;
var state_20170__$1 = (function (){var statearr_20180 = state_20170;
(statearr_20180[(7)] = inst_20147);

(statearr_20180[(10)] = inst_20159);

return statearr_20180;
})();
var statearr_20181_20201 = state_20170__$1;
(statearr_20181_20201[(2)] = null);

(statearr_20181_20201[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20171 === (9))){
var inst_20150 = (state_20170[(8)]);
var state_20170__$1 = state_20170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20170__$1,(11),out,inst_20150);
} else {
if((state_val_20171 === (5))){
var inst_20147 = (state_20170[(7)]);
var inst_20150 = (state_20170[(8)]);
var inst_20154 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20150,inst_20147);
var state_20170__$1 = state_20170;
if(inst_20154){
var statearr_20183_20202 = state_20170__$1;
(statearr_20183_20202[(1)] = (8));

} else {
var statearr_20184_20203 = state_20170__$1;
(statearr_20184_20203[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20171 === (10))){
var inst_20162 = (state_20170[(2)]);
var state_20170__$1 = state_20170;
var statearr_20185_20204 = state_20170__$1;
(statearr_20185_20204[(2)] = inst_20162);

(statearr_20185_20204[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20171 === (8))){
var inst_20147 = (state_20170[(7)]);
var tmp20182 = inst_20147;
var inst_20147__$1 = tmp20182;
var state_20170__$1 = (function (){var statearr_20186 = state_20170;
(statearr_20186[(7)] = inst_20147__$1);

return statearr_20186;
})();
var statearr_20187_20205 = state_20170__$1;
(statearr_20187_20205[(2)] = null);

(statearr_20187_20205[(1)] = (2));


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
}
}
}
}
});})(c__12724__auto___20195,out))
;
return ((function (switch__12644__auto__,c__12724__auto___20195,out){
return (function() {
var cljs$core$async$unique_$_state_machine__12645__auto__ = null;
var cljs$core$async$unique_$_state_machine__12645__auto____0 = (function (){
var statearr_20191 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20191[(0)] = cljs$core$async$unique_$_state_machine__12645__auto__);

(statearr_20191[(1)] = (1));

return statearr_20191;
});
var cljs$core$async$unique_$_state_machine__12645__auto____1 = (function (state_20170){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_20170);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e20192){if((e20192 instanceof Object)){
var ex__12648__auto__ = e20192;
var statearr_20193_20206 = state_20170;
(statearr_20193_20206[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20170);

return cljs.core.constant$keyword$recur;
} else {
throw e20192;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__20207 = state_20170;
state_20170 = G__20207;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__12645__auto__ = function(state_20170){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__12645__auto____1.call(this,state_20170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__12645__auto____0;
cljs$core$async$unique_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__12645__auto____1;
return cljs$core$async$unique_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___20195,out))
})();
var state__12726__auto__ = (function (){var statearr_20194 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_20194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___20195);

return statearr_20194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___20195,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12724__auto___20345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___20345,out){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___20345,out){
return (function (state_20315){
var state_val_20316 = (state_20315[(1)]);
if((state_val_20316 === (7))){
var inst_20311 = (state_20315[(2)]);
var state_20315__$1 = state_20315;
var statearr_20317_20346 = state_20315__$1;
(statearr_20317_20346[(2)] = inst_20311);

(statearr_20317_20346[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20316 === (1))){
var inst_20278 = (new Array(n));
var inst_20279 = inst_20278;
var inst_20280 = (0);
var state_20315__$1 = (function (){var statearr_20318 = state_20315;
(statearr_20318[(7)] = inst_20279);

(statearr_20318[(8)] = inst_20280);

return statearr_20318;
})();
var statearr_20319_20347 = state_20315__$1;
(statearr_20319_20347[(2)] = null);

(statearr_20319_20347[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20316 === (4))){
var inst_20283 = (state_20315[(9)]);
var inst_20283__$1 = (state_20315[(2)]);
var inst_20284 = (inst_20283__$1 == null);
var inst_20285 = cljs.core.not(inst_20284);
var state_20315__$1 = (function (){var statearr_20320 = state_20315;
(statearr_20320[(9)] = inst_20283__$1);

return statearr_20320;
})();
if(inst_20285){
var statearr_20321_20348 = state_20315__$1;
(statearr_20321_20348[(1)] = (5));

} else {
var statearr_20322_20349 = state_20315__$1;
(statearr_20322_20349[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20316 === (15))){
var inst_20305 = (state_20315[(2)]);
var state_20315__$1 = state_20315;
var statearr_20323_20350 = state_20315__$1;
(statearr_20323_20350[(2)] = inst_20305);

(statearr_20323_20350[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20316 === (13))){
var state_20315__$1 = state_20315;
var statearr_20324_20351 = state_20315__$1;
(statearr_20324_20351[(2)] = null);

(statearr_20324_20351[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20316 === (6))){
var inst_20280 = (state_20315[(8)]);
var inst_20301 = (inst_20280 > (0));
var state_20315__$1 = state_20315;
if(cljs.core.truth_(inst_20301)){
var statearr_20325_20352 = state_20315__$1;
(statearr_20325_20352[(1)] = (12));

} else {
var statearr_20326_20353 = state_20315__$1;
(statearr_20326_20353[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20316 === (3))){
var inst_20313 = (state_20315[(2)]);
var state_20315__$1 = state_20315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20315__$1,inst_20313);
} else {
if((state_val_20316 === (12))){
var inst_20279 = (state_20315[(7)]);
var inst_20303 = cljs.core.vec(inst_20279);
var state_20315__$1 = state_20315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20315__$1,(15),out,inst_20303);
} else {
if((state_val_20316 === (2))){
var state_20315__$1 = state_20315;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20315__$1,(4),ch);
} else {
if((state_val_20316 === (11))){
var inst_20295 = (state_20315[(2)]);
var inst_20296 = (new Array(n));
var inst_20279 = inst_20296;
var inst_20280 = (0);
var state_20315__$1 = (function (){var statearr_20327 = state_20315;
(statearr_20327[(10)] = inst_20295);

(statearr_20327[(7)] = inst_20279);

(statearr_20327[(8)] = inst_20280);

return statearr_20327;
})();
var statearr_20328_20354 = state_20315__$1;
(statearr_20328_20354[(2)] = null);

(statearr_20328_20354[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20316 === (9))){
var inst_20279 = (state_20315[(7)]);
var inst_20293 = cljs.core.vec(inst_20279);
var state_20315__$1 = state_20315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20315__$1,(11),out,inst_20293);
} else {
if((state_val_20316 === (5))){
var inst_20279 = (state_20315[(7)]);
var inst_20283 = (state_20315[(9)]);
var inst_20288 = (state_20315[(11)]);
var inst_20280 = (state_20315[(8)]);
var inst_20287 = (inst_20279[inst_20280] = inst_20283);
var inst_20288__$1 = (inst_20280 + (1));
var inst_20289 = (inst_20288__$1 < n);
var state_20315__$1 = (function (){var statearr_20329 = state_20315;
(statearr_20329[(12)] = inst_20287);

(statearr_20329[(11)] = inst_20288__$1);

return statearr_20329;
})();
if(cljs.core.truth_(inst_20289)){
var statearr_20330_20355 = state_20315__$1;
(statearr_20330_20355[(1)] = (8));

} else {
var statearr_20331_20356 = state_20315__$1;
(statearr_20331_20356[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20316 === (14))){
var inst_20308 = (state_20315[(2)]);
var inst_20309 = cljs.core.async.close_BANG_(out);
var state_20315__$1 = (function (){var statearr_20333 = state_20315;
(statearr_20333[(13)] = inst_20308);

return statearr_20333;
})();
var statearr_20334_20357 = state_20315__$1;
(statearr_20334_20357[(2)] = inst_20309);

(statearr_20334_20357[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20316 === (10))){
var inst_20299 = (state_20315[(2)]);
var state_20315__$1 = state_20315;
var statearr_20335_20358 = state_20315__$1;
(statearr_20335_20358[(2)] = inst_20299);

(statearr_20335_20358[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20316 === (8))){
var inst_20279 = (state_20315[(7)]);
var inst_20288 = (state_20315[(11)]);
var tmp20332 = inst_20279;
var inst_20279__$1 = tmp20332;
var inst_20280 = inst_20288;
var state_20315__$1 = (function (){var statearr_20336 = state_20315;
(statearr_20336[(7)] = inst_20279__$1);

(statearr_20336[(8)] = inst_20280);

return statearr_20336;
})();
var statearr_20337_20359 = state_20315__$1;
(statearr_20337_20359[(2)] = null);

(statearr_20337_20359[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__12724__auto___20345,out))
;
return ((function (switch__12644__auto__,c__12724__auto___20345,out){
return (function() {
var cljs$core$async$partition_$_state_machine__12645__auto__ = null;
var cljs$core$async$partition_$_state_machine__12645__auto____0 = (function (){
var statearr_20341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20341[(0)] = cljs$core$async$partition_$_state_machine__12645__auto__);

(statearr_20341[(1)] = (1));

return statearr_20341;
});
var cljs$core$async$partition_$_state_machine__12645__auto____1 = (function (state_20315){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_20315);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e20342){if((e20342 instanceof Object)){
var ex__12648__auto__ = e20342;
var statearr_20343_20360 = state_20315;
(statearr_20343_20360[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20315);

return cljs.core.constant$keyword$recur;
} else {
throw e20342;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__20361 = state_20315;
state_20315 = G__20361;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__12645__auto__ = function(state_20315){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__12645__auto____1.call(this,state_20315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__12645__auto____0;
cljs$core$async$partition_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__12645__auto____1;
return cljs$core$async$partition_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___20345,out))
})();
var state__12726__auto__ = (function (){var statearr_20344 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_20344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___20345);

return statearr_20344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___20345,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12724__auto___20509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto___20509,out){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto___20509,out){
return (function (state_20478){
var state_val_20479 = (state_20478[(1)]);
if((state_val_20479 === (7))){
var inst_20474 = (state_20478[(2)]);
var state_20478__$1 = state_20478;
var statearr_20480_20510 = state_20478__$1;
(statearr_20480_20510[(2)] = inst_20474);

(statearr_20480_20510[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20479 === (1))){
var inst_20437 = [];
var inst_20438 = inst_20437;
var inst_20439 = cljs.core.constant$keyword$cljs$core$async_SLASH_nothing;
var state_20478__$1 = (function (){var statearr_20481 = state_20478;
(statearr_20481[(7)] = inst_20438);

(statearr_20481[(8)] = inst_20439);

return statearr_20481;
})();
var statearr_20482_20511 = state_20478__$1;
(statearr_20482_20511[(2)] = null);

(statearr_20482_20511[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20479 === (4))){
var inst_20442 = (state_20478[(9)]);
var inst_20442__$1 = (state_20478[(2)]);
var inst_20443 = (inst_20442__$1 == null);
var inst_20444 = cljs.core.not(inst_20443);
var state_20478__$1 = (function (){var statearr_20483 = state_20478;
(statearr_20483[(9)] = inst_20442__$1);

return statearr_20483;
})();
if(inst_20444){
var statearr_20484_20512 = state_20478__$1;
(statearr_20484_20512[(1)] = (5));

} else {
var statearr_20485_20513 = state_20478__$1;
(statearr_20485_20513[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20479 === (15))){
var inst_20468 = (state_20478[(2)]);
var state_20478__$1 = state_20478;
var statearr_20486_20514 = state_20478__$1;
(statearr_20486_20514[(2)] = inst_20468);

(statearr_20486_20514[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20479 === (13))){
var state_20478__$1 = state_20478;
var statearr_20487_20515 = state_20478__$1;
(statearr_20487_20515[(2)] = null);

(statearr_20487_20515[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20479 === (6))){
var inst_20438 = (state_20478[(7)]);
var inst_20463 = inst_20438.length;
var inst_20464 = (inst_20463 > (0));
var state_20478__$1 = state_20478;
if(cljs.core.truth_(inst_20464)){
var statearr_20488_20516 = state_20478__$1;
(statearr_20488_20516[(1)] = (12));

} else {
var statearr_20489_20517 = state_20478__$1;
(statearr_20489_20517[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20479 === (3))){
var inst_20476 = (state_20478[(2)]);
var state_20478__$1 = state_20478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20478__$1,inst_20476);
} else {
if((state_val_20479 === (12))){
var inst_20438 = (state_20478[(7)]);
var inst_20466 = cljs.core.vec(inst_20438);
var state_20478__$1 = state_20478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20478__$1,(15),out,inst_20466);
} else {
if((state_val_20479 === (2))){
var state_20478__$1 = state_20478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20478__$1,(4),ch);
} else {
if((state_val_20479 === (11))){
var inst_20446 = (state_20478[(10)]);
var inst_20442 = (state_20478[(9)]);
var inst_20456 = (state_20478[(2)]);
var inst_20457 = [];
var inst_20458 = inst_20457.push(inst_20442);
var inst_20438 = inst_20457;
var inst_20439 = inst_20446;
var state_20478__$1 = (function (){var statearr_20490 = state_20478;
(statearr_20490[(7)] = inst_20438);

(statearr_20490[(11)] = inst_20456);

(statearr_20490[(8)] = inst_20439);

(statearr_20490[(12)] = inst_20458);

return statearr_20490;
})();
var statearr_20491_20518 = state_20478__$1;
(statearr_20491_20518[(2)] = null);

(statearr_20491_20518[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20479 === (9))){
var inst_20438 = (state_20478[(7)]);
var inst_20454 = cljs.core.vec(inst_20438);
var state_20478__$1 = state_20478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20478__$1,(11),out,inst_20454);
} else {
if((state_val_20479 === (5))){
var inst_20446 = (state_20478[(10)]);
var inst_20439 = (state_20478[(8)]);
var inst_20442 = (state_20478[(9)]);
var inst_20446__$1 = (function (){var G__20492 = inst_20442;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20492) : f.call(null,G__20492));
})();
var inst_20447 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20446__$1,inst_20439);
var inst_20448 = cljs.core.keyword_identical_QMARK_(inst_20439,cljs.core.constant$keyword$cljs$core$async_SLASH_nothing);
var inst_20449 = (inst_20447) || (inst_20448);
var state_20478__$1 = (function (){var statearr_20493 = state_20478;
(statearr_20493[(10)] = inst_20446__$1);

return statearr_20493;
})();
if(cljs.core.truth_(inst_20449)){
var statearr_20494_20519 = state_20478__$1;
(statearr_20494_20519[(1)] = (8));

} else {
var statearr_20495_20520 = state_20478__$1;
(statearr_20495_20520[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20479 === (14))){
var inst_20471 = (state_20478[(2)]);
var inst_20472 = cljs.core.async.close_BANG_(out);
var state_20478__$1 = (function (){var statearr_20497 = state_20478;
(statearr_20497[(13)] = inst_20471);

return statearr_20497;
})();
var statearr_20498_20521 = state_20478__$1;
(statearr_20498_20521[(2)] = inst_20472);

(statearr_20498_20521[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20479 === (10))){
var inst_20461 = (state_20478[(2)]);
var state_20478__$1 = state_20478;
var statearr_20499_20522 = state_20478__$1;
(statearr_20499_20522[(2)] = inst_20461);

(statearr_20499_20522[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20479 === (8))){
var inst_20438 = (state_20478[(7)]);
var inst_20446 = (state_20478[(10)]);
var inst_20442 = (state_20478[(9)]);
var inst_20451 = inst_20438.push(inst_20442);
var tmp20496 = inst_20438;
var inst_20438__$1 = tmp20496;
var inst_20439 = inst_20446;
var state_20478__$1 = (function (){var statearr_20500 = state_20478;
(statearr_20500[(7)] = inst_20438__$1);

(statearr_20500[(14)] = inst_20451);

(statearr_20500[(8)] = inst_20439);

return statearr_20500;
})();
var statearr_20501_20523 = state_20478__$1;
(statearr_20501_20523[(2)] = null);

(statearr_20501_20523[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__12724__auto___20509,out))
;
return ((function (switch__12644__auto__,c__12724__auto___20509,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__12645__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__12645__auto____0 = (function (){
var statearr_20505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20505[(0)] = cljs$core$async$partition_by_$_state_machine__12645__auto__);

(statearr_20505[(1)] = (1));

return statearr_20505;
});
var cljs$core$async$partition_by_$_state_machine__12645__auto____1 = (function (state_20478){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_20478);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e20506){if((e20506 instanceof Object)){
var ex__12648__auto__ = e20506;
var statearr_20507_20524 = state_20478;
(statearr_20507_20524[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20478);

return cljs.core.constant$keyword$recur;
} else {
throw e20506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__20525 = state_20478;
state_20478 = G__20525;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__12645__auto__ = function(state_20478){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__12645__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__12645__auto____1.call(this,state_20478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__12645__auto____0;
cljs$core$async$partition_by_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__12645__auto____1;
return cljs$core$async$partition_by_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto___20509,out))
})();
var state__12726__auto__ = (function (){var statearr_20508 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_20508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto___20509);

return statearr_20508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto___20509,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;
