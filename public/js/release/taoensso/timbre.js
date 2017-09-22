// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(87),(0)], null));
} else {
taoensso.encore.assert_min_encore_version(2.87);
}
/**
 * Default (fn [data]) -> string output fn.
 *   Use`(partial default-output-fn <opts-map>)` to modify default opts.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var G__26463 = arguments.length;
switch (G__26463) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2(null,data);
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (opts,data){
var map__26464 = opts;
var map__26464__$1 = ((((!((map__26464 == null)))?((((map__26464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26464):map__26464);
var no_stacktrace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26464__$1,cljs.core.cst$kw$no_DASH_stacktrace_QMARK_);
var stacktrace_fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26464__$1,cljs.core.cst$kw$stacktrace_DASH_fonts);
var map__26465 = data;
var map__26465__$1 = ((((!((map__26465 == null)))?((((map__26465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26465):map__26465);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26465__$1,cljs.core.cst$kw$level);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26465__$1,cljs.core.cst$kw$_QMARK_err);
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26465__$1,cljs.core.cst$kw$msg_);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26465__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str);
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26465__$1,cljs.core.cst$kw$_QMARK_file);
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26465__$1,cljs.core.cst$kw$hostname_);
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26465__$1,cljs.core.cst$kw$timestamp_);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26465__$1,cljs.core.cst$kw$_QMARK_line);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(level)))," ","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__7645__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
var or__7645__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__7645__auto____$1)){
return or__7645__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__7645__auto__ = _QMARK_line;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return "?";
}
})()),"] - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__4657__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__4657__auto__)){
var err = temp__4657__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,opts) : taoensso.timbre.stacktrace.call(null,err,opts)))].join('');
} else {
return null;
}
})()))].join('');
});

taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2;


taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Example (+default) Timbre v4 config map.
 * 
 *   APPENDERS
 *  An appender is a map with keys:
 *    :min-level       ; Level keyword, or nil (=> no minimum level)
 *    :enabled?        ;
 *    :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
 *    :rate-limit      ; [[ncalls-limit window-ms] <...>], or nil
 *    :output-fn       ; Optional override for inherited (fn [data]) -> string
 *    :timestamp-opts  ; Optional override for inherited {:pattern _ :locale _ :timezone _} (clj only)
 *    :ns-whitelist    ; Optional, stacks with active config's whitelist
 *    :ns-blacklist    ; Optional, stacks with active config's blacklist
 *    :fn              ; (fn [data]) -> side effects, with keys described below
 * 
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire config map (this map, etc.)
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Keyword
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String,  or nil
 *    :?file           ; String,  or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 *    :?err            ; First-arg platform error, or nil
 *    :vargs           ; Vector of raw args
 *    :output_         ; Forceable - final formatted output string created
 *                     ; by calling (output-fn <this-data-map>)
 *    :msg_            ; Forceable - args as a string
 *    :timestamp_      ; Forceable - string (clj only)
 *    :hostname_       ; Forceable - string (clj only)
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 *    :context         ; *context* value at log time (see `with-context`)
 * 
 *    **NB** - any keys not specifically documented here should be
 *    considered private / subject to change without notice.
 * 
 *   MIDDLEWARE
 *  Middleware are simple (fn [data]) -> ?data fns (applied left->right) that
 *  transform the data map dispatched to appender fns. If any middleware
 *  returns nil, NO dispatch will occur (i.e. the event will be filtered).
 * 
 *   The `example-config` source code contains further settings and details.
 *   See also `set-config!`, `merge-config!`, `set-level!`.
 */
taoensso.timbre.example_config = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$level,cljs.core.cst$kw$debug,cljs.core.cst$kw$ns_DASH_whitelist,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$ns_DASH_blacklist,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$middleware,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn,cljs.core.cst$kw$appenders,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$console,(function (){var G__26469 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1(G__26469) : taoensso.timbre.console_appender.call(null,G__26469));
})()], null)], null);
if(typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined'){
} else {
/**
 * See `example-config` for info.
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.example_config;
}
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__8821__auto__ = [];
var len__8814__auto___26472 = arguments.length;
var i__8815__auto___26473 = (0);
while(true){
if((i__8815__auto___26473 < len__8814__auto___26472)){
args__8821__auto__.push((arguments[i__8815__auto___26473]));

var G__26474 = (i__8815__auto___26473 + (1));
i__8815__auto___26473 = G__26474;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((1) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8822__auto__);
});

taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,taoensso.timbre._STAR_config_STAR_,args);
});

taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq26470){
var G__26471 = cljs.core.first(seq26470);
var seq26470__$1 = cljs.core.next(seq26470);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26471,seq26470__$1);
});

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_((function (_old){
return m;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_((function (old){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old,m], 0));
}));
});
taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$level,level);
}));
});
taoensso.timbre._levels_vec = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null);
taoensso.timbre._levels_set = cljs.core.set(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null));
taoensso.timbre._levels_map = cljs.core.zipmap(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null),cljs.core.next(cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
taoensso.timbre.valid_level_QMARK_ = (function taoensso$timbre$valid_level_QMARK_(x){
if(cljs.core.truth_((taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1(x) : taoensso.timbre._levels_set.call(null,x)))){
return true;
} else {
return false;
}
});
taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
var or__7645__auto__ = (taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_set.cljs$core$IFn$_invoke$arity$1(x) : taoensso.timbre._levels_set.call(null,x));
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid Timbre logging level",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$given,x], null));
}
});
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return ((function (){var G__26475 = taoensso.timbre.valid_level(x);
return (taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1(G__26475) : taoensso.timbre._levels_map.call(null,G__26475));
})() >= (function (){var G__26476 = taoensso.timbre.valid_level(y);
return (taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre._levels_map.cljs$core$IFn$_invoke$arity$1(G__26476) : taoensso.timbre._levels_map.call(null,G__26476));
})());
});
taoensso.timbre._compile_ns_filter = taoensso.encore.memoize_(taoensso.encore.compile_ns_filter);
/**
 * Returns true iff given ns passes white/black lists.
 */
taoensso.timbre.ns_filter = taoensso.encore.memoize_((function (whitelist,blacklist,_QMARK_ns){
var fexpr__26477 = (taoensso.timbre._compile_ns_filter.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre._compile_ns_filter.cljs$core$IFn$_invoke$arity$2(whitelist,blacklist) : taoensso.timbre._compile_ns_filter.call(null,whitelist,blacklist));
return (fexpr__26477.cljs$core$IFn$_invoke$arity$1 ? fexpr__26477.cljs$core$IFn$_invoke$arity$1(_QMARK_ns) : fexpr__26477.call(null,_QMARK_ns));
}));
/**
 * Runtime check: would Timbre currently log at the given logging level?
 *  * `?ns-str` arg required to support ns filtering
 *  * `config`  arg required to support non-global config
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__26479 = arguments.length;
switch (G__26479) {
case 1:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,null,null);
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,_QMARK_ns_str,null);
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__7645__auto__ = _QMARK_config;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$level,cljs.core.cst$kw$report);
var and__7633__auto__ = taoensso.timbre.level_GT__EQ_(level,min_level);
if(cljs.core.truth_(and__7633__auto__)){
return (cljs.core.boolean$((function (){var G__26483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_whitelist);
var G__26484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_blacklist);
var G__26485 = _QMARK_ns_str;
return (taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3 ? taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3(G__26483,G__26484,G__26485) : taoensso.timbre.ns_filter.call(null,G__26483,G__26484,G__26485));
})())) && (true);
} else {
return and__7633__auto__;
}
});

taoensso.timbre.may_log_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.timbre.str_join = (function taoensso$timbre$str_join(xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var x__$1 = taoensso.encore.nil__GT_str(x);
if(cljs.core.record_QMARK_(x__$1)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1], 0));
} else {
return x__$1;

}
})),xs);
});
if(typeof taoensso.timbre.get_rate_limiter !== 'undefined'){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.memoize_((function (appender_id,specs){
return taoensso.encore.limiter(specs);
}));
}
/**
 * General-purpose dynamic logging context
 */
taoensso.timbre._STAR_context_STAR_ = null;
taoensso.timbre.vrest = (function taoensso$timbre$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = (function (){var G__26490 = _QMARK_err;
var G__26491 = cljs.core.cst$kw$auto;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26490,G__26491) : taoensso.encore.kw_identical_QMARK_.call(null,G__26490,G__26491));
})();
var fmt_msg_QMARK_ = (function (){var G__26492 = msg_type;
var G__26493 = cljs.core.cst$kw$f;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26492,G__26493) : taoensso.encore.kw_identical_QMARK_.call(null,G__26492,G__26493));
})();
var vec__26487 = vargs;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26487,(0),null);
if(cljs.core.truth_((function (){var and__7633__auto__ = auto_error_QMARK_;
if(cljs.core.truth_(and__7633__auto__)){
return taoensso.encore.error_QMARK_(v0);
} else {
return and__7633__auto__;
}
})())){
var _QMARK_err__$1 = v0;
var _QMARK_meta = null;
var vargs__$1 = taoensso.timbre.vrest(vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__26494 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26494,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.timbre.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta,_QMARK_msg_fmt,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.map_QMARK_(v0);
if(and__7633__auto__){
return cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v0));
} else {
return and__7633__auto__;
}
})())?v0:null);
var _QMARK_err__$1 = (function (){var or__7645__auto__ = cljs.core.cst$kw$err.cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
if(cljs.core.truth_(auto_error_QMARK_)){
return null;
} else {
return _QMARK_err;
}
}
})();
var _QMARK_meta__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_meta,cljs.core.cst$kw$err);
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.timbre.vrest(vargs):vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__26497 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26497,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.timbre.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var G__26501 = arguments.length;
switch (G__26501) {
case 9:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null);
});

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
if(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3(level,_QMARK_ns_str,config)){
var instant_26521 = taoensso.encore.now_dt();
var context_26522 = taoensso.timbre._STAR_context_STAR_;
var vargs_26523 = cljs.core.deref(vargs_);
var vec__26502_26524 = taoensso.timbre.parse_vargs(_QMARK_err,msg_type,vargs_26523);
var _QMARK_err_26525__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26502_26524,(0),null);
var _QMARK_meta_26526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26502_26524,(1),null);
var _QMARK_msg_fmt_26527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26502_26524,(2),null);
var vargs_26528__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26502_26524,(3),null);
var data_26529 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__7645__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$instant,cljs.core.cst$kw$config,cljs.core.cst$kw$vargs,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$error_DASH_level_QMARK_,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.cst$kw$level,cljs.core.cst$kw$_QMARK_err,cljs.core.cst$kw$context,cljs.core.cst$kw$_QMARK_line,cljs.core.cst$kw$_QMARK_err_,cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$_QMARK_msg_DASH_fmt],[instant_26521,config,vargs_26528__$1,_QMARK_file,(function (){var fexpr__26505 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fatal,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__26505.cljs$core$IFn$_invoke$arity$1 ? fexpr__26505.cljs$core$IFn$_invoke$arity$1(level) : fexpr__26505.call(null,level));
})(),_QMARK_ns_str,level,_QMARK_err_26525__$1,context_26522,_QMARK_line,(new cljs.core.Delay(((function (instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1){
return (function (){
return _QMARK_err_26525__$1;
});})(instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1))
,null)),_QMARK_meta_26526,_QMARK_msg_fmt_26527]));
var _QMARK_data_26530 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1,data_26529){
return (function (acc,mf){
var result = (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(acc) : mf.call(null,acc));
if((result == null)){
return cljs.core.reduced(null);
} else {
return result;
}
});})(instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1,data_26529))
,data_26529,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$1(config));
var temp__4657__auto___26531 = _QMARK_data_26530;
if(cljs.core.truth_(temp__4657__auto___26531)){
var data_26532__$1 = temp__4657__auto___26531;
var map__26506_26533 = data_26532__$1;
var map__26506_26534__$1 = ((((!((map__26506_26533 == null)))?((((map__26506_26533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26506_26533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26506_26533):map__26506_26533);
var vargs_26535__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26506_26534__$1,cljs.core.cst$kw$vargs);
var data_26536__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_26532__$1,cljs.core.cst$kw$vargs_,(new cljs.core.Delay(((function (map__26506_26533,map__26506_26534__$1,vargs_26535__$2,data_26532__$1,temp__4657__auto___26531,instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1,data_26529,_QMARK_data_26530){
return (function (){
return vargs_26535__$2;
});})(map__26506_26533,map__26506_26534__$1,vargs_26535__$2,data_26532__$1,temp__4657__auto___26531,instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1,data_26529,_QMARK_data_26530))
,null)));
var data_26537__$3 = taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(data_26536__$2,cljs.core.cst$kw$msg_,(new cljs.core.Delay(((function (map__26506_26533,map__26506_26534__$1,vargs_26535__$2,data_26536__$2,data_26532__$1,temp__4657__auto___26531,instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1,data_26529,_QMARK_data_26530){
return (function (){
var G__26508 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__26508)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,G__26508)){
return taoensso.timbre.str_join(vargs_26535__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$f,G__26508)){
if(typeof _QMARK_msg_fmt_26527 === 'string'){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timbre format-style logging call without a format pattern (string)",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$level,level,cljs.core.cst$kw$location,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__7645__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
var or__7645__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__7645__auto____$1)){
return or__7645__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__7645__auto__ = _QMARK_line;
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return "?";
}
})())].join('')], null));
}

return taoensso.encore.format_STAR_(_QMARK_msg_fmt_26527,vargs_26535__$2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26508)].join('')));

}
}
}
});})(map__26506_26533,map__26506_26534__$1,vargs_26535__$2,data_26536__$2,data_26532__$1,temp__4657__auto___26531,instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1,data_26529,_QMARK_data_26530))
,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$hash_,(new cljs.core.Delay(((function (map__26506_26533,map__26506_26534__$1,vargs_26535__$2,data_26536__$2,data_26532__$1,temp__4657__auto___26531,instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1,data_26529,_QMARK_data_26530){
return (function (){
return cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsite_id,_QMARK_msg_fmt_26527,cljs.core.get.cljs$core$IFn$_invoke$arity$3(_QMARK_meta_26526,cljs.core.cst$kw$hash,vargs_26535__$2)], null));
});})(map__26506_26533,map__26506_26534__$1,vargs_26535__$2,data_26536__$2,data_26532__$1,temp__4657__auto___26531,instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1,data_26529,_QMARK_data_26530))
,null))], 0));
var output_fn1_26538 = taoensso.encore.memoize_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn));
cljs.core.reduce_kv(((function (map__26506_26533,map__26506_26534__$1,vargs_26535__$2,data_26536__$2,data_26537__$3,output_fn1_26538,data_26532__$1,temp__4657__auto___26531,instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1,data_26529,_QMARK_data_26530){
return (function (_,id,appender){
if(cljs.core.truth_((function (){var and__7633__auto__ = cljs.core.cst$kw$enabled_QMARK_.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__7633__auto__)){
return taoensso.timbre.level_GT__EQ_(level,(function (){var or__7645__auto__ = cljs.core.cst$kw$min_DASH_level.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(or__7645__auto__)){
return or__7645__auto__;
} else {
return cljs.core.cst$kw$trace;
}
})());
} else {
return and__7633__auto__;
}
})())){
if(cljs.core.truth_((function (){var G__26509 = cljs.core.cst$kw$ns_DASH_whitelist.cljs$core$IFn$_invoke$arity$1(appender);
var G__26510 = cljs.core.cst$kw$ns_DASH_blacklist.cljs$core$IFn$_invoke$arity$1(appender);
var G__26511 = _QMARK_ns_str;
return (taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3 ? taoensso.timbre.ns_filter.cljs$core$IFn$_invoke$arity$3(G__26509,G__26510,G__26511) : taoensso.timbre.ns_filter.call(null,G__26509,G__26510,G__26511));
})())){
var rate_limit_specs = cljs.core.cst$kw$rate_DASH_limit.cljs$core$IFn$_invoke$arity$1(appender);
var rate_limit_okay_QMARK_ = (function (){var or__7645__auto__ = cljs.core.empty_QMARK_(rate_limit_specs);
if(or__7645__auto__){
return or__7645__auto__;
} else {
var rl_fn = (taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2(id,rate_limit_specs) : taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs));
return cljs.core.not((function (){var G__26513 = cljs.core.force(cljs.core.cst$kw$hash_.cljs$core$IFn$_invoke$arity$1(data_26537__$3));
return (rl_fn.cljs$core$IFn$_invoke$arity$1 ? rl_fn.cljs$core$IFn$_invoke$arity$1(G__26513) : rl_fn.call(null,G__26513));
})());
}
})();
if(rate_limit_okay_QMARK_){
var map__26514 = appender;
var map__26514__$1 = ((((!((map__26514 == null)))?((((map__26514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26514):map__26514);
var apfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26514__$1,cljs.core.cst$kw$fn);
var async_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26514__$1,cljs.core.cst$kw$async_QMARK_);
var output_fn = (function (){var f = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__7645__auto__ = (f == null);
if(or__7645__auto__){
return or__7645__auto__;
} else {
var G__26518 = f;
var G__26519 = cljs.core.cst$kw$inherit;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26518,G__26519) : taoensso.encore.kw_identical_QMARK_.call(null,G__26518,G__26519));
}
})())){
return output_fn1_26538;
} else {
return f;
}
})();
var output_ = (new cljs.core.Delay(((function (map__26514,map__26514__$1,apfn,async_QMARK_,output_fn,rate_limit_specs,rate_limit_okay_QMARK_,map__26506_26533,map__26506_26534__$1,vargs_26535__$2,data_26536__$2,data_26537__$3,output_fn1_26538,data_26532__$1,temp__4657__auto___26531,instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1,data_26529,_QMARK_data_26530){
return (function (){
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(data_26537__$3) : output_fn.call(null,data_26537__$3));
});})(map__26514,map__26514__$1,apfn,async_QMARK_,output_fn,rate_limit_specs,rate_limit_okay_QMARK_,map__26506_26533,map__26506_26534__$1,vargs_26535__$2,data_26536__$2,data_26537__$3,output_fn1_26538,data_26532__$1,temp__4657__auto___26531,instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1,data_26529,_QMARK_data_26530))
,null));
var data__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_26537__$3,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$appender_DASH_id,id,cljs.core.cst$kw$appender,appender,cljs.core.cst$kw$output_DASH_fn,output_fn,cljs.core.cst$kw$output_,output_], null));
var _QMARK_data__$1 = (function (){var temp__4655__auto__ = cljs.core.cst$kw$middleware_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__4655__auto__)){
var mfn = temp__4655__auto__;
return (mfn.cljs$core$IFn$_invoke$arity$1 ? mfn.cljs$core$IFn$_invoke$arity$1(data__$4) : mfn.call(null,data__$4));
} else {
return data__$4;
}
})();
var temp__4657__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__4657__auto____$1)){
var data__$5 = temp__4657__auto____$1;
return (apfn.cljs$core$IFn$_invoke$arity$1 ? apfn.cljs$core$IFn$_invoke$arity$1(data__$5) : apfn.call(null,data__$5));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(map__26506_26533,map__26506_26534__$1,vargs_26535__$2,data_26536__$2,data_26537__$3,output_fn1_26538,data_26532__$1,temp__4657__auto___26531,instant_26521,context_26522,vargs_26523,vec__26502_26524,_QMARK_err_26525__$1,_QMARK_meta_26526,_QMARK_msg_fmt_26527,vargs_26528__$1,data_26529,_QMARK_data_26530))
,null,cljs.core.cst$kw$appenders.cljs$core$IFn$_invoke$arity$1(config));
} else {
}
} else {
}

return null;
});

taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 10;

taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__26540 = arguments.length;
switch (G__26540) {
case 1:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,null);
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join('');
});

taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = 2;

taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null);

taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;

taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2(level,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(compile_time_ns)].join(''));
});

taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__8821__auto__ = [];
var len__8814__auto___26543 = arguments.length;
var i__8815__auto___26544 = (0);
while(true){
if((i__8815__auto___26544 < len__8814__auto___26543)){
args__8821__auto__.push((arguments[i__8815__auto___26544]));

var G__26545 = (i__8815__auto___26544 + (1));
i__8815__auto___26544 = G__26545;
continue;
} else {
}
break;
}

var argseq__8822__auto__ = ((((0) < args__8821__auto__.length))?(new cljs.core.IndexedSeq(args__8821__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__8822__auto__);
});

taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join(xs);
});

taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0);

taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq26542){
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26542));
});

