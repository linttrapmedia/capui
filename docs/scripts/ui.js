(()=>{var H=new CSSStyleSheet,ce=()=>H.replaceSync(`/* 
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
`);var z=new CSSStyleSheet,se=()=>z.replaceSync(`/* 
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
`);var M=new CSSStyleSheet,be=()=>M.replaceSync(`/* 
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
`);var P=new CSSStyleSheet,he=()=>P.replaceSync("");var ge=new Map,Ae=new MutationObserver(e=>{e.forEach(o=>{if(o.addedNodes.length>0&&o.type==="childList"){for(let r of o.addedNodes)if(r instanceof Element)for(let[t,[a,n]]of ge.entries()){let i=r.querySelectorAll(t);for(let d of i)K(d,a,n)}}})});Ae.observe(document,{attributes:!0,childList:!0,subtree:!0});function We(e,o=!0,r){return(...t)=>{o&&ge.set(e,[t,r]);let a=document.querySelectorAll(e);for(let n of a)K(n,t,r)}}function Ne(e,o){return(...r)=>K(e,r,o)}function Ie(e,o){return(...r)=>{let t="http://www.w3.org/1999/xhtml",a=document.createElementNS(t,e);return K(a,r,o)}}function K(e,o=[],r={}){o.forEach(([a,...n])=>r[a](e,...n));function t(...a){return a.forEach(n=>e.append(n)),e}return t}function A(e){return new Proxy({},{get:(o,r)=>r==="el"?t=>Ne(t,e):r==="$el"?(t,a)=>We(t,a,e):Ie(r,e)})}function pe(e,o=[],r={}){o.forEach(([a,...n])=>r[a](e,...n));function t(...a){return a.forEach(n=>e.append(n)),e}return t}function te(e){return new Proxy({},{get:(o,r)=>r==="el"?t=>(...a)=>pe(t,a,e):(...t)=>{let a="http://www.w3.org/2000/svg",n=document.createElementNS(a,r);return pe(n,t,e)}})}function _(e){let{event:o=null,eventElement:r=window,hideOnFalse:t=!0,invokeImmediately:a=!0,mediaMinWidth:n=0,mediaMaxWidth:i=1/0,state:d=void 0}=e??{};return(...s)=>{let[c,l,f,h]=s,g=()=>{if(!(window.innerWidth>=n&&window.innerWidth<=i))return;let u=d&&typeof f=="function"?f(d.get()):f,w=String(u)==="true"||String(u)==="false",T=typeof h=="function"?h(d?d.get():void 0):h??!0;if(w&&t&&String(u)==="false"||w&&T===!1)return c.removeAttribute(l);T!==!1&&c.setAttribute(l,String(u))};d&&d.sub(g),o&&(c??r).addEventListener(o,g),window.addEventListener("resize",g),a&&g()}}function W(e){let{event:o=null,eventElement:r=window,invokeImmediately:t=!0,mediaMinWidth:a=0,mediaMaxWidth:n=1/0,method:i="classList",state:d=null}=e??{};return(...s)=>{let[c,l,f]=s,h=()=>{if(!(window.innerWidth>=a&&window.innerWidth<=n))return;let p=typeof l=="function"?l(d?d.get():void 0):l;(typeof f=="function"?f(d?d.get():void 0):f??!0)&&(i==="className"?c.setAttribute("class",p):c.classList.add(p))};d&&d.sub(h),o&&(c??r).addEventListener(o,h),window.addEventListener("resize",h),t&&h()}}function N(e){let{state:o,event:r}=e??{};return(...t)=>{let[a,n,i]=t,d=()=>{(typeof i=="function"?i(o?o.get():void 0):i??!0)?a.addEventListener(r,c=>n(c)):a.removeEventListener(r,c=>n(c))};o&&o.sub(d),d()}}function E(e){let{state:o}=e??{};return(...r)=>{let[t,a,n]=r,i=()=>{let d=o?a(o.get()):a();(typeof n=="function"?n(o?o.get():void 0):n??!0)&&(t.innerHTML="",Array.isArray(d)?d.forEach(c=>{c instanceof HTMLElement||c instanceof SVGElement?t.appendChild(c):t.appendChild(document.createTextNode(String(c)))}):d instanceof HTMLElement||d instanceof SVGElement?t.appendChild(d):t.innerHTML=String(d))};o&&o.sub(i),i()}}function L(e){let{event:o=null,eventElement:r=window,invokeImmediately:t=!0,mediaMinWidth:a=0,mediaMaxWidth:n=1/0,state:i=void 0}=e??{};return(...d)=>{let[s,c,l,f]=d,h=()=>{if(!(window.innerWidth>=a&&window.innerWidth<=n))return;let p=String(typeof l=="function"?l(i?i.get():void 0):l);(typeof f=="function"?f(i?i.get():void 0):f??!0)&&(c.startsWith("--")?s.style.setProperty(c,p):s.style[c]=p)};i&&i.sub(h),window.addEventListener("resize",h),o&&(s??r).addEventListener(o,h),t&&!o&&h()}}function De(e,o,r){let t=o.split("."),a=(n,i,d)=>{let[s,...c]=i;return c.length===0?Array.isArray(n)?[...n.slice(0,s),d,...n.slice(s+1)]:{...n,[s]:d}:(n[s]===void 0&&(n[s]=typeof c[0]=="number"?[]:{}),{...n,[s]:a(n[s],c,d)})};return a(e,t,r)}function q(e,o){let r=e;if(o){let g=o.storage.getItem(o.key),p=JSON.parse(g),u=p!=null;(o.overwrite??!0)&&u&&(e=p),!(o.overwrite??!0)&&u&&(Array.isArray(e)&&Array.isArray(p)?e=[...e,...p]:typeof e=="object"&&typeof p=="object"&&(e={...e,...p}))}let t=e,a=[],n=()=>t,i=()=>a.forEach(g=>g(t)),d=g=>()=>c(g(t)),s=()=>c(r),c=g=>{t=g,a.forEach(p=>p(t)),o&&o.storage.setItem(o.key,JSON.stringify(t))};return{deepSet:(g,p)=>c(De(t,g,p)),get:n,pub:i,reset:s,reduce:d,set:c,sub:g=>a.push(g),unsub:g=>a.splice(a.indexOf(g),1)}}var J={bgColorHoverToken:"--background-700",bgColorToken:"--background-500",borderColorToken:"--foreground-100",borderColorHoverToken:"--foreground-200",borderRadiusToken:"--radius-scaling",borderWidthToken:"--borders-scaling",colorHoverToken:"--text-500",colorToken:"--text-500"},I=new CSSStyleSheet,ue=()=>{let e=v.get()!=="none"?m.get()[v.get()].dropdown:J,o=`
.dropdown {
    
    --dropdown-bg-color: var(${e.bgColorToken}, white);
    --dropdown-bg-color-hover: var(${e.bgColorHoverToken}, rgba(0, 0, 0, 0.1));
    --dropdown-border-color: var(${e.borderColorToken}, black);
    --dropdown-color: var(${e.colorToken}, black);
    --dropdown-color-hover: var(${e.colorHoverToken}, black);
    --dropdown-border-radius: calc(0.5 * var(${e.borderRadiusToken}, 1));
    --dropdown-border-width: calc(0.25 * var(${e.borderWidthToken}, 1));
    --dropdown-font-size: calc(1.5 * var(--font-scaling));
    --dropdown-font-weight: 500;
    --dropdown-line-height: calc(4 * var(--font-scaling));
    --dropdown-arrow-size: calc(0.8 * var(--font-scaling));

    appearance: none;
    border-radius: var(--dropdown-border-radius);
    border: var(--dropdown-border-width) solid var(--dropdown-border-color);
    color: var(--dropdown-color);
    cursor: pointer;
    display: block;
    font-size: var(--dropdown-font-size);
    font-weight: var(--dropdown-font-weight);
    line-height: var(--dropdown-line-height);
    padding: 0 calc(var(--dropdown-line-height) * 1.5) 0 calc(var(--dropdown-line-height) / 2);
    position: relative;
    width: 100%;
    background-image: 
      linear-gradient(45deg, transparent 50%, var(--dropdown-color) 50%), 
      linear-gradient(135deg, var(--dropdown-color) 50%, transparent 50%),
      linear-gradient(to bottom, var(--dropdown-border-color) 0%, var(--dropdown-border-color) 100%);
    background-color: var(--dropdown-bg-color);
    background-size: 
      var(--dropdown-arrow-size) var(--dropdown-arrow-size), 
      var(--dropdown-arrow-size) var(--dropdown-arrow-size),
      var(--dropdown-border-width) var(--dropdown-line-height);
    background-position: 
      calc(100% - calc(var(--dropdown-line-height) / 2) - calc(var(--dropdown-arrow-size) / 2)) center, 
      calc(100% - calc(var(--dropdown-line-height) / 2) - calc(var(--dropdown-arrow-size) / 2) + var(--dropdown-arrow-size)) center,
      calc(100% - calc(var(--dropdown-line-height) * 1.25 + var(--dropdown-border-width) - calc(var(--dropdown-arrow-size) / 2))) center;
    background-repeat: no-repeat;
    position: relative;
}



.dropdown[disabled] {
    cursor: not-allowed;
    opacity: 0.45;
}

.dropdown:hover {
    background-color: var(--dropdown-bg-color-hover);
    color: var(--dropdown-color-hover);
}

.dropdown option {
    color: var(--dropdown-color);
    background-color: var(--dropdown-bg-color);
}
`;return I.replaceSync(o)};var Z={bgColorHoverToken:"--background-100",bgColorToken:"--background-100",borderColorToken:"--foreground-100",borderColorHoverToken:"--foreground-200",borderRadius:"--border-radius-500",borderWidth:"--border-width-100",colorHoverToken:"--foreground-500",colorToken:"--foreground-500"},ne=new CSSStyleSheet,ve=()=>{let e=v.get()!=="none"?m.get()[v.get()].slider:Z;return ne.replaceSync(`
.slider { 
  --slider-bg-color: var(${e.bgColorToken}, black);
  --slider-bg-color-hover: var(${e.bgColorHoverToken}, rgba(0, 0, 0, 0.1));
  --slider-border-color: var(${e.borderColorToken}, black);
  --slider-border-radius: ${e.borderRadius}ch;
  --slider-border-width: ${e.borderWidth}ch;
  --slider-color: var(${e.colorToken}, white);
  --slider-color-hover: var(${e.colorHoverToken}, black);
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  background: var(--slider-bg-color);
  border-radius: var(--slider-border-radius);
  height: 20px;
  width: 100%;
}

.slider:hover {
  background: var(--slider-bg-color-hover);
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--slider-color);
  cursor: pointer;
}

.slider::-webkit-slider-thumb:hover {
  background: var(--slider-color-hover);
}
`)};var Q={colorToken:"--text-500",fontSizeBase:1.5,fontSizeSpread:.25,fontWeight:500,lineHeight:1.5},ae=new CSSStyleSheet,me=()=>{let e=v.get()!=="none"?m.get()[v.get()].typography:Q,r=`
.h1, .h2, .h3, .h4, .h5, .h6, .p, .span, .div, .li, .td, .th, .summary { 
  --text-color: var(${e.colorToken}, white);
  --text-font-size-base: ${e.fontSizeBase}ch;
  --text-font-weight: ${e.fontWeight};
  --text-line-height: ${e.lineHeight}ch;
}

.h1 { font-size: calc(var(--text-font-size-base) * 2); }
.h2 { font-size: calc(var(--text-font-size-base) * 1.5); }
.h3 { font-size: calc(var(--text-font-size-base) * 1.25); }
.h4 { font-size: var(--text-font-size-base); }
.h5 { font-size: calc(var(--text-font-size-base) * 0.75); }
.h6 { font-size: calc(var(--text-font-size-base) * 0.5); }
.p { font-size: var(--text-font-size-base); }
.span { font-size: var(--text-font-size-base); }
.div { font-size: var(--text-font-size-base); }
.li { font-size: var(--text-font-size-base); }
.td { font-size: var(--text-font-size-base); }
.th { font-size: var(--text-font-size-base); }
.summary { font-size: var(--text-font-size-base); }
`;return ae.replaceSync(r)};var Re={pastel:{colors:{palette:{black:"#333333",red:"#d38459",orange:"#f1be78",yellow:"#fffacd",green:"#77dd77",blue:"#aec6cf",purple:"#c3b1e1",pink:"#ffb6c1",white:"#e2e2e2"},semantic:{action:"blue",background:"purple",brand:"red",error:"red",foreground:"white",info:"blue",success:"green",text:"red",warning:"yellow"}},button:{...X,colorToken:"--black-600",bgColorToken:"--background-700",bgColorHoverToken:"--background-800",borderColorToken:"--background-400"},dropdown:{...J,colorToken:"--black-600",bgColorToken:"--background-700",bgColorHoverToken:"--background-800",borderColorToken:"--background-400",borderColorHoverToken:"--background-500"},slider:{...Z},typography:{...Q,colorToken:"--white-500"},scaling:{borderRadius:1,borderWidth:.5,columnWidth:1,fontSize:2,iconSize:2,rowWidth:1,padding:1,saturation:.25,lightness:.5}},rich:{colors:{palette:{black:"#000000",red:"#b22222",orange:"#ff4500",yellow:"#ffd700",green:"#006400",blue:"#00008b",purple:"#4b0082",pink:"#ff1493",white:"#f5f5f5"},semantic:{action:"blue",background:"black",brand:"red",error:"red",foreground:"black",info:"blue",success:"green",text:"white",warning:"yellow"}},button:X,dropdown:J,slider:{...Z},typography:{...Q},scaling:{borderRadius:1,borderWidth:0,columnWidth:1,fontSize:1,iconSize:1,rowWidth:1,padding:1,saturation:.1,lightness:.25}}},m=q(Re),v=q("pastel",{key:"theme",storage:sessionStorage});var X={bgColorHoverToken:"--background-700",bgColorToken:"--background-500",borderColorToken:"--foreground-100",borerColorHoverToken:"--foreground-200",colorHoverToken:"--text-500",colorToken:"--text-500"},D=new CSSStyleSheet,fe=()=>{let e=v.get()!=="none"?m.get()[v.get()].button:X;return D.replaceSync(`
.button { 
  --button-bg-color: var(${e.bgColorToken}, black);
  --button-bg-color-hover: var(${e.bgColorHoverToken}, rgba(0, 0, 0, 0.1));
  --button-border-color: var(${e.borderColorToken}, black);
  --button-border-radius: ${e.borderRadius}ch;
  --button-border-width: ${e.borderWidth}ch;
  --button-color: var(${e.colorToken}, white);
  --button-color-hover: var(${e.colorHoverToken}, black);
  --button-font-size: ${e.fontSize}ch;
  --button-font-weight: ${e.fontWeight};
  --button-line-height: ${e.lineHeight}ch;
  --button-arrow-size: ${e.fontSize*.5}ch;

  appearance: none;
  background-color: var(--button-bg-color);
  border-radius: var(--button-border-radius);
  border: var(--button-border-width) solid var(--button-border-color);
  color: var(--button-color);
  cursor: pointer;
  display: block;
  font-size: var(--button-font-size);
  font-weight: var(--button-font-weight);
  line-height: var(--button-line-height);
  padding: 0 calc(var(--button-line-height) * 1.5) 0 calc(var(--button-line-height) / 2);
  position: relative;
  width: 100%;
}

.button[disabled] {
    cursor: not-allowed;
    opacity: 0.45;
}

.button:hover {
    background-color: var(--button-bg-color-hover);
    color: var(--button-color-hover);
}
`)};var R=new CSSStyleSheet,ke=()=>R.replaceSync(`.card {
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
`);var U=new CSSStyleSheet,ie=()=>{let e="var(--token-color-background, black)",o="var(--token-color-background-hue)",r="var(--token-color-background-saturation)",t="var(--token-color-background-lightness)",n=`
  .dashboard {

    --dashboard-overflow-y: hidden;
    --dashboard-rows: auto auto;
    --dashboard-text-color: var(--token-color-background-contrast, black);
    --dashboard-max-height: auto;
    --dashboard-bg-color: var(${e}, black);
    --dashboard-columns: 1fr 1fr 1fr;
    --dashboard-overflow: auto;
    --dashboard-overflow-y: auto;

    --dashboard-aside-bg-color: hsl(${o}, ${r}, calc(${t} + 1.5%));
    --dashboard-aside-body-column: 1/4;
    --dashboard-aside-body-row: 6/7;
    --dashboard-aside-body-padding: 20px;
    --dashboard-aside-footer-column: 1/4;
    --dashboard-aside-footer-row: 8/9;
    --dashboard-aside-footer-padding: 20px;
    --dashboard-aside-header-column: 1/4;
    --dashboard-aside-header-row: 5/6;
    --dashboard-aside-header-padding: 20px;
    
    --dashboard-main-bg-color: hsl(${o}, ${r}, calc(${t} + 0%));
    --dashboard-main-body-column: 1/4;
    --dashboard-main-body-row: 4/5;
    --dashboard-main-body-padding: 20px;
    --dashboard-main-footer-column: 1/4;
    --dashboard-main-footer-row: 10/11;
    --dashboard-main-footer-padding: 20px;
    --dashboard-main-header-column: 1/4;
    --dashboard-main-header-row: 3/4;
    --dashboard-main-header-padding: 20px;

    --dashboard-nav-bg-color: hsl(${o}, ${r}, calc(${t} + 1.5%));
    --dashboard-nav-body-column: 1/4;
    --dashboard-nav-body-row: 2/3;
    --dashboard-nav-body-padding: 20px;
    --dashboard-nav-footer-column: 1/4;
    --dashboard-nav-footer-row: 9/10;
    --dashboard-nav-footer-padding: 20px;
    --dashboard-nav-header-column: 1/4;
    --dashboard-nav-header-row: 1/2;
    --dashboard-nav-header-padding: 0;
}`,i=`@media (min-width: 768px) {
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
}`,d=`

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
}`;return U.replaceSync(`${n}${i}${d}`)};var G=new CSSStyleSheet,ye=()=>G.replaceSync(`:root {
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
`);var O=new CSSStyleSheet,we=()=>O.replaceSync(`.flexgrid {
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
`);var B=new CSSStyleSheet,xe=()=>B.replaceSync(`:root {

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
.flexpane--disabled {}`);var V=new CSSStyleSheet,Se=()=>V.replaceSync(`.grid {
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
`);var F=new CSSStyleSheet,Te=()=>F.replaceSync(`.section {
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

.section__content {
}

`);var j=new CSSStyleSheet,_e=()=>j.replaceSync(`.toggle {
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
`);function le(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(c=>c+c).join(""));let o=parseInt(e.slice(0,2),16)/255,r=parseInt(e.slice(2,4),16)/255,t=parseInt(e.slice(4,6),16)/255,a=Math.max(o,r,t),n=Math.min(o,r,t),i=0,d=0,s=(a+n)/2;if(a!==n){let c=a-n;switch(d=s>.5?c/(2-a-n):c/(a+n),a){case o:i=(r-t)/c+(r<t?6:0);break;case r:i=(t-o)/c+2;break;case t:i=(o-r)/c+4;break}i/=6}return{hue:Math.round(i*360),saturation:Math.round(d*100),lightness:Math.round(s*100)}}function Ee(e=100,o=0,r=100){let t={x:0,y:e},a={x:e,y:0},n,i;o===0?(n={x:e/2,y:e/2},i={x:e/2,y:e/2}):o>0?(n={x:e*o,y:e},i={x:e,y:e*o}):(n={x:0,y:e*(1+o)},i={x:e*(1+o),y:0});function d(h,g,p,u,w){let T=(1-h)**3*g.x+3*(1-h)**2*h*p.x+3*(1-h)*h**2*u.x+h**3*w.x,Me=(1-h)**3*g.y+3*(1-h)**2*h*p.y+3*(1-h)*h**2*u.y+h**3*w.y,Pe=T/e;return{x:T,y:Me,v:Pe}}let s=[0],c=t;for(let h=1;h<=r;h++){let g=h/r,p=d(g,t,n,i,a),u=p.x-c.x,w=p.y-c.y,T=Math.sqrt(u*u+w*w);s.push(s[h-1]+T),c=p}let l=s[r],f=[];for(let h=0;h<=r;h++){let g=h/r*l,p=0;for(let u=1;u<=r;u++)if(s[u]>=g){let w=(g-s[u-1])/(s[u]-s[u-1]);p=(u-1+w)/r;break}f.push(d(p,t,n,i,a))}return f}var $=(e,o,r,t)=>{let{hue:a,saturation:n,lightness:i}=le(e),d=i>=100?100:i,s=n>=100?100:n,c=o===50?i:Math.min(Math.max(d+(o-50)*r,0),100),l=n===0?0:n===50?n:Math.min(Math.max(s+(o-50)*t,0),100);return{hue:a,saturation:l,lightness:c}};function x(e,o,r,t,a){let n=[],i=(d,s,c)=>(d=Math.pow(d,c),s<0?Math.pow(d,1+Math.abs(s)):s>0?1-Math.pow(1-d,1+s):d);for(let d=0;d<e;d++){let s=d/(e-1),c=i(s,t,a),l=o+c*(r-o);n.push(l)}return n}var C=new CSSStyleSheet,Le=[10,20,30,40,50,60,70,80,90],ee=()=>{let e="";for(let o in m.get()){e+=':root[data-theme="'+o+`"] {
`;for(let l in m.get()[o].colors.palette){let f=m.get()[o].colors.palette[l];for(let h of Le){let g=$(f,h,m.get()[o].scaling.lightness,m.get()[o].scaling.saturation),p=`hsl(${g.hue}, ${g.saturation}%, ${g.lightness}%)`;e+=`--${l}-${h}0: ${p};
`}}for(let l in m.get()[o].colors.semantic){let f=m.get()[o].colors.semantic[l],h=m.get()[o].colors.palette[f];for(let g of Le){let p=$(h,g,m.get()[o].scaling.lightness,m.get()[o].scaling.saturation),u=`hsl(${p.hue}, ${p.saturation}%, ${p.lightness}%)`;e+=`--${l}-${g}0: ${u};
`}}let r=m.get()[o].scaling,t=x(10,1,9,r.borderWidth,1);for(let l=1;l<=t.length;l++)e+=`--border-width-${l}00: ${t[l-1]}px;
`;let a=x(10,1,9,r.borderRadius,1);for(let l=1;l<=a.length;l++)e+=`--border-radius-${l}00: ${a[l-1]}px;
`;let n=x(10,1,9,r.columnWidth,1);for(let l=1;l<=n.length;l++)e+=`--column-width-${l}00: ${n[l-1]}ch;
`;let i=x(10,1,9,r.fontSize,1);for(let l=1;l<=i.length;l++)e+=`--font-size-${l}00: ${i[l-1]}ch;
`;let d=x(10,1,9,r.iconSize,1);for(let l=1;l<=d.length;l++)e+=`--icon-size-${l}00: ${d[l-1]}ch;
`;let s=x(10,1,9,r.rowWidth,1);for(let l=1;l<=s.length;l++)e+=`--row-width-${l}00: ${s[l-1]}ch;
`;let c=x(10,1,9,r.padding,1);for(let l=1;l<=c.length;l++)e+=`--padding-${l}00: ${c[l-1]}ch;
`;e+=`}
`}console.log(e),C.replaceSync(e)};var Y=new CSSStyleSheet,$e=()=>Y.replaceSync(`.tooltip {
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
`);var oe=(e,o="0px",r="center",t="center",a="auto")=>(e.style.display="flex",e.style.gap=o,e.style.flexDirection="column",e.style.alignItems=r,e.style.justifyContent=t,e.style.width=a),Ce=(e,o="0px",r="center",t="center",a="auto")=>(e.style.display="flex",e.style.gap=o,e.style.flexDirection="row",e.style.alignItems=r,e.style.justifyContent=t,e.style.width=a);var b=A({"innerHTML:theme":E({state:v}),"style:theme":L({state:v}),"attr:theme":_({state:v}),attr:_(),change:N({event:"change"}),class:W(),click:N({event:"click"}),innerHTML:E(),input:N({event:"input"}),style:L(),column:oe,row:Ce});var He=()=>{if(v.get()==="none")return b.div()("none");let e=m.get()[v.get()],o=m.get()[v.get()].colors,r=[10,20,30,40,50,60,70,80,90],t=(n,i)=>{let{hue:d,saturation:s,lightness:c}=$(n,i,e.scaling.lightness,e.scaling.saturation);return`hsl(${d}, ${s}%, ${c}%)`},a=(n,i)=>{let{hue:d,saturation:s,lightness:c}=$(n,i,e.scaling.lightness,e.scaling.saturation),l=c>40?0:100;return`hsl(${d}, ${s}%, ${l}%, 0.35)`};return b.div(["column","0px","stretch","space-between","100%"])(...Object.entries(o.palette).map(([n,i])=>{let{hue:d,saturation:s,lightness:c}=le(i);return b.div(["row"])(...r.map(l=>b.div(["column"],["style","width",`${100/r.length}%`],["style","fontSize","9px"],["style","backgroundColor",t(i,l)],["style","padding","6px"])(b.span(["style","transform","rotate(-45deg)"],["style","color",a(i,l)])(`${l}0`))))}))};var de=te({attr:_(),style:L(),html:E()}),ze=A({attr:_(),class:W(),html:E(),style:L(),column:oe}),S=(e=100,o=0,r=50)=>{let t=Ee(e,o,r),a=.4,n=e*a,i=t.map(s=>({x:s.x+e*a/2,y:s.y+e*a/2})),d=`M ${i[0].x} ${i[0].y}`;for(let s=1;s<i.length-1;s++){let c={x:(i[s].x+i[s+1].x)/2,y:(i[s].y+i[s+1].y)/2};d+=` Q ${i[s].x} ${i[s].y} ${c.x} ${c.y}`}return d+=` T ${i[i.length-1].x} ${i[i.length-1].y}`,ze.div(["column","20px"],["html",()=>[de.svg(["attr","height","100px"],["attr","stroke-width",e*a/4],["attr","viewBox",`0 0 ${e+n} ${e+n}`],["attr","width","100px"],["style","borderRadius","5px"],["style","fill","transparent"],["style","stroke","var(--black-500)"])(de.rect(["attr","width",100+n],["attr","height",100+n])(),de.path(["attr","d",d],["attr","fill","none"],["attr","stroke-linecap","round"],["attr","stroke-width",e*a/8],["attr","stroke","var(--black-500)"])()),ze.input(["attr","type","range"],["attr","min","-1"],["attr","max","1"],["attr","step","0.01"],["attr","value",0],["class","slider"])()]])()};function k(e){let o="",r=Array.from(e.cssRules);for(let t of r)o+=t.cssText+`
`;return o}var y=new JSZip,re=e=>{switch(e.action){case"DISABLE_TOKENS":ee();break;case"DOWNLOAD_ALL":y.file("tokens.css",k(C)),y.file("accordion.css",k(H)),y.file("alerts.css",k(z)),y.file("badge.css",k(M)),y.file("bg.css",k(P)),y.file("button.css",k(D)),y.file("card.css",k(R)),y.file("dashboard.css",k(U)),y.file("dialog.css",k(G)),y.file("dropdown.css",k(I)),y.file("flexgrid.css",k(O)),y.file("flexpane.css",k(B)),y.file("grid.css",k(V)),y.file("section.css",k(F)),y.file("toggles.css",k(j)),y.file("tooltip.css",k(Y)),y.generateAsync({type:"blob"}).then(r=>{let t=document.createElement("a");t.href=URL.createObjectURL(r),t.download="capui.zip",t.click()});break;case"DOWNLOAD_THEME_TOKENS":let o=document.createElement("a");o.href=URL.createObjectURL(new Blob([k(C)],{type:"text/css"})),o.download="tokens.css",o.click();break;case"ENABLE_TOKENS":ee();break;case"SET_THEME":v.set(e.theme),re({action:"RENDER_ALL_STYLESHEETS"});break;case"RENDER_ALL_STYLESHEETS":ee(),ie(),ce(),se(),be(),he(),fe(),ke(),ie(),ye(),ue(),we(),xe(),Se(),Te(),ve(),_e(),$e(),me();break}};var Ue=b.div(["row","10px","center","space-between"],["style","backgroundColor","var(--background-600, white)"],["style","color","var(--text-500, black)"],["style","position","sticky"],["style","top","0"],["style","width","100%"])(b.div(["row","2ch"],["style","padding","0 2ch"])(b.div(["style","color","var(--brand-500)"],["style","height","100%"],["style","fontFamily","Splash"],["style","fontWeight","bold"],["style","fontSize","5ch"],["style","textAlign","center"])("cap"),b.div(["style","color","var(--brand-500)"],["style","height","100%"],["style","fontWeight","bold"],["style","fontSize","0.5ch"],["style","textAlign","center"])("v1.0.0")),b.div(["row","20px"],["style","padding","0 20px"])(b.select(["class","dropdown"],["change",e=>window.location.hash=e.target.value])(b.optgroup(["attr","label","Section"])(b.option()("tokens"),b.option()("buttons"),b.option()("dropdown"),b.option()("accordion"),b.option()("alerts"),b.option()("badge"),b.option()("bg"),b.option()("card"),b.option()("dashboard"),b.option()("dialog"),b.option()("flexgrid"),b.option()("flexpane"),b.option()("grid"),b.option()("section"),b.option()("toggles"),b.option()("tooltip"))))),Ge=b.div(["column","20px","flex-start","space-between"],["style","width","100%"],["style","padding","20px"],["innerHTML:theme",()=>[b.div(["row","5px"])(S(100,-1,5),S(100,-.5,5),S(100,-.25,5),S(100,0,5),S(100,.25,5),S(100,.5,5),S(100,1,5)),b.div(["column","0","flex-start"])(b.div(["class","h2"])("Palette"),b.p(["class","p"])("Select a color row to edit")),He()]])(),Oe=b.div(["row","2ch"],["style","backgroundColor","var(--background-600)"],["style","position","fixed"],["style","bottom","0"],["style","width","100%"],["style","color","var(--text-500, black)"],["style","padding","2ch"])(b.select(["class","dropdown"],["change",e=>re({action:"SET_THEME",theme:e.target.value})])(b.optgroup(["attr","label","Pick a theme"])(b.option(["attr","value","none"])("none"),...Object.keys(m.get()).map(e=>b.option(["attr","value",e],["attr","selected",e===v.get()])(e)))),b.button(["class","button"])("capui.zip"));document.addEventListener("DOMContentLoaded",()=>{let e=b.$el("#root");b.$el("html")(["attr:theme","data-theme",v.get],["style","backgroundColor","var(--background-600)"]),e(["innerHTML",()=>[Ue,Ge,Oe]]),re({action:"RENDER_ALL_STYLESHEETS"}),document.adoptedStyleSheets=[C,H,z,M,P,D,R,U,G,I,O,B,V,F,ne,j,Y,ae]});})();
//# sourceMappingURL=ui.js.map
