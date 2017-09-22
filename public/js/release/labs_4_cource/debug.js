// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('labs_4_cource.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.test');
goog.require('labs_4_cource.canvas');
goog.require('labs_4_cource.primitives');
goog.require('labs_4_cource.storage');
goog.require('taoensso.timbre');
labs_4_cource.debug.save_debug_line_BANG_ = (function labs_4_cource$debug$save_debug_line_BANG_(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(labs_4_cource.storage.not_full_line)),null)){
return null;
} else {
labs_4_cource.canvas.draw_pixels_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(labs_4_cource.storage.drawer),cljs.core.cst$kw$rest_DASH_points.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(labs_4_cource.storage.not_full_line)));

return labs_4_cource.storage.add_primitives(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(labs_4_cource.storage.not_full_line)));
}
});
labs_4_cource.debug.draw_line_by_point_BANG_ = (function labs_4_cource$debug$draw_line_by_point_BANG_(){
try{var result__22740__auto___23311 = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest_DASH_points.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(labs_4_cource.storage.not_full_line))))?null:labs_4_cource.canvas.draw_pixels_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(labs_4_cource.storage.drawer),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.cst$kw$rest_DASH_points.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(labs_4_cource.storage.not_full_line)))], null)));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.debug","C:\\Users\\student\\AppData\\Local\\Temp\\form-init1383293792600865879.clj",24,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__22740__auto___23311){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["draw-point","=>",result__22740__auto___23311], null);
});})(result__22740__auto___23311))
,null)),null,1274645732);

}catch (e23310){if((e23310 instanceof Error)){
var e__22704__auto___23312 = e23310;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.debug","C:\\Users\\student\\AppData\\Local\\Temp\\form-init1383293792600865879.clj",24,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__22704__auto___23312){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__22704__auto___23312], null);
});})(e__22704__auto___23312))
,null)),null,-1986056339);

throw e__22704__auto___23312;
} else {
throw e23310;

}
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(labs_4_cource.storage.not_full_line,cljs.core.assoc,cljs.core.cst$kw$rest_DASH_points,cljs.core.rest(cljs.core.cst$kw$rest_DASH_points.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(labs_4_cource.storage.not_full_line))));

if(cljs.core.empty_QMARK_(cljs.core.cst$kw$rest_DASH_points.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(labs_4_cource.storage.not_full_line)))){
labs_4_cource.debug.save_debug_line_BANG_();

return labs_4_cource.storage.remove_debug_line_BANG_();
} else {
return null;
}
});
labs_4_cource.debug.add_line_to_debug_BANG_ = (function labs_4_cource$debug$add_line_to_debug_BANG_(line){
labs_4_cource.debug.save_debug_line_BANG_();

return cljs.core.reset_BANG_(labs_4_cource.storage.not_full_line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$rest_DASH_points,(labs_4_cource.primitives.line_points.cljs$core$IFn$_invoke$arity$1 ? labs_4_cource.primitives.line_points.cljs$core$IFn$_invoke$arity$1(line) : labs_4_cource.primitives.line_points.call(null,line))], null));
});
labs_4_cource.debug.add_line_from_pos = (function labs_4_cource$debug$add_line_from_pos(){
if(cljs.core.truth_((function (){try{var result__22740__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(labs_4_cource.storage.next_primitive)),(2));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"labs-4-cource.debug","C:\\Users\\student\\AppData\\Local\\Temp\\form-init1383293792600865879.clj",35,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__22740__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$next_DASH_primitive)),(2)),"=>",result__22740__auto__], null);
});})(result__22740__auto__))
,null)),null,1817111670);

return result__22740__auto__;
}catch (e23313){if((e23313 instanceof Error)){
var e__22704__auto__ = e23313;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.debug","C:\\Users\\student\\AppData\\Local\\Temp\\form-init1383293792600865879.clj",35,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__22704__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__22704__auto__], null);
});})(e__22704__auto__))
,null)),null,-1768026266);

throw e__22704__auto__;
} else {
throw e23313;

}
}})())){
var line = (function (){try{var result__22740__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__23315 = cljs.core.deref(labs_4_cource.storage.selected);
return (fexpr__23315.cljs$core$IFn$_invoke$arity$1 ? fexpr__23315.cljs$core$IFn$_invoke$arity$1(labs_4_cource.storage.lines_generators) : fexpr__23315.call(null,labs_4_cource.storage.lines_generators));
})(),cljs.core.deref(labs_4_cource.storage.next_primitive));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"labs-4-cource.debug","C:\\Users\\student\\AppData\\Local\\Temp\\form-init1383293792600865879.clj",36,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__22740__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new-line","=>",result__22740__auto__], null);
});})(result__22740__auto__))
,null)),null,1221356328);

return result__22740__auto__;
}catch (e23314){if((e23314 instanceof Error)){
var e__22704__auto__ = e23314;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.debug","C:\\Users\\student\\AppData\\Local\\Temp\\form-init1383293792600865879.clj",36,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__22704__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__22704__auto__], null);
});})(e__22704__auto__))
,null)),null,-1386068411);

throw e__22704__auto__;
} else {
throw e23314;

}
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(labs_4_cource.storage.debug_state),cljs.core.cst$kw$not)){
labs_4_cource.storage.add_primitives(line);
} else {
labs_4_cource.debug.add_line_to_debug_BANG_(line);
}

return cljs.core.reset_BANG_(labs_4_cource.storage.next_primitive,null);
} else {
return null;
}
});
labs_4_cource.debug.add_line_to_debug_test = (function labs_4_cource$debug$add_line_to_debug_test(){
return cljs.test.test_var(labs_4_cource.debug.add_line_to_debug_test.cljs$lang$var);
});
labs_4_cource.debug.add_line_to_debug_test.cljs$lang$test = (function (){
cljs.core.reset_BANG_(labs_4_cource.storage.not_full_line,null);

labs_4_cource.debug.add_line_to_debug_BANG_((function (){var G__23316 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$wu,cljs.core.cst$kw$p1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$p2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null)], null);
return (labs_4_cource.primitives.line_points.cljs$core$IFn$_invoke$arity$1 ? labs_4_cource.primitives.line_points.cljs$core$IFn$_invoke$arity$1(G__23316) : labs_4_cource.primitives.line_points.call(null,G__23316));
})());

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(labs_4_cource.storage.not_full_line),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$type,cljs.core.cst$kw$wu,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null)]),cljs.core.cst$kw$rest_DASH_points,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5),(1)], null))], null));
});

labs_4_cource.debug.add_line_to_debug_test.cljs$lang$var = new cljs.core.Var(function(){return labs_4_cource.debug.add_line_to_debug_test;},cljs.core.cst$sym$labs_DASH_4_DASH_cource$debug_SLASH_add_DASH_line_DASH_to_DASH_debug_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$labs_DASH_4_DASH_cource$debug,cljs.core.cst$sym$add_DASH_line_DASH_to_DASH_debug_DASH_test,"src\\labs_4_cource\\debug.cljs",32,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(labs_4_cource.debug.add_line_to_debug_test)?labs_4_cource.debug.add_line_to_debug_test.cljs$lang$test:null)]));
if(typeof labs_4_cource.debug.draw_line_BANG_ !== 'undefined'){
} else {
labs_4_cource.debug.draw_line_BANG_ = (function (){var method_table__8600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8603__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("labs-4-cource.debug","draw-line!"),((function (method_table__8600__auto__,prefer_table__8601__auto__,method_cache__8602__auto__,cached_hierarchy__8603__auto__,hierarchy__8604__auto__){
return (function (canvas,line){
try{var result__22740__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(line),cljs.core.deref(labs_4_cource.storage.debug_state)], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.debug","C:\\Users\\student\\AppData\\Local\\Temp\\form-init1383293792600865879.clj",48,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__22740__auto__,method_table__8600__auto__,prefer_table__8601__auto__,method_cache__8602__auto__,cached_hierarchy__8603__auto__,hierarchy__8604__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["draw-line",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),"=>",result__22740__auto__], null);
});})(result__22740__auto__,method_table__8600__auto__,prefer_table__8601__auto__,method_cache__8602__auto__,cached_hierarchy__8603__auto__,hierarchy__8604__auto__))
,null)),null,91254220);

return result__22740__auto__;
}catch (e23317){if((e23317 instanceof Error)){
var e__22704__auto__ = e23317;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.debug","C:\\Users\\student\\AppData\\Local\\Temp\\form-init1383293792600865879.clj",48,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__22704__auto__,method_table__8600__auto__,prefer_table__8601__auto__,method_cache__8602__auto__,cached_hierarchy__8603__auto__,hierarchy__8604__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__22704__auto__], null);
});})(e__22704__auto__,method_table__8600__auto__,prefer_table__8601__auto__,method_cache__8602__auto__,cached_hierarchy__8603__auto__,hierarchy__8604__auto__))
,null)),null,-2129523959);

throw e__22704__auto__;
} else {
throw e23317;

}
}});})(method_table__8600__auto__,prefer_table__8601__auto__,method_cache__8602__auto__,cached_hierarchy__8603__auto__,hierarchy__8604__auto__))
,cljs.core.cst$kw$default,hierarchy__8604__auto__,method_table__8600__auto__,prefer_table__8601__auto__,method_cache__8602__auto__,cached_hierarchy__8603__auto__));
})();
}
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$simple,cljs.core.cst$kw$labs_DASH_4_DASH_cource$debug_SLASH_line);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$be,cljs.core.cst$kw$labs_DASH_4_DASH_cource$debug_SLASH_line);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wu,cljs.core.cst$kw$labs_DASH_4_DASH_cource$debug_SLASH_line);
labs_4_cource.debug.draw_line_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wu,cljs.core.cst$kw$not], null),(function (canvas,line){
return labs_4_cource.canvas.draw_pixels_BANG_.cljs$core$IFn$_invoke$arity$2(canvas,(labs_4_cource.primitives.line_points.cljs$core$IFn$_invoke$arity$1 ? labs_4_cource.primitives.line_points.cljs$core$IFn$_invoke$arity$1(line) : labs_4_cource.primitives.line_points.call(null,line)));
}));
labs_4_cource.debug.draw_line_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$labs_DASH_4_DASH_cource$debug_SLASH_line,cljs.core.cst$kw$not], null),(function (canvas,line){
return labs_4_cource.canvas.draw_pixels_BANG_.cljs$core$IFn$_invoke$arity$2(canvas,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23318){
var vec__23319 = p__23318;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23319,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23319,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(1)], null);
}),(labs_4_cource.primitives.line_points.cljs$core$IFn$_invoke$arity$1 ? labs_4_cource.primitives.line_points.cljs$core$IFn$_invoke$arity$1(line) : labs_4_cource.primitives.line_points.call(null,line))));
}));
labs_4_cource.debug.draw_line_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$labs_DASH_4_DASH_cource$debug_SLASH_line,cljs.core.cst$kw$debug], null),(function (canvas,line){
return labs_4_cource.debug.add_line_to_debug_BANG_(line);
}));
labs_4_cource.debug.draw_canvas_contents_BANG_ = (function labs_4_cource$debug$draw_canvas_contents_BANG_(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(labs_4_cource.debug.draw_line_BANG_,cljs.core.deref(labs_4_cource.storage.drawer)),cljs.core.deref(labs_4_cource.storage.primitives)));
});
