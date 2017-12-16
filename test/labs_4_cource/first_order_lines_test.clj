(ns labs-4-cource.first-order-lines-test
  (:require [clojure.test :refer [are deftest]]
            [labs-4-cource.first-order-lines
             :refer
             [->BrezenhameLine ->SimpleLine calc-steps line-points]]
            ))

(deftest line-from-book
            (are [src expected] (= src expected)
                (line-points (->SimpleLine [0 0] [2 2])) [[0 0] [1 1] [2 2]]
                (line-points (->SimpleLine [0 0] [9 4])) [[0 0] [1 0] [2 1] [3 1] [4 2] [5 2] [6 3] [7 3] [8 4] [9 4]]
                (line-points (->SimpleLine [5 0] [0 1])) [[5 0] [4 0] [3 0] [2 1] [1 1] [0 1]]))

(deftest line-brezenhaim
    (are [src expected] (= (map (fn [[x y]] [x y]) src) expected)
        (line-points (->BrezenhameLine [8 8] [16 8])) '([8 8] [9 8] [10 8] [11 8] [12 8] [13 8] [14 8] [15 8] [16 8]) 
        (line-points (->BrezenhameLine [0 0] [9 4])) [[0 0] [1 0] [2 1] [3 1] [4 2] [5 2] [6 3] [7 3] [8 4] [9 4]]
        (line-points (->BrezenhameLine  [5 0] [0 1])) [[5 0] [4 0] [3 0] [2 1] [1 1] [0 1]]
        (line-points (->BrezenhameLine [8 8] [16 6])) '([8 8] [9 8] [10 8] [11 7] [12 7] [13 7] [14 7] [15 6] [16 6])
        (line-points (->BrezenhameLine [8 8] [16 2])) '([8 8] [9 7] [10 7] [11 6] [12 5] [13 4] [14 4] [15 3] [16 2])
        (line-points (->BrezenhameLine [8 8] [8 0])) '([8 8] [8 7] [8 6] [8 5] [8 4] [8 3] [8 2] [8 1] [8 0])
        (line-points (->BrezenhameLine [8 8] [6 0])) '([8 8] [8 7] [8 6] [7 5] [7 4] [7 3] [7 2] [6 1] [6 0])
        (line-points (->BrezenhameLine [8 8] [0 2])) '([8 8] [7 7] [6 7] [5 6] [4 5] [3 4] [2 4] [1 3] [0 2])
        (line-points (->BrezenhameLine [8 8] [0 6])) '([8 8] [7 8] [6 8] [5 7] [4 7] [3 7] [2 7] [1 6] [0 6])
        (line-points (->BrezenhameLine [8 8] [0 8])) '([8 8] [7 8] [6 8] [5 8] [4 8] [3 8] [2 8] [1 8] [0 8])
        (line-points (->BrezenhameLine [8 8] [2 16])) '([8 8] [7 9] [7 10] [6 11] [5 12] [4 13] [4 14] [3 15] [2 16])
        (line-points (->BrezenhameLine [8 8] [6 16])) '([8 8] [8 9] [8 10] [7 11] [7 12] [7 13] [7 14] [6 15] [6 16])
        (line-points (->BrezenhameLine [8 8] [16 16])) '([8 8] [9 9] [10 10] [11 11] [12 12] [13 13] [14 14] [15 15] [16 16])
        ))

