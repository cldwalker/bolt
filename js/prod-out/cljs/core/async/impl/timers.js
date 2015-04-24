// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('cljs.core.async.impl.timers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.timers.MAX_LEVEL = (15);
cljs.core.async.impl.timers.P = ((1) / (2));
cljs.core.async.impl.timers.random_level = (function() {
var cljs$core$async$impl$timers$random_level = null;
var cljs$core$async$impl$timers$random_level__0 = (function (){
return cljs$core$async$impl$timers$random_level.cljs$core$IFn$_invoke$arity$1((0));
});
var cljs$core$async$impl$timers$random_level__1 = (function (level){
while(true){
if(((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL))){
var G__20529 = (level + (1));
level = G__20529;
continue;
} else {
return level;
}
break;
}
});
cljs$core$async$impl$timers$random_level = function(level){
switch(arguments.length){
case 0:
return cljs$core$async$impl$timers$random_level__0.call(this);
case 1:
return cljs$core$async$impl$timers$random_level__1.call(this,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$impl$timers$random_level.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$impl$timers$random_level__0;
cljs$core$async$impl$timers$random_level.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$impl$timers$random_level__1;
return cljs$core$async$impl$timers$random_level;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async.impl.timers/SkipListNode");
});

cljs.core.async.impl.timers.__GT_SkipListNode = (function cljs$core$async$impl$timers$__GT_SkipListNode(key,val,forward){
return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});

cljs.core.async.impl.timers.skip_list_node = (function() {
var cljs$core$async$impl$timers$skip_list_node = null;
var cljs$core$async$impl$timers$skip_list_node__1 = (function (level){
return cljs$core$async$impl$timers$skip_list_node.cljs$core$IFn$_invoke$arity$3(null,null,level);
});
var cljs$core$async$impl$timers$skip_list_node__3 = (function (k,v,level){
var arr = (new Array((level + (1))));
var i_20533 = (0);
while(true){
if((i_20533 < arr.length)){
(arr[i_20533] = null);

var G__20534 = (i_20533 + (1));
i_20533 = G__20534;
continue;
} else {
}
break;
}

return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});
cljs$core$async$impl$timers$skip_list_node = function(k,v,level){
switch(arguments.length){
case 1:
return cljs$core$async$impl$timers$skip_list_node__1.call(this,k);
case 3:
return cljs$core$async$impl$timers$skip_list_node__3.call(this,k,v,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$impl$timers$skip_list_node.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$impl$timers$skip_list_node__1;
cljs$core$async$impl$timers$skip_list_node.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$impl$timers$skip_list_node__3;
return cljs$core$async$impl$timers$skip_list_node;
})()
;
cljs.core.async.impl.timers.least_greater_node = (function() {
var cljs$core$async$impl$timers$least_greater_node = null;
var cljs$core$async$impl$timers$least_greater_node__3 = (function (x,k,level){
return cljs$core$async$impl$timers$least_greater_node.cljs$core$IFn$_invoke$arity$4(x,k,level,null);
});
var cljs$core$async$impl$timers$least_greater_node__4 = (function (x,k,level,update){
while(true){
if(!((level < (0)))){
var x__$1 = (function (){var x__$1 = x;
while(true){
var temp__4124__auto__ = (x__$1.forward[level]);
if(cljs.core.truth_(temp__4124__auto__)){
var x_SINGLEQUOTE_ = temp__4124__auto__;
if((x_SINGLEQUOTE_.key < k)){
var G__20539 = x_SINGLEQUOTE_;
x__$1 = G__20539;
continue;
} else {
return x__$1;
}
} else {
return x__$1;
}
break;
}
})();
if((update == null)){
} else {
(update[level] = x__$1);
}

var G__20540 = x__$1;
var G__20541 = k;
var G__20542 = (level - (1));
var G__20543 = update;
x = G__20540;
k = G__20541;
level = G__20542;
update = G__20543;
continue;
} else {
return x;
}
break;
}
});
cljs$core$async$impl$timers$least_greater_node = function(x,k,level,update){
switch(arguments.length){
case 3:
return cljs$core$async$impl$timers$least_greater_node__3.call(this,x,k,level);
case 4:
return cljs$core$async$impl$timers$least_greater_node__4.call(this,x,k,level,update);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$impl$timers$least_greater_node.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$impl$timers$least_greater_node__3;
cljs$core$async$impl$timers$least_greater_node.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$impl$timers$least_greater_node__4;
return cljs$core$async$impl$timers$least_greater_node;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer(writer,pr_pair,"{",", ","}",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var iter = ((function (coll__$1){
return (function cljs$core$async$impl$timers$iter(node){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
if((node == null)){
return null;
} else {
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),cljs$core$async$impl$timers$iter((node.forward[(0)])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter((self__.header.forward[(0)]));
});

cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4(self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((!((x__$1 == null))) && ((x__$1.key === k))){
return x__$1.val = v;
} else {
var new_level = cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0();
if((new_level > self__.level)){
var i_20546 = (self__.level + (1));
while(true){
if((i_20546 <= (new_level + (1)))){
(update[i_20546] = self__.header);

var G__20547 = (i_20546 + (1));
i_20546 = G__20547;
continue;
} else {
}
break;
}

self__.level = new_level;
} else {
}

var x__$2 = cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3(k,v,(new Array(new_level)));
var i = (0);
while(true){
if((i <= self__.level)){
var links = (update[i]).forward;
(x__$2.forward[i] = (links[i]));

return (links[i] = x__$2);
} else {
return null;
}
break;
}
}
});

cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4(self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((!((x__$1 == null))) && ((x__$1.key === k))){
var i_20548 = (0);
while(true){
if((i_20548 <= self__.level)){
var links_20549 = (update[i_20548]).forward;
if(((links_20549[i_20548]) === x__$1)){
(links_20549[i_20548] = (x__$1.forward[i_20548]));

var G__20550 = (i_20548 + (1));
i_20548 = G__20550;
continue;
} else {
var G__20551 = (i_20548 + (1));
i_20548 = G__20551;
continue;
}
} else {
}
break;
}

while(true){
if(((self__.level > (0))) && (((self__.header.forward[self__.level]) == null))){
self__.level = (self__.level - (1));

continue;
} else {
return null;
}
break;
}
} else {
return null;
}
});

cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if(!((level__$1 < (0)))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);
if((x_SINGLEQUOTE_ == null)){
return null;
} else {
if((x_SINGLEQUOTE_.key >= k)){
return x_SINGLEQUOTE_;
} else {
var G__20552 = x_SINGLEQUOTE_;
x__$1 = G__20552;
continue;
}
}
break;
}
})();
if(!((nx == null))){
var G__20553 = nx;
var G__20554 = (level__$1 - (1));
x = G__20553;
level__$1 = G__20554;
continue;
} else {
var G__20555 = x;
var G__20556 = (level__$1 - (1));
x = G__20555;
level__$1 = G__20556;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if(!((level__$1 < (0)))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);
if(!((x_SINGLEQUOTE_ == null))){
if((x_SINGLEQUOTE_.key > k)){
return x__$1;
} else {
var G__20557 = x_SINGLEQUOTE_;
x__$1 = G__20557;
continue;
}
} else {
if((level__$1 === (0))){
return x__$1;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(nx)){
var G__20558 = nx;
var G__20559 = (level__$1 - (1));
x = G__20558;
level__$1 = G__20559;
continue;
} else {
var G__20560 = x;
var G__20561 = (level__$1 - (1));
x = G__20560;
level__$1 = G__20561;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async.impl.timers/SkipList");
});

cljs.core.async.impl.timers.__GT_SkipList = (function cljs$core$async$impl$timers$__GT_SkipList(header,level){
return (new cljs.core.async.impl.timers.SkipList(header,level));
});

cljs.core.async.impl.timers.skip_list = (function cljs$core$async$impl$timers$skip_list(){
return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1((0)),(0)));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list();
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = (10);
/**
 * returns a channel that will close after msecs
 */
cljs.core.async.impl.timers.timeout = (function cljs$core$async$impl$timers$timeout(msecs){
var timeout__$1 = ((new Date()).valueOf() + msecs);
var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);
var or__4163__auto__ = (cljs.core.truth_((function (){var and__4151__auto__ = me;
if(cljs.core.truth_(and__4151__auto__)){
return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else {
return and__4151__auto__;
}
})())?me.val:null);
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
var timeout_channel = cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);

cljs.core.async.impl.dispatch.queue_delay(((function (timeout_channel,or__4163__auto__,timeout__$1,me){
return (function (){
cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);

return cljs.core.async.impl.protocols.close_BANG_(timeout_channel);
});})(timeout_channel,or__4163__auto__,timeout__$1,me))
,msecs);

return timeout_channel;
}
});
