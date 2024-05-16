import { html } from "./template";

const Logo = () =>
  html.div(
    ["style", "backgroundColor", "red"],
    ["style", "gridRowStart", "1"],
    ["style", "gridRowEnd", "2"],
    [
      "class",
      [
        "ui__item",
        "mobile:ui__item--col-start-1",
        "mobile:ui__item--col-end-7",
        "desktop:ui__item--col-start-2",
        "desktop:ui__item--col-end-5",
      ].join(" "),
    ]
  )("Logo");

const GlobalNav = () =>
  html.div(
    ["style", "backgroundColor", "red"],
    ["style", "gridRowStart", "1"],
    ["style", "gridRowEnd", "2"],
    [
      "class",
      [
        "ui__item",
        "mobile:ui__item--col-start-1",
        "mobile:ui__item--col-end-7",
        "desktop:ui__item--col-start-5",
        "desktop:ui__item--col-end-14",
      ].join(" "),
    ]
  )("GlobalNav");

const Download = () =>
  html.div(
    ["style", "backgroundColor", "red"],
    ["style", "gridRowStart", "2"],
    ["style", "gridRowEnd", "3"],
    [
      "class",
      [
        "ui__item",
        "mobile:ui__item--col-start-1",
        "mobile:ui__item--col-end-7",
        "desktop:ui__item--col-start-2",
        "desktop:ui__item--col-end-5",
      ].join(" "),
    ]
  )("Download");

const PageNav = () =>
  html.div(
    ["style", "backgroundColor", "red"],
    ["style", "gridRowStart", "2"],
    ["style", "gridRowEnd", "3"],
    [
      "class",
      [
        "ui__item",
        "mobile:ui__item--col-start-1",
        "mobile:ui__item--col-end-7",
        "desktop:ui__item--col-start-5",
        "desktop:ui__item--col-end-14",
      ].join(" "),
    ]
  )("PageNav");

const Components = () =>
  html.div(
    ["style", "backgroundColor", "red"],
    ["style", "gridRowStart", "3"],
    ["style", "gridRowEnd", "4"],
    [
      "class",
      [
        "ui__item",
        "mobile:ui__item--col-start-1",
        "mobile:ui__item--col-end-7",
        "desktop:ui__item--col-start-2",
        "desktop:ui__item--col-end-5",
      ].join(" "),
    ]
  )("Components");

const Content = () =>
  html.div(
    ["style", "backgroundColor", "red"],
    ["style", "gridRowStart", "3"],
    ["style", "gridRowEnd", "5"],
    [
      "class",
      [
        "ui__item",
        "mobile:ui__item--col-start-1",
        "mobile:ui__item--col-end-7",
        "desktop:ui__item--col-start-5",
        "desktop:ui__item--col-end-14",
      ].join(" "),
    ]
  )("Content");

const Footer = () =>
  html.div(
    ["style", "backgroundColor", "red"],
    ["style", "gridRow", "4 / 5"],
    [
      "class",
      [
        "ui__item",
        "mobile:ui__item--col-start-1",
        "mobile:ui__item--col-end-7",
        "desktop:ui__item--col-start-2",
        "desktop:ui__item--col-end-5",
      ].join(" "),
    ]
  )("Footer");

document.addEventListener("DOMContentLoaded", () => {
  const root = html.$el("#root");
  root(
    ["class", "ui"],
    ["style", "padding", "20px"],
    ["style", "boxSizing", "border-box"],
    ["innerHTML", () => [Logo(), GlobalNav(), Download(), PageNav(), Components(), Content(), Footer()]]
  );
});
