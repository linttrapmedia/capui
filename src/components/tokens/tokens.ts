import { themeList } from "../../data/themes/Theme";

export const tokensStyleSheet = new CSSStyleSheet();

export const renderTokensStyleSheet = () => {
  let tokens = "";
  for (const t in themeList.get()) {
    tokens += ':root[data-theme="' + t + '"] {\n';

    // palette
    for (const paletteKey in themeList.get()[t].globals.palette) {
      const paletteItems = (themeList.get()[t].globals.palette as any)[paletteKey];
      for (const num in paletteItems) {
        tokens += `--${paletteKey}-${num}: ${paletteItems[num]};\n`;
      }
    }

    // semantic
    for (const semanticItem in themeList.get()[t].globals.semantic) {
      const paletteKey = (themeList.get()[t].globals.semantic as any)[semanticItem];
      const paletteItems = (themeList.get()[t].globals.palette as any)[paletteKey];
      for (const num in paletteItems) {
        const token = `--${semanticItem}-${num}: var(--${paletteKey}-${num}, ${paletteItems[num]});\n`;
        tokens += token;
      }
    }

    // fonts
    // tokens += `--font-serif: ${themeList.get()[t].globals.font.serif};\n`;
    // tokens += `--font-sans: ${themeList.get()[t].globals.font.sans};\n`;
    // tokens += `--font-mono: ${themeList.get()[t].globals.font.mono};\n`;

    // // columns
    // for (const col in themeList.get()[t].globals.scales.column) {
    //   tokens += `--column-${col}: ${(themeList.get()[t].globals.scales.column as any)[col]};\n`;
    // }

    // // rows
    // for (const row in themeList.get()[t].globals.scales.row) {
    //   tokens += `--row-${row}: ${(themeList.get()[t].globals.scales.row as any)[row]};\n`;
    // }

    // // paddings
    // for (const padding in themeList.get()[t].globals.scales.padding) {
    //   tokens += `--padding-${padding}: ${(themeList.get()[t].globals.scales.padding as any)[padding]};\n`;
    // }

    // // margins
    // for (const margin in themeList.get()[t].globals.scales.margin) {
    //   tokens += `--margin-${margin}: ${(themeList.get()[t].globals.scales.margin as any)[margin]};\n`;
    // }

    // // borders
    // for (const border in themeList.get()[t].globals.scales.border.width) {
    //   tokens += `--border-width-${border}: ${(themeList.get()[t].globals.scales.border.width as any)[border]};\n`;
    // }

    // // border radii
    // for (const radius in themeList.get()[t].globals.scales.border.radius) {
    //   tokens += `--border-radius-${radius}: ${(themeList.get()[t].globals.scales.border.radius as any)[radius]};\n`;
    // }

    // // font sizes
    // for (const fontSize in themeList.get()[t].globals.scales.font.size) {
    //   tokens += `--font-size-${fontSize}: ${(themeList.get()[t].globals.scales.font.size as any)[fontSize]};\n`;
    // }

    // // font weights
    // for (const fontWeight in themeList.get()[t].globals.scales.font.weight) {
    //   tokens += `--font-weight-${fontWeight}: ${(themeList.get()[t].globals.scales.font.weight as any)[fontWeight]};\n`;
    // }

    // // font line heights
    // for (const lineHeight in themeList.get()[t].globals.scales.font.lineHeight) {
    //   tokens += `--line-height-${lineHeight}: ${
    //     (themeList.get()[t].globals.scales.font.lineHeight as any)[lineHeight]
    //   };\n`;
    // }

    // // icon sizes
    // for (const iconSize in themeList.get()[t].globals.scales.icon.size) {
    //   tokens += `--icon-size-${iconSize}: ${(themeList.get()[t].globals.scales.icon.size as any)[iconSize]};\n`;
    // }

    tokens += `}\n`;
  }

  tokensStyleSheet.replaceSync(tokens);
};
