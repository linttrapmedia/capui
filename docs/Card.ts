import { dialog, html } from "./config";
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
    ["style:mouseover", "boxShadow", `rgba(255,255,255,0.05) 10px 10px 2px`],
    ["style:mouseout", "boxShadow", "none"],
    ["style", "transition", "all 0.3s"],
    ["style", "borderRadius", "5px"]
  )(
    // html.img(["attr", "src", image], ["style", "width", "100%"], ["style", "borderRadius", "5px"])(),
    html.div(
      ["style", "color", "rgba(255,255,255,1)"],
      ["style", "fontSize", "20px"],
      ["style", "textAlign", "center"]
    )(component.title),
    html.div(
      ["style", "color", "rgba(255,255,255,0.2)"],
      ["style", "fontSize", "14px"],
      ["style", "textAlign", "center"]
    )(component.description),
    html.div(
      ["style", "color", "rgba(255,255,255,0.2)"],
      ["style", "fontSize", "14px"],
      ["style", "textAlign", "center"],
      ["style", "marginTop", "10px"],
      ["style", "pointerEvents", "none"],
      ["style", "display", "flex"],
      ["style", "justifyContent", "center"],
      ["style", "alignItems", "center"],
      ["style", "height", "100%"],
      ["style", "gap", "5px"],
      ["innerHTML", () => component.preview]
    )()
  );
};
