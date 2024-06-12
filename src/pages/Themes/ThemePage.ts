import { fsm } from "../../fsm";
import { Tokens, tokensState } from "../../state";
import { html } from "../../template";

const ColorCard = (colorKey: keyof Tokens["colors"]) => {
  const getColor = () => tokensState.get().colors[colorKey][0];
  const getContrast = () => tokensState.get().colors[colorKey][1];

  return html.div(["class", "flexgrid__item"])(
    html.div(
      ["class", "card"],
      ["class", "card--small"],
      ["class", "card--light"],
      ["class", "card--ghost"],
      ["style:tokens", "--card-bg-color", getColor],
      ["style", "--card-transition-duration", 0],
      ["click", () => fsm({ action: "SET_COLOR_PICKER", colorKey })],
      ["style", "cursor", "pointer"]
    )(
      html.div(["class", "card__title"], ["style:tokens", "--card-title-font-color", getContrast])(colorKey),
      html.div(["class", "card__actions"])(
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
        ["style", "display", "flex"],
        ["style", "gap", "20px"],
        ["style", "flexWrap", "wrap"],
        ["style", "alignItems", "center"],
        ["style", "position", "relative"],
        ["style", "alignItems", "flex-start"],
        ["style", "justifyContent", "flex-start"]
      )(
        html.div(
          ["style", "borderRadius", "2px"],
          ["style", "display", "flex"],
          ["style", "flexDirection", "column"],
          ["style", "height", "30px"],
          ["style", "width", "30px"],
          ["style:tokens", "backgroundColor", getContrast]
        )()
      )
    )
  );
};

export const ThemePage = () => {
  const colors = tokensState.get().colors;
  return html.div(
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "20px"]
  )(
    html.section(
      ["style", "display", "flex"],
      ["style", "flexDirection", "column"],
      ["style", "gap", "20px"]
    )(
      html.div()("Colors"),
      html.div(
        ["class", "flexgrid"],
        ["style", "--mobile-width", "200px"],
        ["style", "--tablet-width", "200px"],
        ["style", "--desktop-width", "200px"],
        ["style", "--mobile-gap", "10px"],
        ["style", "--tablet-gap", "10px"],
        ["style", "--desktop-gap", "10px"]
      )(...Object.keys(colors).map(ColorCard as any))
    ),
    html.section()(html.h2()("Fonts"))
  );
};
