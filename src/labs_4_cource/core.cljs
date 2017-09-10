(ns labs-4-cource.core
  (:require [labs-4-cource.canvas-component :refer [div-with-canvas]]
            [reagent.core :as reagent]))

(defn home []
  [div-with-canvas])

(defn ^:export init! []
  (reagent/render [home]
                  (.getElementById js/document "app")))

(init!)
