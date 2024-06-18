import { fsm } from "../../fsm";
import { Themes, themeState, themesState, tokensEnabledState } from "../../state";
import { html } from "../../template";

const Option = (theme: string) => html.option(["attr", "selected", true, () => themeState.get() === theme])(theme);

export const ThemePicker = () => {
  return html.div(
    ["style", "display", "flex"],
    ["style", "flexDirection", "row"],
    ["style", "gap", "10px"],
    ["style", "justifyContent", "space-between"],
    ["style", "alignItems", "center"],
    ["style", "width", "100%"]
  )(
    html.div(
      ["style", "display", "flex"],
      ["style", "gap", "20px"],
      ["style", "alignItems", "center"],
      ["style", "justifyContent", "center"],
      ["style", "flex", 1]
    )(
      html.label(["style", "fontSize", "21px"])("Theme"),
      html.select(
        ["class", "dropdown"],
        ["class", "dropdown--small"],
        ["attr:tokensEnabled", "disabled", () => !tokensEnabledState.get()],
        [
          "change",
          (e) => {
            const theme = (e!.target as HTMLSelectElement).value as Themes;
            fsm({ action: "SET_THEME", theme });
          },
        ]
      )(...Object.keys(themesState.get()).map(Option))
    ),
    html.div(
      ["style", "display", "flex"],
      ["style", "gap", "10px"],
      ["style", "alignItems", "center"],
      ["style", "justifyContent", "center"]
    )(
      html.button(
        ["class", "button"],
        ["class", "button--small"],
        ["class", "button--light"],
        ["class", "button--outline"],
        ["style", "gap", "10px"],
        ["class", "button--justify-start"],
        ["class", "tooltip"],
        ["attr", "aria-label", "Download current theme tokens"],
        ["click", () => fsm({ action: "DOWNLOAD_THEME_TOKENS" })]
      )(html.span()("tokens.css"), html.span()("[↓]")),
      html.button(
        ["class", "button"],
        ["class", "button--light"],
        ["class", "button--outline"],
        ["class", "button--small"],
        ["style", "gap", "10px"],
        ["class", "button--justify-start"],
        ["class", "tooltip"],
        ["attr", "aria-label", "Download current theme tokens"],
        [
          "click",
          () => (tokensEnabledState.get() ? fsm({ action: "DISABLE_TOKENS" }) : fsm({ action: "ENABLE_TOKENS" })),
        ],
        ["text:tokensEnabled", "Disable Tokens", (state) => state],
        ["text:tokensEnabled", "Enable Tokens", (state) => !state]
      )()
    )
  );
};
