(ns labs-4-cource.canvas
  (:require [canvas.events :as evt]
            [labs-4-cource.storage :refer [height scale width]]
            [taoensso.timbre :as log :refer [debug]]))

(defn canvas-events "create js object wich tracks mouse position"
    [canvas] (let [events (new evt/events canvas)]
                 (.listen events)
                 events))

(defn get-ctx "get 2d context of canvas" [canvas] (.getContext canvas "2d"))

(defn toggle-smoothing
    "set smoothing value of canvas context.
     use all known browser prefixes"
    [{:keys [visible hidden]} flag]
    (let [toggle (fn [ctx]
                     (set! (.-imageSmoothingEnabled ctx) flag)
                     (set! (.-mozImageSmoothingEnabled ctx) flag)
                     (set! (.-webkitImageSmoothingEnabled ctx) flag)
                     (set! (.-msImageSmoothingEnabled ctx) flag))]
        (toggle (get-ctx visible))
        (toggle (get-ctx hidden))
        ))

(defn rgba "collect css rgba string" [[r g b a]] (str "rgba(" r "," g "," b "," a ")"))

(defn draw-pixel
    "draw pixel on canvas"
    [canvas [x y e] color]
    (debug [x y e] color)
    (let [ctx (get-ctx canvas)]
        (set! (.-fillStyle ctx) (rgba [0 0 0 e]))
        (.fillRect ctx x y 1 1)))

(defn draw-pixels
    "get collection of pixels and draw it"
    ([{:keys [visible hidden]} points colors]
     (doall (map (partial draw-pixel hidden) points colors ))
     (-> (get-ctx visible) (.clearRect 0 0 @width @height))
     (.drawImage (get-ctx visible) hidden 0 0 (/ @width @scale) (/ @height @scale) 0 0 @width @height)
     )
    ([canvas points]
     (draw-pixels canvas points (iterate identity [0 0 0 1]))))

(defn clean
    "clean pair of canvases"
    [{:keys [visible hidden]}]
    (-> (get-ctx visible) (.clearRect 0 0 @width @height))
    (-> (get-ctx hidden) (.clearRect 0 0 @width @height)))

(defn set-scale [canvas scale]
    (-> canvas :visible get-ctx (.scale scale scale)))
