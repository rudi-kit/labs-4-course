(ns labs-4-cource.debug
  (:require [cljs.test :refer-macros [deftest]]
            [labs-4-cource.canvas :refer [draw-pixels!]]
            [labs-4-cource.primitives :refer [line-points]]
            [labs-4-cource.storage
             :refer
             [add-primitives
              debug-state
              drawer
              lines-generators
              next-primitive
              not-full-line
              primitives
              remove-debug-line!
              selected]]
            [taoensso.timbre :as timbre :refer-macros [spy]]))

(defn save-debug-line! []
    (when-not (= (:line @not-full-line) nil)
        (draw-pixels! @drawer (:rest-points @not-full-line))
        (add-primitives (:line @not-full-line))))

(defn draw-line-by-point! []
  (spy :debug "draw-point" (when-not (empty? (:rest-points @not-full-line)) (draw-pixels! @drawer [(first (:rest-points @not-full-line))])))
  (swap! not-full-line assoc :rest-points (rest (:rest-points @not-full-line)))
  (when (empty? (:rest-points @not-full-line))
    (save-debug-line!)
    (remove-debug-line!)))

(defn add-line-to-debug! [line]
  (save-debug-line!)
  (reset! not-full-line {:line line :rest-points (line-points line)}))

(defn add-line-from-pos []
  (when (spy :info (= (count @next-primitive) 2))
      (let [line (spy :info (apply (@selected lines-generators) @next-primitive))]
          (if (spy :info (= @debug-state :not))
              (add-primitives line)
              (add-line-to-debug! line))
          (reset! next-primitive nil))))

(deftest add-line-to-debug-test
  (reset! not-full-line nil)
  (add-line-to-debug! (line-points {:type :wu :p1 [0 0] :p2 [5 5]}))
  (= @not-full-line {:line {:type :wu [0 0] [5 5]}
                     :rest-points '([0 0 1] [1 1 1] [2 2 1] [3 3 1] [4 4 1] [5 5 1])}))

(defmulti draw-line! (fn [canvas line] (spy :debug (str "draw-line" line) [(:type line) @debug-state])))

(derive :simple ::line)
(derive :be     ::line)
(derive :wu     ::line)

(defmethod draw-line! [:wu    :not] [canvas line]  (draw-pixels! canvas (line-points line)))
(defmethod draw-line! [::line :not] [canvas line]  (draw-pixels! canvas (map (fn [[x y]] [x y 1]) (line-points line))))
(defmethod draw-line! [::line :debug] [canvas line] (add-line-to-debug! line))

(defn draw-canvas-contents! []
  (doall (map (partial draw-line! @drawer) @primitives)))
