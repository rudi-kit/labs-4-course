(ns labs-4-cource.utils
  #?(:clj (:gen-class)))

(comment (defn do-all-with-delay
           [delay executor col]
           (when (not-empty col)
             (executor (first col))
             (js/setTimeout do-all-with-delay delay executor (rest col))))

         (defn iterate-with-delay [delay executor & args]
           (when-let [delayed (apply executor args)])))

(defn select-keysv [keys col]
  (pr keys col)
  (cond (vector? col)
        (mapv second (sort (select-keys col keys)))
        (seq? col)
        (mapv (partial nth col) keys)
        :else
        (assert true (str "Unnexpected collection type " (type col)))))

(defn poligon-edges
  [points]
  (partition 2 1 points points))

(defn get-min-max-coordinates
  [points]
  {:pre [(= 2 (count points))]}
  (apply map vector (apply map (comp sort vector) points)))
