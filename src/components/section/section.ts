export const sectionStyleSheet = new CSSStyleSheet();

export const syncSectionStyleSheet = () =>
  sectionStyleSheet.replaceSync(`.section {
}

.section__header {
}

.section__header__title {
  font-size: 1.5em;
}


.section__subsection {
}

.section__subsection__title {
  font-size: 1.25em;
}

.section__header__description {
  font-size: 1em;
  opacity: 0.5;
}

.section__article {
}

.section__aside {
}

.section__figure {
}

.section__figure__figcaption {
}

.section__footer {
}
`);
