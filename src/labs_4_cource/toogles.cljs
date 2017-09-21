(ns ^:figwheel-always labs-4-cource.toogles
  (:require [labs-4-cource.reagent-helpers :refer [get-value]]
            [labs-4-cource.storage :refer [selected]]))

(defn toggles [selected values on-change]
    [:select {:value @selected
              :onChange (comp on-change keyword get-value )}
     (doall
      (for [value values]
          ^{:key value}
          [:option {:value value
                    :checked (= value @selected)
                    }
           value]))])
