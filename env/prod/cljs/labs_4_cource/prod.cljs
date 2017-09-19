(ns labs-4-cource.prod
  (:require
    [labs-4-cource.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
