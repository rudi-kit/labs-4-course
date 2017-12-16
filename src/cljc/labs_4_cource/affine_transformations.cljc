(ns labs-4-cource.affine-transformations
  #?(:clj (:gen-class))
  (:require [clojure.core.matrix :as m]
            [taoensso.timbre :as timbre]
            #?(:cljs [taoensso.timbre :refer-macros [debug spy]])))

#?(:clj (timbre/refer-timbre))

(defn diff [p1 p2]
  (spy :info (mapv - p2 p1)))

(defn get-center [points]
  (let [n (count points)]
    (mapv (fn [x] (/ x n))
          (apply map + points))))

(defn degree->radian [angle]
  (* angle (/ Math/PI 180)))

(defn point-> [point]
  {:pre [(= 3 (count point))]}
  (conj point 1))

(defn ->point [[x y z w :as point]]
  {:pre [(= 4 (count point))]}
  [(/ x w) (/ y w) (/ z w)])

(defn translation-matrix [[x y z :as params]]
  {:pre (= 3 (count params))}
  (m/matrix
   [[1 0 0 0]
    [0 1 0 0]
    [0 0 1 0]
    [x y z 1]]))

(defn translate [points translates]
  {:pre [(= 3 (count translates))]}
  (map ->point
       (seq
        (m/mmul
         (m/matrix (map point-> points))
         (translation-matrix translates)))))

(defn rotation-matrix [key angle]
  {:pre [(contains? #{:x :y :z} key)]}
  (let [sin (Math/sin angle)
        cos (Math/cos angle)]
    (cond (= :z key)
          (m/matrix
           [[cos     sin 0 0]
            [(- sin) cos 0 0]
            [0       0   1 0]
            [0       0   0 1]])
          (= :x key)
          (m/matrix
           [[1 0       0   0]
            [0 cos     sin 0]
            [0 (- sin) cos 0]
            [0 0       0   1]])
          (= :y key)
          (m/matrix
           [[cos 0 (- sin) 0]
            [0   1 0       0]
            [sin 0 cos     0]
            [0   0 0       1]]))))

(defn rotate [points [x y z :as rotates]]
  {:pre [(= 3 (count rotates))]}
  (let [center (get-center points)]
    (map ->point
         (seq
          (m/mmul
           (m/matrix (map point-> points))
           (translation-matrix (map - center))
           (rotation-matrix :x x)
           (rotation-matrix :y y)
           (rotation-matrix :z z)
           (translation-matrix center))))))

(defn scale-matrix [[x y z :as scale]]
  {:pre [(= 3 (count scale))]}
  (m/matrix
   [[x 0 0 0]
    [0 y 0 0]
    [0 0 z 0]
    [0 0 0 1]]))

(defn scale [points scales]
  {:pre [(= 3 (count scales))]}
  (let [center (get-center points)]
    (map ->point
         (seq
          (m/mmul
           (m/matrix (map point-> points))
           (translation-matrix (map - center))
           (scale-matrix scales)
           (translation-matrix center))))))

(defn projection-matrix [z]
  {:pre [(number? z)]}
  (m/matrix
   [[1 0 0 0]
    [0 1 0 0]
    [0 0 1 (/ 1 z)]
    [0 0 0 0]]))

(defn project [points d]
  {:pre [(number? d)]}
  (let [center (get-center points)]
    (map ->point
         (seq
          (m/mmul
           (m/matrix (map point-> points))
           (projection-matrix d))))))
