(ns labs-4-cource.scale-component)

(defn scale-component [value on-change]
    [:select {:onChange (fn [event] (-> event
                                        .-target
                                        .-value
                                        on-change))
            :value value}
   [:option {:value 1} 1]
   [:option {:value 2} 2]
   [:option {:value 4} 4]
   [:option {:value 8} 8]])
