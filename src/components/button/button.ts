export const buttonStyleSheet = new CSSStyleSheet();

export const syncButtonStyleSheet = () =>
  buttonStyleSheet.replaceSync(`/* 
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
`);
