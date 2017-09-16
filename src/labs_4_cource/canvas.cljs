(ns labs-4-cource.canvas
  (:require [canvas.events :as evt]
            [labs-4-cource.storage :refer [drawer]]))

(defn canvas-events [canvas] (let [events (new evt/events canvas)]
                               (.listen events)
                               events))

(defn get-ctx [canvas] (.getContext canvas "2d"))

(defn toggle-smoothing [canvas flag]
  (let [ctx (get-ctx canvas)]
    (set! (.-imageSmoothingEnabled ctx) flag)
    (set! (.-mozImageSmoothingEnabled ctx) flag)
    (set! (.-webkitImageSmoothingEnabled ctx) flag)
    (set! (.-msImageSmoothingEnabled ctx) flag)))

(defn rgba [[r g b a]] (str "rgba(" r "," g "," b "," a ")"))

(defn draw-pixel [canvas [x y] color]
  (let [ctx (get-ctx canvas)]
    (set! (.-fillStyle ctx) (rgba color))
    (.fillRect ctx x y 1 1)))

(defn draw-pixels
    ([canvas points colors]
     (doall (map (partial draw-pixel canvas) points colors )))
    ([canvas points]
     (draw-pixels canvas points (iterate identity [0 0 0 1]))))

(defn clean [canvas]
     (-> (get-ctx canvas) (.clearRect 0 0 640 320)))

(defn set-scale [canvas scale]
    (-> (get-ctx canvas) (.scale scale scale)))
