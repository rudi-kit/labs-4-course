(ns ^:figwheel-no-load labs-4-cource.dev
  (:require
    [labs-4-cource.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
