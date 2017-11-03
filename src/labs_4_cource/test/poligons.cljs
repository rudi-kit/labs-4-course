(ns labs-4-cource.test.poligons
  (:require [cljs.test :refer-macros [deftest is]]
            [labs-4-cource.poligons
             :refer
             [->Poligon
              determ-2
              edge-vector
              edges-mult
              grehem-extra-point
              grehem-shell
              grehem-sort-by-angle
              is-in-grehem-shell
              is-poligon-convex]]))

(deftest creatation-poligon
  (is (= {:type :poligon :points [[0 0] [1 1] [2 3]]} (->Poligon [[0 0] [1 1] [2 3]]))))

(deftest determ-2-test
  (is (= 17 (edges-mult [[[2 2] [7 1]] [[7 1] [9 4]]])))
  (is (= [5 -1] (edge-vector [[2 2] [7 1]])))
  (is (= 17 (determ-2 [[5 -1] [2 3]]))))

(def pol-a (->Poligon [[2 2] [7 1] [9 4] [4 5]]))

(def pol-b (->Poligon [[1 6] [5 2] [7 6] [4 4]]))

(deftest convex-poligon-test
  (is (= true (is-poligon-convex pol-a)))
  (is (= false (is-poligon-convex pol-b))))

(def points-for-grehem [[21 14] [11 8] [21 18] [24 23] [15 20] [11 14] [8 23]])

(deftest grehem-algo-test
  (is (= [11 8] (grehem-extra-point points-for-grehem)))
  (is (= [11 12] (grehem-extra-point [[13 12] [11 12] [14 12]])))
  (is (= [[21 14] [21 18] [24 23] [15 20] [11 14] [8 23]] (grehem-sort-by-angle [11 8] points-for-grehem))))

(deftest points-is-in-grehem-shell
    (is (not (is-in-grehem-shell [[21 14] [21 18] [24 23]]))))

(deftest grehem-shell-test
    (is (= [[5 2] [7 6] [1 6]] (grehem-shell [[5 2] [7 6] [4 4] [1 6]])))
    (is (= [[1 1] [5 1] [3 6]] (grehem-shell [[1 1] [3 3] [5 1] [3 6]]))))

(cljs.test/run-tests 'labs-4-cource.test.poligons)
