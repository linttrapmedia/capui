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
import { PalettePickers } from "./features/PalettePicker";
import { SemanticPickers } from "./features/SemanticPicker";
import { fsm } from "./fsm";
import { theme, themeList } from "./state/Theme";
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
        html.option()("palette"),
        html.option()("colors"),
        html.option()("fonts"),
        html.option()("text"),
        html.option()("grids"),
        html.option()("boxes"),
        html.option()("icons"),
        html.option()("colors"),
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
  ["column", "60px", "flex-start", "space-between"],
  ["style", "padding", "20px"],
  [
    "innerHTML:theme",
    () => {
      return [
        html.div(["column", "10px", "flex-start", "center", "100%"])(
          html.h2(["class", "h2"])("Tokens"),
          html.h3(["class", "h3"])("Palette"),
          html.p(["class", "p"])("Define the fundamental colors of your design system."),
          PalettePickers()
        ),
        html.div(["column", "10px", "flex-start", "center", "100%"])(
          html.h3(["class", "h3"])("Semantic"),
          html.p(["class", "p"])("Assign the semantic use of your colors."),
          SemanticPickers()
        ),
        html.h3(["class", "h3"])("Fonts"),
        html.h3(["class", "h3"])("Text"),
        html.h3(["class", "h3"])("Grids"),
        html.h3(["class", "h3"])("Boxes"),
        html.h3(["class", "h3"])("Icons"),
        html.h2(["class", "h2"])("Components"),
        html.h3(["class", "h3"])("Accordion"),
        html.h3(["class", "h3"])("Alerts"),
        html.h3(["class", "h3"])("Background"),
        html.h3(["class", "h3"])("Badge"),
        html.h3(["class", "h3"])("Button"),
        html.h3(["class", "h3"])("Card"),
        html.h3(["class", "h3"])("Dashboard"),
        html.h3(["class", "h3"])("Dialog"),
        html.h3(["class", "h3"])("Dropdown"),
        html.h3(["class", "h3"])("Flexgrid"),
        html.h3(["class", "h3"])("Flexpane"),
        html.h3(["class", "h3"])("Grid"),
        html.h3(["class", "h3"])("Section"),
        html.h3(["class", "h3"])("Sizing"),
        html.h3(["class", "h3"])("Slider"),
        html.h3(["class", "h3"])("Toggles"),
        html.h3(["class", "h3"])("Tooltip"),
        html.h3(["class", "h3"])("Typography"),
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
