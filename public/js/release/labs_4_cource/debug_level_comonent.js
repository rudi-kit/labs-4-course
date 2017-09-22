// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('labs_4_cource.debug_level_comonent');
goog.require('cljs.core');
goog.require('cljs.core.constants');
labs_4_cource.debug_level_comonent.log_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null);
labs_4_cource.debug_level_comonent.debug_level_component = (function labs_4_cource$debug_level_comonent$debug_level_component(current,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,current,cljs.core.cst$kw$onChange,(function (event){
var G__23608 = event.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__23608) : on_change.call(null,G__23608));
})], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (level){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,level], null),level], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,level], null));
}),labs_4_cource.debug_level_comonent.log_levels))], null);
});
