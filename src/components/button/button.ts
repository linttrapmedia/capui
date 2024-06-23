import { theme, themes } from "../../state";
import { DEFAULT_BUTTON_SETTINGS } from "./button-vars";

export const buttonStyleSheet = new CSSStyleSheet();

export const renderButtonStyleSheet = () => {
  const settings = theme.get() !== "none" ? themes.get()[theme.get()].button : DEFAULT_BUTTON_SETTINGS;

  return buttonStyleSheet.replaceSync(`
.button { 
  --button-bg-color: var(${settings.bgColorToken}, black);
  --button-bg-color-hover: var(${settings.bgColorHoverToken}, rgba(0, 0, 0, 0.1));
  --button-border-color: var(${settings.borderColorToken}, black);
  --button-border-radius: ${settings.borderRadius}ch;
  --button-border-width: ${settings.borderWidth}ch;
  --button-color: var(${settings.colorToken}, white);
  --button-color-hover: var(${settings.colorHoverToken}, black);
  --button-font-size: ${settings.fontSize}ch;
  --button-font-weight: ${settings.fontWeight};
  --button-line-height: ${settings.lineHeight}ch;
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
