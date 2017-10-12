(ns labs-4-cource.state-mashines
  (:require [taoensso.timbre :as timbre :refer-macros [debug info]]))

(defn noop [])

(defn push-event [{:keys [get-state change-state transition-table action-table]} event]
    (debug "finite-automata-transition" event)
    (if-let [action (get-in action-table [(get-state) (:type event)])]
        (action (:event event))
        (throw (js/Error. (str "No action for event: " event ". In state " (get-state)))))
    (if-let [new-state (get-in transition-table [(get-state)  (:type event)])]
        (change-state new-state)
        (throw (js/Error. (str "No transition for event: " event ". In state " (get-state))))))

(defn get-state [{:get-state get-state}]
    (get-state))

(defn ->StateMachine [get-state change-state transition-table action-table]
    {:get-state get-state :change-state change-state :transition-table transition-table :action-table action-table})
