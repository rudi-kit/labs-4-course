(ns labs-4-cource.test.amputation
  (:require [cljs.test :refer-macros [deftest is]]
            [labs-4-cource.amputation
             :refer
             [amputate-Koen-Sazerland
              four-bits-class
              four-bits-code
              get-cross-points
              is-line-inclined
              line-point?
              split-line]]))

(deftest four-bits-code-test
  (is (= (four-bits-code [1 1] [[2 4] [4 0]]) 2))
  (is (= (four-bits-code [3 3] [[2 4] [4 0]]) 0))
  (is (= (four-bits-code [5 3] [[2 4] [4 0]]) 1))
  (is (= (four-bits-code [5 5] [[2 4] [4 0]]) 9)))

(deftest four-bits-class-test
  (is (= (four-bits-class [[1 1] [5 5]] [[2 4] [4 0]]) :both))
  (is (= (four-bits-class [[2 2] [4 2]] [[2 4] [4 0]]) :visible))
  (is (= (four-bits-class [[2 2] [2 8]] [[2 4] [4 0]]) :both))
    (is (= (four-bits-class [[1 2] [1 8]] [[2 4] [4 0]]) :non-visible))
    (is (= (four-bits-class [[1 1] [5 5]] [[2 4] [4 0]]) :both)))

(deftest get-cross-point-test
  (is (= (get-cross-points [[1 1] [5 5]] [[2 4] [4 0]]) [[2 2] [4 4]]))
  (is (= (get-cross-points [[2 2] [2 8]] [[2 4] [4 0]]) [[2 4]])))

(deftest line-point?-test
  (is (= ((line-point? [[2 2] [2 8]]) [2 0]) false))
  (is (= ((line-point? [[1 1] [5 5]]) [0 0]) false))
  (is (= ((line-point? [[2 2] [2 8]]) [2 4]) true)))

(deftest is-line-inclined-test
  (is (= (is-line-inclined [[1 1] [5 5]]) true))
  (is (= (is-line-inclined [[1 5] [5 5]]) false))
  (is (= (is-line-inclined [[1 1] [1 5]]) false)))

(deftest split-line-test
  (is (= (split-line [[1 1] [5 5]] [[2 4] [4 0]]) {:visible [[[2 2] [4 4]]], :non-visible [[[1 1] [2 2]] [[4 4] [5 5]]]}))
  (is (= (split-line [[3 3] [8 3]] [[2 4] [4 0]]) {:visible [[[3 3] [4 3]]], :non-visible [[[4 3] [8 3]]]}))
  (is (= (split-line [[3 1] [1 3]] [[2 4] [4 0]]) {:visible [[[2 2] [3 1]]], :non-visible [[[1 3] [2 2]]]})))

(deftest amputate-Koen-Sazerland-test
    (is (=     (amputate-Koen-Sazerland [[[1 1] [5 5]] [[3 1] [1 4]] [[3 3] [8 3]]] [[2 4] [4 0]])
               {:visible [[[2 2] [4 4]] [[1 4] [2 2.5]] [[3 3] [4 3]]],
                :non-visible [[[1 1] [2 2]]
                              [[4 4] [5 5]]
                              [[1 4] [1 4]]
                              [[2 2.5] [3 1]]
                              [[4 3] [8 3]]]})))

(cljs.test/run-tests 'labs-4-cource.test.amputation)
