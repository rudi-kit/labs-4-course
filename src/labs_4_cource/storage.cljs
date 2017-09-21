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

(defn add-primitives [primitive]
  (swap! primitives (partial cons (spy :debug "add-primitive" primitive))))

(defonce smoothing (reagent/atom false))
(defonce next-primitive (atom nil))

(defn add-pos [pos]
  (swap! next-primitive (partial cons (spy :debug "next-pos" pos))))

(defonce events (reagent/atom nil))
(defonce selected (reagent/atom :simple)) 

(defonce sun-line-generator (reagent/atom :simple))

(def lines-generators {:simple ->SimpleLine :be ->BrezenhameLine :wu ->SmoothLine})

(def line-types [:simple :be :wu])

(defn add-line-from-pos []
    (when (= (count @next-primitive) 2)
        (let [[p1 p2] @next-primitive]
            (add-primitives (apply (@selected lines-generators) @next-primitive))
            (reset! next-primitive nil))))


(defonce debug-state (reagent/atom :not))

(def change-debug-state [state]
    (reset! debug-state state))

(defn change-selected [value]
    (spy :info "change-selected" 
         (reset! selected value)))


