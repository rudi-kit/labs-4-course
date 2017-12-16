(ns labs-4-cource.poligons-test
  (:require [clojure.test :refer [deftest is]]
            [labs-4-cource.poligons
             :refer
             [->Poligon
              determ-2
              edge-vector
              edges-mult
              fill-poligon-with-sorter-edges
              find-normals
              get-cross-point
              get-cross-points
              get-hords
              extra-point
              grehem-shell
              sort-by-angle
              is-in-grehem-shell
              is-poligon-convex
              jarvis-shell]]))

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
  (is (= [11 8] (extra-point points-for-grehem)))
  (is (= [11 12] (extra-point [[13 12] [11 12] [14 12]])))
  (is (= [[21 14] [21 18] [24 23] [15 20] [11 14] [8 23]] (sort-by-angle [11 8] points-for-grehem))))

(deftest points-is-in-grehem-shell
  (is (not (is-in-grehem-shell [[21 14] [21 18] [24 23]]))))

(deftest grehem-shell-test
  (is (= [[5 2] [7 6] [1 6]] (grehem-shell [[5 2] [7 6] [4 4] [1 6]])))
  (is (= [[1 1] [5 1] [3 6]] (grehem-shell [[1 1] [5 1] [3 3] [3 6]])))
  (is (= '([1 0] [0 3] [2 5] [4 4] [5 3] [5 1] [1 0])   (jarvis-shell [[1 0] [5 1] [5 3] [4  2] [3 3] [4 4] [2 5] [0 3]]))))

(deftest jarvis-algo-test
  (is (= [[5 2]  [1 6] [7 6] [5 2]] (jarvis-shell [[1 6] [4 4] [7 6] [5 2]])))
  (is (= [[1 1] [3 6] [5 1] [1 1]] (jarvis-shell [[1 1] [5 1] [3 3] [3 6]])))
  (is (= '([1 0] [0 3] [2 5] [4 4] [5 3] [5 1] [1 0]) (jarvis-shell [[1 0] [5 1] [5 3] [4  2] [3 3] [4 4] [2 5] [0 3]]))))

(deftest normals-test
  (is (=  [[0 2] [-1 -1] [1 -1]] (find-normals [[1 1] [3 1] [2 2]])))
  (is (=  [[3 -2] [-1 -2] [-3 1] [1 3]] (find-normals [[1 2] [3 5] [5 4] [4 1]]))))

(deftest get-hords-test
  (is (=  [[4 2] [1 -4] [-4 -2] [-1 4]] (get-hords [[1 2] [3 5] [5 4] [4 1]]))))

(deftest cross-points-test
  (is (=  [2 2] (get-cross-point [3 -3] [0 2] [7 2] [4 4])))
  (is (=  [6 2] (get-cross-point [-6 0] [0 2] [7 2] [6 6])))
  (is (=  [8 2] (get-cross-point [-6 0] [0 2] [7 2] [8 6])))
  (is (=  nil (get-cross-point [-6 0] [0 2] [0 2] [8 6]))))

(deftest crosses-with-poiligon-test
  (is (=  [[1 2] [6 2]] (get-cross-points [[0 2] [7 2]] [[1 1] [1 4] [6 6] [6 0]]))))

(deftest fill-poligon-with-sorted-edges
  (is (= [[[0 0] [9 0]] [[1 1] [5 1]] [[5 1] [9 1]] [[2 2] [4 2]] [[6 2] [9 2]] [[3 3] [3 3]] [[7 3] [9 3]] [[8 4] [9 4]] [[9 5] [9 5]]]
         (fill-poligon-with-sorter-edges [[0 0] [3 3] [5 1] [9 5] [9 0]]))))
