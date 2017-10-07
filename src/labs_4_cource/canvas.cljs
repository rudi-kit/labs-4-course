(ns labs-4-cource.canvas
    (:require [labs-4-cource.storage :refer [height scale width]]
              [taoensso.timbre :as log :refer [debug spy]]))

(defn get-ctx "get 2d context of canvas" [canvas] (.getContext canvas "2d"))

(defn- toggle-smoothing [ctx flag]
  (spy :debug (aset ctx "imageSmoothingEnabled" flag))
  (spy :debug (aset ctx "mozImageSmoothingEnabled"  flag))
  (spy :debug (aset ctx "ebkitImageSmoothingEnabled"  flag))
  (spy :debug (aset ctx "sImageSmoothingEnabled"  flag)))

(defn toggle-smoothing!
  "set smoothing value of canvas context.
     use all known browser prefixes"
  [{:keys [visible hidden]} flag]
  (debug "toggle smothing " flag)
  (toggle-smoothing (get-ctx visible) flag)
  (toggle-smoothing (get-ctx hidden) flag))

(defn rgba "collect css rgba string" [[r g b a]] (str "rgba(" r "," g "," b "," a ")"))

(defn- draw-pixel!
  "draw pixel on canvas"
  [canvas [x y e]]
  (debug [x y e])
  (let [ctx (get-ctx canvas)]
    (set! (.-fillStyle ctx) (rgba [0 0 0 e]))
    (.fillRect ctx x y 1 1)))

(defn swap-hidden-to-visible! [{:keys [visible hidden]}]
  (.clearRect (get-ctx visible) 0 0 @width @height)
  (.drawImage (get-ctx visible) hidden 0 0 (/ @width @scale) (/ @height @scale) 0 0 @width @height))

(defn draw-pixels!
  "get collection of pixels and draw it"
  ([{:keys [visible hidden]} points colors]
   (doall (map (partial draw-pixel! hidden) points colors))
   (swap-hidden-to-visible! {:visible visible :hidden hidden}))
  ([canvas points]
   (draw-pixels! canvas points (iterate identity [0 0 0 1]))))

(defn clean!
  "clean pair of canvases"
  [{:keys [visible hidden]}]
  (.clearRect (get-ctx visible) 0 0 @width @height)
  (.clearRect (get-ctx hidden) 0 0 @width @height))

(defn set-scale! [canvas scale]
  (.scale (get-ctx (:visible canvas)) scale scale))
