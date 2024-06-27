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
import { PaletteList } from "./features/PaletteList";
import { BezierPlotter } from "./features/ScalePicker";
import { fsm } from "./fsm";
import { theme, themes } from "./state";
import { html } from "./template";

const Header = html.div(
  ["row", "10px", "center", "space-between"],
  ["style", "backgroundColor", "var(--background-600, white)"],
  ["style", "color", "var(--text-500, black)"],
  ["style", "position", "sticky"],
  ["style", "top", "0"],
  ["style", "width", "100%"]
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
  ["style", "width", "100%"],
  ["style", "padding", "20px"],
  [
    "innerHTML:theme",
    () => [
      html.div(["row", "5px"])(
        BezierPlotter(100, -1, 5),
        BezierPlotter(100, -0.5, 5),
        BezierPlotter(100, -0.25, 5),
        BezierPlotter(100, 0, 5),
        BezierPlotter(100, 0.25, 5),
        BezierPlotter(100, 0.5, 5),
        BezierPlotter(100, 1, 5)
      ),
      html.div(["column", "0", "flex-start"])(
        html.div(["class", "h2"])("Palette"),
        html.p(["class", "p"])("Select a color row to edit")
      ),
      PaletteList(),
    ],
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
      ...Object.keys(themes.get()).map((t: string) =>
        html.option(["attr", "value", t], ["attr", "selected", t === theme.get()])(t)
      )
    )
  ),
  html.button(["class", "button"])("capui.zip")
);

document.addEventListener("DOMContentLoaded", () => {
  const root = html.$el("#root");
  const doc = html.$el("html");
  doc(["attr:theme", "data-theme", theme.get], ["style", "backgroundColor", "var(--background-600)"]);
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
