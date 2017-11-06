(ns labs-4-cource.math-helpers)

(defn round [n]
  (int (+ n .5)))

(defn round-vec [v]
    (mapv round v))

(defn determ-2 [[[x1 y1]
                 [x2 y2] :as points]]
  "determ of martix 2X2"
  {:pre [(= 2 (count points))]}
  (+ (* x1 y2) (- (* y1 x2))))

(defn square [x] (* x x))

(defn distance [& args]
  (Math/sqrt (reduce + (apply map (comp square -) args))))
