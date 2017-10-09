(ns labs-4-cource.aproximation
  (:require [clojure.core.matrix :as m]
            [labs-4-cource.first-order-lines :refer [floor line-points]]))

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
  (m/emap
   floor
   (m/mmul
    (m/matrix
     (map (fn [t] [(* t t t) (* t t) t 1]) (range 0 1 0.01)))
    ermit-matrix
    (m/matrix (list p1
                    p4
                    v1
                    v4)))))
(line-points (->Ermit [30 30] [240 300] [130 20] [200 400]))

(defn ->Bezie [p1 p2 p3 p4]
  {:type :bezie :p1 p1 :p2 p2 :p3 p3 :p4 p4})

(def bezie-matrix
  (m/matrix
   [[-1  3 -3 1]
    [3 -6  3 0]
    [-3  3  0 0]
    [1  0  0 0]]))

(defmethod line-points :bezie [{:keys [p1 p2 p3 p4]}]
  (m/emap
   floor
   (m/mmul
    (m/matrix
     (map (fn [t] [(* t t t) (* t t) t 1]) (range 0 1 0.01)))
    bezie-matrix
    (m/matrix (list p1
                    p2
                    p3
                    p4)))))

(defn ->Spline [& rest]
  {:type :spline :points (into [] (concat (list (first rest)) rest (take-last 1 rest)))})

(comment
  (->Spline [0 0] [100 100]))

(def b-spline-matrix
  (m/mul
   (m/matrix
    [[-1 3 -3 1]
     [3 -6 3 0]
     [-3 0 3 0]
     [1 4 1 0]])
   (/ 1 6)))

(defn b-spline-segment [[p1 p2 p3 p4]]
  (m/emap
   floor
   (m/mmul
    (m/matrix
     (map (fn [t] [(* t t t) (* t t) t 1]) (range 0 1 0.01)))
    b-spline-matrix
    (m/matrix (list p1
                    p2
                    p3
                    p4)))))

(defmethod line-points :spline [{points :points}]
  (mapcat b-spline-segment  (partition 4 1 points)))

(comment
  (line-points {:type :spline :points [[0 0] [100 100] [200 200] [100 100]]})
  (b-spline-segment [[0 0] [100 100] [200 200] [100 100]]))
