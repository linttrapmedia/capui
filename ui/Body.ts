import { Card } from "./Card";
import { html, lib } from "./config";

export const Body = () => {
  return html.div(["style", "padding", "20px"])(
    html.div(
      ["style", "display", "grid"],
      ["style", "justifyContent", "center"],
      ["style", "gridTemplateColumns", "repeat(auto-fill, minmax(400px, 1fr))"],
      ["style", "gap", "20px"],
      ["style", "maxWidth", "960px"],
      ["style", "margin", "auto"],
      ["style", "width", "100%"]
    )(...lib.map(Card))
  );
};
