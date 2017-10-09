(ns labs-4-cource.spline-mode
  (:require [labs-4-cource.event-handlers
             :refer
             [event-pos generate-current-line push]]
            [labs-4-cource.first-order-lines :refer [->SimpleLine]]
            [labs-4-cource.second-order-lines :refer [->CircleR]]
            [labs-4-cource.state-mashines :refer [->StateMachine noop]]
            [labs-4-cource.storage :refer [new-points new-primitives primitives]]
            [taoensso.timbre :as log :refer [spy]]))

(defn spline-support []
  (into '()
        (conj (map (partial ->CircleR 2) @new-points)
              (generate-current-line))))

(defn append-spline [event]
  (let [pos (event-pos event)]
    (reset! new-points [pos pos])
    (reset! new-primitives (spline-support))))

(defn add-point [event]
  (let [pos (event-pos event)]
    (spy :info "add-point" pos)
    (swap! new-points (partial push pos))
    (reset! new-primitives (spline-support))))

(defn set-last-point [event]
  (let [pos (event-pos event)]
    (spy :info "set-last-point" pos)
    (reset! new-points (spy :info set-last-point (conj (rest @new-points) pos)))
    (reset! new-primitives (spline-support))))

(defn submit [event]
  (spy :info "submit")
  (.preventDefault event)
  (swap! primitives (generate-current-line))
  )

(def ermit-transition-table
  {:passive {:click :active :move :passive :right-click :passive}
   :active {:click :active :move :active :right-click :passive}
   })

(def ermit-action-table
  {:passive  {:click append-spline :move noop :right-click noop}
   :active {:click add-point :move set-last-point :right-click submit}
})

(defn ->SplineMode []
  (let [state (atom :passive)]
    (->StateMachine
     (fn [] @state)
     (fn [mode] (reset! state mode))
     ermit-transition-table
     ermit-action-table)))
