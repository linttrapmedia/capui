export function getStylesheetContents(sheet: CSSStyleSheet): string {
  let cssText = "";
  const rulesArray = Array.from(sheet.cssRules);
  for (let rule of rulesArray) {
    cssText += rule.cssText + "\n";
  }
  return cssText;
}
