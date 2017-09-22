(ns labs-4-cource.storage
  (:require [labs-4-cource.primitives
             :refer
             [->BrezenhameLine ->SimpleLine ->SmoothLine]]
            [reagent.core :as reagent]
            [taoensso.timbre :as timbre :refer-macros [spy]]))

(defonce drawer (reagent/atom nil))
(defonce width (reagent/atom 640))
(defonce height (reagent/atom 640))
(defonce scale (reagent/atom 4))
(defonce primitives (reagent/atom nil))

(defonce debug-state (reagent/atom :not))

(defn change-debug-state [state]
  (reset! debug-state state))

(defonce smoothing (reagent/atom false))
(defonce next-primitive (atom nil))

(defn add-pos [pos]
  (swap! next-primitive (fn [old-points] (concat old-points [pos]))))

(defn add-primitives [line]
  (swap! primitives (fn [old-state] (concat old-state [(spy :debug "add-primitive" line)]))))

(defonce events (reagent/atom nil))
(defonce selected (reagent/atom :simple))

(defonce sun-line-generator (reagent/atom :simple))

(def lines-generators {:simple ->SimpleLine :be ->BrezenhameLine :wu ->SmoothLine})

(def line-types [:simple :be :wu])

(defn change-selected [value]
  (spy :info "change-selected"
       (reset! selected value)))

(defonce not-full-line (reagent/atom {:line nil :rest-points nil}))

(defn remove-debug-line! []
  (reset! not-full-line nil))
