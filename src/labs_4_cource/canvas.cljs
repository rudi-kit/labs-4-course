(ns labs-4-cource.canvas
   (:require [canvas.events :as evt]))

(defn canvas-events [canvas] (let [events (new evt/events canvas)]
                                 (.listen events)
                                 events))
