import { fsm } from "../../fsm";
import { colorPickerState, themeState, themesState } from "../../state";
import { html } from "../../template";

export const ThemeColorPicker = () => {
  const colorKey = () => colorPickerState.get();
  const getTheme = () => themeState.get();
  const getColor = () => themesState.get()[getTheme()].colors[colorKey()][0];
  const getContrast = () => themesState.get()[getTheme()].colors[colorKey()][1];

  const width = 150;
  const height = 80;
  const clipping = 20;

  return html.div(
    [
      "innerHTML:colorPicker",
      () => [
        html.div()(colorPickerState.get()),
        html.div(["style", "opacity", "0.35"], ["style", "fontSize", "0.8em"])(`Set the color and it's contrast`),
        html.div(["style", "fontSize", "0.85em"], ["style", "opacity", 0.6])("Color"),
        html.div(
          ["style", "boxShadow", "1px 0px 20px -2px rgba(0,0,0,0.5)"],
          ["style", "borderRadius", "5px"],
          ["style", "width", `${width - clipping}px`],
          ["style", "height", `${height - clipping}px`],
          ["style", "overflow", "hidden"],
          ["style", "position", "relative"]
        )(
          html.input(
            ["style", "position", "absolute"],
            ["style", "top", `-${clipping / 2}px`],
            ["style", "left", `-${clipping / 2}px`],
            ["attr", "type", "color"],
            ["style", "width", `${width}px`],
            ["style", "height", `${height}px`],
            ["style", "backgroundColor", "transparent"],
            [
              "input",
              (e: any) => {
                fsm({
                  action: "SET_COLOR_TOKEN",
                  key: colorPickerState.get(),
                  theme: themeState.get(),
                  color: e.target.value,
                  contrast: getContrast(),
                });
              },
            ],
            ["attr", "value", getColor()]
          )()
        ),
        html.div(["style", "fontSize", "0.85em"], ["style", "opacity", 0.6])("Contrast"),
        html.div(
          ["style", "boxShadow", "1px 0px 20px -2px rgba(0,0,0,0.5)"],
          ["style", "borderRadius", "5px"],
          ["style", "width", `${width - clipping}px`],
          ["style", "height", `${height - clipping}px`],
          ["style", "overflow", "hidden"],
          ["style", "position", "relative"]
        )(
          html.input(
            ["style", "position", "absolute"],
            ["style", "top", `-${clipping / 2}px`],
            ["style", "left", `-${clipping / 2}px`],
            ["attr", "type", "color"],
            ["style", "width", `${width}px`],
            ["style", "height", `${height}px`],
            ["style", "backgroundColor", "transparent"],
            [
              "input",
              (e: any) => {
                fsm({
                  action: "SET_COLOR_TOKEN",
                  key: colorPickerState.get(),
                  theme: themeState.get(),
                  color: getColor(),
                  contrast: e.target.value,
                });
              },
            ],
            ["attr", "value", getContrast()]
          )()
        ),
        html.div(["style", "fontSize", "0.85em"], ["style", "opacity", 0.6])("Token"),
        html.div(
          ["style", "whiteSpace", "nowrap"],
          ["style", "fontSize", "0.8em"],
          ["style", "opacity", "0.35"]
        )(`--token-${colorKey()}`),
      ],
    ],
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "20px"]
  )();
};
