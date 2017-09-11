(ns labs-4-cource.core
  (:require [labs-4-cource.canvas-component :refer [div-with-canvas]]
            [reagent.core :as reagent]))

(defn toggles [selected values on-change]
    [:div
     (doall (for [value values]
                ^{:key value}
                [:label 
                 [:input {:type "radio"
                          :checked (= @selected value)
                          :onClick (partial on-change value)}]
                 value]))])

(defonce selected (reagent/atom :simple))
(defn change-selected [value] (reset! selected value))
(defn home []
  [:div
   [div-with-canvas]
   [toggles selected [:simple :be :smooth] change-selected]])

(defn ^:export init! []
  (reagent/render [home]
                  (.getElementById js/document "app")))

(init!)
