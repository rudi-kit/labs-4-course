(ns labs-4-cource.core
  (:require [labs-4-cource.canvas :refer [clean]]
            [labs-4-cource.canvas-component :refer [div-with-canvas]]
            [labs-4-cource.debug-level-comonent :refer [debug-level-component]]
            [labs-4-cource.log-config :refer [log-level]]
            [labs-4-cource.primitives
             :refer
             [->BrezenhameLine ->SimpleLine ->SmoothLine]]
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
(comment (do
     (clean-canvas)
     (reset! primitives
             [
              (->SmoothLine [80 80] [160 80])
              (->SmoothLine [80 80] [160 65])
              (->SmoothLine [80 80] [160 20])
              (->SmoothLine [80 80] [120 0])
              (->SmoothLine [80 80] [80 0])
              (->SmoothLine [80 80] [65 0])
              (->SmoothLine [80 80] [0 20])
              (->SmoothLine [80 80] [0 65])
              (->SmoothLine [80 80] [0 80])
              (->SmoothLine [80 80] [0 125])
              (->SmoothLine [80 80] [25 160])
              (->SmoothLine [80 80] [65 160])
              (->SmoothLine [80 80] [125 160])
              (->SmoothLine [80 80] [145 160])
              (->SmoothLine [80 80] [160 160])
              ])
     ))
(do
    (clean-canvas)
    (reset! primitives
            [
             (->BrezenhameLine [80 80] [160 80])
             (->BrezenhameLine [80 80] [160 65])
             (->BrezenhameLine [80 80] [160 20])
             (->BrezenhameLine [80 80] [120 0])
             (->BrezenhameLine [80 80] [80 0])
             (->BrezenhameLine [80 80] [65 0])
             (->BrezenhameLine [80 80] [0 20])
             (->BrezenhameLine [80 80] [0 65])
             (->BrezenhameLine [80 80] [0 80])
             (->BrezenhameLine [80 80] [0 125])
             (->BrezenhameLine [80 80] [25 160])
             (->BrezenhameLine [80 80] [65 160])
             (->BrezenhameLine [80 80] [125 160])
             (->BrezenhameLine [80 80] [145 160])
             (->BrezenhameLine [80 80] [160 160])
             ])
    )
(comment (do
     (clean-canvas)
     (reset! primitives
             [
              (->SimpleLine [80 80] [160 80])
              (->SimpleLine [80 80] [160 65])
              (->SimpleLine [80 80] [160 20])
              (->SimpleLine [80 80] [120 0])
              (->SimpleLine [80 80] [80 0])
              (->SimpleLine [80 80] [65 0])
              (->SimpleLine [80 80] [0 20])
              (->SimpleLine [80 80] [0 65])
              (->SimpleLine [80 80] [0 80])
              (->SimpleLine [80 80] [0 125])
              (->SimpleLine [80 80] [25 160])
              (->SimpleLine [80 80] [65 160])
              (->SimpleLine [80 80] [125 160])
              (->SimpleLine [80 80] [145 160])
              (->SimpleLine [80 80] [160 160])
              ])
     ))
