import { State } from "@linttrap/oem";

export type Tokens = {
  colors: {
    background: [color: string, contrast: string];
    foreground: [color: string, contrast: string];
    brand: [color: string, contrast: string];
    error: [color: string, contrast: string];
    info: [color: string, contrast: string];
    active: [color: string, contrast: string];
    passive: [color: string, contrast: string];
    success: [color: string, contrast: string];
    warning: [color: string, contrast: string];
    black: [color: string, contrast: string];
    neutral: [color: string, contrast: string];
    white: [color: string, contrast: string];
  };
  fonts: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  sizing: {
    padding: number;
    margin: number;
    fonts: number;
  };
  // expression:{} // TBD
};

export type Colors = keyof Tokens["colors"];
export const colorPickerState = State<Colors>("black", {
  key: "colorPicker",
  storage: sessionStorage,
});

export type Pages = "ACCORDION" | "HOME" | "THEME" | "UTILITY";
const page = new URLSearchParams(window.location.search).get("page") as Pages;
export const pageState = State<Pages>(page ?? "HOME", {
  key: "page",
  storage: sessionStorage,
});

export type Properties = "COLOR_PICKER";
export const propertiesState = State<Properties>("COLOR_PICKER", {
  key: "properties",
  storage: sessionStorage,
});

export type Themes = "Dark" | "Light" | "Pastel" | "Cafe" | "Ocean";
export const themeState = State<Themes>("Dark", {
  key: "theme",
  storage: sessionStorage,
});

const DEFAULT_THEMES: Record<string, Tokens> = {
  Dark: {
    colors: {
      background: ["#212121", "#bababa"],
      brand: ["#9e93b4", "#FFFFFF"],
      error: ["#da7272", "#44313f"],
      foreground: ["#383838", "#FFFFFF"],
      info: ["#87B5D9", "#283443"],
      active: ["#5f9ece", "#324153"],
      passive: ["#292929", "#e0e0e0"],
      success: ["#578557", "#c5d3c5"],
      warning: ["#dab350", "#494022"],
      black: ["#212121", "#FFFFFF"],
      neutral: ["#3d3d3d", "#bababa"],
      white: ["#e6e6e6", "#5c5c5c"],
    },
    fonts: { primary: "Arial, sans-serif", secondary: "Arial, sans-serif", tertiary: "Arial, sans-serif" },
    sizing: { padding: 1, margin: 1, fonts: 1 },
  },
  Light: {
    colors: {
      background: ["#dedede", "#969696"],
      brand: ["#9e93b4", "#FFFFFF"],
      error: ["#da7272", "#44313f"],
      foreground: ["#d1d1d1", "#949494"],
      info: ["#87B5D9", "#283443"],
      active: ["#5f9ece", "#324153"],
      passive: ["#c2c2c2", "#999999"],
      success: ["#578557", "#c5d3c5"],
      warning: ["#dab350", "#494022"],
      black: ["#212121", "#FFFFFF"],
      neutral: ["#3d3d3d", "#bababa"],
      white: ["#e6e6e6", "#5c5c5c"],
    },
    fonts: { primary: "Arial, sans-serif", secondary: "Arial, sans-serif", tertiary: "Arial, sans-serif" },
    sizing: { padding: 1, margin: 1, fonts: 1 },
  },
  Pastel: {
    colors: {
      background: ["#FFB6C1", "#FFFACD"],
      brand: ["#FFB6C1", "#E0FFFF"],
      error: ["#FFA07A", "#87CEFA"],
      foreground: ["#D8BFD8", "#FFD700"],
      info: ["#B0E0E6", "#98FB98"],
      active: ["#FFDAB9", "#DDA0DD"],
      passive: ["#FFDEAD", "#F0E68C"],
      success: ["#98FB98", "#FF6A6A"],
      warning: ["#FFD700", "#90EE90"],
      black: ["#D3D3D3", "#FFFFE0"],
      neutral: ["#808080", "#FFFFFF"],
      white: ["#FFFFFF", "#D3D3D3"],
    },
    fonts: { primary: "Arial, sans-serif", secondary: "Arial, sans-serif", tertiary: "Arial, sans-serif" },
    sizing: { padding: 1, margin: 1, fonts: 1 },
  },
  Cafe: {
    colors: {
      background: ["#3E2723", "#FFD54F"],
      brand: ["#795548", "#D7CCC8"],
      error: ["#D32F2F", "#C5E1A5"],
      foreground: ["#5D4037", "#FFEB3B"],
      info: ["#8D6E63", "#FFCC80"],
      active: ["#FF7043", "#A1887F"],
      passive: ["#FFA726", "#AED581"],
      success: ["#388E3C", "#FF5252"],
      warning: ["#F57C00", "#8BC34A"],
      black: ["#4E342E", "#FFECB3"],
      neutral: ["#808080", "#FFFFFF"],
      white: ["#FFFFFF", "#757575"],
    },
    fonts: { primary: "Arial, sans-serif", secondary: "Arial, sans-serif", tertiary: "Arial, sans-serif" },
    sizing: { padding: 1, margin: 1, fonts: 1 },
  },
  Ocean: {
    colors: {
      background: ["#001F3F", "#7FDBFF"],
      brand: ["#0074D9", "#39CCCC"],
      error: ["#FF4136", "#85144b"],
      foreground: ["#001F3F", "#FFDC00"],
      info: ["#39CCCC", "#3D9970"],
      active: ["#FF851B", "#B10DC9"],
      passive: ["#FFDC00", "#FF4136"],
      success: ["#2ECC40", "#FF4136"],
      warning: ["#FF851B", "#2ECC40"],
      black: ["#001F3F", "#7FDBFF"],
      neutral: ["#808080", "#FFFFFF"],
      white: ["#DDDDDD", "#001F3F"],
    },
    fonts: { primary: "Arial, sans-serif", secondary: "Arial, sans-serif", tertiary: "Arial, sans-serif" },
    sizing: { padding: 1, margin: 1, fonts: 1 },
  },
};

export const themesState = State<Record<Themes, Tokens>>(DEFAULT_THEMES, {
  key: "tokens",
  storage: sessionStorage,
});
