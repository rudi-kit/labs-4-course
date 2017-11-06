(ns labs-4-cource.test.debugging
    )

(deftest add-line-to-debug-test
  (reset! not-full-line nil)
  (add-line-to-debug! (line-points {:type :wu :p1 [0 0] :p2 [5 5]}))
  (= @not-full-line {:line {:type :wu [0 0] [5 5]}
                     :rest-points '([0 0 1] [1 1 1] [2 2 1] [3 3 1] [4 4 1] [5 5 1])}))
