(ns labs-4-cource.canvas-component
  (:require [labs-4-cource.canvas
             :as
             can
             :refer
             [clean draw-pixels toggle-smoothing]]
            [labs-4-cource.primitives
             :refer
             [->BrezenhameLine ->SimpleLine ->SmoothLine line-points]]
            [labs-4-cource.storage
             :refer
             [drawer events height next-primitive primitives scale selected width]]
            [reagent.core :as reagent]
            [taoensso.timbre :as log :refer [spy]]))

(def line-factories {:simple ->SimpleLine :be ->BrezenhameLine :wu ->SmoothLine})

(defn add-primitives [primitive]
  (swap! primitives (partial cons (spy :debug "add-primitive" primitive))))

(defn add-pos [pos]
  (swap! next-primitive (partial cons (spy :debug "next-pos" pos))))

(defn event-pos->vector [pos]
  [(.-x pos) (.-y pos)])

(defn scale-> [[x y] scale]
  (spy :debug [[x y] scale]
       [(/ x scale) (/ y scale)]))

(defn on-click [event]
  (-> @events (.getMousePos event) event-pos->vector (scale-> @scale) add-pos)
  (when (= (count @next-primitive) 2)
    (let [[p1 p2] @next-primitive]
      (add-primitives (apply (@selected line-factories) @next-primitive))
      (reset! next-primitive nil))))

(defmulti draw-line (fn [canvas line] (spy :debug (str "draw-line" line) (:type line))))
(defmethod draw-line :simple [canvas line]  (draw-pixels canvas (map (fn [[x y]] [x y 1]) (line-points line))))
(defmethod draw-line :be [canvas line]  (draw-pixels canvas (map (fn [[x y]] [x y 1]) (line-points line))))
(defmethod draw-line :wu [canvas line]  (draw-pixels canvas (line-points line)))

(comment
  (draw-line @drawer {:type :simple :p1 [0 0] :p2 [2 2]}))

(defn draw-canvas-contents [canvas]
  (doall (map (partial draw-line canvas) @primitives)))

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
            canvas2 (-> this
                        reagent/dom-node
                        .-children
                        (aget 1))]
        (reset! events (can/canvas-events canvas1))
        (reset! drawer {:visible canvas1 :hidden canvas2})
        (toggle-smoothing @drawer false)))

    :reagent-render
    (fn []
      @scale
      @primitives
      [:div.with-canvas
       [:canvas {:id "visible"
                 :width @width
                 :onClick on-click
                 :height @height
                 :style {:border "solid 1px"}}]
       [:canvas {:id "hidden"
                 :hidden true
                 :width @width
                 :onClick on-click
                 :height @height
                 :style {:border "solid 1px"}}]])}))

(comment (do
           (reset! primitives [(->SimpleLine [0 0] [10 10])
                               (->BrezenhameLine [0 5] [10 15])
                               (->SmoothLine [0 10] [10 20])])))

(comment (draw-canvas-contents @drawer))

(comment (line-points (first @primitives))
         (draw-pixels @drawer (line-points (second @primitives)))
         (draw-pixels @drawer [[1 1]]))


