// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('labs_4_cource.canvas_component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('labs_4_cource.canvas');
goog.require('labs_4_cource.debugger$');
goog.require('labs_4_cource.storage');
goog.require('reagent.core');
goog.require('taoensso.timbre');
labs_4_cource.canvas_component.clean_canvas_BANG_ = (function labs_4_cource$canvas_component$clean_canvas_BANG_(){

try{var result__22740__auto___23407 = "clean-canvas";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.canvas-component","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",19,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__22740__auto___23407){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clean-canvas","=>",result__22740__auto___23407], null);
});})(result__22740__auto___23407))
,null)),null,-1714922573);

}catch (e23406){if((e23406 instanceof Error)){
var e__22704__auto___23408 = e23406;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.canvas-component","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",19,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__22704__auto___23408){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__22704__auto___23408], null);
});})(e__22704__auto___23408))
,null)),null,846191027);

throw e__22704__auto___23408;
} else {
throw e23406;

}
}
labs_4_cource.canvas.clean_BANG_(cljs.core.deref(labs_4_cource.storage.drawer));

return cljs.core.reset_BANG_(labs_4_cource.storage.primitives,null);
});
labs_4_cource.canvas_component.event_pos__GT_vector = (function labs_4_cource$canvas_component$event_pos__GT_vector(pos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos.x,pos.y], null);
});
labs_4_cource.canvas_component.scale__GT_ = (function labs_4_cource$canvas_component$scale__GT_(p__23409,scale){
var vec__23410 = p__23409;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23410,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23410,(1),null);
try{var result__22740__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / scale),(y / scale)], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.canvas-component","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",27,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__22740__auto__,vec__23410,x,y){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),scale], null),"=>",result__22740__auto__], null);
});})(result__22740__auto__,vec__23410,x,y))
,null)),null,942216235);

return result__22740__auto__;
}catch (e23413){if((e23413 instanceof Error)){
var e__22704__auto__ = e23413;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.canvas-component","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",27,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__22704__auto__,vec__23410,x,y){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__22704__auto__], null);
});})(e__22704__auto__,vec__23410,x,y))
,null)),null,-833061516);

throw e__22704__auto__;
} else {
throw e23413;

}
}});
labs_4_cource.canvas_component.on_click_BANG_ = (function labs_4_cource$canvas_component$on_click_BANG_(event){
labs_4_cource.storage.add_pos(labs_4_cource.canvas_component.scale__GT_(labs_4_cource.canvas_component.event_pos__GT_vector(cljs.core.deref(labs_4_cource.storage.events).getMousePos(event)),cljs.core.deref(labs_4_cource.storage.scale)));

return labs_4_cource.debugger$.add_line_from_pos();
});
labs_4_cource.canvas_component.div_with_canvas = (function labs_4_cource$canvas_component$div_with_canvas(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
var canvas1 = reagent.core.dom_node(this$).firstChild;
var canvas2 = (reagent.core.dom_node(this$).children[(1)]);
try{var result__22740__auto___23415 = "init canvas-component";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"labs-4-cource.canvas-component","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",45,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__22740__auto___23415,canvas1,canvas2){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["init canvas-component","=>",result__22740__auto___23415], null);
});})(result__22740__auto___23415,canvas1,canvas2))
,null)),null,1094300535);

}catch (e23414){if((e23414 instanceof Error)){
var e__22704__auto___23416 = e23414;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.canvas-component","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",45,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__22704__auto___23416,canvas1,canvas2){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__22704__auto___23416], null);
});})(e__22704__auto___23416,canvas1,canvas2))
,null)),null,1325437578);

throw e__22704__auto___23416;
} else {
throw e23414;

}
}
cljs.core.reset_BANG_(labs_4_cource.storage.events,labs_4_cource.canvas.canvas_events(canvas1));

cljs.core.reset_BANG_(labs_4_cource.storage.drawer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visible,canvas1,cljs.core.cst$kw$hidden,canvas2], null));

return labs_4_cource.canvas.toggle_smoothing_BANG_(cljs.core.deref(labs_4_cource.storage.drawer),false);
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$draw_DASH_area,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,"visible",cljs.core.cst$kw$width,cljs.core.deref(labs_4_cource.storage.width),cljs.core.cst$kw$onClick,labs_4_cource.canvas_component.on_click_BANG_,cljs.core.cst$kw$height,cljs.core.deref(labs_4_cource.storage.height),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"solid 1px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,"hidden",cljs.core.cst$kw$hidden,true,cljs.core.cst$kw$width,cljs.core.deref(labs_4_cource.storage.width),cljs.core.cst$kw$height,cljs.core.deref(labs_4_cource.storage.height),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"solid 1px"], null)], null)], null)], null);
})], null));
});
