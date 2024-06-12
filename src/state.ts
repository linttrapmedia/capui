import { State } from "@linttrap/oem";

// motif-element-variant/state
export type Tokens = {
  colors: {
    accent: [color: string, contrast: string];
    black: [color: string, contrast: string];
    brand: [color: string, contrast: string];
    error: [color: string, contrast: string];
    grey: [color: string, contrast: string];
    info: [color: string, contrast: string];
    primary: [color: string, contrast: string];
    secondary: [color: string, contrast: string];
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

export const tokensState = State<Tokens>(
  {
    colors: {
      accent: ["#FF5A5F", "#FFFFFF"],
      black: ["#1F1F1F", "#FFFFFF"],
      brand: ["#4A90E2", "#FFFFFF"],
      error: ["#FF6347", "#FFFFFF"],
      grey: ["#757575", "#FFFFFF"],
      info: ["#3E82FC", "#FFFFFF"],
      primary: ["#1E88E5", "#FFFFFF"],
      secondary: ["#4CAF50", "#FFFFFF"],
      success: ["#00C853", "#FFFFFF"],
      warning: ["#FFC107", "#FFFFFF"],
      white: ["#FFFFFF", "#000000"],
    },
    fonts: {
      primary: "Arial, sans-serif",
      secondary: "Arial, sans-serif",
      tertiary: "Arial, sans-serif",
    },
  },
  {
    key: "tokens",
    storage: sessionStorage,
  }
);

export const colorPickerState = State<keyof Tokens["colors"]>("black", {
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

export const themeState = State<"DARK" | "LIGHT">("DARK", {
  key: "theme",
  storage: sessionStorage,
});

// export const tokenDialog = State<TokenDialogProps>({
//   view: "preview",
//   showing: true,
// });
// export const dialog = State<{
//   showing: boolean;
//   title?: string;
//   description?: string;
//   exampleSrc?: string;
//   example?: string | undefined;
// }>({
//   showing: false,
//   title: "",
//   description: "",
//   exampleSrc: "",
//   example: undefined,
// });
