import { html } from "./config";

export const Buttons = () => {
  return html.div(
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "10px"],
    ["style", "padding", "20px"]
  )(
    html.button(["class", "button"])("Base Button"),
    html.h3()("Sizes"),
    html.button(["class", "button button--small"])("Small Button"),
    html.button(["class", "button"])("Medium Button"),
    html.button(["class", "button button--large"])("Large Button"),
    html.h3()("Types"),
    html.button(["class", "button button--primary"])("Primary Button"),
    html.button(["class", "button button--secondary"])("Secondary Button"),
    html.button(["class", "button button--gradient"])("Gradient Button"),
    html.button(["class", "button button--outline"])("Outline Button"),
    html.h3()("States"),
    html.button(["class", "button button--success"])("Success Button"),
    html.button(["class", "button button--warning"])("Warning Button"),
    html.button(["class", "button button--danger"])("Danger Button"),
    html.button(["class", "button button--info"])("Info Button"),
    html.button(["class", "button button--disabled"])("Disabled Button")
  );
};
