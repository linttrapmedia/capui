export const gridStyleSheet = new CSSStyleSheet();

export const renderGridStyleSheet = () =>
  gridStyleSheet.replaceSync(`.grid {
  --desktop-columns: 12;
  --desktop-max-col-width: 6ch;
  --desktop-col-gap: 2ch;
  --mobile-col-gap: 2ch;
  --desktop-row-gap: 2ch;
  --mobile-row-gap: 1ch;
  --mobile-columns: 6;
  --mobile-max-col-width: 1fr;

  display: grid;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  box-sizing: border-box;
  grid-template-rows: max-content;
}

.grid__item {
  --mobile-align-items: start;
  --mobile-justify-items: start;
  --mobile-row-start: auto;
  --mobile-row-end: auto;
  --desktop-align-items: center;
  --desktop-justify-items: start;
  --desktop-row-start: auto;
  --desktop-row-end: auto;

  display: flex;
  box-sizing: border-box;
}

@media screen and (min-width: 0px) and (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(var(--mobile-columns),1fr);
    column-gap: var(--mobile-col-gap);
    row-gap: var(--mobile-row-gap);
  }
  .grid__item {
    align-items: var(--mobile-align-items);
    justify-items: var(--mobile-justify-items);
  }
  .grid__item--row-start-var {
    grid-row-start: var(--mobile-row-start);
  }
  .grid__item--row-end-var {
    grid-row-end: var(--mobile-row-end);
  }
  .grid__item--col-start-var {
    grid-column-start: var(--mobile-col-start);
  }
  .grid__item--col-end-var {
    grid-column-end: var(--mobile-col-end);
  }
}

@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(var(--desktop-columns),1fr);
    column-gap: var(--desktop-col-gap);
    row-gap: var(--desktop-row-gap);
  }
  .grid__item--row-start-var {
    grid-row-start: var(--desktop-row-start);
  }
  .grid__item--row-end-var {
    grid-row-end: var(--desktop-row-end);
  }
  .grid__item--col-start-var {
    grid-column-start: var(--desktop-col-start);
  }
  .grid__item--col-end-var {
    grid-column-end: var(--desktop-col-end);
  }
}
`);
