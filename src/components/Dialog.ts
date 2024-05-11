import { StateType } from "@linttrap/oem";
import { dialog, tokenDialog } from "../state";
import { html } from "../template";
import { TokenDialogProps } from "../typings";

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
    html.div(["class", "dialog__view"])(
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

export const PreviewDialog = ({
  title,
  content,
  state,
}: {
  title: string;
  content: HTMLElement;
  state: StateType<TokenDialogProps>;
}) => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      tokenDialog.set({ showing: false, view: "preview" });
    }
  });

  return html.dialog(
    ["tokenDialog:attr", "open", () => state.get().showing],
    ["class", "dialog"]
  )(
    html.div(["class", "dialog__view"])(
      html.div(["class", "dialog__header"])(
        html.div(["class", "dialog__title"])(title),
        html.button(
          ["click", () => state.set({ showing: false, view: "preview" })],
          ["class", "button button--light button--ghost"]
        )("close")
      ),
      html.div(["class", "dialog__body"])(content),
      html.div(["class", "dialog__footer"])(
        html.button(
          ["click", () => state.set({ showing: false, view: "preview" })],
          ["class", "button button--light button--ghost"],
          ["style", "fontSize", "16px"]
        )("close")
      )
    )
  );
};
