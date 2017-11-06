(ns labs-4-cource.state-mashines
  (:require [taoensso.timbre :as timbre :refer-macros [debug info]]))

(defn noop [])

(defprotocol StateMachine
    (push-event [this event])
    (get-state [this]))

(deftype StateMachineImpl
         [get-state change-state transition-table action-table]
  StateMachine
  (push-event [this event]
    {:pre [(not (nil? (get-state)))]}
    (debug "finite-automata-transition" event)
    (if-let [action (get-in action-table [(get-state) (:type event)])]
      (action (:event event))
      (throw (js/Error. (str "No action for event: " event ". In state " (get-state)))))
    (if-let [new-state (get-in transition-table [(get-state)  (:type event)])]
      (change-state new-state)
      (throw (js/Error. (str "No transition for event: " event ". In state " (get-state))))))
  (get-state [this] (get-state)))

(defn ->StateMachine [get-state change-state transition-table action-table]
  (->StateMachineImpl get-state change-state transition-table action-table))
