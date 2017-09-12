(ns labs-4-cource.core
  (:require [labs-4-cource.canvas :refer [clean]]
            [labs-4-cource.canvas-component :refer [div-with-canvas]]
            [labs-4-cource.storage :refer [drawer primitives selected]]
            [reagent.core :as reagent]))

(enable-console-print!)

(defn toggles [selected values on-change]
    "radio buttons to choose line type"
    [:div
     (doall (for [value values]
                ^{:key value}
                [:label 
                 [:input {:type "radio"
                          :checked (= @selected value)
                          :onClick (partial on-change value)}]
                 value]))])

(defn clean-canvas []
    "event handler of button clean canvas"
    (clean @drawer)
    (reset! primitives nil))

(defn change-selected [value] (reset! selected value))
(defn home []
  [:div
   [div-with-canvas]
   [toggles selected [:simple :be :smooth] change-selected]
   [:button {:onClick clean-canvas} "clean"]])

(defn ^:export init! []
  (reagent/render [home]
                  (.getElementById js/document "app")))

(init!)
