import { HTML, State, useAttribute, useClassName, useEvent, useStyle, useTextContent } from "@linttrap/oem";
import { theme, themeList } from "../data/themes/Theme";
import { SemanticKeys, Theme } from "../data/themes/typings";
import { fsm } from "../fsm";
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
  focus: useEvent({ event: "focus" }),
  blur: useEvent({ event: "blur" }),
  input: useEvent({ event: "input" }),
  text: useTextContent({ state: state }),
});

export const SemanticPicker = (semanticKey: SemanticKeys) => {
  const refColor = theme.get().globals.palette[theme.get().globals.semantic[semanticKey]][500];
  const getValue = () => theme.get().globals.semantic[semanticKey];
  const paletteKeys = Object.keys(theme.get().globals.palette);
  const getContrast = () => getContrastTextColor(refColor);

  return tmpl.label(
    ["row", "0px", "center", "space-between", "100%"],
    ["style", "backgroundColor", `var(--${semanticKey}-500)`],
    ["style", "borderRadius", "8px"],
    ["style", "borderWidth", "0px"],
    ["style", "fontSize", "1.25ch"],
    ["style", "fontWeight", "bold"],
    ["style", "padding", "20px"],
    ["style", "color", getContrast],
    ["style", "appearance", "none"],
    ["style", "position", "relative"],
    ["click", () => currentPickerSemanticKey.set(semanticKey)]
  )(
    tmpl.div(["text", () => `${semanticKey} → ${getValue()}`])(),
    tmpl.select(
      ["attr", "id", `select-${semanticKey}`],
      ["style", "cursor", "pointer"],
      ["style", "top", "0"],
      ["style", "left", "0"],
      ["style", "position", "absolute"],
      ["style", "width", "100%"],
      ["style", "height", "100%"],
      ["style", "opacity", "0"],
      [
        "change",
        (e) => {
          const target = e!.target as HTMLSelectElement;
          state.set({ ...state.get(), [semanticKey]: target.value });
          theme.deepSet(`globals.semantic.${semanticKey}`, target.value);
          themeList.set({ ...themeList.get(), [theme.get().name]: theme.get() });
          fsm({ action: "RENDER_ALL_STYLESHEETS" });
        },
      ]
    )(
      tmpl.optgroup(["attr", "label", "Palette Color"])(
        ...paletteKeys.map((v) => tmpl.option(["attr", "selected", () => v === getValue()])(v))
      )
    )
  );
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
