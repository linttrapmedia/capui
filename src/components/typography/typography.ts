import { theme, themes } from "../../state";

export type TypographySettings = {
  colorToken: `--${string}`;
  fontSizeBase: number;
  fontSizeSpread: number;
  fontWeight: number;
  lineHeight: number;
};

export const DEFAULT_TYPOGRAPHY_SETTINGS: TypographySettings = {
  colorToken: "--text-500",
  fontSizeBase: 1.5,
  fontSizeSpread: 0.25,
  fontWeight: 500,
  lineHeight: 1.5,
};

export const typographyStylesheet = new CSSStyleSheet();

export const renderTypographyStylesheet = () => {
  const settings = theme.get() !== "none" ? themes.get()[theme.get()].typography : DEFAULT_TYPOGRAPHY_SETTINGS;
  const typographyTagList = ".h1, .h2, .h3, .h4, .h5, .h6, .p, .span, .div, .li, .td, .th, .summary";
  const styles = `
${typographyTagList} { 
  --text-color: var(${settings.colorToken}, white);
  --text-font-size-base: ${settings.fontSizeBase}ch;
  --text-font-weight: ${settings.fontWeight};
  --text-line-height: ${settings.lineHeight}ch;
}

.h1 { font-size: calc(var(--text-font-size-base) * 2); }
.h2 { font-size: calc(var(--text-font-size-base) * 1.5); }
.h3 { font-size: calc(var(--text-font-size-base) * 1.25); }
.h4 { font-size: var(--text-font-size-base); }
.h5 { font-size: calc(var(--text-font-size-base) * 0.75); }
.h6 { font-size: calc(var(--text-font-size-base) * 0.5); }
.p { font-size: var(--text-font-size-base); }
.span { font-size: var(--text-font-size-base); }
.div { font-size: var(--text-font-size-base); }
.li { font-size: var(--text-font-size-base); }
.td { font-size: var(--text-font-size-base); }
.th { font-size: var(--text-font-size-base); }
.summary { font-size: var(--text-font-size-base); }
`;

  return typographyStylesheet.replaceSync(styles);
};
