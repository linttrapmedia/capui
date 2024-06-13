(()=>{var z=new CSSStyleSheet,Q=()=>z.replaceSync(`/* 
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
`);var L=new CSSStyleSheet,X=()=>L.replaceSync(`/* 
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
`);var H=new CSSStyleSheet,oo=()=>H.replaceSync(`/* 
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
`);var P=new CSSStyleSheet,ro=()=>P.replaceSync("");var A=new CSSStyleSheet,eo=()=>A.replaceSync(`/* 
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
`);var I=new CSSStyleSheet,to=()=>I.replaceSync(`.card {
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
`);var O=new CSSStyleSheet,R=()=>O.replaceSync(`
@media (min-width: 0px) {
    .dashboard {
        --bg-color: var(--token-black, black);
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
}`);var N=new CSSStyleSheet,no=()=>N.replaceSync(`:root {
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
`);var U=new CSSStyleSheet,lo=()=>U.replaceSync("");var j=new CSSStyleSheet,ao=()=>j.replaceSync(`.flexgrid {
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
`);var D=new CSSStyleSheet,co=()=>D.replaceSync(`:root {

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
.flexpane--disabled {}`);var B=new CSSStyleSheet,bo=()=>B.replaceSync(`.grid {
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
`);var G=new CSSStyleSheet,io=()=>G.replaceSync(`.section {
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
`);var W=new CSSStyleSheet,ko=()=>W.replaceSync(`.toggle {
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
`);var F=new CSSStyleSheet,vo=()=>F.replaceSync(`:root {
  /* Color Palette */
  --token-black-r: 20;
  --token-black-g: 21;
  --token-black-b: 27;
  --token-black: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 1);
  --token-black-01: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.01);
  --token-black-02: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.02);
  --token-black-03: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.03);
  --token-black-04: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.04);
  --token-black-05: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.05);
  --token-black-06: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.06);
  --token-black-07: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.07);
  --token-black-08: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.08);
  --token-black-09: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.09);
  --token-black-10: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.1);
  --token-black-20: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.2);
  --token-black-30: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.3);
  --token-black-40: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.4);
  --token-black-50: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.5);
  --token-black-60: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.6);
  --token-black-70: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.7);
  --token-black-80: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.8);
  --token-black-90: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.9);

  --token-blue-r: 66;
  --token-blue-g: 153;
  --token-blue-b: 225;
  --token-blue: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 1);
  --token-blue-01: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.01);
  --token-blue-02: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.02);
  --token-blue-03: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.03);
  --token-blue-04: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.04);
  --token-blue-05: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.05);
  --token-blue-06: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.06);
  --token-blue-07: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.07);
  --token-blue-08: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.08);
  --token-blue-09: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.09);
  --token-blue-10: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.1);
  --token-blue-20: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.2);
  --token-blue-30: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.3);
  --token-blue-40: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.4);
  --token-blue-50: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.5);
  --token-blue-60: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.6);
  --token-blue-70: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.7);
  --token-blue-80: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.8);
  --token-blue-90: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.9);

  --token-green-r: 52;
  --token-green-g: 163;
  --token-green-b: 99;
  --token-green: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 1);
  --token-green-01: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.01);
  --token-green-02: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.02);
  --token-green-03: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.03);
  --token-green-04: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.04);
  --token-green-05: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.05);
  --token-green-06: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.06);
  --token-green-07: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.07);
  --token-green-08: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.08);
  --token-green-09: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.09);
  --token-green-10: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.1);
  --token-green-20: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.2);
  --token-green-30: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.3);
  --token-green-40: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.4);
  --token-green-50: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.5);
  --token-green-60: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.6);
  --token-green-70: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.7);
  --token-green-80: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.8);
  --token-green-90: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.9);

  --token-orange-r: 237;
  --token-orange-g: 137;
  --token-orange-b: 54;
  --token-orange: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 1);
  --token-orange-01: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.01);
  --token-orange-02: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.02);
  --token-orange-03: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.03);
  --token-orange-04: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.04);
  --token-orange-05: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.05);
  --token-orange-06: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.06);
  --token-orange-07: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.07);
  --token-orange-08: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.08);
  --token-orange-09: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.09);
  --token-orange-10: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.1);
  --token-orange-20: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.2);
  --token-orange-30: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.3);
  --token-orange-40: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.4);
  --token-orange-50: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.5);
  --token-orange-60: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.6);
  --token-orange-70: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.7);
  --token-orange-80: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.8);
  --token-orange-90: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.9);

  --token-purple-r: 128;
  --token-purple-g: 90;
  --token-purple-b: 213;
  --token-purple: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 1);
  --token-purple-01: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.01);
  --token-purple-02: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.02);
  --token-purple-03: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.03);
  --token-purple-04: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.04);
  --token-purple-05: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.05);
  --token-purple-06: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.06);
  --token-purple-07: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.07);
  --token-purple-08: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.08);
  --token-purple-09: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.09);
  --token-purple-10: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.1);
  --token-purple-20: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.2);
  --token-purple-30: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.3);
  --token-purple-40: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.4);
  --token-purple-50: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.5);
  --token-purple-60: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.6);
  --token-purple-70: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.7);
  --token-purple-80: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.8);
  --token-purple-90: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.9);

  --token-red-r: 229;
  --token-red-g: 62;
  --token-red-b: 62;
  --token-red: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 1);
  --token-red-01: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.01);
  --token-red-02: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.02);
  --token-red-03: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.03);
  --token-red-04: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.04);
  --token-red-05: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.05);
  --token-red-06: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.06);
  --token-red-07: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.07);
  --token-red-08: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.08);
  --token-red-09: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.09);
  --token-red-10: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.1);
  --token-red-20: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.2);
  --token-red-30: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.3);
  --token-red-40: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.4);
  --token-red-50: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.5);
  --token-red-60: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.6);
  --token-red-70: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.7);
  --token-red-80: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.8);
  --token-red-90: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.9);

  --token-white-r: 255;
  --token-white-g: 255;
  --token-white-b: 255;
  --token-white: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 1);
  --token-white-01: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.01);
  --token-white-02: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.02);
  --token-white-03: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.03);
  --token-white-04: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.04);
  --token-white-05: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.05);
  --token-white-06: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.06);
  --token-white-07: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.07);
  --token-white-08: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.08);
  --token-white-09: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.09);
  --token-white-10: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.1);
  --token-white-20: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.2);
  --token-white-30: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.3);
  --token-white-40: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.4);
  --token-white-50: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.5);
  --token-white-60: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.6);
  --token-white-70: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.7);
  --token-white-80: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.8);
  --token-white-90: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.9);

  --token-yellow-r: 236;
  --token-yellow-g: 201;
  --token-yellow-b: 75;
  --token-yellow: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 1);
  --token-yellow-01: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.01);
  --token-yellow-02: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.02);
  --token-yellow-03: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.03);
  --token-yellow-04: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.04);
  --token-yellow-05: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.05);
  --token-yellow-06: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.06);
  --token-yellow-07: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.07);
  --token-yellow-08: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.08);
  --token-yellow-09: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.09);
  --token-yellow-10: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.1);
  --token-yellow-20: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.2);
  --token-yellow-30: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.3);
  --token-yellow-40: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.4);
  --token-yellow-50: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.5);
  --token-yellow-60: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.6);
  --token-yellow-70: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.7);
  --token-yellow-80: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.8);
  --token-yellow-90: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.9);

  /* Fonts */

  --token-font-mono: Consolas, Menlo, Monaco, "Liberation Mono", monospace;
  --token-font-sans: system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;
  --token-font-serif: Georgia, Cambria, "Times New Roman", Times, serif;
  --token-font-size-2xs: 11px;
  --token-font-size-xs: 12px;
  --token-font-size-sm: 14px;
  --token-font-size-md: 16px;
  --token-font-size-lg: 18px;
  --token-font-size-xl: 20px;
  --token-font-size-2xl: 24px;
  --token-font-size-3xl: 30px;
  --token-font-size-4xl: 36px;
}

.align-items-center {
  align-items: center;
}
.align-items-end {
  align-items: flex-end;
}
.align-items-start {
  align-items: flex-start;
}
.bg-color-black {
  background-color: var(--token-black);
}
.bg-color-black-01 {
  background-color: var(--token-black-01);
}
.bg-color-black-01:hover:hover {
  background-color: var(--token-black-01);
}
.bg-color-black-02 {
  background-color: var(--token-black-02);
}
.bg-color-black-02:hover:hover {
  background-color: var(--token-black-02);
}
.bg-color-black-03 {
  background-color: var(--token-black-03);
}
.bg-color-black-03:hover:hover {
  background-color: var(--token-black-03);
}
.bg-color-black-04 {
  background-color: var(--token-black-04);
}
.bg-color-black-04:hover:hover {
  background-color: var(--token-black-04);
}
.bg-color-black-05 {
  background-color: var(--token-black-05);
}
.bg-color-black-05:hover:hover {
  background-color: var(--token-black-05);
}
.bg-color-black-06 {
  background-color: var(--token-black-06);
}
.bg-color-black-06:hover:hover {
  background-color: var(--token-black-06);
}
.bg-color-black-07 {
  background-color: var(--token-black-07);
}
.bg-color-black-07:hover:hover {
  background-color: var(--token-black-07);
}
.bg-color-black-08 {
  background-color: var(--token-black-08);
}
.bg-color-black-08:hover:hover {
  background-color: var(--token-black-08);
}
.bg-color-black-09 {
  background-color: var(--token-black-09);
}
.bg-color-black-09:hover:hover {
  background-color: var(--token-black-09);
}
.bg-color-black-10 {
  background-color: var(--token-black-10);
}
.bg-color-black-10:hover:hover {
  background-color: var(--token-black-10);
}
.bg-color-black-20 {
  background-color: var(--token-black-20);
}
.bg-color-black-20:hover:hover {
  background-color: var(--token-black-20);
}
.bg-color-black-30 {
  background-color: var(--token-black-30);
}
.bg-color-black-30:hover:hover {
  background-color: var(--token-black-30);
}
.bg-color-black-40 {
  background-color: var(--token-black-40);
}
.bg-color-black-40:hover:hover {
  background-color: var(--token-black-40);
}
.bg-color-black-50 {
  background-color: var(--token-black-50);
}
.bg-color-black-50:hover:hover {
  background-color: var(--token-black-50);
}
.bg-color-black-60 {
  background-color: var(--token-black-60);
}
.bg-color-black-60:hover:hover {
  background-color: var(--token-black-60);
}
.bg-color-black-70 {
  background-color: var(--token-black-70);
}
.bg-color-black-70:hover:hover {
  background-color: var(--token-black-70);
}
.bg-color-black-80 {
  background-color: var(--token-black-80);
}
.bg-color-black-80:hover:hover {
  background-color: var(--token-black-80);
}
.bg-color-black-90 {
  background-color: var(--token-black-90);
}
.bg-color-black-90:hover:hover {
  background-color: var(--token-black-90);
}
.bg-color-black:hover:hover {
  background-color: var(--token-black);
}
.bg-color-blue {
  background-color: var(--token-blue);
}
.bg-color-blue-01 {
  background-color: var(--token-blue-01);
}
.bg-color-blue-01:hover:hover {
  background-color: var(--token-blue-01);
}
.bg-color-blue-02 {
  background-color: var(--token-blue-02);
}
.bg-color-blue-02:hover:hover {
  background-color: var(--token-blue-02);
}
.bg-color-blue-03 {
  background-color: var(--token-blue-03);
}
.bg-color-blue-03:hover:hover {
  background-color: var(--token-blue-03);
}
.bg-color-blue-04 {
  background-color: var(--token-blue-04);
}
.bg-color-blue-04:hover:hover {
  background-color: var(--token-blue-04);
}
.bg-color-blue-05 {
  background-color: var(--token-blue-05);
}
.bg-color-blue-05:hover:hover {
  background-color: var(--token-blue-05);
}
.bg-color-blue-06 {
  background-color: var(--token-blue-06);
}
.bg-color-blue-06:hover:hover {
  background-color: var(--token-blue-06);
}
.bg-color-blue-07 {
  background-color: var(--token-blue-07);
}
.bg-color-blue-07:hover:hover {
  background-color: var(--token-blue-07);
}
.bg-color-blue-08 {
  background-color: var(--token-blue-08);
}
.bg-color-blue-08:hover:hover {
  background-color: var(--token-blue-08);
}
.bg-color-blue-09 {
  background-color: var(--token-blue-09);
}
.bg-color-blue-09:hover:hover {
  background-color: var(--token-blue-09);
}
.bg-color-blue-10 {
  background-color: var(--token-blue-10);
}
.bg-color-blue-10:hover:hover {
  background-color: var(--token-blue-10);
}
.bg-color-blue-20 {
  background-color: var(--token-blue-20);
}
.bg-color-blue-20:hover:hover {
  background-color: var(--token-blue-20);
}
.bg-color-blue-30 {
  background-color: var(--token-blue-30);
}
.bg-color-blue-30:hover:hover {
  background-color: var(--token-blue-30);
}
.bg-color-blue-40 {
  background-color: var(--token-blue-40);
}
.bg-color-blue-40:hover:hover {
  background-color: var(--token-blue-40);
}
.bg-color-blue-50 {
  background-color: var(--token-blue-50);
}
.bg-color-blue-50:hover:hover {
  background-color: var(--token-blue-50);
}
.bg-color-blue-60 {
  background-color: var(--token-blue-60);
}
.bg-color-blue-60:hover:hover {
  background-color: var(--token-blue-60);
}
.bg-color-blue-70 {
  background-color: var(--token-blue-70);
}
.bg-color-blue-70:hover:hover {
  background-color: var(--token-blue-70);
}
.bg-color-blue-80 {
  background-color: var(--token-blue-80);
}
.bg-color-blue-80:hover:hover {
  background-color: var(--token-blue-80);
}
.bg-color-blue-90 {
  background-color: var(--token-blue-90);
}
.bg-color-blue-90:hover:hover {
  background-color: var(--token-blue-90);
}
.bg-color-blue:hover:hover {
  background-color: var(--token-blue);
}
.bg-color-green {
  background-color: var(--token-green);
}
.bg-color-green-01 {
  background-color: var(--token-green-01);
}
.bg-color-green-01:hover:hover {
  background-color: var(--token-green-01);
}
.bg-color-green-02 {
  background-color: var(--token-green-02);
}
.bg-color-green-02:hover:hover {
  background-color: var(--token-green-02);
}
.bg-color-green-03 {
  background-color: var(--token-green-03);
}
.bg-color-green-03:hover:hover {
  background-color: var(--token-green-03);
}
.bg-color-green-04 {
  background-color: var(--token-green-04);
}
.bg-color-green-04:hover:hover {
  background-color: var(--token-green-04);
}
.bg-color-green-05 {
  background-color: var(--token-green-05);
}
.bg-color-green-05:hover:hover {
  background-color: var(--token-green-05);
}
.bg-color-green-06 {
  background-color: var(--token-green-06);
}
.bg-color-green-06:hover:hover {
  background-color: var(--token-green-06);
}
.bg-color-green-07 {
  background-color: var(--token-green-07);
}
.bg-color-green-07:hover:hover {
  background-color: var(--token-green-07);
}
.bg-color-green-08 {
  background-color: var(--token-green-08);
}
.bg-color-green-08:hover:hover {
  background-color: var(--token-green-08);
}
.bg-color-green-09 {
  background-color: var(--token-green-09);
}
.bg-color-green-09:hover:hover {
  background-color: var(--token-green-09);
}
.bg-color-green-10 {
  background-color: var(--token-green-10);
}
.bg-color-green-10:hover:hover {
  background-color: var(--token-green-10);
}
.bg-color-green-20 {
  background-color: var(--token-green-20);
}
.bg-color-green-20:hover:hover {
  background-color: var(--token-green-20);
}
.bg-color-green-30 {
  background-color: var(--token-green-30);
}
.bg-color-green-30:hover:hover {
  background-color: var(--token-green-30);
}
.bg-color-green-40 {
  background-color: var(--token-green-40);
}
.bg-color-green-40:hover:hover {
  background-color: var(--token-green-40);
}
.bg-color-green-50 {
  background-color: var(--token-green-50);
}
.bg-color-green-50:hover:hover {
  background-color: var(--token-green-50);
}
.bg-color-green-60 {
  background-color: var(--token-green-60);
}
.bg-color-green-60:hover:hover {
  background-color: var(--token-green-60);
}
.bg-color-green-70 {
  background-color: var(--token-green-70);
}
.bg-color-green-70:hover:hover {
  background-color: var(--token-green-70);
}
.bg-color-green-80 {
  background-color: var(--token-green-80);
}
.bg-color-green-80:hover:hover {
  background-color: var(--token-green-80);
}
.bg-color-green-90 {
  background-color: var(--token-green-90);
}
.bg-color-green-90:hover:hover {
  background-color: var(--token-green-90);
}
.bg-color-green:hover:hover {
  background-color: var(--token-green);
}
.bg-color-orange {
  background-color: var(--token-orange);
}
.bg-color-orange-01 {
  background-color: var(--token-orange-01);
}
.bg-color-orange-01:hover:hover {
  background-color: var(--token-orange-01);
}
.bg-color-orange-02 {
  background-color: var(--token-orange-02);
}
.bg-color-orange-02:hover:hover {
  background-color: var(--token-orange-02);
}
.bg-color-orange-03 {
  background-color: var(--token-orange-03);
}
.bg-color-orange-03:hover:hover {
  background-color: var(--token-orange-03);
}
.bg-color-orange-04 {
  background-color: var(--token-orange-04);
}
.bg-color-orange-04:hover:hover {
  background-color: var(--token-orange-04);
}
.bg-color-orange-05 {
  background-color: var(--token-orange-05);
}
.bg-color-orange-05:hover:hover {
  background-color: var(--token-orange-05);
}
.bg-color-orange-06 {
  background-color: var(--token-orange-06);
}
.bg-color-orange-06:hover:hover {
  background-color: var(--token-orange-06);
}
.bg-color-orange-07 {
  background-color: var(--token-orange-07);
}
.bg-color-orange-07:hover:hover {
  background-color: var(--token-orange-07);
}
.bg-color-orange-08 {
  background-color: var(--token-orange-08);
}
.bg-color-orange-08:hover:hover {
  background-color: var(--token-orange-08);
}
.bg-color-orange-09 {
  background-color: var(--token-orange-09);
}
.bg-color-orange-09:hover:hover {
  background-color: var(--token-orange-09);
}
.bg-color-orange-10 {
  background-color: var(--token-orange-10);
}
.bg-color-orange-10:hover:hover {
  background-color: var(--token-orange-10);
}
.bg-color-orange-20 {
  background-color: var(--token-orange-20);
}
.bg-color-orange-20:hover:hover {
  background-color: var(--token-orange-20);
}
.bg-color-orange-30 {
  background-color: var(--token-orange-30);
}
.bg-color-orange-30:hover:hover {
  background-color: var(--token-orange-30);
}
.bg-color-orange-40 {
  background-color: var(--token-orange-40);
}
.bg-color-orange-40:hover:hover {
  background-color: var(--token-orange-40);
}
.bg-color-orange-50 {
  background-color: var(--token-orange-50);
}
.bg-color-orange-50:hover:hover {
  background-color: var(--token-orange-50);
}
.bg-color-orange-60 {
  background-color: var(--token-orange-60);
}
.bg-color-orange-60:hover:hover {
  background-color: var(--token-orange-60);
}
.bg-color-orange-70 {
  background-color: var(--token-orange-70);
}
.bg-color-orange-70:hover:hover {
  background-color: var(--token-orange-70);
}
.bg-color-orange-80 {
  background-color: var(--token-orange-80);
}
.bg-color-orange-80:hover:hover {
  background-color: var(--token-orange-80);
}
.bg-color-orange-90 {
  background-color: var(--token-orange-90);
}
.bg-color-orange-90:hover:hover {
  background-color: var(--token-orange-90);
}
.bg-color-orange:hover:hover {
  background-color: var(--token-orange);
}
.bg-color-purple {
  background-color: var(--token-purple);
}
.bg-color-purple-01 {
  background-color: var(--token-purple-01);
}
.bg-color-purple-01:hover:hover {
  background-color: var(--token-purple-01);
}
.bg-color-purple-02 {
  background-color: var(--token-purple-02);
}
.bg-color-purple-02:hover:hover {
  background-color: var(--token-purple-02);
}
.bg-color-purple-03 {
  background-color: var(--token-purple-03);
}
.bg-color-purple-03:hover:hover {
  background-color: var(--token-purple-03);
}
.bg-color-purple-04 {
  background-color: var(--token-purple-04);
}
.bg-color-purple-04:hover:hover {
  background-color: var(--token-purple-04);
}
.bg-color-purple-05 {
  background-color: var(--token-purple-05);
}
.bg-color-purple-05:hover:hover {
  background-color: var(--token-purple-05);
}
.bg-color-purple-06 {
  background-color: var(--token-purple-06);
}
.bg-color-purple-06:hover:hover {
  background-color: var(--token-purple-06);
}
.bg-color-purple-07 {
  background-color: var(--token-purple-07);
}
.bg-color-purple-07:hover:hover {
  background-color: var(--token-purple-07);
}
.bg-color-purple-08 {
  background-color: var(--token-purple-08);
}
.bg-color-purple-08:hover:hover {
  background-color: var(--token-purple-08);
}
.bg-color-purple-09 {
  background-color: var(--token-purple-09);
}
.bg-color-purple-09:hover:hover {
  background-color: var(--token-purple-09);
}
.bg-color-purple-10 {
  background-color: var(--token-purple-10);
}
.bg-color-purple-10:hover:hover {
  background-color: var(--token-purple-10);
}
.bg-color-purple-20 {
  background-color: var(--token-purple-20);
}
.bg-color-purple-20:hover:hover {
  background-color: var(--token-purple-20);
}
.bg-color-purple-30 {
  background-color: var(--token-purple-30);
}
.bg-color-purple-30:hover:hover {
  background-color: var(--token-purple-30);
}
.bg-color-purple-40 {
  background-color: var(--token-purple-40);
}
.bg-color-purple-40:hover:hover {
  background-color: var(--token-purple-40);
}
.bg-color-purple-50 {
  background-color: var(--token-purple-50);
}
.bg-color-purple-50:hover:hover {
  background-color: var(--token-purple-50);
}
.bg-color-purple-60 {
  background-color: var(--token-purple-60);
}
.bg-color-purple-60:hover:hover {
  background-color: var(--token-purple-60);
}
.bg-color-purple-70 {
  background-color: var(--token-purple-70);
}
.bg-color-purple-70:hover:hover {
  background-color: var(--token-purple-70);
}
.bg-color-purple-80 {
  background-color: var(--token-purple-80);
}
.bg-color-purple-80:hover:hover {
  background-color: var(--token-purple-80);
}
.bg-color-purple-90 {
  background-color: var(--token-purple-90);
}
.bg-color-purple-90:hover:hover {
  background-color: var(--token-purple-90);
}
.bg-color-purple:hover:hover {
  background-color: var(--token-purple);
}
.bg-color-red {
  background-color: var(--token-red);
}
.bg-color-red-01 {
  background-color: var(--token-red-01);
}
.bg-color-red-01:hover:hover {
  background-color: var(--token-red-01);
}
.bg-color-red-02 {
  background-color: var(--token-red-02);
}
.bg-color-red-02:hover:hover {
  background-color: var(--token-red-02);
}
.bg-color-red-03 {
  background-color: var(--token-red-03);
}
.bg-color-red-03:hover:hover {
  background-color: var(--token-red-03);
}
.bg-color-red-04 {
  background-color: var(--token-red-04);
}
.bg-color-red-04:hover:hover {
  background-color: var(--token-red-04);
}
.bg-color-red-05 {
  background-color: var(--token-red-05);
}
.bg-color-red-05:hover:hover {
  background-color: var(--token-red-05);
}
.bg-color-red-06 {
  background-color: var(--token-red-06);
}
.bg-color-red-06:hover:hover {
  background-color: var(--token-red-06);
}
.bg-color-red-07 {
  background-color: var(--token-red-07);
}
.bg-color-red-07:hover:hover {
  background-color: var(--token-red-07);
}
.bg-color-red-08 {
  background-color: var(--token-red-08);
}
.bg-color-red-08:hover:hover {
  background-color: var(--token-red-08);
}
.bg-color-red-09 {
  background-color: var(--token-red-09);
}
.bg-color-red-09:hover:hover {
  background-color: var(--token-red-09);
}
.bg-color-red-10 {
  background-color: var(--token-red-10);
}
.bg-color-red-10:hover:hover {
  background-color: var(--token-red-10);
}
.bg-color-red-20 {
  background-color: var(--token-red-20);
}
.bg-color-red-20:hover:hover {
  background-color: var(--token-red-20);
}
.bg-color-red-30 {
  background-color: var(--token-red-30);
}
.bg-color-red-30:hover:hover {
  background-color: var(--token-red-30);
}
.bg-color-red-40 {
  background-color: var(--token-red-40);
}
.bg-color-red-40:hover:hover {
  background-color: var(--token-red-40);
}
.bg-color-red-50 {
  background-color: var(--token-red-50);
}
.bg-color-red-50:hover:hover {
  background-color: var(--token-red-50);
}
.bg-color-red-60 {
  background-color: var(--token-red-60);
}
.bg-color-red-60:hover:hover {
  background-color: var(--token-red-60);
}
.bg-color-red-70 {
  background-color: var(--token-red-70);
}
.bg-color-red-70:hover:hover {
  background-color: var(--token-red-70);
}
.bg-color-red-80 {
  background-color: var(--token-red-80);
}
.bg-color-red-80:hover:hover {
  background-color: var(--token-red-80);
}
.bg-color-red-90 {
  background-color: var(--token-red-90);
}
.bg-color-red-90:hover:hover {
  background-color: var(--token-red-90);
}
.bg-color-red:hover:hover {
  background-color: var(--token-red);
}
.bg-color-white {
  background-color: var(--token-white);
}
.bg-color-white-01 {
  background-color: var(--token-white-01);
}
.bg-color-white-01:hover:hover {
  background-color: var(--token-white-01);
}
.bg-color-white-02 {
  background-color: var(--token-white-02);
}
.bg-color-white-02:hover:hover {
  background-color: var(--token-white-02);
}
.bg-color-white-03 {
  background-color: var(--token-white-03);
}
.bg-color-white-03:hover:hover {
  background-color: var(--token-white-03);
}
.bg-color-white-04 {
  background-color: var(--token-white-04);
}
.bg-color-white-04:hover:hover {
  background-color: var(--token-white-04);
}
.bg-color-white-05 {
  background-color: var(--token-white-05);
}
.bg-color-white-05:hover:hover {
  background-color: var(--token-white-05);
}
.bg-color-white-06 {
  background-color: var(--token-white-06);
}
.bg-color-white-06:hover:hover {
  background-color: var(--token-white-06);
}
.bg-color-white-07 {
  background-color: var(--token-white-07);
}
.bg-color-white-07:hover:hover {
  background-color: var(--token-white-07);
}
.bg-color-white-08 {
  background-color: var(--token-white-08);
}
.bg-color-white-08:hover:hover {
  background-color: var(--token-white-08);
}
.bg-color-white-09 {
  background-color: var(--token-white-09);
}
.bg-color-white-09:hover:hover {
  background-color: var(--token-white-09);
}
.bg-color-white-10 {
  background-color: var(--token-white-10);
}
.bg-color-white-10:hover:hover {
  background-color: var(--token-white-10);
}
.bg-color-white-20 {
  background-color: var(--token-white-20);
}
.bg-color-white-20:hover:hover {
  background-color: var(--token-white-20);
}
.bg-color-white-30 {
  background-color: var(--token-white-30);
}
.bg-color-white-30:hover:hover {
  background-color: var(--token-white-30);
}
.bg-color-white-40 {
  background-color: var(--token-white-40);
}
.bg-color-white-40:hover:hover {
  background-color: var(--token-white-40);
}
.bg-color-white-50 {
  background-color: var(--token-white-50);
}
.bg-color-white-50:hover:hover {
  background-color: var(--token-white-50);
}
.bg-color-white-60 {
  background-color: var(--token-white-60);
}
.bg-color-white-60:hover:hover {
  background-color: var(--token-white-60);
}
.bg-color-white-70 {
  background-color: var(--token-white-70);
}
.bg-color-white-70:hover:hover {
  background-color: var(--token-white-70);
}
.bg-color-white-80 {
  background-color: var(--token-white-80);
}
.bg-color-white-80:hover:hover {
  background-color: var(--token-white-80);
}
.bg-color-white-90 {
  background-color: var(--token-white-90);
}
.bg-color-white-90:hover:hover {
  background-color: var(--token-white-90);
}
.bg-color-white:hover:hover {
  background-color: var(--token-white);
}
.bg-color-yellow {
  background-color: var(--token-yellow);
}
.bg-color-yellow-01 {
  background-color: var(--token-yellow-01);
}
.bg-color-yellow-01:hover:hover {
  background-color: var(--token-yellow-01);
}
.bg-color-yellow-02 {
  background-color: var(--token-yellow-02);
}
.bg-color-yellow-02:hover:hover {
  background-color: var(--token-yellow-02);
}
.bg-color-yellow-03 {
  background-color: var(--token-yellow-03);
}
.bg-color-yellow-03:hover:hover {
  background-color: var(--token-yellow-03);
}
.bg-color-yellow-04 {
  background-color: var(--token-yellow-04);
}
.bg-color-yellow-04:hover:hover {
  background-color: var(--token-yellow-04);
}
.bg-color-yellow-05 {
  background-color: var(--token-yellow-05);
}
.bg-color-yellow-05:hover:hover {
  background-color: var(--token-yellow-05);
}
.bg-color-yellow-06 {
  background-color: var(--token-yellow-06);
}
.bg-color-yellow-06:hover:hover {
  background-color: var(--token-yellow-06);
}
.bg-color-yellow-07 {
  background-color: var(--token-yellow-07);
}
.bg-color-yellow-07:hover:hover {
  background-color: var(--token-yellow-07);
}
.bg-color-yellow-08 {
  background-color: var(--token-yellow-08);
}
.bg-color-yellow-08:hover:hover {
  background-color: var(--token-yellow-08);
}
.bg-color-yellow-09 {
  background-color: var(--token-yellow-09);
}
.bg-color-yellow-09:hover:hover {
  background-color: var(--token-yellow-09);
}
.bg-color-yellow-10 {
  background-color: var(--token-yellow-10);
}
.bg-color-yellow-10:hover:hover {
  background-color: var(--token-yellow-10);
}
.bg-color-yellow-20 {
  background-color: var(--token-yellow-20);
}
.bg-color-yellow-20:hover:hover {
  background-color: var(--token-yellow-20);
}
.bg-color-yellow-30 {
  background-color: var(--token-yellow-30);
}
.bg-color-yellow-30:hover:hover {
  background-color: var(--token-yellow-30);
}
.bg-color-yellow-40 {
  background-color: var(--token-yellow-40);
}
.bg-color-yellow-40:hover:hover {
  background-color: var(--token-yellow-40);
}
.bg-color-yellow-50 {
  background-color: var(--token-yellow-50);
}
.bg-color-yellow-50:hover:hover {
  background-color: var(--token-yellow-50);
}
.bg-color-yellow-60 {
  background-color: var(--token-yellow-60);
}
.bg-color-yellow-60:hover:hover {
  background-color: var(--token-yellow-60);
}
.bg-color-yellow-70 {
  background-color: var(--token-yellow-70);
}
.bg-color-yellow-70:hover:hover {
  background-color: var(--token-yellow-70);
}
.bg-color-yellow-80 {
  background-color: var(--token-yellow-80);
}
.bg-color-yellow-80:hover:hover {
  background-color: var(--token-yellow-80);
}
.bg-color-yellow-90 {
  background-color: var(--token-yellow-90);
}
.bg-color-yellow-90:hover:hover {
  background-color: var(--token-yellow-90);
}
.bg-color-yellow:hover:hover {
  background-color: var(--token-yellow);
}
.border-width-0 {
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
}
.border-width-1 {
  border-width: 1px;
}
.border-width-2 {
  border-width: 2px;
}
.border-width-3 {
  border-width: 3px;
}
.border-width-4 {
  border-width: 4px;
}
.border-width-5 {
  border-width: 5px;
}
.border-bottom-width-0 {
  border-bottom-width: 0;
}
.border-bottom-width-1 {
  border-bottom-width: 1px;
}
.border-bottom-width-2 {
  border-bottom-width: 2px;
}
.border-bottom-width-3 {
  border-bottom-width: 3px;
}
.border-bottom-width-4 {
  border-bottom-width: 4px;
}
.border-bottom-width-5 {
  border-bottom-width: 5px;
}
.border-left-width-0 {
  border-left-width: 0;
}
.border-left-width-1 {
  border-left-width: 1px;
}
.border-left-width-2 {
  border-left-width: 2px;
}
.border-left-width-3 {
  border-left-width: 3px;
}
.border-left-width-4 {
  border-left-width: 4px;
}
.border-left-width-5 {
  border-left-width: 5px;
}
.border-right-width-0 {
  border-right-width: 0;
}
.border-right-width-1 {
  border-right-width: 1px;
}
.border-right-width-2 {
  border-right-width: 2px;
}
.border-right-width-3 {
  border-right-width: 3px;
}
.border-right-width-4 {
  border-right-width: 4px;
}
.border-right-width-5 {
  border-right-width: 5px;
}
.border-top-width-0 {
  border-top-width: 0;
}
.border-top-width-1 {
  border-top-width: 1px;
}
.border-top-width-2 {
  border-top-width: 2px;
}
.border-top-width-3 {
  border-top-width: 3px;
}
.border-top-width-4 {
  border-top-width: 4px;
}
.border-top-width-5 {
  border-top-width: 5px;
}
.color-black {
  color: var(--token-black);
}
.color-black-01 {
  color: var(--token-black-01);
}
.color-black-01:hover:hover {
  color: var(--token-black-01);
}
.color-black-02 {
  color: var(--token-black-02);
}
.color-black-02:hover:hover {
  color: var(--token-black-02);
}
.color-black-03 {
  color: var(--token-black-03);
}
.color-black-03:hover:hover {
  color: var(--token-black-03);
}
.color-black-04 {
  color: var(--token-black-04);
}
.color-black-04:hover:hover {
  color: var(--token-black-04);
}
.color-black-05 {
  color: var(--token-black-05);
}
.color-black-05:hover:hover {
  color: var(--token-black-05);
}
.color-black-06 {
  color: var(--token-black-06);
}
.color-black-06:hover:hover {
  color: var(--token-black-06);
}
.color-black-07 {
  color: var(--token-black-07);
}
.color-black-07:hover:hover {
  color: var(--token-black-07);
}
.color-black-08 {
  color: var(--token-black-08);
}
.color-black-08:hover:hover {
  color: var(--token-black-08);
}
.color-black-09 {
  color: var(--token-black-09);
}
.color-black-09:hover:hover {
  color: var(--token-black-09);
}
.color-black-10 {
  color: var(--token-black-10);
}
.color-black-10:hover:hover {
  color: var(--token-black-10);
}
.color-black-20 {
  color: var(--token-black-20);
}
.color-black-20:hover:hover {
  color: var(--token-black-20);
}
.color-black-30 {
  color: var(--token-black-30);
}
.color-black-30:hover:hover {
  color: var(--token-black-30);
}
.color-black-40 {
  color: var(--token-black-40);
}
.color-black-40:hover:hover {
  color: var(--token-black-40);
}
.color-black-50 {
  color: var(--token-black-50);
}
.color-black-50:hover:hover {
  color: var(--token-black-50);
}
.color-black-60 {
  color: var(--token-black-60);
}
.color-black-60:hover:hover {
  color: var(--token-black-60);
}
.color-black-70 {
  color: var(--token-black-70);
}
.color-black-70:hover:hover {
  color: var(--token-black-70);
}
.color-black-80 {
  color: var(--token-black-80);
}
.color-black-80:hover:hover {
  color: var(--token-black-80);
}
.color-black-90 {
  color: var(--token-black-90);
}
.color-black-90:hover:hover {
  color: var(--token-black-90);
}
.color-black:hover:hover {
  color: var(--token-black);
}
.color-blue {
  color: var(--token-blue);
}
.color-blue-01 {
  color: var(--token-blue-01);
}
.color-blue-01:hover:hover {
  color: var(--token-blue-01);
}
.color-blue-02 {
  color: var(--token-blue-02);
}
.color-blue-02:hover:hover {
  color: var(--token-blue-02);
}
.color-blue-03 {
  color: var(--token-blue-03);
}
.color-blue-03:hover:hover {
  color: var(--token-blue-03);
}
.color-blue-04 {
  color: var(--token-blue-04);
}
.color-blue-04:hover:hover {
  color: var(--token-blue-04);
}
.color-blue-05 {
  color: var(--token-blue-05);
}
.color-blue-05:hover:hover {
  color: var(--token-blue-05);
}
.color-blue-06 {
  color: var(--token-blue-06);
}
.color-blue-06:hover:hover {
  color: var(--token-blue-06);
}
.color-blue-07 {
  color: var(--token-blue-07);
}
.color-blue-07:hover:hover {
  color: var(--token-blue-07);
}
.color-blue-08 {
  color: var(--token-blue-08);
}
.color-blue-08:hover:hover {
  color: var(--token-blue-08);
}
.color-blue-09 {
  color: var(--token-blue-09);
}
.color-blue-09:hover:hover {
  color: var(--token-blue-09);
}
.color-blue-10 {
  color: var(--token-blue-10);
}
.color-blue-10:hover:hover {
  color: var(--token-blue-10);
}
.color-blue-20 {
  color: var(--token-blue-20);
}
.color-blue-20:hover:hover {
  color: var(--token-blue-20);
}
.color-blue-30 {
  color: var(--token-blue-30);
}
.color-blue-30:hover:hover {
  color: var(--token-blue-30);
}
.color-blue-40 {
  color: var(--token-blue-40);
}
.color-blue-40:hover:hover {
  color: var(--token-blue-40);
}
.color-blue-50 {
  color: var(--token-blue-50);
}
.color-blue-50:hover:hover {
  color: var(--token-blue-50);
}
.color-blue-60 {
  color: var(--token-blue-60);
}
.color-blue-60:hover:hover {
  color: var(--token-blue-60);
}
.color-blue-70 {
  color: var(--token-blue-70);
}
.color-blue-70:hover:hover {
  color: var(--token-blue-70);
}
.color-blue-80 {
  color: var(--token-blue-80);
}
.color-blue-80:hover:hover {
  color: var(--token-blue-80);
}
.color-blue-90 {
  color: var(--token-blue-90);
}
.color-blue-90:hover:hover {
  color: var(--token-blue-90);
}
.color-blue:hover:hover {
  color: var(--token-blue);
}
.color-green {
  color: var(--token-green);
}
.color-green-01 {
  color: var(--token-green-01);
}
.color-green-01:hover:hover {
  color: var(--token-green-01);
}
.color-green-02 {
  color: var(--token-green-02);
}
.color-green-02:hover:hover {
  color: var(--token-green-02);
}
.color-green-03 {
  color: var(--token-green-03);
}
.color-green-03:hover:hover {
  color: var(--token-green-03);
}
.color-green-04 {
  color: var(--token-green-04);
}
.color-green-04:hover:hover {
  color: var(--token-green-04);
}
.color-green-05 {
  color: var(--token-green-05);
}
.color-green-05:hover:hover {
  color: var(--token-green-05);
}
.color-green-06 {
  color: var(--token-green-06);
}
.color-green-06:hover:hover {
  color: var(--token-green-06);
}
.color-green-07 {
  color: var(--token-green-07);
}
.color-green-07:hover:hover {
  color: var(--token-green-07);
}
.color-green-08 {
  color: var(--token-green-08);
}
.color-green-08:hover:hover {
  color: var(--token-green-08);
}
.color-green-09 {
  color: var(--token-green-09);
}
.color-green-09:hover:hover {
  color: var(--token-green-09);
}
.color-green-10 {
  color: var(--token-green-10);
}
.color-green-10:hover:hover {
  color: var(--token-green-10);
}
.color-green-20 {
  color: var(--token-green-20);
}
.color-green-20:hover:hover {
  color: var(--token-green-20);
}
.color-green-30 {
  color: var(--token-green-30);
}
.color-green-30:hover:hover {
  color: var(--token-green-30);
}
.color-green-40 {
  color: var(--token-green-40);
}
.color-green-40:hover:hover {
  color: var(--token-green-40);
}
.color-green-50 {
  color: var(--token-green-50);
}
.color-green-50:hover:hover {
  color: var(--token-green-50);
}
.color-green-60 {
  color: var(--token-green-60);
}
.color-green-60:hover:hover {
  color: var(--token-green-60);
}
.color-green-70 {
  color: var(--token-green-70);
}
.color-green-70:hover:hover {
  color: var(--token-green-70);
}
.color-green-80 {
  color: var(--token-green-80);
}
.color-green-80:hover:hover {
  color: var(--token-green-80);
}
.color-green-90 {
  color: var(--token-green-90);
}
.color-green-90:hover:hover {
  color: var(--token-green-90);
}
.color-green:hover:hover {
  color: var(--token-green);
}
.color-orange {
  color: var(--token-orange);
}
.color-orange-01 {
  color: var(--token-orange-01);
}
.color-orange-01:hover:hover {
  color: var(--token-orange-01);
}
.color-orange-02 {
  color: var(--token-orange-02);
}
.color-orange-02:hover:hover {
  color: var(--token-orange-02);
}
.color-orange-03 {
  color: var(--token-orange-03);
}
.color-orange-03:hover:hover {
  color: var(--token-orange-03);
}
.color-orange-04 {
  color: var(--token-orange-04);
}
.color-orange-04:hover:hover {
  color: var(--token-orange-04);
}
.color-orange-05 {
  color: var(--token-orange-05);
}
.color-orange-05:hover:hover {
  color: var(--token-orange-05);
}
.color-orange-06 {
  color: var(--token-orange-06);
}
.color-orange-06:hover:hover {
  color: var(--token-orange-06);
}
.color-orange-07 {
  color: var(--token-orange-07);
}
.color-orange-07:hover:hover {
  color: var(--token-orange-07);
}
.color-orange-08 {
  color: var(--token-orange-08);
}
.color-orange-08:hover:hover {
  color: var(--token-orange-08);
}
.color-orange-09 {
  color: var(--token-orange-09);
}
.color-orange-09:hover:hover {
  color: var(--token-orange-09);
}
.color-orange-10 {
  color: var(--token-orange-10);
}
.color-orange-10:hover:hover {
  color: var(--token-orange-10);
}
.color-orange-20 {
  color: var(--token-orange-20);
}
.color-orange-20:hover:hover {
  color: var(--token-orange-20);
}
.color-orange-30 {
  color: var(--token-orange-30);
}
.color-orange-30:hover:hover {
  color: var(--token-orange-30);
}
.color-orange-40 {
  color: var(--token-orange-40);
}
.color-orange-40:hover:hover {
  color: var(--token-orange-40);
}
.color-orange-50 {
  color: var(--token-orange-50);
}
.color-orange-50:hover:hover {
  color: var(--token-orange-50);
}
.color-orange-60 {
  color: var(--token-orange-60);
}
.color-orange-60:hover:hover {
  color: var(--token-orange-60);
}
.color-orange-70 {
  color: var(--token-orange-70);
}
.color-orange-70:hover:hover {
  color: var(--token-orange-70);
}
.color-orange-80 {
  color: var(--token-orange-80);
}
.color-orange-80:hover:hover {
  color: var(--token-orange-80);
}
.color-orange-90 {
  color: var(--token-orange-90);
}
.color-orange-90:hover:hover {
  color: var(--token-orange-90);
}
.color-orange:hover:hover {
  color: var(--token-orange);
}
.color-purple {
  color: var(--token-purple);
}
.color-purple-01 {
  color: var(--token-purple-01);
}
.color-purple-01:hover:hover {
  color: var(--token-purple-01);
}
.color-purple-02 {
  color: var(--token-purple-02);
}
.color-purple-02:hover:hover {
  color: var(--token-purple-02);
}
.color-purple-03 {
  color: var(--token-purple-03);
}
.color-purple-03:hover:hover {
  color: var(--token-purple-03);
}
.color-purple-04 {
  color: var(--token-purple-04);
}
.color-purple-04:hover:hover {
  color: var(--token-purple-04);
}
.color-purple-05 {
  color: var(--token-purple-05);
}
.color-purple-05:hover:hover {
  color: var(--token-purple-05);
}
.color-purple-06 {
  color: var(--token-purple-06);
}
.color-purple-06:hover:hover {
  color: var(--token-purple-06);
}
.color-purple-07 {
  color: var(--token-purple-07);
}
.color-purple-07:hover:hover {
  color: var(--token-purple-07);
}
.color-purple-08 {
  color: var(--token-purple-08);
}
.color-purple-08:hover:hover {
  color: var(--token-purple-08);
}
.color-purple-09 {
  color: var(--token-purple-09);
}
.color-purple-09:hover:hover {
  color: var(--token-purple-09);
}
.color-purple-10 {
  color: var(--token-purple-10);
}
.color-purple-10:hover:hover {
  color: var(--token-purple-10);
}
.color-purple-20 {
  color: var(--token-purple-20);
}
.color-purple-20:hover:hover {
  color: var(--token-purple-20);
}
.color-purple-30 {
  color: var(--token-purple-30);
}
.color-purple-30:hover:hover {
  color: var(--token-purple-30);
}
.color-purple-40 {
  color: var(--token-purple-40);
}
.color-purple-40:hover:hover {
  color: var(--token-purple-40);
}
.color-purple-50 {
  color: var(--token-purple-50);
}
.color-purple-50:hover:hover {
  color: var(--token-purple-50);
}
.color-purple-60 {
  color: var(--token-purple-60);
}
.color-purple-60:hover:hover {
  color: var(--token-purple-60);
}
.color-purple-70 {
  color: var(--token-purple-70);
}
.color-purple-70:hover:hover {
  color: var(--token-purple-70);
}
.color-purple-80 {
  color: var(--token-purple-80);
}
.color-purple-80:hover:hover {
  color: var(--token-purple-80);
}
.color-purple-90 {
  color: var(--token-purple-90);
}
.color-purple-90:hover:hover {
  color: var(--token-purple-90);
}
.color-purple:hover:hover {
  color: var(--token-purple);
}
.color-red {
  color: var(--token-red);
}
.color-red-01 {
  color: var(--token-red-01);
}
.color-red-01:hover:hover {
  color: var(--token-red-01);
}
.color-red-02 {
  color: var(--token-red-02);
}
.color-red-02:hover:hover {
  color: var(--token-red-02);
}
.color-red-03 {
  color: var(--token-red-03);
}
.color-red-03:hover:hover {
  color: var(--token-red-03);
}
.color-red-04 {
  color: var(--token-red-04);
}
.color-red-04:hover:hover {
  color: var(--token-red-04);
}
.color-red-05 {
  color: var(--token-red-05);
}
.color-red-05:hover:hover {
  color: var(--token-red-05);
}
.color-red-06 {
  color: var(--token-red-06);
}
.color-red-06:hover:hover {
  color: var(--token-red-06);
}
.color-red-07 {
  color: var(--token-red-07);
}
.color-red-07:hover:hover {
  color: var(--token-red-07);
}
.color-red-08 {
  color: var(--token-red-08);
}
.color-red-08:hover:hover {
  color: var(--token-red-08);
}
.color-red-09 {
  color: var(--token-red-09);
}
.color-red-09:hover:hover {
  color: var(--token-red-09);
}
.color-red-10 {
  color: var(--token-red-10);
}
.color-red-10:hover:hover {
  color: var(--token-red-10);
}
.color-red-20 {
  color: var(--token-red-20);
}
.color-red-20:hover:hover {
  color: var(--token-red-20);
}
.color-red-30 {
  color: var(--token-red-30);
}
.color-red-30:hover:hover {
  color: var(--token-red-30);
}
.color-red-40 {
  color: var(--token-red-40);
}
.color-red-40:hover:hover {
  color: var(--token-red-40);
}
.color-red-50 {
  color: var(--token-red-50);
}
.color-red-50:hover:hover {
  color: var(--token-red-50);
}
.color-red-60 {
  color: var(--token-red-60);
}
.color-red-60:hover:hover {
  color: var(--token-red-60);
}
.color-red-70 {
  color: var(--token-red-70);
}
.color-red-70:hover:hover {
  color: var(--token-red-70);
}
.color-red-80 {
  color: var(--token-red-80);
}
.color-red-80:hover:hover {
  color: var(--token-red-80);
}
.color-red-90 {
  color: var(--token-red-90);
}
.color-red-90:hover:hover {
  color: var(--token-red-90);
}
.color-red:hover:hover {
  color: var(--token-red);
}
.color-white {
  color: var(--token-white);
}
.color-white-01 {
  color: var(--token-white-01);
}
.color-white-01:hover:hover {
  color: var(--token-white-01);
}
.color-white-02 {
  color: var(--token-white-02);
}
.color-white-02:hover:hover {
  color: var(--token-white-02);
}
.color-white-03 {
  color: var(--token-white-03);
}
.color-white-03:hover:hover {
  color: var(--token-white-03);
}
.color-white-04 {
  color: var(--token-white-04);
}
.color-white-04:hover:hover {
  color: var(--token-white-04);
}
.color-white-05 {
  color: var(--token-white-05);
}
.color-white-05:hover:hover {
  color: var(--token-white-05);
}
.color-white-06 {
  color: var(--token-white-06);
}
.color-white-06:hover:hover {
  color: var(--token-white-06);
}
.color-white-07 {
  color: var(--token-white-07);
}
.color-white-07:hover:hover {
  color: var(--token-white-07);
}
.color-white-08 {
  color: var(--token-white-08);
}
.color-white-08:hover:hover {
  color: var(--token-white-08);
}
.color-white-09 {
  color: var(--token-white-09);
}
.color-white-09:hover:hover {
  color: var(--token-white-09);
}
.color-white-10 {
  color: var(--token-white-10);
}
.color-white-10:hover:hover {
  color: var(--token-white-10);
}
.color-white-20 {
  color: var(--token-white-20);
}
.color-white-20:hover:hover {
  color: var(--token-white-20);
}
.color-white-30 {
  color: var(--token-white-30);
}
.color-white-30:hover:hover {
  color: var(--token-white-30);
}
.color-white-40 {
  color: var(--token-white-40);
}
.color-white-40:hover:hover {
  color: var(--token-white-40);
}
.color-white-50 {
  color: var(--token-white-50);
}
.color-white-50:hover:hover {
  color: var(--token-white-50);
}
.color-white-60 {
  color: var(--token-white-60);
}
.color-white-60:hover:hover {
  color: var(--token-white-60);
}
.color-white-70 {
  color: var(--token-white-70);
}
.color-white-70:hover:hover {
  color: var(--token-white-70);
}
.color-white-80 {
  color: var(--token-white-80);
}
.color-white-80:hover:hover {
  color: var(--token-white-80);
}
.color-white-90 {
  color: var(--token-white-90);
}
.color-white-90:hover:hover {
  color: var(--token-white-90);
}
.color-white:hover:hover {
  color: var(--token-white);
}
.color-yellow {
  color: var(--token-yellow);
}
.color-yellow-01 {
  color: var(--token-yellow-01);
}
.color-yellow-01:hover:hover {
  color: var(--token-yellow-01);
}
.color-yellow-02 {
  color: var(--token-yellow-02);
}
.color-yellow-02:hover:hover {
  color: var(--token-yellow-02);
}
.color-yellow-03 {
  color: var(--token-yellow-03);
}
.color-yellow-03:hover:hover {
  color: var(--token-yellow-03);
}
.color-yellow-04 {
  color: var(--token-yellow-04);
}
.color-yellow-04:hover:hover {
  color: var(--token-yellow-04);
}
.color-yellow-05 {
  color: var(--token-yellow-05);
}
.color-yellow-05:hover:hover {
  color: var(--token-yellow-05);
}
.color-yellow-06 {
  color: var(--token-yellow-06);
}
.color-yellow-06:hover:hover {
  color: var(--token-yellow-06);
}
.color-yellow-07 {
  color: var(--token-yellow-07);
}
.color-yellow-07:hover:hover {
  color: var(--token-yellow-07);
}
.color-yellow-08 {
  color: var(--token-yellow-08);
}
.color-yellow-08:hover:hover {
  color: var(--token-yellow-08);
}
.color-yellow-09 {
  color: var(--token-yellow-09);
}
.color-yellow-09:hover:hover {
  color: var(--token-yellow-09);
}
.color-yellow-10 {
  color: var(--token-yellow-10);
}
.color-yellow-10:hover:hover {
  color: var(--token-yellow-10);
}
.color-yellow-20 {
  color: var(--token-yellow-20);
}
.color-yellow-20:hover:hover {
  color: var(--token-yellow-20);
}
.color-yellow-30 {
  color: var(--token-yellow-30);
}
.color-yellow-30:hover:hover {
  color: var(--token-yellow-30);
}
.color-yellow-40 {
  color: var(--token-yellow-40);
}
.color-yellow-40:hover:hover {
  color: var(--token-yellow-40);
}
.color-yellow-50 {
  color: var(--token-yellow-50);
}
.color-yellow-50:hover:hover {
  color: var(--token-yellow-50);
}
.color-yellow-60 {
  color: var(--token-yellow-60);
}
.color-yellow-60:hover:hover {
  color: var(--token-yellow-60);
}
.color-yellow-70 {
  color: var(--token-yellow-70);
}
.color-yellow-70:hover:hover {
  color: var(--token-yellow-70);
}
.color-yellow-80 {
  color: var(--token-yellow-80);
}
.color-yellow-80:hover:hover {
  color: var(--token-yellow-80);
}
.color-yellow-90 {
  color: var(--token-yellow-90);
}
.color-yellow-90:hover:hover {
  color: var(--token-yellow-90);
}
.color-yellow:hover:hover {
  color: var(--token-yellow);
}
.display-block {
  display: block;
}
.display-inline {
  display: inline;
}
.display-inline-block {
  display: inline-block;
}
.display-none {
  display: none;
}
.flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.flex-column-reverse {
  flex-direction: column-reverse;
}
.flex-nowrap {
  flex-wrap: nowrap;
}
.flex-row {
  flex-direction: row;
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}
.font-mono {
  font-family: var(--token-font-mono);
}
.font-sans {
  font-family: var(--token-font-sans);
}
.font-serif {
  font-family: var(--token-font-serif);
}
.font-size-2xl {
  font-size: var(--token-font-size-2xl);
}
.font-size-2xs {
  font-size: var(--token-font-size-2xs);
}
.font-size-3xl {
  font-size: var(--token-font-size-3xl);
}
.font-size-4xl {
  font-size: var(--token-font-size-4xl);
}
.font-size-lg {
  font-size: var(--token-font-size-lg);
}
.font-size-md {
  font-size: var(--token-font-size-md);
}
.font-size-sm {
  font-size: var(--token-font-size-sm);
}
.font-size-xl {
  font-size: var(--token-font-size-xl);
}
.font-size-xs {
  font-size: var(--token-font-size-xs);
}
.justify-content-around {
  justify-content: space-around;
}
.justify-content-between {
  justify-content: space-between;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-end {
  justify-content: flex-end;
}
.justify-content-start {
  justify-content: flex-start;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-scroll {
  overflow: scroll;
}
.overflow-visible {
  overflow: visible;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.overflow-x-scroll {
  overflow-x: scroll;
}
.overflow-x-visible {
  overflow-x: visible;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-y-hidden {
  overflow-y: hidden;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.overflow-y-visible {
  overflow-y: visible;
}
.pos-absolute {
  position: absolute;
}
.pos-fixed {
  position: fixed;
}
.pos-inherit {
  position: inherit;
}
.pos-initial {
  position: initial;
}
.pos-relative {
  position: relative;
}
.pos-static {
  position: static;
}
.pos-sticky {
  position: sticky;
}
.pos-unset {
  position: unset;
}
.vis-hidden {
  visibility: hidden;
}
.vis-visible {
  visibility: visible;
}
`);var $=new CSSStyleSheet,go=()=>$.replaceSync(`.tooltip {
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
`);var ho=new Map,yo=new MutationObserver(o=>{o.forEach(e=>{if(e.addedNodes.length>0&&e.type==="childList"){for(let n of e.addedNodes)if(n instanceof Element)for(let[t,[a,c]]of ho.entries()){let i=n.querySelectorAll(t);for(let l of i)M(l,a,c)}}})});yo.observe(document,{attributes:!0,childList:!0,subtree:!0});function fo(o,e=!0,n){return(...t)=>{e&&ho.set(o,[t,n]);let a=document.querySelectorAll(o);for(let c of a)M(c,t,n)}}function mo(o,e){return(...n)=>M(o,n,e)}function xo(o,e){return(...n)=>{let t="http://www.w3.org/1999/xhtml",a=document.createElementNS(t,o);return M(a,n,e)}}function M(o,e=[],n={}){e.forEach(([a,...c])=>n[a](o,...c));function t(...a){return a.forEach(c=>o.append(c)),o}return t}function K(o){return new Proxy({},{get:(e,n)=>n==="el"?t=>mo(t,o):n==="$el"?(t,a)=>fo(t,a,o):xo(n,o)})}function V(o){let{event:e=null,eventElement:n=window,hideOnFalse:t=!0,invokeImmediately:a=!0,mediaMinWidth:c=0,mediaMaxWidth:i=1/0,state:l=void 0}=o??{};return(...k)=>{let[b,u,w,h]=k,v=()=>{if(!(window.innerWidth>=c&&window.innerWidth<=i))return;let m=l&&typeof w=="function"?w(l.get()):w,J=String(m)==="true"||String(m)==="false",Z=typeof h=="function"?h(l?l.get():void 0):h??!0;if(J&&t&&String(m)==="false"||J&&Z===!1)return b.removeAttribute(u);Z!==!1&&b.setAttribute(u,String(m))};l&&l.sub(v),e&&(b??n).addEventListener(e,v),window.addEventListener("resize",v),a&&v()}}function Y(o){let{event:e=null,eventElement:n=window,invokeImmediately:t=!0,mediaMinWidth:a=0,mediaMaxWidth:c=1/0,method:i="classList",state:l=null}=o??{};return(...k)=>{let[b,u,w]=k,h=()=>{if(!(window.innerWidth>=a&&window.innerWidth<=c))return;let g=typeof u=="function"?u(l?l.get():void 0):u;(typeof w=="function"?w(l?l.get():void 0):w??!0)&&(i==="className"?b.setAttribute("class",g):b.classList.add(g))};l&&l.sub(h),e&&(b??n).addEventListener(e,h),window.addEventListener("resize",h),t&&h()}}var E=o=>(e,n,t)=>{(typeof t=="function"?t():t??!0)&&e.addEventListener(o,n)};function S(o){let{state:e}=o??{};return(...n)=>{let[t,a,c]=n,i=()=>{let l=e?a(e.get()):a();(typeof c=="function"?c(e?e.get():void 0):c??!0)&&(t.innerHTML="",Array.isArray(l)?l.forEach(b=>{b instanceof HTMLElement?t.appendChild(b):t.appendChild(document.createTextNode(String(b)))}):l instanceof HTMLElement?t.appendChild(l):t.innerHTML=String(l))};e&&e.sub(i),i()}}function C(o){let{event:e=null,eventElement:n=window,invokeImmediately:t=!0,mediaMinWidth:a=0,mediaMaxWidth:c=1/0,state:i=void 0}=o??{};return(...l)=>{let[k,b,u,w]=l,h=()=>{if(!(window.innerWidth>=a&&window.innerWidth<=c))return;let g=String(typeof u=="function"?u(i?i.get():void 0):u);(typeof w=="function"?w(i?i.get():void 0):w??!0)&&(b.startsWith("--")?k.style.setProperty(b,g):k.style[b]=g)};i&&i.sub(h),window.addEventListener("resize",h),e&&(k??n).addEventListener(e,h),t&&!e&&h()}}function q(o){let{event:e,eventElement:n,state:t}=o??{};return(...a)=>{let[c,i,l]=a,k=()=>{let b=typeof i=="function"?i(t?t.get():void 0):i;(typeof l=="function"?l(t?t.get():void 0):l??!0)&&(c.textContent=String(b))};t&&t.sub(k),window.addEventListener("resize",k),e&&(c??n).addEventListener(e,k),k()}}function So(o,e,n){let t=e.split("."),a=(c,i,l)=>{let[k,...b]=i;return b.length===0?Array.isArray(c)?[...c.slice(0,k),l,...c.slice(k+1)]:{...c,[k]:l}:(c[k]===void 0&&(c[k]=typeof b[0]=="number"?[]:{}),{...c,[k]:a(c[k],b,l)})};return a(o,t,n)}function _(o,e){let n=o;if(e){let v=e.storage.getItem(e.key),g=JSON.parse(v),m=g!=null;(e.overwrite??!0)&&m&&(o=g),!(e.overwrite??!0)&&m&&(Array.isArray(o)&&Array.isArray(g)?o=[...o,...g]:typeof o=="object"&&typeof g=="object"&&(o={...o,...g}))}let t=o,a=[],c=()=>t,i=()=>a.forEach(v=>v(t)),l=v=>()=>b(v(t)),k=()=>b(n),b=v=>{t=v,a.forEach(g=>g(t)),e&&e.storage.setItem(e.key,JSON.stringify(t))};return{deepSet:(v,g)=>b(So(t,v,g)),get:c,pub:i,reset:k,reduce:l,set:b,sub:v=>a.push(v),unsub:v=>a.splice(a.indexOf(v),1)}}var x=_("black",{key:"colorPicker",storage:sessionStorage}),_o=new URLSearchParams(window.location.search).get("page"),d=_(_o??"HOME",{key:"page",storage:sessionStorage}),T=_("COLOR_PICKER",{key:"properties",storage:sessionStorage}),p=_("Dark",{key:"theme",storage:sessionStorage}),To={colors:{brand:["#FF5A5F","#FFFFFF"],black:["#1F1F1F","#FFFFFF"],error:["#FF6347","#FFFFFF"],grey:["#757575","#FFFFFF"],info:["#3E82FC","#FFFFFF"],action:["#1E88E5","#FFFFFF"],success:["#00C853","#FFFFFF"],warning:["#FFC107","#1F1F1F"],white:["#FFFFFF","#1F1F1F"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"}},Eo={colors:{black:["#000000","#FFFF00"],brand:["#FF00FF","#00FFFF"],error:["#FF0000","#0000FF"],grey:["#808080","#FF69B4"],info:["#0000FF","#00FF00"],action:["#FFA500","#8A2BE2"],success:["#00FF00","#FF0000"],warning:["#FF4500","#32CD32"],white:["#FFFFFF","#0000FF"]},fonts:{primary:"'Comic Sans MS', cursive, sans-serif",secondary:"'Comic Sans MS', cursive, sans-serif",tertiary:"'Comic Sans MS', cursive, sans-serif"}},s=_({Dark:To,Crazy:Eo},{key:"tokens",storage:sessionStorage});var f=o=>{switch(o.action){case"SET_PAGE":d.set(o.page),window.history.pushState(null,"",`?page=${o.page}`);break;case"SET_PROPERTIES":T.set(o.properties);break;case"SET_COLOR_PICKER":T.set("COLOR_PICKER"),x.set(o.colorKey);break;case"SET_COLOR_TOKEN":s.deepSet(`${o.theme}.colors.${o.key}`,[o.color,o.contrast]);break;case"SET_THEME":p.set(o.theme);break}};var r=K({"innerHTML:colorPicker":S({state:x}),"innerHTML:pages":S({state:d}),"innerHTML:properties":S({state:T}),"innerHTML:themes":S({state:s}),"innerHTML:theme":S({state:p}),"innerText:pages":q({state:d}),"style:themes":C({state:s}),attr:V(),change:E("change"),class:Y(),click:E("click"),innerHTML:S(),input:E("input"),style:C()});var so=()=>{let o=()=>x.get(),e=()=>p.get(),n=()=>s.get()[e()].colors[o()][0],t=()=>s.get()[e()].colors[o()][1];return r.div(["innerHTML:colorPicker",()=>[r.div()(x.get()),r.div(["style","opacity","0.35"],["style","fontSize","0.8em"])("Set the color and it's contrast"),r.div(["style","fontSize","0.85em"],["style","opacity",.6])("Color"),r.div(["style","borderRadius","5px"],["style","width",`${150-20}px`],["style","height",`${80-20}px`],["style","overflow","hidden"],["style","position","relative"])(r.input(["style","position","absolute"],["style","top",`-${20/2}px`],["style","left",`-${20/2}px`],["attr","type","color"],["style","width",`${150}px`],["style","height",`${80}px`],["style","backgroundColor","transparent"],["input",l=>{f({action:"SET_COLOR_TOKEN",key:x.get(),theme:p.get(),color:l.target.value,contrast:t()})}],["attr","value",n()])()),r.div(["style","fontSize","0.85em"],["style","opacity",.6])("Contrast"),r.div(["style","borderRadius","5px"],["style","width",`${150-20}px`],["style","height",`${80-20}px`],["style","overflow","hidden"],["style","position","relative"])(r.input(["style","position","absolute"],["style","top",`-${20/2}px`],["style","left",`-${20/2}px`],["attr","type","color"],["style","width",`${150}px`],["style","height",`${80}px`],["style","backgroundColor","transparent"],["input",l=>{f({action:"SET_COLOR_TOKEN",key:x.get(),theme:p.get(),color:n(),contrast:l.target.value})}],["attr","value",t()])()),r.div(["style","fontSize","0.85em"],["style","opacity",.6])("Token"),r.div(["style","whiteSpace","nowrap"],["style","fontSize","0.8em"],["style","opacity","0.35"])(`--token-${o()}`)]],["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])()};var Fo=o=>{let e=()=>p.get(),n=()=>s.get()[e()].colors[o][0],t=()=>s.get()[e()].colors[o][1];return r.div(["class","flexgrid__item"])(r.div(["class","card"],["class","card--small"],["class","card--light"],["class","card--ghost"],["style:themes","--card-bg-color",n],["style","--card-transition-duration",0],["click",()=>f({action:"SET_COLOR_PICKER",colorKey:o})],["style","cursor","pointer"])(r.div(["class","card__title"],["style:themes","--card-title-font-color",t])(o),r.div(["class","card__actions"])(r.div(["style","width","8px"],["style","height","8px"],["style","borderRight","1px solid rgba(255,255,255,1)"],["style","borderBottom","1px solid rgba(255,255,255,1)"],["style","display","flex"],["style","transform","rotate(-45deg)"])("")),r.div(["class","card__body"],["style","display","flex"],["style","columnGap","1%"],["style","rowGap","5px"],["style","flexWrap","wrap"],["style","alignItems","center"],["style","position","relative"],["style","alignItems","flex-start"],["style","justifyContent","flex-start"])(r.div(["style","borderRadius","2px"],["style","display","flex"],["style","flexDirection","column"],["style","height","20px"],["style","width","10%"],["style:themes","backgroundColor",t])())))},uo=()=>{let o=s.get()[p.get()].colors;return r.div(["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])(r.section(["class","section"],["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])(r.div(["class","section__header"])(r.h2(["class","section__header__title"])("Colors"),r.p(["class","section__header__description"])("Colors are defined along with a contasting color to form a set of semantic primitives which can be further modified in context (per component) through the use of CSS variables.")),r.div(["class","flexgrid"],["style","--mobile-width","200px"],["style","--tablet-width","200px"],["style","--desktop-width","200px"],["style","--mobile-gap","10px"],["style","--tablet-gap","10px"],["style","--desktop-gap","10px"],["innerHTML:theme",()=>Object.keys(o).map(Fo)])()),r.section()(r.h2()("Fonts")))};var Mo=o=>r.option(["attr","selected",!0,()=>p.get()===o])(o),po=()=>r.div(["style","display","flex"],["style","flexDirection","row"],["style","gap","10px"])(r.label()("Theme"),r.select(["change",o=>{let e=o.target.value;f({action:"SET_THEME",theme:e})}])(...Object.keys(s.get()).map(Mo)));function wo(o){let e="",n=Array.from(o.cssRules);for(let t of n)e+=t.cssText+`
`;return e}var Co=r.div(["class","dashboard__nav-header"])(r.img(["attr","src","/images/capui-transparent.png"],["attr","height","80"])()),y=[["class","button"],["class","button--light"],["class","button--ghost"],["class","button--block"],["class","button--justify-start"]],zo=r.nav(["class","dashboard__nav"])(r.div(["style","display","flex"],["style","flexDirection","column"],["style","gap","3px"],["style","alignItems","flex-start"],["style","width","100%"])(r.button(["class","button"],["class","button--light"],["class","button--block"],["style","marginBottom","10px"],["style","gap","10px"],["class","button--justify-start"],["click",()=>d.set("HOME")])(r.span()("capui.zip"),r.span()("[\u2193]")),r.button(["class","button"],["class","button--light"],["class","button--outline"],["class","button--block"],["style","marginBottom","10px"],["class","button--justify-start"],["click",()=>d.set("HOME")])("Home"),r.button(...y,["click",()=>f({action:"SET_PAGE",page:"THEME"})])("Theme"),r.button(...y,["click",()=>f({action:"SET_PAGE",page:"UTILITY"})])("Utility"),r.button(...y,["click",()=>f({action:"SET_PAGE",page:"ACCORDION"})])("Accordion"),r.button(...y)("Alerts"),r.button(...y)("Badge"),r.button(...y)("Button"),r.button(...y)("Card"),r.button(...y)("Dashboard"),r.button(...y)("Dialog"),r.button(...y)("Flexpane"),r.button(...y)("Grid"),r.button(...y)("Tag"))),Lo=r.div(["class","dashboard__nav-footer"],["style","padding","20px"],["style","opacity","0.5"],["style","fontSize","12px"])("\xA9Copyright 2024"),Ho=r.div(["class","dashboard__main-header"],["innerHTML:pages",()=>"Home",()=>d.get()==="HOME"],["innerHTML:pages",()=>"Accordion",()=>d.get()==="ACCORDION"],["innerHTML:pages",po,()=>d.get()==="THEME"],["innerHTML:pages",()=>"Utility",()=>d.get()==="UTILITY"])(),Po=r.div(["class","dashboard__main"],["innerHTML:pages",()=>"Home",()=>d.get()==="HOME"],["innerHTML:pages",()=>"Accordion",()=>d.get()==="ACCORDION"],["innerHTML:pages",uo,()=>d.get()==="THEME"],["innerHTML:pages",()=>"Utility",()=>d.get()==="UTILITY"])(),Ao=r.div(["class","dashboard__main-footer"],["class","dashboard__nav-footer"],["style","padding","20px"],["style","opacity","0.5"],["style","fontSize","12px"])(r.span()("All rights reserved. Made in the USA \u{1F1FA}\u{1F1F8} by ",r.a(["attr","href","https://kevinlint.com"],["attr","target","_blank"],["style","color","white"])("Kevin Lint")," as a product of ",r.a(["attr","href","https://github.com/linttrapmedia"],["attr","target","_blank"],["style","color","white"])("Lint Trap Media."))),Io=r.div(["class","dashboard__aside-header"])("Aside Header"),Oo=r.aside(["class","dashboard__aside"],["innerHTML:properties",so,()=>T.get()==="COLOR_PICKER"])(),Ro=r.aside(["class","dashboard__aside-footer"])("Aside footer");document.addEventListener("DOMContentLoaded",()=>{r.$el("#root")(["class","dashboard"],["innerHTML",()=>[Co,zo,Lo,Ho,Po,Ao,Io,Oo,Ro]]),vo(),R(),Q(),X(),oo(),ro(),eo(),to(),R(),no(),lo(),ao(),co(),bo(),io(),ko(),go(),document.adoptedStyleSheets=[F,z,L,H,P,A,I,O,N,U,j,D,B,G,W,$],console.log(wo(F))});})();
//# sourceMappingURL=ui.js.map
