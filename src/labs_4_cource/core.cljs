(ns labs-4-cource.core
  (:require
   [reagent.core :as reagent]))

(def window-width (reagent/atom nil))

(defonce points (->> 100 range (map (fn [x] [x x])) doall atom))

(defn pdebug [value]
  (println value)
  value)

(defn line-points [[x1 y1] [x2 y2]]
  (let [length (max (- x2 x1) (- y2 y1))
        dx (/ (- x2 x1) length)
        dy (/ (- y2 y1) length)]
    (->> [x1 y1 0]
         (iterate (fn [[x y i]] [(+ x dx) (+ y dy) (+ i 1)]))
         (take-while (fn [[x y i]] (<= i length)))
         (map (fn [[x y]] [x y])))))

(defn draw-pixel [ctx [x y]]
  (.fillRect ctx x y 1 1))

(defn draw-pixels [ctx col]
  (doall (map (fn [p] (draw-pixel ctx p)) col)))

(defn draw-canvas-contents [ctx]
  ;;(.scale ctx 4 4)
  (draw-pixels ctx (line-points [0 0] [1000 1000])))

(defonce ctx (atom nil))
(defonce rect (atom nil))
(defn offsetX [client-x]
  (- (.-left @rect) client-x))
(defn offsetY [client-y]
  (- (.-top @rect) client-y))

(defn on-click [event]
  (.log js/console (.-pageX event) (.-pageY event)
        (.-clientX event) (.-clientY event)))

(defn div-with-canvas []
  (reagent/create-class
   {:component-did-update
    (fn [this]
      (draw-canvas-contents @ctx))

    :component-did-mount
    (fn [this]
      (println "mount")
        (let [canvas (-> this
                       reagent/dom-node
                       .-firstChild)
              ]
            (reset! ctx (.getContext canvas "2d"))
            (reset! rect (.getBoundingClientRect canvas))))

    :reagent-render
    (fn []
      [:div.with-canvas
         ;; reagent-render is called before the compoment mounts, so
         ;; protect against the null dom-node that occurs on the first
         ;; render
       [:canvas {:width 640
                 :onClick on-click
                 :height 320
                 :style {:border "solid 1px"}}]])}))

(defn home []
  [div-with-canvas])

(defn ^:export init! []
  (reagent/render [home]
                  (.getElementById js/document "app")))

(init!)
