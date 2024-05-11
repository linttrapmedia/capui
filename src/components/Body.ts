import { lib } from "../config";
import { html } from "../template";
import { Card } from "./Card";
import { Tokens } from "./tokens/Tokens";

export const Body = () => {
  return html.div(
    ["style", "display", "grid"],
    ["style", "justifyContent", "center"],
    ["style", "gridTemplateColumns", "subgrid"],
    ["style", "gap", "20px"]
  )(Tokens(), ...lib.map(Card));
};
