// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('labs_4_cource.debug_component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('labs_4_cource.debugger$');
goog.require('labs_4_cource.reagent_helpers');
goog.require('labs_4_cource.storage');
labs_4_cource.debug_component.debug_component = (function labs_4_cource$debug_component$debug_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(labs_4_cource.storage.debug_state),cljs.core.cst$kw$onChange,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(labs_4_cource.storage.change_debug_state,cljs.core.keyword,labs_4_cource.reagent_helpers.get_value)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$debug], null),cljs.core.cst$kw$debug], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$not], null),cljs.core.cst$kw$not], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$disabled,cljs.core.empty_QMARK_(cljs.core.cst$kw$rest_DASH_points.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(labs_4_cource.storage.not_full_line))),cljs.core.cst$kw$onClick,labs_4_cource.debugger$.draw_line_by_point_BANG_], null),cljs.core.cst$kw$step], null)], null);
});
