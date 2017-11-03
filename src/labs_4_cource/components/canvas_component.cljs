(ns labs-4-cource.components.canvas-component
  (:require [labs-4-cource.canvas :as can :refer [clean! toggle-smoothing!]]
            [labs-4-cource.event-handlers
             :refer
             [on-click! on-mouse-move! registrate-event-handlers]]
            [labs-4-cource.storage :refer [drawer height primitives width]]
            [labs-4-cource.updaters :refer [registrate-storage-handlers]]
            [reagent.core :as reagent]
            [taoensso.timbre :as log :refer [spy]]
            [labs-4-cource.event-handlers :refer [on-right-click!]]))

(defn clean-canvas!
    "event handler of button clean canvas"
    []
    (spy :info "clean-canvas")
    (clean! @drawer)
    (reset! primitives nil))

(defn div-with-canvas []
  (reagent/create-class
   {:component-did-mount
    (fn [this]
      (let [canvas1 (-> this
                        reagent/dom-node
                        .-firstChild)
            canvas2 (-> this
                        reagent/dom-node
                        .-children
                        (aget 1))
            canvas3 (-> this
                        reagent/dom-node
                        .-children
                        (aget 2))]
        (spy :info "init canvas-component")
        (reset! drawer {:visible canvas1 :hidden canvas2 :extra canvas3})
        (toggle-smoothing! @drawer false)
        (registrate-event-handlers drawer)
        (registrate-storage-handlers drawer)))

    :reagent-render
    (fn []
      [:div.draw-area
       [:canvas {:id "visible"
                 :width @width
                 :onClick on-click!
                 :onContextMenu on-right-click!
                 :onMouseMove on-mouse-move!
                 :height @height
                 :style {:border "solid 1px"}}]
       [:canvas {:id "hidden"
                 :hidden true
                 :width @width
                 :height @height
                 :style {:border "solid 1px"}}]
       [:canvas {:id "extra"
                 :hidden true
                 :width @width
                 :height @height
                 :style {:border "solid 1px"}}]])}))
