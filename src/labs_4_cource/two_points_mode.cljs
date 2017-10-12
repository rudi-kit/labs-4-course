(ns labs-4-cource.two-points-mode
  (:require [labs-4-cource.event-handlers
             :refer
             [event-pos generate-current-line ]]
            [labs-4-cource.state-mashines :refer [->StateMachine noop]]
            [labs-4-cource.storage :refer [new-points new-primitives primitives]]
            [taoensso.timbre :as log :refer [spy]]))

(defn change-second-point [event]
  (let [pos (event-pos event)]
        (swap! new-points (fn [[p1 p2]] (spy :debug "new-points" [p1 pos])))
        (reset! new-primitives [(generate-current-line)])))

(defn submit-first-point [event]
    (let [pos (event-pos event)]
        (swap! new-points (fn [[p1 p2]] (spy :debug "new-points" [pos pos])))
        (reset! new-primitives [(generate-current-line)])))

(defn submit-full-primitive [event]
  (swap! primitives conj (generate-current-line))
    (reset! new-points nil)
    (reset! new-primitives nil))

(def two-points-transition-table
  {:empty {:click :half :move :empty :right-click :empty}
   :half {:click :empty :move :half :right-click :half}})

(def two-points-action-table
  {:empty {:click submit-first-point :move noop :right-click noop}
   :half {:click submit-full-primitive :move change-second-point :right-click noop}})

(defn ->2PointMode []
  (let [state (atom :empty)]
    (->StateMachine
     (fn [] @state)
     (fn [mode] (reset! state mode))
     two-points-transition-table
     two-points-action-table)))
