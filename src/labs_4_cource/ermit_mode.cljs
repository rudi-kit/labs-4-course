(ns labs-4-cource.ermit-mode)

(def ermit-transition-table
    {})

(def ermit-action-table
    {})

(defn ->ErmitMode [transition-table action-table]
    (let [state (atom :0)]
        (StateMachine.
         (fn [] @state)
         (fn [mode] (reset! state mode))
         ermit-transition-table
         ermit-action-table)))
