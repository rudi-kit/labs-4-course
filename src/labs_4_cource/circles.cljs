(ns labs-4-cource.circles
  (:require [cljs.test :refer-macros [deftest is run-tests]]
            [labs-4-cource.primitives :refer [line-points]]
            [taoensso.timbre :as timbre :refer-macros [pr]]))

(defn pow-2 [x]
  (* x x))

(defn length [[x1 y1] [x2 y2]]
  (Math/sqrt (+ (pow-2 (- x2 x1)) (pow-2 (- y2 y1)))))

(defn ->Circle [p1 p2]
  {:type :circle :center p1 :radius (length p1 p2)})

(defn quadrant-points
  ([r] (quadrant-points 0 r 0 (- 2 (* 2 r)) [[0 r]]))
  ([x y limit d plot]
   (pr x y limit d plot)
   (if (> y limit)
     (cond (> d 0)
           (let [d* (- (* 2 d) (* 2 x) 1)]
             (if (< d* 0)
               (let [x' (inc x)
                     y' (dec y)
                     d' (+ d (* 2 x') (- (* 2 y')) 2)]
                           ;; select D pixel
                   (pr :info "D")
                   (recur x' y' limit d' (conj plot [x' y'])
                          ))
               (let [y' (dec y)
                     d' (+ d (- (* 2 y)) 1)]
                           ;; select V pixel
                   (pr :info "V")
                   (recur x y' limit d' (conj plot [x y'])))))
           (< d 0)
           (let [d* (+ (* 2 d) (* 2 y) (- 1))]
             (if (> d* 0)
                       ;; select D pixel
               (let [x' (inc x)
                     y' (dec y)
                     d' (+ d (* 2 x') (- (* 2 y')) 2)]
                   (pr :info "D")
                   (recur x' y' limit d' (conj plot [x' y'])))
                       ;; select H pixel
               (let [x' (inc x)
                     d' (+ d (* 2 x') 1)]
                   (pr :info "H")
                   (recur x' y limit d' (conj plot [x' y])))))
           (= d 0)
               ;; select D pixel
           (let [x' (inc x)
                 y' (dec y)
                 d' (+ d (* 2 x') (- (* 2 y')) 2)]
               (pr :info "D")
               (recur x' y' limit d' (conj plot [x' y']))))
     plot)))

(quadrant-points 8)

(defmethod line-points :circle [{:keys [center radius]}]
  (let [[x y] center]))

(deftest length-test
  (is (= (length [0 0] [3 4]) 5)))

(deftest ->Circle-test
  (is (= (->Circle [0 0] [3 4]) {:type :circle, :center [0 0], :radius 5})))

(deftest ->Circle-points
  (is (= (quadrant-points 8) '([0 8] [1 8] [2 8] [3 7] [4 7] [5 6] [6 5] [7 4] [7 3] [8 2] [8 1] [8 0]))))

(cljs.test/run-tests)
