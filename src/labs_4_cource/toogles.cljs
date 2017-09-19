(ns labs-4-cource.toogles)

(defn toggles [selected values on-change]
    [:div
     (doall (for [value values]
                ^{:key value}
                [:label 
                 [:input {:type "radio"
                          :checked (= @selected value)
                          :onClick (partial on-change value)}]
                 value]))])

(defonce selected (reagent/atom :simple))

(defn change-selected [value] (reset! selected value))
