(ns labs-4-cource.carcas-mode
    (:require [labs-4-cource.state-mashines :refer [StateMachine]]
              [taoensso.timbre :as timbre :refer-macros [spy]]))

(defmulti push-event-carcas-mode (fn [this event] (spy :debug [(get-state this) (:type event)])))

(deftype CarcasMode
         ^{:doc "editing mode for carcas figures iteractions"}
         []
  StateMachine
  (push-event [this event] (push-event-carcas-mode this event))
  (get-state [this]))
