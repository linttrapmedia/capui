import { HTML, State, useAttribute, useClassName, useEvent, useInnerHTML, useStyle } from "@linttrap/oem";
import { Buttons } from "./Buttons";

export const dialog = State<{
  showing: boolean;
  title?: string;
  description?: string;
  content?: HTMLElement | Node | string;
}>({
  showing: false,
  title: "",
  description: "",
  content: "",
});

export const html = HTML({
  attr: useAttribute(),
  click: useEvent("click"),
  class: useClassName(),
  dialogShowing: useAttribute({ state: dialog }),
  style: useStyle(),
  "style:mouseover": useStyle({
    event: "mouseover",
  }),
  "style:mouseout": useStyle({
    event: "mouseout",
  }),
  innerHTML: useInnerHTML(),
  "innerHTML:dialog": useInnerHTML({ state: dialog }),
});

export const colors = State<{
  primary: string;
  secondary: string;
  accent: string;
}>({
  primary: "#848383",
  secondary: "#444444",
  accent: "#e2e2e2",
});

export const lib = [
  { title: "Alerts", description: "Alerts and notifications", image: "static/images/button.svg", content: Buttons() },
  { title: "Buttons", description: "A simple button component", image: "static/images/button.svg", content: Buttons() },
];
