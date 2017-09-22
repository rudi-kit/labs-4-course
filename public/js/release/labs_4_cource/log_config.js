// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('labs_4_cource.log_config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('taoensso.timbre');
if(typeof labs_4_cource.log_config.log_level !== 'undefined'){
} else {
labs_4_cource.log_config.log_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug);
}
if(typeof labs_4_cource.log_config.log_config !== 'undefined'){
} else {
labs_4_cource.log_config.log_config = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$level,cljs.core.cst$kw$debug], null));
}
