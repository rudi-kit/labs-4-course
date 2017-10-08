(ns labs-4-cource.bezie-mode
    (:require [labs-4-cource.event-handlers
             :refer
             [event-pos generate-current-line push]]
            [labs-4-cource.first-order-lines :refer [->SimpleLine]]
            [labs-4-cource.second-order-lines :refer [->CircleR]]
            [labs-4-cource.state-mashines :refer [->StateMachine noop]]
            [labs-4-cource.storage :refer [new-points new-primitives primitives]]
            [taoensso.timbre :as log :refer [spy]]))

(defn ermit-form-support [[p1 p2 p3 p4]]
    (spy :info [p1 p2 p3 p4])
    (into '()
          (concat
           (list (generate-current-line)

                 (->SimpleLine p1 p2)
                 (->SimpleLine p3 p4))
           (doall (map (partial ->CircleR 2) @new-points)))))

(defn set-point [i event]
  (let [pos (event-pos event)]
    (spy :debug (cond (= 0 i)
                      (swap! new-points (fn [[p1 p2 p3 p4]] (list pos pos p3 p4)))
                      (= 1 i)
                      (swap! new-points (fn [[p1 p2 p3 p4]] (list p1 pos p3 pos)))
                      (= 2 i)
                      (swap! new-points (fn [[p1 p2 p3 p4]] (list p1 pos p3 p4)))
                      (= 3 i)
                      (swap! new-points (fn [[p1 p2 p3 p4]] (list p1 p2 pos p4)))))
    (reset! new-primitives (ermit-form-support @new-points))))

(defn append-4-point-primitive [event]
  (let [pos (event-pos event)]
    (reset! new-points (list pos pos pos pos))
    (reset! new-primitives (list (generate-current-line)))))

(defn submit-full-primitive [event]
  (swap! primitives (partial push (generate-current-line)))
  (reset! new-points nil)
  (reset! new-primitives nil))

(def ermit-transition-table
  {:0 {:click :1 :move :0}
   :1 {:click :2 :move :1}
   :2 {:click :3 :move :2}
   :3 {:click :0 :move :3}})

(def ermit-action-table
  {:0 {:click append-4-point-primitive :move noop}
   :1 {:click (partial set-point 1) :move (partial set-point 1)}
   :2 {:click (partial set-point 2) :move (partial set-point 2)}
   :3 {:click submit-full-primitive :move (partial set-point 3)}})

(defn ->BezieMode []
  (let [state (atom :0)]
    (->StateMachine
     (fn [] @state)
     (fn [mode] (reset! state mode))
     ermit-transition-table
     ermit-action-table)))
