(ns labs-4-cource.components.tool-panel-component
  (:require [cljs.tools.reader.edn :refer [read-string]]
            [labs-4-cource.canvas :refer [clean!]]
            [labs-4-cource.debug-component :refer [debug-component]]
            [labs-4-cource.line-examples :refer [sun-lines-component]]
            [labs-4-cource.point-line-figure :refer [->CarcasFigure]]
            [labs-4-cource.reagent-helpers :refer [get-value]]
            [labs-4-cource.scale-component :refer [scale-component]]
            [labs-4-cource.state-mashines :refer [push-event]]
            [labs-4-cource.storage
             :refer
             [carcas-files
              carcas-modification-state
              change-selected
              current-mode-state-machine
              drawer
              line-types
              scale
              selected]]
            [labs-4-cource.toogles :refer [toggles]]))

(defn push-carcas-figure-content
    "get content from file, save it and push it to editor"
  [[file-name content :as file]]
    (let [carcas (->CarcasFigure (read-string content))]
        (swap! carcas-files conj [file-name carcas])
        (push-event @current-mode-state-machine {:type :file :event carcas})))

(defn push-last-figure
    "get last opened file and push it to editor"
    []
    (push-event @current-mode-state-machine {:type :file :event (second (first @carcas-files))}))


(defn read-file
  "callback on input[type=file] onChange to getFiles and read it"
  [file-content-callback on-change-event]
  (let [reader (js/FileReader.)
        file-name (-> on-change-event .-target .-files (aget 0) .-name)]
    (set! (.-onload reader)
            ;; get file content
          (fn [event]
            (file-content-callback
             [file-name
              (-> event .-target .-result)])))
      ;; load file
    (.readAsText reader
                 (aget
                  (->> on-change-event .-target .-files)
                  0))))

(defn file-loader [file-idtf file-callback]
  [:form#file-form {:hidden true}
   [:input {:id file-idtf
            :type :file
            :onChange (partial read-file push-carcas-figure-content)}]])

(defn carcas-control-component
  []
  [:div
   (doall
    (for [item [:translate :scale :rotate]]
      ^{:key item}
      [:label
       [:input
        {:type :radio
         :value item
         :checked (= item @carcas-modification-state)
         :onChange (comp (partial reset! carcas-modification-state) keyword get-value)}]
       item]))
   [:button    "Reflect"]
   [:label {:for :file} "Load"]
   [file-loader :file]
   [:button {:onClick push-last-figure} "redraw"]])

(defn tool-panel []
  [:div.tool-panel
   [toggles selected  line-types change-selected]
   [:button {:onClick (partial clean! @drawer)} "clean"]
   [scale-component @scale (partial reset! scale)]
   (comment [debug-component])
   (if (= :carcas @selected)
     [carcas-control-component]
     [sun-lines-component])])
