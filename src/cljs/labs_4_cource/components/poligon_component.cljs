(ns labs-4-cource.components.poligon-component
  (:require [labs-4-cource.reagent-helpers :refer [reset-ratom-value-fun]]
            [labs-4-cource.storage :refer [current-poligon-algo]]))

(defn poligon-component
  []
  [:select
   (doall
    (for [algo [:grehem :jarvis]]
      ^{:key algo}
      [:option {:type :select
                :value algo
                :checked (= @current-poligon-algo algo)
                :onChange (reset-ratom-value-fun current-poligon-algo)}
       algo]))])
