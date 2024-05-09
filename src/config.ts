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
    preview: ` <label class="alert alert--dark">
    <div class="alert__close">＋</div>
    <div class="alert__title">Dark</div>
    <div class="alert__message">
      lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta?
    </div>
  </label>
 `,
  },
  {
    title: "Badge",
    exampleSrc: "components/badge/examples.html",
    example: undefined,
    preview: `
    <div>Lorem <span class="badge badge--dark">1</span></div>
    <div>Ipsum <span class="badge badge--light badge--outline">1</span></div>
    <div>Dolor <span class="badge badge--light">1</span></div>`,
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
    preview: `<div class="card card--dark">
    <div class="card__title">Title</div>
    <div class="card__actions"><button class="button button--light button--ghost button--small">go</button></div>
    <div class="card__body">lorem ipsum dolor sit amet, consectetur adipiscing elit.  </div>
  </div>`,
  },
];

// dialog.set({
//   ...lib[2],
//   showing: true,
// });
