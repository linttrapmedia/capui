import { paletteState } from "../../state";
import { html } from "../../template";
import { generateColorVariation, hexToHSL } from "../../util/generators";

export const PaletteList = () => {
  const palette = paletteState.get();
  const colors = Object.entries(palette.colors);
  const variation = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  const getValue = (hex: string, variation: number) => {
    const { hue, saturation, lightness } = generateColorVariation(
      hex,
      variation,
      palette.lightnessRange,
      palette.saturationRange
    );
    const hslValue = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    return hslValue;
  };

  const getTextColor = (hex: string, variation: number) => {
    const { hue, saturation, lightness } = generateColorVariation(
      hex,
      variation,
      palette.lightnessRange,
      palette.saturationRange
    );
    const relativeLightness = lightness > 40 ? 0 : 100;
    const hslValue = `hsl(${hue}, ${saturation}%, ${relativeLightness}%, 0.35)`;
    return hslValue;
  };

  //   const colorHue = `--token-color-${colorKey}-contrast-hue`;
  //   const colorSaturation = `--token-color-${colorKey}-contrast-saturation`;
  //   const colorLightness = `--token-color-${colorKey}-contrast-lightness`;
  //   const colorShadow = `hsla(var(${colorHue}), var(${colorSaturation}), var(${colorLightness}),0.1)`;

  return html.div(["column", "0px"])(
    ...colors.map(([name, value]) => {
      const { hue, saturation, lightness } = hexToHSL(value);
      const hslValue = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

      return html.div(["row"])(
        ...variation.map((num) =>
          html.div(
            ["column"],
            ["style", "width", `${100 / variation.length}%`],
            ["style", "height", "40px"],
            ["style", "fontSize", "10px"],
            ["style", "backgroundColor", getValue(value, num)]
          )(
            html.span(["style", "transform", "rotate(-45deg)"], ["style", "color", getTextColor(value, num)])(`${num}0`)
          )
        )
      );
    })
  );
};
