// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('labs_4_cource.primitives');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('taoensso.timbre');
labs_4_cource.primitives.__GT_SimpleLine = (function labs_4_cource$primitives$__GT_SimpleLine(p1,p2){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$simple,cljs.core.cst$kw$p1,p1,cljs.core.cst$kw$p2,p2], null);
});
labs_4_cource.primitives.__GT_BrezenhameLine = (function labs_4_cource$primitives$__GT_BrezenhameLine(p1,p2){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$be,cljs.core.cst$kw$p1,p1,cljs.core.cst$kw$p2,p2], null);
});
labs_4_cource.primitives.__GT_SmoothLine = (function labs_4_cource$primitives$__GT_SmoothLine(p1,p2){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$wu,cljs.core.cst$kw$p1,p1,cljs.core.cst$kw$p2,p2], null);
});
labs_4_cource.primitives.floor = (function labs_4_cource$primitives$floor(n){
return ((n + .5) | (0));
});
labs_4_cource.primitives.calc_steps = (function labs_4_cource$primitives$calc_steps(coordinate){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(Math.sign,coordinate);
});
if(typeof labs_4_cource.primitives.line_points !== 'undefined'){
} else {
labs_4_cource.primitives.line_points = (function (){var method_table__8600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8603__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8604__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("labs-4-cource.primitives","line-points"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__8604__auto__,method_table__8600__auto__,prefer_table__8601__auto__,method_cache__8602__auto__,cached_hierarchy__8603__auto__));
})();
}
labs_4_cource.primitives.line_points.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$simple,(function (p__27067){
var map__27068 = p__27067;
var map__27068__$1 = ((((!((map__27068 == null)))?((((map__27068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27068):map__27068);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27068__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27068__$1,cljs.core.cst$kw$p2);
var vec__27070 = p1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27070,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27070,(1),null);
var vec__27073 = p2;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27073,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27073,(1),null);
var length = (function (){var x__7995__auto__ = (function (){var G__27076 = (x2 - x1);
return Math.abs(G__27076);
})();
var y__7996__auto__ = (function (){var G__27077 = (y2 - y1);
return Math.abs(G__27077);
})();
return ((x__7995__auto__ > y__7996__auto__) ? x__7995__auto__ : y__7996__auto__);
})();
var dx = ((x2 - x1) / length);
var dy = ((y2 - y1) / length);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__27070,x1,y1,vec__27073,x2,y2,length,dx,dy,map__27068,map__27068__$1,p1,p2){
return (function (p__27078){
var vec__27079 = p__27078;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27079,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27079,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [labs_4_cource.primitives.floor(x),labs_4_cource.primitives.floor(y)], null);
});})(vec__27070,x1,y1,vec__27073,x2,y2,length,dx,dy,map__27068,map__27068__$1,p1,p2))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2(((1) + length),cljs.core.iterate(((function (vec__27070,x1,y1,vec__27073,x2,y2,length,dx,dy,map__27068,map__27068__$1,p1,p2){
return (function (p__27082){
var vec__27083 = p__27082;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27083,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27083,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null);
});})(vec__27070,x1,y1,vec__27073,x2,y2,length,dx,dy,map__27068,map__27068__$1,p1,p2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null))));
}));
labs_4_cource.primitives.line_points.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$be,(function (p__27086){
var map__27087 = p__27086;
var map__27087__$1 = ((((!((map__27087 == null)))?((((map__27087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27087):map__27087);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27087__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27087__$1,cljs.core.cst$kw$p2);
var vec__27089 = p1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27089,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27089,(1),null);
var vec__27092 = p2;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27092,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27092,(1),null);
var dx = (x2 - x1);
var dy = (y2 - y1);
var vec__27095 = labs_4_cource.primitives.calc_steps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null));
var x_step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27095,(0),null);
var y_step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27095,(1),null);
var dx__$1 = Math.abs(dx);
var dy__$1 = Math.abs(dy);
var max = Math.max(dx__$1,dy__$1);
var min = Math.min(dx__$1,dy__$1);
var e = (((2) * min) - max);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(((1) + max),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__27089,x1,y1,vec__27092,x2,y2,dx,dy,vec__27095,x_step,y_step,dx__$1,dy__$1,max,min,e,map__27087,map__27087__$1,p1,p2){
return (function (p__27098){
var vec__27099 = p__27098;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27099,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27099,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [labs_4_cource.primitives.floor(x),labs_4_cource.primitives.floor(y)], null);
});})(vec__27089,x1,y1,vec__27092,x2,y2,dx,dy,vec__27095,x_step,y_step,dx__$1,dy__$1,max,min,e,map__27087,map__27087__$1,p1,p2))
,cljs.core.iterate((cljs.core.truth_((function (){try{var result__26393__auto__ = (dy__$1 <= dx__$1);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.primitives","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",47,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__26393__auto__,vec__27089,x1,y1,vec__27092,x2,y2,dx,dy,vec__27095,x_step,y_step,dx__$1,dy__$1,max,min,e,map__27087,map__27087__$1,p1,p2){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-axis longer","=>",result__26393__auto__], null);
});})(result__26393__auto__,vec__27089,x1,y1,vec__27092,x2,y2,dx,dy,vec__27095,x_step,y_step,dx__$1,dy__$1,max,min,e,map__27087,map__27087__$1,p1,p2))
,null)),null,128206736);

return result__26393__auto__;
}catch (e27102){if((e27102 instanceof Error)){
var e__26357__auto__ = e27102;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.primitives","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",47,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__26357__auto__,vec__27089,x1,y1,vec__27092,x2,y2,dx,dy,vec__27095,x_step,y_step,dx__$1,dy__$1,max,min,e,map__27087,map__27087__$1,p1,p2){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__26357__auto__], null);
});})(e__26357__auto__,vec__27089,x1,y1,vec__27092,x2,y2,dx,dy,vec__27095,x_step,y_step,dx__$1,dy__$1,max,min,e,map__27087,map__27087__$1,p1,p2))
,null)),null,626358504);

throw e__26357__auto__;
} else {
throw e27102;

}
}})())?((function (vec__27089,x1,y1,vec__27092,x2,y2,dx,dy,vec__27095,x_step,y_step,dx__$1,dy__$1,max,min,e,map__27087,map__27087__$1,p1,p2){
return (function (p__27103){
var vec__27104 = p__27103;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27104,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27104,(1),null);
var e__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27104,(2),null);
if((e__$1 <= (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_step + x),y,(e__$1 + ((2) * min))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_step + x),(y_step + y),((e__$1 - ((2) * max)) + ((2) * min))], null);
}
});})(vec__27089,x1,y1,vec__27092,x2,y2,dx,dy,vec__27095,x_step,y_step,dx__$1,dy__$1,max,min,e,map__27087,map__27087__$1,p1,p2))
:((function (vec__27089,x1,y1,vec__27092,x2,y2,dx,dy,vec__27095,x_step,y_step,dx__$1,dy__$1,max,min,e,map__27087,map__27087__$1,p1,p2){
return (function (p__27107){
var vec__27108 = p__27107;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27108,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27108,(1),null);
var e__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27108,(2),null);
if((e__$1 <= (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + y_step),(e__$1 + ((2) * min))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_step + x),(y_step + y),((e__$1 - ((2) * max)) + ((2) * min))], null);
}
});})(vec__27089,x1,y1,vec__27092,x2,y2,dx,dy,vec__27095,x_step,y_step,dx__$1,dy__$1,max,min,e,map__27087,map__27087__$1,p1,p2))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1,e], null))));
}));
labs_4_cource.primitives.line_points.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$wu,(function (p__27111){
var map__27112 = p__27111;
var map__27112__$1 = ((((!((map__27112 == null)))?((((map__27112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27112):map__27112);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27112__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27112__$1,cljs.core.cst$kw$p2);
var vec__27114 = p1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27114,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27114,(1),null);
var vec__27117 = p2;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27117,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27117,(1),null);
var dx = (function (){var G__27120 = (x2 - x1);
return Math.abs(G__27120);
})();
var dy = (function (){var G__27121 = (y2 - y1);
return Math.abs(G__27121);
})();
var x_step = (((x1 < x2))?(1):(-1));
var y_step = (((y1 < y2))?(1):(-1));
var max = Math.max(dx,dy);
var min = Math.min(dx,dy);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,x2)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y1,y2)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dx,dy))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (p__27122){
var vec__27123 = p__27122;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27123,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27123,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(1)], null);
});})(vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
,(function (){var G__27126 = labs_4_cource.primitives.__GT_BrezenhameLine(p1,p2);
return (labs_4_cource.primitives.line_points.cljs$core$IFn$_invoke$arity$1 ? labs_4_cource.primitives.line_points.cljs$core$IFn$_invoke$arity$1(G__27126) : labs_4_cource.primitives.line_points.call(null,G__27126));
})());
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (p__27127){
var vec__27128 = p__27127;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27128,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27128,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27128,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [labs_4_cource.primitives.floor(x),labs_4_cource.primitives.floor(y),e], null);
});})(vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){try{var result__26393__auto__ = (dx >= dy);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.primitives","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",110,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__26393__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["smoot across y-axis","=>",result__26393__auto__], null);
});})(result__26393__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
,null)),null,492558147);

return result__26393__auto__;
}catch (e27131){if((e27131 instanceof Error)){
var e__26357__auto__ = e27131;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.primitives","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",110,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__26357__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__26357__auto__], null);
});})(e__26357__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
,null)),null,-485096493);

throw e__26357__auto__;
} else {
throw e27131;

}
}})())?(cljs.core.truth_((function (){try{var result__26393__auto__ = (y1 <= y2);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.primitives","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",112,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__26393__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["passes under center","=>",result__26393__auto__], null);
});})(result__26393__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
,null)),null,-1089437554);

return result__26393__auto__;
}catch (e27132){if((e27132 instanceof Error)){
var e__26357__auto__ = e27132;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.primitives","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",112,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__26357__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__26357__auto__], null);
});})(e__26357__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
,null)),null,-1631094362);

throw e__26357__auto__;
} else {
throw e27132;

}
}})())?((function (vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (p__27133){
var vec__27134 = p__27133;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27134,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27134,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27134,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,e], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1)),((1) - e)], null)], null);
});})(vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
:((function (vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (p__27137){
var vec__27138 = p__27137;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27138,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27138,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27138,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,e], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),((1) - e)], null)], null);
});})(vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
):(cljs.core.truth_((function (){try{var result__26393__auto__ = (x1 <= x2);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.primitives","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",116,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__26393__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["passes to the left of center","=>",result__26393__auto__], null);
});})(result__26393__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
,null)),null,-1723756081);

return result__26393__auto__;
}catch (e27141){if((e27141 instanceof Error)){
var e__26357__auto__ = e27141;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.primitives","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",116,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__26357__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__26357__auto__], null);
});})(e__26357__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
,null)),null,1238806776);

throw e__26357__auto__;
} else {
throw e27141;

}
}})())?((function (vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (p__27142){
var vec__27143 = p__27142;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27143,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27143,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27143,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,e], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y,((1) - e)], null)], null);
});})(vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
:((function (vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (p__27146){
var vec__27147 = p__27146;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27147,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27147,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27147,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,e], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,((1) - e)], null)], null);
});})(vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(((1) + max),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (p__27150){
var vec__27151 = p__27150;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27151,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27151,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27151,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,((e + (1)) + (- (min / max)))], null);
});})(vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
,cljs.core.iterate((cljs.core.truth_((function (){try{var result__26393__auto__ = (dy <= dx);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.primitives","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",89,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__26393__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-axis longer","=>",result__26393__auto__], null);
});})(result__26393__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
,null)),null,-518431968);

return result__26393__auto__;
}catch (e27154){if((e27154 instanceof Error)){
var e__26357__auto__ = e27154;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.primitives","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",89,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__26357__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__26357__auto__], null);
});})(e__26357__auto__,vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
,null)),null,2042550865);

throw e__26357__auto__;
} else {
throw e27154;

}
}})())?((function (vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (p__27155){
var vec__27156 = p__27155;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27156,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27156,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27156,(2),null);
if((e <= (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_step + x),y,(e + (min / max))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_step + x),(y_step + y),((e - (1)) + (min / max))], null);
}
});})(vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
:((function (vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2){
return (function (p__27159){
var vec__27160 = p__27159;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27160,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27160,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27160,(2),null);
if((e <= (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + y_step),(e + (min / max))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_step + x),(y_step + y),((e - (1)) + (min / max))], null);
}
});})(vec__27114,x1,y1,vec__27117,x2,y2,dx,dy,x_step,y_step,max,min,map__27112,map__27112__$1,p1,p2))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1,((min / max) - 0.5)], null)))))], 0)));
}
}));
