import { Pages, Properties, colorPickerState, pageState, propertiesState, tokensState } from "./state";

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
      token: string;
    }
  | {
      action: "SET_TOKEN";
      key: string;
      value: string;
    };

export const fsm = (msg: FSM) => {
  switch (msg.action) {
    case "SET_PAGE":
      pageState.set(msg.page);
      break;
    case "SET_PROPERTIES":
      propertiesState.set(msg.properties);
      break;
    case "SET_COLOR_PICKER":
      propertiesState.set("COLOR_PICKER");
      colorPickerState.set(msg.token);
      break;
    case "SET_TOKEN":
      tokensState.set({
        ...tokensState.get(),
        [msg.key]: [msg.value],
      });
      break;
  }
};
