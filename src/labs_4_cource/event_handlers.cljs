(ns labs-4-cource.event-handlers
  (:require [canvas.events :as evt]
            [labs-4-cource.debuging :refer [add-line-from-pos]]
            [labs-4-cource.storage
             :refer
             [events lines-generators new-points primitives scale selected]]
            [taoensso.timbre :as log :refer [spy]]
            [reagent.core :as r]))

(defn canvas-events "create js object wich tracks mouse position"
  [canvas] (let [events (new evt/events canvas)]
             (.listen events)
             events))

(defn  registrate-event-handlers [drawer]
  (reset! events (canvas-events (:visible @drawer))))

(defn event-pos->vector [pos]
  [(.-x pos) (.-y pos)])

(defn scale-> [[x y] scale]
  (spy :debug [[x y] scale]
       [(/ x scale) (/ y scale)]))

(defn event-pos [event]
  (scale-> (event-pos->vector (.getMousePos @events event)) @scale))

(defn generate-current-line []
  (apply (@selected lines-generators) @new-points))

(defn submit-first-point [event]
  (swap! new-points (fn [[p1 p2]] (spy :info "new-points" [(event-pos event) p2]))))

(defn swap-on-top [primitive col]
    (conj (rest col) primitive))

(defn change-second-point [event]
  (swap! new-points (fn [[p1 p2]] (spy :info "new-points" [p1 (event-pos event)])))
  (swap! primitives (partial swap-on-top (generate-current-line))))

(defn submit-full-primitive [event]
    (swap! primitives
           (fn [col]
               (conj col (generate-current-line))))
    (reset! new-points nil))

(defn noop [])

(defonce points-mode
    ^"determine how many points are used to build primitive"
    (r/atom :2-points))

(defonce new-primitive-state
    ^"determine how many points already specified"
    (r/atom :empty))

(defn state-key []
  (keyword (str (name @points-mode) "-" (name @new-primitive-state))))

(def finite-automata-transition-table
  {:2-points-empty {:click [:2-points :half] :move :current}
   :2-points-half {:click [:2-points :empty] :move :current}})

(def finite-automata-action-table
  {:2-points-empty {:click submit-first-point :move noop}
   :2-points-half {:click submit-full-primitive :move change-second-point}})

(defn change-automata-state [new-state]
  (when-not (= new-state :current)
    (let [[points primitive] new-state]
      (reset! points-mode points)
      (reset! new-primitive-state primitive))))

(defn finite-automata-transition [event]
  ((get-in finite-automata-action-table [(state-key) (:type event)]) (:event event))
  (change-automata-state (get-in finite-automata-transition-table [(state-key) (:type event)])))

(defn on-click! [event]
  (finite-automata-transition {:type :click :event event}))

(defn on-mouse-move! [event]
  (finite-automata-transition {:type :move :event event}))

