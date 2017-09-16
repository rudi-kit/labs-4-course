(ns labs-4-cource.canvas-component
  (:require [labs-4-cource.canvas
             :as
             can
             :refer
             [clean draw-pixels set-scale toggle-smoothing]]
            [labs-4-cource.primitives
             :refer
             [->BrezenhameLine
              ->SimpleLine
              ->SmoothLine
              BrezenhameLine
              line-points
              SimpleLine
              SmoothLine]]
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


(defmulti draw-line (fn [ctx line] (type line)))
(defmethod draw-line SimpleLine [ctx line]  (draw-pixels ctx (line-points line)) )
(defmethod draw-line BrezenhameLine [ctx line]  (draw-pixels ctx (line-points line)) )
(defmethod draw-line SmoothLine [ctx line]  (apply draw-pixels ctx (line-points line)))

(defn draw-canvas-contents [ctx]
  (doall (map (partial draw-line ctx) @primitives)))

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
                        .-firstChild)
             ]
        (reset! events (can/canvas-events canvas1))
        (reset! drawer canvas1)
        (set-scale @drawer 4)
        (toggle-smoothing @drawer false)))

    :reagent-render
    (fn []
      @primitives
      [:div.with-canvas
       [:canvas {:id "visible"
                 :width 640
                 :onClick on-click
                 :height 320
                 :style {:border "solid 1px"}}]
       ])}))

