export const flexpaneStyleSheet = new CSSStyleSheet();

export const syncFlexpaneStyleSheet = () =>
  flexpaneStyleSheet.replaceSync(`:root {

}

.flexpane {

  /* Defaults */
  &.flexpane__header {}
  &.flexpane__header__title {}
  &.flexpane__body {}
  &.flexpane__footer {}

  /* Modes */
  .flexpane--alert {

    /* Structure */
    &.flexpane__header {}
    &.flexpane__header__title {}
    &.flexpane__body {}
    &.flexpane__footer {}

    /* Colors */
    &.flexpane--dark {
      &.flexpane__header {}
      &.flexpane__header__title {}
      &.flexpane__body {}
      &.flexpane__footer {}
    }

    .flexpane--light {}
    .flexpane--success {}
    .flexpane--warning {}
    .flexpane--error {}
    .flexpane--info {}

    /* Variants */
    .flexpane--outline {
      &.flexpane__header {}
      &.flexpane__header__title {}
      &.flexpane__body {}
      &.flexpane__footer {}
    }
    .flexpane--ghost {}

  }
  .flexpane--toast {}
  .flexpane--modal {}
  .flexpane--drawer {}
  .flexpane--sidebar {}
  .flexpane--popover {}
  .flexpane--card {}
  .flexpane--dialog {}
}



/* States */
.flexpane--loading {}
.flexpane--disabled {}`);
