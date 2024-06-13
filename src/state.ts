import { State } from "@linttrap/oem";

export type Tokens = {
  colors: {
    brand: [color: string, contrast: string];
    black: [color: string, contrast: string];
    error: [color: string, contrast: string];
    grey: [color: string, contrast: string];
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

export type Themes = "Dark" | "Crazy";
export const themeState = State<Themes>("Dark", {
  key: "theme",
  storage: sessionStorage,
});

export const DEFAULT_DARK_THEME: Tokens = {
  colors: {
    brand: ["#FF5A5F", "#FFFFFF"],
    black: ["#1F1F1F", "#FFFFFF"],
    error: ["#FF6347", "#FFFFFF"],
    grey: ["#757575", "#FFFFFF"],
    info: ["#3E82FC", "#FFFFFF"],
    action: ["#1E88E5", "#FFFFFF"],
    success: ["#00C853", "#FFFFFF"],
    warning: ["#FFC107", "#1F1F1F"],
    white: ["#FFFFFF", "#1F1F1F"],
  },
  fonts: {
    primary: "Arial, sans-serif",
    secondary: "Arial, sans-serif",
    tertiary: "Arial, sans-serif",
  },
};

export const DEFAULT_CRAZY_THEME: Tokens = {
  colors: {
    black: ["#000000", "#FFFF00"],
    brand: ["#FF00FF", "#00FFFF"],
    error: ["#FF0000", "#0000FF"],
    grey: ["#808080", "#FF69B4"],
    info: ["#0000FF", "#00FF00"],
    action: ["#FFA500", "#8A2BE2"],
    success: ["#00FF00", "#FF0000"],
    warning: ["#FF4500", "#32CD32"],
    white: ["#FFFFFF", "#0000FF"],
  },
  fonts: {
    primary: "'Comic Sans MS', cursive, sans-serif",
    secondary: "'Comic Sans MS', cursive, sans-serif",
    tertiary: "'Comic Sans MS', cursive, sans-serif",
  },
};

export const themesState = State<Record<Themes, Tokens>>(
  {
    Dark: DEFAULT_DARK_THEME,
    Crazy: DEFAULT_CRAZY_THEME,
  },
  {
    key: "tokens",
    storage: sessionStorage,
  }
);
