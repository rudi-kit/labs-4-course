(ns labs-4-cource.core
  (:require [labs-4-cource.primitives :refer [line-points]]
            [reagent.core :as reagent]
            [labs-4-cource.canvas :as can]
            [labs-4-cource.drawers :refer [draw-pixels-ctx]]))

(defn pdebug [value]
  (println value)
  value)

(def drawer (reagent/atom nil))
(defonce scale (reagent/atom 4))
(defonce primitives (reagent/atom []))
(defonce smoothing (reagent/atom false))
(defonce next-primitive (atom nil))
(defonce events (reagent/atom nil))

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

(defn add-primitives [primitive]
    (swap! primitives (partial cons primitive)))

(defn add-pos [pos]
    (swap! next-primitive (partial cons pos)))

(defn event-pos->vector [pos]
  [(.-x pos) (.-y pos)])

(defn scale-> [[x y]]
    [(/ x @scale) (/ y @scale)])

(defn on-click [event]
  (-> @events (.getMousePos event) event-pos->vector scale-> add-pos)
  (when (= (count @next-primitive) 2)
    (add-primitives @next-primitive)
    (reset! next-primitive nil)))

(defn draw-canvas-contents [ctx]
  (draw-pixels ctx (->> @primitives (map (fn [[p1 p2]] (line-points p1 p2))) (apply concat))))


(defn div-with-canvas []
  (reagent/create-class
   {:component-did-update
    (fn [this]
      (draw-canvas-contents @drawer))

    :component-did-mount
    (fn [this]
      (let [canvas1 (-> this
                       reagent/dom-node
                       .-firstChild)
            canvas2 (-> this
                        reagent/dom-node
                        .-children
                        (aget 1))]
        (reset! events (can/canvas-events canvas1))
        (reset! drawer (DoubleCanvas. canvas1 canvas2))
        (enable-smoothing @drawer false)
        (pr "mount")
))

    :reagent-render
    (fn []
      @primitives
      [:div.with-canvas
       [:canvas {:id "visible"
                 :width 640
                 :onClick on-click
                 :height 320
                 :style {:border "solid 1px"}}]
       [:canvas {:id "hidden"
                 :width 640
                 :onClick on-click
                 :height 320
                 :style {:border "solid 1px"}}]])}))

(defn home []
  [div-with-canvas])

(defn ^:export init! []
  (reagent/render [home]
                  (.getElementById js/document "app")))

(init!)
