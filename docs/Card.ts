import { colors, dialog, html } from "./config";
import { Component } from "./typings";

export const Card = (component: Component) => {
  return html.div(
    ["click", () => dialog.set({ ...component, showing: true })],
    ["style", "backgroundColor", "rgba(0,0,0,0.1)"],
    ["style", "borderRadius", "5px"],
    ["style", "padding", "20px"],
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "10px"],
    ["style", "position", "relative"],
    ["style", "cursor", "pointer"],
    ["style:mouseover", "boxShadow", "rgba(0, 0, 0, 0.4) 10px 10px 2px"],
    ["style:mouseout", "boxShadow", "none"],
    ["style", "transition", "all 0.3s"],
    ["style", "borderRadius", "5px"]
  )(
    // html.img(["attr", "src", image], ["style", "width", "100%"], ["style", "borderRadius", "5px"])(),
    html.div(
      ["style", "color", colors.get().accent],
      ["style", "fontSize", "20px"],
      ["style", "textAlign", "center"]
    )(component.title),
    html.div(
      ["style", "color", colors.get().secondary],
      ["style", "fontSize", "14px"],
      ["style", "textAlign", "center"]
    )(component.description)
  );
};
