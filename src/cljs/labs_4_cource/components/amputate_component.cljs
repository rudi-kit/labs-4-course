(ns labs-4-cource.components.amputate-component
  (:require [labs-4-cource.amputation
             :refer
             [amputate-Kirus-back amputate-Koen-Sazerland]]
            [labs-4-cource.debuging :refer [reset-primitives!]]
            [labs-4-cource.first-order-lines :refer [->SimpleLine]]
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
        {visible :visible} (amputate-Kirus-back vec-lines rect)]
    (reset-primitives!)
    (swap! new-primitives concat
           (map (partial apply ->SimpleLine) visible))))

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
