(ns labs-4-cource.reagent-helpers
    (:require [taoensso.timbre :as timbre :refer-macros [debug spy]]))


(defn get-value [event]
    (->> event
        .-target
        .-value
        (spy :info "get-value")))
