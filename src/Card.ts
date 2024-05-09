import { dialog, html } from "./config";
import { Component } from "./typings";

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

// export const Card = (component: Component) => {
//   return html.div(
//     ["style", "backgroundColor", "rgba(0,0,0,0.1)"],
//     ["style", "borderRadius", "5px"],
//     ["style", "padding", "20px"],
//     ["style", "display", "flex"],
//     ["style", "flexDirection", "column"],
//     ["style", "gap", "10px"],
//     ["style", "position", "relative"],
//     ["style", "transition", "all 0.3s"],
//     ["style", "borderRadius", "5px"],
//     ["style", "gridColumn", "span 6"]
//   )(
//     html.div(
//       ["click", () => dialog.set({ ...component, showing: true })],
//       ["style", "color", "rgba(255,255,255,1)"],
//       ["style", "fontSize", "20px"],
//       ["style", "textAlign", "left"],
//       ["style", "cursor", "pointer"],
//       ["style", "display", "flex"],
//       ["style", "justifyContent", "space-between"],
//       ["style", "alignItems", "center"],
//       ["style", "paddingBottom", "10px"],
//       ["style", "borderBottom", "1px solid rgba(255,255,255,0.1)"],
//       ["style:mouseover", "color", "pink"],
//       ["style:mouseout", "color", "rgba(255,255,255,1)"]
//     )(
//       component.title,
//       html.div(
//         ["style", "width", "8px"],
//         ["style", "height", "8px"],
//         ["style", "borderRight", "1px solid rgba(255,255,255,1)"],
//         ["style", "borderBottom", "1px solid rgba(255,255,255,1)"],
//         ["style", "display", "flex"],
//         ["style", "transform", "rotate(-45deg)"]
//       )("")
//     ),
//     html.div(
//       ["style", "color", "rgba(255,255,255,0.2)"],
//       ["style", "fontSize", "14px"],
//       ["style", "textAlign", "center"],
//       ["style", "display", "flex"],
//       ["style", "justifyContent", "space-evenly"],
//       ["style", "alignItems", "center"],
//       ["style", "height", "100%"],
//       ["style", "gap", "10px"],
//       ["style", "flexWrap", "wrap"],
//       ["innerHTML", () => component.preview]
//     )()
//   );
// };
