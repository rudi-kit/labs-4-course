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
      (->> [x1 y1 0]
           (iterate (fn [[x y i]] [(+ x dx) (+ y dy) (+ i 1)]))
           (take-while (fn [[x y i]] (<= i length)))
           (map (fn [[x y]] [(floor x) (floor y)]))))))

(defn calc-steps [coordinate]
  (mapv Math/sign coordinate))

(defn next-brezenhame-point  [dx dy x-step y-step [x y e]]
  (if (>= e 0) [(+ x-step x) (+ y-step y) (+ e (* 2 dy) (- (* 2 dx)))]
      [(+ x-step x) y (+ e (* 2 dy))]))

(deftype BrezenhameLine [p1 p2]
  Line
  (line-points [this]
    (let [[x1 y1] p1
          [x2 y2] p2
          dx  (Math/abs (- x2 x1))
          dy  (Math/abs (- y2 y1))
          e (- (* 2 dy) dx)
          [x-step y-step] (calc-steps [(- x2 x1) (- y2 y1)])]
      (->>  [x1 y1 e]
            (iterate (partial next-brezenhame-point dx dy x-step y-step))
            (take (+ 1  dx))
            (map (fn [[x y]] [x y]))
            (map (fn [[x y]] [(floor x) (floor y)]))))))

(deftype SmoothLine [p1 p2]
  Line
  (line-points [this]
    (let [[x1 y1] p1
          [x2 y2] p2]
      [[0 0] [1 1] [2 2] [4 4] [5 5]])))
