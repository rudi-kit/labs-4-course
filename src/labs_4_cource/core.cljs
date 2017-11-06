(ns labs-4-cource.core
  (:require [labs-4-cource.components.canvas-component :refer [div-with-canvas]]
            [labs-4-cource.components.tool-panel-component :refer [tool-panel]]
            [labs-4-cource.debuging :refer [draw-canvas-contents!]]
            [labs-4-cource.storage :refer [new-primitives primitives]]
            [reagent.core :as reagent]
            [taoensso.timbre :as timbre :refer-macros [debug]]))

(enable-console-print!)
(timbre/set-level! :info)

(defn home []
  (debug "home")
  [:div.draw-container
   [tool-panel]
   [div-with-canvas]])

(defn ^:export init! []
  (debug "init")
  (reagent/render [home]
                  (.getElementById js/document "app"))

  (draw-canvas-contents! @primitives @new-primitives))

(init!)
