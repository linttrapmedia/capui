import { HTML, State, useAttribute, useClassName, useEvent, useInnerHTML, useStyle, useText } from "@linttrap/oem";
import { Component } from "./typings";

export const dialog = State<{
  showing: boolean;
  title?: string;
  description?: string;
  exampleSrc?: string;
  example?: string | undefined;
}>({
  showing: false,
  title: "",
  description: "",
  exampleSrc: "",
  example: undefined,
});

dialog.sub((d) => {
  if (d.example === undefined) {
    if (!d.exampleSrc) return;
    fetch(d.exampleSrc)
      .then((res) => res.text())
      .then((htmlString) =>
        dialog.set({
          ...dialog.get(),
          example: htmlString,
        })
      );
  }
});

export const html = HTML({
  attr: useAttribute(),
  click: useEvent("click"),
  class: useClassName(),
  "attr:dialog": useAttribute({ state: dialog }),
  style: useStyle(),
  "style:mouseover": useStyle({
    event: "mouseover",
  }),
  "style:mouseout": useStyle({
    event: "mouseout",
  }),
  innerHTML: useInnerHTML(),
  "innerHTML:dialog": useInnerHTML({ state: dialog }),
  "innerText:dialog": useText({ state: dialog }),
});

export const colors = State<{
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  accent: string;
  accentLight: string;
  accentDark: string;
}>({
  primary: "#848383",
  primaryLight: "#939292",
  primaryDark: "#797878",
  secondary: "#444444",
  secondaryLight: "#666666",
  secondaryDark: "#222222",
  accent: "#e2e2e2",
  accentLight: "#f5f5f5",
  accentDark: "#c9c9c9",
});

export const lib: Component[] = [
  {
    title: "Alerts",
    description: "Alerts and notifications",
    image: "static/images/button.svg",
    exampleSrc: "/components/alerts/examples.html",
    example: undefined,
  },
  {
    title: "Buttons",
    description: "A simple button component",
    image: "static/images/button.svg",
    exampleSrc: "/components/buttons/examples.html",
    example: undefined,
  },
];
