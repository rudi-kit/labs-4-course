(ns labs-4-cource.updaters
  (:require [clojure.data :refer [diff]]
            [labs-4-cource.canvas :refer [clean! swap-hidden-to-visible!]]
            [labs-4-cource.debuging :refer [draw-canvas-contents! save-debug-line!]]
            [labs-4-cource.modes-state-machine :refer [->ModesMashine]]
            [labs-4-cource.state-mashines :refer [get-state push-event]]
            [labs-4-cource.storage
             :refer
             [current-mode-state-machine
              debug-state
              drawer
              height
              mode-state-machine
              new-primitives
              primitives
              scale
              selected
              width]]
            [labs-4-cource.two-points-mode :refer [->2PointMode]]
            [taoensso.timbre :as timbre :refer-macros [info debug spy]]))

(defn redraw [drawer key reference old-state new-state]
  (clean! drawer)
  (draw-canvas-contents!))

(defn swap-images [{:keys [visible hidden extra]} key reference old-state new-state]
  (swap-hidden-to-visible! visible hidden))

(defn draw-changes [drawer key reference old-state new-state]
    (clean! @drawer)
    (draw-canvas-contents!))

(defn add-to-primitives! [drawer key reference old-state new-state]
  (if (= new-state :not)
    (save-debug-line!)))

(defn on-draw-mode-change [reference key old-state new-state]
  (if (or (= :ermit new-state))
    (push-event @mode-state-machine {:type :ermit :event new-state})
    (push-event @mode-state-machine {:type :2-points :event new-state})))

(comment
    (get-state @mode-state-machine))

(defn log [& args] (debug args))

(defn registrate-storage-handlers [drawer]
  (add-watch width :width-update (partial redraw drawer))
  (add-watch height :height-update (partial redraw drawer))
  (add-watch scale :height-update (partial swap-images drawer))
  (add-watch primitives :primitives-update (partial draw-changes drawer))
  (add-watch new-primitives :new-primitives-update (partial draw-changes drawer))

  (add-watch current-mode-state-machine :current-mode-state-machine log)
  (add-watch debug-state :debug-state-change (partial add-to-primitives! drawer))
  (add-watch selected :selected-state-change on-draw-mode-change)
    (reset! mode-state-machine (->ModesMashine))
    (reset! current-mode-state-machine (->2PointMode)))
