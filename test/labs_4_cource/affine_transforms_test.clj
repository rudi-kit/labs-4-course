(ns labs-4-cource.affine-transforms-test
  (:require [clojure.test :refer [deftest is]]
            [labs-4-cource.affine-transformations :refer [translate]]))

(deftest translate-test
  (is (= '([101.0 101.0 0.0] [301.0 301.0 300.0] [101.0 301.0 300.0])
         (translate '([100 100 0]
                      [300 300 300]
                      [100 300 300]) [1 1 0]))))
