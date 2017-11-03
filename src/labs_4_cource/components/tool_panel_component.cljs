(ns labs-4-cource.components.tool-panel-component
  (:require [labs-4-cource.components.canvas-component :refer [clean-canvas!]]
            [labs-4-cource.components.carcas-control-component
             :refer
             [carcas-control-component]]
            [labs-4-cource.components.debug-component :refer [debug-component]]
            [labs-4-cource.line-examples :refer [sun-lines-component]]
            [labs-4-cource.components.scale-component :refer [scale-component]]
            [labs-4-cource.storage
             :refer
             [change-selected drawer line-types scale selected]]
            [labs-4-cource.toogles :refer [toggles]]))

(defn tool-panel []
  [:div.tool-panel
   [toggles selected  line-types change-selected]
   [:button {:onClick (partial clean-canvas! @drawer)} "clean"]
   [scale-component @scale (partial reset! scale)]
   (comment [debug-component])
   (if (= :carcas @selected)
     [carcas-control-component]
     [sun-lines-component])])
