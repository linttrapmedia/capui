export const flexboxStylesheet = new CSSStyleSheet();

export const renderFlexboxStyles = () =>
  flexboxStylesheet.replaceSync(`.flexbox {
  --desktop-direction: row;
  --desktop-wrap: wrap;
  --desktop-justify: flex-start;
  --desktop-align: stretch;
  --desktop-content: stretch;
  --desktop-gap: 0px;
  --mobile-direction: row;
  --mobile-wrap: wrap;
  --mobile-justify: flex-start;
  --mobile-align: stretch;
  --mobile-content: stretch;
  --mobile-gap: 0px;

  display: flex;
  flex-direction: var(--desktop-direction);
  flex-wrap: var(--desktop-wrap);
  justify-content: var(--desktop-justify);
  align-items: var(--desktop-align);
  align-content: var(--desktop-content);
  gap: var(--desktop-gap);

}

@media screen and (min-width: 0px) and (max-width: 767px) {
  .flexbox {
    flex-direction: var(--mobile-direction);
    flex-wrap: var(--mobile-wrap);
    justify-content: var(--mobile-justify);
    align-items: var(--mobile-align);
    align-content: var(--mobile-content);
    gap: var(--mobile-gap);
  }
  
}

@media screen and (min-width: 768px) {
  .flexbox {
    flex-direction: var(--desktop-direction);
    flex-wrap: var(--desktop-wrap);
    justify-content: var(--desktop-justify);
    align-items: var(--desktop-align);
    align-content: var(--desktop-content);
    gap: var(--desktop-gap);
  }
}
`);
