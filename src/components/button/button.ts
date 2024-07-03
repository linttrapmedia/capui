import { theme } from "../../data/themes/Theme";
import { Theme } from "../../data/themes/typings";

export const DEFAULT_BUTTON_SETTINGS: Theme["components"]["button"] = {
  bgColorHoverToken: "--background-700",
  bgColorToken: "--background-500",
  borderColorToken: "--foreground-500",
  borderColorHoverToken: "--foreground-500",
  borderRadiusToken: "--border-radius-300",
  borderWidthToken: "--border-width-300",
  colorHoverToken: "--text-500",
  colorToken: "--text-500",
  fontSize: 1,
  fontWeight: 400,
  fontLineHeight: 1.5,
};

export const buttonStyleSheet = new CSSStyleSheet();

export const renderButtonStyleSheet = () => {
  const settings = theme.get().components.button ?? DEFAULT_BUTTON_SETTINGS;

  return buttonStyleSheet.replaceSync(`
.button { 
  --button-bg-color: var(${settings.bgColorToken}, black);
  --button-bg-color-hover: var(${settings.bgColorHoverToken}, rgba(0, 0, 0, 0.1));
  --button-border-color: var(${settings.borderColorToken}, black);
  --button-border-radius: var(${settings.borderRadiusToken}, 0);
  --button-border-width: var(${settings.borderWidthToken}, 0);
  --button-color: var(${settings.colorToken}, white);
  --button-color-hover: var(${settings.colorHoverToken}, black);
  --button-font-size: ${settings.fontSize}ch;
  --button-font-weight: ${settings.fontWeight};
  --button-line-height: ${settings.fontLineHeight}ch;
  --button-arrow-size: ${settings.fontSize * 0.5}ch;

  appearance: none;
  background-color: var(--button-bg-color);
  border-radius: var(--button-border-radius);
  border: var(--button-border-width) solid var(--button-border-color);
  color: var(--button-color);
  cursor: pointer;
  display: block;
  font-size: var(--button-font-size);
  font-weight: var(--button-font-weight);
  line-height: var(--button-line-height);
  padding: 0 calc(var(--button-line-height) * 1.5) 0 calc(var(--button-line-height) / 2);
  position: relative;
  width: 100%;
}

.button[disabled] {
    cursor: not-allowed;
    opacity: 0.45;
}

.button:hover {
    background-color: var(--button-bg-color-hover);
    color: var(--button-color-hover);
}
`);
};
