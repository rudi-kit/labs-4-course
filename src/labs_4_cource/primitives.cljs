(ns labs-4-cource.primitives
    (:require [cljs.test :refer-macros [deftest is testing run-tests are]
               ]))

(defn floor [n]
    (int (+ n .5)))

(defn line-points [[x1 y1] [x2 y2]]
  (let [length (max (Math/abs (- x2 x1)) (Math/abs (- y2 y1)))
        dx (/ (- x2 x1) length)
        dy (/ (- y2 y1) length)]
      (->> [x1 y1 0]
         (iterate (fn [[x y i]] [(+ x dx) (+ y dy) (+ i 1)]))
         (take-while (fn [[x y i]] (<= i length)))
         (map (fn [[x y]] [ (floor x) (floor y)])))))


(deftest line-from-book
    (are [src expected] (= src expected)
        (line-points [0 0] [2 2]) [[0 0] [1 1] [2 2]]
        (line-points [0 0] [9 4]) [[0 0] [1 0] [2 1] [3 1] [4 2] [5 2] [6 3] [7 3] [8 4] [9 4]]
        (line-points [5 0] [0 1]) [[5 0] [4 0] [3 0] [2 1] [1 1] [0 1]]))

(clojure.data/diff (line-points [5 0] [0 1]) [[5 0] [4 0] [3 0] [2 1] [1 1] [0 1]])

(cljs.test/run-tests)
