(()=>{var D=new CSSStyleSheet,te=()=>D.replaceSync(`/* 
<div class="accordion accordion--dark">
    <div class="accordion__item">
      <input type="radio" name="accordion-group" id="ag1" hidden="" class="accordion__input">
      <label for="ag1" class="accordion__header">Item 1</label>
      <div class="accordion__body">Content for Item 1...</div>
    </div>
    ...
</div> 
*/

.accordion {
  --body-bg: inherit;
  --body-text-color: inherit;
  --border-color: inherit;
  --border-radius: 4px;
  --font-family: var(--token-font-sans, sans-serif);
  --font-size: 14px;
  --header-bg: inherit;
  --header-color: inherit;
  --header-hover-bg: inherit;
  --header-selected-bg: inherit;
  --spacing: 12px;
  --toggle-size: 6px;

  &.accordion--dark {
    --body-bg: var(--token-black-90, black);
    --body-text-color: var(--token-white, white);
    --border-color: var(--token-white-10, white);
    --border-radius: 4px;
    --font-family: var(--token-font-sans, sans-serif);
    --font-size: 14px;
    --header-bg: var(--token-black, black);
    --header-color: var(--token-white, white);
    --header-hover-bg: var(--token-black-90, black);
    --spacing: 12px;
    --toggle-size: 6px;
  }

  &.accordion--light {
    --body-bg: var(--token-white, white);
    --body-text-color: var(--token-black, black);
    --border-color: var(--token-black-10, black);
    --border-radius: 4px;
    --font-family: var(--token-font-sans, sans-serif);
    --font-size: 14px;
    --header-bg: var(--token-white-90, white);
    --header-color: var(--token-black, black);
    --header-hover-bg: var(--token-white-80, white);
    --spacing: 12px;
    --toggle-size: 6px;
  }

  width: 100%;
  font-family: var(--font-family);
  font-size: var(--font-size);

  .accordion__item {
    &:first-child .accordion__header {
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }

    &:last-child:not(:has(.accordion__input:checked)) .accordion__header {
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    &:last-child:has(.accordion__input:checked) .accordion__body {
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    .accordion__header {
      background-color: var(--header-bg);
      border-bottom: 1px solid var(--border-color);
      color: var(--header-color);
      cursor: pointer;
      display: block;
      font-weight: bold;
      padding: var(--spacing);
      position: relative;

      &:hover {
        background-color: var(--header-hover-bg);
        transition: all 200ms;
      }

      &::after {
        border-left: 2px solid var(--header-color);
        border-bottom: 2px solid var(--header-color);
        color: var(--header-text-color);
        content: "";
        display: flex;
        width: var(--toggle-size);
        height: var(--toggle-size);
        position: absolute;
        right: var(--spacing);
        top: calc(50% - var(--toggle-size) / 2 * 2);
        transform: rotate(-45deg);
      }
    }

    .accordion__input {
      display: none;

      &:checked + .accordion__header + .accordion__body {
        display: block;
      }
      &:checked + .accordion__header::after {
        transform: rotate(135deg);
        top: calc(50% - var(--toggle-size) / 2);
      }
    }

    .accordion__body {
      background-color: var(--body-bg);
      border-bottom: 1px solid var(--border-color);
      color: var(--body-text-color);
      padding: var(--spacing);
      font-size: var(--font-size);
      display: none;
    }
  }
}
`);var O=new CSSStyleSheet,ae=()=>O.replaceSync(`/* 
<label class="alert alert--[MODIFIERS]">
  <input type="checkbox" class="alert__toggle" />
  <div class="alert__close">\uFF0B</div>
  <div class="alert__title">Alert Title</div>
  <div class="alert__message">
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
    sunt a te dicta?
  </div>
</label> 
*/

/* Solid Alerts */
.alert {
  --bg: inherit;
  --bg-hover: inherit;
  --border-color: inherit;
  --border-color-hover: inherit;
  --border-radius: 4px;
  --border-style: solid;
  --border-width: 2px;
  --font-family: var(--token-font-sans, sans-serif);
  --font-size: 13px;
  --padding: 20px;
  --text-align: left;
  --text-color: inherit;
  --link-color: inherit;
  --link-color-hover: inherit;

  &.alert--dark {
    --bg: var(--token-black, black);
    --bg-hover: var(--token-black-80, black);
    --border-color: var(--token-black, black);
    --border-color-hover: var(--token-black-60, black);
    --text-color: var(--token-white, white);
    --link-color: var(--token-white, white);
    --link-color-hover: var(--token-white-60, white);
    &.alert--ghost {
      --bg: var(--token-black-20, black);
      --bg-hover: var(--token-black-40, black);
      --border-color: transparent;
      --border-color-hover: transparent;
      --text-color: var(--token-black, black);
      --link-color: var(--token-black, black);
      --link-color-hover: var(--token-black-60, black);
    }
    &.alert--outline {
      --bg: transparent;
      --bg-hover: var(--token-black-20, black);
      --border-color: var(--token-black, black);
      --text-color: var(--token-black, black);
      --link-color: var(--token-black, black);
      --link-color-hover: var(--token-black-60, black);
    }
  }

  &.alert--error {
    --bg: var(--token-red, red);
    --bg-hover: var(--token-red-80, red);
    --border-color: var(--token-red, red);
    --border-color-hover: var(--token-red-60, red);
    --text-color: var(--token-black, black);
    --link-color: var(--token-black, black);
    --link-color-hover: var(--token-black-60, black);
    &.alert--ghost {
      --bg: var(--token-red-10, red);
      --bg-hover: var(--token-red-20, red);
      --border-color: transparent;
      --border-color-hover: transparent;
      --text-color: var(--token-red, red);
      --link-color: var(--token-red, red);
      --link-color-hover: var(--token-red-60, red);
    }
    &.alert--outline {
      --bg: transparent;
      --bg-hover: var(--token-red-20, red);
      --border-color: var(--token-red, red);
      --text-color: var(--token-red, red);
      --link-color: var(--token-red, red);
      --link-color-hover: var(--token-red-60, red);
    }
  }

  &.alert--info {
    --bg: var(--token-blue, blue);
    --bg-hover: var(--token-blue-80, blue);
    --border-color: var(--token-blue, blue);
    --border-color-hover: var(--token-blue-60, blue);
    --text-color: var(--token-black, black);
    --link-color: var(--token-black, black);
    --link-color-hover: var(--token-black-60, black);
    &.alert--ghost {
      --bg: var(--token-blue-10, blue);
      --bg-hover: var(--token-blue-20, blue);
      --border-color: transparent;
      --border-color-hover: transparent;
      --text-color: var(--token-blue, blue);
      --link-color: var(--token-blue, blue);
      --link-color-hover: var(--token-blue-60, blue);
    }
    &.alert--outline {
      --bg: transparent;
      --bg-hover: var(--token-blue-20, blue);
      --border-color: var(--token-blue, blue);
      --text-color: var(--token-blue, blue);
      --link-color: var(--token-blue, blue);
      --link-color-hover: var(--token-blue-60, blue);
    }
  }

  &.alert--light {
    --bg: var(--token-white, white);
    --bg-hover: var(--token-white-80, white);
    --border-color: var(--token-white, white);
    --border-color-hover: var(--token-white-60, white);
    --text-color: var(--token-black, black);
    --link-color: var(--token-black, black);
    --link-color-hover: var(--token-black-60, black);
    &.alert--ghost {
      --bg: var(--token-white-10, white);
      --bg-hover: var(--token-white-20, white);
      --border-color: transparent;
      --border-color-hover: transparent;
      --text-color: var(--token-white, white);
      --link-color: var(--token-white, white);
      --link-color-hover: var(--token-white-60, white);
    }
    &.alert--outline {
      --bg: transparent;
      --bg-hover: var(--token-white-20, white);
      --border-color: var(--token-white, white);
      --text-color: var(--token-white, white);
      --link-color: var(--token-white, white);
      --link-color-hover: var(--token-white-60, white);
    }
  }

  &.alert--success {
    --bg: var(--token-green, green);
    --bg-hover: var(--token-green-80, green);
    --border-color: var(--token-green, green);
    --border-color-hover: var(--token-green-60, green);
    --text-color: var(--token-black, black);
    --link-color: var(--token-black, black);
    --link-color-hover: var(--token-black-60, black);
    &.alert--ghost {
      --bg: var(--token-green-10, green);
      --bg-hover: var(--token-green-20, green);
      --border-color: transparent;
      --border-color-hover: transparent;
      --text-color: var(--token-green, green);
      --link-color: var(--token-green, green);
      --link-color-hover: var(--token-green-60, green);
    }
    &.alert--outline {
      --bg: transparent;
      --bg-hover: var(--token-green-20, green);
      --border-color: var(--token-green, green);
      --text-color: var(--token-green, green);
      --link-color: var(--token-green, green);
      --link-color-hover: var(--token-green-60, green);
    }
  }

  &.alert--warning {
    --bg: var(--token-yellow, yellow);
    --bg-hover: var(--token-yellow-80, yellow);
    --border-color: var(--token-yellow, yellow);
    --border-color-hover: var(--token-yellow-60, yellow);
    --text-color: var(--token-black, black);
    --link-color: var(--token-black, black);
    --link-color-hover: var(--token-black-60, black);
    &.alert--ghost {
      --bg: var(--token-yellow-10, yellow);
      --bg-hover: var(--token-yellow-20, yellow);
      --border-color: transparent;
      --border-color-hover: transparent;
      --text-color: var(--token-yellow, yellow);
      --link-color: var(--token-yellow, yellow);
      --link-color-hover: var(--token-yellow-60, yellow);
    }
    &.alert--outline {
      --bg: transparent;
      --bg-hover: var(--token-yellow-20, yellow);
      --border-color: var(--token-yellow, yellow);
      --text-color: var(--token-yellow, yellow);
      --link-color: var(--token-yellow, yellow);
      --link-color-hover: var(--token-yellow-60, yellow);
    }
  }

  background-color: var(--bg);
  border-color: var(--border-color);
  border-width: var(--border-width);
  border-radius: var(--border-radius);
  border-style: var(--border-style);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: var(--font-family);
  gap: calc(var(--padding) / 2);
  overflow: hidden;
  padding: var(--padding);
  position: relative;
  text-align: var(--text-align, left);
  transition: all 0.3s;
  width: 100%;

  &:hover {
    background-color: var(--bg-hover);
    border-color: var(--border-color-hover);
  }

  .alert__title {
    font-size: var(--font-size);
    font-weight: bold;
    color: var(--text-color);
    margin-right: var(--padding);
  }

  .alert__message {
    font-size: var(--font-size);
    color: var(--text-color);
    a {
      color: var(--link-color);
      &:hover {
        color: var(--link-color-hover);
      }
    }
  }

  .alert__close {
    color: var(--text-color);
    cursor: pointer;
    transform: rotate(45deg);
    position: absolute;
    top: calc(var(--padding) / 2);
    right: calc(var(--padding) / 2);
    font-size: 20px;
  }

  .alert__toggle {
    display: none;
  }

  &:has(.alert__toggle:checked) {
    animation: alert-closing-animation 0.25s linear forwards;
  }
}

/* Animations */

@keyframes alert-closing-animation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    height: auto;
    padding: var(--padding-medium);
  }
  100% {
    opacity: 0;
    height: 0;
    padding: 0;
  }
}
`);var P=new CSSStyleSheet,ne=()=>P.replaceSync(`/* 
Usage:
<span class="badge badge-[MODIFIER]">Basic</badge>
*/

.badge {
  --bg: inherit;
  --text-color: inherit;
  --border-radius: 5px;
  --border-width: 2px;
  --border-color: inherit;
  --font-family: var(--token-font-sans, sans-serif);
  --font-size: 10px;
  --padding: 3px 6px;

  &.badge--dark {
    --bg: var(--token-black);
    --text-color: var(--token-white);
    &.badge--outline {
      --bg: transparent;
      --text-color: var(--token-black);
      --border-color: var(--token-black);
    }
  }
  &.badge--error {
    --bg: var(--token-red);
    --text-color: var(--token-black);
    &.badge--outline {
      --bg: transparent;
      --text-color: var(--token-red);
      --border-color: var(--token-red);
    }
  }
  &.badge--info {
    --bg: var(--token-blue);
    --text-color: var(--token-black);
    &.badge--outline {
      --bg: transparent;
      --text-color: var(--token-blue);
      --border-color: var(--token-blue);
    }
  }
  &.badge--light {
    --bg: var(--token-white);
    --text-color: var(--token-black);
    &.badge--outline {
      --bg: transparent;
      --text-color: var(--token-white);
      --border-color: var(--token-white);
    }
  }
  &.badge--success {
    --bg: var(--token-green);
    --text-color: var(--token-black);
    &.badge--outline {
      --bg: transparent;
      --text-color: var(--token-green);
      --border-color: var(--token-green);
    }
  }
  &.badge--warning {
    --bg: var(--token-yellow);
    --text-color: var(--token-black);
    &.badge--outline {
      --bg: transparent;
      --text-color: var(--token-yellow);
      --border-color: var(--token-yellow);
    }
  }
  &.badge--small {
    --font-size: 9px;
    --padding: 2px 4px;
  }
  &.badge--large {
    --font-size: 11px;
    --padding: 4px 8px;
  }

  background-color: var(--bg);
  border-radius: var(--border-radius);
  border: 0;
  box-shadow: inset 0 0 0 var(--border-width) var(--border-color);
  color: var(--text-color);
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: bold;
  min-width: 15px;
  outline: none;
  padding: var(--padding);
  position: relative;
  text-align: center;
  text-wrap: nowrap;
  transition: all 0.3s;
  user-select: none;
  vertical-align: middle;
  width: max-content;
}
`);var $=new CSSStyleSheet,le=()=>$.replaceSync("");var I=new CSSStyleSheet,ie=()=>I.replaceSync(`/* 
Usage:
<button class="button button-[MODIFIER]">Basic</button>
*/

.button {
  --animation: none;
  --bg-loading-color: var(--token-color-black, black);
  --bg-color: black;
  --bg-color-hover: var(--token-color-black, black);
  --bg-image: none;
  --bg-size: auto;
  --border-color: var(--token-color-black, black);
  --border-radius: 4px;
  --border-width: 2px;
  --box-shadow: none;
  --cursor: pointer;
  --display: inline-flex;
  --font-family: var(--token-font-sans, sans-serif);
  --font-size: 13px;
  --gap: 8px;
  --justify: center;
  --opacity: 1;
  --padding: 8px 15px;
  --pointer-events: auto;
  --width: max-content;

  /* Colors */

  &.button--dark {
    --bg-color: var(--token-color-black, black);
    --bg-color-hover: var(--token-color-black, black);
    --border-color: var(--token-color-black, black);
    --text-color: var(--token-color-white, white);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-color-black, black);
      --bg-color-hover: var(--token-color-black, black);
      --border-color: var(--token-color-black, black);
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-color-white, white);
      --border-color: var(--token-color-white, white);
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-color-black, black);
      --border-color: transparent;
      --text-color: var(--token-color-black, black);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-color-black, black);
        --bg-color-hover: var(--token-color-black-40, black);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-color-black, black);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-color-black, black);
      --border-color: --border-color: var(--token-color-black, black);
      --text-color: var(--token-color-black, black);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-color-black, black);
        --bg-color-hover: var(--token-color-black, black);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-color-black, black);
        --border-color: var(--token-color-black, black);
      }
    }
  }

  &.button--light {
    --bg-color: var(--token-color-white, white);
    --bg-color-hover: var(--token-color-white, white);
    --border-color: var(--token-color-white, white);
    --text-color: var(--token-color-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-color-white, white);
      --bg-color-hover: var(--token-color-white, white);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-color-black, black);
      --border-color: var(--token-color-black, black);
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-color-white, white);
      --border-color: transparent;
      --text-color: var(--token-color-white, white);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-color-white, white);
        --bg-color-hover: var(--token-color-white-40, white);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-color-white, white);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-color-white, white);
      --border-color: var(--token-color-white, black);
      --text-color: var(--token-color-white, black);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-color-white, white);
        --bg-color-hover: var(--token-color-white-40, white);
        --border-color: var(--token-color-white, black);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-color-white, white);
        --border-color: var(--token-color-black, black);
      }
    }
  }

  &.button--info {
    --bg-color: var(--token-blue, blue);
    --bg-color-hover: var(--token-blue, blue);
    --border-color: var(--token-blue, blue);
    --text-color: var(--token-color-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-blue, blue);
      --bg-color-hover: var(--token-blue, blue);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-color-black, black);
      --border-color: var(--token-color-black, black);
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-blue, blue);
      --border-color: transparent;
      --text-color: var(--token-blue, blue);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-blue, blue);
        --bg-color-hover: var(--token-blue-40, blue);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-blue, blue);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-blue, blue);
      --border-color: ;
      --text-color: var(--token-blue, blue);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-blue, blue);
        --bg-color-hover: var(--token-blue-40, blue);
        --border-color: var(--token-blue, blue);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-blue, blue);
        --border-color: transparent;
      }
    }
  }

  &.button--success {
    --bg-color: var(--token-green, green);
    --bg-color-hover: var(--token-green, green);
    --border-color: var(--token-green, green);
    --text-color: var(--token-color-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-green, green);
      --bg-color-hover: var(--token-green, green);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-color-black, black);
      --border-color: transparent;
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-green, green);
      --border-color: transparent;
      --text-color: var(--token-green, green);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-green, green);
        --bg-color-hover: var(--token-green-40, green);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-green, green);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-green, green);
      --border-color: ;
      --text-color: var(--token-green, green);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-green, green);
        --bg-color-hover: var(--token-green-40, green);
        --border-color: var(--token-green, green);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-green, green);
        --border-color: var(--token-green, green);
      }
    }
  }

  &.button--warning {
    --bg-color: var(--token-yellow, yellow);
    --bg-color-hover: var(--token-yellow, yellow);
    --border-color: var(--token-yellow, yellow);
    --text-color: var(--token-color-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-yellow, yellow);
      --bg-color-hover: var(--token-yellow, yellow);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-color-black, black);
      --border-color: transparent;
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-yellow, yellow);
      --border-color: transparent;
      --text-color: var(--token-yellow, yellow);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-yellow, yellow);
        --bg-color-hover: var(--token-yellow-40, yellow);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-yellow, yellow);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-yellow, yellow);
      --border-color: ;
      --text-color: var(--token-yellow, yellow);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-yellow, yellow);
        --bg-color-hover: var(--token-yellow-40, yellow);
        --border-color: var(--token-yellow, yellow);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-yellow, yellow);
        --border-color: var(--token-yellow, yellow);
      }
    }
  }

  &.button--error {
    --bg-color: var(--token-red, red);
    --bg-color-hover: var(--token-red, red);
    --border-color: var(--token-red, red);
    --text-color: var(--token-color-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-red, red);
      --bg-color-hover: var(--token-red, red);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-color-black, black);
      --border-color: transparent;
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-red, red);
      --border-color: transparent;
      --text-color: var(--token-red, red);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-red, red);
        --bg-color-hover: var(--token-red-40, red);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-red, red);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-red, red);
      --border-color: ;
      --text-color: var(--token-red, red);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-red, red);
        --bg-color-hover: var(--token-red-40, red);
        --border-color: var(--token-red, red);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-red, red);
        --border-color: var(--token-red, red);
      }
    }
  }

  /* Modifiers */
  &.button--block {
    --display: block;
    --width: 100%;
  }
  &.button--large {
    --font-size: 16px;
    --padding: 12px 20px;
    --gap: 12px;
  }
  &.button--small {
    --font-size: 12px;
    --padding: 6px 10px;
    --gap: 6px;
  }
  &.button--disabled {
    --pointer-events: none;
    --cursor: not-allowed;
  }
  &.button--loading {
    --bg-size: 200px 100%;
    --bg-image: repeating-linear-gradient(
      -45deg,
      var(--bg-loading-color, white),
      var(--bg-loading-color, white) 5px,
      transparent 5px,
      transparent 10px
    );
    --animation: button-loading-animation 2s linear infinite;
    --cursor: not-allowed;
    --pointer-events: none;
  }
  &.button--justify-start {
    --justify: flex-start;
  }

  /* border-color: var(--border-color); */
  align-items: center;
  animation: var(--animation);
  background-color: var(--bg-color);
  background-image: var(--bg-image);
  background-size: var(--bg-size);
  border-radius: var(--border-radius);
  border-width: 0;
  box-shadow: inset 0 0 0 var(--border-width) var(--border-color);
  box-sizing: border-box;
  clip-path: inset(0);
  color: var(--text-color, white);
  cursor: var(--cursor, pointer);
  display: inline-flex;
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: bold;
  gap: var(--gap);
  justify-content: var(--justify);
  opacity: var(--opacity);
  outline: none;
  overflow: hidden;
  padding: var(--padding);
  pointer-events: var(--pointer-events);
  position: relative;
  text-align: center;
  text-wrap: nowrap;
  transition: all 0.3s;
  user-select: none;
  vertical-align: middle;
  width: var(--width);
}

/* Animations */
@keyframes button-loading-animation {
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
`);var N=new CSSStyleSheet,de=()=>N.replaceSync(`.card {
  /* Settings */
  --card-bg-color: inherit;
  --card-font-family: inherit;
  --card-font-size: inherit;
  --card-text-color: inherit;
  --card-inner-border-color: inherit;
  --card-inner-border-width: inherit;
  --card-outer-border-color: inherit;
  --card-outer-border-radius: inherit;
  --card-outer-border-width: inherit;
  --card-spacing: inherit;
  --card-transition-duration: inherit;
  --card-transition-timing: inherit;

  &.card--small {
    --card-spacing: 10px;
    --card-font-size: 14px;
    --card-outer-border-radius: 4px;
    --card-outer-border-width: 1px;
    --card-inner-border-width: 0px;
  }

  &.card--medium {
    --card-spacing: 15px;
    --card-font-size: 16px;
    --card-outer-border-radius: 8px;
    --card-outer-border-width: 2px;
    --card-inner-border-width: 1px;
  }

  &.card--large {
    --card-spacing: 20px;
    --card-font-size: 18px;
    --card-outer-border-radius: 12px;
    --card-outer-border-width: 3px;
    --card-inner-border-width: 2px;
  }

  &.card--dark {
    --card-bg-color: var(--token-black, black);
    --card-text-color: var(--token-white, white);
    --card-inner-border-color: var(--token-white-20, white);
    --card-outer-border-color: var(--token-black, black);
    &.card--ghost {
      --card-bg-color: var(--token-black-10, black);
      --card-text-color: var(--token-black, black);
      --card-inner-border-color: var(--token-black-20, black);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-text-color: var(--token-black, black);
      --card-inner-border-color: var(--token-black-20, black);
      --card-outer-border-color: var(--token-black-70, black);
    }
  }

  &.card--error {
    --card-bg-color: var(--token-red);
    --card-text-color: var(--token-white, white);
    --card-inner-border-color: var(--token-white-30, white);
    --card-outer-border-color: var(--token-red, red);
    &.card--ghost {
      --card-bg-color: var(--token-red-10, red);
      --card-text-color: var(--token-red, red);
      --card-inner-border-color: var(--token-red-30, red);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-text-color: var(--token-red, red);
      --card-inner-border-color: var(--token-red-30, red);
      --card-outer-border-color: var(--token-red, red);
    }
  }

  &.card--info {
    --card-bg-color: var(--token-blue);
    --card-text-color: var(--token-white, white);
    --card-inner-border-color: var(--token-white-30, white);
    --card-outer-border-color: var(--token-blue, blue);
    &.card--ghost {
      --card-bg-color: var(--token-blue-10, blue);
      --card-text-color: var(--token-blue, blue);
      --card-inner-border-color: var(--token-blue-30, blue);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-text-color: var(--token-blue, blue);
      --card-inner-border-color: var(--token-blue-30, blue);
      --card-outer-border-color: var(--token-blue, blue);
    }
  }

  &.card--light {
    --card-bg-color: var(--token-white, white);
    --card-text-color: var(--token-black, black);
    --card-inner-border-color: var(--token-black-20, black);
    --card-outer-border-color: var(--token-white, white);
    &.card--ghost {
      --card-bg-color: var(--token-white-05, white);
      --card-text-color: var(--token-white, white);
      --card-inner-border-color: var(--token-white-20, white);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-text-color: var(--token-white, white);
      --card-inner-border-color: var(--token-white-20, white);
      --card-outer-border-color: var(--token-white-70, white);
    }
  }

  &.card--success {
    --card-bg-color: var(--token-green);
    --card-text-color: var(--token-white, white);
    --card-inner-border-color: var(--token-white-30, white);
    --card-outer-border-color: var(--token-green, green);
    &.card--ghost {
      --card-bg-color: var(--token-green-10, green);
      --card-text-color: var(--token-green, green);
      --card-inner-border-color: var(--token-green-30, green);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-text-color: var(--token-green, green);
      --card-inner-border-color: var(--token-green-20, green);
      --card-outer-border-color: var(--token-green, green);
    }
  }

  &.card--warning {
    --card-bg-color: var(--token-yellow);
    --card-text-color: var(--token-black, black);
    --card-inner-border-color: var(--token-black-20, black);
    --card-outer-border-color: var(--token-yellow, yellow);
    &.card--ghost {
      --card-bg-color: var(--token-yellow-10, yellow);
      --card-text-color: var(--token-yellow, yellow);
      --card-inner-border-color: var(--token-yellow-20, yellow);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-text-color: var(--token-yellow, yellow);
      --card-inner-border-color: var(--token-yellow-20, yellow);
      --card-outer-border-color: var(--token-yellow, yellow);
    }
  }

  /* Rules */
  background-color: var(--card-bg-color);
  border-radius: var(--card-outer-border-radius);
  border-style: solid;
  border-width: var(--card-outer-border-width);
  border-color: var(--card-outer-border-color);
  display: grid;
  grid-template-areas: "card__title card__actions" "card__body card__body" "card__footer card__footer";
  grid-template-rows: max-content 1fr max-content;
  font-family: var(--card-font-family);
  font-size: var(--card-font-size);
  font-weight: normal;
  row-gap: var(--card-spacing);
  padding: var(--card-spacing);
  text-align: left;
  transition: all var(--card-transition-duration, 0.3s) var(--card-transition-timing, ease);

  .card__actions {
    align-items: center;
    border-bottom: var(--card-inner-border-width) solid var(--card-inner-border-color);
    display: flex;
    flex-wrap: wrap;
    grid-area: card__actions;
    justify-content: flex-end;
    padding-bottom: calc(var(--card-spacing) / 2);
  }

  .card__body {
    grid-area: card__body;
  }

  .card__footer {
    align-items: center;
    border-top: var(--card-inner-border-width) solid var(--card-inner-border-color);
    display: flex;
    grid-area: card__footer;
    padding-top: calc(var(--card-spacing) / 2);
    justify-content: flex-end;
  }

  .card__title {
    align-items: center;
    border-bottom: var(--card-inner-border-width) solid var(--card-inner-border-color);
    color: var(--card-text-color);
    display: flex;
    font-size: var(--card-font-large);
    font-weight: bold;
    grid-area: card__title;
    padding-bottom: calc(var(--card-spacing) / 2);
  }
}
`);var R=new CSSStyleSheet,X=()=>{let e="var(--token-color-background, black)",o="var(--token-color-background-hue)",a="var(--token-color-background-saturation)",t="var(--token-color-background-lightness)",i=`
  .dashboard {

    --dashboard-overflow-y: hidden;
    --dashboard-rows: auto auto;
    --dashboard-text-color: var(--token-color-background-contrast, black);
    --dashboard-max-height: auto;
    --dashboard-bg-color: var(${e}, black);
    --dashboard-columns: 1fr 1fr 1fr;
    --dashboard-overflow: auto;
    --dashboard-overflow-y: auto;

    --dashboard-aside-bg-color: hsl(${o}, ${a}, calc(${t} + 1.5%));
    --dashboard-aside-body-column: 1/4;
    --dashboard-aside-body-row: 6/7;
    --dashboard-aside-body-padding: 20px;
    --dashboard-aside-footer-column: 1/4;
    --dashboard-aside-footer-row: 8/9;
    --dashboard-aside-footer-padding: 20px;
    --dashboard-aside-header-column: 1/4;
    --dashboard-aside-header-row: 5/6;
    --dashboard-aside-header-padding: 20px;
    
    --dashboard-main-bg-color: hsl(${o}, ${a}, calc(${t} + 0%));
    --dashboard-main-body-column: 1/4;
    --dashboard-main-body-row: 4/5;
    --dashboard-main-body-padding: 20px;
    --dashboard-main-footer-column: 1/4;
    --dashboard-main-footer-row: 10/11;
    --dashboard-main-footer-padding: 20px;
    --dashboard-main-header-column: 1/4;
    --dashboard-main-header-row: 3/4;
    --dashboard-main-header-padding: 20px;

    --dashboard-nav-bg-color: hsl(${o}, ${a}, calc(${t} + 1.5%));
    --dashboard-nav-body-column: 1/4;
    --dashboard-nav-body-row: 2/3;
    --dashboard-nav-body-padding: 20px;
    --dashboard-nav-footer-column: 1/4;
    --dashboard-nav-footer-row: 9/10;
    --dashboard-nav-footer-padding: 20px;
    --dashboard-nav-header-column: 1/4;
    --dashboard-nav-header-row: 1/2;
    --dashboard-nav-header-padding: 20px;
}`,s=`@media (min-width: 768px) {
.dashboard {
    --dashboard-columns: 1fr 3fr 1fr;
    --dashboard-rows: min-content 1fr min-content;
    --dashboard-overflow: hidden;
    --dashboard-overflow-y: auto;
    --dashboard-max-height: 100vh;

    --dashboard-aside-body-column: 3/4;
    --dashboard-aside-footer-column: 3/4;
    --dashboard-aside-footer-row: 3/4;
    --dashboard-aside-header-column: 3/4;
    --dashboard-aside-header-row: 1/2;
    --dashboard-aside-body-row: 2/3;

    --dashboard-main-body-column: 2/3;
    --dashboard-main-footer-column: 2/3;
    --dashboard-main-footer-row: 3/4;
    --dashboard-main-header-column: 2/3;
    --dashboard-main-header-row: 1/2;
    --dashboard-main-body-row: 2/3;

    --dashboard-nav-body-column: 1/2;
    --dashboard-nav-footer-column: 1/2;
    --dashboard-nav-footer-row: 3/4;
    --dashboard-nav-header-column: 1/2;
    --dashboard-nav-header-row: 1/2;
    --dashboard-nav-body-row: 2/3;
    }
}`,n=`

.dashboard {
    align-items: flex-start;
    background-color: var(--dashboard-bg-color);
    box-sizing: border-box;
    color: var(--dashboard-text-color, white);
    display: grid;
    grid-template-columns: var(--dashboard-columns, 1fr);
    grid-template-rows: var(--dashboard-rows, auto);
    height: var(--dashboard-max-height, auto);
    max-height: var(--dashboard-max-height, auto);
    overflow-y: var(--dashboard-overflow, auto);
}

.dashboard__nav-header {
    align-items: center;
    background-color: var(--dashboard-nav-bg-color);
    display: flex;
    flex-direction: column;
    grid-column: var(--dashboard-nav-header-column, 1/2);
    grid-row: var(--dashboard-nav-header-row, 1/2);
    height: 100%;
    padding: var(--dashboard-nav-header-padding, 20px);
}

.dashboard__nav {
    align-items: center;
    background-color: var(--dashboard-nav-bg-color);
    display: flex;
    flex-direction: column;
    grid-column: var(--dashboard-nav-body-column, 1/2);
    grid-row: var(--dashboard-nav-body-row, 2/3);
    height: 100%;
    justify-content: flex-start;
    overflow-y: var(--dashboard-overflow-y, auto);
    padding: var(--dashboard-nav-body-padding, 20px);
}

.dashboard__nav-footer {
    background-color: var(--dashboard-nav-bg-color);
    grid-column: var(--dashboard-nav-footer-column, 1/2);
    grid-row: var(--dashboard-nav-footer-row, 3/4);
    height: 100%;
    padding: var(--dashboard-nav-footer-padding, 20px);
}

.dashboard__main-header {
    align-items: flex-start;
    background-color: var(--dashboard-main-bg-color);
    display: flex;
    flex-direction: column;
    grid-column: var(--dashboard-main-header-column, 2/3);
    grid-row: var(--dashboard-main-header-row, 1/2);
    height: 100%;
    justify-content: center;
    padding: var(--dashboard-main-header-padding, 20px);
}

.dashboard__main {
    align-items: flex-start;
    background-color: var(--dashboard-main-bg-color);
    display: flex;
    flex-direction: column;
    grid-column: var(--dashboard-main-body-column, 2/3);
    grid-row: var(--dashboard-main-body-row, 2/3);
    height: 100%;
    overflow-y: var(--dashboard-overflow-y, auto);
    padding: var(--dashboard-main-body-padding, 20px);
}

.dashboard__main-footer {
    background-color: var(--dashboard-main-bg-color);
    grid-row: var(--dashboard-main-footer-row, 3/4);
    grid-column: var(--dashboard-main-footer-column, 2/3);
    height: 100%;
    padding: var(--dashboard-main-footer-padding, 20px);
}

.dashboard__aside-header {
    align-items: flex-end;
    background-color: var(--dashboard-aside-bg-color);
    display: flex;
    flex-direction: column;
    grid-column: var(--dashboard-aside-header-column, 3/4);
    grid-row: var(--dashboard-aside-header-row, 1/2);
    height: 100%;
    justify-content: center;
    padding: var(--dashboard-aside-header-padding, 20px);
}

.dashboard__aside {
    background-color: var(--dashboard-aside-bg-color);
    grid-column: var(--dashboard-aside-body-column, 3/4);
    grid-row: var(--dashboard-aside-body-row, 2/3);
    height: 100%;
    overflow-y: var(--dashboard-overflow-y, auto);
    padding: var(--dashboard-aside-body-padding, 20px);
}

.dashboard__aside-footer {
    background-color: var(--dashboard-aside-bg-color);
    grid-column: var(--dashboard-aside-footer-column, 3/4);
    grid-row: var(--dashboard-aside-footer-row, 3/4);
    height: 100%;
    padding: var(--dashboard-aside-footer-padding, 20px);
}`;return R.replaceSync(`${i}${s}${n}`)};var B=new CSSStyleSheet,se=()=>B.replaceSync(`:root {
  --dialog-bg-color: var(--token-black, black);
  --dialog-border-radius: 8px;
  --dialog-close-size: 13px;
  --dialog-gap: 0px;
  --dialog-max-height: 90vh;
  --dialog-max-width: 90vh;
  --dialog-scrollbar-thumb-color: var(--token-white-10, black);
  --dialog-scrollbar-track-color: var(--token-white-02, black);
  --dialog-spacing: 16px;
  --dialog-text-color: var(--token-white, white);
  --dialog-title-size: 20px;
}

.dialog[open] {
  align-items: center;
  backdrop-filter: blur(2px); /* Optional: Adds a blur effect to the background elements */
  background-color: var(--token-white-03, white); /* Optional: for dimming the background */
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* High z-index to ensure it is on top */
}

.dialog__view {
  background: var(--dialog-bg-color);
  border-radius: var(--dialog-border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: var(--dialog-gap);
  height: var(--dialog-max-height);
  width: var(--dialog-max-width);
}

.dialog__header {
  align-items: center;
  color: var(--token-white);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--dialog-title-size);
  border-bottom: 1px solid var(--token-white-10);
  padding: var(--dialog-spacing);
}

.dialog__body {
  flex: 1;
  overflow-y: auto; /* Ensure only vertical scrolling */
  max-height: calc(var(--dialog-max-height) - 60px); /* Subtract header and footer heights */
  padding: var(--dialog-spacing);
}

.dialog__footer {
  padding: var(--dialog-spacing);
  border-top: 1px solid var(--token-white-10);
  align-items: center;
  justify-content: center;
  display: flex;
  gap: var(--dialog-spacing);
}

/* Scrollbar styling */
.dialog__body::-webkit-scrollbar {
  width: 10px;
  background-color: var(--dialog-scrollbar-track-color);
}

.dialog__body::-webkit-scrollbar-track {
  background-color: var(--dialog-scrollbar-track-color);
}

.dialog__body::-webkit-scrollbar-thumb {
  background-color: var(--dialog-scrollbar-thumb-color);
  border-radius: 5px;
}

/* Modifier classes for different dialog sizes */
.dialog--full-screen {
  width: 100vw;
  height: 100vh;
  margin: 0;
  border-radius: 0;
}

.dialog--big {
  width: 80%;
  max-width: 800px;
  height: 60%;
}

.dialog--medium {
  width: 60%;
  max-width: 600px;
  height: 50%;
}

.dialog--small {
  width: 40%;
  max-width: 400px;
  height: 40%;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .dialog--big,
  .dialog--medium,
  .dialog--small {
    width: 90%;
    max-width: none;
    height: auto;
  }
}

@media (max-width: 400px) {
  .dialog--full-screen,
  .dialog--big,
  .dialog--medium,
  .dialog--small {
    width: 100%;
    max-width: none;
    height: auto;
  }
}
`);var U=new CSSStyleSheet,ce=()=>{let e=`
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
  }`;return U.replaceSync(`
    ${e}

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

`)};var j=new CSSStyleSheet,be=()=>j.replaceSync(`.flexgrid {
  --mobile-gap: 10px;
  --tablet-gap: 20px;
  --desktop-gap: 30px;
  --mobile-width: 200px;
  --tablet-width: 200px;
  --desktop-width: 200px;
}

@media screen and (min-width: 0px) and (max-width: 767px) {
  .flexgrid {
    --width: var(--mobile-width);
    --gap: var(--mobile-gap);
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .flexgrid {
    --width: var(--tablet-width);
    --gap: var(--tablet-gap);
  }
}

@media screen and (min-width: 1024px) {
  .flexgrid {
    --width: var(--desktop-width);
    --gap: var(--desktop-gap);
  }
}

.flexgrid {
  display: flex;
  gap: var(--gap);
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.flexgrid__item {
  width: 100%;
  height: max-content;
  flex: 1 0 var(--width);
}
`);var G=new CSSStyleSheet,ge=()=>G.replaceSync(`:root {

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
.flexpane--disabled {}`);var W=new CSSStyleSheet,pe=()=>W.replaceSync(`.grid {
  --bg-color: var(--token-black, black);
  --desktop-columns: 12;
  --desktop-max-col-width: 6ch;
  --desktop-col-gap: 2ch;
  --mobile-col-gap: 2ch;
  --desktop-row-gap: 2ch;
  --mobile-row-gap: 1ch;
  --mobile-columns: 6;
  --mobile-max-col-width: 1fr;
  --scrollbar-thumb-color: var(--token-black-80, black);
  --scrollbar-track-color: var(--token-white-10, black);
  --text-color: var(--token-white, white);
  background-color: var(--bg-color);
  color: var(--text-color);
  display: grid;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  box-sizing: border-box;
  height: 100vh;
  max-height: 100vh;
  grid-template-rows: max-content max-content max-content 1fr;
}

@media (min-width: 0px) {
  .grid {
    grid-template-columns: repeat(var(--mobile-columns), var(--mobile-max-col-width));
    column-gap: var(--mobile-col-gap);
    row-gap: var(--mobile-row-gap);
  }
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr repeat(var(--desktop-columns), minmax(0px, var(--desktop-max-col-width))) 1fr;
    column-gap: var(--desktop-col-gap);
    row-gap: var(--desktop-row-gap);
  }
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
  background-color: red;
  display: grid;
  grid-template-columns: subgrid;
  box-sizing: border-box;
  align-items: var(--mobile-align-items);
  justify-items: var(--mobile-justify-items);
}

@media screen and (min-width: 0px) and (max-width: 767px) {
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
`);var V=new CSSStyleSheet,he=()=>V.replaceSync(`.section {
}

.section__header {
}

.section__header__title {
  font-size: 1.5em;
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
`);var K=new CSSStyleSheet,ve=()=>K.replaceSync(`.toggle {
  position: relative;
  width: 50px;
  height: 50px;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.toggle input {
  display: none;
}

.toggle:before {
  border-bottom: 2px solid var(--text-color);
  border-top: 2px solid var(--text-color);
  content: "";
  height: 12px;
  left: 12.5px;
  position: absolute;
  width: 25px;
  transition: all 0.3s;
}

.toggle:after {
  position: absolute;
  border-top: 2px solid var(--text-color);
  content: "";
  display: block;
  width: 50%;
  content: "";
  transition: all 0.3s;
}

.toggle:has(input:checked)::before {
  border-width: 0;
  position: absolute;
  left: 12.5px;
  background-color: var(--text-color);
  content: "";
  display: block;
  height: 2px;
  width: 25px;
  transition: all 0.3s;
  transform: rotate(45deg);
}
.toggle:has(input:checked)::after {
  border-width: 0;
  position: absolute;
  left: 12.5px;
  background-color: var(--text-color);
  content: "";
  display: block;
  height: 2px;
  width: 25px;
  transition: all 0.3s;
  transform: rotate(-45deg);
}
`);var ue=new Map,Se=new MutationObserver(e=>{e.forEach(o=>{if(o.addedNodes.length>0&&o.type==="childList"){for(let a of o.addedNodes)if(a instanceof Element)for(let[t,[l,i]]of ue.entries()){let s=a.querySelectorAll(t);for(let n of s)Y(n,l,i)}}})});Se.observe(document,{attributes:!0,childList:!0,subtree:!0});function _e(e,o=!0,a){return(...t)=>{o&&ue.set(e,[t,a]);let l=document.querySelectorAll(e);for(let i of l)Y(i,t,a)}}function Te(e,o){return(...a)=>Y(e,a,o)}function Ee(e,o){return(...a)=>{let t="http://www.w3.org/1999/xhtml",l=document.createElementNS(t,e);return Y(l,a,o)}}function Y(e,o=[],a={}){o.forEach(([l,...i])=>a[l](e,...i));function t(...l){return l.forEach(i=>e.append(i)),e}return t}function ee(e){return new Proxy({},{get:(o,a)=>a==="el"?t=>Te(t,e):a==="$el"?(t,l)=>_e(t,l,e):Ee(a,e)})}function q(e){let{event:o=null,eventElement:a=window,hideOnFalse:t=!0,invokeImmediately:l=!0,mediaMinWidth:i=0,mediaMaxWidth:s=1/0,state:n=void 0}=e??{};return(...c)=>{let[d,h,k,v]=c,b=()=>{if(!(window.innerWidth>=i&&window.innerWidth<=s))return;let x=n&&typeof k=="function"?k(n.get()):k,A=String(x)==="true"||String(x)==="false",z=typeof v=="function"?v(n?n.get():void 0):v??!0;if(A&&t&&String(x)==="false"||A&&z===!1)return d.removeAttribute(h);z!==!1&&d.setAttribute(h,String(x))};n&&n.sub(b),o&&(d??a).addEventListener(o,b),window.addEventListener("resize",b),l&&b()}}function oe(e){let{event:o=null,eventElement:a=window,invokeImmediately:t=!0,mediaMinWidth:l=0,mediaMaxWidth:i=1/0,method:s="classList",state:n=null}=e??{};return(...c)=>{let[d,h,k]=c,v=()=>{if(!(window.innerWidth>=l&&window.innerWidth<=i))return;let g=typeof h=="function"?h(n?n.get():void 0):h;(typeof k=="function"?k(n?n.get():void 0):k??!0)&&(s==="className"?d.setAttribute("class",g):d.classList.add(g))};n&&n.sub(v),o&&(d??a).addEventListener(o,v),window.addEventListener("resize",v),t&&v()}}function H(e){let{state:o,event:a}=e??{};return(...t)=>{let[l,i,s]=t,n=()=>{(typeof s=="function"?s(o?o.get():void 0):s??!0)?l.addEventListener(a,d=>i(d)):l.removeEventListener(a,d=>i(d))};o&&o.sub(n),n()}}function E(e){let{state:o}=e??{};return(...a)=>{let[t,l,i]=a,s=()=>{let n=o?l(o.get()):l();(typeof i=="function"?i(o?o.get():void 0):i??!0)&&(t.innerHTML="",Array.isArray(n)?n.forEach(d=>{d instanceof HTMLElement?t.appendChild(d):t.appendChild(document.createTextNode(String(d)))}):n instanceof HTMLElement?t.appendChild(n):t.innerHTML=String(n))};o&&o.sub(s),s()}}function Z(e){let{event:o=null,eventElement:a=window,invokeImmediately:t=!0,mediaMinWidth:l=0,mediaMaxWidth:i=1/0,state:s=void 0}=e??{};return(...n)=>{let[c,d,h,k]=n,v=()=>{if(!(window.innerWidth>=l&&window.innerWidth<=i))return;let g=String(typeof h=="function"?h(s?s.get():void 0):h);(typeof k=="function"?k(s?s.get():void 0):k??!0)&&(d.startsWith("--")?c.style.setProperty(d,g):c.style[d]=g)};s&&s.sub(v),window.addEventListener("resize",v),o&&(c??a).addEventListener(o,v),t&&!o&&v()}}function Q(e){let{event:o,eventElement:a,state:t}=e??{};return(...l)=>{let[i,s,n]=l,c=()=>{let d=typeof s=="function"?s(t?t.get():void 0):s;(typeof n=="function"?n(t?t.get():void 0):n??!0)&&(i.textContent=String(d))};t&&t.sub(c),window.addEventListener("resize",c),o&&(i??a).addEventListener(o,c),c()}}function Fe(e,o,a){let t=o.split("."),l=(i,s,n)=>{let[c,...d]=s;return d.length===0?Array.isArray(i)?[...i.slice(0,c),n,...i.slice(c+1)]:{...i,[c]:n}:(i[c]===void 0&&(i[c]=typeof d[0]=="number"?[]:{}),{...i,[c]:l(i[c],d,n)})};return l(e,t,a)}function F(e,o){let a=e;if(o){let b=o.storage.getItem(o.key),g=JSON.parse(b),x=g!=null;(o.overwrite??!0)&&x&&(e=g),!(o.overwrite??!0)&&x&&(Array.isArray(e)&&Array.isArray(g)?e=[...e,...g]:typeof e=="object"&&typeof g=="object"&&(e={...e,...g}))}let t=e,l=[],i=()=>t,s=()=>l.forEach(b=>b(t)),n=b=>()=>d(b(t)),c=()=>d(a),d=b=>{t=b,l.forEach(g=>g(t)),o&&o.storage.setItem(o.key,JSON.stringify(t))};return{deepSet:(b,g)=>d(Fe(t,b,g)),get:i,pub:s,reset:c,reduce:n,set:d,sub:b=>l.push(b),unsub:b=>l.splice(l.indexOf(b),1)}}var T=F("black",{key:"colorPicker",storage:sessionStorage}),Ce=new URLSearchParams(window.location.search).get("page"),f=F(Ce??"HOME",{key:"page",storage:sessionStorage}),C=F("COLOR_PICKER",{key:"properties",storage:sessionStorage}),y=F("Dark",{key:"theme",storage:sessionStorage}),Le={Dark:{colors:{background:["#212121","#bababa"],brand:["#9e93b4","#FFFFFF"],error:["#da7272","#44313f"],foreground:["#383838","#FFFFFF"],info:["#87B5D9","#283443"],active:["#5f9ece","#324153"],passive:["#c2c2c2","#262626"],success:["#578557","#c5d3c5"],warning:["#dab350","#494022"],black:["#212121","#FFFFFF"],neutral:["#3d3d3d","#bababa"],white:["#e6e6e6","#5c5c5c"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"},sizing:{padding:1,margin:1,fonts:1}},Light:{colors:{background:["#dedede","#969696"],brand:["#9e93b4","#FFFFFF"],error:["#da7272","#44313f"],foreground:["#d1d1d1","#949494"],info:["#87B5D9","#283443"],active:["#5f9ece","#324153"],passive:["#c2c2c2","#999999"],success:["#578557","#c5d3c5"],warning:["#dab350","#494022"],black:["#212121","#FFFFFF"],neutral:["#3d3d3d","#bababa"],white:["#e6e6e6","#5c5c5c"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"},sizing:{padding:1,margin:1,fonts:1}},Pastel:{colors:{background:["#FFB6C1","#FFFACD"],brand:["#FFB6C1","#E0FFFF"],error:["#FFA07A","#87CEFA"],foreground:["#D8BFD8","#FFD700"],info:["#B0E0E6","#98FB98"],active:["#FFDAB9","#DDA0DD"],passive:["#FFDEAD","#F0E68C"],success:["#98FB98","#FF6A6A"],warning:["#FFD700","#90EE90"],black:["#D3D3D3","#FFFFE0"],neutral:["#808080","#FFFFFF"],white:["#FFFFFF","#D3D3D3"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"},sizing:{padding:1,margin:1,fonts:1}},Cafe:{colors:{background:["#3E2723","#FFD54F"],brand:["#795548","#D7CCC8"],error:["#D32F2F","#C5E1A5"],foreground:["#5D4037","#FFEB3B"],info:["#627f8d","#FFCC80"],active:["#659cb3","#ffffff"],passive:["#FFA726","#3e2723"],success:["#388E3C","#ffffff"],warning:["#ff8000","#ffffff"],black:["#4E342E","#FFECB3"],neutral:["#808080","#FFFFFF"],white:["#FFFFFF","#757575"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"},sizing:{padding:1,margin:1,fonts:1}},Ocean:{colors:{background:["#001F3F","#7FDBFF"],brand:["#0074D9","#39CCCC"],error:["#FF4136","#85144b"],foreground:["#001F3F","#FFDC00"],info:["#39CCCC","#3D9970"],active:["#FF851B","#B10DC9"],passive:["#FFDC00","#FF4136"],success:["#2ECC40","#FF4136"],warning:["#FF851B","#2ECC40"],black:["#001F3F","#7FDBFF"],neutral:["#808080","#FFFFFF"],white:["#DDDDDD","#001F3F"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"},sizing:{padding:1,margin:1,fonts:1}}},w=F(Le,{key:"tokens",storage:sessionStorage}),S=F(!0,{key:"tokensEnabled",storage:sessionStorage});function re(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(d=>d+d).join(""));let o=parseInt(e.slice(0,2),16)/255,a=parseInt(e.slice(2,4),16)/255,t=parseInt(e.slice(4,6),16)/255,l=Math.max(o,a,t),i=Math.min(o,a,t),s=0,n=0,c=(l+i)/2;if(l!==i){let d=l-i;switch(n=c>.5?d/(2-l-i):d/(l+i),l){case o:s=(a-t)/d+(a<t?6:0);break;case a:s=(t-o)/d+2;break;case t:s=(o-a)/d+4;break}s/=6}return{hue:Math.round(s*360),saturation:Math.round(n*100),lightness:Math.round(c*100)}}var L=new CSSStyleSheet,M=()=>{if(S.get()===!1)return L.replaceSync("");let e=w.get()[y.get()],{colors:o,fonts:a}=e,t=Object.entries(o).map(([n,[c,d]])=>{let h=re(c),k=re(d),v=`--token-color-${n}-hue`,b=`--token-color-${n}-saturation`,g=`--token-color-${n}-lightness`,x=`--token-color-${n}-contrast-hue`,A=`--token-color-${n}-contrast-saturation`,z=`--token-color-${n}-contrast-lightness`,we=`--token-color-${n}`,xe=`--token-color-${n}-contrast`;return[`${v}: ${h.hue};`,`${b}: ${h.saturation}%;`,`${g}: ${h.lightness}%;`,`${we}: hsl(var(${v}), var(${b}), var(${g}));`,`${x}: ${k.hue};`,`${A}: ${k.saturation}%;`,`${z}: ${k.lightness}%;`,`${xe}: hsl(var(${x}), var(${A}), var(${z}));`].join(`
`)}).join(`
`),l=Object.entries(e.fonts).map(([n,c])=>`${`--token-font-${n}`}: ${c};`).join(`
`),s=`
:root {
${t}
${l}

}`;L.replaceSync(s)};var J=new CSSStyleSheet,ke=()=>J.replaceSync(`.tooltip {
  cursor: pointer;
  position: relative;
}

.tooltip::before {
  position: absolute;
  bottom: calc(100% + 10px);
  left: calc(50% - 100px);
  background-color: white;
  border-radius: 5px;
  color: #fff;
  content: attr(aria-label);
  display: flex;
  padding: 1rem;
  justify-content: center;
  text-transform: none;
  transition: all 0.5s ease;
  width: 180px;
  z-index: 100;
}

.tooltip::after {
  display: flex;
  position: absolute;
  bottom: calc(100%);
  left: calc(50% - 10px);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
  content: " ";
  font-size: 0;
  line-height: 0;
  width: 0;
}

.tooltip::before,
.tooltip::after {
  color: black;
  opacity: 0;
  pointer-events: none;
  text-align: center;
}

.tooltip:focus::before,
.tooltip:focus::after,
.tooltip:hover::before,
.tooltip:hover::after {
  opacity: 1;
  transition: all 0.75s ease;
}
`);function p(e){let o="",a=Array.from(e.cssRules);for(let t of a)o+=t.cssText+`
`;return o}var u=new JSZip,m=e=>{switch(e.action){case"DISABLE_TOKENS":S.set(!1),M();break;case"DOWNLOAD_ALL":u.file("tokens.css",p(L)),u.file("accordion.css",p(D)),u.file("alerts.css",p(O)),u.file("badge.css",p(P)),u.file("bg.css",p($)),u.file("button.css",p(I)),u.file("card.css",p(N)),u.file("dashboard.css",p(R)),u.file("dialog.css",p(B)),u.file("dropdown.css",p(U)),u.file("flexgrid.css",p(j)),u.file("flexpane.css",p(G)),u.file("grid.css",p(W)),u.file("section.css",p(V)),u.file("toggles.css",p(K)),u.file("tooltip.css",p(J)),u.generateAsync({type:"blob"}).then(a=>{let t=document.createElement("a");t.href=URL.createObjectURL(a),t.download="capui.zip",t.click()});break;case"DOWNLOAD_THEME_TOKENS":let o=document.createElement("a");o.href=URL.createObjectURL(new Blob([p(L)],{type:"text/css"})),o.download="tokens.css",o.click();break;case"ENABLE_TOKENS":S.set(!0),M();break;case"SET_PAGE":f.set(e.page),window.history.pushState(null,"",`?page=${e.page}`);break;case"SET_PROPERTIES":C.set(e.properties);break;case"SET_COLOR_PICKER":C.set("COLOR_PICKER"),T.set(e.colorKey);break;case"SET_COLOR_TOKEN":w.deepSet(`${e.theme}.colors.${e.key}`,[e.color,e.contrast]),M();break;case"SET_THEME":y.set(e.theme),M();break}};function Me(){return(e,o)=>fetch(o).then(a=>a.text()).then(a=>e.innerHTML=a)}var r=ee({"attr:tokensEnabled":q({state:S}),"click:tokensEnabled":H({event:"click",state:S}),"innerHTML:colorPicker":E({state:T}),"innerHTML:pages":E({state:f}),"innerHTML:properties":E({state:C}),"innerHTML:themes":E({state:w}),"innerHTML:theme":E({state:y}),"innerText:pages":Q({state:f}),"style:themes":Z({state:w}),"svg:load":Me(),"text:tokensEnabled":Q({state:S}),attr:q(),change:H({event:"change"}),class:oe(),click:H({event:"click"}),innerHTML:E(),input:H({event:"input"}),style:Z()});var me=()=>{let e=()=>T.get(),o=()=>y.get(),a=()=>w.get()[o()].colors[e()][0],t=()=>w.get()[o()].colors[e()][1];return r.div(["innerHTML:colorPicker",()=>[r.div()(T.get()),r.div(["style","opacity","0.35"],["style","fontSize","0.8em"])("Set the color and it's contrast"),r.div(["style","fontSize","0.85em"],["style","opacity",.6])("Color"),r.div(["style","boxShadow","1px 0px 20px -2px rgba(0,0,0,0.5)"],["style","borderRadius","5px"],["style","width",`${150-20}px`],["style","height",`${80-20}px`],["style","overflow","hidden"],["style","position","relative"])(r.input(["style","position","absolute"],["style","top",`-${20/2}px`],["style","left",`-${20/2}px`],["attr","type","color"],["style","width",`${150}px`],["style","height",`${80}px`],["style","backgroundColor","transparent"],["input",n=>{m({action:"SET_COLOR_TOKEN",key:T.get(),theme:y.get(),color:n.target.value,contrast:t()})}],["attr","value",a()])()),r.div(["style","fontSize","0.85em"],["style","opacity",.6])("Contrast"),r.div(["style","boxShadow","1px 0px 20px -2px rgba(0,0,0,0.5)"],["style","borderRadius","5px"],["style","width",`${150-20}px`],["style","height",`${80-20}px`],["style","overflow","hidden"],["style","position","relative"])(r.input(["style","position","absolute"],["style","top",`-${20/2}px`],["style","left",`-${20/2}px`],["attr","type","color"],["style","width",`${150}px`],["style","height",`${80}px`],["style","backgroundColor","transparent"],["input",n=>{m({action:"SET_COLOR_TOKEN",key:T.get(),theme:y.get(),color:a(),contrast:n.target.value})}],["attr","value",t()])()),r.div(["style","fontSize","0.85em"],["style","opacity",.6])("Token"),r.div(["style","whiteSpace","nowrap"],["style","fontSize","0.8em"],["style","opacity","0.35"])(`--token-${e()}`)]],["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])()};var He=e=>{let o=`--token-color-${e}-contrast-hue`,a=`--token-color-${e}-contrast-saturation`,t=`--token-color-${e}-contrast-lightness`,l=`hsla(var(${o}), var(${a}), var(${t}),0.1)`;return r.div(["class","flexgrid__item"])(r.div(["class","card"],["class","card--small"],["class","card--light"],["class","card--ghost"],["style","--card-bg-color",`var(--token-color-${e})`],["style","--card-outer-border-color",l],["style","--card-transition-duration",0],["click",()=>m({action:"SET_COLOR_PICKER",colorKey:e})],["style","cursor","pointer"])(r.div(["class","card__title"],["style","--card-text-color",`var(--token-color-${e}-contrast)`])(e),r.div(["class","card__actions"])(r.div(["class","gg-chevron-right"],["style","color",`var(--token-color-${e}-contrast)`])()),r.div(["class","card__body"],["style","display","flex"],["style","columnGap","1%"],["style","rowGap","5px"],["style","flexWrap","wrap"],["style","alignItems","center"],["style","position","relative"],["style","alignItems","flex-start"],["style","justifyContent","flex-start"])(r.div(["style","borderRadius","2px"],["style","display","flex"],["style","flexDirection","column"],["style","height","20px"],["style","width","10%"],["style","backgroundColor",`var(--token-color-${e}-contrast)`])())))},fe=()=>{let e=w.get()[y.get()].colors;return r.div(["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"],["style","padding","20px"],["style","borderRadius","10px"])(r.section(["class","section"],["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])(r.div(["class","section__header"])(r.h2(["class","section__header__title"])("Colors"),r.p(["class","section__header__description"])("Colors are defined along with a contasting color to form a set of semantic primitives which can be further modified in context (per component) through the use of CSS variables.")),r.div(["class","flexgrid"],["style","--mobile-width","80px"],["style","--tablet-width","200px"],["style","--desktop-width","200px"],["style","--mobile-gap","20px"],["style","--tablet-gap","20px"],["style","--desktop-gap","20px"],["innerHTML:theme",()=>Object.keys(e).map(He)])()),r.section()(r.h2()("Fonts")))};var Ae=e=>r.option(["attr","selected",!0,()=>y.get()===e])(e),ye=()=>r.div(["style","display","flex"],["style","flexDirection","row"],["style","gap","10px"],["style","justifyContent","space-between"],["style","alignItems","center"],["style","width","100%"])(r.div(["style","display","flex"],["style","gap","20px"],["style","alignItems","center"],["style","justifyContent","center"],["style","flex",1])(r.label(["style","fontSize","21px"])("Theme"),r.select(["class","dropdown"],["class","dropdown--small"],["attr:tokensEnabled","disabled",()=>!S.get()],["change",e=>{let o=e.target.value;m({action:"SET_THEME",theme:o})}])(...Object.keys(w.get()).map(Ae))),r.div(["style","display","flex"],["style","gap","10px"],["style","alignItems","center"],["style","justifyContent","center"])(r.button(["class","button"],["class","button--small"],["class","button--light"],["class","button--outline"],["style","gap","10px"],["class","button--justify-start"],["class","tooltip"],["attr","aria-label","Download current theme tokens"],["click",()=>m({action:"DOWNLOAD_THEME_TOKENS"})])(r.span()("tokens.css"),r.span()("[\u2193]")),r.button(["class","button"],["class","button--light"],["class","button--outline"],["class","button--small"],["style","gap","10px"],["class","button--justify-start"],["class","tooltip"],["attr","aria-label","Download current theme tokens"],["click",()=>S.get()?m({action:"DISABLE_TOKENS"}):m({action:"ENABLE_TOKENS"})],["text:tokensEnabled","Disable Tokens",e=>e],["text:tokensEnabled","Enable Tokens",e=>!e])()));var ze=r.div(["class","dashboard__nav-header"])(r.img(["attr","src","/images/capui-transparent.png"],["attr","height","80"])()),_=[["class","button"],["class","button--light"],["class","button--ghost"],["class","button--block"],["class","button--justify-start"]],De=r.nav(["class","dashboard__nav"])(r.div(["style","display","flex"],["style","flexDirection","column"],["style","gap","3px"],["style","alignItems","flex-start"],["style","width","100%"])(r.button(["class","button"],["class","button--light"],["class","button--block"],["style","marginBottom","10px"],["style","gap","10px"],["class","button--justify-start"],["class","tooltip"],["attr","aria-label","Download all components"],["click",()=>m({action:"DOWNLOAD_ALL"})])(r.span()("capui.zip"),r.span()("[\u2193]")),r.button(["class","button"],["class","button--light"],["class","button--outline"],["class","button--block"],["style","marginBottom","10px"],["class","button--justify-start"],["click",()=>m({action:"SET_PAGE",page:"HOME"})])("Home"),r.button(..._,["click",()=>m({action:"SET_PAGE",page:"THEME"})])("Theme"),r.button(..._,["click",()=>m({action:"SET_PAGE",page:"UTILITY"})])("Utility"),r.button(..._,["click",()=>m({action:"SET_PAGE",page:"ACCORDION"})])("Accordion"),r.button(..._)("Alerts"),r.button(..._)("Badge"),r.button(..._)("Button"),r.button(..._)("Card"),r.button(..._)("Dashboard"),r.button(..._)("Dialog"),r.button(..._)("Flexpane"),r.button(..._)("Grid"),r.button(..._)("Tag"))),Oe=r.div(["class","dashboard__nav-footer"])("\xA9Copyright 2024"),Pe=r.div(["class","dashboard__main-header"],["innerHTML:pages",()=>"Home",()=>f.get()==="HOME"],["innerHTML:pages",()=>"Accordion",()=>f.get()==="ACCORDION"],["innerHTML:pages",ye,()=>f.get()==="THEME"],["innerHTML:pages",()=>"Utility",()=>f.get()==="UTILITY"])(),$e=r.div(["class","dashboard__main"],["innerHTML:pages",()=>"Home",()=>f.get()==="HOME"],["innerHTML:pages",()=>"Accordion",()=>f.get()==="ACCORDION"],["innerHTML:pages",fe,()=>f.get()==="THEME"],["innerHTML:pages",()=>"Utility",()=>f.get()==="UTILITY"])(),Ie=r.div(["class","dashboard__main-footer"],["class","dashboard__nav-footer"])(r.span()("All rights reserved. Made in the USA \u{1F1FA}\u{1F1F8} by ",r.a(["attr","href","https://kevinlint.com"],["attr","target","_blank"],["style","color","white"])("Kevin Lint")," as a product of ",r.a(["attr","href","https://github.com/linttrapmedia"],["attr","target","_blank"],["style","color","white"])("Lint Trap Media."))),Ne=r.div(["class","dashboard__aside-header"])("Aside Header"),Re=r.aside(["class","dashboard__aside"],["innerHTML:properties",me,()=>C.get()==="COLOR_PICKER"])(),Be=r.aside(["class","dashboard__aside-footer"])("Aside footer");document.addEventListener("DOMContentLoaded",()=>{r.$el("#root")(["class","dashboard"],["innerHTML",()=>[ze,De,Oe,Pe,$e,Ie,Ne,Re,Be]]),M(),X(),te(),ae(),ne(),le(),ie(),de(),X(),se(),ce(),be(),ge(),pe(),he(),ve(),ke(),document.adoptedStyleSheets=[L,D,O,P,$,I,N,R,B,U,j,G,W,V,K,J]});})();
//# sourceMappingURL=ui.js.map
