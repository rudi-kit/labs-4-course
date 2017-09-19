(ns labs-4-cource.core
  (:require [labs-4-cource.canvas :refer [clean]]
            [labs-4-cource.canvas-component :refer [div-with-canvas]]
            [labs-4-cource.debug-level-comonent :refer [debug-level-component]]
            [labs-4-cource.log-config :refer [log-level]]
            [labs-4-cource.primitives
             :refer
             [->BrezenhameLine ->SimpleLine ->SmoothLine]]
            [labs-4-cource.scale-component :refer [scale-component]]
            [labs-4-cource.storage
             :refer
             [drawer height primitives scale selected width]]
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

(def sun-lines [
                '( [80 80] [160 80])
                '( [80 80] [160 65])
                '( [80 80] [160 20])
                '( [80 80] [120 0])
                '( [80 80] [80 0])
                '( [80 80] [65 0])
                '( [80 80] [0 20])
                '( [80 80] [0 65])
                '( [80 80] [0 80])
                '( [80 80] [0 125])
                '( [80 80] [25 160])
                '( [80 80] [65 160])
                '( [80 80] [125 160])
                '( [80 80] [145 160])
                '( [80 80] [160 160])
                ])

(def lines-generators {:simple ->SimpleLine :be ->BrezenhameLine :wu ->SmoothLine})

(defonce sun-line-generator (reagent/atom :simple))
(def line-types [:simple :be :wu])

(defn draw-sun [key]
    (clean-canvas)
    (reset! sun-line-generator key)
    (pr key)
    (reset! primitives (doall (map (fn [[p1 p2]] ((key lines-generators) p1 p2)) sun-lines))))

(defn get-value [event]
    (->> event
         (spy :debug)
         .-target
         .-value))

(defn sun-lines-component [draw on-change]
    [:div
     [:button {:onClick draw} "draw"]
     (->>
      line-types
      (map (fn [value]
               ^{:key value}
               [:label
                [:input {:type "radio"
                         :value value
                         :checked (= value @sun-line-generator)
                         :onClick (partial on-change value)}
                 ]
                value]))
      doall)]
    )

(defn draw [] (draw-sun @sun-line-generator))

(defn input [value-atom]
    [:label
     [:input {:type "text"
              :value @value-atom
              :onChange (comp get-value (spy :debug) (partial reset! value-atom))}]])

(defn home []
    (debug "home")
    [:div
     {:display "flex"}
     [div-with-canvas]
     [:div
      [toggles selected  line-types change-selected]
      [:button {:onClick clean-canvas} "clean"]
      [scale-component @scale (partial reset! scale)]
      [debug-level-component @log-level (partial reset! log-level)]
      [sun-lines-component draw draw-sun]
      ]])

(defn ^:export init! []
    (debug "init")
    (reagent/render [home]
                    (.getElementById js/document "app")))


(init!)
