(ns labs-4-cource.components.scale-component
  (:require [labs-4-cource.reagent-helpers :refer [get-value]]
            [labs-4-cource.storage :refer [scale]]))

(defn scale-component []
  [:select {:onChange (comp (partial reset! scale) get-value)
            :value @scale}
   [:option {:value 1} 1]
   [:option {:value 2} 2]
   [:option {:value 4} 4]
   [:option {:value 8} 8]])
