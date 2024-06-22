import { theme, themes } from "../../state";
import { DEFAULT_DROPDOWN_SETTINGS } from "./dropdown-vars";

export const dropdownStyleSheet = new CSSStyleSheet();

export const renderDropdownStyleSheet = () => {
  const settings = theme.get() !== "none" ? themes.get()[theme.get()].dropdown : DEFAULT_DROPDOWN_SETTINGS;

  const styles = `
.dropdown {
    
    --dropdown-bg-color: var(${settings.bgColorToken}, white);
    --dropdown-bg-color-hover: var(${settings.bgColorHoverToken}, rgba(0, 0, 0, 0.1));
    --dropdown-border-color: var(${settings.borderColorToken}, black);
    --dropdown-border-radius: ${settings.borderRadius}ch;
    --dropdown-border-width: ${settings.borderWidth}ch;
    --dropdown-color: var(${settings.colorToken}, black);
    --dropdown-color-hover: var(${settings.colorHoverToken}, black);
    --dropdown-font-size: ${settings.fontSize}ch;
    --dropdown-font-weight: ${settings.fontWeight};
    --dropdown-line-height: ${settings.lineHeight}ch;
    --dropdown-arrow-size: ${settings.fontSize * 0.5}ch;

    appearance: none;
    border-radius: var(--dropdown-border-radius);
    border: var(--dropdown-border-width) solid var(--dropdown-color);
    color: var(--dropdown-color);
    cursor: pointer;
    display: block;
    font-size: var(--dropdown-font-size);
    font-weight: var(--dropdown-font-weight);
    line-height: var(--dropdown-line-height);
    padding: 0 calc(var(--dropdown-line-height) * 1.5) 0 calc(var(--dropdown-line-height) / 2);
    position: relative;
    width: 100%;
    background-image: 
      linear-gradient(45deg, transparent 50%, var(--dropdown-color) 50%), 
      linear-gradient(135deg, var(--dropdown-color) 50%, transparent 50%),
      linear-gradient(to bottom, var(--dropdown-border-color) 0%, var(--dropdown-border-color) 100%);
    background-color: var(--dropdown-bg-color);
    background-size: 
      var(--dropdown-arrow-size) var(--dropdown-arrow-size), 
      var(--dropdown-arrow-size) var(--dropdown-arrow-size),
      2px var(--dropdown-line-height);
    background-position: 
      calc(100% - calc(var(--dropdown-line-height) / 2) - calc(var(--dropdown-arrow-size) / 2)) center, 
      calc(100% - calc(var(--dropdown-line-height) / 2) - calc(var(--dropdown-arrow-size) / 2) + var(--dropdown-arrow-size)) center,
      calc(100% - calc(var(--dropdown-line-height) * 1.25 - calc(var(--dropdown-arrow-size) / 2))) center;
    background-repeat: no-repeat;
}

.dropdown[disabled] {
    cursor: not-allowed;
    opacity: 0.45;
}

.dropdown:hover {
    background-color: var(--dropdown-bg-color-hover);
    color: var(--dropdown-color-hover);
}

.dropdown option {
    color: var(--dropdown-color);
    background-color: var(--dropdown-bg-color);
}
`;

  return dropdownStyleSheet.replaceSync(styles);
};
