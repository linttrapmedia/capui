import { HTML, useAttribute, useClassName, useEvent, useInnerHTML, useStyle, useTextContent } from "@linttrap/oem";
import { pageState } from "./state";

export const html = HTML({
  "innerHTML:pages": useInnerHTML({ state: pageState }),
  "innerHTML:static": useInnerHTML(),
  "innerText:pages": useTextContent({ state: pageState }),
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
  style: useStyle(),
});
