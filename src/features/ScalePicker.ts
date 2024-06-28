import { HTML, SVG, State, useAttribute, useClassName, useEvent, useInnerHTML, useStyle } from "@linttrap/oem";
import { useColumn } from "../traits";
import { generateBezierCurve } from "../util/helpers";

type BezierPlotterProps = {
  size: number;
  curvature: number;
  steps: number;
  d: string;
  name: string;
};

export const BezierPlotter = (props: BezierPlotterProps) => {
  const state = State<BezierPlotterProps>(props, {
    key: props.name,
    storage: sessionStorage,
  });

  const svg = SVG({
    attr: useAttribute({ state }),
    style: useStyle(),
    html: useInnerHTML(),
  });

  const html = HTML({
    attr: useAttribute(),
    class: useClassName(),
    html: useInnerHTML(),
    style: useStyle(),
    column: useColumn,
    change: useEvent({ event: "input" }),
  });
  const padFactor = 0.4;

  const calcD = () => {
    const { size, curvature, steps } = state.get();
    const coordinates = generateBezierCurve(size, curvature, steps);
    const points = coordinates.map((p) => ({ x: p.x + (size * padFactor) / 2, y: p.y + (size * padFactor) / 2 }));
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length - 1; i++) {
      const cp = {
        x: (points[i].x + points[i + 1].x) / 2,
        y: (points[i].y + points[i + 1].y) / 2,
      };
      d += ` Q ${points[i].x} ${points[i].y} ${cp.x} ${cp.y}`;
    }
    d += ` T ${points[points.length - 1].x} ${points[points.length - 1].y}`;
    return d;
  };

  return html.div(
    ["column", "20px"],
    [
      "html",
      () => [
        svg.svg(
          ["attr", "height", "100px"],
          ["attr", "stroke-width", (state.get().size * padFactor) / 4],
          [
            "attr",
            "viewBox",
            `0 0 ${state.get().size + state.get().size * padFactor} ${state.get().size + state.get().size * padFactor}`,
          ],
          ["attr", "width", "100px"],
          ["style", "borderRadius", "5px"],
          ["style", "fill", "transparent"],
          ["style", "stroke", "var(--black-500)"]
        )(
          svg.rect(
            ["attr", "width", 100 + state.get().size * padFactor],
            ["attr", "height", 100 + state.get().size * padFactor]
          )(),
          // curved path for coordinates
          svg.path(
            ["attr", "d", () => state.get().d || calcD()],
            ["attr", "fill", "none"],
            ["attr", "stroke-linecap", "round"],
            ["attr", "stroke-width", (state.get().size * padFactor) / 8],
            ["attr", "stroke", "var(--black-500)"]
          )()
        ),
        html.input(
          ["attr", "type", "range"],
          ["attr", "min", "-1"],
          ["attr", "max", "1"],
          ["attr", "step", "0.01"],
          ["attr", "value", state.get().curvature],
          ["class", "slider"],
          [
            "change",
            (e) => {
              const curvature = parseFloat((e!.target as any).value);
              const d = calcD();
              state.set({ ...state.get(), curvature, d });
            },
          ]
        )(),
      ],
    ]
  )();
};
