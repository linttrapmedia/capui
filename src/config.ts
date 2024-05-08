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

const isGithub = window.location.host === "linttrapmedia.github.io";
export const baseUrl = isGithub ? "/capui" : "";

dialog.sub((d) => {
  if (d.example === undefined) {
    if (!d.exampleSrc) return;
    const url = isGithub ? `${baseUrl}/${d.exampleSrc}` : d.exampleSrc;
    fetch(url)
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

export const lib: Component[] = [
  {
    title: "Accordion",
    exampleSrc: "components/accordion/examples.html",
    example: undefined,
    preview: `<div class="accordion accordion--dark">
    <div class="accordion__item">
      <input type="radio" name="accordion-group" id="ag1" hidden class="accordion__input" />
      <label for="ag1" class="accordion__header">Item 1</label>
      <div class="accordion__body">Content for Item 1...</div>
    </div>
    <div class="accordion__item">
      <input type="radio" name="accordion-group" id="ag2" hidden class="accordion__input" />
      <label for="ag2" class="accordion__header">Item 2</label>
      <div class="accordion__body">Content for Item 2...</div>
    </div>
    <div class="accordion__item">
    <input type="radio" name="accordion-group" id="ag3" hidden class="accordion__input" />
    <label for="ag3" class="accordion__header">Item 2</label>
    <div class="accordion__body">Content for Item 2...</div>
  </div>
  </div>`,
  },
  {
    title: "Alerts",
    exampleSrc: "components/alerts/examples.html",
    example: undefined,
    preview: `<div class="alert alert--dark">
    <div class="alert__title">Alert</div>
    <div class="alert__message">
      lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    </div>
  </div>
  <div class="alert alert--light">
    <div class="alert__title">Alert</div>
    <div class="alert__message">
      lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    </div>
  </div>`,
  },
  {
    title: "Badge",
    exampleSrc: "components/badge/examples.html",
    example: undefined,
    preview: `<button class="button button--dark">Alerts <span class="badge badge--light">1</span></button>
    <button class="button button--light">Alerts <span class="badge badge--dark">2</span></button>
    <button class="button button--outline button--light">Alerts <span class="badge badge--light">3</span></button>`,
  },
  {
    title: "Button",
    exampleSrc: "components/button/examples.html",
    example: undefined,
    preview: `<button class="button button--dark">Dark</button>
    <button class="button button--light">Light</button>
    <button class="button button--outline button--light">Outline</button>
    <button class="button button--outline button--loading button--light">Loading</button>`,
  },
  {
    title: "Card",
    exampleSrc: "components/card/examples.html",
    example: undefined,
    preview: `<div class="card card--dark card--small">
    <div class="card__header">
    <span>Card</span>
      <button class="button button--light button--ghost">open</button>
    </div>
    <div class="card__body">lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
    <div class="card__footer">Footer</div>
  </div>`,
  },
];

dialog.set({
  ...lib[4],
  showing: true,
});
