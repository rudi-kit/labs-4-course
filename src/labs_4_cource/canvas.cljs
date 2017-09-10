(ns labs-4-cource.canvas
    (:require [canvas.events :as evt]))


(defn draw-pixel [ctx [x y]]
  (.fillRect ctx x y 1 1))

(defn draw-pixels-ctx [ctx col]
  (doall (map (fn [p] (draw-pixel ctx p)) col)))

(defn canvas-events [canvas] (let [events (new evt/events canvas)]
                                 (.listen events)
                                 events))

(defprotocol Drawer
    (draw-pixels [drawer col] "draw all pixels from col"))

(defprotocol Canvas
    (enable-smoothing [canvas ctx] "set canvas smoothing"))

(defn get-ctx [canvas] (.getContext canvas "2d"))

(defn toggle-smothing [ctx flag]
  (set! (.-imageSmoothingEnabled ctx) flag)
  (set! (.-mozImageSmoothingEnabled ctx) flag)
  (set! (.-webkitImageSmoothingEnabled ctx) flag)
  (set! (.-msImageSmoothingEnabled ctx) flag))

(deftype DoubleCanvas [canvas1 canvas2]
    Drawer
    (draw-pixels [this col]
        (enable-smoothing this false)
        (draw-pixels-ctx (get-ctx canvas2) col)
        (.drawImage (get-ctx canvas1) canvas2 0 0 160 80 0 0 640 320))
    Canvas
    (enable-smoothing [this flag]
        (toggle-smothing (get-ctx canvas2) flag)
        (toggle-smothing (get-ctx canvas1) flag)
     ))

(defn event-pos->vector [pos]
  [(.-x pos) (.-y pos)])

(defn scale-> [[x y] scale]
    [(/ x scale) (/ y scale)])

