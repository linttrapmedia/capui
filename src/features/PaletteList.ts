import { html } from "../template";
import { generateColorVariation } from "../util/helpers";
import { theme, themes } from "../x.state";

export const PaletteList = () => {
  if (theme.get() === "none") return html.div()("none");
  const currentTheme = themes.get()[theme.get()];
  const colors = themes.get()[theme.get()].colors;
  const variation = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  const getValue = (hex: string, variation: number) => {
    const { hue, saturation, lightness } = generateColorVariation(
      hex,
      variation,
      currentTheme.scaling.lightness,
      currentTheme.scaling.saturation
    );
    const hslValue = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    return hslValue;
  };

  const getTextColor = (hex: string, variation: number) => {
    const { hue, saturation, lightness } = generateColorVariation(
      hex,
      variation,
      currentTheme.scaling.lightness,
      currentTheme.scaling.saturation
    );
    const relativeLightness = lightness > 40 ? 0 : 100;
    const hslValue = `hsl(${hue}, ${saturation}%, ${relativeLightness}%, 0.65)`;
    return hslValue;
  };

  return html.div(["column", "0px", "stretch", "space-between", "100%"])(
    ...Object.entries(colors.palette).map(([name, value]) => {
      return html.div(
        ["row"],
        ["style", "cursor", "pointer"],
        ["style", "height", "30px"],
        ["style", "width", "100%"],
        ["style", "alignItems", "center"],
        ["style", "justifyContent", "center"]
      )(
        html.div(
          ["style", "display", "flex"],
          ["style", "textAlign", "left"],
          ["style", "width", "100%"],
          ["style", "paddingRight", "10px"],
          ["style", "fontSize", "13px"],
          ["style", "minWidth", "80px"],
          ["style", "height", "100%"],
          ["style", "borderBottom", "1px solid var(--background-400)"],
          ["style", "alignItems", "center"],
          ["style", "justifyContent", "flex-start"]
        )(name),
        ...variation.map((num) =>
          html.div(
            ["column"],
            ["style:mobile", "fontSize", "10px"],
            ["style:tablet", "fontSize", "12px"],
            ["style", "backgroundColor", getValue(value, num)],
            ["style", "height", "100%"],
            ["style", "width", "100%"],
            ["style", "color", getTextColor(value, num)]
          )()
        )
      );
    })
  );
};
