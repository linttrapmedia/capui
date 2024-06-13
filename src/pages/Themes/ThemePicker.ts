import { fsm } from "../../fsm";
import { Themes, themeState, themesState } from "../../state";
import { html } from "../../template";

const Option = (theme: string) => html.option(["attr", "selected", true, () => themeState.get() === theme])(theme);

export const ThemePicker = () => {
  return html.div(["style", "display", "flex"], ["style", "flexDirection", "row"], ["style", "gap", "10px"])(
    html.label()("Theme"),
    html.select([
      "change",
      (e: Event) => {
        const theme = (e.target as HTMLSelectElement).value as Themes;
        fsm({ action: "SET_THEME", theme });
      },
    ])(...Object.keys(themesState.get()).map(Option)),
    html.button(
      ["class", "button"],
      ["class", "button--light"],
      ["class", "button--outline"],
      ["style", "marginBottom", "10px"],
      ["style", "gap", "10px"],
      ["class", "button--justify-start"],
      ["class", "tooltip"],
      ["attr", "aria-label", "Download current theme tokens"],
      ["click", () => fsm({ action: "DOWNLOAD_THEME_TOKENS" })]
    )(html.span()("tokens.css"), html.span()("[↓]"))
  );
};
