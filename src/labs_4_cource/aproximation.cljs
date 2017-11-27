(ns labs-4-cource.aproximation
  (:require [clojure.core.matrix :as m]
            [labs-4-cource.first-order-lines
             :refer
             [->BrezenhameLine line-points]]
            [labs-4-cource.math-helpers :refer [round]]))

(defn get-form-points [matrix [p1 p2 p3 p4]]
  (m/emap
   round
   (m/mmul
    (m/matrix
     (map (fn [t] [(* t t t) (* t t) t 1]) (range 0 1.01 0.05)))
    matrix
    (m/matrix (list p1
                    p2
                    p3
                    p4)))))

(defn linearise [points]
  (mapcat line-points
          (map (fn [[p1 p2]] (->BrezenhameLine p1 p2))
               (partition 2 1 points))))

(defn ->Ermit [p1 p2 p3 p4]
  (let [[x1 y1] p1
        [x2 y2] p2
        [x3 y3] p3
        [x4 y4] p4]
    {:type :ermit :p1 p1 :p4 p4 :v1 [(- x2 x1) (- y2 y1)] :v4 [(- x4 x3) (- y4 y3)]}))

(def ermit-matrix
  (m/matrix
   [[2 -2  1  1]
    [-3  3 -2 -1]
    [0  0  1  0]
    [1  0  0  0]]))

(defmethod line-points :ermit [{:keys [p1 p4 v1 v4]}]
  (linearise (get-form-points ermit-matrix [p1 p4 v1 v4])))

(defn ->Bezie [p1 p2 p3 p4]
  {:type :bezie :p1 p1 :p2 p2 :p3 p3 :p4 p4})

(def bezie-matrix
  (m/matrix
   [[-1  3 -3 1]
    [3 -6  3 0]
    [-3  3  0 0]
    [1  0  0 0]]))

(comment (first @labs-4-cource.storage/primitives) {:type :bezie,
                                                    :p1 (7.25 148), 
                                                    :p2 (135.25 148.25), 
                                                    :p3 (7.25 148), 
                                                    :p4 (12.25 36.75)}
         (reset! labs-4-cource.storage/primitives [{:type :ermit
                                                    :p1 [5.25 148.5]
                                                    :p4 [127.5 121.5]
                                                    :v1 [4.25 -144.5] 
                                                    :v4 [112.25 -24.75]}]))



(defmethod line-points :bezie [{:keys [p1 p2 p3 p4]}]
  (linearise (get-form-points bezie-matrix [p1 p2 p3 p4])))


(defn ->Spline [& rest]
  (let [f (take 1 rest)
        l (take-last 1 rest)]
    {:type :spline :points (into [] (concat f rest l ))}))

(def b-spline-matrix
  (m/mul
   (m/matrix
    [[-1 3 -3 1]
     [3 -6 3 0]
     [-3 0 3 0]
     [1 4 1 0]])
   (/ 1 6)))

(defn b-spline-segment [[p1 p2 p3 p4]]
  (get-form-points b-spline-matrix [p1 p2 p3 p4]))

(defmethod line-points :spline [{points :points}]
    (if (<= 4 (count points))
        (linearise (mapcat b-spline-segment (partition 4 1 points)))
        []))
