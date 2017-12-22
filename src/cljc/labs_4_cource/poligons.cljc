(ns labs-4-cource.poligons
  (:require [labs-4-cource.aproximation :refer [linearise]]
            [labs-4-cource.first-order-lines :refer [line-points]]
            [labs-4-cource.math-helpers :refer [round round-vec sign]]
            [labs-4-cource.utils :refer [get-min-max-coordinates poligon-edges]]))

(defn ->Poligon [points]
  {:type :poligon :points (mapv (fn [[x y]] [x y]) (mapv round-vec points))})

(defn determ-2 [[[x1 y1]
                 [x2 y2] :as points]]
  "determ of martix 2X2"
  {:pre [(= 2 (count points))]}
  (+ (* x1 y2) (- (* y1 x2))))

(defn scalar-mult [vectors]
  (reduce + (apply map * vectors)))

(defn normal [[x y]]
  "get perpendicular"
  [(- y) x])

(defn mul
  "multiply every collections element to scalar"
  [col scalar]
  {:pre [(number? scalar)]}
  (mapv * col (repeat scalar)))

(defn edge-vector [edge]
  "calculate vector from 2 points"
  {:pre (= 2 (count edge))}
  (apply mapv (comp - -) edge))

(defn calc-polar-angle [[x1 y1] [x2 y2]]
  (Math/atan2 (- y2 y1) (- x2 x1)))

(defn polar-angle [p1 p2]
  (calc-polar-angle p1 p2))

(defn calc-polar-angle* [point points]
  (map polar-angle (repeat point) points))

(defn edges-mult [edges]
  "calculate vector mult of 2 edges"
  {:pre (= 2 (count edges))}
  (determ-2 (mapv edge-vector edges)))

(defn edges-points-mult [points]
  "calculate vector mult of 2 edges. adjacent edges provides via 3 points"
  {:pre [(= 3 (count points))]}
  (edges-mult (poligon-edges points)))

(defn is-poligon-convex [{points :points}]
  "return true if poligon is convex else - false"
  (let [edges (poligon-edges points)
        vectors (mapv edges-mult (poligon-edges edges))]
    (loop [s (sign (first vectors))
           vectors (rest vectors)]
      (if (empty? vectors)
        true
        (if (= s (sign (first vectors)))
          (recur s (rest vectors))
          false)))))

(defn point-by-line-comparator [p1 p2]
  (compare (vec (reverse p1)) (vec (reverse p2))))

(defn extra-point [points]
  (first (sort point-by-line-comparator points)))

(defn square [x] (* x x))

(defn distance [& args]
  (Math/sqrt (reduce + (apply map (comp square -) args))))

(defn sort-by-angle [[xi yi :as extra-point] points]
  (let [points (remove #{extra-point} points)
        polar-angles (calc-polar-angle* extra-point points)
        distances (map (partial distance extra-point) points)]
    (map last
         (sort
          (map vector polar-angles distances points)))))

(defn is-in-grehem-shell [points]
  (< 0 (edges-points-mult points)))

(defn grehem-shell
  "collect grehem shell from sorted points [extra-points & sorted-points]"
  ([[p1 p2 & more]] (grehem-shell more (list  p2 p1)))
  ([[p3 & more :as unchecked] [p2 p1 :as stack]]
   (println [p1 p2 p3]  stack unchecked)
   (if (empty? unchecked)
     stack
     (if (is-in-grehem-shell [p1 p2 p3])
       ;; if pass test push to stack
       (recur more (conj stack p3))
       ;; if don't pass test pop from stack
       (recur unchecked (pop stack))))))

(defn grehem-poligon [points]
  "collect poligon using Grehem algo"
  (let [extra-point (extra-point points)
        sorted (sort-by-angle extra-point points)]
    (->Poligon (grehem-shell (into [extra-point] sorted)))))

(defmethod line-points :poligon [{points :points}]
  (linearise (concat points [(first points)])))

(defn is-right-point [p1 p2 tested]
  {:pre [(= 0 (distance p1 p2))]}
  (< (edges-points-mult [p1 p2 tested]) 0))

(defn is-lower [p1 p2]
  (> (p1 1) (p2 1)))

(defn split-after [pred col]
  (let [[before [elem & after]] (split-with pred col)]
    [(concat before [elem]) after]))

(defn jarvis-right-chain [limit [current-point :as chain] points]
  {:pre [(list? chain)]}
  (if (= limit current-point)
    chain
    (let [[next-point & rest] (sort-by-angle current-point points)
          rest (remove (partial is-lower next-point) rest)]
      (println limit current-point next-point chain points)
      (recur limit (conj chain  next-point) rest))))

(defn jarvis-left-chain [limit [current-point :as chain] points]
  {:pre [(list? chain)]}
  (if (= limit current-point)
    chain
    (let [[next-point & rest]
          (sort-by-angle current-point points)
          rest (remove (complement (partial is-lower next-point)) rest)]
      (println limit current-point next-point chain points)
      (recur limit (conj chain  next-point) rest))))

(defn jarvis-shell
  "build minimal convex shell via jarvis algo.
  returns points to build a poligon"
  ([points]
   (let [[extra :as points] (sort point-by-line-comparator points)
         the-most-up (last points)
         [the-most-up]
         (sort-by first (filter (fn [[x y]] (= y (the-most-up 1))) points))
         [to-right-chain to-left-chain]
         (split-after (complement #{the-most-up})
                      (sort-by-angle extra points))
         right-chain (jarvis-right-chain the-most-up (list extra) to-right-chain)
         chain (jarvis-left-chain extra right-chain (conj to-left-chain extra))]
     chain)))

(defn jarvis-poligon
  "build minimal convex shell via jarvis algo.
  returns a poligon"
  [points]
  (->Poligon (jarvis-shell points)))

(defn get-hords [points]
  (let [count (count points)]
    (map edge-vector (map-indexed (fn [idx el] [el (nth points (rem (+ 2 idx) count))]) points))))

(defn find-normals
  "return inner normals to poligons edges.
  return list of vectors"
  [points]
  {:pre [(vector? points)]}
  (let [normals (map normal (map edge-vector (poligon-edges points)))
        hords (get-hords points)
        signs (map (comp sign scalar-mult vector) normals hords)]
    (map mul normals signs)))

(defn parameter-line [p1 p2 t]
  {:pre [(number? p1)
         (number? p2)
         (number? t)]}
  (+ p1 (* (- p2 p1) t)))

(defn get-cross-point
  "W = P_1 - F
   D = P_2 - P_1"
  [normal P_1 P_2 F]
  (let [W (mapv - F P_1)
        D (mapv - P_2 P_1)]
    (if (= 0 (scalar-mult [normal D]))
      nil
      (if (= D [0 0])
        P_1
        (let [t (/ (scalar-mult [normal W]) (scalar-mult [normal D]))]
          (mapv parameter-line P_1 P_2 (repeat t)))))))

(defn line-point?
  [[x y] points]
  (let [[[x1 y1] [x2 y2]] (get-min-max-coordinates points)]
    (and (>= x x1) (<= x x2) (>= y y1) (<= y y2))))

(defn filter* [f & [filtered :as args]]
  (let [flags (apply map f args)]
    (filter identity (map (fn [el flag] (when flag el)) filtered flags))))

(defn get-cross-points
  [[P_1 P_2] points]
  (let [normals (find-normals points)
        edges (poligon-edges points)
        cross-points (filter
                      identity
                      (map get-cross-point normals (repeat P_1) (repeat P_2) points))]
    (filter* line-point?  cross-points edges)))

(defn horizont-line
  [x1 x2 y]
  [[x1 y] [x2 y]])

(defn line-tan [[[x1 y1] [x2 y2]]]
  (/ (- x2 x1) (- y2 y1)))

(defn get-cross-points1 [y lines]
  (let [tans (map line-tan lines)
        cross-points
        (map (comp
              round-vec
              (fn [[[x1 y1]] tan] [(+ (* (- y y1) tan) x1) y]))
             lines tans)]
    (filter* line-point?
             cross-points
             lines)))

(defn fill-poligon-with-sorter-edges
  [points]
  (let [edges (poligon-edges points)
        points (sort-by second points)
        miny (round (second (first points)))
        maxy (round (second (last points)))]
    (partition
     2
     (sort point-by-line-comparator
           (concat
            (mapcat
             get-cross-points1
             (range miny (inc maxy))
             (repeat edges))
            (drop 1 (drop-last points)))))))
