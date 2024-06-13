import { HTML, useAttribute, useClassName, useEvent, useInnerHTML, useStyle, useTextContent } from "@linttrap/oem";
import { colorPickerState, pageState, propertiesState, themeState, themesState } from "./state";

export const html = HTML({
  "innerHTML:colorPicker": useInnerHTML({ state: colorPickerState }),
  "innerHTML:pages": useInnerHTML({ state: pageState }),
  "innerHTML:properties": useInnerHTML({ state: propertiesState }),
  "innerHTML:themes": useInnerHTML({ state: themesState }),
  "innerHTML:theme": useInnerHTML({ state: themeState }),
  "innerText:pages": useTextContent({ state: pageState }),
  "style:themes": useStyle({ state: themesState }),
  attr: useAttribute(),
  change: useEvent("change"),
  class: useClassName(),
  click: useEvent("click"),
  innerHTML: useInnerHTML(),
  input: useEvent("input"),
  style: useStyle(),
});
