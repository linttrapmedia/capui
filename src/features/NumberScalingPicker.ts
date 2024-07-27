import { HTML, SVG, State, useAttribute, useEvent, useInnerHTML, useStyle, useTextContent } from "@linttrap/oem";
import { useColumn, useRow } from "../traits/traits";
import { scaleNumbers } from "../util/helpers";

type NumberScalingPickerProps = {
  xLabel: string;
  yLabel: string;
  range: number;
  startValue: number;
  endValue: number;
  curve: number;
  lean: number;
  scale?: number[];
};

export const NumberScalingPicker = (props: NumberScalingPickerProps) => {
  const state = State<NumberScalingPickerProps>({
    ...props,
    scale: scaleNumbers(props.range, props.startValue, props.endValue, props.curve, props.lean),
  });

  state.sub(console.log);

  const html = HTML({
    attr: useAttribute({ state }),
    column: useColumn,
    row: useRow,
    text: useTextContent({ state }),
    input: useEvent({ event: "input" }),
    svg: useInnerHTML({ state }),
  });

  const svg = SVG({
    attr: useAttribute({ state }),
    style: useStyle(),
    html: useInnerHTML({ state }),
  });

  const handleCurveInput = (e: any) => {
    const _curr = state.get();
    state.set({
      ...state.get(),
      curve: parseFloat(e.target.value),
      scale: scaleNumbers(_curr.range, _curr.startValue, _curr.endValue, parseFloat(e.target.value), _curr.lean),
    });
  };

  const handleLeanInput = (e: any) => {
    const _curr = state.get();
    state.set({
      ...state.get(),
      lean: parseFloat(e.target.value),
      scale: scaleNumbers(_curr.range, _curr.startValue, _curr.endValue, _curr.curve, parseFloat(e.target.value)),
    });
  };

  const getWidth = () => state.get().endValue - state.get().startValue;
  const getHeight = () => state.get().endValue - state.get().startValue;

  return html.div(["column", "20px", "flex-start", "flex-start"])(
    html.div([
      "svg",
      () =>
        svg.svg(
          ["attr", "width", "100px"],
          ["attr", "height", "100px"],
          ["style", "borderRadius", "5px"],
          ["attr", "viewBox", `0 0 ${getWidth()} ${getHeight()}`]
        )(
          svg.rect(["attr", "width", "100px"], ["attr", "height", "100px"])(),
          ...state
            .get()
            .scale!.map((s, i) =>
              svg.circle(["attr", "cx", i], ["attr", "cy", s], ["attr", "r", 0.3], ["attr", "fill", "white"])()
            )
        ),
    ])(),
    html.div(["row", "20px"])(
      html.label()(props.xLabel),
      html.input(
        ["attr", "type", "range"],
        ["attr", "min", state.get().startValue],
        ["attr", "max", state.get().endValue],
        ["attr", "step", state.get().endValue / state.get().range],
        ["attr", "value", (s) => s.curve],
        ["input", handleCurveInput]
      )(),
      html.div(["text", (s) => s.curve])()
    ),
    html.div(["row", "20px"])(
      html.label()(props.yLabel),
      html.input(
        ["attr", "type", "range"],
        ["attr", "min", state.get().startValue],
        ["attr", "max", state.get().endValue],
        ["attr", "step", state.get().endValue / state.get().range],
        ["attr", "value", (s) => s.lean],
        ["input", handleLeanInput]
      )(),
      html.div(["text", (s) => s.lean])()
    )
  );
};
