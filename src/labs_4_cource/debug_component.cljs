(ns labs-4-cource.debug-component
  (:require [labs-4-cource.debug :refer [draw-line-by-point!]]
            [labs-4-cource.reagent-helpers :refer [get-value]]
            [labs-4-cource.storage
             :refer
             [change-debug-state debug-state not-full-line]]))

(defn debug-component []
  [:div
   [:select {:value @debug-state
             :onChange (comp change-debug-state keyword get-value)}
    [:option {:value :debug} :debug]
    [:option {:value :not} :not]]
   [:button {:disabled (empty? (:rest-points true))
             :onClick draw-line-by-point!} :step]])
