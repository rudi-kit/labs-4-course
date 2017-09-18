(ns labs-4-cource.primitives
  (:require [taoensso.timbre :as log :refer [get-env spy]]))

(defn floor [n]
  (int (+ n .5)))

(defn calc-steps [coordinate]
  (mapv Math/sign coordinate))

(defn next-brezenhame-point  [dx dy x-step y-step [x y e]]
  )

(defn brezenhame-line [p1 p2]
    (let [[x1 y1] p1
          [x2 y2] p2
          dx  (Math/abs (- x2 x1))
          dy  (Math/abs (- y2 y1))
          e (- (* 2 dy) dx)
          [x-step y-step] (calc-steps [(- x2 x1) (- y2 y1)])]
        (->>  [x1 y1 e]
              (iterate
               (fn [[x y e]]
                   (if (< e 0)
                       ;; step throw longer axis
                       [(+ x-step x) y (+ e (* 2 dy))]
                       ;; extra step throw shorter axis
                       [(+ x-step x) (+ y-step y) (+ e (* 2 dy) (- (* 2 dx)))])))
              (map (fn [[x y e]]  [(floor x) (floor y) e]))
              (take (+ 1  dx))
              )))
(comment
    (brezenhame-line [1 4] [9 5]))


(defmulti line-points :type)
(defmethod line-points :simple [{:keys [p1 p2]}]
    (let [[x1 y1] p1
          [x2 y2] p2
          length (max (Math/abs (- x2 x1)) (Math/abs (- y2 y1)))
          dx (/ (- x2 x1) length)
          dy (/ (- y2 y1) length)]
        (->> [x1 y1]
             (iterate (fn [[x y]] [(+ x dx) (+ y dy)]))
             (take length)
             (map (fn [[x y]] [(floor x) (floor y)])))))

(defmethod line-points :be [{:keys [p1 p2]}]
    (map (fn [[x y]] [x y]) (brezenhame-line p1 p2)))

(defmethod line-points :wu [{:keys [p1 p2]}]
    (let [[x1 y1] p1
          [x2 y2] p2
          dx  (Math/abs (- x2 x1))
          dy  (Math/abs (- y2 y1))
          e (- (* 2 dy) dx)
          length (max (Math/abs (- x2 x1)) (Math/abs (- y2 y1)))]
      (->> (brezenhame-line p1 p2)
           (map (fn [[x y e]] [x y (/ (+ dx (Math/abs e)) (* 2 length))]))
           (map (fn [[x y e]] [[x y (- 1 e)] [x (+ y 1) e]]))
           (mapcat identity))))

(comment
    
    (line-points {:type :wu :p1 [1 4] :p2 [9 5]}))

(defn ->SimpleLine [p1 p2] {:type :simple :p1 p1 :p2 p2})
(defn ->BrezenhameLine [p1 p2] {:type :be :p1 p1 :p2 p2})
(defn ->SmoothLine [p1 p2] {:type :wu :p1 p1 :p2 p2})
