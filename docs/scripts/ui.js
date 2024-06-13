(()=>{var F=new CSSStyleSheet,oe=()=>F.replaceSync(`/* 
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
`);var C=new CSSStyleSheet,te=()=>C.replaceSync(`/* 
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
`);var M=new CSSStyleSheet,re=()=>M.replaceSync(`/* 
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
`);var L=new CSSStyleSheet,ae=()=>L.replaceSync("");var A=new CSSStyleSheet,ne=()=>A.replaceSync(`/* 
Usage:
<button class="button button-[MODIFIER]">Basic</button>
*/

.button {
  --animation: none;
  --bg-loading-color: var(--token-black-10, black);
  --bg-color: inherit;
  --bg-color-hover: var(--token-black-80, black);
  --bg-image: none;
  --bg-size: auto;
  --border-color: var(--token-black-90, black);
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
    --bg-color: var(--token-black, black);
    --bg-color-hover: var(--token-black-80, black);
    --border-color: var(--token-black, black);
    --text-color: var(--token-white, white);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-black-80, black);
      --bg-color-hover: var(--token-black-60, black);
      --border-color: var(--token-black-80, black);
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-white-10, white);
      --border-color: var(--token-white-10, white);
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-black-20, black);
      --border-color: transparent;
      --text-color: var(--token-black, black);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-black-20, black);
        --bg-color-hover: var(--token-black-40, black);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-black-10, black);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-black-20, black);
      --border-color: ;
      --text-color: var(--token-black, black);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-black-20, black);
        --bg-color-hover: var(--token-black-40, black);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-black-10, black);
        --border-color: var(--token-black, black);
      }
    }
  }

  &.button--light {
    --bg-color: var(--token-white, white);
    --bg-color-hover: var(--token-white-80, white);
    --border-color: var(--token-white, white);
    --text-color: var(--token-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-white-80, white);
      --bg-color-hover: var(--token-white-60, white);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-black-10, black);
      --border-color: var(--token-black-10, black);
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-white-20, white);
      --border-color: transparent;
      --text-color: var(--token-white, white);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-white-20, white);
        --bg-color-hover: var(--token-white-40, white);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-white-10, white);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-white-20, white);
      --border-color: ;
      --text-color: var(--token-white, white);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-white-20, white);
        --bg-color-hover: var(--token-white-40, white);
        --border-color: var(--token-white, white);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-white-10, white);
        --border-color: var(--token-white, white);
      }
    }
  }

  &.button--info {
    --bg-color: var(--token-blue, blue);
    --bg-color-hover: var(--token-blue-80, blue);
    --border-color: var(--token-blue, blue);
    --text-color: var(--token-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-blue-80, blue);
      --bg-color-hover: var(--token-blue-60, blue);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-black-10, black);
      --border-color: var(--token-black-10, black);
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-blue-20, blue);
      --border-color: transparent;
      --text-color: var(--token-blue, blue);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-blue-20, blue);
        --bg-color-hover: var(--token-blue-40, blue);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-blue-20, blue);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-blue-20, blue);
      --border-color: ;
      --text-color: var(--token-blue, blue);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-blue-20, blue);
        --bg-color-hover: var(--token-blue-40, blue);
        --border-color: var(--token-blue, blue);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-blue-20, blue);
        --border-color: transparent;
      }
    }
  }

  &.button--success {
    --bg-color: var(--token-green, green);
    --bg-color-hover: var(--token-green-80, green);
    --border-color: var(--token-green, green);
    --text-color: var(--token-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-green-80, green);
      --bg-color-hover: var(--token-green-60, green);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-black-10, black);
      --border-color: transparent;
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-green-20, green);
      --border-color: transparent;
      --text-color: var(--token-green, green);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-green-20, green);
        --bg-color-hover: var(--token-green-40, green);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-green-20, green);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-green-20, green);
      --border-color: ;
      --text-color: var(--token-green, green);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-green-20, green);
        --bg-color-hover: var(--token-green-40, green);
        --border-color: var(--token-green, green);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-green-20, green);
        --border-color: var(--token-green, green);
      }
    }
  }

  &.button--warning {
    --bg-color: var(--token-yellow, yellow);
    --bg-color-hover: var(--token-yellow-80, yellow);
    --border-color: var(--token-yellow, yellow);
    --text-color: var(--token-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-yellow-80, yellow);
      --bg-color-hover: var(--token-yellow-60, yellow);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-black-10, black);
      --border-color: transparent;
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-yellow-20, yellow);
      --border-color: transparent;
      --text-color: var(--token-yellow, yellow);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-yellow-20, yellow);
        --bg-color-hover: var(--token-yellow-40, yellow);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-yellow-20, yellow);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-yellow-20, yellow);
      --border-color: ;
      --text-color: var(--token-yellow, yellow);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-yellow-20, yellow);
        --bg-color-hover: var(--token-yellow-40, yellow);
        --border-color: var(--token-yellow, yellow);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-yellow-20, yellow);
        --border-color: var(--token-yellow, yellow);
      }
    }
  }

  &.button--error {
    --bg-color: var(--token-red, red);
    --bg-color-hover: var(--token-red-80, red);
    --border-color: var(--token-red, red);
    --text-color: var(--token-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-red-80, red);
      --bg-color-hover: var(--token-red-60, red);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-black-10, black);
      --border-color: transparent;
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-red-20, red);
      --border-color: transparent;
      --text-color: var(--token-red, red);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-red-20, red);
        --bg-color-hover: var(--token-red-40, red);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-red-20, red);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-red-20, red);
      --border-color: ;
      --text-color: var(--token-red, red);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-red-20, red);
        --bg-color-hover: var(--token-red-40, red);
        --border-color: var(--token-red, red);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-red-20, red);
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
`);var H=new CSSStyleSheet,le=()=>H.replaceSync(`.card {
  /* Settings */
  --card-bg-color: inherit;
  --card-font-family: inherit;
  --card-title-font-size: inherit;
  --card-title-font-color: inherit;
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
    --card-title-font-size: 14px;
    --card-outer-border-radius: 4px;
    --card-outer-border-width: 1px;
    --card-inner-border-width: 0px;
  }

  &.card--medium {
    --card-spacing: 15px;
    --card-title-font-size: 16px;
    --card-outer-border-radius: 8px;
    --card-outer-border-width: 2px;
    --card-inner-border-width: 1px;
  }

  &.card--large {
    --card-spacing: 20px;
    --card-title-font-size: 18px;
    --card-outer-border-radius: 12px;
    --card-outer-border-width: 3px;
    --card-inner-border-width: 2px;
  }

  &.card--dark {
    --card-bg-color: var(--token-black, black);
    --card-title-font-color: var(--token-white, white);
    --card-inner-border-color: var(--token-white-20, white);
    --card-outer-border-color: var(--token-black, black);
    &.card--ghost {
      --card-bg-color: var(--token-black-10, black);
      --card-title-font-color: var(--token-black, black);
      --card-inner-border-color: var(--token-black-20, black);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-title-font-color: var(--token-black, black);
      --card-inner-border-color: var(--token-black-20, black);
      --card-outer-border-color: var(--token-black-70, black);
    }
  }

  &.card--error {
    --card-bg-color: var(--token-red);
    --card-title-font-color: var(--token-white, white);
    --card-inner-border-color: var(--token-white-30, white);
    --card-outer-border-color: var(--token-red, red);
    &.card--ghost {
      --card-bg-color: var(--token-red-10, red);
      --card-title-font-color: var(--token-red, red);
      --card-inner-border-color: var(--token-red-30, red);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-title-font-color: var(--token-red, red);
      --card-inner-border-color: var(--token-red-30, red);
      --card-outer-border-color: var(--token-red, red);
    }
  }

  &.card--info {
    --card-bg-color: var(--token-blue);
    --card-title-font-color: var(--token-white, white);
    --card-inner-border-color: var(--token-white-30, white);
    --card-outer-border-color: var(--token-blue, blue);
    &.card--ghost {
      --card-bg-color: var(--token-blue-10, blue);
      --card-title-font-color: var(--token-blue, blue);
      --card-inner-border-color: var(--token-blue-30, blue);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-title-font-color: var(--token-blue, blue);
      --card-inner-border-color: var(--token-blue-30, blue);
      --card-outer-border-color: var(--token-blue, blue);
    }
  }

  &.card--light {
    --card-bg-color: var(--token-white, white);
    --card-title-font-color: var(--token-black, black);
    --card-inner-border-color: var(--token-black-20, black);
    --card-outer-border-color: var(--token-white, white);
    &.card--ghost {
      --card-bg-color: var(--token-white-05, white);
      --card-title-font-color: var(--token-white, white);
      --card-inner-border-color: var(--token-white-20, white);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-title-font-color: var(--token-white, white);
      --card-inner-border-color: var(--token-white-20, white);
      --card-outer-border-color: var(--token-white-70, white);
    }
  }

  &.card--success {
    --card-bg-color: var(--token-green);
    --card-title-font-color: var(--token-white, white);
    --card-inner-border-color: var(--token-white-30, white);
    --card-outer-border-color: var(--token-green, green);
    &.card--ghost {
      --card-bg-color: var(--token-green-10, green);
      --card-title-font-color: var(--token-green, green);
      --card-inner-border-color: var(--token-green-30, green);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-title-font-color: var(--token-green, green);
      --card-inner-border-color: var(--token-green-20, green);
      --card-outer-border-color: var(--token-green, green);
    }
  }

  &.card--warning {
    --card-bg-color: var(--token-yellow);
    --card-title-font-color: var(--token-black, black);
    --card-inner-border-color: var(--token-black-20, black);
    --card-outer-border-color: var(--token-yellow, yellow);
    &.card--ghost {
      --card-bg-color: var(--token-yellow-10, yellow);
      --card-title-font-color: var(--token-yellow, yellow);
      --card-inner-border-color: var(--token-yellow-20, yellow);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-title-font-color: var(--token-yellow, yellow);
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
  font-size: var(--card-title-font-size);
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
    color: var(--card-title-font-color);
    display: flex;
    font-size: var(--card-font-large);
    font-weight: bold;
    grid-area: card__title;
    padding-bottom: calc(var(--card-spacing) / 2);
  }
}
`);var D=new CSSStyleSheet,Z=()=>{let o="var(--token-color-background, black)",e="var(--token-color-background-hue)",a="var(--token-color-background-saturation)",t="var(--token-color-background-lightness)";return D.replaceSync(`
        @media (min-width: 0px) {
            .dashboard {
                --bg-color: ${o};
                --nav-bg-color: hsl(${e}, ${a}, calc(${t} + 1.5%));
                --main-bg-color: hsl(${e}, ${a}, calc(${t} + 0%));
                --aside-bg-color: hsl(${e}, ${a}, calc(${t} + 1.5%));
                --scrollbar-thumb-color: var(--token-color-background, black);
                --scrollbar-track-color: var(--token-color-white, white);
                --text-color: var(--token-color-white, white);
                background-color: var(--bg-color);
                box-sizing: border-box;
                color: var(--text-color);
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0;
            }
        
            .dashboard__nav-header,
            .dashboard__nav,
            .dashboard__nav-footer,
            .dashboard__main-header,
            .dashboard__main,
            .dashboard__main-footer,
            .dashboard__aside-header,
            .dashboard__aside,
            .dashboard__aside-footer {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
            }
            .dashboard__main::-webkit-scrollbar,
            .dashboard__aside::-webkit-scrollbar,
            .dashboard__nav::-webkit-scrollbar {
                width: 0;
            }
        
            .dashboard__main::-webkit-scrollbar-track,
            .dashboard__aside::-webkit-scrollbar-track,
            .dashboard__nav::-webkit-scrollbar-track {
                background: var(--bg-color);
            }
        
            .dashboard__main::-webkit-scrollbar-thumb,
            .dashboard__aside::-webkit-scrollbar-thumb,
            .dashboard__nav::-webkit-scrollbar-thumb {
                background-color: rgba(255, 255, 255, 0.055);
                border-radius: 20px;
                border: 3px solid var(--bg-color);
            }
        
            .dashboard__nav-header,
            .dashboard__nav,
            .dashboard__nav-footer {
                background-color: var(--nav-bg-color);
            }
        
            .dashboard__main-header,
            .dashboard__main,
            .dashboard__main-footer {
                background-color: var(--main-bg-color);
            }
        
            .dashboard__aside-header,
            .dashboard__aside,
            .dashboard__aside-footer {
                background-color: var(--aside-bg-color);
            }
        }
        
        @media (min-width: 768px) {
            .dashboard {
                align-items: flex-start;
                display: grid;
                grid-template-columns: max-content 2fr min-content;
                grid-template-rows: max-content 1fr max-content;
                height: 100vh;
                overflow-y: auto;
                margin: 0 auto;
                max-height: 100vh;
                width: 100%;
            }
        
            .dashboard__nav-header {
                grid-row: 1/2;
                grid-column: 1/2;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        
            .dashboard__nav {
                grid-column: 1/2;
                grid-row: 2/3;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                overflow-y: auto;
                height: 100%;
            }
            .dashboard__nav-footer {
                grid-column: 1/2;
                grid-row: 3/4;
            }
        
            
            .dashboard__main-header {
                align-items: flex-start;
                justify-content: center;
                display: flex;
                flex-direction: column;
                height: 100%;
                grid-row: 1/2;
                grid-column: 2/3;
            }
            .dashboard__main {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                grid-row: 2/3;
                grid-column: 2/3;
                overflow-y: auto;
                height: 100%;
            }
            .dashboard__main-footer {
                grid-row: 3/4;
                grid-column: 2/3;
            }
            .dashboard__aside-header {
                grid-row: 1/2;
                grid-column: 3/4;
                align-items: flex-end;
                justify-content: center;
                display: flex;
                flex-direction: column;
                height: 100%;
            }
            .dashboard__aside {
                grid-column: 3/4;
                grid-row: 2/3;
                overflow-y: auto;
                height: 100%;
            }
            .dashboard__aside-footer {
                grid-column: 3/4;
                grid-row: 3/4;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }
        }`)};var P=new CSSStyleSheet,ie=()=>P.replaceSync(`:root {
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
`);var z=new CSSStyleSheet,ce=()=>z.replaceSync("");var O=new CSSStyleSheet,se=()=>O.replaceSync(`.flexgrid {
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
`);var I=new CSSStyleSheet,de=()=>I.replaceSync(`:root {

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
.flexpane--disabled {}`);var $=new CSSStyleSheet,be=()=>$.replaceSync(`.grid {
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
`);var R=new CSSStyleSheet,ge=()=>R.replaceSync(`.section {
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
`);var B=new CSSStyleSheet,pe=()=>B.replaceSync(`.toggle {
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
`);var he=new Map,fe=new MutationObserver(o=>{o.forEach(e=>{if(e.addedNodes.length>0&&e.type==="childList"){for(let a of e.addedNodes)if(a instanceof Element)for(let[t,[l,i]]of he.entries()){let s=a.querySelectorAll(t);for(let n of s)G(n,l,i)}}})});fe.observe(document,{attributes:!0,childList:!0,subtree:!0});function me(o,e=!0,a){return(...t)=>{e&&he.set(o,[t,a]);let l=document.querySelectorAll(o);for(let i of l)G(i,t,a)}}function xe(o,e){return(...a)=>G(o,a,e)}function we(o,e){return(...a)=>{let t="http://www.w3.org/1999/xhtml",l=document.createElementNS(t,o);return G(l,a,e)}}function G(o,e=[],a={}){e.forEach(([l,...i])=>a[l](o,...i));function t(...l){return l.forEach(i=>o.append(i)),o}return t}function J(o){return new Proxy({},{get:(e,a)=>a==="el"?t=>xe(t,o):a==="$el"?(t,l)=>me(t,l,o):we(a,o)})}function K(o){let{event:e=null,eventElement:a=window,hideOnFalse:t=!0,invokeImmediately:l=!0,mediaMinWidth:i=0,mediaMaxWidth:s=1/0,state:n=void 0}=o??{};return(...d)=>{let[c,v,u,p]=d,b=()=>{if(!(window.innerWidth>=i&&window.innerWidth<=s))return;let w=n&&typeof u=="function"?u(n.get()):u,X=String(w)==="true"||String(w)==="false",ee=typeof p=="function"?p(n?n.get():void 0):p??!0;if(X&&t&&String(w)==="false"||X&&ee===!1)return c.removeAttribute(v);ee!==!1&&c.setAttribute(v,String(w))};n&&n.sub(b),e&&(c??a).addEventListener(e,b),window.addEventListener("resize",b),l&&b()}}function Y(o){let{event:e=null,eventElement:a=window,invokeImmediately:t=!0,mediaMinWidth:l=0,mediaMaxWidth:i=1/0,method:s="classList",state:n=null}=o??{};return(...d)=>{let[c,v,u]=d,p=()=>{if(!(window.innerWidth>=l&&window.innerWidth<=i))return;let g=typeof v=="function"?v(n?n.get():void 0):v;(typeof u=="function"?u(n?n.get():void 0):u??!0)&&(s==="className"?c.setAttribute("class",g):c.classList.add(g))};n&&n.sub(p),e&&(c??a).addEventListener(e,p),window.addEventListener("resize",p),t&&p()}}var N=o=>(e,a,t)=>{(typeof t=="function"?t():t??!0)&&e.addEventListener(o,a)};function _(o){let{state:e}=o??{};return(...a)=>{let[t,l,i]=a,s=()=>{let n=e?l(e.get()):l();(typeof i=="function"?i(e?e.get():void 0):i??!0)&&(t.innerHTML="",Array.isArray(n)?n.forEach(c=>{c instanceof HTMLElement?t.appendChild(c):t.appendChild(document.createTextNode(String(c)))}):n instanceof HTMLElement?t.appendChild(n):t.innerHTML=String(n))};e&&e.sub(s),s()}}function V(o){let{event:e=null,eventElement:a=window,invokeImmediately:t=!0,mediaMinWidth:l=0,mediaMaxWidth:i=1/0,state:s=void 0}=o??{};return(...n)=>{let[d,c,v,u]=n,p=()=>{if(!(window.innerWidth>=l&&window.innerWidth<=i))return;let g=String(typeof v=="function"?v(s?s.get():void 0):v);(typeof u=="function"?u(s?s.get():void 0):u??!0)&&(c.startsWith("--")?d.style.setProperty(c,g):d.style[c]=g)};s&&s.sub(p),window.addEventListener("resize",p),e&&(d??a).addEventListener(e,p),t&&!e&&p()}}function q(o){let{event:e,eventElement:a,state:t}=o??{};return(...l)=>{let[i,s,n]=l,d=()=>{let c=typeof s=="function"?s(t?t.get():void 0):s;(typeof n=="function"?n(t?t.get():void 0):n??!0)&&(i.textContent=String(c))};t&&t.sub(d),window.addEventListener("resize",d),e&&(i??a).addEventListener(e,d),d()}}function Se(o,e,a){let t=e.split("."),l=(i,s,n)=>{let[d,...c]=s;return c.length===0?Array.isArray(i)?[...i.slice(0,d),n,...i.slice(d+1)]:{...i,[d]:n}:(i[d]===void 0&&(i[d]=typeof c[0]=="number"?[]:{}),{...i,[d]:l(i[d],c,n)})};return l(o,t,a)}function T(o,e){let a=o;if(e){let b=e.storage.getItem(e.key),g=JSON.parse(b),w=g!=null;(e.overwrite??!0)&&w&&(o=g),!(e.overwrite??!0)&&w&&(Array.isArray(o)&&Array.isArray(g)?o=[...o,...g]:typeof o=="object"&&typeof g=="object"&&(o={...o,...g}))}let t=o,l=[],i=()=>t,s=()=>l.forEach(b=>b(t)),n=b=>()=>c(b(t)),d=()=>c(a),c=b=>{t=b,l.forEach(g=>g(t)),e&&e.storage.setItem(e.key,JSON.stringify(t))};return{deepSet:(b,g)=>c(Se(t,b,g)),get:i,pub:s,reset:d,reduce:n,set:c,sub:b=>l.push(b),unsub:b=>l.splice(l.indexOf(b),1)}}var S=T("black",{key:"colorPicker",storage:sessionStorage}),_e=new URLSearchParams(window.location.search).get("page"),f=T(_e??"HOME",{key:"page",storage:sessionStorage}),E=T("COLOR_PICKER",{key:"properties",storage:sessionStorage}),y=T("Dark",{key:"theme",storage:sessionStorage}),Te={colors:{background:["#000000","#FFFFFF"],black:["#000000","#FFFFFF"],brand:["#800080","#00FFFF"],error:["#FF0000","#0000FF"],foreground:["#000000","#FFFF00"],info:["#0000FF","#00FF00"],action:["#FF8C00","#9370DB"],success:["#006400","#FF0000"],warning:["#FF4500","#32CD32"],white:["#FFFFFF","#0000FF"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"}},Ee={colors:{background:["#FFFFFF","#000000"],black:["#FFFFFF","#000000"],brand:["#FF69B4","#00CED1"],error:["#FF6347","#4169E1"],foreground:["#FFFFFF","#000000"],info:["#ADD8E6","#32CD32"],action:["#FFD700","#8A2BE2"],success:["#7FFF00","#DC143C"],warning:["#FFA500","#006400"],white:["#000000","#FFFFFF"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"}},Fe={colors:{background:["#FFB6C1","#FFFACD"],black:["#D3D3D3","#FFFFE0"],brand:["#FFB6C1","#E0FFFF"],error:["#FFA07A","#87CEFA"],foreground:["#D8BFD8","#FFD700"],info:["#B0E0E6","#98FB98"],action:["#FFDAB9","#DDA0DD"],success:["#98FB98","#FF6A6A"],warning:["#FFD700","#90EE90"],white:["#FFFFFF","#D3D3D3"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"}},Ce={colors:{background:["#3E2723","#FFD54F"],black:["#4E342E","#FFECB3"],brand:["#795548","#D7CCC8"],error:["#D32F2F","#C5E1A5"],foreground:["#5D4037","#FFEB3B"],info:["#8D6E63","#FFCC80"],action:["#FF7043","#A1887F"],success:["#388E3C","#FF5252"],warning:["#F57C00","#8BC34A"],white:["#FFFFFF","#757575"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"}},Me={colors:{background:["#001F3F","#7FDBFF"],black:["#001F3F","#7FDBFF"],brand:["#0074D9","#39CCCC"],error:["#FF4136","#85144b"],foreground:["#001F3F","#FFDC00"],info:["#39CCCC","#3D9970"],action:["#FF851B","#B10DC9"],success:["#2ECC40","#FF4136"],warning:["#FF851B","#2ECC40"],white:["#DDDDDD","#001F3F"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"}},k=T({Dark:Te,Light:Ee,Pastel:Fe,Cafe:Ce,Ocean:Me},{key:"tokens",storage:sessionStorage});function Q(o){o=o.replace(/^#/,""),o.length===3&&(o=o.split("").map(c=>c+c).join(""));let e=parseInt(o.slice(0,2),16)/255,a=parseInt(o.slice(2,4),16)/255,t=parseInt(o.slice(4,6),16)/255,l=Math.max(e,a,t),i=Math.min(e,a,t),s=0,n=0,d=(l+i)/2;if(l!==i){let c=l-i;switch(n=d>.5?c/(2-l-i):c/(l+i),l){case e:s=(a-t)/c+(a<t?6:0);break;case a:s=(t-e)/c+2;break;case t:s=(e-a)/c+4;break}s/=6}return{hue:Math.round(s*360),saturation:Math.round(n*100),lightness:Math.round(d*100)}}var U=new CSSStyleSheet,j=()=>{let o=k.get()[y.get()],{colors:e}=o,a=`
:root {
${Object.entries(e).map(([t,[l,i]])=>{let s=Q(l),n=Q(i),d=`--token-color-${t}-hue`,c=`--token-color-${t}-saturation`,v=`--token-color-${t}-lightness`,u=`--token-color-${t}-contrast-hue`,p=`--token-color-${t}-contrast-saturation`,b=`--token-color-${t}-contrast-lightness`,g=`--token-color-${t}`,w=`--token-color-${t}-contrast`;return[`${d}: ${s.hue};`,`${c}: ${s.saturation}%;`,`${v}: ${s.lightness}%;`,`${g}: hsl(var(${d}), var(${c}), var(${v}));`,`${u}: ${n.hue};`,`${p}: ${n.saturation}%;`,`${b}: ${n.lightness}%;`,`${w}: hsl(var(${u}), var(${p}), var(${b}));`].join(`
`)}).join(`
`)}
}
`;U.replaceSync(a),console.log(a)};var W=new CSSStyleSheet,ve=()=>W.replaceSync(`.tooltip {
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
`);function h(o){let e="",a=Array.from(o.cssRules);for(let t of a)e+=t.cssText+`
`;return e}var m=o=>{switch(o.action){case"DOWNLOAD_ZIP":let e=new JSZip;e.file("tokens.css",h(U)),e.file("accordion.css",h(F)),e.file("alerts.css",h(C)),e.file("badge.css",h(M)),e.file("bg.css",h(L)),e.file("button.css",h(A)),e.file("card.css",h(H)),e.file("dashboard.css",h(D)),e.file("dialog.css",h(P)),e.file("dropdown.css",h(z)),e.file("flexgrid.css",h(O)),e.file("flexpane.css",h(I)),e.file("grid.css",h($)),e.file("section.css",h(R)),e.file("toggles.css",h(B)),e.file("tooltip.css",h(W)),e.generateAsync({type:"blob"}).then(a=>{let t=document.createElement("a");t.href=URL.createObjectURL(a),t.download="capui.zip",t.click(),console.log(t)});break;case"SET_PAGE":f.set(o.page),window.history.pushState(null,"",`?page=${o.page}`);break;case"SET_PROPERTIES":E.set(o.properties);break;case"SET_COLOR_PICKER":E.set("COLOR_PICKER"),S.set(o.colorKey);break;case"SET_COLOR_TOKEN":k.deepSet(`${o.theme}.colors.${o.key}`,[o.color,o.contrast]),j();break;case"SET_THEME":y.set(o.theme),j();break}};var r=J({"innerHTML:colorPicker":_({state:S}),"innerHTML:pages":_({state:f}),"innerHTML:properties":_({state:E}),"innerHTML:themes":_({state:k}),"innerHTML:theme":_({state:y}),"innerText:pages":q({state:f}),"style:themes":V({state:k}),attr:K(),change:N("change"),class:Y(),click:N("click"),innerHTML:_(),input:N("input"),style:V()});var ke=()=>{let o=()=>S.get(),e=()=>y.get(),a=()=>k.get()[e()].colors[o()][0],t=()=>k.get()[e()].colors[o()][1];return r.div(["innerHTML:colorPicker",()=>[r.div()(S.get()),r.div(["style","opacity","0.35"],["style","fontSize","0.8em"])("Set the color and it's contrast"),r.div(["style","fontSize","0.85em"],["style","opacity",.6])("Color"),r.div(["style","borderRadius","5px"],["style","width",`${150-20}px`],["style","height",`${80-20}px`],["style","overflow","hidden"],["style","position","relative"])(r.input(["style","position","absolute"],["style","top",`-${20/2}px`],["style","left",`-${20/2}px`],["attr","type","color"],["style","width",`${150}px`],["style","height",`${80}px`],["style","backgroundColor","transparent"],["input",n=>{m({action:"SET_COLOR_TOKEN",key:S.get(),theme:y.get(),color:n.target.value,contrast:t()})}],["attr","value",a()])()),r.div(["style","fontSize","0.85em"],["style","opacity",.6])("Contrast"),r.div(["style","borderRadius","5px"],["style","width",`${150-20}px`],["style","height",`${80-20}px`],["style","overflow","hidden"],["style","position","relative"])(r.input(["style","position","absolute"],["style","top",`-${20/2}px`],["style","left",`-${20/2}px`],["attr","type","color"],["style","width",`${150}px`],["style","height",`${80}px`],["style","backgroundColor","transparent"],["input",n=>{m({action:"SET_COLOR_TOKEN",key:S.get(),theme:y.get(),color:a(),contrast:n.target.value})}],["attr","value",t()])()),r.div(["style","fontSize","0.85em"],["style","opacity",.6])("Token"),r.div(["style","whiteSpace","nowrap"],["style","fontSize","0.8em"],["style","opacity","0.35"])(`--token-${o()}`)]],["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])()};var Le=o=>{let e=()=>y.get(),a=()=>k.get()[e()].colors[o][0],t=()=>k.get()[e()].colors[o][1];return r.div(["class","flexgrid__item"])(r.div(["class","card"],["class","card--small"],["class","card--light"],["class","card--ghost"],["style","--card-bg-color",`var(--token-color-${o})`],["style","--card-transition-duration",0],["click",()=>m({action:"SET_COLOR_PICKER",colorKey:o})],["style","cursor","pointer"])(r.div(["class","card__title"],["style:themes","--card-title-font-color",t])(o),r.div(["class","card__actions"])(r.div(["style","width","8px"],["style","height","8px"],["style","borderRight","1px solid rgba(255,255,255,1)"],["style","borderBottom","1px solid rgba(255,255,255,1)"],["style","display","flex"],["style","transform","rotate(-45deg)"])("")),r.div(["class","card__body"],["style","display","flex"],["style","columnGap","1%"],["style","rowGap","5px"],["style","flexWrap","wrap"],["style","alignItems","center"],["style","position","relative"],["style","alignItems","flex-start"],["style","justifyContent","flex-start"])(r.div(["style","borderRadius","2px"],["style","display","flex"],["style","flexDirection","column"],["style","height","20px"],["style","width","10%"],["style","backgroundColor",`var(--token-color-${o}-contrast)`])())))},ue=()=>{let o=k.get()[y.get()].colors;return r.div(["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])(r.section(["class","section"],["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])(r.div(["class","section__header"])(r.h2(["class","section__header__title"])("Colors"),r.p(["class","section__header__description"])("Colors are defined along with a contasting color to form a set of semantic primitives which can be further modified in context (per component) through the use of CSS variables.")),r.div(["class","flexgrid"],["style","--mobile-width","200px"],["style","--tablet-width","200px"],["style","--desktop-width","200px"],["style","--mobile-gap","10px"],["style","--tablet-gap","10px"],["style","--desktop-gap","10px"],["innerHTML:theme",()=>Object.keys(o).map(Le)])()),r.section()(r.h2()("Fonts")))};var Ae=o=>r.option(["attr","selected",!0,()=>y.get()===o])(o),ye=()=>r.div(["style","display","flex"],["style","flexDirection","row"],["style","gap","10px"])(r.label()("Theme"),r.select(["change",o=>{let e=o.target.value;m({action:"SET_THEME",theme:e})}])(...Object.keys(k.get()).map(Ae)));var He=r.div(["class","dashboard__nav-header"])(r.img(["attr","src","/images/capui-transparent.png"],["attr","height","80"])()),x=[["class","button"],["class","button--light"],["class","button--ghost"],["class","button--block"],["class","button--justify-start"]],De=r.nav(["class","dashboard__nav"])(r.div(["style","display","flex"],["style","flexDirection","column"],["style","gap","3px"],["style","alignItems","flex-start"],["style","width","100%"])(r.button(["class","button"],["class","button--light"],["class","button--block"],["style","marginBottom","10px"],["style","gap","10px"],["class","button--justify-start"],["click",()=>m({action:"DOWNLOAD_ZIP"})])(r.span()("capui.zip"),r.span()("[\u2193]")),r.button(["class","button"],["class","button--light"],["class","button--outline"],["class","button--block"],["style","marginBottom","10px"],["class","button--justify-start"],["click",()=>m({action:"SET_PAGE",page:"HOME"})])("Home"),r.button(...x,["click",()=>m({action:"SET_PAGE",page:"THEME"})])("Theme"),r.button(...x,["click",()=>m({action:"SET_PAGE",page:"UTILITY"})])("Utility"),r.button(...x,["click",()=>m({action:"SET_PAGE",page:"ACCORDION"})])("Accordion"),r.button(...x)("Alerts"),r.button(...x)("Badge"),r.button(...x)("Button"),r.button(...x)("Card"),r.button(...x)("Dashboard"),r.button(...x)("Dialog"),r.button(...x)("Flexpane"),r.button(...x)("Grid"),r.button(...x)("Tag"))),Pe=r.div(["class","dashboard__nav-footer"],["style","padding","20px"],["style","opacity","0.5"],["style","fontSize","12px"])("\xA9Copyright 2024"),ze=r.div(["class","dashboard__main-header"],["innerHTML:pages",()=>"Home",()=>f.get()==="HOME"],["innerHTML:pages",()=>"Accordion",()=>f.get()==="ACCORDION"],["innerHTML:pages",ye,()=>f.get()==="THEME"],["innerHTML:pages",()=>"Utility",()=>f.get()==="UTILITY"])(),Oe=r.div(["class","dashboard__main"],["innerHTML:pages",()=>"Home",()=>f.get()==="HOME"],["innerHTML:pages",()=>"Accordion",()=>f.get()==="ACCORDION"],["innerHTML:pages",ue,()=>f.get()==="THEME"],["innerHTML:pages",()=>"Utility",()=>f.get()==="UTILITY"])(),Ie=r.div(["class","dashboard__main-footer"],["class","dashboard__nav-footer"],["style","padding","20px"],["style","opacity","0.5"],["style","fontSize","12px"])(r.span()("All rights reserved. Made in the USA \u{1F1FA}\u{1F1F8} by ",r.a(["attr","href","https://kevinlint.com"],["attr","target","_blank"],["style","color","white"])("Kevin Lint")," as a product of ",r.a(["attr","href","https://github.com/linttrapmedia"],["attr","target","_blank"],["style","color","white"])("Lint Trap Media."))),$e=r.div(["class","dashboard__aside-header"])("Aside Header"),Re=r.aside(["class","dashboard__aside"],["innerHTML:properties",ke,()=>E.get()==="COLOR_PICKER"])(),Be=r.aside(["class","dashboard__aside-footer"])("Aside footer");document.addEventListener("DOMContentLoaded",()=>{r.$el("#root")(["class","dashboard"],["style","--main-bg-color","hsl(var(--token-color-background-hue), var(--token-color-background-saturation), calc(var(--token-color-background-lightness) + -5%))"],["innerHTML",()=>[He,De,Pe,ze,Oe,Ie,$e,Re,Be]]),j(),Z(),oe(),te(),re(),ae(),ne(),le(),Z(),ie(),ce(),se(),de(),be(),ge(),pe(),ve(),document.adoptedStyleSheets=[U,F,C,M,L,A,H,D,P,z,O,I,$,R,B,W]});})();
//# sourceMappingURL=ui.js.map
