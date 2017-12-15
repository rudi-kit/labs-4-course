(ns labs-4-cource.amputation
  (:require [labs-4-cource.utils :refer [get-min-max-coordinates]]))

(defn four-bits-code
  "get 4-bits code for point
  1st arg - point
  2nd - rectangle [[left-up] [bottom-right]]
  return int (up|down|right|left)"
  [[x y] [[x1 y1] [x2 y2]]]
  (bit-or 0
          (when (> y y1) 8)
          (when (< y y2) 4)
          (when (< x x1) 2)
          (when (> x x2) 1)))

(defn four-bits-class
  "get class of line via 4-bits code
  1st arg - line
  2nd - rectangle [[left-up] [bottom-right]]
  return - class {:visible | :non-visible | :both"
  [[p1 p2] rectangle]
  (let [p1-4-code (four-bits-code p1 rectangle)
        p2-4-code (four-bits-code p2 rectangle)]
    (if (not= 0 (bit-and p1-4-code p2-4-code))
      :non-visible
      (if (= 0 p1-4-code p2-4-code)
        :visible
        :both))))

(defn is-line-inclined
  [[[x1 y1] [x2 y2] :as line]]
  (not (or (= x1 x2) (= y1 y2))))

(defn tang
  [[[x1 y1] [x2 y2]]]
  (/ (- y2 y1) (- x2 x1)))

(defn line-point?
  [line]
  (let [[[x1 y1] [x2 y2]] (get-min-max-coordinates line)]
    (fn [[x y]]          (and (>= x x1) (<= x x2) (>= y y1) (<= y y2)))))

(defn get-cross-points
  "get points where line is cross rectangle
  1st arg - line
  2nd - rectangle [[left-up] [bottom-right]]
  return - {:visible [line] :non-visible [line]}"
  [[[x1 y1] [x2 y2] :as line] [[l u] [r b]]]
  (distinct
   (filterv
    (line-point? line)
    (if (is-line-inclined line)
      (let [m (tang line)]
        [[l (+ (* m (- l x1)) y1)]
         [r (+ (* m (- r x1)) y1)]
         [(+ x1 (* (/ 1 m) (- b y1))) b]
         [(+ x1 (* (/ 1 m) (- u y1))) u]])
      (if (= y1 y2)
        [[l y1]
         [r y1]]
        [[x1 b]
         [x1 u]])))))

(get-cross-points [[1 1] [5 5]] [[2 4] [4 0]])

(defn split-line
  "split line which in :both class
  1st arg - line
  2nd - rectangle [[left-up] [bottom-right]]
  return - {:visible [line] :non-visible [line]}"
  [line rect]
  (let [cross-points (get-cross-points line rect)
        [p1 p2 p3 p4 :as sorted-points] (sort (concat line cross-points))]
    (if (= 4 (count sorted-points))
      {:visible [[p2 p3]]
       :non-visible [[p1 p2] [p3 p4]]}
      (if (= 0 (four-bits-code p1 rect))
        {:visible [[p1 p2]]
         :non-visible [[p2 p3]]}
        {:visible [[p2 p3]]
         :non-visible [[p1 p2]]}))))

(defn amputate-Koen-Sazerland [lines rect]
  (let [{both :both
         visible :visible
         non-visible :non-visible
         :as lines}
        (group-by (fn [line] (four-bits-class line rect)) lines)
        splits (map (fn [line] (split-line line rect)) both)]
    (apply merge-with
           (concat [concat
                    {:visible visible
                     :non-visible non-visible}]
                   splits))))

