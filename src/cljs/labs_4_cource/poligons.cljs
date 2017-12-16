(ns labs-4-cource.poligons
  (:require [labs-4-cource.aproximation :refer [linearise]]
            [labs-4-cource.first-order-lines :refer [->SimpleLine line-points]]
            [labs-4-cource.utils :refer [get-min-max-coordinates poligon-edges]]))

(defn ->Poligon [points]
  {:type :poligon :points points})

(defn determ-2 [[[x1 y1]
                 [x2 y2] :as points]]
  "determ of martix 2X2"
  {:pre [(= 2 (count points))]}
  (+ (* x1 y2) (- (* y1 x2))))

(defn scalar-mult [vectors]
  (reduce + (apply map * vectors)))

(reduce + (apply map * [[-3 2] [4 2]]))

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
        signs (map (comp Math/sign scalar-mult vector) normals hords)]
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
    (if (= D [0 0])
      P_1
      (let [t (/ (scalar-mult [normal W]) (scalar-mult [normal D]))]
        (mapv parameter-line P_1 P_2 (repeat t))))))

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
        cross-points (map get-cross-point normals (repeat P_1) (repeat P_2) points)]
    (filter* line-point?  cross-points edges)))

(defn horizont-line
  [x1 x2 y]
  [[x1 y] [x2 y]])

(defn fill-poligon-with-sorter-edges
  [points]
  (let [x-es (sort (map first points))
        y-es (sort (map second points))
        minx (first x-es)
        maxx (first (reverse x-es))
        miny (first y-es)
        maxy (first (reverse y-es))
        edges (poligon-edges points)]
    (partition
     2
     (sort-by (comp compare vec reverse)
              (mapcat
               get-cross-points
               (map (partial horizont-line minx maxx)
                    (range miny (inc maxy)))
               (repeat points))))))
