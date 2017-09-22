// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__23324){
var vec__23325 = p__23324;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__23328 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23328,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23328,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23328,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__23332 = arguments.length;
switch (G__23332) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__7995__auto__ = cljs.core.count(a);
var y__7996__auto__ = cljs.core.count(b);
return ((x__7995__auto__ > y__7996__auto__) ? x__7995__auto__ : y__7996__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__8328__auto__ = (((x == null))?null:x);
var m__8329__auto__ = (clojure.data.equality_partition[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__8329__auto__.call(null,x));
} else {
var m__8329__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__8329__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__8328__auto__ = (((a == null))?null:a);
var m__8329__auto__ = (clojure.data.diff_similar[goog.typeOf(x__8328__auto__)]);
if(!((m__8329__auto__ == null))){
return (m__8329__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__8329__auto__.call(null,a,b));
} else {
var m__8329__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__8329__auto____$1 == null))){
return (m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8329__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__8329__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__23334_23358 = clojure.data.equality_partition;
var G__23335_23359 = "null";
var G__23336_23360 = ((function (G__23334_23358,G__23335_23359){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__23334_23358,G__23335_23359))
;
goog.object.set(G__23334_23358,G__23335_23359,G__23336_23360);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__23337_23361 = clojure.data.equality_partition;
var G__23338_23362 = "string";
var G__23339_23363 = ((function (G__23337_23361,G__23338_23362){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__23337_23361,G__23338_23362))
;
goog.object.set(G__23337_23361,G__23338_23362,G__23339_23363);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__23340_23364 = clojure.data.equality_partition;
var G__23341_23365 = "number";
var G__23342_23366 = ((function (G__23340_23364,G__23341_23365){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__23340_23364,G__23341_23365))
;
goog.object.set(G__23340_23364,G__23341_23365,G__23342_23366);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__23343_23367 = clojure.data.equality_partition;
var G__23344_23368 = "array";
var G__23345_23369 = ((function (G__23343_23367,G__23344_23368){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__23343_23367,G__23344_23368))
;
goog.object.set(G__23343_23367,G__23344_23368,G__23345_23369);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__23346_23370 = clojure.data.equality_partition;
var G__23347_23371 = "function";
var G__23348_23372 = ((function (G__23346_23370,G__23347_23371){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__23346_23370,G__23347_23371))
;
goog.object.set(G__23346_23370,G__23347_23371,G__23348_23372);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__23349_23373 = clojure.data.equality_partition;
var G__23350_23374 = "boolean";
var G__23351_23375 = ((function (G__23349_23373,G__23350_23374){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__23349_23373,G__23350_23374))
;
goog.object.set(G__23349_23373,G__23350_23374,G__23351_23375);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__23352_23376 = clojure.data.equality_partition;
var G__23353_23377 = "_";
var G__23354_23378 = ((function (G__23352_23376,G__23353_23377){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__23352_23376,G__23353_23377))
;
goog.object.set(G__23352_23376,G__23353_23377,G__23354_23378);
goog.object.set(clojure.data.Diff,"null",true);

var G__23379_23403 = clojure.data.diff_similar;
var G__23380_23404 = "null";
var G__23381_23405 = ((function (G__23379_23403,G__23380_23404){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__23379_23403,G__23380_23404))
;
goog.object.set(G__23379_23403,G__23380_23404,G__23381_23405);

goog.object.set(clojure.data.Diff,"string",true);

var G__23382_23406 = clojure.data.diff_similar;
var G__23383_23407 = "string";
var G__23384_23408 = ((function (G__23382_23406,G__23383_23407){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__23382_23406,G__23383_23407))
;
goog.object.set(G__23382_23406,G__23383_23407,G__23384_23408);

goog.object.set(clojure.data.Diff,"number",true);

var G__23385_23409 = clojure.data.diff_similar;
var G__23386_23410 = "number";
var G__23387_23411 = ((function (G__23385_23409,G__23386_23410){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__23385_23409,G__23386_23410))
;
goog.object.set(G__23385_23409,G__23386_23410,G__23387_23411);

goog.object.set(clojure.data.Diff,"array",true);

var G__23388_23412 = clojure.data.diff_similar;
var G__23389_23413 = "array";
var G__23390_23414 = ((function (G__23388_23412,G__23389_23413){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__23388_23412,G__23389_23413))
;
goog.object.set(G__23388_23412,G__23389_23413,G__23390_23414);

goog.object.set(clojure.data.Diff,"function",true);

var G__23391_23415 = clojure.data.diff_similar;
var G__23392_23416 = "function";
var G__23393_23417 = ((function (G__23391_23415,G__23392_23416){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__23391_23415,G__23392_23416))
;
goog.object.set(G__23391_23415,G__23392_23416,G__23393_23417);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__23394_23418 = clojure.data.diff_similar;
var G__23395_23419 = "boolean";
var G__23396_23420 = ((function (G__23394_23418,G__23395_23419){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__23394_23418,G__23395_23419))
;
goog.object.set(G__23394_23418,G__23395_23419,G__23396_23420);

goog.object.set(clojure.data.Diff,"_",true);

var G__23397_23421 = clojure.data.diff_similar;
var G__23398_23422 = "_";
var G__23399_23423 = ((function (G__23397_23421,G__23398_23422){
return (function (a,b){
var fexpr__23401 = (function (){var G__23402 = clojure.data.equality_partition(a);
var G__23402__$1 = (((G__23402 instanceof cljs.core.Keyword))?G__23402.fqn:null);
switch (G__23402__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23402__$1)].join('')));

}
})();
return (fexpr__23401.cljs$core$IFn$_invoke$arity$2 ? fexpr__23401.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__23401.call(null,a,b));
});})(G__23397_23421,G__23398_23422))
;
goog.object.set(G__23397_23421,G__23398_23422,G__23399_23423);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
