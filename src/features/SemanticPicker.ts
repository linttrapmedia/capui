import { HTML, State, useAttribute, useClassName, useEvent, useStyle, useTextContent } from "@linttrap/oem";
import { theme } from "../data/themes/Theme";
import { SemanticKeys, Theme } from "../data/themes/typings";
import { useColumn, useRow } from "../traits";
import { getContrastTextColor } from "../util/helpers";

const state = State<Theme["globals"]["semantic"]>(theme.get().globals.semantic);
const currentPickerSemanticKey = State<SemanticKeys>("background");

const tmpl = HTML({
  attr: useAttribute({ state: state }),
  class: useClassName({ state: state }),
  style: useStyle({ state: state }),
  column: useColumn,
  row: useRow,
  click: useEvent({ event: "click" }),
  change: useEvent({ event: "change" }),
  input: useEvent({ event: "input" }),
  text: useTextContent({ state: state }),
});

export const SemanticPicker = (semanticKey: SemanticKeys) => {
  const refColor = theme.get().globals.palette[theme.get().globals.semantic[semanticKey]][500];
  const getContrast = () => getContrastTextColor(refColor);

  return tmpl.div(
    ["column", "0px", "flex-start", "center", "100%"],
    ["style", "position", "relative"],
    ["style", "backgroundColor", `var(--${semanticKey}-500)`],
    ["style", "borderRadius", "8px"],
    ["text", () => `--${semanticKey}-500`],
    ["style", "color", getContrast],
    ["style", "fontSize", "1.25ch"],
    ["style", "padding", "20px"]
  )();
};

export const SemanticPickers = () => {
  return tmpl.div(
    ["class", "grid"],
    ["style", "--mobile-columns", 1],
    ["style", "--desktop-columns", 3]
  )(
    ...Object.entries(theme.get().globals.semantic).map(([key, value]: [any, any]) =>
      tmpl.div(["class", "grid__item"], ["column", "10px", "flex-start"])(SemanticPicker(key))
    )
  );
};
