(ns labs-4-cource.canvas-component
  (:require [labs-4-cource.canvas
             :as
             can
             :refer
             [DoubleCanvas draw-pixels enable-smoothing event-pos->vector scale->]]
            [labs-4-cource.core :refer [selected]]
            [labs-4-cource.primitives
             :refer
             [->BrezenhameLine ->SimpleLine ->SmoothLine line-points]]
            [reagent.core :as reagent]))

(def drawer (reagent/atom nil))
(defonce scale (reagent/atom 4))
(defonce primitives (reagent/atom []))
(defonce smoothing (reagent/atom false))
(defonce next-primitive (atom nil))
(defonce events (reagent/atom nil))

(def line-factories {:simple ->SimpleLine :be ->BrezenhameLine :smooth ->SmoothLine})

(defn add-primitives [primitive]
    (swap! primitives (partial cons primitive)))

(defn add-pos [pos]
    (swap! next-primitive (partial cons pos)))

(defn on-click [event]
    (pr event)
    (-> @events (.getMousePos event) event-pos->vector (scale-> @scale) add-pos)
    (when (= (count @next-primitive) 2)
        (let [[p1 p2] @next-primitive]
            (add-primitives (apply (@selected line-factories) @next-primitive))
            (reset! next-primitive nil))))

(defn draw-canvas-contents [ctx]
  (draw-pixels ctx (->> @primitives (map line-points) (apply concat))))

(defn div-with-canvas []
  (reagent/create-class
   {:component-did-update
    (fn [this]
      (draw-canvas-contents @drawer))

    :component-did-mount
    (fn [this]
      (let [canvas1 (-> this
                       reagent/dom-node
                       .-firstChild)
            canvas2 (-> this
                        reagent/dom-node
                        .-children
                        (aget 1))]
        (reset! events (can/canvas-events canvas1))
        (reset! drawer (DoubleCanvas. canvas1 canvas2))
        (enable-smoothing @drawer false)
        (pr "mount")
))

    :reagent-render
    (fn []
      @primitives
      [:div.with-canvas
       [:canvas {:id "visible"
                 :width 640
                 :onClick on-click
                 :height 320
                 :style {:border "solid 1px"}}]
       [:canvas {:id "hidden"
                 :hidden true
                 :width 640
                 :onClick on-click
                 :height 320
                 :style {:border "solid 1px"}}]])}))
