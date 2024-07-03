import { HTML, State, useAttribute, useClassName, useEvent, useStyle, useTextContent } from "@linttrap/oem";
import { theme, themeList } from "../data/themes/Theme";
import { PaletteKeys, PaletteScaleKey, Theme } from "../data/themes/typings";
import { fsm } from "../fsm";
import { useColumn, useRow } from "../traits";
import { getContrastTextColor } from "../util/helpers";

const state = State<Theme["globals"]["palette"]>(theme.get().globals.palette);
const currentPickerScaleKey = State<PaletteScaleKey>("500");

const tmpl = HTML({
  attr: useAttribute({ state: state }),
  class: useClassName({ state: state }),
  style: useStyle({ state: state }),
  column: useColumn,
  row: useRow,
  click: useEvent({ event: "click" }),
  change: useEvent({ event: "change" }),
  input: useEvent({ event: "input" }),
  "style:scalekey": useStyle({ state: currentPickerScaleKey }),
  "text:scalekey": useTextContent({ state: currentPickerScaleKey }),
});

export const PalettePicker = (paletteKey: PaletteKeys) => {
  const color = theme.get().globals.palette[paletteKey];
  const token = `--${paletteKey}-${currentPickerScaleKey.get()}` as any;
  const getColor = () => state.get()[paletteKey][currentPickerScaleKey.get()];
  const getContrast = () => getContrastTextColor(color[currentPickerScaleKey.get()]);
  const handleInput = (e?: Event) => {
    const target = e!.target as HTMLInputElement;
    const value = target.value;
    const newState = {
      ...state.get(),
      [paletteKey]: { ...state.get()[paletteKey], [currentPickerScaleKey.get()]: value },
    };
    state.set(newState);
  };

  const handleChange = (e?: Event) => {
    const target = e!.target as HTMLInputElement;
    const value = target.value;
    theme.deepSet(`globals.palette.${paletteKey}.${currentPickerScaleKey.get()}`, value);
    themeList.set({ ...themeList.get(), [theme.get().name]: theme.get() });
    fsm({ action: "RENDER_ALL_STYLESHEETS" });
  };

  return tmpl.div(
    ["column", "0px", "center", "center", "100%"],
    ["style", "position", "relative"],
    ["style", "border", `3px solid var(--${paletteKey}-500)`],
    ["style", "borderRadius", "8px"]
  )(
    tmpl.label(
      ["row", "20px", "center", "space-between", "100%"],
      ["style:scalekey", token, getColor],
      ["style", token, getColor],
      ["style", "padding", "20px"],
      ["style", "width", "100%"],
      ["style", "borderTopLeftRadius", "5px"],
      ["style", "borderTopRightRadius", "5px"],
      ["style", "backgroundColor", `var(--${paletteKey}-${currentPickerScaleKey.get()})`],
      ["style", "fontSize", "1.25ch"],
      ["style", "color", getContrast],
      ["style:scalekey", "color", getContrast],
      ["attr", "for", paletteKey]
    )(
      tmpl.span(["text:scalekey", () => `--${paletteKey}-${currentPickerScaleKey.get()}`])(),
      tmpl.span(["text:scalekey", getColor])()
    ),
    tmpl.div(["row", "0px", "center", "center", "100%"])(
      ...Object.entries(color).map(([num, color]) =>
        tmpl.label(
          ["style", `--${paletteKey}-${num}`, () => (state.get()[paletteKey] as any)[num]],
          ["style", "padding", "10px 5px"],
          ["style", "width", "100%"],
          ["style", "borderBottomLeftRadius", "5px", () => num === "100"],
          ["style", "borderBottomRightRadius", "5px", () => num === "900"],
          ["style", "backgroundColor", `var(--${paletteKey}-${num})`],
          ["style", "display", "flex"],
          ["style", "justifyContent", "center"],
          ["style", "alignItems", "center"],
          ["style", "fontSize", "0.75ch"],
          ["style", "color", getContrastTextColor(color)],
          ["attr", "for", `${paletteKey}-${num}`],
          ["style", "position", "relative"],
          ["click", () => currentPickerScaleKey.set(num as any)]
        )(num)
      )
    ),
    tmpl.input(
      ["attr", "type", "color"],
      ["attr", "id", paletteKey],
      ["style", "visibility", "hidden"],
      ["attr", "value", () => state.get()[paletteKey][currentPickerScaleKey.get()]],
      ["input", handleInput],
      ["change", handleChange],
      ["style", "position", "absolute"],
      ["style", "top", "0"],
      ["style", "left", "0"],
      ["style", "width", "100%"],
      ["style", "height", "100%"]
    )()
  );
};

export const PalettePickers = () => {
  return tmpl.div(
    ["class", "grid"],
    ["style", "--mobile-columns", 1],
    ["style", "--desktop-columns", 3]
  )(
    ...Object.entries(theme.get().globals.palette).map(([key, value]: [any, any]) =>
      tmpl.div(["class", "grid__item"], ["column", "10px", "flex-start"])(PalettePicker(key))
    )
  );
};
