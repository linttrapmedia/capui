import { accordionStyleSheet, renderAccordionStyleSheet } from "./components/accordion/accordion";
import { alertsStyleSheet, renderAlertsStyleSheet } from "./components/alerts/alerts";
import { badgeStyleSheet, renderBadgeStyleSheet } from "./components/badge/badge";
import { bgStyleSheet, renderBGStyleSheet } from "./components/bg/bg";
import { buttonStyleSheet, renderButtonStyleSheet } from "./components/button/button";
import { cardStyleSheet, renderCardStyleSheet } from "./components/card/card";
import { dashboardStyleSheet, renderDashboardStyleSheet } from "./components/dashboard/dashboard";
import { dialogStyleSheet, renderDialogStyleSheet } from "./components/dialog/dialog";
import { dropdownStyleSheet, renderDropdownStyleSheet } from "./components/dropdown/dropdown";
import { flexgridStyleSheet, renderFlexGridStyleSheet } from "./components/flexgrid/flexgrid";
import { flexpaneStyleSheet, renderFlexpaneStyleSheet } from "./components/flexpane/flexpane";
import { gridStyleSheet, renderGridStyleSheet } from "./components/grid/grid";
import { renderSectionStyleSheet, sectionStyleSheet } from "./components/section/section";
import { renderSliderStyleSheet } from "./components/slider/slider";
import { renderTogglesStyleSheet, togglesStyleSheet } from "./components/toggles/toggles";
import { renderTokensStyleSheet, tokensStyleSheet } from "./components/tokens/tokens";
import { renderTooltipStyleSheet, tooltipStyleSheet } from "./components/tooltip/tooltip";
import { renderTypographyStylesheet } from "./components/typography/typography";
import { theme, themeList } from "./data/themes/Theme";
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
      action: "SET_THEME";
      theme: string;
    }
  | {
      action: "RENDER_ALL_STYLESHEETS";
    };

const zip = new JSZip();

export const fsm = (msg: FSM) => {
  switch (msg.action) {
    case "DISABLE_TOKENS":
      renderTokensStyleSheet();
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
      // tokensEnabledState.set(true);
      renderTokensStyleSheet();
      break;
    case "SET_THEME":
      const themeFromThemeList = themeList.get()[msg.theme];
      theme.set(themeFromThemeList);
      fsm({ action: "RENDER_ALL_STYLESHEETS" });
      break;
    case "RENDER_ALL_STYLESHEETS":
      renderTokensStyleSheet();
      renderDashboardStyleSheet();
      renderAccordionStyleSheet();
      renderAlertsStyleSheet();
      renderBadgeStyleSheet();
      renderBGStyleSheet();
      renderButtonStyleSheet();
      renderCardStyleSheet();
      renderDashboardStyleSheet();
      renderDialogStyleSheet();
      renderDropdownStyleSheet();
      renderFlexGridStyleSheet();
      renderFlexpaneStyleSheet();
      renderGridStyleSheet();
      renderSectionStyleSheet();
      renderSliderStyleSheet();
      renderTogglesStyleSheet();
      renderTooltipStyleSheet();
      renderTypographyStylesheet();
      break;
  }
};
