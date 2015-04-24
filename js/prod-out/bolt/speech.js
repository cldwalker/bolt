// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('bolt.speech');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
bolt.speech.start = (function bolt$speech$start(_,app){
console.log("Started speech capture.");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.assoc,cljs.core.constant$keyword$recognizing,true,cljs.core.array_seq([cljs.core.constant$keyword$mic_DASH_path,"img/mic-animate.gif"], 0));
});
bolt.speech.error = (function bolt$speech$error(err,app){
console.log("Error while capturing speech!",err);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.assoc,cljs.core.constant$keyword$recognizing,false,cljs.core.array_seq([cljs.core.constant$keyword$mic_DASH_path,"img/mic-slash.gif"], 0));
});
bolt.speech.end = (function bolt$speech$end(_,app){
console.log("Finished speech capture.");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.assoc,cljs.core.constant$keyword$recognizing,false,cljs.core.array_seq([cljs.core.constant$keyword$mic_DASH_path,"img/mic.gif"], 0));
});
bolt.speech.result = (function bolt$speech$result(event_data,app){
var result_indices = cljs.core.range.cljs$core$IFn$_invoke$arity$2(event_data.resultIndex,event_data.results.length);
var result__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (result_indices){
return (function (accum,idx){
return [cljs.core.str(accum),cljs.core.str(((event_data.results[idx])[(0)]).transcript)].join('');
});})(result_indices))
,"",result_indices);
console.debug("Interim result",result__$1);

var temp__4126__auto__ = cljs.core.some(((function (result_indices,result__$1){
return (function (p1__16205_SHARP_){
if(cljs.core.truth_((event_data.results[p1__16205_SHARP_]).isFinal)){
return ((event_data.results[p1__16205_SHARP_])[(0)]).transcript;
} else {
return null;
}
});})(result_indices,result__$1))
,result_indices);
if(cljs.core.truth_(temp__4126__auto__)){
var final_result = temp__4126__auto__;
console.log("Final result",final_result);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,cljs.core.constant$keyword$user_DASH_input,clojure.string.lower_case(final_result));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$event_DASH_ch.cljs$core$IFn$_invoke$arity$1((function (){var G__16207 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16207) : cljs.core.deref.call(null,G__16207));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$service$search,clojure.string.lower_case(final_result)], null));
} else {
return null;
}
});
bolt.speech.event_loop = (function bolt$speech$event_loop(ch,app){
var c__12724__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12724__auto__){
return (function (){
var f__12725__auto__ = (function (){var switch__12644__auto__ = ((function (c__12724__auto__){
return (function (state_16288){
var state_val_16289 = (state_16288[(1)]);
if((state_val_16289 === (7))){
var inst_16267 = (state_16288[(7)]);
var inst_16266 = (state_16288[(2)]);
var inst_16267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16266,(0),null);
var inst_16268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16266,(1),null);
var state_16288__$1 = (function (){var statearr_16290 = state_16288;
(statearr_16290[(7)] = inst_16267__$1);

(statearr_16290[(8)] = inst_16268);

return statearr_16290;
})();
var G__16291_16316 = (((inst_16267__$1 instanceof cljs.core.Keyword))?inst_16267__$1.fqn:null);
switch (G__16291_16316) {
case "end":
var statearr_16292_16318 = state_16288__$1;
(statearr_16292_16318[(1)] = (12));


break;
case "result":
var statearr_16293_16319 = state_16288__$1;
(statearr_16293_16319[(1)] = (11));


break;
case "error":
var statearr_16294_16320 = state_16288__$1;
(statearr_16294_16320[(1)] = (10));


break;
case "start":
var statearr_16295_16321 = state_16288__$1;
(statearr_16295_16321[(1)] = (9));


break;
default:
var statearr_16296_16322 = state_16288__$1;
(statearr_16296_16322[(1)] = (13));



}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16289 === (1))){
var state_16288__$1 = state_16288;
var statearr_16297_16323 = state_16288__$1;
(statearr_16297_16323[(2)] = null);

(statearr_16297_16323[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16289 === (4))){
var state_16288__$1 = state_16288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16288__$1,(7),ch);
} else {
if((state_val_16289 === (13))){
var inst_16267 = (state_16288[(7)]);
var inst_16277 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Unknown event",inst_16267], 0));
var state_16288__$1 = state_16288;
var statearr_16298_16324 = state_16288__$1;
(statearr_16298_16324[(2)] = inst_16277);

(statearr_16298_16324[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16289 === (6))){
var inst_16284 = (state_16288[(2)]);
var state_16288__$1 = state_16288;
var statearr_16299_16325 = state_16288__$1;
(statearr_16299_16325[(2)] = inst_16284);

(statearr_16299_16325[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16289 === (3))){
var inst_16286 = (state_16288[(2)]);
var state_16288__$1 = state_16288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16288__$1,inst_16286);
} else {
if((state_val_16289 === (12))){
var inst_16268 = (state_16288[(8)]);
var inst_16275 = bolt.speech.end(inst_16268,app);
var state_16288__$1 = state_16288;
var statearr_16300_16326 = state_16288__$1;
(statearr_16300_16326[(2)] = inst_16275);

(statearr_16300_16326[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16289 === (2))){
var state_16288__$1 = state_16288;
var statearr_16301_16327 = state_16288__$1;
(statearr_16301_16327[(1)] = (4));



return cljs.core.constant$keyword$recur;
} else {
if((state_val_16289 === (11))){
var inst_16268 = (state_16288[(8)]);
var inst_16273 = bolt.speech.result(inst_16268,app);
var state_16288__$1 = state_16288;
var statearr_16303_16328 = state_16288__$1;
(statearr_16303_16328[(2)] = inst_16273);

(statearr_16303_16328[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16289 === (9))){
var inst_16268 = (state_16288[(8)]);
var inst_16269 = bolt.speech.start(inst_16268,app);
var state_16288__$1 = state_16288;
var statearr_16304_16329 = state_16288__$1;
(statearr_16304_16329[(2)] = inst_16269);

(statearr_16304_16329[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16289 === (5))){
var state_16288__$1 = state_16288;
var statearr_16305_16330 = state_16288__$1;
(statearr_16305_16330[(2)] = null);

(statearr_16305_16330[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16289 === (10))){
var inst_16268 = (state_16288[(8)]);
var inst_16271 = bolt.speech.error(inst_16268,app);
var state_16288__$1 = state_16288;
var statearr_16306_16331 = state_16288__$1;
(statearr_16306_16331[(2)] = inst_16271);

(statearr_16306_16331[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16289 === (8))){
var inst_16280 = (state_16288[(2)]);
var state_16288__$1 = (function (){var statearr_16307 = state_16288;
(statearr_16307[(9)] = inst_16280);

return statearr_16307;
})();
var statearr_16308_16332 = state_16288__$1;
(statearr_16308_16332[(2)] = null);

(statearr_16308_16332[(1)] = (2));


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
var bolt$speech$event_loop_$_state_machine__12645__auto__ = null;
var bolt$speech$event_loop_$_state_machine__12645__auto____0 = (function (){
var statearr_16312 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16312[(0)] = bolt$speech$event_loop_$_state_machine__12645__auto__);

(statearr_16312[(1)] = (1));

return statearr_16312;
});
var bolt$speech$event_loop_$_state_machine__12645__auto____1 = (function (state_16288){
while(true){
var ret_value__12646__auto__ = (function (){try{while(true){
var result__12647__auto__ = switch__12644__auto__(state_16288);
if(cljs.core.keyword_identical_QMARK_(result__12647__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__12647__auto__;
}
break;
}
}catch (e16313){if((e16313 instanceof Object)){
var ex__12648__auto__ = e16313;
var statearr_16314_16333 = state_16288;
(statearr_16314_16333[(5)] = ex__12648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16288);

return cljs.core.constant$keyword$recur;
} else {
throw e16313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12646__auto__,cljs.core.constant$keyword$recur)){
var G__16334 = state_16288;
state_16288 = G__16334;
continue;
} else {
return ret_value__12646__auto__;
}
break;
}
});
bolt$speech$event_loop_$_state_machine__12645__auto__ = function(state_16288){
switch(arguments.length){
case 0:
return bolt$speech$event_loop_$_state_machine__12645__auto____0.call(this);
case 1:
return bolt$speech$event_loop_$_state_machine__12645__auto____1.call(this,state_16288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bolt$speech$event_loop_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$0 = bolt$speech$event_loop_$_state_machine__12645__auto____0;
bolt$speech$event_loop_$_state_machine__12645__auto__.cljs$core$IFn$_invoke$arity$1 = bolt$speech$event_loop_$_state_machine__12645__auto____1;
return bolt$speech$event_loop_$_state_machine__12645__auto__;
})()
;})(switch__12644__auto__,c__12724__auto__))
})();
var state__12726__auto__ = (function (){var statearr_16315 = (function (){return (f__12725__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12725__auto__.cljs$core$IFn$_invoke$arity$0() : f__12725__auto__.call(null));
})();
(statearr_16315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12724__auto__);

return statearr_16315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12726__auto__);
});})(c__12724__auto__))
);

return c__12724__auto__;
});
bolt.speech.__GT_recognition = (function bolt$speech$__GT_recognition(app){
var recognition = (new webkitSpeechRecognition());
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__16340_16341 = recognition;
G__16340_16341.interimResults = true;

G__16340_16341.onstart = ((function (G__16340_16341,recognition,ch){
return (function (p1__16335_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$start,p1__16335_SHARP_], null));
});})(G__16340_16341,recognition,ch))
;

G__16340_16341.onerror = ((function (G__16340_16341,recognition,ch){
return (function (p1__16336_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$error,p1__16336_SHARP_], null));
});})(G__16340_16341,recognition,ch))
;

G__16340_16341.onresult = ((function (G__16340_16341,recognition,ch){
return (function (p1__16337_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$result,p1__16337_SHARP_], null));
});})(G__16340_16341,recognition,ch))
;

G__16340_16341.onend = ((function (G__16340_16341,recognition,ch){
return (function (p1__16338_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$end,p1__16338_SHARP_], null));
});})(G__16340_16341,recognition,ch))
;


bolt.speech.event_loop(ch,app);

return recognition;
});
bolt.speech.toggle_speech = (function bolt$speech$toggle_speech(app,event){
event.preventDefault();

if(cljs.core.truth_(window.webkitSpeechRecognition)){
var recognition = (function (){var or__4163__auto__ = cljs.core.constant$keyword$recognition.cljs$core$IFn$_invoke$arity$1((function (){var G__16348 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16348) : cljs.core.deref.call(null,G__16348));
})());
if(cljs.core.truth_(or__4163__auto__)){
return or__4163__auto__;
} else {
return bolt.speech.__GT_recognition(app);
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(recognition,cljs.core.constant$keyword$recognition.cljs$core$IFn$_invoke$arity$1((function (){var G__16349 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16349) : cljs.core.deref.call(null,G__16349));
})()))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,cljs.core.constant$keyword$recognition,recognition);
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$recognizing.cljs$core$IFn$_invoke$arity$1((function (){var G__16350 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16350) : cljs.core.deref.call(null,G__16350));
})()))){
return recognition.stop();
} else {
return recognition.start();
}
} else {
var G__16351 = "Web Speech API is not supported by this browser. Use Chrome version 25 or later.";
return alert(G__16351);
}
});
