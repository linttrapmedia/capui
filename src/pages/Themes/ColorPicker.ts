import { fsm } from "../../fsm";
import { colorPickerState, tokensState } from "../../state";
import { html } from "../../template";

export const ColorPicker = () => {
  const colorKey = () => colorPickerState.get();
  const getColor = () => tokensState.get().colors[colorPickerState.get()][0];
  const getContrast = () => tokensState.get().colors[colorPickerState.get()][1];
  const width = 150;
  const height = 80;
  const clipping = 20;
  const tokenSuffixes = [
    "-01",
    "-02",
    "-03",
    "-04",
    "-05",
    "-06",
    "-07",
    "-08",
    "-09",
    "-10",
    "-20",
    "-30",
    "-40",
    "-50",
    "-60",
    "-70",
    "-80",
    "-90",
  ];
  return html.div(
    [
      "innerHTML:colorPicker",
      () => [
        html.div()(colorPickerState.get()),
        html.div(["style", "opacity", "0.35"], ["style", "fontSize", "0.8em"])(`Set the color and it's contrast`),
        html.div(["style", "fontSize", "0.85em"], ["style", "opacity", 0.6])("Color"),
        html.div(
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
                const colorValues = tokensState.get().colors[colorPickerState.get()];
                fsm({
                  action: "SET_COLOR_TOKEN",
                  key: colorPickerState.get(),
                  color: e.target.value,
                  contrast: colorValues[1],
                });
              },
            ],
            ["attr", "value", getColor()]
          )()
        ),
        html.div(["style", "fontSize", "0.85em"], ["style", "opacity", 0.6])("Contrast"),
        html.div(
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
                const colorValues = tokensState.get().colors[colorPickerState.get()];
                fsm({
                  action: "SET_COLOR_TOKEN",
                  key: colorPickerState.get(),
                  color: colorValues[0],
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
        html.div(["style", "fontSize", "0.85em"], ["style", "opacity", 0.6])("Modifiers"),

        html.div(["style", "fontSize", "0.75em"], ["style", "opacity", 0.4])("Opacity"),
        html.div()(
          ...tokenSuffixes.map((suffix) =>
            html.div(
              ["style", "whiteSpace", "nowrap"],
              ["style", "fontSize", "0.8em"],
              ["style", "opacity", "0.25"]
            )(`--token-${colorKey()}${suffix}`)
          )
        ),
      ],
    ],
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "20px"]
  )();
};
