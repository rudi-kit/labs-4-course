(ns labs-4-cource.storage
    (:require [reagent.core :as reagent]))


(defonce drawer (reagent/atom nil))
(defonce width (reagent/atom 640))
(defonce height (reagent/atom 320))
(defonce scale (reagent/atom 4))
(defonce primitives (reagent/atom []))
(defonce smoothing (reagent/atom false))
(defonce next-primitive (atom nil))
(defonce events (reagent/atom nil))
(defonce selected (reagent/atom :simple)) 
