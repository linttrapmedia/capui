import { dialog, html } from "./config";

export const Dialog = () => {
  // close dialog on escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dialog.set({ showing: false });
    }
  });

  return html.dialog(["attr:dialog", "open", () => dialog.get().showing])(
    html.div(
      ["style", "display", "flex"],
      ["style", "flexDirection", "column"],
      ["style", "position", "sticky"],
      ["style", "top", "0"],
      ["style", "zIndex", "1000"],
      ["style", "background", "var(--color)"]
    )(
      html.div(
        ["style", "backgroundColor", "rgba(0,0,0,0.1)"],
        ["style", "display", "flex"],
        ["style", "flexDirection", "row"],
        ["style", "justifyContent", "space-between"],
        ["style", "borderBottom", `1px solid rgba(255,255,255,0.05)`],
        ["style", "padding", "20px"],
        ["style", "textAlign", "left"],
        ["style", "alignItems", "center"]
      )(
        html.div()(
          html.div(
            ["style", "fontSize", "21px"],
            ["style", "color", "rgba(255,255,255,1)"],
            ["innerText:dialog", () => dialog.get().title ?? ""]
          )()
        ),
        html.button(
          ["click", () => dialog.set({ showing: false })],
          ["style", "border", `0`],
          ["style", "backgroundColor", "transparent"],
          ["style", "color", "rgba(255,255,255,0.5)"],
          ["style:mouseover", "color", "rgba(255,255,255,1"],
          ["style:mouseout", "color", "rgba(255,255,255,0.5))"],
          ["style", "fontSize", "26px"],
          ["style", "cursor", "pointer"],
          ["style", "borderRadius", "5px"],
          ["style", "padding", "5px 15px"],
          ["style", "marginRight", "-7px"],
          ["style", "transform", "rotate(45deg)"]
        )("＋")
      )
    ),
    html.div(
      ["style", "padding", "20px"],
      ["style", "display", "flex"],
      ["style", "flexDirection", "column"],
      ["style", "backgroundColor", "rgba(0,0,0,0.1)"],
      ["innerHTML:dialog", () => dialog.get().example ?? ""]
    )()
  );
};
