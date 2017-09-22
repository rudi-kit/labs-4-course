// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('labs_4_cource.canvas');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('module$public$libs$events');
goog.require('labs_4_cource.storage');
goog.require('taoensso.timbre');
/**
 * create js object wich tracks mouse position
 */
labs_4_cource.canvas.canvas_events = (function labs_4_cource$canvas$canvas_events(canvas){
var events = (new module$public$libs$events.events(canvas));
events.listen();

return events;
});
/**
 * get 2d context of canvas
 */
labs_4_cource.canvas.get_ctx = (function labs_4_cource$canvas$get_ctx(canvas){
return canvas.getContext("2d");
});
labs_4_cource.canvas.toggle_smoothing = (function labs_4_cource$canvas$toggle_smoothing(ctx,flag){
try{var result__22740__auto___23289 = (ctx["imageSmoothingEnabled"] = flag);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.canvas","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",14,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__22740__auto___23289){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$aset,cljs.core.cst$sym$ctx,"imageSmoothingEnabled",cljs.core.cst$sym$flag),"=>",result__22740__auto___23289], null);
});})(result__22740__auto___23289))
,null)),null,-230936347);

}catch (e23285){if((e23285 instanceof Error)){
var e__22704__auto___23290 = e23285;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.canvas","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",14,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__22704__auto___23290){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__22704__auto___23290], null);
});})(e__22704__auto___23290))
,null)),null,1968919760);

throw e__22704__auto___23290;
} else {
throw e23285;

}
}
try{var result__22740__auto___23291 = (ctx["mozImageSmoothingEnabled"] = flag);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.canvas","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",15,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__22740__auto___23291){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$aset,cljs.core.cst$sym$ctx,"mozImageSmoothingEnabled",cljs.core.cst$sym$flag),"=>",result__22740__auto___23291], null);
});})(result__22740__auto___23291))
,null)),null,2147422841);

}catch (e23286){if((e23286 instanceof Error)){
var e__22704__auto___23292 = e23286;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.canvas","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",15,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__22704__auto___23292){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__22704__auto___23292], null);
});})(e__22704__auto___23292))
,null)),null,-1089029762);

throw e__22704__auto___23292;
} else {
throw e23286;

}
}
try{var result__22740__auto___23293 = (ctx["ebkitImageSmoothingEnabled"] = flag);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.canvas","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",16,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__22740__auto___23293){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$aset,cljs.core.cst$sym$ctx,"ebkitImageSmoothingEnabled",cljs.core.cst$sym$flag),"=>",result__22740__auto___23293], null);
});})(result__22740__auto___23293))
,null)),null,-1616288806);

}catch (e23287){if((e23287 instanceof Error)){
var e__22704__auto___23294 = e23287;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.canvas","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",16,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__22704__auto___23294){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__22704__auto___23294], null);
});})(e__22704__auto___23294))
,null)),null,167829648);

throw e__22704__auto___23294;
} else {
throw e23287;

}
}
try{var result__22740__auto__ = (ctx["sImageSmoothingEnabled"] = flag);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.canvas","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",17,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__22740__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$aset,cljs.core.cst$sym$ctx,"sImageSmoothingEnabled",cljs.core.cst$sym$flag),"=>",result__22740__auto__], null);
});})(result__22740__auto__))
,null)),null,930426787);

return result__22740__auto__;
}catch (e23288){if((e23288 instanceof Error)){
var e__22704__auto__ = e23288;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.canvas","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",17,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__22704__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__22704__auto__], null);
});})(e__22704__auto__))
,null)),null,1828787335);

throw e__22704__auto__;
} else {
throw e23288;

}
}});
/**
 * set smoothing value of canvas context.
 *   use all known browser prefixes
 */
labs_4_cource.canvas.toggle_smoothing_BANG_ = (function labs_4_cource$canvas$toggle_smoothing_BANG_(p__23295,flag){
var map__23296 = p__23295;
var map__23296__$1 = ((((!((map__23296 == null)))?((((map__23296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23296):map__23296);
var visible = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23296__$1,cljs.core.cst$kw$visible);
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23296__$1,cljs.core.cst$kw$hidden);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.canvas","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",23,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (map__23296,map__23296__$1,visible,hidden){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toggle smothing ",flag], null);
});})(map__23296,map__23296__$1,visible,hidden))
,null)),null,1554327666);

labs_4_cource.canvas.toggle_smoothing(labs_4_cource.canvas.get_ctx(visible),flag);

return labs_4_cource.canvas.toggle_smoothing(labs_4_cource.canvas.get_ctx(hidden),flag);
});
/**
 * collect css rgba string
 */
labs_4_cource.canvas.rgba = (function labs_4_cource$canvas$rgba(p__23298){
var vec__23299 = p__23298;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23299,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23299,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23299,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23299,(3),null);
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),")"].join('');
});
/**
 * draw pixel on canvas
 */
labs_4_cource.canvas.draw_pixel_BANG_ = (function labs_4_cource$canvas$draw_pixel_BANG_(canvas,p__23302){
var vec__23303 = p__23302;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23303,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23303,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23303,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.canvas","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",33,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__23303,x,y,e){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,e], null)], null);
});})(vec__23303,x,y,e))
,null)),null,1148346361);

var ctx = labs_4_cource.canvas.get_ctx(canvas);
ctx.fillStyle = labs_4_cource.canvas.rgba(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),e], null));

return ctx.fillRect(x,y,(1),(1));
});
labs_4_cource.canvas.swap_hidden_to_visible_BANG_ = (function labs_4_cource$canvas$swap_hidden_to_visible_BANG_(p__23306){
var map__23307 = p__23306;
var map__23307__$1 = ((((!((map__23307 == null)))?((((map__23307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23307):map__23307);
var visible = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,cljs.core.cst$kw$visible);
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,cljs.core.cst$kw$hidden);
labs_4_cource.canvas.get_ctx(visible).clearRect((0),(0),cljs.core.deref(labs_4_cource.storage.width),cljs.core.deref(labs_4_cource.storage.height));

return labs_4_cource.canvas.get_ctx(visible).drawImage(hidden,(0),(0),(cljs.core.deref(labs_4_cource.storage.width) / cljs.core.deref(labs_4_cource.storage.scale)),(cljs.core.deref(labs_4_cource.storage.height) / cljs.core.deref(labs_4_cource.storage.scale)),(0),(0),cljs.core.deref(labs_4_cource.storage.width),cljs.core.deref(labs_4_cource.storage.height));
});
/**
 * get collection of pixels and draw it
 */
labs_4_cource.canvas.draw_pixels_BANG_ = (function labs_4_cource$canvas$draw_pixels_BANG_(var_args){
var G__23310 = arguments.length;
switch (G__23310) {
case 3:
return labs_4_cource.canvas.draw_pixels_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return labs_4_cource.canvas.draw_pixels_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

labs_4_cource.canvas.draw_pixels_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__23311,points,colors){
var map__23312 = p__23311;
var map__23312__$1 = ((((!((map__23312 == null)))?((((map__23312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23312):map__23312);
var visible = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23312__$1,cljs.core.cst$kw$visible);
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23312__$1,cljs.core.cst$kw$hidden);
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(labs_4_cource.canvas.draw_pixel_BANG_,hidden),points,colors));

return labs_4_cource.canvas.swap_hidden_to_visible_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visible,visible,cljs.core.cst$kw$hidden,hidden], null));
});

labs_4_cource.canvas.draw_pixels_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (canvas,points){
return labs_4_cource.canvas.draw_pixels_BANG_.cljs$core$IFn$_invoke$arity$3(canvas,points,cljs.core.iterate(cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)));
});

labs_4_cource.canvas.draw_pixels_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * clean pair of canvases
 */
labs_4_cource.canvas.clean_BANG_ = (function labs_4_cource$canvas$clean_BANG_(p__23315){
var map__23316 = p__23315;
var map__23316__$1 = ((((!((map__23316 == null)))?((((map__23316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23316):map__23316);
var visible = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23316__$1,cljs.core.cst$kw$visible);
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23316__$1,cljs.core.cst$kw$hidden);
labs_4_cource.canvas.get_ctx(visible).clearRect((0),(0),cljs.core.deref(labs_4_cource.storage.width),cljs.core.deref(labs_4_cource.storage.height));

return labs_4_cource.canvas.get_ctx(hidden).clearRect((0),(0),cljs.core.deref(labs_4_cource.storage.width),cljs.core.deref(labs_4_cource.storage.height));
});
labs_4_cource.canvas.set_scale_BANG_ = (function labs_4_cource$canvas$set_scale_BANG_(canvas,scale){
return labs_4_cource.canvas.get_ctx(cljs.core.cst$kw$visible.cljs$core$IFn$_invoke$arity$1(canvas)).scale(scale,scale);
});
