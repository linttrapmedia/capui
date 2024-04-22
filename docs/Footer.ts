import { colors, html } from "./config";

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
      ["style", "color", colors.get().secondary],
      ["style", "fontSize", "20px"],
      ["style", "textAlign", "center"]
    )(html.div(["style", "fontSize", "20px"], ["style", "color", colors.get().accent])("cap ui")),
    html.div(
      ["style", "color", colors.get().secondary],
      ["style", "fontSize", "14px"],
      ["style", "textAlign", "center"]
    )(
      "©2024 All rights reserved. Made in the USA 🇺🇸 by Kevin Lint as a product of ",
      html.a(
        ["attr", "href", "https://github.com/linttrapmedia"],
        ["style", "color", colors.get().secondary]
      )("Lint Trap Media")
    )
  );
};
