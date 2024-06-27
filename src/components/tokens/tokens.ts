import { themes } from "../../state";
import { generateColorVariation, scaleNumbers } from "../../util/helpers";

export const tokensStyleSheet = new CSSStyleSheet();

const colorScaling = [10, 20, 30, 40, 50, 60, 70, 80, 90];

export const renderTokensStyleSheet = () => {
  let tokens = "";
  for (const theme in themes.get()) {
    tokens += ':root[data-theme="' + theme + '"] {\n';

    // palette
    for (const key in themes.get()[theme].colors.palette) {
      const value = (themes.get()[theme].colors.palette as any)[key];
      for (const num of colorScaling) {
        const hsl = generateColorVariation(
          value,
          num,
          themes.get()[theme].scaling.lightness,
          themes.get()[theme].scaling.saturation
        );
        const color = `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`;
        tokens += `--${key}-${num}0: ${color};\n`;
      }
    }

    // semantic
    for (const key in themes.get()[theme].colors.semantic) {
      const colorKey = (themes.get()[theme].colors.semantic as any)[key];
      const value = (themes.get()[theme].colors.palette as any)[colorKey];
      for (const num of colorScaling) {
        const hsl = generateColorVariation(
          value,
          num,
          themes.get()[theme].scaling.lightness,
          themes.get()[theme].scaling.saturation
        );
        const color = `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`;
        tokens += `--${key}-${num}0: ${color};\n`;
      }
    }

    // inputs
    const scaling = themes.get()[theme].scaling;
    const borders = scaleNumbers(10, 1, 9, scaling.borderWidth, 1);
    for (let n = 1; n <= borders.length; n++) tokens += `--border-width-${n}00: ${borders[n - 1]}px;\n`;
    const radii = scaleNumbers(10, 1, 9, scaling.borderRadius, 1);
    for (let n = 1; n <= radii.length; n++) tokens += `--border-radius-${n}00: ${radii[n - 1]}px;\n`;
    const columns = scaleNumbers(10, 1, 9, scaling.columnWidth, 1);
    for (let n = 1; n <= columns.length; n++) tokens += `--column-width-${n}00: ${columns[n - 1]}ch;\n`;
    const fontSizes = scaleNumbers(10, 1, 9, scaling.fontSize, 1);
    for (let n = 1; n <= fontSizes.length; n++) tokens += `--font-size-${n}00: ${fontSizes[n - 1]}ch;\n`;
    const iconSizes = scaleNumbers(10, 1, 9, scaling.iconSize, 1);
    for (let n = 1; n <= iconSizes.length; n++) tokens += `--icon-size-${n}00: ${iconSizes[n - 1]}ch;\n`;
    const rowWidths = scaleNumbers(10, 1, 9, scaling.rowWidth, 1);
    for (let n = 1; n <= rowWidths.length; n++) tokens += `--row-width-${n}00: ${rowWidths[n - 1]}ch;\n`;
    const paddings = scaleNumbers(10, 1, 9, scaling.padding, 1);
    for (let n = 1; n <= paddings.length; n++) tokens += `--padding-${n}00: ${paddings[n - 1]}ch;\n`;

    tokens += `}\n`;
  }

  console.log(tokens);
  tokensStyleSheet.replaceSync(tokens);
};
