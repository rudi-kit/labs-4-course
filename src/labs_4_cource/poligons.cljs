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

(defn is-in-grehem-shell [points]
  (< 0 (edges-points-mult points)))

(defn grehem-shell
  "collect grehem shell from sorted points [extra-points & sorted-points]"
  ([[p1 p2 & more]] (grehem-shell more (list  p2 p1)))
  ([[p3 & more :as unchecked] [p2 p1 :as stack]]
   (if (empty? unchecked)
     (reverse stack)
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

(defn is-right-point [p1 p2 tested]
  {:pre [(= 0 (distance p1 p2))]}
  (< (edges-points-mult [p1 p2 tested]) 0))

(defn jarvis-extra-point
  "return [extra-point [points - right-point]]"
  [points]
  (let [[extra-point & other] (sort-by (comp vec reverse) points)]
    [extra-point other]))

(defn jarvis-the-most-right
  "return [right-point [points - right-point]]"
  ([fixed-point [right-point & tested-points :as points]]
   {:pre [(not (empty? points))]}
   ;; call algo function
   (jarvis-the-most-right [] fixed-point right-point tested-points))
  ([lefter-points fixed-point r-point [guess-point :as tested-points]]
   (if (empty? tested-points)
     [r-point lefter-points]
     (if (is-right-point fixed-point r-point guess-point)
       ;; if p is more right than r -> change r
       (recur (conj lefter-points r-point) fixed-point guess-point (rest tested-points))
       (recur (conj lefter-points guess-point) fixed-point r-point (rest tested-points))))))

(defn jarvis-shell
  "build minimal convex shell via jarvis algo.
  returns points to build a poligon"
  ([points]
   (let [[fixed-point other-points] (jarvis-extra-point points)]
     (jarvis-shell [fixed-point] fixed-point (concat other-points [fixed-point]))))
  ([[fixed-point :as shell] current-point other-points]
   (let [[right-point other-points] (jarvis-the-most-right current-point other-points)]
     (if (= right-point fixed-point)
       shell
       (recur (conj shell right-point) right-point other-points)))))

(defn jarvis-poligon
  "build minimal convex shell via jarvis algo.
  returns a poligon"
  [points]
  (->Poligon (jarvis-shell points)))
