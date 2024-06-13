import { fsm } from "../../fsm";
import { Tokens, themeState, themesState } from "../../state";
import { html } from "../../template";

const ColorCard = (colorKey: keyof Tokens["colors"]) => {
  const getTheme = () => themeState.get();
  const getColor = () => themesState.get()[getTheme()].colors[colorKey][0];
  const getContrast = () => themesState.get()[getTheme()].colors[colorKey][1];

  return html.div(["class", "flexgrid__item"])(
    html.div(
      ["class", "card"],
      ["class", "card--small"],
      ["class", "card--light"],
      ["class", "card--ghost"],
      ["style:themes", "--card-bg-color", getColor],
      ["style", "--card-transition-duration", 0],
      ["click", () => fsm({ action: "SET_COLOR_PICKER", colorKey })],
      ["style", "cursor", "pointer"]
    )(
      html.div(["class", "card__title"], ["style:themes", "--card-title-font-color", getContrast])(colorKey),
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
        ["style", "columnGap", "1%"],
        ["style", "rowGap", "5px"],
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
          ["style", "height", "20px"],
          ["style", "width", "10%"],
          ["style:themes", "backgroundColor", getContrast]
        )()
      )
    )
  );
};

export const ThemePage = () => {
  const colors = themesState.get()[themeState.get()].colors;
  return html.div(
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "20px"]
  )(
    html.section(
      ["class", "section"],
      ["style", "display", "flex"],
      ["style", "flexDirection", "column"],
      ["style", "gap", "20px"]
    )(
      html.div(["class", "section__header"])(
        html.h2(["class", "section__header__title"])("Colors"),
        html.p(["class", "section__header__description"])(
          "Colors are defined along with a contasting color to form a set of semantic primitives which can be further modified in context (per component) through the use of CSS variables."
        )
      ),
      html.div(
        ["class", "flexgrid"],
        ["style", "--mobile-width", "200px"],
        ["style", "--tablet-width", "200px"],
        ["style", "--desktop-width", "200px"],
        ["style", "--mobile-gap", "10px"],
        ["style", "--tablet-gap", "10px"],
        ["style", "--desktop-gap", "10px"],
        ["innerHTML:theme", () => Object.keys(colors).map(ColorCard as any) as unknown as HTMLElement]
      )()
    ),
    html.section()(html.h2()("Fonts"))
  );
};
