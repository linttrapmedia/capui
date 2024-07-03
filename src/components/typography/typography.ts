import { theme } from "../../data/themes/Theme";
import { Theme } from "../../data/themes/typings";

export const DEFAULT_TYPOGRAPHY_SETTINGS: Theme["components"]["typography"] = {
  colorToken: "--text-500",
  fontSizeBase: 1.5,
  fontSizeSpread: 0.25,
  fontWeight: 500,
  lineHeight: 1.5,
};

export const typographyStylesheet = new CSSStyleSheet();

export const renderTypographyStylesheet = () => {
  const settings = theme.get().components.typography ?? DEFAULT_TYPOGRAPHY_SETTINGS;

  const typographyTagList = ".h1, .h2, .h3, .h4, .h5, .h6, .p, .span, .div, .li, .td, .th, .summary";
  const styles = `
${typographyTagList} { 
  --text-color: var(${settings.colorToken}, white);
  --text-font-size-base: ${settings.fontSizeBase}ch;
  --text-font-weight: ${settings.fontWeight};
  --text-line-height: ${settings.lineHeight}ch;

  color: var(--text-color);
}

.h1 { font-size: 4ch; }
.h2 { font-size: 3ch; }
.h3 { font-size: 2ch; }
// .h4 { font-size: var(--text-font-size-base); }
// .h5 { font-size: calc(var(--text-font-size-base) * 0.75); }
// .h6 { font-size: calc(var(--text-font-size-base) * 0.5); }
.p { margin: 0; font-size: 1.5ch; padding: 1ch 0;}
// .span { font-size: var(--text-font-size-base); }
// .div { font-size: var(--text-font-size-base); }
// .li { font-size: var(--text-font-size-base); }
// .td { font-size: var(--text-font-size-base); }
// .th { font-size: var(--text-font-size-base); }
// .summary { font-size: var(--text-font-size-base); }
`;

  return typographyStylesheet.replaceSync(styles);
};
