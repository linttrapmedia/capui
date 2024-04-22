import { colors, dialog, html } from "./config";

export const Dialog = () => {
  // close dialog on escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dialog.set({ showing: false });
    }
  });

  return html.dialog(
    // ["dialogShowing", "open", true],
    ["dialogShowing", "open", () => dialog.get().showing],
    ["style", "width", "90vw"],
    ["style", "height", "90vh"],
    ["style", "top", "5vh"],
    ["style", "zIndex", "1000"],
    ["style", "borderRadius", "5px"],
    ["style", "border", "none"],
    ["style", "overflow", "hidden"],
    ["style", "backgroundColor", colors.get().primaryLight],
    ["style", "padding", "0"]
  )(
    html.div(["style", "display", "grid"])(
      html.div(
        ["style", "backgroundColor", colors.get().primaryLight],
        ["style", "display", "flex"],
        ["style", "flexDirection", "row"],
        ["style", "justifyContent", "space-between"],
        ["style", "borderBottom", `1px solid ${colors.get().primary}`],
        ["style", "padding", "20px"]
      )(
        html.div()(
          html.div(
            ["style", "fontSize", "21px"],
            ["style", "color", colors.get().secondary],
            ["innerText:dialog", () => dialog.get().title ?? ""]
          )(),
          html.div(
            ["style", "fontSize", "14px"],
            ["style", "color", colors.get().accentLight],
            ["innerText:dialog", () => dialog.get().description ?? ""]
          )()
        ),
        html.button(
          ["click", () => dialog.set({ showing: false })],
          ["style", "border", `0`],
          ["style", "backgroundColor", "transparent"],
          ["style", "color", colors.get().secondary],
          ["style:mouseover", "color", colors.get().accent],
          ["style:mouseout", "color", colors.get().secondary],
          ["style", "fontSize", "26px"],
          ["style", "cursor", "pointer"],
          ["style", "borderRadius", "5px"],
          ["style", "padding", "5px 15px"],
          ["style", "marginRight", "-7px"],
          ["style", "transform", "rotate(45deg)"]
        )("＋")
      ),
      html.div(["style", "backgroundColor", colors.get().secondaryDark])(),
      html.div(["style", "backgroundColor", colors.get().accent])()
    ),
    html.div(["style", "padding", "20px"], ["innerHTML:dialog", () => dialog.get().example ?? ""])()
  );
};
