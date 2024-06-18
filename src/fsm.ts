import { accordionStyleSheet } from "./components/accordion/accordion";
import { alertsStyleSheet } from "./components/alerts/alerts";
import { badgeStyleSheet } from "./components/badge/badge";
import { bgStyleSheet } from "./components/bg/bg";
import { buttonStyleSheet } from "./components/button/button";
import { cardStyleSheet } from "./components/card/card";
import { dashboardStyleSheet } from "./components/dashboard/dashboard";
import { dialogStyleSheet } from "./components/dialog/dialog";
import { dropdownStyleSheet } from "./components/dropdown/dropdown";
import { flexgridStyleSheet } from "./components/flexgrid/flexgrid";
import { flexpaneStyleSheet } from "./components/flexpane/flexpane";
import { gridStyleSheet } from "./components/grid/grid";
import { sectionStyleSheet } from "./components/section/section";
import { togglesStyleSheet } from "./components/toggles/toggles";
import { syncTokensStyleSheet, tokensStyleSheet } from "./components/tokens/tokens";
import { tooltipStyleSheet } from "./components/tooltip/tooltip";
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
  tokensEnabledState,
} from "./state";
import { getStylesheetContents } from "./util/css";

declare var JSZip: any;

type FSM =
  | {
      action: "DISABLE_TOKENS";
    }
  | {
      action: "DOWNLOAD_ALL";
    }
  | {
      action: "DOWNLOAD_THEME_TOKENS";
    }
  | {
      action: "ENABLE_TOKENS";
    }
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

const zip = new JSZip();

export const fsm = (msg: FSM) => {
  switch (msg.action) {
    case "DISABLE_TOKENS":
      tokensEnabledState.set(false);
      syncTokensStyleSheet();
      break;
    case "DOWNLOAD_ALL":
      zip.file("tokens.css", getStylesheetContents(tokensStyleSheet));
      zip.file("accordion.css", getStylesheetContents(accordionStyleSheet));
      zip.file("alerts.css", getStylesheetContents(alertsStyleSheet));
      zip.file("badge.css", getStylesheetContents(badgeStyleSheet));
      zip.file("bg.css", getStylesheetContents(bgStyleSheet));
      zip.file("button.css", getStylesheetContents(buttonStyleSheet));
      zip.file("card.css", getStylesheetContents(cardStyleSheet));
      zip.file("dashboard.css", getStylesheetContents(dashboardStyleSheet));
      zip.file("dialog.css", getStylesheetContents(dialogStyleSheet));
      zip.file("dropdown.css", getStylesheetContents(dropdownStyleSheet));
      zip.file("flexgrid.css", getStylesheetContents(flexgridStyleSheet));
      zip.file("flexpane.css", getStylesheetContents(flexpaneStyleSheet));
      zip.file("grid.css", getStylesheetContents(gridStyleSheet));
      zip.file("section.css", getStylesheetContents(sectionStyleSheet));
      zip.file("toggles.css", getStylesheetContents(togglesStyleSheet));
      zip.file("tooltip.css", getStylesheetContents(tooltipStyleSheet));
      zip.generateAsync({ type: "blob" }).then((content: any) => {
        const link: any = document.createElement("a");
        link.href = URL.createObjectURL(content);
        link.download = "capui.zip";
        link.click();
      });
      break;
    case "DOWNLOAD_THEME_TOKENS":
      const link: any = document.createElement("a");
      link.href = URL.createObjectURL(new Blob([getStylesheetContents(tokensStyleSheet)], { type: "text/css" }));
      link.download = "tokens.css";
      link.click();
      break;
    case "ENABLE_TOKENS":
      tokensEnabledState.set(true);
      syncTokensStyleSheet();
      break;
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
      syncTokensStyleSheet();
      break;
    case "SET_THEME":
      themeState.set(msg.theme);
      syncTokensStyleSheet();
      break;
  }
};
