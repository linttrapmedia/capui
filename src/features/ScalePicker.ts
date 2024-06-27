import { HTML, SVG, useAttribute, useClassName, useInnerHTML, useStyle } from "@linttrap/oem";
import { useColumn } from "../traits";
import { generateBezierCurve } from "../util/helpers";

const svg = SVG({
  attr: useAttribute(),
  style: useStyle(),
  html: useInnerHTML(),
});

const html = HTML({
  attr: useAttribute(),
  class: useClassName(),
  html: useInnerHTML(),
  style: useStyle(),
  column: useColumn,
});

export const BezierPlotter = (size: number = 100, curvature: number = 0, steps: number = 50) => {
  const coordinates = generateBezierCurve(size, curvature, steps);
  const padFactor = 0.4;
  const pad = size * padFactor;
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
  return html.div(
    ["column", "20px"],
    [
      "html",
      () => [
        svg.svg(
          ["attr", "height", "100px"],
          ["attr", "stroke-width", (size * padFactor) / 4],
          ["attr", "viewBox", `0 0 ${size + pad} ${size + pad}`],
          ["attr", "width", "100px"],
          ["style", "borderRadius", "5px"],
          ["style", "fill", "transparent"],
          ["style", "stroke", "var(--black-500)"]
        )(
          svg.rect(["attr", "width", 100 + pad], ["attr", "height", 100 + pad])(),
          // curved path for coordinates
          svg.path(
            ["attr", "d", d],
            ["attr", "fill", "none"],
            ["attr", "stroke-linecap", "round"],
            ["attr", "stroke-width", (size * padFactor) / 8],
            ["attr", "stroke", "var(--black-500)"]
          )()
        ),
        html.input(
          ["attr", "type", "range"],
          ["attr", "min", "-1"],
          ["attr", "max", "1"],
          ["attr", "step", "0.01"],
          ["attr", "value", 0],
          ["class", "slider"]
        )(),
      ],
    ]
  )();
};
