(ns labs-4-cource.second-order-lines-test
  (:require [clojure.test :refer [are deftest is]]
            [labs-4-cource.first-order-lines :refer [calc-steps]]
            [labs-4-cource.second-order-lines
             :refer
             [->Circle length quadrant-points]]))

(deftest steps
  (are [src expected] (= (calc-steps src) expected)
    [1 1] [1 1]
    [1 -1] [1 -1]
    [-1 1] [-1 1]
    [-1 -1] [-1 -1]))

(deftest length-test
  (is (= (length [0 0] [3 4]) 5.0)))

(deftest ->Circle-test
  (is (= (->Circle [0 0] [3 4]) {:type :circle, :center [0 0], :radius 5})))

(deftest ->Circle-points
  (is (= (quadrant-points 8) '([0 8] [1 8] [2 8] [3 7] [4 7] [5 6] [6 5] [7 4] [7 3] [8 2] [8 1] [8 0]))))
