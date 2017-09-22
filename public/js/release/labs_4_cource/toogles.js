// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('labs_4_cource.toogles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('labs_4_cource.reagent_helpers');
goog.require('labs_4_cource.storage');
labs_4_cource.toogles.toggles = (function labs_4_cource$toogles$toggles(selected,values,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(selected),cljs.core.cst$kw$onChange,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(on_change,cljs.core.keyword,labs_4_cource.reagent_helpers.get_value)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__8453__auto__ = (function labs_4_cource$toogles$toggles_$_iter__23611(s__23612){
return (new cljs.core.LazySeq(null,(function (){
var s__23612__$1 = s__23612;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23612__$1);
if(temp__4657__auto__){
var s__23612__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23612__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__23612__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__23614 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__23613 = (0);
while(true){
if((i__23613 < size__8452__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__23613);
cljs.core.chunk_append(b__23614,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.deref(selected))], null),value], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)));

var G__23615 = (i__23613 + (1));
i__23613 = G__23615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23614),labs_4_cource$toogles$toggles_$_iter__23611(cljs.core.chunk_rest(s__23612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23614),null);
}
} else {
var value = cljs.core.first(s__23612__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.deref(selected))], null),value], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)),labs_4_cource$toogles$toggles_$_iter__23611(cljs.core.rest(s__23612__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__(values);
})())], null);
});
