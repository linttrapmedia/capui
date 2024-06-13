import {
  Pages,
  Properties,
  Themes,
  Tokens,
  colorPickerState,
  pageState,
  propertiesState,
  themeState,
  themesState,
} from "./state";

type FSM =
  | {
      action: "SET_PAGE";
      page: Pages;
    }
  | {
      action: "SET_PROPERTIES";
      properties: Properties;
    }
  | {
      action: "SET_COLOR_PICKER";
      colorKey: keyof Tokens["colors"];
    }
  | {
      action: "SET_COLOR_TOKEN";
      key: keyof Tokens["colors"];
      theme: Themes;
      color: string;
      contrast: string;
    }
  | {
      action: "SET_THEME";
      theme: Themes;
    };

export const fsm = (msg: FSM) => {
  switch (msg.action) {
    case "SET_PAGE":
      pageState.set(msg.page);
      window.history.pushState(null, "", `?page=${msg.page}`);
      break;
    case "SET_PROPERTIES":
      propertiesState.set(msg.properties);
      break;
    case "SET_COLOR_PICKER":
      propertiesState.set("COLOR_PICKER");
      colorPickerState.set(msg.colorKey);
      break;
    case "SET_COLOR_TOKEN":
      themesState.deepSet(`${msg.theme}.colors.${msg.key}`, [msg.color, msg.contrast]);
      break;
    case "SET_THEME":
      themeState.set(msg.theme);
      break;
  }
};
