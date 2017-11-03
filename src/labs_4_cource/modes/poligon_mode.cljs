(ns labs-4-cource.modes.poligon-mode
  (:require [labs-4-cource.event-handlers :refer [event-pos]]
            [labs-4-cource.poligons :refer [grehem-poligon]]
            [labs-4-cource.second-order-lines :refer [->CircleR]]
            [labs-4-cource.state-mashines :refer [->StateMachine noop]]
            [labs-4-cource.storage :refer [new-points new-primitives]]))

(defn set-supported-points
  "draw selected points"
  []
  (reset! new-primitives (map (partial ->CircleR 5) @new-points)))

(defn append-first-point [{event :event}]
  (let [pos (event-pos event)]
    (reset! new-points `(~pos))
    (set-supported-points)))

(defn add-point [{event :event}]
  (let [pos (event-pos event)]
    (swap! new-points conj pos)
    (set-supported-points)))

(defn submit [event]
  "create poligon from new-points"
  (.preventDefault event)
  (reset! new-primitives [(grehem-poligon @new-points)])
  (reset! new-points nil))

(def poligon-transition-table
  {:passive {:click :active :move :passive :right-click :passive}
   :active {:click :active :move :active :right-click :passive}})

(def poligon-action-table
  {:passive  {:click append-first-point :move noop :right-click noop}
   :active {:click add-point :move noop :right-click submit}})

(defn ->PoligonMode []
  (let [state (atom :passive)]
    (->StateMachine
     (fn [] @state)
     (fn [mode] (reset! state mode))
     poligon-transition-table
     poligon-action-table)))

