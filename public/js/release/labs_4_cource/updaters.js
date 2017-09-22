// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('labs_4_cource.updaters');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.data');
goog.require('labs_4_cource.canvas');
goog.require('labs_4_cource.debugger$');
goog.require('labs_4_cource.storage');
goog.require('taoensso.timbre');
labs_4_cource.updaters.redraw = (function labs_4_cource$updaters$redraw(key,reference,old_state,new_state){
labs_4_cource.canvas.clean_BANG_(cljs.core.deref(labs_4_cource.storage.drawer));

return labs_4_cource.debugger$.draw_canvas_contents_BANG_();
});
labs_4_cource.updaters.swap_images = (function labs_4_cource$updaters$swap_images(key,reference,old_state,new_state){
return labs_4_cource.canvas.swap_hidden_to_visible_BANG_(cljs.core.deref(labs_4_cource.storage.drawer));
});
labs_4_cource.updaters.draw_changes = (function labs_4_cource$updaters$draw_changes(key,reference,old_state,new_state){
var vec__23391 = (function (){try{var result__22740__auto__ = clojure.data.diff(old_state,new_state);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.updaters","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",20,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__22740__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["primitives changes","=>",result__22740__auto__], null);
});})(result__22740__auto__))
,null)),null,-1359360688);

return result__22740__auto__;
}catch (e23394){if((e23394 instanceof Error)){
var e__22704__auto__ = e23394;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.updaters","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",20,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__22704__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__22704__auto__], null);
});})(e__22704__auto__))
,null)),null,1560703671);

throw e__22704__auto__;
} else {
throw e23394;

}
}})();
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23391,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23391,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(labs_4_cource.storage.debug_state),cljs.core.cst$kw$not)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__8453__auto__ = ((function (vec__23391,old,new$){
return (function labs_4_cource$updaters$draw_changes_$_iter__23395(s__23396){
return (new cljs.core.LazySeq(null,((function (vec__23391,old,new$){
return (function (){
var s__23396__$1 = s__23396;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23396__$1);
if(temp__4657__auto__){
var s__23396__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23396__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__23396__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__23398 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__23397 = (0);
while(true){
if((i__23397 < size__8452__auto__)){
var line = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__23397);
cljs.core.chunk_append(b__23398,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line,null))?null:(function (){var G__23399 = cljs.core.deref(labs_4_cource.storage.drawer);
var G__23400 = line;
return (labs_4_cource.debugger$.draw_line_BANG_.cljs$core$IFn$_invoke$arity$2 ? labs_4_cource.debugger$.draw_line_BANG_.cljs$core$IFn$_invoke$arity$2(G__23399,G__23400) : labs_4_cource.debugger$.draw_line_BANG_.call(null,G__23399,G__23400));
})()));

var G__23403 = (i__23397 + (1));
i__23397 = G__23403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23398),labs_4_cource$updaters$draw_changes_$_iter__23395(cljs.core.chunk_rest(s__23396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23398),null);
}
} else {
var line = cljs.core.first(s__23396__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line,null))?null:(function (){var G__23401 = cljs.core.deref(labs_4_cource.storage.drawer);
var G__23402 = line;
return (labs_4_cource.debugger$.draw_line_BANG_.cljs$core$IFn$_invoke$arity$2 ? labs_4_cource.debugger$.draw_line_BANG_.cljs$core$IFn$_invoke$arity$2(G__23401,G__23402) : labs_4_cource.debugger$.draw_line_BANG_.call(null,G__23401,G__23402));
})()),labs_4_cource$updaters$draw_changes_$_iter__23395(cljs.core.rest(s__23396__$2)));
}
} else {
return null;
}
break;
}
});})(vec__23391,old,new$))
,null,null));
});})(vec__23391,old,new$))
;
return iter__8453__auto__(new$);
})());
} else {
return null;
}
});
labs_4_cource.updaters.add_to_primitives_BANG_ = (function labs_4_cource$updaters$add_to_primitives_BANG_(key,reference,old_state,new_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_state,cljs.core.cst$kw$not)){
return labs_4_cource.debugger$.save_debug_line_BANG_();
} else {
return null;
}
});
cljs.core.add_watch(labs_4_cource.storage.width,cljs.core.cst$kw$width_DASH_update,labs_4_cource.updaters.redraw);
cljs.core.add_watch(labs_4_cource.storage.height,cljs.core.cst$kw$height_DASH_update,labs_4_cource.updaters.redraw);
cljs.core.add_watch(labs_4_cource.storage.scale,cljs.core.cst$kw$height_DASH_update,labs_4_cource.updaters.swap_images);
cljs.core.add_watch(labs_4_cource.storage.primitives,cljs.core.cst$kw$primitives_DASH_update,labs_4_cource.updaters.draw_changes);
cljs.core.add_watch(labs_4_cource.storage.debug_state,cljs.core.cst$kw$debug_DASH_state_DASH_change,labs_4_cource.updaters.add_to_primitives_BANG_);
