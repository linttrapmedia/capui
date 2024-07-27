import { theme } from "../../state/Theme";
import { Theme } from "../../state/typings";

export const DEFAULT_DROPDOWN_SETTINGS: Theme["components"]["dropdown"] = {
  bgColorHoverToken: "--background-700",
  bgColorToken: "--background-500",
  borderColorToken: "--foreground-100",
  borderColorHoverToken: "--foreground-200",
  borderRadiusToken: "--radius-scaling",
  borderWidthToken: "--borders-scaling",
  colorHoverToken: "--text-500",
  colorToken: "--text-500",
};

export const dropdownStyleSheet = new CSSStyleSheet();

export const renderDropdownStyleSheet = () => {
  const settings = theme.get().components.dropdown ?? DEFAULT_DROPDOWN_SETTINGS;

  const styles = `
.dropdown {
    
    --dropdown-bg-color: var(${settings.bgColorToken}, white);
    --dropdown-bg-color-hover: var(${settings.bgColorHoverToken}, rgba(0, 0, 0, 0.1));
    --dropdown-border-color: var(${settings.borderColorToken}, black);
    --dropdown-color: var(${settings.colorToken}, black);
    --dropdown-color-hover: var(${settings.colorHoverToken}, black);
    --dropdown-border-radius: calc(0.5 * var(${settings.borderRadiusToken}, 1));
    --dropdown-border-width: calc(0.25 * var(${settings.borderWidthToken}, 1));
    --dropdown-font-size: calc(1.5 * var(--font-scaling));
    --dropdown-font-weight: 500;
    --dropdown-line-height: calc(4 * var(--font-scaling));
    --dropdown-arrow-size: calc(0.8 * var(--font-scaling));

    appearance: none;
    border-radius: var(--dropdown-border-radius);
    border: var(--dropdown-border-width) solid var(--dropdown-border-color);
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
      var(--dropdown-border-width) var(--dropdown-line-height);
    background-position: 
      calc(100% - calc(var(--dropdown-line-height) / 2) - calc(var(--dropdown-arrow-size) / 2)) center, 
      calc(100% - calc(var(--dropdown-line-height) / 2) - calc(var(--dropdown-arrow-size) / 2) + var(--dropdown-arrow-size)) center,
      calc(100% - calc(var(--dropdown-line-height) * 1.25 + var(--dropdown-border-width) - calc(var(--dropdown-arrow-size) / 2))) center;
    background-repeat: no-repeat;
    position: relative;
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
