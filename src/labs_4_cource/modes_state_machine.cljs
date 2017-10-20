(ns labs-4-cource.modes-state-machine
  (:require [labs-4-cource.bezie-mode :refer [->BezieMode]]
            [labs-4-cource.ermit-mode :refer [->ErmitMode]]
            [labs-4-cource.spline-mode :refer [->SplineMode]]
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
            (= :spline event) (->SplineMode)
            :else (->2PointMode))))

(defn create-modes-transntiotion-table []
  (let [states [:2-points :ermit :bezie :spline]
        table-row (into {} (map (fn [x] [x x]) states) )]
    (into {} (map (fn [x] [x table-row]) states)))
  )

(def modes-transition-table
  {:2-points {:2-points :2-points :ermit :ermit :bezie :bezie :spline :spline}
   :ermit {:2-points :2-points :ermit :ermit :bezie :bezie :spline :spline}
   :bezie {:2-points :2-points :ermit :ermit :bezie :bezie :spline :spline}
   :spline {:2-points :2-points :ermit :ermit :bezie :bezie :spline :spline}})

(def modes-action-table
  {:2-points {:2-points (partial change-state :2-points) :ermit (partial change-state :ermit) :bezie (partial change-state :bezie) :spline (partial change-state :spline)}
   :ermit {:2-points (partial change-state :2-points) :ermit (partial change-state :ermit) :bezie (partial change-state :bezie) :spline (partial change-state :spline)}
   :bezie {:2-points (partial change-state :2-points) :ermit (partial change-state :ermit) :bezie (partial change-state :bezie) :spline (partial change-state :spline)}
   :spline {:2-points (partial change-state :2-points) :ermit (partial change-state :ermit) :bezie (partial change-state :bezie) :spline (partial change-state :spline)}})

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
