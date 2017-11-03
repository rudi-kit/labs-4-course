(ns labs-4-cource.test.affine-transforms)

(deftest translate-test
    (is (= ([101 101 0 1] [301 301 300 1] [101 301 300 1])
           (translate '([100 100 0]
                        [300 300 300] 
                        [100 300 300]) [1 1 0])))



    )
