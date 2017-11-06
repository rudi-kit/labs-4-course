(ns labs-4-cource.point-line-figure
  (:require [labs-4-cource.first-order-lines :refer [->BrezenhameLine line-points]]))

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
