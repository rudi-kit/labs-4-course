(ns labs-4-cource.debuging
  (:require [cljs.test :refer-macros [deftest]]
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
  (reset! not-full-line {:line line :rest-points (line-points line)}))

(defn add-line-from-pos []
  (when (spy :info (= (count @new-points) 2))
    (let [line (spy :info "new-line" (apply (@selected lines-generators) @new-points))]
      (if (= @debug-state :not)
        (add-primitives line)
        (add-line-to-debug! line))
      (reset! new-points nil))))

(deftest add-line-to-debug-test
  (reset! not-full-line nil)
  (add-line-to-debug! (line-points {:type :wu :p1 [0 0] :p2 [5 5]}))
  (= @not-full-line {:line {:type :wu [0 0] [5 5]}
                     :rest-points '([0 0 1] [1 1 1] [2 2 1] [3 3 1] [4 4 1] [5 5 1])}))

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

(defmethod get-line [:wu    :not] [line]  (line-points line))
  (defmethod get-line :default [line]  (map (fn [[x y]] [x y 1]) (line-points line)))

(defn draw-permanent-content [{:keys [hidden visible]} lines]
  (draw-pixels! hidden
                (mapcat get-line lines)))

(defn draw-temporaly-content [{:keys [extra visible]} lines]
  (clean-canvas! extra)
  (draw-pixels! extra
                (mapcat get-line lines)))

(defn draw-canvas-contents!
  [permanent-change temporary]
  (let [{:keys [visible hidden extra]} @drawer]
    (clean-canvas! extra)
    (clean-canvas! visible)
    (draw-temporaly-content @drawer temporary)
    (swap-hidden-to-visible! visible extra)
    (when (nil? permanent-change)
      (swap-hidden-to-visible! visible hidden))
    (when-not (nil? permanent-change)
      (draw-permanent-content @drawer permanent-change)
      (swap-hidden-to-visible! visible hidden))))

(comment (mapcat get-line @new-primitives)
         (mapcat   (comp pr :type) @primitives)
         (:type {:type :simple, :p1 '(49 62.5), :p2 '(64 55)}))
