// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('labs_4_cource.line_examples');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('labs_4_cource.canvas_component');
goog.require('labs_4_cource.reagent_helpers');
goog.require('labs_4_cource.storage');
labs_4_cource.line_examples.sun_lines = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(160),(80)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(160),(65)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(160),(20)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(120),(0)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(0)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(65),(0)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(20)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(65)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(80)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(125)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(160)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(65),(160)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(125),(160)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(145),(160)], null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(80)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(160),(160)], null))], null);
labs_4_cource.line_examples.draw_sun = (function labs_4_cource$line_examples$draw_sun(key){
labs_4_cource.canvas_component.clean_canvas_BANG_();

cljs.core.reset_BANG_(labs_4_cource.storage.sun_line_generator,key);

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));

return cljs.core.reset_BANG_(labs_4_cource.storage.primitives,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23420){
var vec__23421 = p__23420;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23421,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23421,(1),null);
var fexpr__23424 = (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(labs_4_cource.storage.lines_generators) : key.call(null,labs_4_cource.storage.lines_generators));
return (fexpr__23424.cljs$core$IFn$_invoke$arity$2 ? fexpr__23424.cljs$core$IFn$_invoke$arity$2(p1,p2) : fexpr__23424.call(null,p1,p2));
}),labs_4_cource.line_examples.sun_lines)));
});
labs_4_cource.line_examples.draw = (function labs_4_cource$line_examples$draw(){
return labs_4_cource.line_examples.draw_sun(cljs.core.deref(labs_4_cource.storage.sun_line_generator));
});
labs_4_cource.line_examples.sun_lines_component = (function labs_4_cource$line_examples$sun_lines_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref(labs_4_cource.storage.sun_line_generator),cljs.core.cst$kw$onChange,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(labs_4_cource.line_examples.draw_sun,cljs.core.keyword,labs_4_cource.reagent_helpers.get_value)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__8453__auto__ = (function labs_4_cource$line_examples$sun_lines_component_$_iter__23425(s__23426){
return (new cljs.core.LazySeq(null,(function (){
var s__23426__$1 = s__23426;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23426__$1);
if(temp__4657__auto__){
var s__23426__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23426__$2)){
var c__8451__auto__ = cljs.core.chunk_first(s__23426__$2);
var size__8452__auto__ = cljs.core.count(c__8451__auto__);
var b__23428 = cljs.core.chunk_buffer(size__8452__auto__);
if((function (){var i__23427 = (0);
while(true){
if((i__23427 < size__8452__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8451__auto__,i__23427);
cljs.core.chunk_append(b__23428,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null),value], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)));

var G__23429 = (i__23427 + (1));
i__23427 = G__23429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23428),labs_4_cource$line_examples$sun_lines_component_$_iter__23425(cljs.core.chunk_rest(s__23426__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23428),null);
}
} else {
var value = cljs.core.first(s__23426__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null),value], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)),labs_4_cource$line_examples$sun_lines_component_$_iter__23425(cljs.core.rest(s__23426__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__(labs_4_cource.storage.line_types);
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,labs_4_cource.line_examples.draw,cljs.core.cst$kw$disabled,!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(labs_4_cource.storage.debug_state),cljs.core.cst$kw$not))], null),"draw"], null)], null);
});
