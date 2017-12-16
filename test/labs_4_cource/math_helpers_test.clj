(ns labs-4-cource.math-helpers-test
  (:require [clojure.test :refer [deftest is]]
            [labs-4-cource.math-helpers :refer :all]))

(deftest sign-test
  (is (= (sign 0) 0))
  (is (= (sign -1) -1))
  (is (= (sign 1) 1)))

(deftest abs-test
  (is (abs 0) 0)
  (is (abs 1) 1)
  (is (abs -1) 1))
