(ns labs-4-cource.components.fill-poligons-component
  (:require [labs-4-cource.components.utils :refer [call-with-delay]]
            [labs-4-cource.fill-poligon
             :refer
             [fill-poligon fill-poligon-with-delay]]
            [labs-4-cource.first-order-lines :refer [->BrezenhameLine]]
            [labs-4-cource.poligons :refer [fill-poligon-with-sorter-edges]]
            [labs-4-cource.state-mashines :refer [->StateMachine noop]]
            [labs-4-cource.storage
             :refer
             [current-mode-state-machine drawer new-primitives primitives]]
            [reagent.core :as r]))

(defn on-click [event])

(def poligon-transition-table
  {:passive {:click :active :move :passive :right-click :passive}})

(def poligon-action-table
  {:passive  {:click on-click :move noop :right-click noop}})

(defn ->FillPoligonMode []
  (let [state (atom :passive)]
    (->StateMachine
     (fn [] @state)
     (fn [mode] (reset! state mode))
     poligon-transition-table
     poligon-action-table)))

(def state (r/atom {:active false}))

(defn inverse [bool]
  (= false bool))

(defn set-fill-state
  []
  (reset! current-mode-state-machine (->FillPoligonMode)))

(defn draw-lines [lines]
  (if (empty? lines)
    nil
    (do
      (swap! primitives conj (first lines))
      (fn [] (draw-lines (rest lines))))))

(defn sorted-edges-fill
  []
  (let [poligon (first (filter (fn [x] (= :poligon (:type x))) @new-primitives))]
    (call-with-delay draw-lines
                     (map
                      (partial apply ->BrezenhameLine)
                      (fill-poligon-with-sorter-edges (vec (:points poligon)))))))

(defn fill-poligon1 []
  (fill-poligon (:visible @drawer) [230 230] [0 0 0 255]))

(defn fill-poligon-with-delay1 []
  (call-with-delay fill-poligon-with-delay (:visible @drawer) [230 230] [0 0 0 255]))

(defn fill-poligon-component []
  [:div
   [:button {:on-click (partial swap! state update :active inverse)}
    "fill-poligon"]
   [:div {:hidden (:active @state)}
    [:button {:on-click sorted-edges-fill} "Sorted edges"]
    [:button {:on-click fill-poligon1} "Simple fill"]
    [:button {:on-click fill-poligon-with-delay1} "Simple fill with delay"]]])
