export const buttonStyleSheet = new CSSStyleSheet();

export const renderButtonStyleSheet = () =>
  buttonStyleSheet.replaceSync(`
    .button {
      align-items: center;
      background-color: var(--background-600, black);
      border-radius: var(--border-radius);
      border-width: 0;
      box-shadow: inset 0 0 0 var(--border-width) var(--border-color);
      box-sizing: border-box;
      color: var(--text-500, white);
      cursor: var(--cursor, pointer);
      display: flex;
      font-family: var(--font-family);
      font-size: var(--input-font-size, 15px);
      font-weight: bold;
      line-height: var(--input-line-height, 30px);
      gap: var(--gap);
      padding: 0 20px;
      text-align: center;
      text-wrap: nowrap;
    }

`);
