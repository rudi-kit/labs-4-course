(ns labs-4-cource.line-examples
  (:require [labs-4-cource.canvas-component :refer [clean-canvas!]]
            [labs-4-cource.primitives :refer [->SimpleLine]]
            [labs-4-cource.reagent-helpers :refer [get-value]]
            [clojure.core.matrix :as m]
            [labs-4-cource.storage
             :refer
             [debug-state
              line-types
              lines-generators
              primitives
              sun-line-generator]]))

(def sun-lines ['([80 80] [160 80])
                '([80 80] [160 65])
                '([80 80] [160 20])
                '([80 80] [120 0])
                '([80 80] [80 0])
                '([80 80] [65 0])
                '([80 80] [0 20])
                '([80 80] [0 65])
                '([80 80] [0 80])
                '([80 80] [0 125])
                '([80 80] [25 160])
                '([80 80] [65 160])
                '([80 80] [125 160])
                '([80 80] [145 160])
                '([80 80] [160 160])])

(def piramid [[0 0 0 1]
              [100 0 0 1]
              [50 100 0 1]
              [0 0 100 1]]
    )

(defn decart [col]
    (mapcat identity
            (for [a col]
                (for [b col]
                    [a b]))))

(defn all-lines [points]
    (map (fn [[p1 p2]] (->SimpleLine p1 p2)) (decart points)))

(comment
    (reset! labs-4-cource.storage/primitives
            (all-lines piramid))

    (reset! labs-4-cource.storage/primitives
            (all-lines (m/mmul piramid
                               [[(Math/cos (/ Math/PI 4)) 0 (- (Math/sin (/ Math/PI 4) )) 0]
                                [0                        1 0                             0]
                                [(Math/sin (/ Math/PI 4)) 0 (Math/cos (/ Math/PI 4))      0]
                                [0                        0  0                            1]])
                       ))

    )

(defn draw-sun [key]
  (clean-canvas!)
  (reset! sun-line-generator key)
  (pr key)
  (reset! primitives (doall (map (fn [[p1 p2]] ((key lines-generators) p1 p2)) sun-lines))))

(defn draw [] (draw-sun @sun-line-generator))

(defn sun-lines-component []
    [:span
     [:select
       {:value @sun-line-generator
        :onChange (comp draw-sun keyword get-value)}
       (doall
        (for [value line-types]
            ^{:key value}
            [:option
             {:value value}
             value]))
      ]
     [:button {:onClick draw
               :disabled (not (= @debug-state :not))} "draw"]])

