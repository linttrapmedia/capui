import { dialog } from "./state";
import { Component } from "./x.typings";

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

export const lib: Component[] = [
  {
    title: "Accordion",
    exampleSrc: "components/accordion/examples.html",
    example: undefined,
    preview: `<div class="accordion accordion--dark">
    <div class="accordion__item">
      <input type="radio" name="group2" id="item3" hidden class="accordion__input" />
      <label for="item3" class="accordion__header">Item 1</label>
      <div class="accordion__body">Content for section 1...</div>
    </div>
    <div class="accordion__item">
      <input type="radio" name="group2" id="item4" hidden class="accordion__input" />
      <label for="item4" class="accordion__header">Item 2</label>
      <div class="accordion__body">Content for section 2...</div>
    </div>
    <div class="accordion__item">
      <input type="radio" name="group2" id="item5" hidden class="accordion__input" />
      <label for="item5" class="accordion__header">Item 3</label>
      <div class="accordion__body">Content for section 3...</div>
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
