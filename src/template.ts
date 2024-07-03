import { HTML, useAttribute, useClassName, useEvent, useInnerHTML, useStyle } from "@linttrap/oem";
import { theme } from "./data/themes/Theme";
import { useColumn, useRow } from "./traits";
// import { colorPickerState, pageState, propertiesState, themeState, themesState, tokensEnabledState } from "./state";

export function useSVGImage() {
  return (el: HTMLElement, path: string) =>
    fetch(path)
      .then((response) => response.text())
      .then((text) => (el.innerHTML = text));
}

export const html = HTML({
  // "attr:tokensEnabled": useAttribute({ state: tokensEnabledState }),
  // "click:tokensEnabled": useEvent({ event: "click", state: tokensEnabledState }),
  // "innerHTML:colorPicker": useInnerHTML({ state: colorPickerState }),
  // "innerHTML:pages": useInnerHTML({ state: pageState }),
  // "innerHTML:properties": useInnerHTML({ state: propertiesState }),
  // "innerHTML:themes": useInnerHTML({ state: themesState }),
  "innerHTML:theme": useInnerHTML({ state: theme }),
  // "innerText:pages": useTextContent({ state: pageState }),
  // "style:themes": useStyle({ state: themesState }),
  // "svg:load": useSVGImage(),
  // "text:tokensEnabled": useTextContent({ state: tokensEnabledState }),
  "style:theme": useStyle({ state: theme }),
  "attr:theme": useAttribute({ state: theme }),
  attr: useAttribute(),
  change: useEvent({ event: "change" }),
  class: useClassName(),
  click: useEvent({ event: "click" }),
  innerHTML: useInnerHTML(),
  input: useEvent({ event: "input" }),
  style: useStyle(),
  "style:mobile": useStyle({ mediaMinWidth: 0 }),
  "style:tablet": useStyle({ mediaMinWidth: 768 }),
  "style:mouseover": useStyle({ event: "mouseover" }),
  "style:mouseout": useStyle({ event: "mouseout" }),
  column: useColumn,
  row: useRow,
});
