import { Card } from "./Card";
import { html, lib } from "./config";

export const Body = () => {
  return html.div(
    ["style", "display", "grid"],
    ["style", "justifyContent", "center"],
    ["style", "gridTemplateColumns", "subgrid"],
    ["style", "gap", "20px"]
  )(...lib.map(Card));
};
