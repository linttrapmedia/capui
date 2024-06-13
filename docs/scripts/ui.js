(()=>{var F=new CSSStyleSheet,ee=()=>F.replaceSync(`/* 
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
`);var M=new CSSStyleSheet,oe=()=>M.replaceSync(`/* 
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
`);var C=new CSSStyleSheet,te=()=>C.replaceSync(`/* 
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
`);var L=new CSSStyleSheet,re=()=>L.replaceSync("");var H=new CSSStyleSheet,ae=()=>H.replaceSync(`/* 
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
`);var P=new CSSStyleSheet,ne=()=>P.replaceSync(`.card {
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
`);var z=new CSSStyleSheet,V=()=>z.replaceSync(`
@media (min-width: 0px) {
    .dashboard {
        --bg-color: var(--token-color-black, black);
        --scrollbar-thumb-color: var(--token-black-80, black);
        --scrollbar-track-color: var(--token-white-10, black);
        --text-color: var(--token-white, white);
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
        background-color: rgba(255, 255, 255, 0.05);
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
        background-color: rgba(255, 255, 255, 0.05);
    }
    .dashboard__nav-footer {
        grid-column: 1/2;
        grid-row: 3/4;
        border-top: 1px solid var(--token-white-10, black);
        background-color: rgba(255, 255, 255, 0.05);
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
        border-top: 1px solid var(--token-white-10, black);
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
        border-left: 1px solid var(--token-white-10, black);
    }
    .dashboard__aside {
        grid-column: 3/4;
        grid-row: 2/3;
        overflow-y: auto;
        border-left: 1px solid var(--token-white-10, black);
        height: 100%;
    }
    .dashboard__aside-footer {
        grid-column: 3/4;
        grid-row: 3/4;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        border-left: 1px solid var(--token-white-10, black);
        border-top: 1px solid var(--token-white-10, black);
    }
}`);var A=new CSSStyleSheet,le=()=>A.replaceSync(`:root {
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
`);var O=new CSSStyleSheet,ie=()=>O.replaceSync("");var I=new CSSStyleSheet,ce=()=>I.replaceSync(`.flexgrid {
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
`);var R=new CSSStyleSheet,de=()=>R.replaceSync(`:root {

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
.flexpane--disabled {}`);var $=new CSSStyleSheet,se=()=>$.replaceSync(`.grid {
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
`);var D=new CSSStyleSheet,be=()=>D.replaceSync(`.section {
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
`);var N=new CSSStyleSheet,ge=()=>N.replaceSync(`.toggle {
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
`);var pe=new Map,ye=new MutationObserver(o=>{o.forEach(e=>{if(e.addedNodes.length>0&&e.type==="childList"){for(let a of e.addedNodes)if(a instanceof Element)for(let[r,[l,i]]of pe.entries()){let d=a.querySelectorAll(r);for(let n of d)j(n,l,i)}}})});ye.observe(document,{attributes:!0,childList:!0,subtree:!0});function me(o,e=!0,a){return(...r)=>{e&&pe.set(o,[r,a]);let l=document.querySelectorAll(o);for(let i of l)j(i,r,a)}}function fe(o,e){return(...a)=>j(o,a,e)}function xe(o,e){return(...a)=>{let r="http://www.w3.org/1999/xhtml",l=document.createElementNS(r,o);return j(l,a,e)}}function j(o,e=[],a={}){e.forEach(([l,...i])=>a[l](o,...i));function r(...l){return l.forEach(i=>o.append(i)),o}return r}function Z(o){return new Proxy({},{get:(e,a)=>a==="el"?r=>fe(r,o):a==="$el"?(r,l)=>me(r,l,o):xe(a,o)})}function Y(o){let{event:e=null,eventElement:a=window,hideOnFalse:r=!0,invokeImmediately:l=!0,mediaMinWidth:i=0,mediaMaxWidth:d=1/0,state:n=void 0}=o??{};return(...s)=>{let[c,y,f,k]=s,b=()=>{if(!(window.innerWidth>=i&&window.innerWidth<=d))return;let w=n&&typeof f=="function"?f(n.get()):f,Q=String(w)==="true"||String(w)==="false",X=typeof k=="function"?k(n?n.get():void 0):k??!0;if(Q&&r&&String(w)==="false"||Q&&X===!1)return c.removeAttribute(y);X!==!1&&c.setAttribute(y,String(w))};n&&n.sub(b),e&&(c??a).addEventListener(e,b),window.addEventListener("resize",b),l&&b()}}function J(o){let{event:e=null,eventElement:a=window,invokeImmediately:r=!0,mediaMinWidth:l=0,mediaMaxWidth:i=1/0,method:d="classList",state:n=null}=o??{};return(...s)=>{let[c,y,f]=s,k=()=>{if(!(window.innerWidth>=l&&window.innerWidth<=i))return;let g=typeof y=="function"?y(n?n.get():void 0):y;(typeof f=="function"?f(n?n.get():void 0):f??!0)&&(d==="className"?c.setAttribute("class",g):c.classList.add(g))};n&&n.sub(k),e&&(c??a).addEventListener(e,k),window.addEventListener("resize",k),r&&k()}}var U=o=>(e,a,r)=>{(typeof r=="function"?r():r??!0)&&e.addEventListener(o,a)};function _(o){let{state:e}=o??{};return(...a)=>{let[r,l,i]=a,d=()=>{let n=e?l(e.get()):l();(typeof i=="function"?i(e?e.get():void 0):i??!0)&&(r.innerHTML="",Array.isArray(n)?n.forEach(c=>{c instanceof HTMLElement?r.appendChild(c):r.appendChild(document.createTextNode(String(c)))}):n instanceof HTMLElement?r.appendChild(n):r.innerHTML=String(n))};e&&e.sub(d),d()}}function K(o){let{event:e=null,eventElement:a=window,invokeImmediately:r=!0,mediaMinWidth:l=0,mediaMaxWidth:i=1/0,state:d=void 0}=o??{};return(...n)=>{let[s,c,y,f]=n,k=()=>{if(!(window.innerWidth>=l&&window.innerWidth<=i))return;let g=String(typeof y=="function"?y(d?d.get():void 0):y);(typeof f=="function"?f(d?d.get():void 0):f??!0)&&(c.startsWith("--")?s.style.setProperty(c,g):s.style[c]=g)};d&&d.sub(k),window.addEventListener("resize",k),e&&(s??a).addEventListener(e,k),r&&!e&&k()}}function q(o){let{event:e,eventElement:a,state:r}=o??{};return(...l)=>{let[i,d,n]=l,s=()=>{let c=typeof d=="function"?d(r?r.get():void 0):d;(typeof n=="function"?n(r?r.get():void 0):n??!0)&&(i.textContent=String(c))};r&&r.sub(s),window.addEventListener("resize",s),e&&(i??a).addEventListener(e,s),s()}}function we(o,e,a){let r=e.split("."),l=(i,d,n)=>{let[s,...c]=d;return c.length===0?Array.isArray(i)?[...i.slice(0,s),n,...i.slice(s+1)]:{...i,[s]:n}:(i[s]===void 0&&(i[s]=typeof c[0]=="number"?[]:{}),{...i,[s]:l(i[s],c,n)})};return l(o,r,a)}function T(o,e){let a=o;if(e){let b=e.storage.getItem(e.key),g=JSON.parse(b),w=g!=null;(e.overwrite??!0)&&w&&(o=g),!(e.overwrite??!0)&&w&&(Array.isArray(o)&&Array.isArray(g)?o=[...o,...g]:typeof o=="object"&&typeof g=="object"&&(o={...o,...g}))}let r=o,l=[],i=()=>r,d=()=>l.forEach(b=>b(r)),n=b=>()=>c(b(r)),s=()=>c(a),c=b=>{r=b,l.forEach(g=>g(r)),e&&e.storage.setItem(e.key,JSON.stringify(r))};return{deepSet:(b,g)=>c(we(r,b,g)),get:i,pub:d,reset:s,reduce:n,set:c,sub:b=>l.push(b),unsub:b=>l.splice(l.indexOf(b),1)}}var S=T("black",{key:"colorPicker",storage:sessionStorage}),Se=new URLSearchParams(window.location.search).get("page"),u=T(Se??"HOME",{key:"page",storage:sessionStorage}),E=T("COLOR_PICKER",{key:"properties",storage:sessionStorage}),v=T("Dark",{key:"theme",storage:sessionStorage}),_e={colors:{brand:["#FF5A5F","#FFFFFF"],black:["#1F1F1F","#FFFFFF"],error:["#FF6347","#FFFFFF"],grey:["#757575","#FFFFFF"],info:["#3E82FC","#FFFFFF"],action:["#1E88E5","#FFFFFF"],success:["#00C853","#FFFFFF"],warning:["#FFC107","#1F1F1F"],white:["#FFFFFF","#1F1F1F"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"}},Te={colors:{black:["#000000","#FFFF00"],brand:["#FF00FF","#00FFFF"],error:["#FF0000","#0000FF"],grey:["#808080","#FF69B4"],info:["#0000FF","#00FF00"],action:["#FFA500","#8A2BE2"],success:["#00FF00","#FF0000"],warning:["#FF4500","#32CD32"],white:["#FFFFFF","#0000FF"]},fonts:{primary:"'Comic Sans MS', cursive, sans-serif",secondary:"'Comic Sans MS', cursive, sans-serif",tertiary:"'Comic Sans MS', cursive, sans-serif"}},h=T({Dark:_e,Crazy:Te},{key:"tokens",storage:sessionStorage});var W=new CSSStyleSheet,B=()=>{let o=h.get()[v.get()],{colors:e}=o,a=`
:root {
  --token-color-black: ${e.black[0]};
  --token-color-black-contrast: ${e.black[1]};
  --token-color-brand: ${e.brand[0]};
  --token-color-brand-contrast: ${e.brand[1]};
  --token-color-error: ${e.error[0]};
  --token-color-error-contrast: ${e.error[1]};
  --token-color-grey: ${e.grey[0]};
  --token-color-grey-contrast: ${e.grey[1]};
  --token-color-info: ${e.info[0]};
  --token-color-info-contrast: ${e.info[1]};
  --token-color-action: ${e.action[0]};
  --token-color-action-contrast: ${e.action[1]};
  --token-color-success: ${e.success[0]};
  --token-color-success-contrast: ${e.success[1]};
  --token-color-warning: ${e.warning[0]};
  --token-color-warning-contrast: ${e.warning[1]};
  --token-color-white: ${e.white[0]};
  --token-color-white-contrast: ${e.white[1]};
}
`;W.replaceSync(a)};var G=new CSSStyleSheet,he=()=>G.replaceSync(`.tooltip {
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
`);function p(o){let e="",a=Array.from(o.cssRules);for(let r of a)e+=r.cssText+`
`;return e}var m=o=>{switch(o.action){case"DOWNLOAD_ZIP":let e=new JSZip;e.file("tokens.css",p(W)),e.file("accordion.css",p(F)),e.file("alerts.css",p(M)),e.file("badge.css",p(C)),e.file("bg.css",p(L)),e.file("button.css",p(H)),e.file("card.css",p(P)),e.file("dashboard.css",p(z)),e.file("dialog.css",p(A)),e.file("dropdown.css",p(O)),e.file("flexgrid.css",p(I)),e.file("flexpane.css",p(R)),e.file("grid.css",p($)),e.file("section.css",p(D)),e.file("toggles.css",p(N)),e.file("tooltip.css",p(G)),e.generateAsync({type:"blob"}).then(a=>{let r=document.createElement("a");r.href=URL.createObjectURL(a),r.download="capui.zip",r.click(),console.log(r)});break;case"SET_PAGE":u.set(o.page),window.history.pushState(null,"",`?page=${o.page}`);break;case"SET_PROPERTIES":E.set(o.properties);break;case"SET_COLOR_PICKER":E.set("COLOR_PICKER"),S.set(o.colorKey);break;case"SET_COLOR_TOKEN":h.deepSet(`${o.theme}.colors.${o.key}`,[o.color,o.contrast]),B();break;case"SET_THEME":v.set(o.theme),B();break}};var t=Z({"innerHTML:colorPicker":_({state:S}),"innerHTML:pages":_({state:u}),"innerHTML:properties":_({state:E}),"innerHTML:themes":_({state:h}),"innerHTML:theme":_({state:v}),"innerText:pages":q({state:u}),"style:themes":K({state:h}),attr:Y(),change:U("change"),class:J(),click:U("click"),innerHTML:_(),input:U("input"),style:K()});var ve=()=>{let o=()=>S.get(),e=()=>v.get(),a=()=>h.get()[e()].colors[o()][0],r=()=>h.get()[e()].colors[o()][1];return t.div(["innerHTML:colorPicker",()=>[t.div()(S.get()),t.div(["style","opacity","0.35"],["style","fontSize","0.8em"])("Set the color and it's contrast"),t.div(["style","fontSize","0.85em"],["style","opacity",.6])("Color"),t.div(["style","borderRadius","5px"],["style","width",`${150-20}px`],["style","height",`${80-20}px`],["style","overflow","hidden"],["style","position","relative"])(t.input(["style","position","absolute"],["style","top",`-${20/2}px`],["style","left",`-${20/2}px`],["attr","type","color"],["style","width",`${150}px`],["style","height",`${80}px`],["style","backgroundColor","transparent"],["input",n=>{m({action:"SET_COLOR_TOKEN",key:S.get(),theme:v.get(),color:n.target.value,contrast:r()})}],["attr","value",a()])()),t.div(["style","fontSize","0.85em"],["style","opacity",.6])("Contrast"),t.div(["style","borderRadius","5px"],["style","width",`${150-20}px`],["style","height",`${80-20}px`],["style","overflow","hidden"],["style","position","relative"])(t.input(["style","position","absolute"],["style","top",`-${20/2}px`],["style","left",`-${20/2}px`],["attr","type","color"],["style","width",`${150}px`],["style","height",`${80}px`],["style","backgroundColor","transparent"],["input",n=>{m({action:"SET_COLOR_TOKEN",key:S.get(),theme:v.get(),color:a(),contrast:n.target.value})}],["attr","value",r()])()),t.div(["style","fontSize","0.85em"],["style","opacity",.6])("Token"),t.div(["style","whiteSpace","nowrap"],["style","fontSize","0.8em"],["style","opacity","0.35"])(`--token-${o()}`)]],["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])()};var Ee=o=>{let e=()=>v.get(),a=()=>h.get()[e()].colors[o][0],r=()=>h.get()[e()].colors[o][1];return t.div(["class","flexgrid__item"])(t.div(["class","card"],["class","card--small"],["class","card--light"],["class","card--ghost"],["style","--card-bg-color",`var(--token-color-${o})`],["style","--card-transition-duration",0],["click",()=>m({action:"SET_COLOR_PICKER",colorKey:o})],["style","cursor","pointer"])(t.div(["class","card__title"],["style:themes","--card-title-font-color",r])(o),t.div(["class","card__actions"])(t.div(["style","width","8px"],["style","height","8px"],["style","borderRight","1px solid rgba(255,255,255,1)"],["style","borderBottom","1px solid rgba(255,255,255,1)"],["style","display","flex"],["style","transform","rotate(-45deg)"])("")),t.div(["class","card__body"],["style","display","flex"],["style","columnGap","1%"],["style","rowGap","5px"],["style","flexWrap","wrap"],["style","alignItems","center"],["style","position","relative"],["style","alignItems","flex-start"],["style","justifyContent","flex-start"])(t.div(["style","borderRadius","2px"],["style","display","flex"],["style","flexDirection","column"],["style","height","20px"],["style","width","10%"],["style","backgroundColor",`var(--token-color-${o}-contrast)`])())))},ke=()=>{let o=h.get()[v.get()].colors;return t.div(["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])(t.section(["class","section"],["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])(t.div(["class","section__header"])(t.h2(["class","section__header__title"])("Colors"),t.p(["class","section__header__description"])("Colors are defined along with a contasting color to form a set of semantic primitives which can be further modified in context (per component) through the use of CSS variables.")),t.div(["class","flexgrid"],["style","--mobile-width","200px"],["style","--tablet-width","200px"],["style","--desktop-width","200px"],["style","--mobile-gap","10px"],["style","--tablet-gap","10px"],["style","--desktop-gap","10px"],["innerHTML:theme",()=>Object.keys(o).map(Ee)])()),t.section()(t.h2()("Fonts")))};var Fe=o=>t.option(["attr","selected",!0,()=>v.get()===o])(o),ue=()=>t.div(["style","display","flex"],["style","flexDirection","row"],["style","gap","10px"])(t.label()("Theme"),t.select(["change",o=>{let e=o.target.value;m({action:"SET_THEME",theme:e})}])(...Object.keys(h.get()).map(Fe)));var Me=t.div(["class","dashboard__nav-header"])(t.img(["attr","src","/images/capui-transparent.png"],["attr","height","80"])()),x=[["class","button"],["class","button--light"],["class","button--ghost"],["class","button--block"],["class","button--justify-start"]],Ce=t.nav(["class","dashboard__nav"])(t.div(["style","display","flex"],["style","flexDirection","column"],["style","gap","3px"],["style","alignItems","flex-start"],["style","width","100%"])(t.button(["class","button"],["class","button--light"],["class","button--block"],["style","marginBottom","10px"],["style","gap","10px"],["class","button--justify-start"],["click",()=>m({action:"DOWNLOAD_ZIP"})])(t.span()("capui.zip"),t.span()("[\u2193]")),t.button(["class","button"],["class","button--light"],["class","button--outline"],["class","button--block"],["style","marginBottom","10px"],["class","button--justify-start"],["click",()=>m({action:"SET_PAGE",page:"HOME"})])("Home"),t.button(...x,["click",()=>m({action:"SET_PAGE",page:"THEME"})])("Theme"),t.button(...x,["click",()=>m({action:"SET_PAGE",page:"UTILITY"})])("Utility"),t.button(...x,["click",()=>m({action:"SET_PAGE",page:"ACCORDION"})])("Accordion"),t.button(...x)("Alerts"),t.button(...x)("Badge"),t.button(...x)("Button"),t.button(...x)("Card"),t.button(...x)("Dashboard"),t.button(...x)("Dialog"),t.button(...x)("Flexpane"),t.button(...x)("Grid"),t.button(...x)("Tag"))),Le=t.div(["class","dashboard__nav-footer"],["style","padding","20px"],["style","opacity","0.5"],["style","fontSize","12px"])("\xA9Copyright 2024"),He=t.div(["class","dashboard__main-header"],["innerHTML:pages",()=>"Home",()=>u.get()==="HOME"],["innerHTML:pages",()=>"Accordion",()=>u.get()==="ACCORDION"],["innerHTML:pages",ue,()=>u.get()==="THEME"],["innerHTML:pages",()=>"Utility",()=>u.get()==="UTILITY"])(),Pe=t.div(["class","dashboard__main"],["innerHTML:pages",()=>"Home",()=>u.get()==="HOME"],["innerHTML:pages",()=>"Accordion",()=>u.get()==="ACCORDION"],["innerHTML:pages",ke,()=>u.get()==="THEME"],["innerHTML:pages",()=>"Utility",()=>u.get()==="UTILITY"])(),ze=t.div(["class","dashboard__main-footer"],["class","dashboard__nav-footer"],["style","padding","20px"],["style","opacity","0.5"],["style","fontSize","12px"])(t.span()("All rights reserved. Made in the USA \u{1F1FA}\u{1F1F8} by ",t.a(["attr","href","https://kevinlint.com"],["attr","target","_blank"],["style","color","white"])("Kevin Lint")," as a product of ",t.a(["attr","href","https://github.com/linttrapmedia"],["attr","target","_blank"],["style","color","white"])("Lint Trap Media."))),Ae=t.div(["class","dashboard__aside-header"])("Aside Header"),Oe=t.aside(["class","dashboard__aside"],["innerHTML:properties",ve,()=>E.get()==="COLOR_PICKER"])(),Ie=t.aside(["class","dashboard__aside-footer"])("Aside footer");document.addEventListener("DOMContentLoaded",()=>{t.$el("#root")(["class","dashboard"],["innerHTML",()=>[Me,Ce,Le,He,Pe,ze,Ae,Oe,Ie]]),B(),V(),ee(),oe(),te(),re(),ae(),ne(),V(),le(),ie(),ce(),de(),se(),be(),ge(),he(),document.adoptedStyleSheets=[W,F,M,C,L,H,P,z,A,O,I,R,$,D,N,G]});})();
//# sourceMappingURL=ui.js.map
