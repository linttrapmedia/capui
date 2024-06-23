import { State } from "@linttrap/oem";
import { ButtonSettings, DEFAULT_BUTTON_SETTINGS } from "./components/button/button-vars";
import { DEFAULT_DROPDOWN_SETTINGS, DropdownSettings } from "./components/dropdown/dropdown-vars";

type Palette = {
  black: string;
  white: string;
  blue: string;
  yellow: string;
  red: string;
  green: string;
  orange: string;
  purple: string;
  pink: string;
};

type Semantic = {
  action: keyof Palette;
  background: keyof Palette;
  brand: keyof Palette;
  error: keyof Palette;
  foreground: keyof Palette;
  info: keyof Palette;
  success: keyof Palette;
  text: keyof Palette;
  warning: keyof Palette;
};

type Theme = {
  colors: {
    palette: Palette;
    semantic: Semantic;
    saturationRange: number;
    lightnessRange: number;
  };
  button: ButtonSettings;
  dropdown: DropdownSettings;
  scaling: {
    borders: number;
    colGap: number;
    icon: number;
    padding: number;
    rowGap: number;
    text: number;
    weight: number;
  };
};

const DEFAULT_THEMES: Record<string, Theme> = {
  pastel: {
    colors: {
      palette: {
        black: "#333333",
        red: "#d38459",
        orange: "#f1be78",
        yellow: "#fffacd",
        green: "#77dd77",
        blue: "#aec6cf",
        purple: "#c3b1e1",
        pink: "#ffb6c1",
        white: "#e2e2e2",
      },
      semantic: {
        action: "blue",
        background: "blue",
        brand: "red",
        error: "red",
        foreground: "white",
        info: "blue",
        success: "green",
        text: "black",
        warning: "yellow",
      },
      saturationRange: 1,
      lightnessRange: 1,
    },
    button: {
      ...DEFAULT_BUTTON_SETTINGS,
      colorToken: "--black-600",
      fontSize: 1.25,
      lineHeight: 4,
      borderWidth: 0.25,
      bgColorToken: "--background-700",
      bgColorHoverToken: "--background-800",
      borderColorToken: "--background-400",
    },
    dropdown: {
      ...DEFAULT_DROPDOWN_SETTINGS,
      colorToken: "--black-600",
      fontSize: 1.25,
      lineHeight: 4,
      borderWidth: 0.25,
      bgColorToken: "--background-700",
      bgColorHoverToken: "--background-800",
      borderColorToken: "--background-400",
    },
    scaling: {
      borders: 1,
      colGap: 1,
      icon: 1,
      padding: 1,
      rowGap: 1,
      text: 1,
      weight: 1,
    },
  },
  rich: {
    colors: {
      palette: {
        black: "#000000",
        red: "#b22222",
        orange: "#ff4500",
        yellow: "#ffd700",
        green: "#006400",
        blue: "#00008b",
        purple: "#4b0082",
        pink: "#ff1493",
        white: "#f5f5f5",
      },
      semantic: {
        action: "blue",
        background: "black",
        brand: "red",
        error: "red",
        foreground: "black",
        info: "blue",
        success: "green",
        text: "white",
        warning: "yellow",
      },
      saturationRange: 0.1,
      lightnessRange: 0.25,
    },
    button: DEFAULT_BUTTON_SETTINGS,
    dropdown: DEFAULT_DROPDOWN_SETTINGS,
    scaling: {
      borders: 1,
      colGap: 1,
      icon: 1,
      padding: 1,
      rowGap: 1,
      text: 1,
      weight: 1,
    },
  },
};

export const themes = State<Record<string, Theme>>(DEFAULT_THEMES);

export const theme = State<string>("pastel", {
  key: "theme",
  storage: sessionStorage,
});

// export type Tokens = {
//   colors: {
//     background: [color: string, contrast: string];
//     foreground: [color: string, contrast: string];
//     brand: [color: string, contrast: string];
//     error: [color: string, contrast: string];
//     info: [color: string, contrast: string];
//     active: [color: string, contrast: string];
//     passive: [color: string, contrast: string];
//     success: [color: string, contrast: string];
//     warning: [color: string, contrast: string];
//     black: [color: string, contrast: string];
//     neutral: [color: string, contrast: string];
//     white: [color: string, contrast: string];
//   };
//   fonts: {
//     primary: string;
//     secondary: string;
//     tertiary: string;
//   };
//   sizing: {
//     padding: number;
//     margin: number;
//     fonts: number;
//   };
//   // expression:{} // TBD
// };

// export type Colors = keyof Tokens["colors"];
// export const colorPickerState = State<Colors>("black", {
//   key: "colorPicker",
//   storage: sessionStorage,
// });

// export type Pages = "ACCORDION" | "HOME" | "THEME" | "UTILITY";
// const page = new URLSearchParams(window.location.search).get("page") as Pages;
// export const pageState = State<Pages>(page ?? "HOME", {
//   key: "page",
//   storage: sessionStorage,
// });

// export type Properties = "COLOR_PICKER";
// export const propertiesState = State<Properties>("COLOR_PICKER", {
//   key: "properties",
//   storage: sessionStorage,
// });

// export type Themes = "dark" | "light" | "pastel" | "cafe" | "ocean";
// export const themeState = State<Themes>("dark", {
//   key: "theme",
//   storage: sessionStorage,
// });

// const DEFAULT_THEMES: Record<string, Tokens> = {
//   dark: {
//     colors: {
//       background: ["#212121", "#bababa"],
//       brand: ["#9e93b4", "#FFFFFF"],
//       error: ["#da7272", "#44313f"],
//       foreground: ["#383838", "#FFFFFF"],
//       info: ["#87B5D9", "#283443"],
//       active: ["#5f9ece", "#324153"],
//       passive: ["#c2c2c2", "#262626"],
//       success: ["#578557", "#c5d3c5"],
//       warning: ["#dab350", "#494022"],
//       black: ["#212121", "#FFFFFF"],
//       neutral: ["#3d3d3d", "#bababa"],
//       white: ["#e6e6e6", "#5c5c5c"],
//     },
//     fonts: { primary: "Arial, sans-serif", secondary: "Arial, sans-serif", tertiary: "Arial, sans-serif" },
//     sizing: { padding: 1, margin: 1, fonts: 1 },
//   },
//   light: {
//     colors: {
//       background: ["#dedede", "#969696"],
//       brand: ["#9e93b4", "#FFFFFF"],
//       error: ["#da7272", "#44313f"],
//       foreground: ["#d1d1d1", "#949494"],
//       info: ["#87B5D9", "#283443"],
//       active: ["#5f9ece", "#324153"],
//       passive: ["#c2c2c2", "#999999"],
//       success: ["#578557", "#c5d3c5"],
//       warning: ["#dab350", "#494022"],
//       black: ["#212121", "#FFFFFF"],
//       neutral: ["#3d3d3d", "#bababa"],
//       white: ["#e6e6e6", "#5c5c5c"],
//     },
//     fonts: { primary: "Arial, sans-serif", secondary: "Arial, sans-serif", tertiary: "Arial, sans-serif" },
//     sizing: { padding: 1, margin: 1, fonts: 1 },
//   },
//   pastel: {
//     colors: {
//       background: ["#FFB6C1", "#FFFACD"],
//       brand: ["#FFB6C1", "#E0FFFF"],
//       error: ["#FFA07A", "#87CEFA"],
//       foreground: ["#D8BFD8", "#FFD700"],
//       info: ["#B0E0E6", "#98FB98"],
//       active: ["#FFDAB9", "#DDA0DD"],
//       passive: ["#FFDEAD", "#F0E68C"],
//       success: ["#98FB98", "#FF6A6A"],
//       warning: ["#FFD700", "#90EE90"],
//       black: ["#D3D3D3", "#FFFFE0"],
//       neutral: ["#808080", "#FFFFFF"],
//       white: ["#FFFFFF", "#D3D3D3"],
//     },
//     fonts: { primary: "Arial, sans-serif", secondary: "Arial, sans-serif", tertiary: "Arial, sans-serif" },
//     sizing: { padding: 1, margin: 1, fonts: 1 },
//   },
//   cafe: {
//     colors: {
//       background: ["#3E2723", "#FFD54F"],
//       brand: ["#795548", "#D7CCC8"],
//       error: ["#D32F2F", "#C5E1A5"],
//       foreground: ["#5D4037", "#FFEB3B"],
//       info: ["#627f8d", "#FFCC80"],
//       active: ["#659cb3", "#ffffff"],
//       passive: ["#FFA726", "#3e2723"],
//       success: ["#388E3C", "#ffffff"],
//       warning: ["#ff8000", "#ffffff"],
//       black: ["#4E342E", "#FFECB3"],
//       neutral: ["#808080", "#FFFFFF"],
//       white: ["#FFFFFF", "#757575"],
//     },
//     fonts: { primary: "Arial, sans-serif", secondary: "Arial, sans-serif", tertiary: "Arial, sans-serif" },
//     sizing: { padding: 1, margin: 1, fonts: 1 },
//   },
//   ocean: {
//     colors: {
//       background: ["#001F3F", "#7FDBFF"],
//       brand: ["#0074D9", "#39CCCC"],
//       error: ["#FF4136", "#85144b"],
//       foreground: ["#001F3F", "#FFDC00"],
//       info: ["#39CCCC", "#3D9970"],
//       active: ["#FF851B", "#B10DC9"],
//       passive: ["#FFDC00", "#FF4136"],
//       success: ["#2ECC40", "#FF4136"],
//       warning: ["#FF851B", "#2ECC40"],
//       black: ["#001F3F", "#7FDBFF"],
//       neutral: ["#808080", "#FFFFFF"],
//       white: ["#DDDDDD", "#001F3F"],
//     },
//     fonts: { primary: "Arial, sans-serif", secondary: "Arial, sans-serif", tertiary: "Arial, sans-serif" },
//     sizing: { padding: 1, margin: 1, fonts: 1 },
//   },
// };

// export const themesState = State<Record<Themes, Tokens>>(DEFAULT_THEMES, {
//   key: "tokens",
//   storage: sessionStorage,
// });

// export const tokensEnabledState = State<boolean>(true, {
//   key: "tokensEnabled",
//   storage: sessionStorage,
// });
