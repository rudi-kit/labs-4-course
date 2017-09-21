(ns labs-4-cource.debug-component)

(comment (defn debug-component []
     [:div
      [:select
       (for [value [:not :debug]]
           {:value value})]]))
