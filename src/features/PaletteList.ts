import { theme, themes } from "../state";
import { html } from "../template";
import { generateColorVariation, hexToHSL } from "../util/helpers";

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
    const hslValue = `hsl(${hue}, ${saturation}%, ${relativeLightness}%, 0.35)`;
    return hslValue;
  };

  return html.div(["column", "0px", "stretch", "space-between", "100%"])(
    ...Object.entries(colors.palette).map(([name, value]) => {
      const { hue, saturation, lightness } = hexToHSL(value);
      return html.div(["row"])(
        ...variation.map((num) =>
          html.div(
            ["column"],
            ["style", "width", `${100 / variation.length}%`],
            ["style", "fontSize", "9px"],
            ["style", "backgroundColor", getValue(value, num)],
            ["style", "padding", "6px"]
          )(
            html.span(["style", "transform", "rotate(-45deg)"], ["style", "color", getTextColor(value, num)])(`${num}0`)
          )
        )
      );
    })
  );
};
