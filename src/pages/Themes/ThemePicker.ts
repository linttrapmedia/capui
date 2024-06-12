import { DARK_THEME, LIGHT_THEME } from "../../constants";
import { fsm } from "../../fsm";
import { themeState } from "../../state";
import { html } from "../../template";

export const ThemePicker = () =>
  html.div(
    ["style", "display", "flex"],
    ["style", "flexDirection", "row"],
    ["style", "gap", "10px"]
  )(
    html.label()("Theme"),
    html.select([
      "change",
      (e: Event) => {
        const value = (e.target as HTMLSelectElement).value;
        if (value === "Light") fsm({ action: "SET_THEME", theme: "LIGHT", tokens: LIGHT_THEME });
        if (value === "Dark") fsm({ action: "SET_THEME", theme: "DARK", tokens: DARK_THEME });
      },
    ])(
      html.option(["attr", "selected", true, () => themeState.get() === "LIGHT"])("Light"),
      html.option(["attr", "selected", true, () => themeState.get() === "DARK"])("Dark")
    )
  );
