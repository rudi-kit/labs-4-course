// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('labs_4_cource.storage');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('labs_4_cource.primitives');
goog.require('reagent.core');
goog.require('taoensso.timbre');
if(typeof labs_4_cource.storage.drawer !== 'undefined'){
} else {
labs_4_cource.storage.drawer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof labs_4_cource.storage.width !== 'undefined'){
} else {
labs_4_cource.storage.width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((640));
}
if(typeof labs_4_cource.storage.height !== 'undefined'){
} else {
labs_4_cource.storage.height = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((640));
}
if(typeof labs_4_cource.storage.scale !== 'undefined'){
} else {
labs_4_cource.storage.scale = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((4));
}
if(typeof labs_4_cource.storage.primitives !== 'undefined'){
} else {
labs_4_cource.storage.primitives = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof labs_4_cource.storage.debug_state !== 'undefined'){
} else {
labs_4_cource.storage.debug_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$not);
}
labs_4_cource.storage.change_debug_state = (function labs_4_cource$storage$change_debug_state(state){
return cljs.core.reset_BANG_(labs_4_cource.storage.debug_state,state);
});
if(typeof labs_4_cource.storage.smoothing !== 'undefined'){
} else {
labs_4_cource.storage.smoothing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(typeof labs_4_cource.storage.next_primitive !== 'undefined'){
} else {
labs_4_cource.storage.next_primitive = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
labs_4_cource.storage.add_pos = (function labs_4_cource$storage$add_pos(pos){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(labs_4_cource.storage.next_primitive,(function (old_points){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(old_points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos], null));
}));
});
labs_4_cource.storage.add_primitives = (function labs_4_cource$storage$add_primitives(line){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(labs_4_cource.storage.primitives,(function (old_state){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(old_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){try{var result__26393__auto__ = line;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.storage","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",26,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__26393__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add-primitive","=>",result__26393__auto__], null);
});})(result__26393__auto__))
,null)),null,-1237705714);

return result__26393__auto__;
}catch (e27165){if((e27165 instanceof Error)){
var e__26357__auto__ = e27165;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.storage","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",26,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__26357__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__26357__auto__], null);
});})(e__26357__auto__))
,null)),null,-920371691);

throw e__26357__auto__;
} else {
throw e27165;

}
}})()], null));
}));
});
if(typeof labs_4_cource.storage.events !== 'undefined'){
} else {
labs_4_cource.storage.events = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof labs_4_cource.storage.selected !== 'undefined'){
} else {
labs_4_cource.storage.selected = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$simple);
}
if(typeof labs_4_cource.storage.sun_line_generator !== 'undefined'){
} else {
labs_4_cource.storage.sun_line_generator = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$simple);
}
labs_4_cource.storage.lines_generators = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$simple,labs_4_cource.primitives.__GT_SimpleLine,cljs.core.cst$kw$be,labs_4_cource.primitives.__GT_BrezenhameLine,cljs.core.cst$kw$wu,labs_4_cource.primitives.__GT_SmoothLine], null);
labs_4_cource.storage.line_types = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$simple,cljs.core.cst$kw$be,cljs.core.cst$kw$wu], null);
labs_4_cource.storage.change_selected = (function labs_4_cource$storage$change_selected(value){
try{var result__26393__auto__ = cljs.core.reset_BANG_(labs_4_cource.storage.selected,value);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"labs-4-cource.storage","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",38,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__26393__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-selected","=>",result__26393__auto__], null);
});})(result__26393__auto__))
,null)),null,-1412851494);

return result__26393__auto__;
}catch (e27166){if((e27166 instanceof Error)){
var e__26357__auto__ = e27166;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"labs-4-cource.storage","C:\\Users\\student\\AppData\\Local\\Temp\\form-init8547472774155013688.clj",38,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__26357__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__26357__auto__], null);
});})(e__26357__auto__))
,null)),null,1538055239);

throw e__26357__auto__;
} else {
throw e27166;

}
}});
if(typeof labs_4_cource.storage.not_full_line !== 'undefined'){
} else {
labs_4_cource.storage.not_full_line = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,null,cljs.core.cst$kw$rest_DASH_points,null], null));
}
labs_4_cource.storage.remove_debug_line_BANG_ = (function labs_4_cource$storage$remove_debug_line_BANG_(){
return cljs.core.reset_BANG_(labs_4_cource.storage.not_full_line,null);
});
