(ns labs-4-cource.modes-state-machine
  (:require [labs-4-cource.bezie-mode :refer [->BezieMode]]
            [labs-4-cource.carcas-mode :refer [->CarcasMode]]
            [labs-4-cource.ermit-mode :refer [->ErmitMode]]
            [labs-4-cource.modes.poligon-mode :refer [->PoligonMode]]
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
            (= :carcas event) (->CarcasMode)
            (= :poligon event) (->PoligonMode)
            :else (->2PointMode))))

(def states [:2-points :ermit :bezie :spline :carcas :poligon])

(defn create-modes-transntiotion-table []
  (let [states states
        table-row (into {} (map (fn [x] [x x]) states))]
    (into {} (map (fn [x] [x table-row]) states))))

(defn create-modes-action-table []
  (let [states states
        table-row (into {} (map (fn [x] [x (list 'partial 'change-state x)]) states))]
    (into {} (map (fn [x] [x table-row]) states))))

(def modes-transition-table {:2-points
                             {:2-points :2-points,
                              :ermit :ermit,
                              :bezie :bezie,
                              :spline :spline,
                              :carcas :carcas,
                              :poligon :poligon},
                             :ermit
                             {:2-points :2-points,
                              :ermit :ermit,
                              :bezie :bezie,
                              :spline :spline,
                              :carcas :carcas,
                              :poligon :poligon},
                             :bezie
                             {:2-points :2-points,
                              :ermit :ermit,
                              :bezie :bezie,
                              :spline :spline,
                              :carcas :carcas,
                              :poligon :poligon},
                             :spline
                             {:2-points :2-points,
                              :ermit :ermit,
                              :bezie :bezie,
                              :spline :spline,
                              :carcas :carcas,
                              :poligon :poligon},
                             :carcas
                             {:2-points :2-points,
                              :ermit :ermit,
                              :bezie :bezie,
                              :spline :spline,
                              :carcas :carcas,
                              :poligon :poligon},
                             :poligon
                             {:2-points :2-points,
                              :ermit :ermit,
                              :bezie :bezie,
                              :spline :spline,
                              :carcas :carcas,
                              :poligon :poligon}})

(def modes-action-table {:2-points
                         {:2-points (partial change-state :2-points),
                          :ermit (partial change-state :ermit),
                          :bezie (partial change-state :bezie),
                          :spline (partial change-state :spline),
                          :carcas (partial change-state :carcas),
                          :poligon (partial change-state :poligon)},
                         :ermit
                         {:2-points (partial change-state :2-points),
                          :ermit (partial change-state :ermit),
                          :bezie (partial change-state :bezie),
                          :spline (partial change-state :spline),
                          :carcas (partial change-state :carcas),
                          :poligon (partial change-state :poligon)},
                         :bezie
                         {:2-points (partial change-state :2-points),
                          :ermit (partial change-state :ermit),
                          :bezie (partial change-state :bezie),
                          :spline (partial change-state :spline),
                          :carcas (partial change-state :carcas),
                          :poligon (partial change-state :poligon)},
                         :spline
                         {:2-points (partial change-state :2-points),
                          :ermit (partial change-state :ermit),
                          :bezie (partial change-state :bezie),
                          :spline (partial change-state :spline),
                          :carcas (partial change-state :carcas),
                          :poligon (partial change-state :poligon)},
                         :carcas
                         {:2-points (partial change-state :2-points),
                          :ermit (partial change-state :ermit),
                          :bezie (partial change-state :bezie),
                          :spline (partial change-state :spline),
                          :carcas (partial change-state :carcas),
                          :poligon (partial change-state :poligon)},
                         :poligon
                         {:2-points (partial change-state :2-points),
                          :ermit (partial change-state :ermit),
                          :bezie (partial change-state :bezie),
                          :spline (partial change-state :spline),
                          :carcas (partial change-state :carcas),
                          :poligon (partial change-state :poligon)}})

(defn ->ModesMashine []
  (let [state (atom :2-points)]
    (->StateMachine
     (fn [] @state)
     (fn [mode] (reset! state mode))
     modes-transition-table
     modes-action-table)))
