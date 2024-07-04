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
import { sliderStyleSheet } from "./components/slider/slider";
import { togglesStyleSheet } from "./components/toggles/toggles";
import { tokensStyleSheet } from "./components/tokens/tokens";
import { tooltipStyleSheet } from "./components/tooltip/tooltip";
import { typographyStylesheet } from "./components/typography/typography";
import { theme, themeList } from "./data/themes/Theme";
import { PalettePickers } from "./features/PalettePicker";
import { SemanticPickers } from "./features/SemanticPicker";
import { fsm } from "./fsm";
import { html } from "./template";

const Header = html.div(
  ["row", "10px", "center", "space-between"],
  ["style", "color", "var(--text-500, black)"],
  ["style", "position", "sticky"],
  ["style", "top", "0"],
  ["style", "width", "100%"],
  ["style", "zIndex", "1000"]
)(
  html.div(["row", "2ch"], ["style", "padding", "0 2ch"])(
    html.div(
      ["style", "color", "var(--brand-500)"],
      ["style", "height", "100%"],
      ["style", "fontFamily", "Splash"],
      ["style", "fontWeight", "bold"],
      ["style", "fontSize", "5ch"],
      ["style", "textAlign", "center"]
    )("cap"),
    html.div(
      ["style", "color", "var(--brand-500)"],
      ["style", "height", "100%"],
      ["style", "fontWeight", "bold"],
      ["style", "fontSize", "0.5ch"],
      ["style", "textAlign", "center"]
    )("v1.0.0")
  ),
  html.div(
    ["row", "20px"],
    ["style", "padding", "0 20px"]
  )(
    html.select(
      ["class", "dropdown"],
      ["change", (e) => (window.location.hash = (e!.target as any).value)]
    )(
      html.optgroup(["attr", "label", "Section"])(
        html.option()("tokens"),
        html.option()("buttons"),
        html.option()("dropdown"),
        html.option()("accordion"),
        html.option()("alerts"),
        html.option()("badge"),
        html.option()("bg"),
        html.option()("card"),
        html.option()("dashboard"),
        html.option()("dialog"),
        html.option()("flexgrid"),
        html.option()("flexpane"),
        html.option()("grid"),
        html.option()("section"),
        html.option()("toggles"),
        html.option()("tooltip")
      )
    )
  )
);

const Body = html.div(
  ["column", "20px", "flex-start", "space-between"],
  ["style", "padding", "20px"],
  [
    "innerHTML:theme",
    () => {
      return [
        html.div(["class", "h2"])("Tokens"),
        html.div(["column", "10px", "flex-start", "center", "100%"])(
          html.div(["class", "h3"])("Palette"),
          html.p(["class", "p"])("Define the fundamental colors of your design system."),
          PalettePickers()
        ),
        html.div(["column", "10px", "flex-start", "center", "100%"])(
          html.div(["class", "h3"])("Semantic"),
          html.p(["class", "p"])("Assign the semantic use of your colors."),
          SemanticPickers()
        ),
        html.div(["class", "h3"])("Fonts"),
        html.div(["class", "h3"])("Text"),
        html.div(["class", "h3"])("Grids"),
        html.div(["class", "h3"])("Boxes"),
        html.div(["class", "h3"])("Icons"),
        html.div(["class", "h2"])("Components"),
        html.div(["class", "h3"])("Accordion"),
        html.div(["class", "h3"])("Alerts"),
        html.div(["class", "h3"])("Background"),
        html.div(["class", "h3"])("Badge"),
        html.div(["class", "h3"])("Button"),
        html.div(["class", "h3"])("Card"),
        html.div(["class", "h3"])("Dashboard"),
        html.div(["class", "h3"])("Dialog"),
        html.div(["class", "h3"])("Dropdown"),
        html.div(["class", "h3"])("Flexgrid"),
        html.div(["class", "h3"])("Flexpane"),
        html.div(["class", "h3"])("Grid"),
        html.div(["class", "h3"])("Section"),
        html.div(["class", "h3"])("Sizing"),
        html.div(["class", "h3"])("Slider"),
        html.div(["class", "h3"])("Toggles"),
        html.div(["class", "h3"])("Tooltip"),
        html.div(["class", "h3"])("Typography"),
      ];
    },
  ]
)();

const Footer = html.div(
  ["row", "2ch"],
  ["style", "backgroundColor", "var(--background-600)"],
  ["style", "position", "fixed"],
  ["style", "bottom", "0"],
  ["style", "width", "100%"],
  ["style", "color", "var(--text-500, black)"],
  ["style", "padding", "2ch"]
)(
  html.select(
    ["class", "dropdown"],
    ["change", (e) => fsm({ action: "SET_THEME", theme: (e!.target as any).value as string })]
  )(
    html.optgroup(["attr", "label", "Pick a theme"])(
      html.option(["attr", "value", "none"])("none"),
      ...Object.entries(themeList.get()).map(([k]) =>
        html.option(["attr", "value", k], ["attr", "selected", k === theme.get().name])(k)
      )
    )
  ),
  html.button(["class", "button"])("capui.zip")
);

document.addEventListener("DOMContentLoaded", () => {
  const root = html.$el("#root");
  const doc = html.$el("html");
  doc(
    ["attr:theme", "data-theme", () => theme.get().name],
    ["style", "backgroundColor", "var(--background-200, white)"]
  );
  root(["innerHTML", () => [Header, Body, Footer]]);
  fsm({ action: "RENDER_ALL_STYLESHEETS" });

  document.adoptedStyleSheets = [
    tokensStyleSheet,
    accordionStyleSheet,
    alertsStyleSheet,
    badgeStyleSheet,
    bgStyleSheet,
    buttonStyleSheet,
    cardStyleSheet,
    dashboardStyleSheet,
    dialogStyleSheet,
    dropdownStyleSheet,
    flexgridStyleSheet,
    flexpaneStyleSheet,
    gridStyleSheet,
    sectionStyleSheet,
    sliderStyleSheet,
    togglesStyleSheet,
    tooltipStyleSheet,
    typographyStylesheet,
  ];
});
