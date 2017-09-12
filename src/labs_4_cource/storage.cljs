(ns labs-4-cource.storage
    (:require [reagent.core :as reagent]))


(def drawer (reagent/atom nil))
(defonce scale (reagent/atom 4))
(defonce primitives (reagent/atom []))
(defonce smoothing (reagent/atom false))
(defonce next-primitive (atom nil))
(defonce events (reagent/atom nil))
(defonce selected (reagent/atom :simple)) 
