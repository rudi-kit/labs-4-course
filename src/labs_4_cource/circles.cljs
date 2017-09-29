(ns labs-4-cource.circles
  (:require [labs-4-cource.primitives :refer [line-points]]
            [cljs.test :refer-macros [are deftest run-tests is]]))

(defn pow-2 [x]
  (* x x))

(defn length [[x1 y1] [x2 y2]]
  (Math/sqrt (+ (pow-2 (- x2 x1)) (pow-2 (- y2 y1)))))

(defn ->Circle [p1 p2]
  {:type :circle :center p1 :radius (length p1 p2)})

(defmethod line-points :circle [{:keys [center radius]}]
  1)

(deftest length-test
  (is (= (length [0 0] [3 4]) 5)))

(deftest ->Circle-test
  (is (= (->Circle [0 0] [3 4]) {:type :circle, :center [0 0], :radius 1})))
