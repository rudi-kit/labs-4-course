(ns labs-4-cource.storage
  (:require [labs-4-cource.aproximation :refer [->Bezie ->Ermit]]
            [labs-4-cource.first-order-lines
             :refer
             [->BrezenhameLine ->SimpleLine ->SmoothLine]]
            [labs-4-cource.second-order-lines
             :refer
             [->Circle ->Elipse ->Elipse-2 ->Hyperbola]]
            [reagent.core :as reagent]
            [taoensso.timbre :as timbre :refer-macros [spy]]))

(defonce drawer (reagent/atom nil))
(defonce width (reagent/atom 640))
(defonce height (reagent/atom 640))
(defonce scale (reagent/atom 4))
(defonce primitives (reagent/atom '()))

(defonce debug-state (reagent/atom :not))

(defn change-debug-state [state]
  (reset! debug-state state))

(defonce smoothing (reagent/atom false))
(defonce new-points (atom nil))

(defn add-primitives [line]
  (swap! primitives (fn [old-state] (conj old-state [(spy :debug "add-primitive" line)]))))

(defonce events (reagent/atom nil))
(defonce selected (reagent/atom :simple))

(def lines-generators {:simple ->SimpleLine
                       :be ->BrezenhameLine
                       :wu ->SmoothLine
                       :circle ->Circle
                       :elipse ->Elipse
                       :elipse-2 ->Elipse-2
                       :hyperbola ->Hyperbola
                       :ermit ->Ermit
                       :bezie ->Bezie})

(def line-types [:simple :be :wu :circle :elipse :elipse-2 :hyperbola :ermit :bezie])

(defn change-selected [value]
  (spy :info "change-selected"
       (reset! selected value)))

(defonce not-full-line (reagent/atom {:line nil :rest-points nil}))

(defn remove-debug-line! []
  (reset! not-full-line nil))
