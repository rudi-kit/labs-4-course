(ns labs-4-cource.core
  (:require [labs-4-cource.canvas :refer [clean]]
            [labs-4-cource.canvas-component :refer [div-with-canvas]]
            [labs-4-cource.debug-level-comonent :refer [debug-level-component]]
            [labs-4-cource.log-config :refer [log-level]]
            [labs-4-cource.scale-component :refer [scale-component]]
            [labs-4-cource.storage :refer [drawer primitives scale selected]]
            [reagent.core :as reagent]
            [taoensso.timbre :as timbre :refer-macros [debug spy]]))

(enable-console-print!)

(timbre/set-level! :debug)

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
    (debug "clean-canvas")
    (clean @drawer)
    (reset! primitives nil))

(defn change-selected [value]
    (spy :debug "change-selected: " 
         (reset! selected value)))

(defn home []
    (debug "home")
    [:div
     [div-with-canvas]
     [toggles selected [:simple :be :smooth] change-selected]
     [:button {:onClick clean-canvas} "clean"]
     [scale-component @scale (partial reset! scale)]
     [debug-level-component @log-level (partial reset! log-level)]])

(defn ^:export init! []
    (debug "init")
    (reagent/render [home]
                    (.getElementById js/document "app")))

(init!)
