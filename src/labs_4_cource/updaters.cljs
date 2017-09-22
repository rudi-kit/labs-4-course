(ns labs-4-cource.updaters
  (:require [clojure.data :refer [diff]]
            [labs-4-cource.canvas :refer [clean! swap-hidden-to-visible!]]
            [labs-4-cource.debugger
             :refer
             [draw-canvas-contents! draw-line! save-debug-line!]]
            [labs-4-cource.storage
             :refer
             [debug-state drawer height primitives scale width]]
            [taoensso.timbre :as timbre :refer-macros [spy]]))

(defn redraw [key reference old-state new-state]
  (clean! @drawer)
  (draw-canvas-contents!))

(defn swap-images [key reference old-state new-state]
  (swap-hidden-to-visible! @drawer))

(defn draw-changes [key reference old-state new-state]
  (let [[old new] (spy :debug "primitives changes" (diff old-state new-state))]
      (when (= @debug-state :not)
          (doall (for [line new] (when-not (= line nil)     (draw-line! @drawer line)))))))

(defn add-to-primitives! [key reference old-state new-state]
    (if (= new-state :not)
       (save-debug-line!))
  )

(add-watch width :width-update redraw)
(add-watch height :height-update redraw)
(add-watch scale :height-update swap-images)
(add-watch primitives :primitives-update draw-changes)

(add-watch debug-state :debug-state-change add-to-primitives!)
