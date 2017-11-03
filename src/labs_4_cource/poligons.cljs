(ns labs-4-cource.poligons
  (:require [labs-4-cource.aproximation :refer [linearise]]
            [labs-4-cource.first-order-lines :refer [line-points]]))

(defn ->Poligon [points]
  {:type :poligon :points points})

(defn determ-2 [[[x1 y1]
                 [x2 y2] :as points]]
  "determ of martix 2X2"
  {:pre [(= 2 (count points))]}
  (+ (* x1 y2) (- (* y1 x2))))

(defn edge-vector [edge]
  "calculate vector from 2 points"
  {:pre (= 2 (count edge))}
  (apply mapv (comp - -) edge))

(defn edges-mult [edges]
  "calculate vector mult of 2 edges"
  {:pre (= 2 (count edges))}
  (determ-2 (mapv edge-vector edges)))

(defn edges-points-mult [points]
  "calculate vector mult of 2 edges. adjacent edges provides via 3 points"
  {:pre [(= 3 (count points))]}
  (edges-mult (partition 2 1 points points)))

(defn is-poligon-convex [{points :points}]
  "return true if poligon is convex else - false"
  (let [edges (partition 2 1 points points)
        vectors (mapv edges-mult (partition 2 1 edges edges))]
    (loop [s (Math/sign (first vectors))
           vectors (rest vectors)]
      (if (empty? vectors)
        true
        (if (= s (Math/sign (first vectors)))
          (recur s (rest vectors))
          false)))))

(defn grehem-extra-point [points]
  (first (sort-by (comp vec reverse) points)))

(defn square [x] (* x x))

(defn distance [& args]
  (Math/sqrt (reduce + (apply map (comp square -) args))))

(defn grehem-sort-by-angle [[xi yi :as extra-point] points]
  (let [points (remove #{extra-point} points)
        polar-angles (map ;; seq polar angles
                      (fn [[xj yj]] (Math/atan2 (- yj yi) (- xj xi)))
                      points)
        distances (map (partial distance extra-point) points)]
    (map  last
          (sort
           (map vector polar-angles distances points)))))

(grehem-sort-by-angle [11 8] [[21 14] [11 8] [21 18] [24 23] [15 20] [11 14] [8 23]])

(map (partial distance [0 0]) [[21 14] [11 8] [21 18] [24 23] [15 20] [11 14] [8 23]])

(map ;; seq polar angles
 (fn [[xj yj]] (Math/acos (/ (- yj 0) (- xj 0))))
 [[21 14] [11 8] [21 18] [24 23] [15 20] [11 14] [8 23]])

(defn is-in-grehem-shell [points]
  (< 0 (edges-points-mult points)))

(defn grehem-shell
  "collect grehem shell from sorted points [extra-points & sorted-points]"
  ([[p1 p2 & more]] (grehem-shell more (list  p2 p1)))
  ([[p3 & more :as unchecked] [p2 p1 :as stack]]
   (pr unchecked stack)
   (if (empty? unchecked)
     stack
     (if (is-in-grehem-shell [p1 p2 p3])
       ;; if pass test push to stack
       (recur more (conj stack p3))
       ;; if don't pass test pop from stack
       (recur unchecked (pop stack))))))

(defn grehem-poligon [points]
  "collect poligon using Grehem algo"
  (let [extra-point (grehem-extra-point points)
        sorted (grehem-sort-by-angle extra-point points)]
    (->Poligon (grehem-shell (into [extra-point] sorted)))))

(defmethod line-points :poligon [{points :points}]
  (linearise (concat points [(first points)])))

(line-points {:type :poligon, :points '((171 163) (430 214) (162 408))})
