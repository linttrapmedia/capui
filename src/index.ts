import { fsm } from "./fsm";
import { ColorPicker } from "./pages/Themes/ColorPicker";
import { ThemePage } from "./pages/Themes/ThemePage";
import { ThemePicker } from "./pages/Themes/ThemePicker";
import { pageState, propertiesState } from "./state";
import { html } from "./template";

const NavHeader = html.div(["class", "dashboard__nav-header"])(
  html.img(["attr", "src", "/images/capui-transparent.png"], ["attr", "height", "80"])()
);

const navButtonStyle: any = [
  ["class", "button"],
  ["class", "button--light"],
  ["class", "button--ghost"],
  ["class", "button--block"],
  ["class", "button--justify-start"],
];

const Nav = html.nav(["class", "dashboard__nav"])(
  html.div(
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "3px"],
    ["style", "alignItems", "flex-start"],
    ["style", "width", "100%"]
  )(
    html.button(
      ["class", "button"],
      ["class", "button--light"],
      ["class", "button--block"],
      ["style", "marginBottom", "10px"],
      ["style", "gap", "10px"],
      ["class", "button--justify-start"],
      ["click", () => pageState.set("HOME")]
    )(html.span()("capui.zip"), html.span()("[↓]")),
    html.button(
      ["class", "button"],
      ["class", "button--light"],
      ["class", "button--outline"],
      ["class", "button--block"],
      ["style", "marginBottom", "10px"],
      ["class", "button--justify-start"],
      ["click", () => pageState.set("HOME")]
    )("Home"),
    html.button(...navButtonStyle, ["click", () => fsm({ action: "SET_PAGE", page: "THEME" })])("Theme"),
    html.button(...navButtonStyle, ["click", () => fsm({ action: "SET_PAGE", page: "UTILITY" })])("Utility"),
    html.button(...navButtonStyle, ["click", () => fsm({ action: "SET_PAGE", page: "ACCORDION" })])("Accordion"),
    html.button(...navButtonStyle)("Alerts"),
    html.button(...navButtonStyle)("Badge"),
    html.button(...navButtonStyle)("Button"),
    html.button(...navButtonStyle)("Card"),
    html.button(...navButtonStyle)("Dashboard"),
    html.button(...navButtonStyle)("Dialog"),
    html.button(...navButtonStyle)("Flexpane"),
    html.button(...navButtonStyle)("Grid"),
    html.button(...navButtonStyle)("Tag")
  )
);

const NavFooter = html.div(
  ["class", "dashboard__nav-footer"],
  ["style", "padding", "20px"],
  ["style", "opacity", "0.5"],
  ["style", "fontSize", "12px"]
)("©Copyright 2024");

const MainHeader = html.div(
  ["class", "dashboard__main-header"],
  ["innerHTML:pages", () => "Home", () => pageState.get() === "HOME"],
  ["innerHTML:pages", () => "Accordion", () => pageState.get() === "ACCORDION"],
  ["innerHTML:pages", ThemePicker, () => pageState.get() === "THEME"],
  ["innerHTML:pages", () => "Utility", () => pageState.get() === "UTILITY"]
)();

const Main = html.div(
  ["class", "dashboard__main"],
  ["innerHTML:pages", () => "Home", () => pageState.get() === "HOME"],
  ["innerHTML:pages", () => "Accordion", () => pageState.get() === "ACCORDION"],
  ["innerHTML:pages", ThemePage, () => pageState.get() === "THEME"],
  ["innerHTML:pages", () => "Utility", () => pageState.get() === "UTILITY"]
)();

const MainFooter = html.div(
  ["class", "dashboard__main-footer"],
  ["class", "dashboard__nav-footer"],
  ["style", "padding", "20px"],
  ["style", "opacity", "0.5"],
  ["style", "fontSize", "12px"]
)(
  html.span()(
    "All rights reserved. Made in the USA 🇺🇸 by ",
    html.a(
      ["attr", "href", "https://kevinlint.com"],
      ["attr", "target", "_blank"],
      ["style", "color", "white"]
    )("Kevin Lint"),
    " as a product of ",
    html.a(
      ["attr", "href", "https://github.com/linttrapmedia"],
      ["attr", "target", "_blank"],
      ["style", "color", "white"]
    )("Lint Trap Media.")
  )
);

const AsideHeader = html.div(["class", "dashboard__aside-header"])("Aside Header");

const Aside = html.aside(
  ["class", "dashboard__aside"],
  ["innerHTML:properties", ColorPicker, () => propertiesState.get() === "COLOR_PICKER"]
)();

const AsideFooter = html.aside(["class", "dashboard__aside-footer"])("Aside footer");

document.addEventListener("DOMContentLoaded", () => {
  const root = html.$el("#root");
  root(
    ["class", "dashboard"],
    [
      "innerHTML:static",
      () => [NavHeader, Nav, NavFooter, MainHeader, Main, MainFooter, AsideHeader, Aside, AsideFooter],
    ]
  );
});
