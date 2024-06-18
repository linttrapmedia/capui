export const dropdownStyleSheet = new CSSStyleSheet();

export const syncDropdownStyleSheet = () => {
  const params = `
  .dropdown {
    --dropdown-arrow-size-medium: 6px;
    --dropdown-arrow-size-small: 6px;
    --dropdown-bg-color: var(--token-color-passive-contrast, white);
    --dropdown-bg-color-hover: var(--token-color-passive, black);
    --dropdown-border-color: var(--token-color-passive, black);
    --dropdown-border-width: 2px;
    --dropdown-border-radius: 4px;
    --dropdown-padding-medium: 8px 15px;
    --dropdown-padding-small: 4px 8px;
    --dropdown-text-color: var(--token-color-passive, black);
    --dropdown-text-color-hover: var(--token-color, white);
    --dropdown-text-size-small: 12px;
    --dropdown-text-size: 16px;
    --dropdown-text-weight: bold;
  }`;

  return dropdownStyleSheet.replaceSync(`
    ${params}

    .dropdown {
        background-image: linear-gradient(45deg, transparent 50%, var(--dropdown-text-color) 50%), linear-gradient(135deg, var(--dropdown-text-color) 50%, transparent 50%);
        background-position: calc(100% - calc(var(--dropdown-arrow-size-medium) * 3)) center, calc(100% - calc(var(--dropdown-arrow-size-medium) * 2)) center;
        background-size: var(--dropdown-arrow-size-medium) var(--dropdown-arrow-size-medium), var(--dropdown-arrow-size-medium) var(--dropdown-arrow-size-medium); /* Adjusted size */
        background-repeat: no-repeat;
        appearance: none;
        background-color: var(--dropdown-bg-color);
        border-radius: var(--dropdown-border-radius);
        border: var(--dropdown-border-width) solid var(--dropdown-text-color);
        color: var(--dropdown-text-color);
        cursor: pointer;
        display: block;
        font-size: var(--dropdown-text-size);
        font-weight: var(--dropdown-text-weight);
        line-height: 1.25;
        padding: var(--dropdown-padding-medium);
        position: relative;
        width: 100%;
    }

    .dropdown[disabled] {
        cursor: not-allowed;
        opacity: 0.35;
    }

    .dropdown:hover {
        background-image: linear-gradient(45deg, transparent 50%, var(--dropdown-text-color-hover) 50%), linear-gradient(135deg, var(--dropdown-text-color-hover) 50%, transparent 50%);
        background-color: var(--dropdown-bg-color-hover);
        color: var(--dropdown-text-color-hover);
    }

    .dropdown option {
        color: var(--dropdown-text-color);
        background-color: var(--dropdown-bg-color);
    }

    .dropdown--small {
        font-size: var(--dropdown-text-size-small);
        padding: var(--dropdown-padding-small);
        background-position: calc(100% - calc(var(--dropdown-arrow-size-small) * 3)) center, calc(100% - calc(var(--dropdown-arrow-size-small) * 2)) center;
        background-size: var(--dropdown-arrow-size-small) var(--dropdown-arrow-size-small), var(--dropdown-arrow-size-small) var(--dropdown-arrow-size-small); /* Adjusted size */
    }

`);
};
