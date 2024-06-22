import { themes } from "../../state";
import { generateColorVariation } from "../../util/generators";

export const tokensStyleSheet = new CSSStyleSheet();
const variation = [10, 20, 30, 40, 50, 60, 70, 80, 90];

export const renderTokensStyleSheet = () => {
  let tokens = "";
  for (const theme in themes.get()) {
    tokens += ':root[data-theme="' + theme + '"] {\n';

    // palette
    for (const key in themes.get()[theme].colors.palette) {
      const value = (themes.get()[theme].colors.palette as any)[key];
      for (const num of variation) {
        const hsl = generateColorVariation(
          value,
          num,
          themes.get()[theme].colors.lightnessRange,
          themes.get()[theme].colors.saturationRange
        );
        const color = `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`;
        tokens += `--${key}-${num}0: ${color};\n`;
      }
    }

    // semantic
    for (const key in themes.get()[theme].colors.semantic) {
      const colorKey = (themes.get()[theme].colors.semantic as any)[key];
      const value = (themes.get()[theme].colors.palette as any)[colorKey];
      for (const num of variation) {
        const hsl = generateColorVariation(
          value,
          num,
          themes.get()[theme].colors.lightnessRange,
          themes.get()[theme].colors.saturationRange
        );
        const color = `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`;
        tokens += `--${key}-${num}0: ${color};\n`;
      }
    }

    // inputs
    tokens += `--icon-scaling: ${themes.get()[theme].scaling.icon}ch;\n`;
    tokens += `--text-scaling: ${themes.get()[theme].scaling.text}ch;\n`;
    tokens += `--col-gap-scaling: ${themes.get()[theme].scaling.colGap}ch;\n`;
    tokens += `--row-gap-scaling: ${themes.get()[theme].scaling.rowGap}ch;\n`;
    tokens += `--padding-scaling: ${themes.get()[theme].scaling.padding}ch;\n`;
    tokens += `--borders-scaling: ${themes.get()[theme].scaling.borders}ch;\n`;
    tokens += `--weight-scaling: ${themes.get()[theme].scaling.weight}ch;\n`;

    tokens += `}\n`;
  }

  // console.log(tokens);
  tokensStyleSheet.replaceSync(tokens);
};
