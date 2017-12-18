(ns labs-4-cource.fill-poligon
  (:require [labs-4-cource.canvas :refer [get-ctx]]
            [labs-4-cource.first-order-lines :refer [line-points]]
            [labs-4-cource.poligons :refer [->Poligon]]
            [labs-4-cource.storage :refer [drawer height primitives width]]))

(defn first-point-image-data [[x y] width]
  (* 4 (+ x (* width y))))

(defn set-pixel [data point [r g b a] width]
  (let [idx (first-point-image-data point width)]
    (aset data idx r)
    (aset data (+ idx 1) g)
    (aset data (+ idx 2) b)
    (aset data (+ idx 3) a)))

(defn get-pixel [data point width]
  (let [idx (first-point-image-data point width)]
    [(aget data idx)
     (aget data (+ idx 1))
     (aget data (+ idx 2))
     (aget data (+ idx 3))]))

(defn not-empty-pixel [data [x y :as p] color width]
  (if (and (>= x 0) (>= y 0) (not= color (get-pixel data p width)))
    p
    nil))

(defn empty-neigbour-pixels [data [x y] color width]
  (filter identity
          [(not-empty-pixel data [(inc x) y] color width)
           (not-empty-pixel data [(dec x) y] color width)
           (not-empty-pixel data [x (inc y)] color width)
           (not-empty-pixel data [x (dec y)] color width)]))

(defn fill-raster-poligon
  "use depth-first algo to fill poligon"
  [data width color [[x y :as p] & tail]]
  (pr p tail (get-pixel data p width))
  (when-not (nil? p)
    (if (not= color (get-pixel data p width))
      (do
        (set-pixel data p color width)
        (recur data width color
               (concat (empty-neigbour-pixels data p color width)  tail)))
      (recur data width color tail))))

(defn fill-poligon [canvas point color]
  (let [ctx (get-ctx canvas)
        data-image (.getImageData ctx 0 0 @width @height)
        data (.-data data-image)]
    (fill-raster-poligon data @width color [point])
    (.putImageData ctx data-image 0 0)))

(comment (reset! labs-4-cource.storage/primitives
         [{:type :poligon :points [[1 2] [1 11] [7 11] [7 1] [5 7]]}
          ])

         (fill-poligon (:visible @labs-4-cource.storage/drawer) [4 8] [0 0 0 255]))

(defn fill-raster-poligon-with-delay
  "use depth-first algo to fill poligon"
  [data width color [[x y :as p] & tail :as points]]
  (when-not (empty? points)
    (if (not= color (get-pixel data p width))
      (do
        (set-pixel data p color width)
        (partial fill-raster-poligon-with-delay data width color
                 (concat (empty-neigbour-pixels data p color width) tail)))
      (partial fill-raster-poligon-with-delay data width color tail))))

(defn fill-poligon-with-delay
  ([canvas point color]
   (let [ctx (get-ctx canvas)
         data-image (.getImageData ctx 0 0 @width @height)
         data (.-data data-image)
         f' (fill-raster-poligon-with-delay data @width color [point])]
     (.putImageData ctx data-image 0 0)
     (partial fill-poligon-with-delay canvas ctx data-image data f')))
  ([canvas ctx data-image data f]
   (when-not (nil? f)
     (let [f' (f)]
       (.putImageData ctx data-image 0 0)
       (partial fill-poligon-with-delay canvas ctx data-image data f')))))
