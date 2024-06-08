import { dialog } from "../state";
import { html } from "../template";
import {} from "../x.config";
import { Component } from "../x.typings";

export const Card = (component: Component) => {
  return html.div(["class", "card card--medium card--light card--ghost"], ["style", "gridColumn", "span 6"])(
    html.div(
      ["class", "card__title"],
      ["style", "cursor", "pointer"],
      ["click", () => dialog.set({ ...component, showing: true })]
    )(component.title),
    html.div(
      ["class", "card__actions"],
      ["style", "cursor", "pointer"],
      ["click", () => dialog.set({ ...component, showing: true })]
    )(
      html.div(
        ["style", "width", "8px"],
        ["style", "height", "8px"],
        ["style", "borderRight", "1px solid rgba(255,255,255,1)"],
        ["style", "borderBottom", "1px solid rgba(255,255,255,1)"],
        ["style", "display", "flex"],
        ["style", "transform", "rotate(-45deg)"]
      )("")
    ),
    html.div(
      ["class", "card__body"],
      ["innerHTML", () => component.preview],
      ["style", "display", "flex"],
      ["style", "gap", "20px"],
      ["style", "flexWrap", "wrap"],
      ["style", "alignItems", "center"],
      ["style", "justifyContent", "center"]
    )()
  );
};
