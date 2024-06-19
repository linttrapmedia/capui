import { HTML, useAttribute, useClassName, useEvent, useInnerHTML, useStyle, useTextContent } from "@linttrap/oem";
import { colorPickerState, pageState, propertiesState, themeState, themesState, tokensEnabledState } from "./state";

export function useSVGImage() {
  return (el: HTMLElement, path: string) =>
    fetch(path)
      .then((response) => response.text())
      .then((text) => (el.innerHTML = text));
}

export const html = HTML({
  "attr:tokensEnabled": useAttribute({ state: tokensEnabledState }),
  "click:tokensEnabled": useEvent({ event: "click", state: tokensEnabledState }),
  "innerHTML:colorPicker": useInnerHTML({ state: colorPickerState }),
  "innerHTML:pages": useInnerHTML({ state: pageState }),
  "innerHTML:properties": useInnerHTML({ state: propertiesState }),
  "innerHTML:themes": useInnerHTML({ state: themesState }),
  "innerHTML:theme": useInnerHTML({ state: themeState }),
  "innerText:pages": useTextContent({ state: pageState }),
  "style:themes": useStyle({ state: themesState }),
  "svg:load": useSVGImage(),
  "text:tokensEnabled": useTextContent({ state: tokensEnabledState }),
  attr: useAttribute(),
  change: useEvent({ event: "change" }),
  class: useClassName(),
  click: useEvent({ event: "click" }),
  innerHTML: useInnerHTML(),
  input: useEvent({ event: "input" }),
  style: useStyle(),
  column: (
    el: HTMLElement,
    gap: string = "0px",
    alignItems: CSSStyleDeclaration["alignItems"] = "center",
    justifyContent: CSSStyleDeclaration["justifyContent"] = "center"
  ) => (
    (el.style.display = "flex"),
    (el.style.gap = gap),
    (el.style.flexDirection = "column"),
    (el.style.alignItems = alignItems),
    (el.style.justifyContent = justifyContent),
    (el.style.width = "100%")
  ),
  row: (
    el: HTMLElement,
    gap: string = "0px",
    alignItems: CSSStyleDeclaration["alignItems"] = "center",
    justifyContent: CSSStyleDeclaration["justifyContent"] = "center"
  ) => (
    (el.style.display = "flex"),
    (el.style.gap = gap),
    (el.style.flexDirection = "row"),
    (el.style.alignItems = alignItems),
    (el.style.justifyContent = justifyContent),
    (el.style.width = "100%")
  ),
});
