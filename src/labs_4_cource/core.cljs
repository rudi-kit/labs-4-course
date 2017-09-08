(ns labs-4-cource.core
  (:require
   [reagent.core :as reagent]))

(def window-width (reagent/atom nil))

(defonce points (->> 100 range (map (fn [x] [x x])) doall atom))

(defn on-window-resize [evt]
  (reset! window-width (.-innerWidth js/window)))

(defn pdebug [value]
  (println value)
  value)

(defn draw-pixel [ctx [x y]]
      (-> ctx
          (.fillRect x y 1 1)))

(defn draw-pixels [ctx col]
    (doall (map (fn [p] (draw-pixel ctx p)) col)))

(defn draw-canvas-contents [canvas]
  (let [ctx (.getContext canvas "2d")
        w (.-clientWidth canvas)
        h (.-clientHeight canvas)]
    (draw-pixels ctx @points)))

(defonce dom-node (reagent/atom nil))

(defn div-with-canvas []
  (reagent/create-class
   {:component-did-update
    (fn [this]
      (draw-canvas-contents (.-firstChild @dom-node)))

    :component-did-mount
    (fn [this]
      (reset! dom-node (reagent/dom-node this)))

    :reagent-render
    (fn []
      @window-width ;; Trigger re-render on window resizes
      [:div.with-canvas
         ;; reagent-render is called before the compoment mounts, so
         ;; protect against the null dom-node that occurs on the first
         ;; render
       [:canvas (if-let [node @dom-node]
                  {:width (.-clientWidth node)
                   :height (.-clientHeight node)})]])}))

(defn home []
  [div-with-canvas])

(defn ^:export init! []
  (reagent/render [home]
                  (.getElementById js/document "app"))
  (.addEventListener js/window "resize" on-window-resize))

(init! )
