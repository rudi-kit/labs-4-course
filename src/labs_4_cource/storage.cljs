(ns labs-4-cource.storage
    (:require [labs-4-cource.aproximation :refer [->Bezie ->Ermit ->Spline]]
              [labs-4-cource.first-order-lines
               :refer
               [->BrezenhameLine ->SimpleLine ->SmoothLine]]
              [labs-4-cource.point-line-figure :refer [->CarcasFigure]]
              [labs-4-cource.second-order-lines
               :refer
               [->Circle ->Elipse ->Elipse-2 ->Hyperbola]]
              [reagent.core :as r]
              [taoensso.timbre :as timbre :refer-macros [info spy]]
              [labs-4-cource.poligons :refer [->Poligon]]))

(defonce drawer (r/atom nil))
(defonce width (r/atom 640))
(defonce height (r/atom 640))
(defonce scale (r/atom 1))
(defonce primitives (r/atom []))

(defonce debug-state (r/atom :not))

(defn change-debug-state [state]
  (reset! debug-state state))

(defonce smoothing (r/atom false))

;;; for draw new primitives
(defonce new-points (atom '()))
(defonce new-primitives (atom '()))

(defn add-primitives [line]
  (swap! primitives (fn [old-state] (conj old-state [(spy :debug "add-primitive" line)]))))

(defonce events (r/atom nil))
(defonce selected (r/atom :simple))

(def lines-generators {:simple ->SimpleLine
                       :be ->BrezenhameLine
                       :wu ->SmoothLine
                       :circle ->Circle
                       :elipse ->Elipse
                       :elipse-2 ->Elipse-2
                       :hyperbola ->Hyperbola
                       :ermit ->Ermit
                       :bezie ->Bezie
                       :spline ->Spline
                       :carcas ->CarcasFigure})

(defonce current-poligon-algo (r/atom :grehem))

(def line-types [:simple :be :wu :circle :elipse :elipse-2 :hyperbola :ermit :bezie :spline :carcas :poligon])

(defn change-selected [value]
    (info "change-selected" value)
    (reset! selected value))

(defonce not-full-line (r/atom {:line nil :rest-points nil}))

(defn remove-debug-line! []
  (reset! not-full-line nil))

(defonce current-mode (atom :iteraction))
(defonce mode-state-machine (atom nil))
(defonce current-mode-state-machine (atom nil))

(defonce carcas-modification-state
  ^{:doc "select modification type of 3d carcas figure"}
  (r/atom :translate))

(defonce carcas-files (r/atom '()))
