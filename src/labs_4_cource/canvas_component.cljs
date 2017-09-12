(ns labs-4-cource.canvas-component
  (:require [labs-4-cource.canvas
             :as
             can
             :refer
             [Canvas
              clean
              DoubleCanvas
              draw-pixels
              enable-smoothing
]]
            [labs-4-cource.primitives
             :refer
             [->BrezenhameLine ->SimpleLine ->SmoothLine line-points]]
            [labs-4-cource.storage
             :refer
             [drawer events next-primitive primitives scale selected]]
            [reagent.core :as reagent]))

(def line-factories {:simple ->SimpleLine :be ->BrezenhameLine :smooth ->SmoothLine})

(defn add-primitives [primitive]
  (swap! primitives (partial cons primitive)))

(defn add-pos [pos]
  (swap! next-primitive (partial cons pos)))

(defn event-pos->vector [pos]
  [(.-x pos) (.-y pos)])

(defn scale-> [[x y] scale]
  [(/ x scale) (/ y scale)])

(defn on-click [event]
  (-> @events (.getMousePos event) event-pos->vector (scale-> @scale) add-pos)
  (when (= (count @next-primitive) 2)
    (let [[p1 p2] @next-primitive]
      (add-primitives (apply (@selected line-factories) @next-primitive))
      (apply pr @next-primitive)
      (reset! next-primitive nil))))

(defn all-pixels-col [] (->> @primitives (map line-points) (apply concat)))

(defn draw-canvas-contents [ctx]
  (draw-pixels ctx (all-pixels-col)))

(defn clean-canvas []
    "clean current canvas component"
    (clean @drawer))

(defn div-with-canvas []
  (reagent/create-class
   {:component-did-update
    (fn [this]
      (draw-canvas-contents @drawer))

    :component-did-mount
    (fn [this]
      (let [canvas1 (-> this
                        reagent/dom-node
                        .-firstChild
                        )
            canvas2 (-> this
                        reagent/dom-node
                        .-children
                        (aget 1)
                        )]
        (reset! events (can/canvas-events canvas1))
        (reset! drawer (DoubleCanvas. (Canvas. canvas1) (Canvas. canvas2)))
        (enable-smoothing @drawer false)))

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
