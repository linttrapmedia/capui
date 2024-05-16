import { HTML, useAttribute, useClassName, useEvent, useInnerHTML, useStyle, useTextContent } from "@linttrap/oem";
import { dialog, settings, tokenDialog } from "./state";

export const html = HTML({
  "attr:dialog": useAttribute({ state: dialog }),
  "innerHTML:dialog": useInnerHTML({ state: dialog }),
  "innerText:dialog": useTextContent({ state: dialog }),
  "settings:innerHTML": useInnerHTML({ state: settings }),
  "style:mouseout": useStyle({ event: "mouseout" }),
  "style:mouseover": useStyle({ event: "mouseover" }),
  "tokenDialog:attr": useAttribute({ state: tokenDialog }),
  "tokenDialog:innerHTML": useInnerHTML({ state: tokenDialog }),
  attr: useAttribute(),
  class: useClassName(),
  click: useEvent("click"),
  innerHTML: useInnerHTML(),
  style: useStyle(),
});
