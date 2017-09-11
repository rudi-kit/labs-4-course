(ns labs-4-cource.primitives
    (:require [cljs.test :refer-macros [deftest is testing run-tests are]
               ]))

(defprotocol Line
    (line-points [this] "get all pixel coordinates of line"))

(defn floor [n]
    (int (+ n .5)))

(deftype SimpleLine [p1 p2]
    Line
    (line-points [this]
        (let [[x1 y1] p1
              [x2 y2] p2
              length (max (Math/abs (- x2 x1)) (Math/abs (- y2 y1)))
              dx (/ (- x2 x1) length)
              dy (/ (- y2 y1) length)]
            (->> [x1 y1 0]
                 (iterate (fn [[x y i]] [(+ x dx) (+ y dy) (+ i 1)]))
                 (take-while (fn [[x y i]] (<= i length)))
                 (map (fn [[x y]] [ (floor x) (floor y)]))))))

(deftype BrezenhameLine [p1 p2]
    Line
    (line-points [this]
        (let [[x1 y1] p1
              [x2 y2] p2
              dx (- x2 x1)
              dy (- y2 y1)
              e (- (* 2 dy) dx)]
            (->>  [x1 y1 e]
                  (iterate (fn [[x y e]]
                               (if (>= e 0) [(+ 1 x) (+ 1 y) (+ e (* 2 dy) (- (* 2 dx)))]
                                   [(+ 1 x) y (+ e (* 2 dy))])))
                  (take dx)
                  (map (fn [[x y]] [x y]))
                 ))))

(deftest line-from-book
    (are [src expected] (= src expected)
        (line-points (SimpleLine. [0 0] [2 2])) [[0 0] [1 1] [2 2]]
        (line-points (SimpleLine. [0 0] [9 4])) [[0 0] [1 0] [2 1] [3 1] [4 2] [5 2] [6 3] [7 3] [8 4] [9 4]]
        (line-points (SimpleLine. [5 0] [0 1])) [[5 0] [4 0] [3 0] [2 1] [1 1] [0 1]]))
(deftest line-brezenhaim
    (are [src expected] (= src expected)
        (line-points (BrezenhameLine. [0 0] [2 2])) [[0 0] [1 1] [2 2]]
        (line-points (BrezenhameLine. [0 0] [9 4])) [[0 0] [1 0] [2 1] [3 1] [4 2] [5 2] [6 3] [7 3] [8 4] [9 4]]
        (line-points (BrezenhameLine.  [5 0] [0 1])) [[5 0] [4 0] [3 0] [2 1] [1 1] [0 1]]))
(cljs.test/run-tests)
