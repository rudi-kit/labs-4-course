(ns labs-4-cource.first-order-lines
  #?(:clj (:gen-class))
  (:require [labs-4-cource.math-helpers :refer [abs round round-vec sign]]))

(defn ->SimpleLine
  [p1 p2]
  {:pre [(not (nil? p1)) (not (nil? p2))]}
  {:type :simple :p1 (round-vec p1) :p2 (round-vec p2)})

(defn ->BrezenhameLine
  [p1 p2]
  {:pre [(not (nil? p1)) (not (nil? p2))]}
  {:type :be :p1 (round-vec p1) :p2 (round-vec p2)})

(defn ->SmoothLine
  [p1 p2]
  {:pre [(not (nil? p1)) (not (nil? p2))]}
  {:type :wu :p1 (round-vec p1) :p2 (round-vec p2)})

(defn calc-steps [coordinate]
  (mapv sign coordinate))

(defmulti line-points :type)

;; CDA algo
(defmethod line-points :simple [{:keys [p1 p2]}]
  (let [[x1 y1] p1 ;; first point
        [x2 y2] p2 ;; second point
        length (max (Math/abs (- x2 x1)) (Math/abs (- y2 y1)))
        dx (/ (- x2 x1) length) ;; step throw x-axis
        dy (/ (- y2 y1) length) ;; step throw y-axis
]
    (->> [x1 y1]
         (iterate (fn [[x y]] [(+ x dx) (+ y dy)]))
         (take (+ 1 length))
         (map (fn [[x y]] [(round x) (round y)])))))

;; Алгоритм растеризации Брезенхема
(defmethod line-points :be [{[x1 y1 :as p1] :p1 p2 :p2}]
  (let [proections (mapv - p2 p1) ;; проекции отрезков
        [length-x length-y :as lengthes] (mapv abs proections) ;; длинны отрезков
        [x-step y-step] (mapv sign proections) ;; диагональный шаг
        [x-extra y-extra] (if (>= length-x length-y) [x-step 0] [0 y-step]) ;; основной шаг
        [min max] (sort lengthes) ;; короткая/длинная проекции
        e (- (* 2 min) max)] ;; ошибка
    (->>  [x1 y1 e] ;; первая точка
          (iterate
           (fn [[x y e]]
             (if (<= e 0)
               ;; основной шаг
               [(+ x-extra x) (+ y-extra y) (+ e (* 2 min))]
               ;; диагональный шаг
               [(+ x-step x) (+ y-step y) (+ e (- (* 2 max)) (* 2 min))])))
          ;; количество точек
          (take (+ 1 max)))))

;; Алгоритм антиалиасинга Ву
(defmethod line-points :wu [{[x1 y1 :as p1] :p1 [x2 y2 :as p2] :p2}]
  (let [proections (mapv - p1 p2) ;; проекции отрезков
        [length-x length-y :as lengthes] (mapv abs proections) ;; длинны отрезков
        [x-step y-step] (mapv sign proections) ;; диагональный шаг
        [x-smooth y-smooth] (if (>= length-x length-y) [0 y-step] [x-step 0]) ;; направления размытия
        [min max] (sort lengthes) ;; короткая/длинная проекции
        ;; используется алгоритм Брезенхема
        points (line-points (->BrezenhameLine p1 p2))]

    (if (or (= x1 x2) (= y1 y2) (= length-x length-y))
        ;; Если отрезок горизонтальный/вертикальный/диагональный - не размазываем его
      (->> points (map (fn [[x y]] [x y 1])))
      (->> points
           ;; использует ошибку для вычисления прозрачности
           ;; e'=(e + 2*(max - min))/2*max
           (map (fn [[x y e]] [x y (/ (+ e (* 2 (- max min))) (* 2 max))]))
           ;; генерируем пары точек
           (map
            (fn [[x y e]] [[x y e] [(+ x-smooth x) (+ y-smooth y) (- 1 e)]]))
           ;; собираем пары в плоский список
           (mapcat identity)))))
