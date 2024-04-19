document.addEventListener("DOMContentLoaded", () => {
  const styleSheet = new CSSStyleSheet();
  document.adoptedStyleSheets = [styleSheet];
  styleSheet.insertRule(
    `.button { 
        --button-color: var(--button-color, #fff);
        --button-background-color: gray;
        --button-border-color: var(--button-border-color, #2980b9);
        background-color: var(--button-background-color);
        border: none; 
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }`
  );
});
