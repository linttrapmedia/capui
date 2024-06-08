import { State } from "@linttrap/oem";

type Tokens = {
  "--token-color-black": string;
  "--token-color-blue": string;
  "--token-color-cyan": string;
  "--token-color-gray": string;
  "--token-color-green": string;
  "--token-color-orange": string;
  "--token-color-purple": string;
  "--token-color-red": string;
  "--token-color-white": string;
  "--token-color-yellow": string;
  "--token-font-family-mono": string;
  "--token-font-family-sans": string;
  "--token-font-family-serif": string;
  "--token-font-size-base": string;
};

export const tokensState = State<Tokens>(
  {
    "--token-color-black": "#000000",
    "--token-color-blue": "#0000ff",
    "--token-color-cyan": "#00ffff",
    "--token-color-gray": "#808080",
    "--token-color-green": "#008000",
    "--token-color-orange": "#ffa500",
    "--token-color-purple": "#800080",
    "--token-color-red": "#ff0000",
    "--token-color-white": "#ffffff",
    "--token-color-yellow": "#ffff00",
    "--token-font-family-mono": "monospace",
    "--token-font-family-sans": "sans-serif",
    "--token-font-family-serif": "serif",
    "--token-font-size-base": "10px",
  },
  {
    key: "tokens",
    storage: sessionStorage,
  }
);

export const colorPickerState = State<string>("--token-color-black", {
  key: "colorPicker",
  storage: sessionStorage,
});

export type Pages = "ACCORDION" | "HOME" | "THEME" | "UTILITY";
export const pageState = State<Pages>("HOME", {
  key: "page",
  storage: sessionStorage,
});

export type Properties = "COLOR_PICKER";
export const propertiesState = State<Properties | undefined>(undefined, {
  key: "properties",
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
