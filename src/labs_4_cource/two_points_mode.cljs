(ns labs-4-cource.two-points-mode)

(def two-points-transition-table
    {})

(def two-points-action-table
    {})

(defn ->2PointMode [transition-table action-table]
    (let [state (atom :0)]
        (StateMachine.
         (fn [] @state)
         (fn [mode] (reset! state mode))
         two-points-transition-table
         two-points-action-table)))
