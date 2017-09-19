(ns labs-4-cource.debugger)

(defn do-step [callback col]
    (callback (first col)
    (partial do-step callback (rest col))))

