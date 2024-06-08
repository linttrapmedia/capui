import { colorPickerState, tokensState } from "../../state";
import { html } from "../../template";

export const ColorPicker = () => {
  return html.div(
    [
      "innerHTML:colorPicker",
      () => [
        html.div()("Color Picker"),
        html.input(
          ["attr", "type", "color"],
          ["style", "height", "100px"],
          ["style", "width", "200px"],
          ["style", "backgroundColor", "transparent"],
          ["input", (e: any) => tokensState.set({ ...tokensState.get(), [colorPickerState.get()]: [e.target.value] })],
          ["attr", "value", (tokensState.get() as any)[colorPickerState.get()]]
        )(),
        html.div(["style", "opacity", "0.5"])("Generates"),
        html.div()(colorPickerState.get()),
      ],
    ],
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "20px"]
  )();
};
