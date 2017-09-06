(ns labs-4-cource.core
  (:require
   [reagent.core :as reagent]))

(def window-width (reagent/atom nil))

(defn on-window-resize [evt]
  (reset! window-width (.-innerWidth js/window)))

(defn pdebug [value]
  (println value)
  value)

(defn draw-pixel [node [x y]]
  (let [ctx (-> node
                .-children
                (aget 0)
                (.getContext "2d"))
        ]
      (-> ctx
          (.fillRect x y 1 1))))

(defn draw-canvas-contents [canvas]
  (let [ctx (.getContext canvas "2d")
        w (.-clientWidth canvas)
        h (.-clientHeight canvas)]
    (.beginPath ctx)
    (.moveTo ctx 0 0)
    (.lineTo ctx w h)
    (.moveTo ctx w 0)
    (.lineTo ctx 0 h)
    (.stroke ctx)))

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
