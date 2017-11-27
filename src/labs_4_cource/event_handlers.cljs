(ns labs-4-cource.event-handlers
  (:require [canvas.events :as evt]
            [labs-4-cource.debuging :refer [draw-visible-content]]
            [labs-4-cource.state-mashines :refer [push-event]]
            [labs-4-cource.storage
             :refer
             [current-mode-state-machine
              drawer
              events
              lines-generators
              new-points
              scale
              selected]]
            [reagent.core :as r]
            [taoensso.timbre :as log :refer [debug info spy]]))

(defn canvas-events "create js object wich tracks mouse position"
  [canvas] (let [events (new evt/events canvas)]
             (.listen events)
             events))

(defn event-pos->vector [pos]
  [(.-x pos) (.-y pos)])

(defn scale-> [[x y] scale]
  (spy :debug [[x y] scale]
       (list (/ x scale) (/ y scale))))

(defn event-pos [event]
  (scale-> (event-pos->vector (.getMousePos @events event)) @scale))

(defn generate-current-line []
  (spy :debug (apply (@selected lines-generators) @new-points)))

(defonce points-mode
  ^"determine how many points are used to build primitive"
  (r/atom :2-points))

(defonce new-primitive-state
  ^"determine how many points already specified"
  (r/atom :empty))

(defn on-click! [event]
  (push-event @current-mode-state-machine {:type :click :event event}))

(defn on-right-click! [event]
  (push-event @current-mode-state-machine {:type :right-click :event event}))

(defn on-mouse-move! [event]
  (push-event @current-mode-state-machine {:type :move :event event}))

(defn on-key-down! [event]
  (push-event @current-mode-state-machine {:type :keyboard :event event}))

(defn main-loop []
  (swap! drawer draw-visible-content))

(defn  registrate-event-handlers [drawer]
  ;(.addEventListener js/window "keydown" on-key-down!)
  (reset! events (canvas-events (:visible @drawer)))
  (js/setInterval main-loop (/ 1000 120)))
