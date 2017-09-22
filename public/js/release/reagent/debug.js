// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26663__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26664__i = 0, G__26664__a = new Array(arguments.length -  0);
while (G__26664__i < G__26664__a.length) {G__26664__a[G__26664__i] = arguments[G__26664__i + 0]; ++G__26664__i;}
  args = new cljs.core.IndexedSeq(G__26664__a,0,null);
} 
return G__26663__delegate.call(this,args);};
G__26663.cljs$lang$maxFixedArity = 0;
G__26663.cljs$lang$applyTo = (function (arglist__26665){
var args = cljs.core.seq(arglist__26665);
return G__26663__delegate(args);
});
G__26663.cljs$core$IFn$_invoke$arity$variadic = G__26663__delegate;
return G__26663;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26666__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26667__i = 0, G__26667__a = new Array(arguments.length -  0);
while (G__26667__i < G__26667__a.length) {G__26667__a[G__26667__i] = arguments[G__26667__i + 0]; ++G__26667__i;}
  args = new cljs.core.IndexedSeq(G__26667__a,0,null);
} 
return G__26666__delegate.call(this,args);};
G__26666.cljs$lang$maxFixedArity = 0;
G__26666.cljs$lang$applyTo = (function (arglist__26668){
var args = cljs.core.seq(arglist__26668);
return G__26666__delegate(args);
});
G__26666.cljs$core$IFn$_invoke$arity$variadic = G__26666__delegate;
return G__26666;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
