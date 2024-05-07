import { Body } from "./Body";
import { Dialog } from "./Dialog";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { html } from "./config";

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const dialog = card.querySelector("dialog") as HTMLDialogElement;
    const close = document.querySelector("dialog .dialog__header__close") as HTMLElement;
    card.addEventListener("click", () => {
      dialog.showModal();
    });
    close.addEventListener("click", (e) => {
      e.stopPropagation();
      dialog.close();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const root = html.$el("#root");
  root(
    ["class", "ui__bg"],
    ["style", "padding", "20px"],
    ["style", "boxSizing", "border-box"],
    [
      "innerHTML",
      () =>
        html.div(
          ["class", "ui"],
          [
            "innerHTML",
            () => [
              Dialog(),
              html.div([
                "class",
                [
                  "ui__item",
                  "mobile:ui__item--start-1",
                  "mobile:ui__item--end-7",
                  "desktop:ui__item--start-1",
                  "desktop:ui__item--end-13",
                ].join(" "),
              ])(Header()),
              html.div([
                "class",
                [
                  "ui__item",
                  "mobile:ui__item--start-1",
                  "mobile:ui__item--end-7",
                  "desktop:ui__item--start-1",
                  "desktop:ui__item--end-13",
                ].join(" "),
              ])(Body()),
              html.div([
                "class",
                [
                  "ui__item",
                  "mobile:ui__item--start-1",
                  "mobile:ui__item--end-7",
                  "desktop:ui__item--start-1",
                  "desktop:ui__item--end-13",
                ].join(" "),
              ])(Footer()),
            ],
          ]
        )(),
    ]
  );
});
