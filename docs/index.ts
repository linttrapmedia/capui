import { Body } from "./Body";
import { Dialog } from "./Dialog";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { colors, dialog, html, lib } from "./config";

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

dialog.set({ showing: true, ...lib[1] });

document.addEventListener("DOMContentLoaded", () => {
  const root = html.$el("#root");
  root(["innerHTML", () => [Dialog(), Header(), Body(), Footer()]], ["style", "backgroundColor", colors.get().primary]);
});
