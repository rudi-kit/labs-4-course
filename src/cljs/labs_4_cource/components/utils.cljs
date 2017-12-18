(ns labs-4-cource.components.utils)

(defn call-with-delay
  ([f]
   {:pre [(fn? f)]}
   (when-let [f' (f)]
     (js/setTimeout call-with-delay 100 f')))
  ([f & more]  (call-with-delay (partial apply f more))))
