import { colors, dialog, html } from "./config";

export const Dialog = () => {
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
    ["style", "backgroundColor", colors.get().accent],
    ["style", "padding", "0"],
    [
      "innerHTML:dialog",
      () => {
        return [
          html.div(["style", "display", "grid"])(
            html.div(["style", "backgroundColor", colors.get().secondary])(
              html.div()(
                html.div(["style", "fontSize", "21px"], ["style", "color", colors.get().primary])(dialog.get().title),
                html.div(
                  ["style", "fontSize", "14px"],
                  ["style", "color", colors.get().primary]
                )(dialog.get().description)
              ),
              html.button(
                ["style", "position", "absolute"],
                ["style", "top", "10px"],
                ["style", "right", "10px"],
                ["click", () => dialog.set({ showing: false })],
                ["style", "border", `1px solid ${colors.get().primary}`],
                ["style", "backgroundColor", "transparent"],
                ["style", "color", colors.get().primary],
                ["style", "fontSize", "14px"],
                ["style", "cursor", "pointer"],
                ["style", "borderRadius", "5px"],
                ["style", "padding", "5px 15px"]
              )("close")
            ),
            html.div(["style", "backgroundColor", colors.get().accent])(),
            html.div(["style", "backgroundColor", colors.get().accent])()
          ),

          html.div(["style", "padding", "20px"])(dialog.get().content),
        ];
      },
    ]
  )();
};
