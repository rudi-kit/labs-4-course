// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.test');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIoPool');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('taoensso.truss');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(91),(0)], null);
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__24792 = arguments.length;
switch (G__24792) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,args,null);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__24793 = (((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24793,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24793,(1),null);
var vec__24796 = (((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24796,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24796,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$doc,_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta(sym))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__24801 = arguments.length;
switch (G__24801) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$default,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var readers__$1 = (cljs.core.truth_((function (){var G__24802 = readers;
var G__24803 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__24802,G__24803) : taoensso.encore.kw_identical_QMARK_.call(null,G__24802,G__24803));
})())?(function (){var G__24804 = cljs.core.symbol;
var G__24805 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__24804,G__24805) : taoensso.encore.map_keys.call(null,G__24804,G__24805));
})():readers);
var default$__$1 = (cljs.core.truth_((function (){var G__24806 = default$;
var G__24807 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__24806,G__24807) : taoensso.encore.kw_identical_QMARK_.call(null,G__24806,G__24807));
})())?cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$readers,readers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default,default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,s,cljs.core.cst$kw$type,cljs.core.type(s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var G__24810 = arguments.length;
switch (G__24810) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_24811 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_24812 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_24812;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_24811;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__23250__auto__ = (function (){var or__7645__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__23250__auto__)){
var data_map = b2__23250__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$err_DASH_type,cljs.core.type(err),cljs.core.cst$kw$err_DASH_msg,err.message,cljs.core.cst$kw$err_DASH_cause,err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_(x)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__7633__auto__ = taoensso.encore.ident_QMARK_(x);
if(and__7633__auto__){
var and__7633__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__7633__auto____$1)){
return true;
} else {
return and__7633__auto____$1;
}
} else {
return and__7633__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__7633__auto__ = (x instanceof cljs.core.Symbol);
if(and__7633__auto__){
var and__7633__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__7633__auto____$1)){
return true;
} else {
return and__7633__auto____$1;
}
} else {
return and__7633__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__7633__auto__ = (x instanceof cljs.core.Keyword);
if(and__7633__auto__){
var and__7633__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__7633__auto____$1)){
return true;
} else {
return and__7633__auto____$1;
}
} else {
return and__7633__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_(x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_(x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__7633__auto__ = typeof x === 'number';
if(and__7633__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__7633__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var b2__23250__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__23250__auto__)){
var ns = b2__23250__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__23250__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__23250__auto__)){
var n = b2__23250__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__23250__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__23250__auto__)){
var n = b2__23250__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__23250__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__23250__auto__)){
var n = b2__23250__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__23250__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__23250__auto__)){
var n = b2__23250__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__23250__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__23250__auto__)){
var n = b2__23250__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var b2__23250__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__23250__auto__)){
var f = b2__23250__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0"))){
return false;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1"))){
return true;
} else {
return null;
}
}
}
}
});

taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find(/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim(_QMARK_s));
} else {
return null;
}
});

taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var b2__23250__auto__ = taoensso.encore.as__QMARK_email(_QMARK_s);
if(cljs.core.truth_(b2__23250__auto__)){
var email = b2__23250__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
});

taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e24818){if((e24818 instanceof Error)){
var _ = e24818;
return false;
} else {
throw e24818;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__24820 = arguments.length;
switch (G__24820) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`is!` ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)].join(''))," failure against arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$fail_DASH__QMARK_data,fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`as-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(as_name)),"` failed against: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))),"`"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nzero,x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nblank,x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nempty_DASH_str,x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$kw,x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$name,x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$qname,x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_email(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$email,x);
}
});

taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_nemail(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nemail,x);
}
});

taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$udt,x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$int,x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_int,x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_int,x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$float,x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_float,x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_float,x);
}
});

taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__7645__auto__ = taoensso.encore.as__QMARK_pval(x);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pval,x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw(cljs.core.cst$kw$bool,x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__24823 = arguments.length;
switch (G__24823) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq(ks)){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,acc,taoensso.encore.explode_keyword(in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__24827){
var vec__24828 = p__24827;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24828,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
var inc_24834 = (function (n){
return (n + (1));
});
/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 */
taoensso.encore.reduce_indexed = ((function (inc_24834){
return (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,inc_24834){
return (function (acc,in$){
var G__24831 = acc;
var G__24832 = cljs.core._vreset_BANG_(i,inc_24834(cljs.core._deref(i)));
var G__24833 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__24831,G__24832,G__24833) : rf.call(null,G__24831,G__24832,G__24833));
});})(i,inc_24834))
,init,coll);
});})(inc_24834))
;
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__24835 = acc;
var G__24836 = k;
var G__24837 = goog.object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24835,G__24836,G__24837) : f.call(null,G__24835,G__24836,G__24837));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24839_SHARP_,p2__24838_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__24838_SHARP_) : proc.call(null,p2__24838_SHARP_));
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__24842_SHARP_,p2__24840_SHARP_,p3__24841_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__24840_SHARP_,p3__24841_SHARP_) : proc.call(null,p2__24840_SHARP_,p3__24841_SHARP_));
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs((function (p1__24845_SHARP_,p2__24843_SHARP_,p3__24844_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__24843_SHARP_,p3__24844_SHARP_) : proc.call(null,p2__24843_SHARP_,p3__24844_SHARP_));
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj((function (p1__24848_SHARP_,p2__24846_SHARP_,p3__24847_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__24846_SHARP_,p3__24847_SHARP_) : proc.call(null,p2__24846_SHARP_,p3__24847_SHARP_));
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var b2__23250__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__23250__auto__)){
var p = b2__23250__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
var b2__23250__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__23250__auto__)){
var p = b2__23250__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
var inc_24850 = (function (n){
return (n + (1));
});
/**
 * Returns a new stateful index fn that returns: 0, 1, 2, ...
 */
taoensso.encore.idx_fn = ((function (inc_24850){
return (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.volatile_BANG_((-1));
return ((function (idx_,inc_24850){
return (function (){
return cljs.core._vreset_BANG_(idx_,inc_24850(cljs.core._deref(idx_)));
});
;})(idx_,inc_24850))
});})(inc_24850))
;
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__24852 = arguments.length;
switch (G__24852) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((function (){var G__24853 = (x - y);
return Math.abs(G__24853);
})() < 0.001);
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return ((function (){var G__24854 = (x - y);
return Math.abs(G__24854);
})() < signf);
});

taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var G__24857 = arguments.length;
switch (G__24857) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$round,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__24858 = type;
var G__24858__$1 = (((G__24858 instanceof cljs.core.Keyword))?G__24858.fqn:null);
switch (G__24858__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$given,type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
var G__24861 = n;
return Math.round(G__24861);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__24862 = (n * 10.0);
return Math.round(G__24862);
})() / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return ((function (){var G__24863 = (n * 100.0);
return Math.round(G__24863);
})() / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__24865 = arguments.length;
switch (G__24865) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__24866){
var map__24867 = p__24866;
var map__24867__$1 = ((((!((map__24867 == null)))?((((map__24867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24867):map__24867);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24867__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24867__$1,cljs.core.cst$kw$max);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24867__$1,cljs.core.cst$kw$factor,(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,(function (){var G__24870 = cljs.core.meta(x);
var G__24871 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__24870,G__24871) : taoensso.encore.merge.call(null,G__24870,G__24871));
})());
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__24877 = arguments.length;
switch (G__24877) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8833__auto__ = [];
var len__8814__auto___24879 = arguments.length;
var i__8815__auto___24880 = (0);
while(true){
if((i__8815__auto___24880 < len__8814__auto___24879)){
args_arr__8833__auto__.push((arguments[i__8815__auto___24880]));

var G__24881 = (i__8815__auto___24880 + (1));
i__8815__auto___24880 = G__24881;
continue;
} else {
}
break;
}

var argseq__8834__auto__ = (new cljs.core.IndexedSeq(args_arr__8833__auto__.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8834__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__7633__auto__ = taoensso.encore.some_QMARK_(x);
if(and__7633__auto__){
var and__7633__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__7633__auto____$1){
return taoensso.encore.revery_QMARK_(((function (and__7633__auto____$1,and__7633__auto__){
return (function (p1__24872_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__24872_SHARP_,x);
});})(and__7633__auto____$1,and__7633__auto__))
,more);
} else {
return and__7633__auto____$1;
}
} else {
return and__7633__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq24874){
var G__24875 = cljs.core.first(seq24874);
var seq24874__$1 = cljs.core.next(seq24874);
var G__24876 = cljs.core.first(seq24874__$1);
var seq24874__$2 = cljs.core.next(seq24874__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__24875,G__24876,seq24874__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__24887 = arguments.length;
switch (G__24887) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__8833__auto__ = [];
var len__8814__auto___24889 = arguments.length;
var i__8815__auto___24890 = (0);
while(true){
if((i__8815__auto___24890 < len__8814__auto___24889)){
args_arr__8833__auto__.push((arguments[i__8815__auto___24890]));

var G__24891 = (i__8815__auto___24890 + (1));
i__8815__auto___24890 = G__24891;
continue;
} else {
}
break;
}

var argseq__8834__auto__ = (new cljs.core.IndexedSeq(args_arr__8833__auto__.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8834__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst(taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq24883){
var G__24884 = cljs.core.first(seq24883);
var seq24883__$1 = cljs.core.next(seq24883);
var G__24885 = cljs.core.first(seq24883__$1);
var seq24883__$2 = cljs.core.next(seq24883__$1);
var G__24886 = cljs.core.first(seq24883__$2);
var seq24883__$3 = cljs.core.next(seq24883__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__24884,G__24885,G__24886,seq24883__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__24892 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24892,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24892,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,(function (){var b2__23250__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__23250__auto__)){
var s = b2__23250__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),cljs.core.cst$kw$qualifier,(function (){var b2__23250__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__23250__auto__)){
var s = b2__23250__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__24896 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24896,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24896,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24896,(2),null);
var vec__24899 = ((cljs.core.vector_QMARK_(min_version))?min_version:cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version(min_version)));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24899,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24899,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24899,(2),null);
var vec__24902 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__24896,xc,yc,zc,vec__24899,xm,ym,zm){
return (function (p1__24895_SHARP_){
var or__7645__auto__ = p1__24895_SHARP_;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return (0);
}
});})(vec__24896,xc,yc,zc,vec__24899,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24902,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24902,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24902,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),cljs.core.cst$kw$your_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__24906 = arguments.length;
switch (G__24906) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__8821__auto__ = [];
var len__8814__auto___24909 = arguments.length;
var i__8815__auto___24910 = (0);
while(true){
if((i__8815__auto___24910 < len__8814__auto___24909)){
args__8821__auto__.push((arguments[i__8815__auto___24910]));

var G__24911 = (i__8815__auto___24910 + (1));
i__8815__auto___24910 = G__24911;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq24908){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24908));
});

taoensso.encore.vec_STAR_ = cljs.core.vec;

taoensso.encore.set_STAR_ = cljs.core.set;
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__24913 = arguments.length;
switch (G__24913) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,k,null);
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,k,not_found);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = 3;

var sentinel_24922 = {};
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = ((function (sentinel_24922){
return (function taoensso$encore$oget_in(var_args){
var G__24918 = arguments.length;
switch (G__24918) {
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(sentinel_24922))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_24922){
return (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
});})(sentinel_24922))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_24922){
return (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var o__$2 = (function (){var G__24919 = o__$1;
var G__24920 = cljs.core.first(ks__$1);
var G__24921 = sentinel_24922;
return goog.object.get(G__24919,G__24920,G__24921);
})();
if((o__$2 === sentinel_24922)){
return not_found;
} else {
var G__24924 = o__$2;
var G__24925 = cljs.core.next(ks__$1);
o__$1 = G__24924;
ks__$1 = G__24925;
continue;
}
} else {
return o__$1;
}
break;
}
});})(sentinel_24922))
;

taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3;

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__24930 = arguments.length;
switch (G__24930) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8833__auto__ = [];
var len__8814__auto___24937 = arguments.length;
var i__8815__auto___24938 = (0);
while(true){
if((i__8815__auto___24938 < len__8814__auto___24937)){
args_arr__8833__auto__.push((arguments[i__8815__auto___24938]));

var G__24939 = (i__8815__auto___24938 + (1));
i__8815__auto___24938 = G__24939;
continue;
} else {
}
break;
}

var argseq__8834__auto__ = (new cljs.core.IndexedSeq(args_arr__8833__auto__.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8834__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq24927){
var G__24928 = cljs.core.first(seq24927);
var seq24927__$1 = cljs.core.next(seq24927);
var G__24929 = cljs.core.first(seq24927__$1);
var seq24927__$2 = cljs.core.next(seq24927__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__24928,G__24929,seq24927__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__24935 = arguments.length;
switch (G__24935) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8833__auto__ = [];
var len__8814__auto___24941 = arguments.length;
var i__8815__auto___24942 = (0);
while(true){
if((i__8815__auto___24942 < len__8814__auto___24941)){
args_arr__8833__auto__.push((arguments[i__8815__auto___24942]));

var G__24943 = (i__8815__auto___24942 + (1));
i__8815__auto___24942 = G__24943;
continue;
} else {
}
break;
}

var argseq__8834__auto__ = (new cljs.core.IndexedSeq(args_arr__8833__auto__.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8834__auto__);

}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_when,taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq24932){
var G__24933 = cljs.core.first(seq24932);
var seq24932__$1 = cljs.core.next(seq24932);
var G__24934 = cljs.core.first(seq24932__$1);
var seq24932__$2 = cljs.core.next(seq24932__$1);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__24933,G__24934,seq24932__$2);
});

taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__24949 = arguments.length;
switch (G__24949) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8833__auto__ = [];
var len__8814__auto___24963 = arguments.length;
var i__8815__auto___24964 = (0);
while(true){
if((i__8815__auto___24964 < len__8814__auto___24963)){
args_arr__8833__auto__.push((arguments[i__8815__auto___24964]));

var G__24965 = (i__8815__auto___24964 + (1));
i__8815__auto___24964 = G__24965;
continue;
} else {
}
break;
}

var argseq__8834__auto__ = (new cljs.core.IndexedSeq(args_arr__8833__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8834__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq24945){
var G__24946 = cljs.core.first(seq24945);
var seq24945__$1 = cljs.core.next(seq24945);
var G__24947 = cljs.core.first(seq24945__$1);
var seq24945__$2 = cljs.core.next(seq24945__$1);
var G__24948 = cljs.core.first(seq24945__$2);
var seq24945__$3 = cljs.core.next(seq24945__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__24946,G__24947,G__24948,seq24945__$3);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__24955 = arguments.length;
switch (G__24955) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8833__auto__ = [];
var len__8814__auto___24967 = arguments.length;
var i__8815__auto___24968 = (0);
while(true){
if((i__8815__auto___24968 < len__8814__auto___24967)){
args_arr__8833__auto__.push((arguments[i__8815__auto___24968]));

var G__24969 = (i__8815__auto___24968 + (1));
i__8815__auto___24968 = G__24969;
continue;
} else {
}
break;
}

var argseq__8834__auto__ = (new cljs.core.IndexedSeq(args_arr__8833__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8834__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq24951){
var G__24952 = cljs.core.first(seq24951);
var seq24951__$1 = cljs.core.next(seq24951);
var G__24953 = cljs.core.first(seq24951__$1);
var seq24951__$2 = cljs.core.next(seq24951__$1);
var G__24954 = cljs.core.first(seq24951__$2);
var seq24951__$3 = cljs.core.next(seq24951__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__24952,G__24953,G__24954,seq24951__$3);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__24961 = arguments.length;
switch (G__24961) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8833__auto__ = [];
var len__8814__auto___24971 = arguments.length;
var i__8815__auto___24972 = (0);
while(true){
if((i__8815__auto___24972 < len__8814__auto___24971)){
args_arr__8833__auto__.push((arguments[i__8815__auto___24972]));

var G__24973 = (i__8815__auto___24972 + (1));
i__8815__auto___24972 = G__24973;
continue;
} else {
}
break;
}

var argseq__8834__auto__ = (new cljs.core.IndexedSeq(args_arr__8833__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8834__auto__);

}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq24957){
var G__24958 = cljs.core.first(seq24957);
var seq24957__$1 = cljs.core.next(seq24957);
var G__24959 = cljs.core.first(seq24957__$1);
var seq24957__$2 = cljs.core.next(seq24957__$1);
var G__24960 = cljs.core.first(seq24957__$2);
var seq24957__$3 = cljs.core.next(seq24957__$2);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(G__24958,G__24959,G__24960,seq24957__$3);
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.contains_QMARK_(m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3);

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__24975 = arguments.length;
switch (G__24975) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count(v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,vlen);
}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$(cljs.core.count(v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,end__$1);
}
});

taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__24978 = arguments.length;
switch (G__24978) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count(v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,vlen);
}
}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$(cljs.core.count(v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end__$1);
}
}
}
});

taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3;

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__24980 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24980,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__24983 = xs__$1;
var seq__24984 = cljs.core.seq(vec__24983);
var first__24985 = cljs.core.first(seq__24984);
var seq__24984__$1 = cljs.core.next(seq__24984);
var x1 = first__24985;
var xn = seq__24984__$1;
if(xn){
var G__24986 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__24987 = xn;
butlast = G__24986;
xs__$1 = G__24987;
continue;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(butlast,x1) : f.call(null,butlast,x1));
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3(coll,(0),n);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__8821__auto__ = [];
var len__8814__auto___24990 = arguments.length;
var i__8815__auto___24991 = (0);
while(true){
if((i__8815__auto___24991 < len__8814__auto___24990)){
args__8821__auto__.push((arguments[i__8815__auto___24991]));

var G__24992 = (i__8815__auto___24991 + (1));
i__8815__auto___24991 = G__24992;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,taoensso.encore.fsplit_last((function (xs,lx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,(taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1(lx) : taoensso.encore.seq_kvs.call(null,lx)));
}),args));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq24988){
var G__24989 = cljs.core.first(seq24988);
var seq24988__$1 = cljs.core.next(seq24988);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__24989,seq24988__$1);
});

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__24997 = arguments.length;
switch (G__24997) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8833__auto__ = [];
var len__8814__auto___24999 = arguments.length;
var i__8815__auto___25000 = (0);
while(true){
if((i__8815__auto___25000 < len__8814__auto___24999)){
args_arr__8833__auto__.push((arguments[i__8815__auto___25000]));

var G__25001 = (i__8815__auto___25000 + (1));
i__8815__auto___25000 = G__25001;
continue;
} else {
}
break;
}

var argseq__8834__auto__ = (new cljs.core.IndexedSeq(args_arr__8833__auto__.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8834__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$(to),cljs.core.cons(from,more)));
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq24994){
var G__24995 = cljs.core.first(seq24994);
var seq24994__$1 = cljs.core.next(seq24994);
var G__24996 = cljs.core.first(seq24994__$1);
var seq24994__$2 = cljs.core.next(seq24994__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__24995,G__24996,seq24994__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_(coll))){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__25003 = arguments.length;
switch (G__25003) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__25006 = arguments.length;
switch (G__25006) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__25008 = null;
var G__25008__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__25008__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__25008__2 = (function (acc,input){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_(seen_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(seen_),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
G__25008 = function(acc,input){
switch(arguments.length){
case 0:
return G__25008__0.call(this);
case 1:
return G__25008__1.call(this,acc);
case 2:
return G__25008__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__25008.cljs$core$IFn$_invoke$arity$0 = G__25008__0;
G__25008.cljs$core$IFn$_invoke$arity$1 = G__25008__1;
G__25008.cljs$core$IFn$_invoke$arity$2 = G__25008__2;
return G__25008;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),m,m);
}
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
/**
 * Returns {(f x) x} map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_((function (p1__25009_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__25009_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__25011 = arguments.length;
switch (G__25011) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,f);
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__23250__auto__ = cljs.core.seq(ks);
if(b2__23250__auto__){
var ks_seq = b2__23250__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0));
var b2__23250__auto____$1 = cljs.core.next(ks_seq);
if(b2__23250__auto____$1){
var ks__$1 = b2__23250__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_((function (){var G__25012 = f;
var G__25013 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25012,G__25013) : taoensso.encore.kw_identical_QMARK_.call(null,G__25012,G__25013));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
var v = (function (){var G__25014 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25014) : f.call(null,G__25014));
})();
if(cljs.core.truth_((function (){var G__25015 = v;
var G__25016 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25015,G__25016) : taoensso.encore.kw_identical_QMARK_.call(null,G__25015,G__25016));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}
}
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
}
});

taoensso.encore.update_in.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__25019 = arguments.length;
switch (G__25019) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,ks),k);
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq(ks)){
return taoensso.encore.fsplit_last((function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3(coll,ks__$1,lk);
}),ks);
} else {
return false;
}
});

taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__25026 = arguments.length;
switch (G__25026) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__8833__auto__ = [];
var len__8814__auto___25028 = arguments.length;
var i__8815__auto___25029 = (0);
while(true){
if((i__8815__auto___25029 < len__8814__auto___25028)){
args_arr__8833__auto__.push((arguments[i__8815__auto___25029]));

var G__25030 = (i__8815__auto___25029 + (1));
i__8815__auto___25029 = G__25030;
continue;
} else {
}
break;
}

var argseq__8834__auto__ = (new cljs.core.IndexedSeq(args_arr__8833__auto__.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8834__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq25022){
var G__25023 = cljs.core.first(seq25022);
var seq25022__$1 = cljs.core.next(seq25022);
var G__25024 = cljs.core.first(seq25022__$1);
var seq25022__$2 = cljs.core.next(seq25022__$1);
var G__25025 = cljs.core.first(seq25022__$2);
var seq25022__$3 = cljs.core.next(seq25022__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__25023,G__25024,G__25025,seq25022__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__25035 = arguments.length;
switch (G__25035) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8833__auto__ = [];
var len__8814__auto___25037 = arguments.length;
var i__8815__auto___25038 = (0);
while(true){
if((i__8815__auto___25038 < len__8814__auto___25037)){
args_arr__8833__auto__.push((arguments[i__8815__auto___25038]));

var G__25039 = (i__8815__auto___25038 + (1));
i__8815__auto___25038 = G__25039;
continue;
} else {
}
break;
}

var argseq__8834__auto__ = (new cljs.core.IndexedSeq(args_arr__8833__auto__.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8834__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq25032){
var G__25033 = cljs.core.first(seq25032);
var seq25032__$1 = cljs.core.next(seq25032);
var G__25034 = cljs.core.first(seq25032__$1);
var seq25032__$2 = cljs.core.next(seq25032__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__25033,G__25034,seq25032__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if((s1) && (s2)){
var G__25040 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__25041 = cljs.core.next(s1);
var G__25042 = cljs.core.next(s2);
v = G__25040;
s1 = G__25041;
s2 = G__25042;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
});
var not_found_25049 = {};
taoensso.encore._merge_with = ((function (not_found_25049){
return (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (not_found_25049){
return (function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv(((function (not_found_25049){
return (function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc__$1,k,not_found_25049);
if((lv === not_found_25049)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
} else {
if(cljs.core.truth_((function (){var G__25045 = rv;
var G__25046 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25045,G__25046) : taoensso.encore.kw_identical_QMARK_.call(null,G__25045,G__25046));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__7633__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__7633__auto__)){
return (cljs.core.map_QMARK_(rv)) && (cljs.core.map_QMARK_(lv));
} else {
return and__7633__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,cljs.core.reduce_kv(taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(lv,rv) : f.call(null,lv,rv));
if(cljs.core.truth_((function (){var G__25047 = new_rv;
var G__25048 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25047,G__25048) : taoensso.encore.kw_identical_QMARK_.call(null,G__25047,G__25048));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,new_rv);
}
}
}
}
});})(not_found_25049))
,(function (){var or__7645__auto__ = acc;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
});})(not_found_25049))
,null,maps);
});})(not_found_25049))
;
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25056 = arguments.length;
var i__8815__auto___25057 = (0);
while(true){
if((i__8815__auto___25057 < len__8814__auto___25056)){
args__8821__auto__.push((arguments[i__8815__auto___25057]));

var G__25058 = (i__8815__auto___25057 + (1));
i__8815__auto___25057 = G__25058;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(false,(function (x,y){
return y;
}),maps);
});

taoensso.encore.merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.merge.cljs$lang$applyTo = (function (seq25050){
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25050));
});


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25059 = arguments.length;
var i__8815__auto___25060 = (0);
while(true){
if((i__8815__auto___25060 < len__8814__auto___25059)){
args__8821__auto__.push((arguments[i__8815__auto___25060]));

var G__25061 = (i__8815__auto___25060 + (1));
i__8815__auto___25060 = G__25061;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(false,f,maps);
});

taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq25051){
var G__25052 = cljs.core.first(seq25051);
var seq25051__$1 = cljs.core.next(seq25051);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic(G__25052,seq25051__$1);
});


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25062 = arguments.length;
var i__8815__auto___25063 = (0);
while(true){
if((i__8815__auto___25063 < len__8814__auto___25062)){
args__8821__auto__.push((arguments[i__8815__auto___25063]));

var G__25064 = (i__8815__auto___25063 + (1));
i__8815__auto___25063 = G__25064;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq25053){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25053));
});


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25065 = arguments.length;
var i__8815__auto___25066 = (0);
while(true){
if((i__8815__auto___25066 < len__8814__auto___25065)){
args__8821__auto__.push((arguments[i__8815__auto___25066]));

var G__25067 = (i__8815__auto___25066 + (1));
i__8815__auto___25066 = G__25067;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq25054){
var G__25055 = cljs.core.first(seq25054);
var seq25054__$1 = cljs.core.next(seq25054);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__25055,seq25054__$1);
});


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$newv,cljs.core.cst$sym$returnv], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped";

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = cljs.core.cst$sym$clojure$lang$IAtom;
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref(atom_);
var v1 = (function (){var G__25068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25068) : f.call(null,G__25068));
})();
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
return v1;
} else {
continue;
}
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = cljs.core.deref(atom_);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if((function (){
cljs.core.reset_BANG_(atom_,v1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = cljs.core.deref(atom_);
if((function (){
cljs.core.reset_BANG_(atom_,v1);

return true;
})()
){
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
} else {
continue;
}
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_((function (){var G__25069 = f;
var G__25070 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25069,G__25070) : taoensso.encore.kw_identical_QMARK_.call(null,G__25069,G__25070));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__25071 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__25072 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__25071,G__25072) : return$.call(null,G__25071,G__25072));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__25073 = v1;
var G__25074 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25073,G__25074) : taoensso.encore.kw_identical_QMARK_.call(null,G__25073,G__25074));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1));
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__25075 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__25076 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__25075,G__25076) : return$.call(null,G__25075,G__25076));
} else {
continue;
}
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__23250__auto__ = cljs.core.seq(ks);
if(b2__23250__auto__){
var ks_seq = b2__23250__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.truth_((function (){var G__25077 = f;
var G__25078 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25077,G__25078) : taoensso.encore.kw_identical_QMARK_.call(null,G__25077,G__25078));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = taoensso.encore.fsplit_last(((function (m0,ks_seq,b2__23250__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,ks_seq,b2__23250__auto__))
,ks);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__25079 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__25080 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__25079,G__25080) : return$.call(null,G__25079,G__25080));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__25081 = v1;
var G__25082 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25081,G__25082) : taoensso.encore.kw_identical_QMARK_.call(null,G__25081,G__25082));
})())?taoensso.encore.fsplit_last(((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__23250__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__23250__auto__))
,ks):cljs.core.assoc_in(m0,ks,v1));
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_(return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__23250__auto__ = cljs.core.seq(ks);
if(b2__23250__auto__){
var ks_seq = b2__23250__auto__;
if(cljs.core.next(ks_seq)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc_in(m0,ks,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__25083 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__25084 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__25083,G__25084) : return$.call(null,G__25083,G__25084));
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
var return_25087 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = ((function (return_25087){
return (function taoensso$encore$swap_val_BANG_(var_args){
var G__25086 = arguments.length;
switch (G__25086) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_25087))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_25087){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_25087,atom_,k,null,f);
});})(return_25087))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_25087){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_25087,atom_,k,not_found,f);
});})(return_25087))
;

taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_25091 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = ((function (return_25091){
return (function taoensso$encore$reset_val_BANG_(var_args){
var G__25090 = arguments.length;
switch (G__25090) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_25091))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_25091){
return (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_25091,atom_,k,null,val);
});})(return_25091))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_25091){
return (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_25091,atom_,k,not_found,val);
});})(return_25091))
;

taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_25095 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = ((function (return_25095){
return (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__25094 = arguments.length;
switch (G__25094) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_25095))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_25095){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_25095,atom_,k,null,f);
});})(return_25095))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_25095){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_25095,atom_,k,not_found,f);
});})(return_25095))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__25098 = arguments.length;
switch (G__25098) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3(atom_,k,null);
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__25099 = taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,cljs.core.cst$kw$swap_SLASH_dissoc);
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25099,(0),null);
return v0;
});

taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3;

var not_found_25105 = {};
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = ((function (not_found_25105){
return (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found_25105,new_val);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val)){
return false;
} else {
return true;
}
});})(not_found_25105))
;
var return_25108 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = ((function (return_25108){
return (function taoensso$encore$swap_in_BANG_(var_args){
var G__25107 = arguments.length;
switch (G__25107) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_25108))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_25108){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_25108,atom_,f);
});})(return_25108))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_25108){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_25108,atom_,ks,null,f);
});})(return_25108))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_25108){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_25108,atom_,ks,not_found,f);
});})(return_25108))
;

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_25112 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = ((function (return_25112){
return (function taoensso$encore$reset_in_BANG_(var_args){
var G__25111 = arguments.length;
switch (G__25111) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_25112))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_25112){
return (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_25112,atom_,val);
});})(return_25112))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_25112){
return (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_25112,atom_,ks,null,val);
});})(return_25112))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_25112){
return (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_25112,atom_,ks,not_found,val);
});})(return_25112))
;

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_25116 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = ((function (return_25116){
return (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__25115 = arguments.length;
switch (G__25115) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_25116))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = ((function (return_25116){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_25116,atom_,f);
});})(return_25116))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_25116){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_25116,atom_,ks,null,f);
});})(return_25116))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_25116){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_25116,atom_,ks,not_found,f);
});})(return_25116))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__23250__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__23250__auto__)){
var perf = b2__23250__auto__;
var b2__23250__auto____$1 = (function (){var or__7645__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
var or__7645__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__7645__auto____$1)){
return or__7645__auto____$1;
} else {
var or__7645__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__7645__auto____$2)){
return or__7645__auto____$2;
} else {
var or__7645__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
if(cljs.core.truth_(or__7645__auto____$3)){
return or__7645__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__23250__auto____$1)){
var f = b2__23250__auto____$1;
return ((function (f,b2__23250__auto____$1,perf,b2__23250__auto__){
return (function (){
return ((1000000) * cljs.core.long$(f.call(perf)));
});
;})(f,b2__23250__auto____$1,perf,b2__23250__auto__))
} else {
return ((function (b2__23250__auto____$1,perf,b2__23250__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__23250__auto____$1,perf,b2__23250__auto__))
}
} else {
return ((function (b2__23250__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__23250__auto__))
}
})();
/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = {};
return ((function (cache_,get_sentinel){
return (function() { 
var G__25126__delegate = function (xs){
var x1 = cljs.core.first(xs);
if(cljs.core.truth_((function (){var G__25120 = x1;
var G__25121 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25120,G__25121) : taoensso.encore.kw_identical_QMARK_.call(null,G__25120,G__25121));
})())){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.truth_((function (){var G__25122 = x2;
var G__25123 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25122,G__25123) : taoensso.encore.kw_identical_QMARK_.call(null,G__25122,G__25123));
})())){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_(cache_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cache_),xn));
}

return null;
} else {
if(cljs.core.truth_((function (){var G__25124 = x1;
var G__25125 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25124,G__25125) : taoensso.encore.kw_identical_QMARK_.call(null,G__25124,G__25125));
})())){
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xn,v));

return v;
} else {
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__25126 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__25127__i = 0, G__25127__a = new Array(arguments.length -  0);
while (G__25127__i < G__25127__a.length) {G__25127__a[G__25127__i] = arguments[G__25127__i + 0]; ++G__25127__i;}
  xs = new cljs.core.IndexedSeq(G__25127__a,0,null);
} 
return G__25126__delegate.call(this,xs);};
G__25126.cljs$lang$maxFixedArity = 0;
G__25126.cljs$lang$applyTo = (function (arglist__25128){
var xs = cljs.core.seq(arglist__25128);
return G__25126__delegate(xs);
});
G__25126.cljs$core$IFn$_invoke$arity$variadic = G__25126__delegate;
return G__25126;
})()
;
;})(cache_,get_sentinel))
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__25129__delegate = function (args){
return cljs.core.deref((function (){var or__7645__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_),args);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (or__7645__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay(((function (or__7645__auto__,cache_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(or__7645__auto__,cache_))
,null))]);
}
});})(or__7645__auto__,cache_))
),args);
}
})());
};
var G__25129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25130__i = 0, G__25130__a = new Array(arguments.length -  0);
while (G__25130__i < G__25130__a.length) {G__25130__a[G__25130__i] = arguments[G__25130__i + 0]; ++G__25130__i;}
  args = new cljs.core.IndexedSeq(G__25130__a,0,null);
} 
return G__25129__delegate.call(this,args);};
G__25129.cljs$lang$maxFixedArity = 0;
G__25129.cljs$lang$applyTo = (function (arglist__25131){
var args = cljs.core.seq(arglist__25131);
return G__25129__delegate(args);
});
G__25129.cljs$core$IFn$_invoke$arity$variadic = G__25129__delegate;
return G__25129;
})()
;
;})(cache_))
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.SimpleCacheEntry.cljs$lang$type = true;

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry";

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"taoensso.encore/SimpleCacheEntry");
});

taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lru,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lfu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.TickedCacheEntry.cljs$lang$type = true;

taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry";

taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"taoensso.encore/TickedCacheEntry");
});

taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var G__25133 = arguments.length;
switch (G__25133) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_(f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_25157 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25134){if((e25134 instanceof Error)){
var e = e25134;
return e;
} else {
throw e25134;

}
}})();
if((e_25157 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1736,"(pos-int? ttl-ms)",ttl_ms,e_25157,null);
}

var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
return ((function (cache_,latch_,ttl_ms__$1){
return (function() { 
var G__25158__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__25135 = a1;
var G__25136 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25135,G__25136) : taoensso.encore.kw_identical_QMARK_.call(null,G__25135,G__25136));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__25137 = a2;
var G__25138 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25137,G__25138) : taoensso.encore.kw_identical_QMARK_.call(null,G__25137,G__25138));
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_25159 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_25159);

return true;
})()
){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_25159,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_25159,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(latch_25159,instant,a1,cache_,latch_,ttl_ms__$1))
,cljs.core.transient$((function (){var or__7645__auto__ = m;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_25159,instant,a1,cache_,latch_,ttl_ms__$1))
);
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__25139 = a1;
var G__25140 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25139,G__25140) : taoensso.encore.kw_identical_QMARK_.call(null,G__25139,G__25140));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__7645__auto__ = (_QMARK_e == null);
if(or__7645__auto__){
return or__7645__auto__;
} else {
var or__7645__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__7645__auto____$1)){
return or__7645__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
,null)),instant));
} else {
return _QMARK_e;
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
);
return cljs.core.deref(e.delay);
}
};
var G__25158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25160__i = 0, G__25160__a = new Array(arguments.length -  0);
while (G__25160__i < G__25160__a.length) {G__25160__a[G__25160__i] = arguments[G__25160__i + 0]; ++G__25160__i;}
  args = new cljs.core.IndexedSeq(G__25160__a,0,null);
} 
return G__25158__delegate.call(this,args);};
G__25158.cljs$lang$maxFixedArity = 0;
G__25158.cljs$lang$applyTo = (function (arglist__25161){
var args = cljs.core.seq(arglist__25161);
return G__25158__delegate(args);
});
G__25158.cljs$core$IFn$_invoke$arity$variadic = G__25158__delegate;
return G__25158;
})()
;
;})(cache_,latch_,ttl_ms__$1))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (){var fexpr__25143 = (function (x){
var or__7645__auto__ = (x == null);
if(or__7645__auto__){
return or__7645__auto__;
} else {
var fexpr__25145 = taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_);
return (fexpr__25145.cljs$core$IFn$_invoke$arity$1 ? fexpr__25145.cljs$core$IFn$_invoke$arity$1(x) : fexpr__25145.call(null,x));
}
});
return fexpr__25143(ttl_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1787,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_25162 = (function (){try{if(taoensso.encore.pos_int_QMARK_(cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25146){if((e25146 instanceof Error)){
var e = e25146;
return e;
} else {
throw e25146;

}
}})();
if((e_25162 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1788,"(pos-int? cache-size)",cache_size,e_25162,null);
}

var tick_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$((function (){var or__7645__auto__ = ttl_ms;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = !((ttl_ms__$1 === (0)));
var cache_size__$1 = cljs.core.long$(cache_size);
return ((function (tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function() { 
var G__25163__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__25147 = a1;
var G__25148 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25147,G__25148) : taoensso.encore.kw_identical_QMARK_.call(null,G__25147,G__25148));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__25149 = a2;
var G__25150 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25149,G__25150) : taoensso.encore.kw_identical_QMARK_.call(null,G__25149,G__25150));
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_25164 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_25164);

return true;
})()
){
if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_25164,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_25164,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(latch_25164,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__7645__auto__ = m;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_25164,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}

var snapshot_25165 = cljs.core.deref(cache_);
var n_to_gc_25166 = (cljs.core.count(snapshot_25165) - cache_size__$1);
if((n_to_gc_25166 > (64))){
var ks_to_gc_25167 = (function (){var G__25151 = n_to_gc_25166;
var G__25152 = ((function (G__25151,snapshot_25165,n_to_gc_25166,latch_25164,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_25165,k);
return (e.tick_lru + e.tick_lfu);
});})(G__25151,snapshot_25165,n_to_gc_25166,latch_25164,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
;
var G__25153 = cljs.core.keys(snapshot_25165);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__25151,G__25152,G__25153) : taoensso.encore.top.call(null,G__25151,G__25152,G__25153));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (ks_to_gc_25167,snapshot_25165,n_to_gc_25166,latch_25164,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_gc_25167,snapshot_25165,n_to_gc_25166,latch_25164,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(ks_to_gc_25167,snapshot_25165,n_to_gc_25166,latch_25164,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__7645__auto__ = m;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_25167));
});})(ks_to_gc_25167,snapshot_25165,n_to_gc_25166,latch_25164,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__25154 = a1;
var G__25155 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25154,G__25155) : taoensso.encore.kw_identical_QMARK_.call(null,G__25154,G__25155));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var tick = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tick_,((function (fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (n){
return (n + (1));
});})(fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__7645__auto__ = (_QMARK_e == null);
if(or__7645__auto__){
return or__7645__auto__;
} else {
var or__7645__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__7645__auto____$1)){
return or__7645__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
return cljs.core.deref(e.delay);
}
};
var G__25163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25168__i = 0, G__25168__a = new Array(arguments.length -  0);
while (G__25168__i < G__25168__a.length) {G__25168__a[G__25168__i] = arguments[G__25168__i + 0]; ++G__25168__i;}
  args = new cljs.core.IndexedSeq(G__25168__a,0,null);
} 
return G__25163__delegate.call(this,args);};
G__25163.cljs$lang$maxFixedArity = 0;
G__25163.cljs$lang$applyTo = (function (arglist__25169){
var args = cljs.core.seq(arglist__25169);
return G__25163__delegate(args);
});
G__25163.cljs$core$IFn$_invoke$arity$variadic = G__25163__delegate;
return G__25163;
})()
;
;})(tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitSpec.cljs$lang$type = true;

taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec";

taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"taoensso.encore/LimitSpec");
});

taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$udt0,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitEntry.cljs$lang$type = true;

taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry";

taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"taoensso.encore/LimitEntry");
});

taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
});

taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m,cljs.core.cst$sym$worst_DASH_sid,cljs.core.with_meta(cljs.core.cst$sym$worst_DASH_ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitHits.cljs$lang$type = true;

taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits";

taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"taoensso.encore/LimitHits");
});

taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_25182 = (function (n,ms){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25170){if((e25170 instanceof Error)){
var e = e25170;
return e;
} else {
throw e25170;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1888,"(pos-int? n)",n,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25171){if((e25171 instanceof Error)){
var e = e25171;
return e;
} else {
throw e25171;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1888,"(pos-int? ms)",ms,e,null);
}
})()], null);

return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = ((function (limit_spec_25182){
return (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(((function (limit_spec_25182){
return (function (acc,sid,p__25172){
var vec__25173 = p__25172;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25173,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25173,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,limit_spec_25182(n,ms));
});})(limit_spec_25182))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,limit_spec_25182){
return (function (acc,p__25176){
var vec__25177 = p__25176;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25177,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25177,(1),null);
var _QMARK_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25177,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__7645__auto__ = _QMARK_id;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core._vreset_BANG_(i,(function (){var G__25181 = cljs.core._deref(i);
var fexpr__25180 = ((function (G__25181,or__7645__auto__,vec__25177,n,ms,_QMARK_id,i,limit_spec_25182){
return (function (i__$1){
return (i__$1 + (1));
});})(G__25181,or__7645__auto__,vec__25177,n,ms,_QMARK_id,i,limit_spec_25182))
;
return fexpr__25180(G__25181);
})());
}
})(),limit_spec_25182(n,ms));
});})(i,limit_spec_25182))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});})(limit_spec_25182))
;
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_(specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly(null)], null);
} else {
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reqs_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var specs__$1 = taoensso.encore.coerce_limit_specs(specs);
var f1 = ((function (latch_,reqs_,specs__$1){
return (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if((cljs.core.not(peek_QMARK_)) && ((Math.random() <= 6.25E-5))){
var latch_25189 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_25189);

return true;
})()
){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,((function (latch_25189,instant,latch_,reqs_,specs__$1){
return (function (reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_25189,instant,latch_,reqs_,specs__$1){
return (function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv(((function (latch_25189,instant,latch_,reqs_,specs__$1){
return (function (acc__$1,sid,e){
var b2__23250__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__23250__auto__)){
var s = b2__23250__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
}
});})(latch_25189,instant,latch_,reqs_,specs__$1))
,entries,entries);
if(cljs.core.empty_QMARK_(new_entries)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,rid__$1,new_entries);
}
});})(latch_25189,instant,latch_,reqs_,specs__$1))
,cljs.core.transient$((function (){var or__7645__auto__ = reqs;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});})(latch_25189,instant,latch_,reqs_,specs__$1))
);
} else {
}
} else {
}

while(true){
var reqs = cljs.core.deref(reqs_);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv(((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__23250__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__23250__auto__)){
var s = b2__23250__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([sid,tdelta]),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__7645__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__23250__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__23250__auto__)){
var h = b2__23250__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__23250__auto__ = cljs.core.deref(latch_);
if(cljs.core.truth_(b2__23250__auto__)){
var l = b2__23250__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__23250__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,(function (){var b2__23250__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,sid);
if(cljs.core.truth_(b2__23250__auto____$1)){
var e = b2__23250__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__23250__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
if((function (){
cljs.core.reset_BANG_(reqs_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reqs,rid,new_entries));

return true;
})()
){
return null;
} else {
continue;
}
}
}
break;
}
});})(latch_,reqs_,specs__$1))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,((function (latch_,reqs_,specs__$1,f1){
return (function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1(null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1(req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_((function (){var G__25183 = cmd;
var G__25184 = cljs.core.cst$kw$rl_SLASH_reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25183,G__25184) : taoensso.encore.kw_identical_QMARK_.call(null,G__25183,G__25184));
})())){
if(cljs.core.truth_((function (){var G__25185 = req_id;
var G__25186 = cljs.core.cst$kw$rl_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25185,G__25186) : taoensso.encore.kw_identical_QMARK_.call(null,G__25185,G__25186));
})())){
cljs.core.reset_BANG_(reqs_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_((function (){var G__25187 = cmd;
var G__25188 = cljs.core.cst$kw$rl_SLASH_peek;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25187,G__25188) : taoensso.encore.kw_identical_QMARK_.call(null,G__25187,G__25188));
})())){
return f1(req_id,true);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,cmd,cljs.core.cst$kw$req_DASH_id,req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
;})(latch_,reqs_,specs__$1,f1))
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__25190 = taoensso.encore.limiter_STAR_(specs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25190,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25190,(1),null);
return f;
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__25197 = arguments.length;
switch (G__25197) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8833__auto__ = [];
var len__8814__auto___25199 = arguments.length;
var i__8815__auto___25200 = (0);
while(true){
if((i__8815__auto___25200 < len__8814__auto___25199)){
args_arr__8833__auto__.push((arguments[i__8815__auto___25200]));

var G__25201 = (i__8815__auto___25200 + (1));
i__8815__auto___25200 = G__25201;
continue;
} else {
}
break;
}

var argseq__8834__auto__ = (new cljs.core.IndexedSeq(args_arr__8833__auto__.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8834__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,s);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq25194){
var G__25195 = cljs.core.first(seq25194);
var seq25194__$1 = cljs.core.next(seq25194);
var G__25196 = cljs.core.first(seq25194__$1);
var seq25194__$2 = cljs.core.next(seq25194__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__25195,G__25196,seq25194__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_(acc)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(((taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__25203 = arguments.length;
switch (G__25203) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__7633__auto__ = separator;
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__7633__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__25206 = arguments.length;
switch (G__25206) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__25209 = arguments.length;
switch (G__25209) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
});

taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__25212 = arguments.length;
switch (G__25212) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start));
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start,length));
});

taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3;

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__25215__delegate = function (args){
var G__25214 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__25214) : replacement.call(null,G__25214));
};
var G__25215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25216__i = 0, G__25216__a = new Array(arguments.length -  0);
while (G__25216__i < G__25216__a.length) {G__25216__a[G__25216__i] = arguments[G__25216__i + 0]; ++G__25216__i;}
  args = new cljs.core.IndexedSeq(G__25216__a,0,null);
} 
return G__25215__delegate.call(this,args);};
G__25215.cljs$lang$maxFixedArity = 0;
G__25215.cljs$lang$applyTo = (function (arglist__25217){
var args = cljs.core.seq(arglist__25217);
return G__25215__delegate(args);
});
G__25215.cljs$core$IFn$_invoke$arity$variadic = G__25215__delegate;
return G__25215;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__7645__auto__ = fmt;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25220 = arguments.length;
var i__8815__auto___25221 = (0);
while(true){
if((i__8815__auto___25221 < len__8814__auto___25220)){
args__8821__auto__.push((arguments[i__8815__auto___25221]));

var G__25222 = (i__8815__auto___25221 + (1));
i__8815__auto___25221 = G__25222;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_(fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq25218){
var G__25219 = cljs.core.first(seq25218);
var seq25218__$1 = cljs.core.next(seq25218);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__25219,seq25218__$1);
});

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref(acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref(acc_empty_QMARK__);
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__7645__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25224 = arguments.length;
var i__8815__auto___25225 = (0);
while(true){
if((i__8815__auto___25225 < len__8814__auto___25224)){
args__8821__auto__.push((arguments[i__8815__auto___25225]));

var G__25226 = (i__8815__auto___25225 + (1));
i__8815__auto___25225 = G__25226;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq25223){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25223));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__25228 = arguments.length;
switch (G__25228) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex())].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25231 = arguments.length;
var i__8815__auto___25232 = (0);
while(true){
if((i__8815__auto___25232 < len__8814__auto___25231)){
args__8821__auto__.push((arguments[i__8815__auto___25232]));

var G__25233 = (i__8815__auto___25232 + (1));
i__8815__auto___25232 = G__25233;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_(in$)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs))].join('');
});

taoensso.encore.into_str.cljs$lang$maxFixedArity = (0);

taoensso.encore.into_str.cljs$lang$applyTo = (function (seq25230){
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25230));
});

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
var sentinel_25238 = {};
var nil__GT_sentinel_25239 = ((function (sentinel_25238){
return (function (x){
if((x == null)){
return sentinel_25238;
} else {
return x;
}
});})(sentinel_25238))
;
var sentinel__GT_nil_25240 = ((function (sentinel_25238,nil__GT_sentinel_25239){
return (function (x){
if((x === sentinel_25238)){
return null;
} else {
return x;
}
});})(sentinel_25238,nil__GT_sentinel_25239))
;
/**
 * Reduces the top `n` items from `coll` of N items into in O(N.logn) time.
 *  For comparsion, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.reduce_top = ((function (sentinel_25238,nil__GT_sentinel_25239,sentinel__GT_nil_25240){
return (function taoensso$encore$reduce_top(var_args){
var G__25237 = arguments.length;
switch (G__25237) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(sentinel_25238,nil__GT_sentinel_25239,sentinel__GT_nil_25240))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_25238,nil__GT_sentinel_25239,sentinel__GT_nil_25240){
return (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
});})(sentinel_25238,nil__GT_sentinel_25239,sentinel__GT_nil_25240))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = ((function (sentinel_25238,nil__GT_sentinel_25239,sentinel__GT_nil_25240){
return (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
});})(sentinel_25238,nil__GT_sentinel_25239,sentinel__GT_nil_25240))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = ((function (sentinel_25238,nil__GT_sentinel_25239,sentinel__GT_nil_25240){
return (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count(coll);
var n__$1 = cljs.core.long$((function (){var x__8002__auto__ = coll_size;
var y__8003__auto__ = cljs.core.long$(n);
return ((x__8002__auto__ < y__8003__auto__) ? x__8002__auto__ : y__8003__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.take.cljs$core$IFn$_invoke$arity$1(n__$1),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf),init,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
} else {
return init;
}
});})(sentinel_25238,nil__GT_sentinel_25239,sentinel__GT_nil_25240))
;

taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6;

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__25243 = arguments.length;
switch (G__25243) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_(to)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$(to),coll));
} else {
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj,to,coll);
}
});

taoensso.encore.top_into.cljs$lang$maxFixedArity = 5;

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__25246 = arguments.length;
switch (G__25246) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25265 = arguments.length;
var i__8815__auto___25266 = (0);
while(true){
if((i__8815__auto___25266 < len__8814__auto___25265)){
args__8821__auto__.push((arguments[i__8815__auto___25266]));

var G__25267 = (i__8815__auto___25266 + (1));
i__8815__auto___25266 = G__25267;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__25261){
var map__25262 = p__25261;
var map__25262__$1 = ((((!((map__25262 == null)))?((((map__25262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25262):map__25262);
var opts = map__25262__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25262__$1,cljs.core.cst$kw$years);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25262__$1,cljs.core.cst$kw$months);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25262__$1,cljs.core.cst$kw$weeks);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25262__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25262__$1,cljs.core.cst$kw$hours);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25262__$1,cljs.core.cst$kw$mins);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25262__$1,cljs.core.cst$kw$secs);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25262__$1,cljs.core.cst$kw$msecs);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25262__$1,cljs.core.cst$kw$ms);
taoensso.truss.impl.revery_QMARK_(((function (map__25262,map__25262__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_((function (){var fexpr__25264 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$msecs,null,cljs.core.cst$kw$secs,null,cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$mins,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$ms,null,cljs.core.cst$kw$weeks,null], null), null);
return (fexpr__25264.cljs$core$IFn$_invoke$arity$1 ? fexpr__25264.cljs$core$IFn$_invoke$arity$1(__in) : fexpr__25264.call(null,__in));
})())){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2391,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__25262,map__25262__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys(opts));

return taoensso.encore.round0((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq25260){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25260));
});

taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = ((typeof console !== 'undefined')?(function() { 
var G__25282__delegate = function (xs){
var b2__23250__auto__ = console.log;
if(cljs.core.truth_(b2__23250__auto__)){
var f = b2__23250__auto__;
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
var G__25282 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__25283__i = 0, G__25283__a = new Array(arguments.length -  0);
while (G__25283__i < G__25283__a.length) {G__25283__a[G__25283__i] = arguments[G__25283__i + 0]; ++G__25283__i;}
  xs = new cljs.core.IndexedSeq(G__25283__a,0,null);
} 
return G__25282__delegate.call(this,xs);};
G__25282.cljs$lang$maxFixedArity = 0;
G__25282.cljs$lang$applyTo = (function (arglist__25284){
var xs = cljs.core.seq(arglist__25284);
return G__25282__delegate(xs);
});
G__25282.cljs$core$IFn$_invoke$arity$variadic = G__25282__delegate;
return G__25282;
})()
:(function() { 
var G__25285__delegate = function (xs){
return null;
};
var G__25285 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__25286__i = 0, G__25286__a = new Array(arguments.length -  0);
while (G__25286__i < G__25286__a.length) {G__25286__a[G__25286__i] = arguments[G__25286__i + 0]; ++G__25286__i;}
  xs = new cljs.core.IndexedSeq(G__25286__a,0,null);
} 
return G__25285__delegate.call(this,xs);};
G__25285.cljs$lang$maxFixedArity = 0;
G__25285.cljs$lang$applyTo = (function (arglist__25287){
var xs = cljs.core.seq(arglist__25287);
return G__25285__delegate(xs);
});
G__25285.cljs$core$IFn$_invoke$arity$variadic = G__25285__delegate;
return G__25285;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25288 = arguments.length;
var i__8815__auto___25289 = (0);
while(true){
if((i__8815__auto___25289 < len__8814__auto___25288)){
args__8821__auto__.push((arguments[i__8815__auto___25289]));

var G__25290 = (i__8815__auto___25289 + (1));
i__8815__auto___25289 = G__25290;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__25273 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__25273) : taoensso.encore.console_log.call(null,G__25273));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq25272){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25272));
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25291 = arguments.length;
var i__8815__auto___25292 = (0);
while(true){
if((i__8815__auto___25292 < len__8814__auto___25291)){
args__8821__auto__.push((arguments[i__8815__auto___25292]));

var G__25293 = (i__8815__auto___25292 + (1));
i__8815__auto___25292 = G__25293;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__25275 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return alert(G__25275);
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq25274){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25274));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25294 = arguments.length;
var i__8815__auto___25295 = (0);
while(true){
if((i__8815__auto___25295 < len__8814__auto___25294)){
args__8821__auto__.push((arguments[i__8815__auto___25295]));

var G__25296 = (i__8815__auto___25295 + (1));
i__8815__auto___25295 = G__25296;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__25278 = taoensso.encore.format_STAR_(fmt,xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__25278) : taoensso.encore.console_log.call(null,G__25278));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq25276){
var G__25277 = cljs.core.first(seq25276);
var seq25276__$1 = cljs.core.next(seq25276);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__25277,seq25276__$1);
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25297 = arguments.length;
var i__8815__auto___25298 = (0);
while(true){
if((i__8815__auto___25298 < len__8814__auto___25297)){
args__8821__auto__.push((arguments[i__8815__auto___25298]));

var G__25299 = (i__8815__auto___25298 + (1));
i__8815__auto___25298 = G__25299;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__25281 = taoensso.encore.format_STAR_(fmt,xs);
return alert(G__25281);
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq25279){
var G__25280 = cljs.core.first(seq25279);
var seq25279__$1 = cljs.core.next(seq25279);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__25280,seq25279__$1);
});

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__23250__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__23250__auto__)){
var js_win = b2__23250__auto__;
var b2__23250__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__23250__auto____$1)){
var loc = b2__23250__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$href,loc.href,cljs.core.cst$kw$protocol,loc.protocol,cljs.core.cst$kw$hostname,loc.hostname,cljs.core.cst$kw$host,loc.host,cljs.core.cst$kw$pathname,loc.pathname,cljs.core.cst$kw$search,loc.search,cljs.core.cst$kw$hash,loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *  be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref(taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = ((typeof FormData !== 'undefined')?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = ((typeof File !== 'undefined')?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq(params)){
return (function (){var G__25300 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__25300);
})().toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1(params);
var uri_with_query = ((clojure.string.blank_QMARK_(qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = ((function (url_encode){
return (function (uri,params){
if(cljs.core.truth_((taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1(params) : taoensso.encore.js_form_data_QMARK_.call(null,params)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_25318 = (function (){try{if(cljs.core.map_QMARK_(params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e25301){if((e25301 instanceof Error)){
var e = e25301;
return e;
} else {
throw e25301;

}
}})();
if((e_25318 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2694,"(map? params)",params,e_25318,null);
}

if(cljs.core.truth_((function (){var and__7633__auto__ = typeof FormData !== 'undefined';
if(and__7633__auto__){
return taoensso.encore.rsome(taoensso.encore.js_file_QMARK_,cljs.core.vals(params));
} else {
return and__7633__auto__;
}
})())){
var form_data = (new FormData());
var seq__25302_25319 = cljs.core.seq(params);
var chunk__25303_25320 = null;
var count__25304_25321 = (0);
var i__25305_25322 = (0);
while(true){
if((i__25305_25322 < count__25304_25321)){
var vec__25306_25323 = chunk__25303_25320.cljs$core$IIndexed$_nth$arity$2(null,i__25305_25322);
var k_25324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25306_25323,(0),null);
var v_25325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25306_25323,(1),null);
form_data.append(cljs.core.name(k_25324),v_25325);

var G__25326 = seq__25302_25319;
var G__25327 = chunk__25303_25320;
var G__25328 = count__25304_25321;
var G__25329 = (i__25305_25322 + (1));
seq__25302_25319 = G__25326;
chunk__25303_25320 = G__25327;
count__25304_25321 = G__25328;
i__25305_25322 = G__25329;
continue;
} else {
var temp__4657__auto___25330 = cljs.core.seq(seq__25302_25319);
if(temp__4657__auto___25330){
var seq__25302_25331__$1 = temp__4657__auto___25330;
if(cljs.core.chunked_seq_QMARK_(seq__25302_25331__$1)){
var c__8484__auto___25332 = cljs.core.chunk_first(seq__25302_25331__$1);
var G__25333 = cljs.core.chunk_rest(seq__25302_25331__$1);
var G__25334 = c__8484__auto___25332;
var G__25335 = cljs.core.count(c__8484__auto___25332);
var G__25336 = (0);
seq__25302_25319 = G__25333;
chunk__25303_25320 = G__25334;
count__25304_25321 = G__25335;
i__25305_25322 = G__25336;
continue;
} else {
var vec__25309_25337 = cljs.core.first(seq__25302_25331__$1);
var k_25338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25309_25337,(0),null);
var v_25339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25309_25337,(1),null);
form_data.append(cljs.core.name(k_25338),v_25339);

var G__25340 = cljs.core.next(seq__25302_25331__$1);
var G__25341 = null;
var G__25342 = (0);
var G__25343 = (0);
seq__25302_25319 = G__25340;
chunk__25303_25320 = G__25341;
count__25304_25321 = G__25342;
i__25305_25322 = G__25343;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.cljs$core$IFn$_invoke$arity$1(params)], null);
}
}
});})(url_encode))
;
return ((function (url_encode,adaptive_encode){
return (function (uri,method,params){
if(cljs.core.truth_((function (){var fexpr__25314 = ((function (url_encode,adaptive_encode){
return (function (x){
var or__7645__auto__ = (x == null);
if(or__7645__auto__){
return or__7645__auto__;
} else {
var fexpr__25316 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__25316.cljs$core$IFn$_invoke$arity$1 ? fexpr__25316.cljs$core$IFn$_invoke$arity$1(x) : fexpr__25316.call(null,x));
}
});})(url_encode,adaptive_encode))
;
return fexpr__25314(params);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2706,"([:or nil? map?] params)",params,null,null);
}

var G__25317 = method;
var G__25317__$1 = (((G__25317 instanceof cljs.core.Keyword))?G__25317.fqn:null);
switch (G__25317__$1) {
case "get":
return url_encode.cljs$core$IFn$_invoke$arity$2(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25317__$1)].join('')));

}
});
;})(url_encode,adaptive_encode))
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__25346,callback_fn){
var map__25347 = p__25346;
var map__25347__$1 = ((((!((map__25347 == null)))?((((map__25347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25347):map__25347);
var opts = map__25347__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25347__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$get);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25347__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25347__$1,cljs.core.cst$kw$headers);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25347__$1,cljs.core.cst$kw$timeout_DASH_ms,(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25347__$1,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$auto);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25347__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
if(cljs.core.truth_((function (){var fexpr__25351 = ((function (map__25347,map__25347__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (x){
var or__7645__auto__ = (x == null);
if(or__7645__auto__){
return or__7645__auto__;
} else {
var fexpr__25353 = taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_);
return (fexpr__25353.cljs$core$IFn$_invoke$arity$1 ? fexpr__25353.cljs$core$IFn$_invoke$arity$1(x) : fexpr__25353.call(null,x));
}
});})(map__25347,map__25347__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
return fexpr__25351(timeout_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2738,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__23250__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(b2__23250__auto__)){
var xhr = b2__23250__auto__;
try{var timeout_ms__$1 = (function (){var or__7645__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__25359 = method;
var G__25359__$1 = (((G__25359 instanceof cljs.core.Keyword))?G__25359.fqn:null);
switch (G__25359__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25359__$1)].join('')));

}
})();
var vec__25356 = (taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3(uri,method,params) : taoensso.encore.coerce_xhr_params.call(null,uri,method,params));
var xhr_uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25356,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25356,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys(((function (timeout_ms__$1,xhr_method,vec__25356,xhr_uri,xhr__QMARK_data,xhr,b2__23250__auto__,map__25347,map__25347__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (p1__25345_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__25345_SHARP_));
});})(timeout_ms__$1,xhr_method,vec__25356,xhr_uri,xhr__QMARK_data,xhr,b2__23250__auto__,map__25347,map__25347__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
,headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
var G__25360_25379 = xhr;
var G__25361_25380 = G__25360_25379;
var G__25362_25381 = goog.net.EventType.READY;
var G__25363_25382 = ((function (G__25361_25380,G__25362_25381,G__25360_25379,timeout_ms__$1,xhr_method,vec__25356,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__23250__auto__,map__25347,map__25347__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (_){
return cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__25361_25380,G__25362_25381,G__25360_25379,timeout_ms__$1,xhr_method,vec__25356,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__23250__auto__,map__25347,map__25347__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__25361_25380,G__25362_25381,G__25363_25382);

var G__25364_25383 = G__25360_25379;
var G__25365_25384 = goog.net.EventType.COMPLETE;
var G__25366_25385 = ((function (G__25364_25383,G__25365_25384,G__25360_25379,timeout_ms__$1,xhr_method,vec__25356,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__23250__auto__,map__25347,map__25347__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__25367 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,cljs.core.cst$kw$auto))?resp_type:(((_QMARK_content_type == null))?cljs.core.cst$kw$text:(function (){var cts = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type)].join(''));
var match_QMARK_ = ((function (cts,_QMARK_content_type,success_QMARK_,_status,G__25364_25383,G__25365_25384,G__25360_25379,timeout_ms__$1,xhr_method,vec__25356,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__23250__auto__,map__25347,map__25347__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (s){
return taoensso.encore.str_contains_QMARK_(cts,s);
});})(cts,_QMARK_content_type,success_QMARK_,_status,G__25364_25383,G__25365_25384,G__25360_25379,timeout_ms__$1,xhr_method,vec__25356,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__23250__auto__,map__25347,map__25347__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
if(cljs.core.truth_(match_QMARK_("/edn"))){
return cljs.core.cst$kw$edn;
} else {
if(cljs.core.truth_(match_QMARK_("/json"))){
return cljs.core.cst$kw$json;
} else {
if(cljs.core.truth_(match_QMARK_("/xml"))){
return cljs.core.cst$kw$xml;
} else {
return cljs.core.cst$kw$text;
}
}
}
})()));
try{var G__25371 = resp_type__$1;
var G__25371__$1 = (((G__25371 instanceof cljs.core.Keyword))?G__25371.fqn:null);
switch (G__25371__$1) {
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25371__$1)].join('')));

}
}catch (e25370){if((e25370 instanceof Error)){
var _e = e25370;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ajax_SLASH_bad_DASH_response_DASH_type,resp_type__$1,cljs.core.cst$kw$ajax_SLASH_resp_DASH_as_DASH_text,xhr.getResponseText()], null);
} else {
throw e25370;

}
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25367,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25367,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25367,(2),null);
var G__25372 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$raw_DASH_resp,resp,cljs.core.cst$kw$xhr,xhr,cljs.core.cst$kw$success_QMARK_,success_QMARK_,cljs.core.cst$kw$_QMARK_status,_QMARK_status,cljs.core.cst$kw$_QMARK_content_DASH_type,_QMARK_content_type,cljs.core.cst$kw$_QMARK_content,_QMARK_content,cljs.core.cst$kw$_QMARK_error,(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,cljs.core.cst$kw$exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.cst$kw$http_DASH_error,goog.net.ErrorCode.ABORT,cljs.core.cst$kw$abort,goog.net.ErrorCode.TIMEOUT,cljs.core.cst$kw$timeout]),xhr.getLastErrorCode(),cljs.core.cst$kw$unknown)))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__25372) : callback_fn.call(null,G__25372));
});})(G__25364_25383,G__25365_25384,G__25360_25379,timeout_ms__$1,xhr_method,vec__25356,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__23250__auto__,map__25347,map__25347__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__25364_25383,G__25365_25384,G__25366_25385);


var b2__23250__auto___25387__$1 = cljs.core.cst$kw$progress_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__23250__auto___25387__$1)){
var pf_25388 = b2__23250__auto___25387__$1;
var G__25373_25389 = xhr;
var G__25374_25390 = goog.net.EventType.PROGRESS;
var G__25375_25391 = ((function (G__25373_25389,G__25374_25390,pf_25388,b2__23250__auto___25387__$1,timeout_ms__$1,xhr_method,vec__25356,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__23250__auto__,map__25347,map__25347__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__7633__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__7633__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__7633__auto__;
}
})())?(loaded / total):null);
var G__25376 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_ratio,_QMARK_ratio,cljs.core.cst$kw$length_DASH_computable_QMARK_,length_computable_QMARK_,cljs.core.cst$kw$loaded,loaded,cljs.core.cst$kw$total,total,cljs.core.cst$kw$ev,ev], null);
return (pf_25388.cljs$core$IFn$_invoke$arity$1 ? pf_25388.cljs$core$IFn$_invoke$arity$1(G__25376) : pf_25388.call(null,G__25376));
});})(G__25373_25389,G__25374_25390,pf_25388,b2__23250__auto___25387__$1,timeout_ms__$1,xhr_method,vec__25356,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__23250__auto__,map__25347,map__25347__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listen(G__25373_25389,G__25374_25390,G__25375_25391);
} else {
}

xhr.setTimeoutInterval((function (){var or__7645__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e25354){if((e25354 instanceof Error)){
var e = e25354;
cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);

var G__25355_25392 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__25355_25392) : callback_fn.call(null,G__25355_25392));

return null;
} else {
throw e25354;

}
}} else {
var G__25377_25393 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_depleted], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__25377_25393) : callback_fn.call(null,G__25377_25393));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(clojure.string.replace((function (){var G__25394 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
var G__25395 = s;
return encodeURIComponent(G__25394,G__25395);
})(),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25402 = arguments.length;
var i__8815__auto___25403 = (0);
while(true){
if((i__8815__auto___25403 < len__8814__auto___25402)){
args__8821__auto__.push((arguments[i__8815__auto___25403]));

var G__25404 = (i__8815__auto___25403 + (1));
i__8815__auto___25403 = G__25404;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__25398){
var vec__25399 = p__25398;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25399,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq25396){
var G__25397 = cljs.core.first(seq25396);
var seq25396__$1 = cljs.core.next(seq25396);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__25397,seq25396__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode(taoensso.encore.as_qname(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode((function (){var or__7645__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__8453__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__25405(s__25406){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__25406__$1 = s__25406;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25406__$1);
if(temp__4657__auto__){
var s__25406__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25406__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__25406__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__25408 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__25407 = (0);
while(true){
if((i__25407 < size__8452__auto__)){
var vec__25409 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__25407);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25409,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25409,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__25408,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__7645__auto__ = cljs.core.seq(v);
if(or__7645__auto__){
return or__7645__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__25415 = (i__25407 + (1));
i__25407 = G__25415;
continue;
} else {
var G__25416 = (i__25407 + (1));
i__25407 = G__25416;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25408),taoensso$encore$format_query_string_$_iter__25405(cljs.core.chunk_rest(s__25406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25408),null);
}
} else {
var vec__25412 = cljs.core.first(s__25406__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25412,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__7645__auto__ = cljs.core.seq(v);
if(or__7645__auto__){
return or__7645__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__25405(cljs.core.rest(s__25406__$2)));
} else {
var G__25417 = cljs.core.rest(s__25406__$2);
s__25406__$1 = G__25417;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__8453__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__23250__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__23250__auto__)){
var cur = b2__23250__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25427 = arguments.length;
var i__8815__auto___25428 = (0);
while(true){
if((i__8815__auto___25428 < len__8814__auto___25427)){
args__8821__auto__.push((arguments[i__8815__auto___25428]));

var G__25429 = (i__8815__auto___25428 + (1));
i__8815__auto___25428 = G__25429;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__25420){
var vec__25421 = p__25420;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25421,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25421,(1),null);
if((clojure.string.blank_QMARK_(s)) || (!(taoensso.encore.str_contains_QMARK_(s,"=")))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__$1,vec__25421,keywordize_QMARK_,encoding){
return (function (m,param){
var b2__23250__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__23250__auto__)){
var vec__25424 = b2__23250__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25424,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25424,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)));
} else {
return m;
}
});})(s__$1,vec__25421,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
}
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq25418){
var G__25419 = cljs.core.first(seq25418);
var seq25418__$1 = cljs.core.next(seq25418);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__25419,seq25418__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__25430 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25430,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25430,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__23250__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__23250__auto__)){
var qstr = b2__23250__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_((function() { 
var G__25433__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Attempting to call uninitialized stub fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stub,name,cljs.core.cst$kw$args,args], null));
};
var G__25433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25434__i = 0, G__25434__a = new Array(arguments.length -  0);
while (G__25434__i < G__25434__a.length) {G__25434__a[G__25434__i] = arguments[G__25434__i + 0]; ++G__25434__i;}
  args = new cljs.core.IndexedSeq(G__25434__a,0,null);
} 
return G__25433__delegate.call(this,args);};
G__25433.cljs$lang$maxFixedArity = 0;
G__25433.cljs$lang$applyTo = (function (arglist__25435){
var args = cljs.core.seq(arglist__25435);
return G__25433__delegate(args);
});
G__25433.cljs$core$IFn$_invoke$arity$variadic = G__25433__delegate;
return G__25433;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_(f)){
return f;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,f,cljs.core.cst$kw$type,cljs.core.type(f)], null));
}
});
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.encore.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_(x)){
return (function (ns_str){
return cljs.core.re_find(x,ns_str);
});
} else {
if(typeof x === 'string'){
if(taoensso.encore.str_contains_QMARK_(x,"*")){
var re = cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"$"].join(''),".","\\."),"*","(.*)"));
return ((function (re){
return (function (ns_str){
return cljs.core.re_find(re,ns_str);
});
;})(re))
} else {
return (function (ns_str){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_str,x);
});
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
}
});
return ((function (compile1){
return (function() {
var taoensso$encore$self = null;
var taoensso$encore$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_(x)){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$whitelist.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$blacklist.cljs$core$IFn$_invoke$arity$1(x));
} else {
if((cljs.core.vector_QMARK_(x)) || (cljs.core.set_QMARK_(x))){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(x,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"*")){
return ((function (x,compile1){
return (function (_QMARK_ns){
return true;
});
;})(x,compile1))
} else {
var match_QMARK_ = compile1(x);
return ((function (match_QMARK_,x,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__25438 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? match_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25438) : match_QMARK_.call(null,G__25438));
})())){
return true;
} else {
return null;
}
});
;})(match_QMARK_,x,compile1))
}
}
}
});
var taoensso$encore$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq(whitelist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,whitelist);
var vec__25439 = match_fns;
var seq__25440 = cljs.core.seq(vec__25439);
var first__25441 = cljs.core.first(seq__25440);
var seq__25440__$1 = cljs.core.next(seq__25440);
var m1 = first__25441;
var mn = seq__25440__$1;
if(mn){
return ((function (match_fns,vec__25439,seq__25440,first__25441,seq__25440__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome(((function (match_fns,vec__25439,seq__25440,first__25441,seq__25440__$1,m1,mn,compile1){
return (function (p1__25436_SHARP_){
return (p1__25436_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25436_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__25436_SHARP_.call(null,ns_str));
});})(match_fns,vec__25439,seq__25440,first__25441,seq__25440__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__25439,seq__25440,first__25441,seq__25440__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__25439,seq__25440,first__25441,seq__25440__$1,m1,mn,compile1){
return (function (ns_str){
return (m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str));
});
;})(match_fns,vec__25439,seq__25440,first__25441,seq__25440__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq(blacklist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,blacklist);
var vec__25442 = match_fns;
var seq__25443 = cljs.core.seq(vec__25442);
var first__25444 = cljs.core.first(seq__25443);
var seq__25443__$1 = cljs.core.next(seq__25443);
var m1 = first__25444;
var mn = seq__25443__$1;
if(mn){
return ((function (match_fns,vec__25442,seq__25443,first__25444,seq__25443__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not(taoensso.encore.rsome(((function (match_fns,vec__25442,seq__25443,first__25444,seq__25443__$1,m1,mn,white,compile1){
return (function (p1__25437_SHARP_){
return (p1__25437_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25437_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__25437_SHARP_.call(null,ns_str));
});})(match_fns,vec__25442,seq__25443,first__25444,seq__25443__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__25442,seq__25443,first__25444,seq__25443__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__25442,seq__25443,first__25444,seq__25443__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not((m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str)));
});
;})(match_fns,vec__25442,seq__25443,first__25444,seq__25443__$1,m1,mn,white,compile1))
}
})():null);
if(cljs.core.truth_((function (){var and__7633__auto__ = white;
if(cljs.core.truth_(and__7633__auto__)){
return black;
} else {
return and__7633__auto__;
}
})())){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
var ns_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
if(cljs.core.truth_((white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(ns_str) : white.call(null,ns_str)))){
if(cljs.core.truth_((black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(ns_str) : black.call(null,ns_str)))){
return true;
} else {
return null;
}
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(white)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__25445 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(G__25445) : white.call(null,G__25445));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(black)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__25446 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(G__25446) : black.call(null,G__25446));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
return ((function (white,black,compile1){
return (function (_QMARK_ns){
return true;
});
;})(white,black,compile1))
}
}
}
});
taoensso$encore$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$encore$self__1.call(this,whitelist);
case 2:
return taoensso$encore$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$self.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$self__1;
taoensso$encore$self.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$self__2;
return taoensso$encore$self;
})()
;})(compile1))
})();

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
var x__8328__auto__ = (((_ == null))?null:_);
var m__8329__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__8329__auto__.call(null,_,msecs,f));
} else {
var m__8329__auto____$1 = (taoensso.encore._schedule_timeout["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__8329__auto____$1.call(null,_,msecs,f));
} else {
throw cljs.core.missing_protocol("ITimeoutImpl.-schedule-timeout",_);
}
}
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
});

taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true;

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl";

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"taoensso.encore/DefaultTimeoutImpl");
});

taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if(typeof taoensso.encore.default_timeout_impl_ !== 'undefined'){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = {};

taoensso.encore._tout_cancelled = {};

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_pending) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending)))){
return cljs.core.cst$kw$timeout_SLASH_pending;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_cancelled) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled)))){
return cljs.core.cst$kw$timeout_SLASH_cancelled;
} else {
return cljs.core.deref(result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
var x__8328__auto__ = (((_ == null))?null:_);
var m__8329__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto__.call(null,_));
} else {
var m__8329__auto____$1 = (taoensso.encore.tf_state["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-state",_);
}
}
}
});

/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
var x__8328__auto__ = (((_ == null))?null:_);
var m__8329__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto__.call(null,_));
} else {
var m__8329__auto____$1 = (taoensso.encore.tf_poll["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-poll",_);
}
}
}
});

/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
var x__8328__auto__ = (((_ == null))?null:_);
var m__8329__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto__.call(null,_));
} else {
var m__8329__auto____$1 = (taoensso.encore.tf_done_QMARK_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-done?",_);
}
}
}
});

/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
var x__8328__auto__ = (((_ == null))?null:_);
var m__8329__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto__.call(null,_));
} else {
var m__8329__auto____$1 = (taoensso.encore.tf_pending_QMARK_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-pending?",_);
}
}
}
});

/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
var x__8328__auto__ = (((_ == null))?null:_);
var m__8329__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto__.call(null,_));
} else {
var m__8329__auto____$1 = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancelled?",_);
}
}
}
});

/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
var x__8328__auto__ = (((_ == null))?null:_);
var m__8329__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto__.call(null,_));
} else {
var m__8329__auto____$1 = (taoensso.encore.tf_cancel_BANG_["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8329__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancel!",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,self__.f,cljs.core.cst$kw$udt,self__.udt], null);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result(cljs.core.deref(self__.result__));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not((function (){var G__25451 = cljs.core.deref(self__.result__);
var G__25452 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25451,G__25452) : taoensso.encore.kw_identical_QMARK_.call(null,G__25451,G__25452));
})());
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__25453 = cljs.core.deref(self__.result__);
var G__25454 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25453,G__25454) : taoensso.encore.kw_identical_QMARK_.call(null,G__25453,G__25454));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__25455 = cljs.core.deref(self__.result__);
var G__25456 = taoensso.encore._tout_cancelled;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25455,G__25456) : taoensso.encore.kw_identical_QMARK_.call(null,G__25455,G__25456));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_(self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(null);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(null);
});

taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$result__,cljs.core.cst$sym$udt], null);
});

taoensso.encore.TimeoutFuture.cljs$lang$type = true;

taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture";

taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__8270__auto__,writer__8271__auto__,opt__8272__auto__){
return cljs.core._write(writer__8271__auto__,"taoensso.encore/TimeoutFuture");
});

taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__25458 = arguments.length;
switch (G__25458) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3(taoensso.encore.default_timeout_impl_,msecs,f);
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$(msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(taoensso.encore._tout_pending);
var cas_f = ((function (msecs__$1,udt,result__){
return (function (){
var result_ = (new cljs.core.Delay(((function (msecs__$1,udt,result__){
return (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(msecs__$1,udt,result__))
,null));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(result__,taoensso.encore._tout_pending,result_))){
return cljs.core.deref(result_);
} else {
return null;
}
});})(msecs__$1,udt,result__))
;
var impl_25460 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_25460,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3;

taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__25462){
var map__25463 = p__25462;
var map__25463__$1 = ((((!((map__25463 == null)))?((((map__25463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25463):map__25463);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25463__$1,cljs.core.cst$kw$before,cljs.core.cst$sym$do);
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25463__$1,cljs.core.cst$kw$after,cljs.core.cst$sym$do);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__8507__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__25461__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__8507__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8507__auto__ = before;
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto__);
})(),(function (){var x__8507__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__25461__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto__);
})(),(function (){var x__8507__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8507__auto__ = after;
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8507__auto__);
})()], 0))));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25591 = arguments.length;
var i__8815__auto___25592 = (0);
while(true){
if((i__8815__auto___25592 < len__8814__auto___25591)){
args__8821__auto__.push((arguments[i__8815__auto___25592]));

var G__25593 = (i__8815__auto___25592 + (1));
i__8815__auto___25592 = G__25593;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__25471){
var vec__25472 = p__25471;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25472,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25472,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__7645__auto__ = type;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.cst$kw$round;
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq25469){
var G__25470 = cljs.core.first(seq25469);
var seq25469__$1 = cljs.core.next(seq25469);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__25470,seq25469__$1);
});


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__25476 = arguments.length;
switch (G__25476) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3(signf,x,y);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25595 = arguments.length;
var i__8815__auto___25596 = (0);
while(true){
if((i__8815__auto___25596 < len__8814__auto___25595)){
args__8821__auto__.push((arguments[i__8815__auto___25596]));

var G__25597 = (i__8815__auto___25596 + (1));
i__8815__auto___25596 = G__25597;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq25477){
var G__25478 = cljs.core.first(seq25477);
var seq25477__$1 = cljs.core.next(seq25477);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__25478,seq25477__$1);
});


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome((function (p__25479){
var vec__25480 = p__25479;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25480,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25480,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25480,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter(specs);
return ((function (ids_QMARK_,lfn){
return (function() { 
var G__25598__delegate = function (args){
var b2__23250__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lfn,args);
if(cljs.core.truth_(b2__23250__auto__)){
var vec__25483 = b2__23250__auto__;
var worst_sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25483,(0),null);
var backoff_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25483,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__25598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25599__i = 0, G__25599__a = new Array(arguments.length -  0);
while (G__25599__i < G__25599__a.length) {G__25599__a[G__25599__i] = arguments[G__25599__i + 0]; ++G__25599__i;}
  args = new cljs.core.IndexedSeq(G__25599__a,0,null);
} 
return G__25598__delegate.call(this,args);};
G__25598.cljs$lang$maxFixedArity = 0;
G__25598.cljs$lang$applyTo = (function (arglist__25600){
var args = cljs.core.seq(arglist__25600);
return G__25598__delegate(args);
});
G__25598.cljs$core$IFn$_invoke$arity$variadic = G__25598__delegate;
return G__25598;
})()
;
;})(ids_QMARK_,lfn))
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return ((function (rl){
return (function() { 
var G__25601__delegate = function (args){
var b2__23250__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__23250__auto__)){
var backoff = b2__23250__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
var G__25601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25602__i = 0, G__25602__a = new Array(arguments.length -  0);
while (G__25602__i < G__25602__a.length) {G__25602__a[G__25602__i] = arguments[G__25602__i + 0]; ++G__25602__i;}
  args = new cljs.core.IndexedSeq(G__25602__a,0,null);
} 
return G__25601__delegate.call(this,args);};
G__25601.cljs$lang$maxFixedArity = 0;
G__25601.cljs$lang$applyTo = (function (arglist__25603){
var args = cljs.core.seq(arglist__25603);
return G__25601__delegate(args);
});
G__25601.cljs$core$IFn$_invoke$arity$variadic = G__25601__delegate;
return G__25601;
})()
;
;})(rl))
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__25604__delegate = function (args){
var b2__23250__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__23250__auto__)){
var backoff_ms = b2__23250__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backoff_DASH_ms,backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
var G__25604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25605__i = 0, G__25605__a = new Array(arguments.length -  0);
while (G__25605__i < G__25605__a.length) {G__25605__a[G__25605__i] = arguments[G__25605__i + 0]; ++G__25605__i;}
  args = new cljs.core.IndexedSeq(G__25605__a,0,null);
} 
return G__25604__delegate.call(this,args);};
G__25604.cljs$lang$maxFixedArity = 0;
G__25604.cljs$lang$applyTo = (function (arglist__25606){
var args = cljs.core.seq(arglist__25606);
return G__25604__delegate(args);
});
G__25604.cljs$core$IFn$_invoke$arity$variadic = G__25604__delegate;
return G__25604;
})()
;
;})(rl))
});

taoensso.encore.logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug);

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25607 = arguments.length;
var i__8815__auto___25608 = (0);
while(true){
if((i__8815__auto___25608 < len__8814__auto___25607)){
args__8821__auto__.push((arguments[i__8815__auto___25608]));

var G__25609 = (i__8815__auto___25608 + (1));
i__8815__auto___25608 = G__25609;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__25488){
var vec__25489 = p__25488;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25489,(0),null);
var b2__23250__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__23250__auto__)){
var js_win = b2__23250__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__7645__auto__ = nattempt;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq25486){
var G__25487 = cljs.core.first(seq25486);
var seq25486__$1 = cljs.core.next(seq25486);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25487,seq25486__$1);
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = cljs.core.cst$kw$debug;
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$trace,(1),cljs.core.cst$kw$debug,(2),cljs.core.cst$kw$info,(3),cljs.core.cst$kw$warn,(4),cljs.core.cst$kw$error,(5),cljs.core.cst$kw$fatal,(6),cljs.core.cst$kw$report,(7)], null);
return ((function (__GT_n){
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25610 = arguments.length;
var i__8815__auto___25611 = (0);
while(true){
if((i__8815__auto___25611 < len__8814__auto___25610)){
args__8821__auto__.push((arguments[i__8815__auto___25611]));

var G__25612 = (i__8815__auto___25611 + (1));
i__8815__auto___25611 = G__25612;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__25494 = cljs.core.cst$kw$trace;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25494) : taoensso.encore.log_QMARK_.call(null,G__25494));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq25492){
var G__25493 = cljs.core.first(seq25492);
var seq25492__$1 = cljs.core.next(seq25492);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__25493,seq25492__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25613 = arguments.length;
var i__8815__auto___25614 = (0);
while(true){
if((i__8815__auto___25614 < len__8814__auto___25613)){
args__8821__auto__.push((arguments[i__8815__auto___25614]));

var G__25615 = (i__8815__auto___25614 + (1));
i__8815__auto___25614 = G__25615;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__25497 = cljs.core.cst$kw$debug;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25497) : taoensso.encore.log_QMARK_.call(null,G__25497));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq25495){
var G__25496 = cljs.core.first(seq25495);
var seq25495__$1 = cljs.core.next(seq25495);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__25496,seq25495__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25616 = arguments.length;
var i__8815__auto___25617 = (0);
while(true){
if((i__8815__auto___25617 < len__8814__auto___25616)){
args__8821__auto__.push((arguments[i__8815__auto___25617]));

var G__25618 = (i__8815__auto___25617 + (1));
i__8815__auto___25617 = G__25618;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__25500 = cljs.core.cst$kw$info;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25500) : taoensso.encore.log_QMARK_.call(null,G__25500));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq25498){
var G__25499 = cljs.core.first(seq25498);
var seq25498__$1 = cljs.core.next(seq25498);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__25499,seq25498__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25619 = arguments.length;
var i__8815__auto___25620 = (0);
while(true){
if((i__8815__auto___25620 < len__8814__auto___25619)){
args__8821__auto__.push((arguments[i__8815__auto___25620]));

var G__25621 = (i__8815__auto___25620 + (1));
i__8815__auto___25620 = G__25621;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__25503 = cljs.core.cst$kw$warn;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25503) : taoensso.encore.log_QMARK_.call(null,G__25503));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq25501){
var G__25502 = cljs.core.first(seq25501);
var seq25501__$1 = cljs.core.next(seq25501);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__25502,seq25501__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25622 = arguments.length;
var i__8815__auto___25623 = (0);
while(true){
if((i__8815__auto___25623 < len__8814__auto___25622)){
args__8821__auto__.push((arguments[i__8815__auto___25623]));

var G__25624 = (i__8815__auto___25623 + (1));
i__8815__auto___25623 = G__25624;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__25506 = cljs.core.cst$kw$error;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25506) : taoensso.encore.log_QMARK_.call(null,G__25506));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq25504){
var G__25505 = cljs.core.first(seq25504);
var seq25504__$1 = cljs.core.next(seq25504);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__25505,seq25504__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25625 = arguments.length;
var i__8815__auto___25626 = (0);
while(true){
if((i__8815__auto___25626 < len__8814__auto___25625)){
args__8821__auto__.push((arguments[i__8815__auto___25626]));

var G__25627 = (i__8815__auto___25626 + (1));
i__8815__auto___25626 = G__25627;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__25509 = cljs.core.cst$kw$fatal;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25509) : taoensso.encore.log_QMARK_.call(null,G__25509));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq25507){
var G__25508 = cljs.core.first(seq25507);
var seq25507__$1 = cljs.core.next(seq25507);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__25508,seq25507__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25628 = arguments.length;
var i__8815__auto___25629 = (0);
while(true){
if((i__8815__auto___25629 < len__8814__auto___25628)){
args__8821__auto__.push((arguments[i__8815__auto___25629]));

var G__25630 = (i__8815__auto___25629 + (1));
i__8815__auto___25629 = G__25630;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__25512 = cljs.core.cst$kw$report;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25512) : taoensso.encore.log_QMARK_.call(null,G__25512));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq25510){
var G__25511 = cljs.core.first(seq25510);
var seq25510__$1 = cljs.core.next(seq25510);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__25511,seq25510__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25631 = arguments.length;
var i__8815__auto___25632 = (0);
while(true){
if((i__8815__auto___25632 < len__8814__auto___25631)){
args__8821__auto__.push((arguments[i__8815__auto___25632]));

var G__25633 = (i__8815__auto___25632 + (1));
i__8815__auto___25632 = G__25633;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__25515){
var vec__25516 = p__25515;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25516,(0),null);
var comparator = (function (){var or__7645__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__25516,_QMARK_comparator){
return (function (p1__25465_SHARP_,p2__25466_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__25465_SHARP_,p2__25466_SHARP_) : comparator.call(null,p1__25465_SHARP_,p2__25466_SHARP_)) > (0))){
return p2__25466_SHARP_;
} else {
return p1__25465_SHARP_;
}
});})(comparator,vec__25516,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq25513){
var G__25514 = cljs.core.first(seq25513);
var seq25513__$1 = cljs.core.next(seq25513);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__25514,seq25513__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25634 = arguments.length;
var i__8815__auto___25635 = (0);
while(true){
if((i__8815__auto___25635 < len__8814__auto___25634)){
args__8821__auto__.push((arguments[i__8815__auto___25635]));

var G__25636 = (i__8815__auto___25635 + (1));
i__8815__auto___25635 = G__25636;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__25521){
var vec__25522 = p__25521;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25522,(0),null);
var comparator = (function (){var or__7645__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__25522,_QMARK_comparator){
return (function (p1__25467_SHARP_,p2__25468_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__25467_SHARP_,p2__25468_SHARP_) : comparator.call(null,p1__25467_SHARP_,p2__25468_SHARP_)) < (0))){
return p2__25468_SHARP_;
} else {
return p1__25467_SHARP_;
}
});})(comparator,vec__25522,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq25519){
var G__25520 = cljs.core.first(seq25519);
var seq25519__$1 = cljs.core.next(seq25519);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__25520,seq25519__$1);
});


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__7645__auto__ = x;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__25529 = (function (p__25530,seen__$1){
while(true){
var vec__25531 = p__25530;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25531,(0),null);
var xs__$1 = vec__25531;
var b2__23250__auto__ = cljs.core.seq(xs__$1);
if(b2__23250__auto__){
var s = b2__23250__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__25637 = cljs.core.rest(s);
var G__25638 = seen__$1;
p__25530 = G__25637;
seen__$1 = G__25638;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
});
return fexpr__25529(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__25535 = arguments.length;
switch (G__25535) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__25536,in$){
var vec__25537 = p__25536;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25537,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25537,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_((function (){var G__25540 = kf;
var G__25541 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25540,G__25541) : taoensso.encore.kw_identical_QMARK_.call(null,G__25540,G__25541));
})())?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25640 = arguments.length;
var i__8815__auto___25641 = (0);
while(true){
if((i__8815__auto___25641 < len__8814__auto___25640)){
args__8821__auto__.push((arguments[i__8815__auto___25641]));

var G__25642 = (i__8815__auto___25641 + (1));
i__8815__auto___25641 = G__25642;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__25544){
var vec__25545 = p__25544;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25545,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25545,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__25545,kf,vf){
return (function (_,v){
return v;
});})(vec__25545,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__25545,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__25545,kf,vf))
:(cljs.core.truth_((function (){var G__25548 = kf;
var G__25549 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25548,G__25549) : taoensso.encore.kw_identical_QMARK_.call(null,G__25548,G__25549));
})())?((function (vf__$1,vec__25545,kf,vf){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1,vec__25545,kf,vf))
:kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs(((function (vf__$1,kf__$1,vec__25545,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1,vec__25545,kf,vf))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq25542){
var G__25543 = cljs.core.first(seq25542);
var seq25542__$1 = cljs.core.next(seq25542);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__25543,seq25542__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25643 = arguments.length;
var i__8815__auto___25644 = (0);
while(true){
if((i__8815__auto___25644 < len__8814__auto___25643)){
args__8821__auto__.push((arguments[i__8815__auto___25644]));

var G__25645 = (i__8815__auto___25644 + (1));
i__8815__auto___25644 = G__25645;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((2) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8822__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref(taoensso.encore._swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
})));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq25550){
var G__25551 = cljs.core.first(seq25550);
var seq25550__$1 = cljs.core.next(seq25550);
var G__25552 = cljs.core.first(seq25550__$1);
var seq25550__$2 = cljs.core.next(seq25550__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__25551,G__25552,seq25550__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__8002__auto__ = signed_idx;
var y__8003__auto__ = max_idx;
return ((x__8002__auto__ < y__8003__auto__) ? x__8002__auto__ : y__8003__auto__);
} else {
var x__7995__auto__ = (0);
var y__7996__auto__ = (signed_idx + max_idx);
return ((x__7995__auto__ > y__7996__auto__) ? x__7995__auto__ : y__7996__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25646 = arguments.length;
var i__8815__auto___25647 = (0);
while(true){
if((i__8815__auto___25647 < len__8814__auto___25646)){
args__8821__auto__.push((arguments[i__8815__auto___25647]));

var G__25648 = (i__8815__auto___25647 + (1));
i__8815__auto___25647 = G__25648;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((2) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8822__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__25556){
var map__25557 = p__25556;
var map__25557__$1 = ((((!((map__25557 == null)))?((((map__25557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25557):map__25557);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25557__$1,cljs.core.cst$kw$max_DASH_len);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25557__$1,cljs.core.cst$kw$end_DASH_idx);
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__23689__auto__ = (start_idx_STAR_ + max_len);
var n2__23690__auto__ = xlen;
if((n1__23689__auto__ > n2__23690__auto__)){
return n2__23690__auto__;
} else {
return n1__23689__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq25553){
var G__25554 = cljs.core.first(seq25553);
var seq25553__$1 = cljs.core.next(seq25553);
var G__25555 = cljs.core.first(seq25553__$1);
var seq25553__$2 = cljs.core.next(seq25553__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__25554,G__25555,seq25553__$2);
});


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25649 = arguments.length;
var i__8815__auto___25650 = (0);
while(true){
if((i__8815__auto___25650 < len__8814__auto___25649)){
args__8821__auto__.push((arguments[i__8815__auto___25650]));

var G__25651 = (i__8815__auto___25650 + (1));
i__8815__auto___25650 = G__25651;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((2) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8822__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__25562){
var vec__25563 = p__25562;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25563,(0),null);
var vec__25566 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25566,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25566,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq25559){
var G__25560 = cljs.core.first(seq25559);
var seq25559__$1 = cljs.core.next(seq25559);
var G__25561 = cljs.core.first(seq25559__$1);
var seq25559__$2 = cljs.core.next(seq25559__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__25560,G__25561,seq25559__$2);
});



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25652 = arguments.length;
var i__8815__auto___25653 = (0);
while(true){
if((i__8815__auto___25653 < len__8814__auto___25652)){
args__8821__auto__.push((arguments[i__8815__auto___25653]));

var G__25654 = (i__8815__auto___25653 + (1));
i__8815__auto___25653 = G__25654;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((2) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8822__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__25572){
var vec__25573 = p__25572;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25573,(0),null);
var vec__25576 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25576,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25576,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq25569){
var G__25570 = cljs.core.first(seq25569);
var seq25569__$1 = cljs.core.next(seq25569);
var G__25571 = cljs.core.first(seq25569__$1);
var seq25569__$2 = cljs.core.next(seq25569__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__25570,G__25571,seq25569__$2);
});


taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_(x))){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_(coll))){
var vec__25581 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25581,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__25655 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__25656 = cljs.core.next(ks__$1);
var G__25657 = cljs.core.next(vs__$1);
m = G__25655;
ks__$1 = G__25656;
vs__$1 = G__25657;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__8821__auto__ = [];
var len__8814__auto___25658 = arguments.length;
var i__8815__auto___25659 = (0);
while(true){
if((i__8815__auto___25659 < len__8814__auto___25658)){
args__8821__auto__.push((arguments[i__8815__auto___25659]));

var G__25660 = (i__8815__auto___25659 + (1));
i__8815__auto___25659 = G__25660;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__25586 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25586,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25586,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25586,(2),null);
var f = (cljs.core.truth_((function (){var G__25589 = type;
var G__25590 = cljs.core.cst$kw$reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__25589,G__25590) : taoensso.encore.kw_identical_QMARK_.call(null,G__25589,G__25590));
})())?((function (vec__25586,type,ks,valf){
return (function (_){
return valf;
});})(vec__25586,type,ks,valf))
:valf);
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq25584){
var G__25585 = cljs.core.first(seq25584);
var seq25584__$1 = cljs.core.next(seq25584);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__25585,seq25584__$1);
});

