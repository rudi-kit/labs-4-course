(ns labs-4-cource.core
  (:require [labs-4-cource.canvas-component :refer [clean-canvas! div-with-canvas]]
            [labs-4-cource.debuging :refer [draw-canvas-contents! draw-line!]]
            [labs-4-cource.debug-component :refer [debug-component]]
            [labs-4-cource.line-examples :refer [sun-lines-component]]
            [labs-4-cource.scale-component :refer [scale-component]]
            [labs-4-cource.storage
             :refer
             [ change-selected drawer line-types scale selected]]
            [labs-4-cource.toogles :refer [toggles]]
            [reagent.core :as reagent]
            [taoensso.timbre :as timbre :refer-macros [debug]]
            [labs-4-cource.updaters]
            [labs-4-cource.circles]
            ))

(enable-console-print!)
(timbre/set-level! :debug)

(defn tool-panel []
    [:div.tool-panel
      [toggles selected  line-types change-selected]
      [:button {:onClick clean-canvas!} "clean"]
      [scale-component @scale (partial reset! scale)]
     [sun-lines-component]
     [debug-component]
      ])

(defn home []
    (debug "home")
    [:div.draw-container
     [tool-panel]
     [div-with-canvas]
     ])

(defn ^:export init! []
    (debug "init")
    (reagent/render [home]
                    (.getElementById js/document "app"))

    (draw-canvas-contents!)
    )
