(ns labs-4-cource.updaters
  (:require [clojure.data :refer [diff]]
            [labs-4-cource.canvas :refer [clean! swap-hidden-to-visible!]]
            [labs-4-cource.debuging
             :refer
             [draw-canvas-contents! draw-line! save-debug-line!]]
            [labs-4-cource.storage
             :refer
             [debug-state drawer height primitives scale width]]
            [taoensso.timbre :as timbre :refer-macros [spy]]))

(defn redraw [drawer key reference old-state new-state]
  (clean! @drawer)
  (draw-canvas-contents!))

(defn swap-images [drawer key reference old-state new-state]
  (swap-hidden-to-visible! @drawer))

(defn draw-changes [drawer key reference old-state new-state]
  (let [[old new] (spy :debug "primitives changes" (diff old-state new-state))]
      (clean! @drawer)
      (doall (for [line new-state] (draw-line! @drawer line)))
      (comment (when (= @debug-state :not)
           (doall (for [line new] (when-not (nil? line)     (draw-line! @drawer line))))))))

(defn add-to-primitives! [drawer key reference old-state new-state]
    (if (= new-state :not)
       (save-debug-line!))
  )

(defn registrate-handlers [drawer]
    (add-watch width :width-update (partial redraw drawer))
    (add-watch height :height-update (partial redraw drawer))
    (add-watch scale :height-update (partial swap-images drawer))
    (add-watch primitives :primitives-update (partial draw-changes drawer))

    (add-watch debug-state :debug-state-change (partial add-to-primitives! drawer))

    )
