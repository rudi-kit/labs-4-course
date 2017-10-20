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

(defn redraw [key reference old-state new-state]
  (draw-canvas-contents! @primitives @new-primitives))

(defn draw-changes-permanent [key reference old-state new-state]
    (:pre (array? new-state))
    (spy :info new-state)
    (spy :info old-state)
  (draw-canvas-contents!
   (filter (comp not nil?) (second (spy :info (diff old-state new-state))))
   nil))

(defn draw-changes-temp [key reference old-state new-state]
  (draw-canvas-contents!
   nil
   new-state))

(defn add-to-primitives! [key reference old-state new-state]
  (if (= new-state :not)
    (save-debug-line!)))

(defn on-draw-mode-change [key reference old-state new-state]
  (push-event @mode-state-machine
              {:type
               (cond
                 (= :ermit new-state) :ermit
                 (= :bezie new-state) :bezie
                 (= :spline new-state) :spline
                 :else :2-points)
               :event new-state}))

(comment
  (get-state @mode-state-machine))

(defn log [& args] (debug args))

(defn registrate-storage-handlers [drawer]
  (add-watch width :width-update redraw)
  (add-watch height :height-update redraw)
  (add-watch scale :height-update redraw)
  (add-watch primitives :primitives-update draw-changes-permanent)
  (add-watch new-primitives :new-primitives-update draw-changes-temp)

  (add-watch current-mode-state-machine :current-mode-state-machine log)
  (add-watch debug-state :debug-state-change add-to-primitives!)
  (add-watch selected :selected-state-change on-draw-mode-change)
  (reset! mode-state-machine (->ModesMashine))
  (reset! current-mode-state-machine (->2PointMode)))
