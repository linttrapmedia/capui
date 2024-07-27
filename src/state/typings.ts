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

type Box = {
  bg_color: string;
  bg_color_hover: string;
  color: string;
  color_hover: string;
  border_color: string;
  border_color_hover: string;
  border_radius: string;
  border_width: string;
  font_size: string;
  font_weight: number;
  line_height: number;
};

type FlexBox = {
  header: Box;
  body: Box;
  footer: Box;
};

export type Theme = {
  name: Scale<string>;
  tokens: {
    badge: Box;
    button_icon: Box;
    button_text: Box;
    button: Box;
    color_black: Scale<string>;
    color_blue: Scale<string>;
    color_green: Scale<string>;
    color_orange: Scale<string>;
    color_pink: Scale<string>;
    color_purple: Scale<string>;
    color_red: Scale<string>;
    color_white: Scale<string>;
    color_yellow: Scale<string>;
    dropdown: Box;
    flex_accordion: FlexBox;
    flex_alert: FlexBox;
    flex_card: FlexBox;
    flex_dialog: FlexBox;
    flex_pane: FlexBox;
    flex_section: FlexBox;
    font_display: Scale<string>;
    font_mono: Scale<string>;
    font_sans: Scale<string>;
    font_serif: Scale<string>;
    grid: {};
    icon: Box;
    slider_label: Box;
    slider_picker: Box;
    slider: Box;
    text_color: Scale<string>;
    text_line_height: Scale<number>;
    text_size: Scale<string>;
    toggle_label: Box;
    toggle_switch_thumb: Box;
    toggle_switch: Box;
    toggle: Box;
    tooltip: Box;
  };
};
