import { themeList } from "../../state/Theme";

export const tokensStyleSheet = new CSSStyleSheet();

export const renderTokensStyleSheet = () => {
  let tokens = "";
  for (const t in themeList.get()) {
    const currTheme = themeList.get()[t];
    tokens += ':root[data-theme="' + t + '"] {\n';

    // palette
    let palette = "";
    for (const paletteKey in currTheme.globals.palette) {
      const paletteItems = (currTheme.globals.palette as any)[paletteKey];
      for (const num in paletteItems) {
        palette += `--${paletteKey}-${num}: ${paletteItems[num]};\n`;
      }
    }
    tokens += palette;

    // semantic
    let semantic = "";
    for (const semanticItem in currTheme.globals.semantic) {
      const paletteKey = (currTheme.globals.semantic as any)[semanticItem];
      const paletteItems = (currTheme.globals.palette as any)[paletteKey];
      for (const num in paletteItems) {
        const token = `--${semanticItem}-${num}: var(--${paletteKey}-${num}, ${paletteItems[num]});\n`;
        semantic += token;
      }
    }
    tokens += semantic;

    // fonts
    let fonts = "";
    for (const font in currTheme.globals.fonts) {
      fonts += `--font-${font}: ${(currTheme.globals.fonts as any)[font]};\n`;
    }
    tokens += fonts;

    // text sizes
    let textSizes = "";
    for (const size in currTheme.globals.text?.size) {
      textSizes += `--text-size-${size}: ${(currTheme.globals.text.size as any)[size]};\n`;
    }
    tokens += textSizes;
    console.log(textSizes);

    // text weights
    let textWeights = "";
    for (const weight in currTheme.globals.text?.weight) {
      textWeights += `--text-weight-${weight}: ${(currTheme.globals.text.weight as any)[weight]};\n`;
    }
    tokens += textWeights;

    // text line heights
    let textLineHeights = "";
    for (const lineHeight in currTheme.globals.text?.lineHeight) {
      textLineHeights += `--text-line-height-${lineHeight}: ${
        (currTheme.globals.text.lineHeight as any)[lineHeight]
      };\n`;
    }
    tokens += textLineHeights;

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
