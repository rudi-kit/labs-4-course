(ns labs-4-cource.canvas
  (:require [canvas.events :as evt]
            [labs-4-cource.storage :refer [drawer]]))

(defprotocol Drawer
  (draw-pixel [ctx point] [ctx point color] "draw one pixel in specified point with specified color")
  (draw-pixels [drawer col] [drawer col color-col] "draw all pixels from col each pixel with specified color")
  (clean [this] "clean this"))

(defprotocol DomCanvas
  (get-2d-ctx [this])
  (get-dom-node [this])
  (enable-smoothing [canvas ctx] "set canvas smoothing"))

(defn canvas-events [canvas] (let [events (new evt/events canvas)]
                               (.listen events)
                               events))

(defn toggle-smothing [ctx flag]
  (set! (.-imageSmoothingEnabled ctx) flag)
  (set! (.-mozImageSmoothingEnabled ctx) flag)
  (set! (.-webkitImageSmoothingEnabled ctx) flag)
  (set! (.-msImageSmoothingEnabled ctx) flag))

(defn rgba [[r g b a]] (str "rgba(" r "," g "," b "," a ")"))
(deftype Canvas [canvas]
  DomCanvas
  (get-2d-ctx [this] (.getContext canvas "2d"))
  (get-dom-node [this] canvas)
  Drawer
  (draw-pixel [this [x y] color]
    (set! (.-fillStyle (get-2d-ctx this)) (rgba color))
    (.fillRect (get-2d-ctx this) x y 1 1))
  (draw-pixels [this col color-col]
      (pr col color-col)
    (doall (map (fn [p color] (draw-pixel this p color)) col color-col)))
  (draw-pixels [this col] (draw-pixels this col (iterate identity [0 0 0 1])))
  (clean [this] (-> (get-2d-ctx this) (.clearRect 0 0 640 320))))

(comment (draw-pixels @drawer [[0 0] [1 1] [2 2]]))
(deftype DoubleCanvas [canvas1 canvas2]
  Drawer
  (draw-pixels [this col color-col] (draw-pixels canvas2 col)
    (.drawImage (get-2d-ctx canvas1) (get-dom-node canvas2) 0 0 160 80 0 0 640 320))
  (draw-pixels [this col] (draw-pixels this col (iterate identity [0 0 0 1])))
  (clean [this]
    (clean canvas1)
    (clean canvas2))
  DomCanvas
  (enable-smoothing [this flag]
    (toggle-smothing (get-2d-ctx canvas2) flag)
    (toggle-smothing (get-2d-ctx canvas1) flag)))

