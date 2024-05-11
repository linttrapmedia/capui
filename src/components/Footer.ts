import {} from "../config";
import { html } from "../template";

export const Footer = () => {
  return html.div(
    ["style", "maxWidth", "960px"],
    ["style", "padding", "20px"],
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "20px"],
    ["style", "margin", "auto"]
  )(
    html.div(
      ["style", "color", "rgba(255,255,255,0.2)"],
      ["style", "fontSize", "20px"],
      ["style", "textAlign", "center"]
    )(html.div(["style", "fontSize", "20px"], ["style", "color", "rgba(255,255,255,1)"])("cap ui")),
    html.div(
      ["style", "color", "rgba(255,255,255,0.2)"],
      ["style", "fontSize", "14px"],
      ["style", "textAlign", "center"]
    )(
      "©2024 All rights reserved. Made in the USA 🇺🇸 by Kevin Lint as a product of ",
      html.a(
        ["attr", "href", "https://github.com/linttrapmedia"],
        ["style", "color", "rgba(255,255,255,0.2)"]
      )("Lint Trap Media")
    )
  );
};
