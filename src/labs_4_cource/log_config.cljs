(ns labs-4-cource.log-config
    (:require [reagent.core :as reagent]
              [taoensso.timbre :as timbre :refer-macros [get-env spy]]))

(defonce log-level (atom :debug))
(defonce log-config
    (reagent/atom
     {:level :debug
      }))

