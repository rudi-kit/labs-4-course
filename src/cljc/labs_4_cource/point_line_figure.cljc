(ns labs-4-cource.point-line-figure
  (:require [labs-4-cource.affine-transformations :refer [get-center rotate]]
            [labs-4-cource.first-order-lines :refer [->BrezenhameLine line-points]]
            [labs-4-cource.math-helpers :refer [determ-2]]
            [labs-4-cource.poligons
             :refer
             [->Poligon edge-vector filter* scalar-mult]]))

;; {:type :carcas :points [[0 0 0] [1 1 1]] :lines [[0 0] [1 0]]}}


(defn ->CarcasFigure
  "check if data valid for carcas"
  [{:keys [points lines] :as carcas}]
  {:pre [(not (nil? points))
         (not (nil? lines))
         (every? (fn [p] (and (coll? p) (= 3 (count p)))) points)
         (every? (fn [l]
                   (and
                    (coll? l))) points)
         (every? (fn [p]
                   (= 3 (count p))) points)
         (every? (fn [l]
                   (= 2 (count l))) lines)
         (every? (fn [l]
                   (every? (fn [p] (<= 0 p)) l)) lines)
         (every? (fn [l]
                   (every? (fn [p] (> (count points) p)) l)) lines)]}
  (assoc carcas :type :carcas))

(defmethod line-points :carcas [{:keys [points lines]}]
  (let [points (mapv (partial take 2) points)]
    (mapcat
     line-points
     (map (fn [[p1 p2]] (->BrezenhameLine (nth points p1) (nth points p2))) lines))))

(def qube {:type :carcas
           :points [[-1 -1 1]
                    [1 -1 1]
                    [1 -1 -1]
                    [-1 -1 -1]
                    [-1 1 1]
                    [1 1 1]
                    [1 1 -1]
                    [-1 1 -1]]
           :lines [[0 1]
                   [0 3]
                   [1 2]
                   [2 3]
                   [4 5]
                   [4 7]
                   [5 6]
                   [6 7]
                   [0 4]
                   [1 5]
                   [2 6]
                   [3 7]]
           :edges [[4 5 6 7]
                   [0 1 2 3]
                   [0 3 7 4]
                   [1 2 6 5]
                   [0 1 5 4]
                   [2 3 7 6]]})

(defn edges->poligons [{points :points
                        edges :edges}]
  (for [edge edges]
    (for [point edge] (nth points point))))

(defn vector-mult-3d [[x1 y1 z1] [x2 y2 z2]]
  [(determ-2 [[y1 z1]
              [y2 z2]])
   (determ-2 [[x1 z1]
              [x2 z2]])
   (determ-2 [[x1 y1]
              [x2 y2]])])

(defn calc-eq [P1 norm]
  (let [D (- (scalar-mult [P1 norm]))]
    (conj norm D)))

(defn calc-equation [[P1 P2 P3] center]
  (let [v1 (edge-vector [P1 P2])
        v2 (edge-vector [P2 P3])
        norm (vector-mult-3d v1 v2)
        norm (calc-eq P1 norm)
        test (scalar-mult [(conj center 1) norm])
        norm (if (> 0 test) norm
                 (mapv - norm))]
    norm))

(defn body-matrix [carcas]
  (let [edges (edges->poligons carcas)
        center (get-center (:points carcas))]
    (for [edge edges] (calc-equation edge center))))

(defn remove-invisible [carcas vect]
  (let [edges (edges->poligons carcas)
        body-matrix (body-matrix carcas)
        tests
        (for [equat body-matrix]
          (scalar-mult [vect equat]))
        edges
        (filter* (fn [edge test] (<= 0 test)) edges tests)]
    (for [edge edges]            (map (fn [[x y]] [x y]) edge))))


(comment (body-matrix qube)
         '([0 -4 0 4] [0 4 0 4] [4 0 0 4] [-4 0 0 4] [0 0 -4 4] [0 0 4 4])
         '(0          0         0          0         4          -4)
         (remove-invisible qube [0 0 -1 0])
         (comment (map ->Poligon (remove-invisible qube [0 0 -1 1])))
         (remove-invisible (update qube :points rotate [30 45 30]) [0 0 -1 0])

         (remove-invisible (update qube :points rotate [45 45 0]) [0 0 -1 0])
         (([0.24828351255342362 -1.3762255133518482] [-0.6457131510471344 0.3255815357163887] [0.8023604650820358 1.3762255133518482] [1.6963571286825938 -0.3255815357163887]) ([-0.8023604650820358 -1.3762255133518482] [0.24828351255342362 -1.3762255133518482] [1.6963571286825938 -0.3255815357163887] [0.6457131510471344 -0.3255815357163887]) ([-0.6457131510471344 0.3255815357163887] [-1.6963571286825938 0.3255815357163887] [-0.24828351255342362 1.3762255133518482] [0.8023604650820358 1.3762255133518482]))
         (([0.3255815357163887 1.0] [1.3762255133518482 1.0] [-0.3255815357163887 1.0] [-1.3762255133518482 1.0]) ([0.3255815357163887 -1.0] [1.3762255133518482 -1.0] [-0.3255815357163887 -1.0] [-1.3762255133518482 -1.0]) ([1.3762255133518482 -1.0] [-0.3255815357163887 -1.0] [-0.3255815357163887 1.0] [1.3762255133518482 1.0]) ([-0.3255815357163887 -1.0] [-1.3762255133518482 -1.0] [-1.3762255133518482 1.0] [-0.3255815357163887 1.0]))
         ([-0.0 4.0 0.0 -4.0] [0.0 -4.0 -0.0 -4.0] [-2.101287955270919 -0.0 3.4036140981364738 -4.000000000000001] [2.101287955270919 0.0 -3.4036140981364738 -4.0] [3.4036140981364738 -0.0 2.101287955270919 -4.0] [-3.4036140981364738 0.0 -2.101287955270919 -4.0]))

