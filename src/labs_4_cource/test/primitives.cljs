(ns labs-4-cource.test.primitives
  (:require [cljs.test :refer-macros [are deftest run-tests]]
            [labs-4-cource.primitives
             :refer
             [->SimpleLine ->BrezenhameLine ->SmoothLine calc-steps line-points]]))

(deftest line-from-book
  (are [src expected] (= src expected)
    (line-points (->SimpleLine [0 0] [2 2])) [[0 0] [1 1] [2 2]]
    (line-points (->SimpleLine [0 0] [9 4])) [[0 0] [1 0] [2 1] [3 1] [4 2] [5 2] [6 3] [7 3] [8 4] [9 4]]
    (line-points (->SimpleLine [5 0] [0 1])) [[5 0] [4 0] [3 0] [2 1] [1 1] [0 1]]))
(deftest line-brezenhaim
  (are [src expected] (= src expected)
    (line-points (->BrezenhameLine [0 0] [2 2])) [[0 0] [1 1] [2 2]]
    (line-points (->BrezenhameLine [0 0] [9 4])) [[0 0] [1 0] [2 1] [3 1] [4 2] [5 2] [6 3] [7 3] [8 4] [9 4]]
    (line-points (->BrezenhameLine  [5 0] [0 1])) [[5 0] [4 0] [3 0] [2 1] [1 1] [0 1]]
    (line-points (->BrezenhameLine [20 50] [27 45])) [[20 50] [21 49] [22 49] [23 48] [24 47] [25 46] [26 46] [27 45]]))

(deftest steps
  (are [src expected] (= (calc-steps src) expected)
    [1 1] [1 1]
    [1 -1] [1 -1]
    [-1 1] [-1 1]
    [-1 -1] [-1 -1]))

(cljs.test/run-tests)
