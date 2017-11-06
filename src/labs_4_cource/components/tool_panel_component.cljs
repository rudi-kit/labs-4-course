(ns labs-4-cource.components.tool-panel-component
  (:require [labs-4-cource.components.canvas-component :refer [clean-canvas!]]
            [labs-4-cource.components.carcas-control-component
             :refer
             [carcas-control-component]]
            [labs-4-cource.components.poligon-component :refer [poligon-component]]
            [labs-4-cource.components.scale-component :refer [scale-component]]
            [labs-4-cource.components.toogles :refer [toggles]]
            [labs-4-cource.line-examples :refer [sun-lines-component]]
            [labs-4-cource.storage :refer [drawer scale selected]]))

(defn tool-panel []
  [:div.tool-panel
   [toggles]
   [:button {:onClick (partial clean-canvas! @drawer)} "clean"]
   [scale-component @scale (partial reset! scale)]
   (cond (= :carcas @selected)  [carcas-control-component]
         (= :poligon @selected) [poligon-component]
         :else                  [sun-lines-component])])
