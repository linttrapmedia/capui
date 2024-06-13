import { State } from "@linttrap/oem";

export type Tokens = {
  colors: {
    background: [color: string, contrast: string];
    foreground: [color: string, contrast: string];
    brand: [color: string, contrast: string];
    black: [color: string, contrast: string];
    error: [color: string, contrast: string];
    info: [color: string, contrast: string];
    action: [color: string, contrast: string];
    success: [color: string, contrast: string];
    warning: [color: string, contrast: string];
    white: [color: string, contrast: string];
  };
  fonts: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
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

export const DEFAULT_DARK_THEME: Tokens = {
  colors: {
    background: ["#000000", "#FFFFFF"],
    black: ["#000000", "#FFFFFF"],
    brand: ["#800080", "#00FFFF"],
    error: ["#FF0000", "#0000FF"],
    foreground: ["#000000", "#FFFF00"],
    info: ["#0000FF", "#00FF00"],
    action: ["#FF8C00", "#9370DB"],
    success: ["#006400", "#FF0000"],
    warning: ["#FF4500", "#32CD32"],
    white: ["#FFFFFF", "#0000FF"],
  },
  fonts: {
    primary: "Arial, sans-serif",
    secondary: "Arial, sans-serif",
    tertiary: "Arial, sans-serif",
  },
};

export const DEFAULT_LIGHT_THEME: Tokens = {
  colors: {
    background: ["#FFFFFF", "#000000"],
    black: ["#FFFFFF", "#000000"],
    brand: ["#FF69B4", "#00CED1"],
    error: ["#FF6347", "#4169E1"],
    foreground: ["#FFFFFF", "#000000"],
    info: ["#ADD8E6", "#32CD32"],
    action: ["#FFD700", "#8A2BE2"],
    success: ["#7FFF00", "#DC143C"],
    warning: ["#FFA500", "#006400"],
    white: ["#000000", "#FFFFFF"],
  },
  fonts: {
    primary: "Arial, sans-serif",
    secondary: "Arial, sans-serif",
    tertiary: "Arial, sans-serif",
  },
};

export const DEFAULT_PASTEL_THEME: Tokens = {
  colors: {
    background: ["#FFB6C1", "#FFFACD"],
    black: ["#D3D3D3", "#FFFFE0"],
    brand: ["#FFB6C1", "#E0FFFF"],
    error: ["#FFA07A", "#87CEFA"],
    foreground: ["#D8BFD8", "#FFD700"],
    info: ["#B0E0E6", "#98FB98"],
    action: ["#FFDAB9", "#DDA0DD"],
    success: ["#98FB98", "#FF6A6A"],
    warning: ["#FFD700", "#90EE90"],
    white: ["#FFFFFF", "#D3D3D3"],
  },
  fonts: {
    primary: "Arial, sans-serif",
    secondary: "Arial, sans-serif",
    tertiary: "Arial, sans-serif",
  },
};

export const DEFAULT_CAFE_THEME: Tokens = {
  colors: {
    background: ["#3E2723", "#FFD54F"],
    black: ["#4E342E", "#FFECB3"],
    brand: ["#795548", "#D7CCC8"],
    error: ["#D32F2F", "#C5E1A5"],
    foreground: ["#5D4037", "#FFEB3B"],
    info: ["#8D6E63", "#FFCC80"],
    action: ["#FF7043", "#A1887F"],
    success: ["#388E3C", "#FF5252"],
    warning: ["#F57C00", "#8BC34A"],
    white: ["#FFFFFF", "#757575"],
  },
  fonts: {
    primary: "Arial, sans-serif",
    secondary: "Arial, sans-serif",
    tertiary: "Arial, sans-serif",
  },
};

export const DEFAULT_OCEAN_THEME: Tokens = {
  colors: {
    background: ["#001F3F", "#7FDBFF"],
    black: ["#001F3F", "#7FDBFF"],
    brand: ["#0074D9", "#39CCCC"],
    error: ["#FF4136", "#85144b"],
    foreground: ["#001F3F", "#FFDC00"],
    info: ["#39CCCC", "#3D9970"],
    action: ["#FF851B", "#B10DC9"],
    success: ["#2ECC40", "#FF4136"],
    warning: ["#FF851B", "#2ECC40"],
    white: ["#DDDDDD", "#001F3F"],
  },
  fonts: {
    primary: "Arial, sans-serif",
    secondary: "Arial, sans-serif",
    tertiary: "Arial, sans-serif",
  },
};

export const themesState = State<Record<Themes, Tokens>>(
  {
    Dark: DEFAULT_DARK_THEME,
    Light: DEFAULT_LIGHT_THEME,
    Pastel: DEFAULT_PASTEL_THEME,
    Cafe: DEFAULT_CAFE_THEME,
    Ocean: DEFAULT_OCEAN_THEME,
  },
  {
    key: "tokens",
    storage: sessionStorage,
  }
);
