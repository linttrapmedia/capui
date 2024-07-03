type SemanticToken = `--${keyof Theme["globals"]["semantic"]}-${number}`;

type Scale<T> = {
  "100": T;
  "200": T;
  "300": T;
  "400": T;
  "500": T;
  "600": T;
  "700": T;
  "800": T;
  "900": T;
};

export type PaletteKeys = keyof Theme["globals"]["palette"];
export type PaletteScaleKey = keyof Theme["globals"]["palette"][PaletteKeys];
export type SemanticKeys = keyof Theme["globals"]["semantic"];

export type Theme = {
  name: string;
  components: {
    accordion: {};
    alerts: {};
    badge: {};
    bg: {};
    button: {
      bgColorHoverToken: SemanticToken;
      bgColorToken: SemanticToken;
      borderColorToken: string;
      borderColorHoverToken: string;
      borderRadiusToken: string;
      borderWidthToken: string;
      colorHoverToken: SemanticToken;
      colorToken: SemanticToken;
      fontSize: number;
      fontWeight: number;
      fontLineHeight: number;
    };
    card: {};
    dashboard: {};
    dialog: {};
    dropdown: {
      bgColorHoverToken: SemanticToken;
      bgColorToken: SemanticToken;
      borderColorToken: string;
      borderColorHoverToken: string;
      borderRadiusToken: string;
      borderWidthToken: string;
      colorHoverToken: SemanticToken;
      colorToken: SemanticToken;
    };
    flexgrid: {};
    flexpane: {};
    grid: {};
    section: {};
    slider: {
      bgColorHoverToken: SemanticToken;
      bgColorToken: SemanticToken;
      borderColorToken: string;
      borderColorHoverToken: string;
      borderRadius: string;
      borderWidth: string;
      colorHoverToken: SemanticToken;
      colorToken: SemanticToken;
    };
    toggles: {};
    tooltip: {};
    typography: {
      colorToken: SemanticToken;
      fontSizeBase: number;
      fontSizeSpread: number;
      fontWeight: number;
      lineHeight: number;
    };
  };
  globals: {
    palette: {
      black: Scale<string>;
      white: Scale<string>;
      blue: Scale<string>;
      yellow: Scale<string>;
      red: Scale<string>;
      green: Scale<string>;
      orange: Scale<string>;
      purple: Scale<string>;
      pink: Scale<string>;
    };
    semantic: {
      action: keyof Theme["globals"]["palette"];
      background: keyof Theme["globals"]["palette"];
      brand: keyof Theme["globals"]["palette"];
      error: keyof Theme["globals"]["palette"];
      foreground: keyof Theme["globals"]["palette"];
      info: keyof Theme["globals"]["palette"];
      success: keyof Theme["globals"]["palette"];
      text: keyof Theme["globals"]["palette"];
      warning: keyof Theme["globals"]["palette"];
    };
    fonts?: any;
    text?: any;
    grids?: any;
    boxes?: any;
    icons?: any;
  };
};
