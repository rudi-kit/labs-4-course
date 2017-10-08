(ns labs-4-cource.modes-state-machine
  (:require [labs-4-cource.bezie-mode :refer [->BezieMode]]
            [labs-4-cource.ermit-mode :refer [->ErmitMode]]
            [labs-4-cource.state-mashines
             :refer
             [->StateMachine get-state push-event]]
            [labs-4-cource.storage
             :refer
             [current-mode-state-machine new-points new-primitives]]
            [labs-4-cource.two-points-mode :refer [->2PointMode]]))

(defn change-state [event]
  (reset! new-points nil)
  (reset! new-primitives nil)
  (reset! current-mode-state-machine
          (cond
            (= :ermit event) (->ErmitMode)
            (= :bezie event) (->BezieMode)
            :else (->2PointMode))))

(def modes-transition-table
  {:2-points {:2-points :ermit :ermit :ermit :bezie :bezie}
   :ermit {:2-points :2-points :ermit :ermit :bezie :bezie}
   :bezie {:2-points :2-points :ermit :ermit :bezie :bezie}})

(def modes-action-table
  {:2-points {:2-points (partial change-state :2-points) :ermit (partial change-state :ermit) :bezie (partial change-state :bezie)}
   :ermit {:2-points (partial change-state :2-points) :ermit (partial change-state :ermit) :bezie (partial change-state :bezie)}
   :bezie {:2-points (partial change-state :2-points) :ermit (partial change-state :ermit) :bezie (partial change-state :bezie)}})

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
