(ns labs-4-cource.line-examples
  (:require [clojure.core.matrix :as m]
            [labs-4-cource.aproximation :refer [->Ermit]]
            [labs-4-cource.first-order-lines
             :refer
             [->BrezenhameLine ->SimpleLine ->SmoothLine]]
            [labs-4-cource.reagent-helpers :refer [get-value]]
            [labs-4-cource.second-order-lines :refer [->Circle ->Elipse]]
            [labs-4-cource.storage :refer [debug-state primitives]]
            [reagent.core :as r]
            [taoensso.timbre :as timbre :refer-macros [spy]]))

(def sun-lines '(([80 80] [160 80])
                 ([80 80] [160 65])
                 ([80 80] [160 20])
                 ([80 80] [120 0])
                 ([80 80] [80 0])
                 ([80 80] [65 0])
                 ([80 80] [0 20])
                 ([80 80] [0 65])
                 ([80 80] [0 80])
                 ([80 80] [0 125])
                 ([80 80] [25 160])
                 ([80 80] [65 160])
                 ([80 80] [125 160])
                 ([80 80] [145 160])
                 ([80 80] [160 160])))

(def piramid '([0 0 0 1]
               [100 0 0 1]
               [50 100 0 1]
               [0 0 100 1])
    )

(def lines-supliers
    (r/atom
     {:simple
      (fn [] (map (partial apply ->SimpleLine) sun-lines))
      :be
      (fn [] (map (partial apply ->BrezenhameLine) sun-lines))
      :wu
      (fn [] (map (partial apply ->SmoothLine) sun-lines))
      :circle
      (fn [] [(->Circle [80 80] [150 80])])
      :elipse
      (fn [] [(->Elipse [40 10] [50 120])])
      :elipse-2
      (fn [] [(->Elipse [10 40] [120 50])])
      :ermit
      (fn [] (list (->Ermit [30 30] [140 100] [130 20] [200 400])))
      }))

(defonce curent-line-suplier (r/atom (first (keys @lines-supliers))))

(defn decart [col]
    (mapcat identity
            (for [a col]
                (for [b col]
                    [a b]))))

(defn all-lines [points]
    (map (fn [[p1 p2]] (->SimpleLine p1 p2)) (decart points)))

(defn degree->radian [angle]
    (* Math/PI (/ (mod angle 360) 180)))

(defn rotate-y [points angle]
    (m/mmul piramid
            '([(Math/cos (degree->radian angle)) 0 (- (Math/sin (degree->radian angle) )) 0]
              [0                                 1 0                                      0]
              [(Math/sin (degree->radian angle)) 0 (Math/cos (degree->radian angle))      0]
              [0                                 0 0                                      1])))

(comment
    (reset! labs-4-cource.storage/primitives
            (all-lines piramid))

    (reset! labs-4-cource.storage/primitives
            (all-lines (rotate-y points 45)))

    (reset! labs-4-cource.storage/primitives
            (all-lines (rotate-y points -90)))

    )

(defn set-sample! [key]
    (reset! curent-line-suplier key)
    (reset! primitives (((spy :info key) @lines-supliers))))

(defn sun-lines-component []
    [:span
     [:select
       {:value @curent-line-suplier
        :onChange (comp set-sample! keyword get-value)}
       (doall
        (for [value (keys @lines-supliers)]
            ^{:key value}
            [:option
             {:value value}
             value]))
      ]
     [:button {:onClick (partial set-sample! @curent-line-suplier)
               :disabled (not (= @debug-state :not))} "draw"]])

