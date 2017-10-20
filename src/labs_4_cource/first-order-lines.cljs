(ns labs-4-cource.first-order-lines
  (:require [taoensso.timbre :as log :refer [get-env spy]]))

(defn ->SimpleLine
  [p1 p2]
  {:pre [(not (nil? p1)) (not (nil? p2))]}
  {:type :simple :p1 p1 :p2 p2})

(defn ->BrezenhameLine
  [p1 p2]
  {:pre [(not (nil? p1)) (not (nil? p2))]}
  {:type :be :p1 p1 :p2 p2})

(defn ->SmoothLine
  [p1 p2]
  {:pre [(not (nil? p1)) (not (nil? p2))]}
  {:type :wu :p1 p1 :p2 p2})

(defn floor [n]
  (int (+ n .5)))

(defn calc-steps [coordinate]
  (mapv Math/sign coordinate))

(defmulti line-points :type)

;; CDA algo
(defmethod line-points :simple [{:keys [p1 p2]}]
  (let [[x1 y1] p1 ;; first point
        [x2 y2] p2 ;; second point
        length (max (Math/abs (- x2 x1)) (Math/abs (- y2 y1)))
        dx (/ (- x2 x1) length) ;; step throw x-axis
        dy (/ (- y2 y1) length) ;; step throw y-axis
]
    (->> [x1 y1]
         (iterate (fn [[x y]] [(+ x dx) (+ y dy)]))
         (take (+ 1 length))
         (map (fn [[x y]] [(floor x) (floor y)])))))

;; Brezenhame algo
(defmethod line-points :be [{:keys [p1 p2]}]
  (let [[x1 y1] p1
        [x2 y2] p2
        dx  (- x2 x1)
        dy  (- y2 y1)
          ;; where to go
        [x-step y-step] (calc-steps [dx dy])
        dx (Math/abs dx)
        dy (Math/abs dy)
        max (Math/max dx dy) ;; length of longest proection
        min (Math/min dx dy) ;; length of shortest proection
        e (- (* 2 min) max)]
        ;; first point
    (->>  [x1 y1 e]
          (iterate
           (if (spy :debug "x-axis longer" (<= dy dx))
                   ;; x-axis longer
             (fn [[x y e]]
               (if (<= e 0)
                           ;; step throw longer axis
                 [(+ x-step x) y (+ e (* 2 min))]
                           ;; extra step throw shorter axis
                 [(+ x-step x) (+ y-step y) (+ (- e (* 2 max)) (* 2 min))]))
                   ;; y-axis longer
             (fn [[x y e]]
               (if (<= e 0)
                           ;; step throw longer axis
                 [x (+ y y-step) (+ e (* 2 min))]
                           ;; extra step throw shorter axis
                 [(+ x-step x) (+ y-step y) (+ (- e (* 2 max)) (* 2 min))]))))
              ;; point coordinate should be int
          (map (fn [[x y]]  [(floor x) (floor y)]))
          (take (+ 1  max)))))

;; Wu algo
(defmethod line-points :wu [{:keys [p1 p2]}]
  (let [[x1 y1] p1
        [x2 y2] p2
          ;; proections
        dx  (Math/abs (- x2 x1))
        dy  (Math/abs (- y2 y1))
          ;; speps throw axis
        x-step (if (< x1 x2) 1 -1)
        y-step (if (< y1 y2) 1 -1)
        max (Math/max dx dy) ;; length of longest proection
        min (Math/min dx dy) ;; length of shortest proection
]
    (if (or (= x1 x2) (= y1 y2) (= dx dy))
            ;; draw horizontal | vertical | lin
      (->> (->BrezenhameLine p1 p2)
           line-points
           (map (fn [[x y]] [x y 1])))
      (->> [x1 y1 (- (/ min max) 0.5)]
           (iterate
            (if (spy :debug "x-axis longer" (<= dy dx))
                      ;; x-axis longer
              (fn [[x y e]]
                (if (<= e 0)
                              ;; step throw longer axis
                  [(+ x-step x) y (+ e (/ min max))]
                              ;; extra step throw shorter axis
                  [(+ x-step x) (+ y-step y) (+ (- e 1) (/ min max))]))
                      ;; y-axis longer
              (fn [[x y e]]
                (if (<= e 0)
                              ;; step throw longer axis
                  [x (+ y y-step) (+ e (/ min max))]
                              ;; extra step throw shorter axis
                  [(+ x-step x) (+ y-step y) (+ (- e 1) (/ min max))]))))
                 ;; normalize error (it has value in range [(-1 + (min/max)),(min/max)]
           (map (fn [[x y e]] [x y (+ e 1 (- (/ min max)))]))
                 ;; points number equals length of basic axis
           (take (+ 1 max))
           (map
                  ;; smooth across basis axis
            (if (spy :debug "smoot across y-axis" (>= dx dy))
                      ;; when y1 lesser then y2 line passes under center
              (if (spy :debug "passes under center" (<= y1 y2))
                (fn [[x y e]] [[x y e] [x (- y 1) (- 1 e)]])
                (fn [[x y e]] [[x y e] [x (+ y 1) (- 1 e)]]))
                      ;; when x1 lesser then x2 line passes to the left of center
              (if (spy :debug "passes to the left of center" (<= x1 x2))
                          ;; reverse error
                (fn [[x y e]] [[x y e] [(- x 1) y (- 1 e)]])
                (fn [[x y e]] [[x y e] [(+ x 1) y (- 1 e)]]))))
                 ;; collect flat list
           (mapcat identity)
           (map (fn [[x y e]]  [(floor x) (floor y) e]))))))
