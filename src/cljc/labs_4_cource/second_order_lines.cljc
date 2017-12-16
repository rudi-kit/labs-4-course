(ns labs-4-cource.second-order-lines
  #?(:clj (:gen-class))
  (:require [clojure.core.matrix :as m]
            [labs-4-cource.first-order-lines :refer [line-points]]
            [labs-4-cource.math-helpers :refer [round]]
            [taoensso.timbre :as timbre #?(:cljs :refer-macros
                                           :clj :refer) [debug]]))

(defn pow-2 [x]
  (* x x))

(defn length [[x1 y1] [x2 y2]]
  (Math/sqrt (+ (pow-2 (- x2 x1)) (pow-2 (- y2 y1)))))

(def y-axis-matrix (m/matrix [[-1 0]
                              [0 1]]))
(def x-axis-matrix (m/matrix [[1  0]
                              [0 -1]]))

(defn translate-points [[x y] points]
  (map (fn [[x y]] [x y])
       (m/mmul (m/matrix
                (map (fn [[x y]] [x y 1]) points))
               [[1 0 0]
                [0 1 0]
                [x y 1]])))

;;; Circle
(defn ->Circle [p1 p2]
  {:type :circle :center (map round p1) :radius (round (length p1 p2))})

(defn ->CircleR [r p1]
   {:type :circle :center (map round p1) :radius (round r)} )

(defn quadrant-points
  "get first quadrant points of circle"
  ([r] (map (fn [[x y]] [(round x) (round y)])
            (quadrant-points 0 r 0 (- 2 (* 2 r)) [[0 r]])))
  ([x y limit d plot]
   (if (> y limit)
     (cond (> d 0)
           (let [d* (- (* 2 d) (* 2 x) 1)]
             (if (< d* 0)
               (let [x' (inc x)
                     y' (dec y)
                     d' (+ d (* 2 x') (- (* 2 y')) 2)]
                           ;; select D pixel
                 (recur x' y' limit d' (conj plot [x' y'])))
               (let [y' (dec y)
                     d' (+ d (- (* 2 y)) 1)]
                           ;; select V pixel
                 (recur x y' limit d' (conj plot [x y'])))))
           (< d 0)
           (let [d* (+ (* 2 d) (* 2 y) (- 1))]
             (if (> d* 0)
                       ;; select D pixel
               (let [x' (inc x)
                     y' (dec y)
                     d' (+ d (* 2 x') (- (* 2 y')) 2)]
                 (recur x' y' limit d' (conj plot [x' y'])))
                       ;; select H pixel
               (let [x' (inc x)
                     d' (+ d (* 2 x') 1)]
                 (recur x' y limit d' (conj plot [x' y])))))
           (= d 0)
               ;; select D pixel
           (let [x' (inc x)
                 y' (dec y)
                 d' (+ d (* 2 x') (- (* 2 y')) 2)]
             (recur x' y' limit d' (conj plot [x' y']))))
     plot)))

(defmethod line-points :circle [{:keys [center radius]}]
  (let [quad (m/matrix (quadrant-points radius))]
    (let [half (m/join (m/mmul quad y-axis-matrix)
                       quad)]
      (translate-points center
                        (m/join
                         (m/mmul half x-axis-matrix)
                         half)))))

;;; Elipse
(defn ->Elipse [[x1 y1] [x2 y2]]
  "two point - rectangle conners"
  (let [min-x (min x1 x2)
        min-y (min y1 y2)
        a (Math/abs (round (/ (- x2 x1) 2)))
        b (Math/abs (round (/ (- y2 y1) 2)))]
    {:type :elipse :center (map round [(+ min-x a) (+ min-y b)]) :a a :b b}))

(defn ->Elipse-2 [[x1 y1] [x2 y2]]
  "first point - center"
  (let [a (Math/abs (round (- x2 x1)))
        b (Math/abs (round (- y2 y1)))]
    {:type :elipse :center (map round [x1 y1]) :a a :b b}))

(defn elipse-quadrant-points
  "generate first quadrant of elipse"
  ([a b] (map (fn [[x y]] [(round x) (round y)])
              (elipse-quadrant-points 0 b a b 0 (+ (* a a) (* b b) (- (* 2 a b))) (list [0 b]))))
  ([x y a b limit d plot]
   (if (> y limit)
     (cond (> d 0)
           (let [d* (+ (* 2 d) (- (* b b x)) (- 1))]
             (if (< d* 0)
               (let [x' (inc x)
                     y' (dec y)
                     d' (+ d (* b b (+ (* 2 x) 1)) (* a a (- 1 (* 2 y))))]
                         ;; select D pixel
                 (recur x' y' a b limit d' (conj plot [x' y'])))
               (let [y' (dec y)
                     d' (+ d (* a a (- 1 (* 2 y))))]
                         ;; select V pixel
                 (recur x y' a b limit d' (conj plot [x y'])))))
           (< d 0)
           (let [d* (- (* 2 (+ d (* a a y))) 1)]
             (if (> d* 0)
                     ;; select D pixel
               (let [x' (inc x)
                     y' (dec y)
                     d' (+ d (* b b (+ (* 2 x) 1)) (* a a (- 1 (* 2 y))))]
                 (recur x' y' a b limit d' (conj plot [x' y'])))
                     ;; select H pixel
               (let [x' (inc x)
                     d' (+ d (* b b (inc (* 2 x))))]
                 (recur x' y a b limit d' (conj plot [x' y])))))
           (= d 0)
             ;; select D pixel
           (let [x' (inc x)
                 y' (dec y)
                 d' (+ d (* b b (+ (* 2 x) 1)) (* a a (- 1 (* 2 y))))]
             (recur x' y' a b limit d' (conj plot [x' y']))))
     plot)))

(defmethod line-points :elipse [{:keys [center a b]}]
  (let [quad (m/matrix (elipse-quadrant-points a b))]

    (let [half (m/join (m/mmul quad y-axis-matrix)
                       quad)]
      (translate-points center
                        (m/join
                         (m/mmul half x-axis-matrix)
                         half)))))

;;; Hyperbola
(defn ->Hyperbola [[x1 y1] [x2 y2]]
  (let [a (Math/abs (round (- x2 x1)))
        b (Math/abs (round (- y2 y1)))]
    {:type :hyperbola :center (map round [x1 y1]) :a a :b b}))

(defn hyperbola-quadrant-points
  ([a b] (map (fn [[x y]] [(round x) (round y)])
              (hyperbola-quadrant-points a 0 a b 100 (+ (- (* a a)) (* b b) (* 2 a b)) (list [a 0]))))
  ([x y a b limit d plot]
   (if (<= 0 limit)
     (cond (> d 0)
           (let [d* (+ (* 2 d) (* 2 a a y) (* a a))]
             (if (< d* 0)
               (let [x' (inc x)
                     y' (inc y)
                     d' (+ d (* 2 b b x) (* b b) (- (* 2 a a y)) (- (* a a)))]
                         ;; select D pixel
                 (recur x' y' a b (dec limit) d' (conj plot [x' y'])))
               (let [y' (inc y)
                     d' (+ d (- (* 2 a a y)) (- (* a a)))]
                         ;; select V pixel
                 (recur x y' a b (dec limit) d' (conj plot [x y'])))))
           (< d 0)
           (let [d* (- (* 2 (+ d (* a a y))) 1)]
             (if (> d* 0)
                     ;; select D pixel
               (let [x' (inc x)
                     y' (inc y)
                     d' (+ d (* 2 b b x) (* b b) (- (* 2 a a y)) (- (* a a)))]
                 (recur x' y' a b (dec limit) d' (conj plot [x' y'])))
                     ;; select H pixel
               (let [x' (inc x)
                     d' (+ d (* 2 b b x) (* b b))]
                 (recur x' y a b (dec limit) d' (conj plot [x' y])))))
           (= d 0)
             ;; select D pixel
           (let [x' (inc x)
                 y' (inc y)
                 d' (+ d (* 2 b b x) (* b b) (- (* 2 a a y)) (- (* a a)))]
             (debug  "D")
             (recur x' y' a b (dec limit) d' (conj plot [x' y']))))
     plot)))

(defmethod line-points :hyperbola [{:keys [center a b]}]
  (let [quad (m/matrix (hyperbola-quadrant-points a b))]

    (let [half (m/join (m/mmul quad y-axis-matrix)
                       quad)]
      (translate-points center
                        (m/join
                         (m/mmul half x-axis-matrix)
                         half)))))
