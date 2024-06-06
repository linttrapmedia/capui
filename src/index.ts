import { AccordionPage } from "./pages/AccordionPage";
import { HomePage } from "./pages/HomePage";
import { TokenPage } from "./pages/TokenPage";
import { pageState } from "./state";
import { html } from "./template";

const NavHeader = html.div(["class", "dashboard__nav-header"])(
  html.img(["attr", "src", "/images/capui-transparent.png"], ["attr", "height", "80"])()
);

const Nav = html.nav(["class", "dashboard__nav"])(
  html.div(
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "3px"],
    ["style", "alignItems", "center"]
  )(
    html.button(
      ["class", "button"],
      ["class", "button--light"],
      ["class", "button--outline"],
      ["style", "margin", "20px"],
      ["click", () => pageState.set("HOME")]
    )("Home"),
    html.button(
      ["class", "button"],
      ["class", "button--light"],
      ["class", "button--ghost"],
      ["click", () => pageState.set("TOKENS")]
    )("Tokens"),
    html.button(
      ["class", "button"],
      ["class", "button--light"],
      ["class", "button--ghost"],
      ["click", () => pageState.set("ACCORDION")]
    )("Accordion"),
    html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Alerts"),
    html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Badge"),
    html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Button"),
    html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Card"),
    html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Dashboard"),
    html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Dialog"),
    html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Flexpane"),
    html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Grid"),
    html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Tag")
  )
);

const NavFooter = html.div(
  ["class", "dashboard__nav-footer"],
  ["style", "padding", "20px"],
  ["style", "opacity", "0.5"],
  ["style", "fontSize", "12px"]
)("©Copyright 2024");

const MainHeader = html.div(["class", "dashboard__main-header"])(
  html.h1([
    "innerText:pages",
    () =>
      pageState.get() === "HOME"
        ? "Introduction"
        : pageState.get() === "TOKENS"
        ? "Tokens"
        : pageState.get() === "ACCORDION"
        ? "Accordion"
        : "",
  ])()
);

const Main = html.div(
  ["class", "dashboard__main"],
  [
    "innerHTML:pages",
    () =>
      pageState.get() === "HOME"
        ? HomePage()
        : pageState.get() === "TOKENS"
        ? TokenPage()
        : pageState.get() === "ACCORDION"
        ? AccordionPage()
        : "",
  ]
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

const Aside = html.aside(["class", "dashboard__aside"])("Aside");

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
