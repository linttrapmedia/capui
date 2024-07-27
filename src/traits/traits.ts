export const useColumn = (
  el: HTMLElement,
  gap: string = "0px",
  alignItems: CSSStyleDeclaration["alignItems"] = "center",
  justifyContent: CSSStyleDeclaration["justifyContent"] = "center",
  width: string = "auto"
) => (
  (el.style.display = "flex"),
  (el.style.gap = gap),
  (el.style.flexDirection = "column"),
  (el.style.alignItems = alignItems),
  (el.style.justifyContent = justifyContent),
  (el.style.width = width)
);

export const useRow = (
  el: HTMLElement,
  gap: string = "0px",
  alignItems: CSSStyleDeclaration["alignItems"] = "center",
  justifyContent: CSSStyleDeclaration["justifyContent"] = "center",
  width: string = "auto"
) => (
  (el.style.display = "flex"),
  (el.style.gap = gap),
  (el.style.flexDirection = "row"),
  (el.style.alignItems = alignItems),
  (el.style.justifyContent = justifyContent),
  (el.style.width = width)
);
