(ns labs-4-cource.fill-poligon
  (:require [labs-4-cource.storage :refer [drawer height width]]))

(defn first-point-image-data [[x y] width]
  (+ x (* width y)))

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

(defn fill-raster-poligon
  "use depth-first algo to fill poligon"
  ([data width color [[x y :as p1] & tail]]
   (recur data width color
          (if (not= color (get-pixel data p1 width))
            (do
              (set-pixel data p1 color width)
              (concat [[(inc x) y] [(dec x) y] [x (dec y)] [x (inc y)]] tail))
            tail))))

(defn fill-poligon [canvas point color]
  (let [ctx (.getContext canvas "2d")
        data-image (.getImageData ctx 0 0 @width @height)
        data (.-data data-image)]
    (fill-raster-poligon data @width color [point])
    (.putImageData ctx data-image 0 0)))

(fill-poligon (:visible @drawer) [200 200] [0 0 0 255])
