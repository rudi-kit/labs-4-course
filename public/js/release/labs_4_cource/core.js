// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('labs_4_cource.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('labs_4_cource.canvas_component');
goog.require('labs_4_cource.debugger$');
goog.require('labs_4_cource.debug_component');
goog.require('labs_4_cource.line_examples');
goog.require('labs_4_cource.scale_component');
goog.require('labs_4_cource.storage');
goog.require('labs_4_cource.toogles');
goog.require('reagent.core');
goog.require('taoensso.timbre');
goog.require('labs_4_cource.updaters');
cljs.core.enable_console_print_BANG_();
taoensso.timbre.set_level_BANG_(cljs.core.cst$kw$debug);
labs_4_cource.core.tool_panel = (function labs_4_cource$core$tool_panel(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tool_DASH_panel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [labs_4_cource.toogles.toggles,labs_4_cource.storage.selected,labs_4_cource.storage.line_types,labs_4_cource.storage.change_selected], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,labs_4_cource.canvas_component.clean_canvas_BANG_], null),"clean"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [labs_4_cource.scale_component.scale_component,cljs.core.deref(labs_4_cource.storage.scale),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,labs_4_cource.storage.scale)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [labs_4_cource.line_examples.sun_lines_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [labs_4_cource.debug_component.debug_component], null)], null);
});
labs_4_cource.core.home = (function labs_4_cource$core$home(){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.core","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",29,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["home"], null);
}),null)),null,-744280809);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$draw_DASH_container,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [labs_4_cource.core.tool_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [labs_4_cource.canvas_component.div_with_canvas], null)], null);
});
labs_4_cource.core.init_BANG_ = (function labs_4_cource$core$init_BANG_(){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"labs-4-cource.core","C:\\Users\\student\\AppData\\Local\\Temp\\form-init3666076610504972892.clj",36,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["init"], null);
}),null)),null,1629241747);

reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [labs_4_cource.core.home], null),document.getElementById("app"));

return labs_4_cource.debugger$.draw_canvas_contents_BANG_();
});
goog.exportSymbol('labs_4_cource.core.init_BANG_', labs_4_cource.core.init_BANG_);
