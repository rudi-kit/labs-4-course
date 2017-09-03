(ns labs-4-cource.core
    (:require
      [reagent.core :as r]))

(defonce example (.getElementById js/document "example"))

(defonce ctx (.getContext example "2d"))

(defn draw-canvas []
    (.fillRect ctx 0 0 (.-width example) (.-height example))
    )

(defn init! []
  (draw-canvas))

(init!)

