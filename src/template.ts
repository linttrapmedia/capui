import { HTML, useAttribute, useClassName, useEvent, useInnerHTML, useStyle, useTextContent } from "@linttrap/oem";
import { colorPickerState, pageState, propertiesState, tokensState } from "./state";

export const html = HTML({
  "innerHTML:pages": useInnerHTML({ state: pageState }),
  "innerHTML:properties": useInnerHTML({ state: propertiesState }),
  "innerHTML:colorPicker": useInnerHTML({ state: colorPickerState }),
  "innerHTML:static": useInnerHTML(),
  "innerText:pages": useTextContent({ state: pageState }),
  "innerHTML:tokens": useInnerHTML({ state: tokensState }),
  "style:tokens": useStyle({ state: tokensState }),
  // "attr:dialog": useAttribute({ state: dialog }),
  // "innerHTML:dialog": useInnerHTML({ state: dialog }),
  // "innerText:dialog": useTextContent({ state: dialog }),
  // "tokens:innerHTML": useInnerHTML({ state: tokens }),
  // "style:mouseout": useStyle({ event: "mouseout" }),
  // "style:mouseover": useStyle({ event: "mouseover" }),
  // "tokenDialog:attr": useAttribute({ state: tokenDialog }),
  // "tokenDialog:innerHTML": useInnerHTML({ state: tokenDialog }),
  attr: useAttribute(),
  class: useClassName(),
  click: useEvent("click"),
  input: useEvent("input"),
  style: useStyle(),
});
