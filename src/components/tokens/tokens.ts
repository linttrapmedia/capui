import { themeState, themesState } from "../../state";
import { hexToHSL } from "../../util/generators";

export const tokensStyleSheet = new CSSStyleSheet();

export const syncTokensStyleSheet = () => {
  const theme = themesState.get()[themeState.get()];
  const { colors } = theme;
  const tokens = `
:root {
${Object.entries(colors)
  .map(([colorKey, [color, contrast]]) => {
    const hslValues = hexToHSL(color);
    const hslContrastValues = hexToHSL(contrast);
    const hueToken = `--token-color-${colorKey}-hue`;
    const saturationToken = `--token-color-${colorKey}-saturation`;
    const lightnessToken = `--token-color-${colorKey}-lightness`;
    const contrastHueToken = `--token-color-${colorKey}-contrast-hue`;
    const contrastSaturationToken = `--token-color-${colorKey}-contrast-saturation`;
    const contrastLightnessToken = `--token-color-${colorKey}-contrast-lightness`;
    const colorToken = `--token-color-${colorKey}`;
    const contrastToken = `--token-color-${colorKey}-contrast`;
    return [
      `${hueToken}: ${hslValues.hue};`,
      `${saturationToken}: ${hslValues.saturation}%;`,
      `${lightnessToken}: ${hslValues.lightness}%;`,
      `${colorToken}: hsl(var(${hueToken}), var(${saturationToken}), var(${lightnessToken}));`,
      `${contrastHueToken}: ${hslContrastValues.hue};`,
      `${contrastSaturationToken}: ${hslContrastValues.saturation}%;`,
      `${contrastLightnessToken}: ${hslContrastValues.lightness}%;`,
      `${contrastToken}: hsl(var(${contrastHueToken}), var(${contrastSaturationToken}), var(${contrastLightnessToken}));`,
    ].join("\n");
  })
  .join("\n")}
}
`;
  tokensStyleSheet.replaceSync(tokens);
  console.log(tokens);
};
