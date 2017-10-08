(ns labs-4-cource.modes-state-machine
  (:require [labs-4-cource.state-mashines
             :refer
             [->StateMachine get-state push-event]]
            [labs-4-cource.storage :refer [new-points new-primitives]]))

(defn cancel-primitive [event]
    (reset! new-points nil)
    (reset! new-primitives nil))

(def modes-transition-table
    {:2-points {:2-points :ermit :ermit :ermit}
     :ermit {:2-points :2-points :ermit :ermit}})

(def modes-action-table
    {:2-points {:2-points cancel-primitive :ermit cancel-primitive}
     :ermit {:2-points cancel-primitive :ermit cancel-primitive}})

(defn ->ModesMashine []
    (let [state (atom :2-points)]
        (->StateMachine
         (fn [] @state)
         (fn [mode] (reset! state mode))
         modes-transition-table
         modes-action-table)))

(comment
    (get-state (->ModesMashine))
    (push-event (->ModesMashine) {:type :2-points}))
