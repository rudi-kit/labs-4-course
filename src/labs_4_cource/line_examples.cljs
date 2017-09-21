(ns labs-4-cource.line-examples
  (:require [labs-4-cource.canvas-component :refer [clean-canvas]]
            [labs-4-cource.storage
             :refer
             [line-types lines-generators primitives sun-line-generator]]))

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

(defn draw-sun [key]
    (clean-canvas)
    (reset! sun-line-generator key)
    (pr key)
    (reset! primitives (doall (map (fn [[p1 p2]] ((key lines-generators) p1 p2)) sun-lines))))

(defn draw [] (draw-sun @sun-line-generator))

(defn sun-lines-component []
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
                         :onClick (partial draw-sun value)}
                 ]
                value]))
      doall)]
    )


