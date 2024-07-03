import { theme } from "../../data/themes/Theme";
import { Theme } from "../../data/themes/typings";

export const DEFAULT_SLIDER_SETTINGS: Theme["components"]["slider"] = {
  bgColorHoverToken: "--background-100",
  bgColorToken: "--background-100",
  borderColorToken: "--foreground-100",
  borderColorHoverToken: "--foreground-200",
  borderRadius: "--border-radius-500",
  borderWidth: "--border-width-100",
  colorHoverToken: "--foreground-500",
  colorToken: "--foreground-500",
};

export const sliderStyleSheet = new CSSStyleSheet();

export const renderSliderStyleSheet = () => {
  const settings = theme.get().components.slider ?? DEFAULT_SLIDER_SETTINGS;

  return sliderStyleSheet.replaceSync(`
.slider { 
  --slider-bg-color: var(${settings.bgColorToken}, rgba(0, 0, 0, 0.2));
  --slider-bg-color-hover: var(${settings.bgColorHoverToken}, rgba(0, 0, 0, 0.2));
  --slider-border-color: var(${settings.borderColorToken}, black);
  --slider-border-radius: var(${settings.borderRadius}ch, 1ch);
  --slider-border-width: ${settings.borderWidth}ch;
  --slider-color: var(${settings.colorToken}, black);
  --slider-color-hover: var(${settings.colorHoverToken}, grey);
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  background: var(--slider-bg-color);
  border-radius: var(--slider-border-radius);
  height: 20px;
  width: 100%;
}

.slider:hover {
  background: var(--slider-bg-color-hover);
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--slider-color);
  cursor: pointer;
}

.slider::-webkit-slider-thumb:hover {
  background: var(--slider-color-hover);
}
`);
};
