(ns labs-4-cource.components.amputate-component
  (:require [labs-4-cource.affine-transformations :refer [rotate]]
            [labs-4-cource.amputation :refer [amputate-kb amputate-Koen-Sazerland]]
            [labs-4-cource.debuging :refer [reset-primitives!]]
            [labs-4-cource.first-order-lines :refer [->SimpleLine]]
            [labs-4-cource.point-line-figure :refer [remove-invisible]]
            [labs-4-cource.poligons :refer [->Poligon]]
            [labs-4-cource.storage :refer [new-primitives primitives]]
            [reagent.core :as r]))

(def state (r/atom {}))

(defn line-last-points [{p1 :p1 p2 :p2 :as line}]
  {:pre [((comp #{:be :simple :smooth} :type) line)]}
  [p1 p2])

(defn rect-poligon [[[x1 y1] [x2 y2]]]
  (->Poligon [[x1 y1] [x1 y2] [x2 y2] [x2 y1]]))

(defn rect-from-line [line]
  (rect-poligon (line-last-points line)))

(defn draw-rect []
  (let [be-lines (filter (comp #{:simple} :type) @primitives)]
    (when-not (empty? be-lines)
      (swap! state assoc :rect (line-last-points (first be-lines)))
      (swap! primitives conj (rect-poligon (:rect @state))))))

(defn amputate-via-Koen-Sazerland []
  (let [lines (filter (comp #{:be :simple :smooth} :type) @primitives)
        vec-lines (map line-last-points lines)
        rect (:rect @state)
        {visible :visible} (amputate-Koen-Sazerland vec-lines rect)]
    (reset-primitives!)
    (swap! new-primitives concat
           (map (partial apply ->SimpleLine) visible)
           [(rect-poligon (:rect @state))])))

(defn save-changes []
  (reset! primitives @new-primitives)
  (reset! new-primitives nil))

(defn amputate-via-kb []
  (let [lines (filter (comp #{:be :simple :smooth} :type) @primitives)
        vec-lines (map line-last-points lines)
        rect (:points (first (filter (comp #{:poligon} :type) @new-primitives)))
        visible (amputate-kb vec-lines rect)
        visible (map (partial apply ->SimpleLine) visible)]
    (reset-primitives!)
    (reset! primitives   visible)))

(def poligon {:type :poligon,
              :points [[132 268] [257 475] [467 461] [455 230] [270 116]]})
(def lines [{:type :simple, :p1 [103 76], :p2 [601 240]}
            {:type :simple, :p1 [585 96], :p2 [60 520]}
            {:type :simple, :p1 [35 363], :p2 [604 504]}
            {:type :simple, :p1 [155 613], :p2 [596 376]}
            {:type :simple, :p1 [64 24], :p2 [511 44]}
            {:type :simple, :p1 [72 228], :p2 [551 261]}
            {:type :simple, :p1 [74 549], :p2 [583 559]}])

(comment (reset! primitives (conj lines poligon)))

(defn amputate-component
  []
  [:div
   [:button
    {:on-click draw-rect}
    "Draw rectangle"]
   [:button
    {:on-click amputate-via-Koen-Sazerland}
    "amputate-via-Koen-Sazerland"]
   [:button
    {:on-click save-changes}
    "save changes"]
   [:button
    {:on-click amputate-via-kb}
    "Kirus back"]])


(def qube (update {:type :carcas
            :points [[100 100 300]
                     [300 100 300]
                     [300 100 100]
                     [100 100 100]
                     [100 300 300]
                     [300 300 300]
                     [300 300 100]
                     [100 300 100]]
            :lines [[0 1]
                    [0 3]
                    [1 2]
                    [2 3]
                    [4 5]
                    [4 7]
                    [5 6]
                    [6 7]
                    [0 4]
                    [1 5]
                    [2 6]
                    [3 7]]
            :edges [[0 1 2 3]
                    [4 5 6 7]
                    [0 3 7 4]
                    [0 1 5 4]
                    [1 2 6 5]
                    [2 3 7 6]]}
                  :points
                  rotate [45 45 45]))


(comment (reset! primitives [qube])
         (reset! primitives (map ->Poligon
                                 (remove-invisible qube
                                                   [0 0 1]))))

(comment(first @primitives)
        (reset! primitives [{:type :poligon,
                             :points [[100 100] [300 100] [300 300] [100 300]]}])
        (reset! primitives [{:type :poligon,
                             :points [[132 268] [257 475] [467 461] [455 230] [270 116]]}]))
