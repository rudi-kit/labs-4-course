(ns labs-4-cource.core
  (:require [labs-4-cource.components.canvas-component :refer [div-with-canvas]]
            [labs-4-cource.components.tool-panel-component :refer [tool-panel]]
            [labs-4-cource.debuging :refer [draw-canvas-contents!]]
            [labs-4-cource.storage :refer [new-primitives primitives]]
            [reagent.core :as reagent]
            [taoensso.timbre :as timbre :refer-macros [debug]]))

(defn home []
  (debug "home")
  [:div.draw-container
   [tool-panel]
   [div-with-canvas]])

(defn ^:export init! []
  (enable-console-print!)
  (debug "init")
  (timbre/set-level! :info)
  (reagent/render [home]
                  (.getElementById js/document "app")))
