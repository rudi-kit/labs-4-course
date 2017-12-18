(ns labs-4-cource.debuging
  (:require [clojure.data :refer [diff]]
            [labs-4-cource.canvas
             :refer
             [clean-canvas! draw-pixels! swap-hidden-to-visible!]]
            [labs-4-cource.first-order-lines :refer [line-points]]
            [labs-4-cource.storage
             :refer
             [add-primitives
              debug-state
              drawer
              lines-generators
              new-points
              new-primitives
              not-full-line
              primitives
              remove-debug-line!
              selected]]
            [taoensso.timbre :as timbre :refer-macros [spy]]))

(def line-points-cached (memoize line-points))

(defn save-debug-line! []
  (when-not (nil? (:line @not-full-line))
    (draw-pixels! @drawer (:rest-points @not-full-line))
    (add-primitives (:line @not-full-line))))

(defn draw-line-by-point! []
  (spy :debug "draw-point" (when (seq (:rest-points @not-full-line)) (draw-pixels! @drawer [(first (:rest-points @not-full-line))])))
  (swap! not-full-line assoc :rest-points (rest (:rest-points @not-full-line)))
  (when (empty? (:rest-points @not-full-line))
    (save-debug-line!)
    (remove-debug-line!)))

(defn add-line-to-debug! [line]
  (save-debug-line!)
  (reset! not-full-line {:line line :rest-points (line-points-cached line)}))

(defn add-line-from-pos []
  (when (spy :info (= (count @new-points) 2))
    (let [line (spy :info "new-line" (apply (@selected lines-generators) @new-points))]
      (if (= @debug-state :not)
        (add-primitives line)
        (add-line-to-debug! line))
      (reset! new-points nil))))

(defmulti get-line (fn [line] (spy :debug (str "draw-line " line) [(:type line) @debug-state])))

(derive :simple ::line)
(derive :be     ::line)
(derive :wu     ::line)
(derive :circle ::line)
(derive :elipse ::line)
(derive :hyperbola ::line)
(derive :ermit ::line)
(derive :bezie ::line)
(derive :spline ::line)
(derive :poligon ::line)

(defmethod get-line [:wu    :not] [line]  (line-points-cached line))
(defmethod get-line :default [line]  (map (fn [[x y]] [x y 1]) (line-points-cached line)))

(def prev-perm-content (atom []))

(defn draw-permanent-content [{:keys [hidden visible] :as drawer} lines]
  (let [[old new both] (diff @prev-perm-content lines)
        to-draw (remove (into #{} both) lines)]
    (reset! prev-perm-content lines)
    (draw-pixels! hidden
                  (mapcat get-line to-draw))))

(defn reset-primitives! []
  (reset! primitives nil)
  (reset! prev-perm-content nil))

(defn draw-temporaly-content [{:keys [extra visible] :as drawer} lines]
  (clean-canvas! extra)
  (draw-pixels! extra
                (mapcat get-line lines)))

(defn draw-canvas-contents!
  "set flags to redraw content"
  [permanent-change temporary]
  (swap! drawer assoc
         :perm-changed (not-empty permanent-change)
         :temp-changed (not-empty temporary)))

(defn draw-visible-content
  "redraw content in optimal way using flags"
  [{:keys [visible hidden extra perm-changed temp-changed] :as drawer}]
  {:pre [(not (nil? visible))]}
  (when (or temp-changed perm-changed)
    (when perm-changed
      (draw-permanent-content drawer @primitives))
    (when temp-changed
      (draw-temporaly-content drawer @new-primitives))
    (clean-canvas! visible)

    (swap-hidden-to-visible! visible extra)
    (swap-hidden-to-visible! visible hidden))
  (assoc drawer :perm-changed nil :temp-changed nil))

(comment (mapcat get-line @new-primitives)
         (mapcat   (comp pr :type) @primitives)
         (:type {:type :simple, :p1 '(49 62.5), :p2 '(64 55)}))
