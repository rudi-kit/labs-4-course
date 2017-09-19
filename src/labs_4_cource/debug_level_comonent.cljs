(ns labs-4-cource.debug-level-comonent)

(def log-levels [:trace :debug :info :warn :error :fatal :report])
(defn debug-level-component [current on-change]
    [:select {:value current
              :onChange (fn [event] (-> event .-target .-value on-change))}
     (doall (map (fn [level] ^{:key level} [
                                  :option
                                  {:value level} level]) log-levels)) ])
