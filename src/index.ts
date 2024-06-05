import { html } from "./template";

const Logo = html.div(["class", "dashboard__logo"])(
  html.img(["attr", "src", "/images/capui-transparent.png"], ["attr", "width", "200"])()
);

const Header = html.div(["class", "dashboard__header"])("Header");

const Nav = html.div(["class", "dashboard__nav"])(
  html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Tokens"),
  html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Accordion"),
  html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Alerts"),
  html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Badge"),
  html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Button"),
  html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Card"),
  html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Dashboard"),
  html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Dialog"),
  html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Flexpane"),
  html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Grid"),
  html.button(["class", "button"], ["class", "button--light"], ["class", "button--ghost"])("Tag")
);

const Main = html.div(["class", "dashboard__main"])("Main");

const Footer = html.div(["class", "dashboard__footer"])("Footer");

const Drawer = html.div(["class", "dashboard__drawer"])("Drawer");

document.addEventListener("DOMContentLoaded", () => {
  const root = html.$el("#root");
  root(["class", "dashboard"], ["innerHTML", () => [Logo, Header, Nav, Main, Footer, Drawer]]);
});
