(ns labs-4-cource.debug
  (:require [labs-4-cource.canvas :refer [draw-pixels]]
            [labs-4-cource.primitives :refer [line-points]]
            [labs-4-cource.storage :refer [debug-state primitives]]
            [taoensso.timbre :as timbre :refer-macros [spy]]))

(defmulti draw-line (fn [canvas line] (spy :debug (str "draw-line" line) [(:type line) @debug-state])))

(defmulti draw-line )
(defmethod draw-line [:simple :not] [canvas line]  (draw-pixels canvas (map (fn [[x y]] [x y 1]) (line-points line))))
(defmethod draw-line [:be :not] [canvas line]  (draw-pixels canvas (map (fn [[x y]] [x y 1]) (line-points line))))
(defmethod draw-line [:wu :not] [canvas line]  (draw-pixels canvas (line-points line)))

(defn draw-canvas-contents [canvas]
  (doall (map (partial draw-line canvas) @primitives)))
