(ns labs-4-cource.event-handlers
  (:require [canvas.events :as evt]
            [labs-4-cource.state-mashines :refer [push-event]]
            [labs-4-cource.storage
             :refer
             [current-mode-state-machine
              events
              lines-generators
              new-points
              primitives
              scale
              selected]]
            [reagent.core :as r]
            [taoensso.timbre :as log :refer [debug spy]]))

(defn canvas-events "create js object wich tracks mouse position"
  [canvas] (let [events (new evt/events canvas)]
             (.listen events)
             events))

(defn  registrate-event-handlers [drawer]
  (reset! events (canvas-events (:visible @drawer))))

(defn event-pos->vector [pos]
  [(.-x pos) (.-y pos)])

(defn scale-> [[x y] scale]
  (spy :debug [[x y] scale]
       (list (/ x scale) (/ y scale))))

(defn event-pos [event]
  (scale-> (event-pos->vector (.getMousePos @events event)) @scale))

(defn generate-current-line []
  (spy :info (apply (@selected lines-generators) @new-points)))

(defn push [element col]
    (conj col element))

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

