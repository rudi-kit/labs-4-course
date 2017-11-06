(ns labs-4-cource.reagent-helpers
    (:require [taoensso.timbre :as timbre :refer-macros [debug spy]]))


(defn get-value [event]
    (->> event
        .-target
        .-value
        (spy :info "get-value")))

(defn reset-ratom-value-fun [ratom]
    (fn [event] (reset-ratom-value ratom event)))

(defn reset-ratom-value [ratom event]
    (reset! ratom (keyword (get-value event))))
