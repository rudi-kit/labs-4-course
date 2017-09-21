(ns labs-4-cource.canvas-component
  (:require [labs-4-cource.canvas :as can :refer [clean toggle-smoothing]]
            [labs-4-cource.debug :refer [draw-canvas-contents]]
            [labs-4-cource.storage
             :refer
             [add-pos drawer events height primitives scale width]]
            [reagent.core :as reagent]
            [taoensso.timbre :as log :refer [spy]]))

(defn clean-canvas []
  "event handler of button clean canvas"
  (spy :debug "clean-canvas")
  (clean @drawer)
  (reset! primitives nil))

(defn event-pos->vector [pos]
  [(.-x pos) (.-y pos)])

(defn scale-> [[x y] scale]
  (spy :debug [[x y] scale]
       [(/ x scale) (/ y scale)]))

(defn on-click [event]
  (-> @events (.getMousePos event) event-pos->vector (scale-> @scale) add-pos))

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
      [:div.draw-area
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
