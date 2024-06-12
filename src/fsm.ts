import { Pages, Properties, Tokens, colorPickerState, pageState, propertiesState, tokensState } from "./state";

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
      color: string;
      contrast: string;
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
      tokensState.set({
        ...tokensState.get(),
        colors: {
          ...tokensState.get().colors,
          [msg.key]: [msg.color, msg.contrast],
        },
      });
      break;
  }
};
