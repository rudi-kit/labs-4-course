(ns ^:figwheel-always labs-4-cource.components.toogles
  (:require [labs-4-cource.reagent-helpers :refer [reset-ratom-value-fun]]
            [labs-4-cource.storage :refer [line-types selected]]))

(defn toggles []
  [:select {:value @selected
            :onChange (reset-ratom-value-fun selected)}
   (doall
    (for [value line-types]
      ^{:key value}
      [:option {:value value
                :checked (= value @selected)}
       value]))])
