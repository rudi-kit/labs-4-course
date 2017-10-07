(ns labs-4-cource.event-handlers
  (:require [canvas.events :as evt]
            [labs-4-cource.debuging :refer [add-line-from-pos]]
            [labs-4-cource.storage
             :refer
             [events lines-generators new-points primitives scale selected]]
            [taoensso.timbre :as log :refer [debug spy info]]
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
       (list (/ x scale) (/ y scale))))

(defn event-pos [event]
  (scale-> (event-pos->vector (.getMousePos @events event)) @scale))

(defn generate-current-line []
  (apply (@selected lines-generators) (spy :info "new-line" @new-points)))

(defn submit-first-point [event]
  (swap! new-points (fn [[p1 p2]] (spy :info "new-points" [(event-pos event) p2]))))

(defn swap-on-top [primitive col]
  (conj (rest col) primitive))

(defn push [element col]
  (conj col element))

(defn change-second-point [event]
  (swap! new-points (fn [[p1 p2]] (spy :info "new-points" [p1 (event-pos event)])))
  (swap! primitives (partial swap-on-top (generate-current-line))))

(defn submit-full-primitive [event]
  (swap! primitives (partial push (generate-current-line)))
  (reset! new-points nil))

(defn noop [])

(defonce points-mode
  ^"determine how many points are used to build primitive"
  (r/atom :2-points))

(defonce new-primitive-state
  ^"determine how many points already specified"
  (r/atom :empty))

(defn append-4-point-primitive [event]
  (let [pos (event-pos event)]
    (reset! new-points (list pos pos pos pos))
    (swap! primitives (partial push (generate-current-line)))))

(defn set-point [i event]
  (let [pos (event-pos event)]
    (spy :debug (cond (= 0 i)
           (swap! new-points (fn [[p1 p2 p3 p4]] (list pos pos p3 p4)))
           (= 1 i)
           (swap! new-points (fn [[p1 p2 p3 p4]] (list p1 p2 pos pos)))
           (= 2 i)
           (swap! new-points (fn [[p1 p2 p3 p4]] (list p1 pos p3 p4)))
           (= 3 i)
           (swap! new-points (fn [[p1 p2 p3 p4]] (list p1 p2 pos p4)))))
    (swap! primitives (partial swap-on-top (generate-current-line)))))

(defn cancel-primitive [event]
  (reset! new-points nil)
  (swap! primitives rest))

(defn state-key []
  (keyword (str (name @points-mode) "-" (name @new-primitive-state))))

(def finite-automata-transition-table
  {:2-points-empty {:click [:2-points :half] :move :current :on-2-point :current :on-4-point [:4-points :0]}
   :2-points-half {:click [:2-points :empty] :move :current :on-2-point :current :on-4-point [:4-points :0]}
   :4-points-0 {:click [:4-points :1] :move :current :on-2-point [:2-points :empty]}
   :4-points-1 {:click [:4-points :2] :move :current :on-2-point [:2-points :empty]}
   :4-points-2 {:click [:4-points :3] :move :current :on-2-point [:2-points :empty]}
   :4-points-3 {:click [:4-points :0] :move :current :on-2-point [:2-points :empty]}})

(def finite-automata-action-table
  {:2-points-empty {:click submit-first-point :move noop :on-2-point noop :on-4-point noop}
   :2-points-half {:click submit-full-primitive :move change-second-point :on-2-point cancel-primitive :on-4-point cancel-primitive}
   :4-points-0 {:click append-4-point-primitive :move noop :on-2-point noop :on-4-point noop}
   :4-points-1 {:click (partial set-point 1) :move (partial set-point 1) :on-2-point cancel-primitive :on-4-point cancel-primitive}
   :4-points-2 {:click (partial set-point 2) :move (partial set-point 2) :on-2-point cancel-primitive :on-4-point cancel-primitive}
   :4-points-3 {:click submit-full-primitive :move (partial set-point 3) :on-2-point cancel-primitive :on-4-point cancel-primitive}})

(defn change-automata-state [new-state]
  (when-not (= new-state :current)
    (let [[points primitive] new-state]
      (reset! points-mode points)
      (reset! new-primitive-state primitive))))

(defn finite-automata-transition [event]
  (debug "finite-automata-transition" event)
  ((get-in finite-automata-action-table [(state-key) (:type event)]) (:event event))
  (change-automata-state (get-in finite-automata-transition-table [(state-key) (:type event)])))

(defn on-click! [event]
  (finite-automata-transition {:type :click :event event}))

(defn on-mouse-move! [event]
  (finite-automata-transition {:type :move :event event}))

(defn on-draw-mode-change [current-mode]
  (if (or (= :bezie current-mode) (= :ermit current-mode))
    (finite-automata-transition {:type :on-4-point :event current-mode})
    (finite-automata-transition {:type :on-2-point :event current-mode})))
