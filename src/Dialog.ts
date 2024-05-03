import { dialog, html } from "./config";

export const Dialog = () => {
  // close dialog on escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dialog.set({ showing: false });
    }
  });

  return html.dialog(
    ["attr:dialog", "open", () => dialog.get().showing],
    ["class", "dialog"]
  )(
    html.div(["class", "dialog__container"])(
      html.div(["class", "dialog__header"])(
        html.div(["class", "dialog__title"], ["innerText:dialog", () => dialog.get().title ?? ""])(),
        html.button(
          ["click", () => dialog.set({ showing: false })],
          ["class", "button button--light button--ghost"]
        )("close")
      ),
      html.div(["class", "dialog__body"], ["innerHTML:dialog", () => dialog.get().example ?? ""])(),
      html.div(["class", "dialog__footer"])(
        html.button(
          ["click", () => dialog.set({ showing: false })],
          ["class", "button button--light button--ghost"],
          ["style", "fontSize", "16px"]
        )("close")
      )
    )
  );
};
