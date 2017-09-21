(ns labs-4-cource.storage
  (:require [labs-4-cource.primitives
             :refer
             [->BrezenhameLine ->SimpleLine ->SmoothLine]]
            [reagent.core :as reagent]
            [taoensso.timbre :as timbre :refer-macros [spy]]))

(defonce drawer (reagent/atom nil))
(defonce width (reagent/atom 640))
(defonce height (reagent/atom 320))
(defonce scale (reagent/atom 4))
(defonce primitives (reagent/atom nil))
(defonce smoothing (reagent/atom false))
(defonce next-primitive (atom nil))
(defonce events (reagent/atom nil))
(defonce selected (reagent/atom :simple)) 

(defn change-selected [value]
    (spy :info "change-selected" 
         (reset! selected value)))

(defonce sun-line-generator (reagent/atom :simple))

(def lines-generators {:simple ->SimpleLine :be ->BrezenhameLine :wu ->SmoothLine})

(def line-types [:simple :be :wu])

