(ns labs-4-cource.canvas
  (:require [labs-4-cource.storage :refer [height scale width]]
            [taoensso.timbre :as log :refer [debug spy]]))

(def get-ctx
    ^{:doc "get 2d context of canvas"}
    (memoize
     (fn [canvas] (.getContext canvas "2d"))))

(defn- toggle-smoothing [ctx flag]
  (spy :debug (aset ctx "imageSmoothingEnabled" flag))
  (spy :debug (aset ctx "mozImageSmoothingEnabled"  flag))
  (spy :debug (aset ctx "ebkitImageSmoothingEnabled"  flag))
  (spy :debug (aset ctx "sImageSmoothingEnabled"  flag)))

(defn toggle-smoothing!
  "set smoothing value of canvas context.
     use all known browser prefixes"
  [{:keys [visible hidden extra]} flag]
  (debug "toggle smothing " flag)
  (toggle-smoothing (get-ctx visible) flag)
  (toggle-smoothing (get-ctx hidden) flag)
  (toggle-smoothing (get-ctx extra) flag))

(defn rgba "collect css rgba string" [[r g b a]] (str "rgba(" r "," g "," b "," a ")"))

(defn- draw-pixel!
  "draw pixel on canvas"
  [canvas [x y e]]
  (debug [x y e])
  (let [ctx (get-ctx canvas)]
    (set! (.-fillStyle ctx) (rgba [0 0 0 e]))
    (.fillRect ctx x y 1 1)))

(defn swap-hidden-to-visible! [visible hidden]
  (.drawImage (get-ctx visible) hidden 0 0 (/ @width @scale) (/ @height @scale) 0 0 @width @height))

(defn draw-pixels!
  "get collection of pixels and draw it"
  ([canvas points]
   (doall (map (partial draw-pixel! canvas) points))))

(defn clean-canvas! [canvas]
  (.clearRect (get-ctx canvas) 0 0 @width @height))

(defn clean!
  "clean pair of canvases"
  [{:keys [visible hidden extra]}]
  (clean-canvas! visible)
  (clean-canvas! hidden)
  (clean-canvas! extra))

(defn set-scale! [canvas scale]
  (.scale (get-ctx (:visible canvas)) scale scale))

