import { Card } from "../../components/Card";
import { fsm } from "../../fsm";
import { tokensState } from "../../state";
import { html } from "../../template";

const Token = (token: string) => {
  return html.div(["class", "flexgrid__item"])(
    Card({
      onClick: () => fsm({ action: "SET_COLOR_PICKER", token }),
      title: `
      ${token}`,
      content: html.div(
        ["style", "height", "40px"],
        ["style", "width", "100%"],
        ["style:tokens", "backgroundColor", () => (tokensState.get() as any)[token]]
      )(),
    })
  );
};

export const ThemePage = () =>
  html.div(
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "20px"]
  )(
    html.section()(
      html.div()("Colors"),
      html.div(
        ["class", "flexgrid"],
        ["style", "--mobile-width", "200px"],
        ["style", "--tablet-width", "200px"],
        ["style", "--desktop-width", "200px"],
        ["style", "--mobile-gap", "10px"],
        ["style", "--tablet-gap", "10px"],
        ["style", "--desktop-gap", "10px"]
      )(
        ...Object.keys(tokensState.get())
          .filter((t) => t.startsWith("--token-color"))
          .map(Token)
      )
    ),
    html.section()(html.h2()("Fonts"))
  );
