(ns labs-4-cource.drawers)

(defn draw-pixel [ctx [x y]]
  (.fillRect ctx x y 1 1))

(defn draw-pixels-ctx [ctx col]
  (doall (map (fn [p] (draw-pixel ctx p)) col)))
