(ns labs-4-cource.primitives)

(defprotocol Line
  (line-points [this] "get all pixel coordinates of line"))

(defn floor [n]
  (int (+ n .5)))

(deftype SimpleLine [p1 p2]
  Line
  (line-points [this]
    (let [[x1 y1] p1
          [x2 y2] p2
          length (max (Math/abs (- x2 x1)) (Math/abs (- y2 y1)))
          dx (/ (- x2 x1) length)
          dy (/ (- y2 y1) length)]
      (->> [x1 y1]
           (iterate (fn [[x y]] [(+ x dx) (+ y dy)]))
           (take length)
           (map (fn [[x y]] [(floor x) (floor y)]))))))

(defn calc-steps [coordinate]
  (mapv Math/sign coordinate))

(defn next-brezenhame-point  [dx dy x-step y-step [x y e]]
  (if (>= e 0) [(+ x-step x) (+ y-step y) (+ e (* 2 dy) (- (* 2 dx)))]
      [(+ x-step x) y (+ e (* 2 dy))]))

(defn brezenhame-line [p1 p2]
  (let [[x1 y1] p1
        [x2 y2] p2
        dx  (Math/abs (- x2 x1))
        dy  (Math/abs (- y2 y1))
        e (- (* 2 dy) dx)
        [x-step y-step] (calc-steps [(- x2 x1) (- y2 y1)])]
    (->>  [x1 y1 e]
          (iterate (partial next-brezenhame-point dx dy x-step y-step))
          (take (+ 1  dx))
          (map (fn [[x y e]] [(floor x) (floor y) e]))
          )))

(deftype BrezenhameLine [p1 p2]
  Line
  (line-points [this]
      (map (fn [[x y]] [x y]) (brezenhame-line p1 p2))))

(deftype SmoothLine [p1 p2]
  Line
  (line-points [this]
    (let [[x1 y1] p1
          [x2 y2] p2
          length (max (Math/abs (- x2 x1)) (Math/abs (- y2 y1)))]
        (->> (brezenhame-line p1 p2)
             (map (fn [[x y e]] [[x y (/ e length)] [x (+ y 1) (- 1 (/ e length))]]))
             (mapcat identity)
             ))))
