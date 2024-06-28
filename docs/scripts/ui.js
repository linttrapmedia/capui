(()=>{var M=new CSSStyleSheet,de=()=>M.replaceSync(`/* 
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
`);var P=new CSSStyleSheet,se=()=>P.replaceSync(`/* 
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
`);var A=new CSSStyleSheet,ce=()=>A.replaceSync(`/* 
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
`);var W=new CSSStyleSheet,be=()=>W.replaceSync("");var he=new Map,Me=new MutationObserver(e=>{e.forEach(o=>{if(o.addedNodes.length>0&&o.type==="childList"){for(let r of o.addedNodes)if(r instanceof Element)for(let[t,[n,a]]of he.entries()){let c=r.querySelectorAll(t);for(let l of c)q(l,n,a)}}})});Me.observe(document,{attributes:!0,childList:!0,subtree:!0});function Pe(e,o=!0,r){return(...t)=>{o&&he.set(e,[t,r]);let n=document.querySelectorAll(e);for(let a of n)q(a,t,r)}}function Ae(e,o){return(...r)=>q(e,r,o)}function We(e,o){return(...r)=>{let t="http://www.w3.org/1999/xhtml",n=document.createElementNS(t,e);return q(n,r,o)}}function q(e,o=[],r={}){o.forEach(([n,...a])=>r[n](e,...a));function t(...n){return n.forEach(a=>e.append(a)),e}return t}function N(e){return new Proxy({},{get:(o,r)=>r==="el"?t=>Ae(t,e):r==="$el"?(t,n)=>Pe(t,n,e):We(r,e)})}function ge(e,o=[],r={}){o.forEach(([n,...a])=>r[n](e,...a));function t(...n){return n.forEach(a=>e.append(a)),e}return t}function te(e){return new Proxy({},{get:(o,r)=>r==="el"?t=>(...n)=>ge(t,n,e):(...t)=>{let n="http://www.w3.org/2000/svg",a=document.createElementNS(n,r);return ge(a,t,e)}})}function E(e){let{event:o=null,eventElement:r=window,hideOnFalse:t=!0,invokeImmediately:n=!0,mediaMinWidth:a=0,mediaMaxWidth:c=1/0,state:l=void 0}=e??{};return(...h)=>{let[s,i,f,b]=h,p=()=>{if(!(window.innerWidth>=a&&window.innerWidth<=c))return;let u=l&&typeof f=="function"?f(l.get()):f,w=String(u)==="true"||String(u)==="false",_=typeof b=="function"?b(l?l.get():void 0):b??!0;if(w&&t&&String(u)==="false"||w&&_===!1)return s.removeAttribute(i);_!==!1&&s.setAttribute(i,String(u))};l&&l.sub(p),o&&(s??r).addEventListener(o,p),window.addEventListener("resize",p),n&&p()}}function I(e){let{event:o=null,eventElement:r=window,invokeImmediately:t=!0,mediaMinWidth:n=0,mediaMaxWidth:a=1/0,method:c="classList",state:l=null}=e??{};return(...h)=>{let[s,i,f]=h,b=()=>{if(!(window.innerWidth>=n&&window.innerWidth<=a))return;let g=typeof i=="function"?i(l?l.get():void 0):i;(typeof f=="function"?f(l?l.get():void 0):f??!0)&&(c==="className"?s.setAttribute("class",g):s.classList.add(g))};l&&l.sub(b),o&&(s??r).addEventListener(o,b),window.addEventListener("resize",b),t&&b()}}function z(e){let{state:o,event:r}=e??{};return(...t)=>{let[n,a,c]=t,l=()=>{(typeof c=="function"?c(o?o.get():void 0):c??!0)?n.addEventListener(r,s=>a(s)):n.removeEventListener(r,s=>a(s))};o&&o.sub(l),l()}}function L(e){let{state:o}=e??{};return(...r)=>{let[t,n,a]=r,c=()=>{let l=o?n(o.get()):n();(typeof a=="function"?a(o?o.get():void 0):a??!0)&&(t.innerHTML="",Array.isArray(l)?l.forEach(s=>{s instanceof HTMLElement||s instanceof SVGElement?t.appendChild(s):t.appendChild(document.createTextNode(String(s)))}):l instanceof HTMLElement||l instanceof SVGElement?t.appendChild(l):t.innerHTML=String(l))};o&&o.sub(c),c()}}function x(e){let{event:o=null,eventElement:r=window,invokeImmediately:t=!0,mediaMinWidth:n=0,mediaMaxWidth:a=1/0,state:c=void 0}=e??{};return(...l)=>{let[h,s,i,f]=l,b=()=>{if(!(window.innerWidth>=n&&window.innerWidth<=a))return;let g=String(typeof i=="function"?i(c?c.get():void 0):i);(typeof f=="function"?f(c?c.get():void 0):f??!0)&&(s.startsWith("--")?h.style.setProperty(s,g):h.style[s]=g)};c&&c.sub(b),window.addEventListener("resize",b),o&&(h??r).addEventListener(o,b),t&&!o&&b()}}function Ne(e,o,r){let t=o.split("."),n=(a,c,l)=>{let[h,...s]=c;return s.length===0?Array.isArray(a)?[...a.slice(0,h),l,...a.slice(h+1)]:{...a,[h]:l}:(a[h]===void 0&&(a[h]=typeof s[0]=="number"?[]:{}),{...a,[h]:n(a[h],s,l)})};return n(e,t,r)}function C(e,o){let r=e;if(o){let p=o.storage.getItem(o.key),g=JSON.parse(p),u=g!=null;(o.overwrite??!0)&&u&&(e=g),!(o.overwrite??!0)&&u&&(Array.isArray(e)&&Array.isArray(g)?e=[...e,...g]:typeof e=="object"&&typeof g=="object"&&(e={...e,...g}))}let t=e,n=[],a=()=>t,c=()=>n.forEach(p=>p(t)),l=p=>()=>s(p(t)),h=()=>s(r),s=p=>{t=p,n.forEach(g=>g(t)),o&&o.storage.setItem(o.key,JSON.stringify(t))};return{deepSet:(p,g)=>s(Ne(t,p,g)),get:a,pub:c,reset:h,reduce:l,set:s,sub:p=>n.push(p),unsub:p=>n.splice(n.indexOf(p),1)}}var J={bgColorHoverToken:"--background-700",bgColorToken:"--background-500",borderColorToken:"--foreground-100",borderColorHoverToken:"--foreground-200",borderRadiusToken:"--radius-scaling",borderWidthToken:"--borders-scaling",colorHoverToken:"--text-500",colorToken:"--text-500"},D=new CSSStyleSheet,pe=()=>{let e=v.get()!=="none"?m.get()[v.get()].dropdown:J,o=`
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
`;return D.replaceSync(o)};var Z={bgColorHoverToken:"--background-100",bgColorToken:"--background-100",borderColorToken:"--foreground-100",borderColorHoverToken:"--foreground-200",borderRadius:"--border-radius-500",borderWidth:"--border-width-100",colorHoverToken:"--foreground-500",colorToken:"--foreground-500"},ne=new CSSStyleSheet,ue=()=>{let e=v.get()!=="none"?m.get()[v.get()].slider:Z;return ne.replaceSync(`
.slider { 
  --slider-bg-color: var(${e.bgColorToken}, rgba(0, 0, 0, 0.2));
  --slider-bg-color-hover: var(${e.bgColorHoverToken}, rgba(0, 0, 0, 0.2));
  --slider-border-color: var(${e.borderColorToken}, black);
  --slider-border-radius: var(${e.borderRadius}ch, 1ch);
  --slider-border-width: ${e.borderWidth}ch;
  --slider-color: var(${e.colorToken}, black);
  --slider-color-hover: var(${e.colorHoverToken}, grey);
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
`)};var Q={colorToken:"--text-500",fontSizeBase:1.5,fontSizeSpread:.25,fontWeight:500,lineHeight:1.5},ae=new CSSStyleSheet,ve=()=>{let e=v.get()!=="none"?m.get()[v.get()].typography:Q,r=`
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
`;return ae.replaceSync(r)};var Ie={pastel:{colors:{palette:{black:"#333333",red:"#d38459",orange:"#f1be78",yellow:"#fffacd",green:"#77dd77",blue:"#aec6cf",purple:"#c3b1e1",pink:"#ffb6c1",white:"#e2e2e2"},semantic:{action:"blue",background:"purple",brand:"red",error:"red",foreground:"white",info:"blue",success:"green",text:"red",warning:"yellow"}},button:{...X,colorToken:"--black-600",bgColorToken:"--background-700",bgColorHoverToken:"--background-800",borderColorToken:"--background-400"},dropdown:{...J,colorToken:"--black-600",bgColorToken:"--background-700",bgColorHoverToken:"--background-800",borderColorToken:"--background-400",borderColorHoverToken:"--background-500"},slider:{...Z},typography:{...Q,colorToken:"--white-500"},scaling:{borderRadius:1,borderWidth:.5,columnWidth:1,fontSize:2,iconSize:2,rowWidth:1,padding:1,saturation:.25,lightness:.5}},rich:{colors:{palette:{black:"#000000",red:"#b22222",orange:"#ff4500",yellow:"#ffd700",green:"#006400",blue:"#00008b",purple:"#4b0082",pink:"#ff1493",white:"#f5f5f5"},semantic:{action:"blue",background:"black",brand:"red",error:"red",foreground:"black",info:"blue",success:"green",text:"white",warning:"yellow"}},button:X,dropdown:J,slider:{...Z},typography:{...Q},scaling:{borderRadius:1,borderWidth:0,columnWidth:1,fontSize:1,iconSize:1,rowWidth:1,padding:1,saturation:.1,lightness:.25}}},m=C(Ie),v=C("pastel",{key:"theme",storage:sessionStorage});var X={bgColorHoverToken:"--background-700",bgColorToken:"--background-500",borderColorToken:"--foreground-100",borerColorHoverToken:"--foreground-200",colorHoverToken:"--text-500",colorToken:"--text-500"},R=new CSSStyleSheet,me=()=>{let e=v.get()!=="none"?m.get()[v.get()].button:X;return R.replaceSync(`
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
`)};var U=new CSSStyleSheet,fe=()=>U.replaceSync(`.card {
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
`);var G=new CSSStyleSheet,ie=()=>{let e="var(--token-color-background, black)",o="var(--token-color-background-hue)",r="var(--token-color-background-saturation)",t="var(--token-color-background-lightness)",a=`
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
}`,c=`@media (min-width: 768px) {
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
}`,l=`

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
}`;return G.replaceSync(`${a}${c}${l}`)};var O=new CSSStyleSheet,ke=()=>O.replaceSync(`:root {
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
`);var B=new CSSStyleSheet,ye=()=>B.replaceSync(`.flexgrid {
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
`);var V=new CSSStyleSheet,we=()=>V.replaceSync(`:root {

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
.flexpane--disabled {}`);var F=new CSSStyleSheet,xe=()=>F.replaceSync(`.grid {
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
`);var j=new CSSStyleSheet,Se=()=>j.replaceSync(`.section {
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

`);var Y=new CSSStyleSheet,Te=()=>Y.replaceSync(`.toggle {
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
`);function le(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(s=>s+s).join(""));let o=parseInt(e.slice(0,2),16)/255,r=parseInt(e.slice(2,4),16)/255,t=parseInt(e.slice(4,6),16)/255,n=Math.max(o,r,t),a=Math.min(o,r,t),c=0,l=0,h=(n+a)/2;if(n!==a){let s=n-a;switch(l=h>.5?s/(2-n-a):s/(n+a),n){case o:c=(r-t)/s+(r<t?6:0);break;case r:c=(t-o)/s+2;break;case t:c=(o-r)/s+4;break}c/=6}return{hue:Math.round(c*360),saturation:Math.round(l*100),lightness:Math.round(h*100)}}function _e(e=100,o=0,r=100){let t={x:0,y:e},n={x:e,y:0},a,c;o===0?(a={x:e/2,y:e/2},c={x:e/2,y:e/2}):o>0?(a={x:e*o,y:e},c={x:e,y:e*o}):(a={x:0,y:e*(1+o)},c={x:e*(1+o),y:0});function l(b,p,g,u,w){let _=(1-b)**3*p.x+3*(1-b)**2*b*g.x+3*(1-b)*b**2*u.x+b**3*w.x,$e=(1-b)**3*p.y+3*(1-b)**2*b*g.y+3*(1-b)*b**2*u.y+b**3*w.y,He=_/e;return{x:_,y:$e,v:He}}let h=[0],s=t;for(let b=1;b<=r;b++){let p=b/r,g=l(p,t,a,c,n),u=g.x-s.x,w=g.y-s.y,_=Math.sqrt(u*u+w*w);h.push(h[b-1]+_),s=g}let i=h[r],f=[];for(let b=0;b<=r;b++){let p=b/r*i,g=0;for(let u=1;u<=r;u++)if(h[u]>=p){let w=(p-h[u-1])/(h[u]-h[u-1]);g=(u-1+w)/r;break}f.push(l(g,t,a,c,n))}return f}var $=(e,o,r,t)=>{let{hue:n,saturation:a,lightness:c}=le(e),l=c>=100?100:c,h=a>=100?100:a,s=o===50?c:Math.min(Math.max(l+(o-50)*r,0),100),i=a===0?0:a===50?a:Math.min(Math.max(h+(o-50)*t,0),100);return{hue:n,saturation:i,lightness:s}};function S(e,o,r,t,n){let a=[],c=(l,h,s)=>(l=Math.pow(l,s),h<0?Math.pow(l,1+Math.abs(h)):h>0?1-Math.pow(1-l,1+h):l);for(let l=0;l<e;l++){let h=l/(e-1),s=c(h,t,n),i=o+s*(r-o);a.push(i)}return a}var H=new CSSStyleSheet,Ee=[10,20,30,40,50,60,70,80,90],ee=()=>{let e="";for(let o in m.get()){e+=':root[data-theme="'+o+`"] {
`;for(let i in m.get()[o].colors.palette){let f=m.get()[o].colors.palette[i];for(let b of Ee){let p=$(f,b,m.get()[o].scaling.lightness,m.get()[o].scaling.saturation),g=`hsl(${p.hue}, ${p.saturation}%, ${p.lightness}%)`;e+=`--${i}-${b}0: ${g};
`}}for(let i in m.get()[o].colors.semantic){let f=m.get()[o].colors.semantic[i],b=m.get()[o].colors.palette[f];for(let p of Ee){let g=$(b,p,m.get()[o].scaling.lightness,m.get()[o].scaling.saturation),u=`hsl(${g.hue}, ${g.saturation}%, ${g.lightness}%)`;e+=`--${i}-${p}0: ${u};
`}}let r=m.get()[o].scaling,t=S(10,1,9,r.borderWidth,1);for(let i=1;i<=t.length;i++)e+=`--border-width-${i}00: ${t[i-1]}px;
`;let n=S(10,1,9,r.borderRadius,1);for(let i=1;i<=n.length;i++)e+=`--border-radius-${i}00: ${n[i-1]}px;
`;let a=S(10,1,9,r.columnWidth,1);for(let i=1;i<=a.length;i++)e+=`--column-width-${i}00: ${a[i-1]}ch;
`;let c=S(10,1,9,r.fontSize,1);for(let i=1;i<=c.length;i++)e+=`--font-size-${i}00: ${c[i-1]}ch;
`;let l=S(10,1,9,r.iconSize,1);for(let i=1;i<=l.length;i++)e+=`--icon-size-${i}00: ${l[i-1]}ch;
`;let h=S(10,1,9,r.rowWidth,1);for(let i=1;i<=h.length;i++)e+=`--row-width-${i}00: ${h[i-1]}ch;
`;let s=S(10,1,9,r.padding,1);for(let i=1;i<=s.length;i++)e+=`--padding-${i}00: ${s[i-1]}ch;
`;e+=`}
`}H.replaceSync(e)};var K=new CSSStyleSheet,ze=()=>K.replaceSync(`.tooltip {
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
`);var oe=(e,o="0px",r="center",t="center",n="auto")=>(e.style.display="flex",e.style.gap=o,e.style.flexDirection="column",e.style.alignItems=r,e.style.justifyContent=t,e.style.width=n),Le=(e,o="0px",r="center",t="center",n="auto")=>(e.style.display="flex",e.style.gap=o,e.style.flexDirection="row",e.style.alignItems=r,e.style.justifyContent=t,e.style.width=n);var d=N({"innerHTML:theme":L({state:v}),"style:theme":x({state:v}),"attr:theme":E({state:v}),attr:E(),change:z({event:"change"}),class:I(),click:z({event:"click"}),innerHTML:L(),input:z({event:"input"}),style:x(),"mobile:style":x({mediaMinWidth:0}),"tablet:style":x({mediaMinWidth:768}),column:oe,row:Le});var Ce=()=>{if(v.get()==="none")return d.div()("none");let e=m.get()[v.get()],o=m.get()[v.get()].colors,r=[10,20,30,40,50,60,70,80,90],t=(a,c)=>{let{hue:l,saturation:h,lightness:s}=$(a,c,e.scaling.lightness,e.scaling.saturation);return`hsl(${l}, ${h}%, ${s}%)`},n=(a,c)=>{let{hue:l,saturation:h,lightness:s}=$(a,c,e.scaling.lightness,e.scaling.saturation),i=s>40?0:100;return`hsl(${l}, ${h}%, ${i}%, 0.35)`};return d.div(["column","0px","stretch","space-between","100%"])(...Object.entries(o.palette).map(([a,c])=>{let{hue:l,saturation:h,lightness:s}=le(c);return d.div(["row"])(...r.map(i=>d.div(["column"],["style","width",`${100/r.length}%`],["style","fontSize","9px"],["style","backgroundColor",t(c,i)],["style","padding","6px"])(d.span(["style","transform","rotate(-45deg)"],["style","color",n(c,i)])(`${i}0`))))}))};var T=e=>{let o=C(e,{key:e.name,storage:sessionStorage}),r=te({attr:E({state:o}),style:x(),html:L()}),t=N({attr:E(),class:I(),html:L(),style:x(),column:oe,change:z({event:"input"})}),n=.4,a=()=>{let{size:c,curvature:l,steps:h}=o.get(),s=_e(c,l,h),i=s.map(g=>g.x),f=s.map(g=>g.y),b=s.map(g=>({x:g.x+c*n/2,y:g.y+c*n/2})),p=`M ${b[0].x} ${b[0].y}`;for(let g=1;g<b.length-1;g++){let u={x:(b[g].x+b[g+1].x)/2,y:(b[g].y+b[g+1].y)/2};p+=` Q ${b[g].x} ${b[g].y} ${u.x} ${u.y}`}return p+=` T ${b[b.length-1].x} ${b[b.length-1].y}`,{d:p,xs:i,ys:f}};return t.div(["column","20px"],["html",()=>[r.svg(["attr","height","100px"],["attr","stroke-width",o.get().size*n/4],["attr","viewBox",`0 0 ${o.get().size+o.get().size*n} ${o.get().size+o.get().size*n}`],["attr","width","100px"],["style","borderRadius","5px"],["style","fill","transparent"],["style","stroke","var(--black-500, black)"])(r.rect(["attr","width",100+o.get().size*n],["attr","height",100+o.get().size*n])(),r.path(["attr","d",()=>o.get().coordinates.d||a().d],["attr","fill","none"],["attr","stroke-linecap","round"],["attr","stroke-width",o.get().size*n/8],["attr","stroke","var(--black-500)"])()),t.input(["attr","type","range"],["attr","min","-1"],["attr","max","1"],["attr","step","0.01"],["attr","value",o.get().curvature],["class","slider"],["change",c=>{let l=parseFloat(c.target.value),h=a();o.set({...o.get(),curvature:l,coordinates:h})}])()]])()};function k(e){let o="",r=Array.from(e.cssRules);for(let t of r)o+=t.cssText+`
`;return o}var y=new JSZip,re=e=>{switch(e.action){case"DISABLE_TOKENS":ee();break;case"DOWNLOAD_ALL":y.file("tokens.css",k(H)),y.file("accordion.css",k(M)),y.file("alerts.css",k(P)),y.file("badge.css",k(A)),y.file("bg.css",k(W)),y.file("button.css",k(R)),y.file("card.css",k(U)),y.file("dashboard.css",k(G)),y.file("dialog.css",k(O)),y.file("dropdown.css",k(D)),y.file("flexgrid.css",k(B)),y.file("flexpane.css",k(V)),y.file("grid.css",k(F)),y.file("section.css",k(j)),y.file("toggles.css",k(Y)),y.file("tooltip.css",k(K)),y.generateAsync({type:"blob"}).then(r=>{let t=document.createElement("a");t.href=URL.createObjectURL(r),t.download="capui.zip",t.click()});break;case"DOWNLOAD_THEME_TOKENS":let o=document.createElement("a");o.href=URL.createObjectURL(new Blob([k(H)],{type:"text/css"})),o.download="tokens.css",o.click();break;case"ENABLE_TOKENS":ee();break;case"SET_THEME":v.set(e.theme),re({action:"RENDER_ALL_STYLESHEETS"});break;case"RENDER_ALL_STYLESHEETS":ee(),ie(),de(),se(),ce(),be(),me(),fe(),ie(),ke(),pe(),ye(),we(),xe(),Se(),ue(),Te(),ze(),ve();break}};var De=d.div(["row","10px","center","space-between"],["style","backgroundColor","var(--background-600, white)"],["style","color","var(--text-500, black)"],["style","position","sticky"],["style","top","0"],["style","width","100%"],["style","zIndex","1000"])(d.div(["row","2ch"],["style","padding","0 2ch"])(d.div(["style","color","var(--brand-500)"],["style","height","100%"],["style","fontFamily","Splash"],["style","fontWeight","bold"],["style","fontSize","5ch"],["style","textAlign","center"])("cap"),d.div(["style","color","var(--brand-500)"],["style","height","100%"],["style","fontWeight","bold"],["style","fontSize","0.5ch"],["style","textAlign","center"])("v1.0.0")),d.div(["row","20px"],["style","padding","0 20px"])(d.select(["class","dropdown"],["change",e=>window.location.hash=e.target.value])(d.optgroup(["attr","label","Section"])(d.option()("tokens"),d.option()("buttons"),d.option()("dropdown"),d.option()("accordion"),d.option()("alerts"),d.option()("badge"),d.option()("bg"),d.option()("card"),d.option()("dashboard"),d.option()("dialog"),d.option()("flexgrid"),d.option()("flexpane"),d.option()("grid"),d.option()("section"),d.option()("toggles"),d.option()("tooltip"))))),Re=d.div(["column","20px","flex-start","space-between"],["style","width","100%"],["style","padding","20px"],["innerHTML:theme",()=>[d.div(["column","0","flex-start","center","100%"])(d.div(["class","h3"])("Palette"),d.p(["class","p"])("Select a color row to edit"),Ce()),d.div(["style","display","flex"],["style","gap","20px"],["style","width","100%"],["style","alignItems","center"],["style","justifyContent","center"],["mobile:style","flexDirection","column"],["tablet:style","flexDirection","row"])(d.div(["column","0","center","center"])(d.div(["class","h3"])("Border Width"),d.p(["class","p"])("Set the border width scale"),T({size:100,curvature:0,steps:100,coordinates:{d:"",xs:[],ys:[]},name:"border-width"})),d.div(["column","0","center","center"])(d.div(["class","h3"])("Border Radii"),d.p(["class","p"])("Set the border radius scale"),T({size:100,curvature:0,steps:100,coordinates:{d:"",xs:[],ys:[]},name:"border-radius"})),d.div(["column","0","center","center"])(d.div(["class","h3"])("Font Sizing"),d.p(["class","p"])("Set the font sizing scale"),T({size:100,curvature:0,steps:100,coordinates:{d:"",xs:[],ys:[]},name:"font-sizing"})),d.div(["column","0","center","center"])(d.div(["class","h3"])("Icon Sizing"),d.p(["class","p"])("Set the icon sizing scale"),T({size:100,curvature:0,steps:100,coordinates:{d:"",xs:[],ys:[]},name:"icon-sizing"})),d.div(["column","0","center","center"])(d.div(["class","h3"])("Column Width"),d.p(["class","p"])("Set the column width scale"),T({size:100,curvature:0,steps:100,coordinates:{d:"",xs:[],ys:[]},name:"column-width"})),d.div(["column","0","center","center"])(d.div(["class","h3"])("Row Width"),d.p(["class","p"])("Set the row width scale"),T({size:100,curvature:0,steps:100,coordinates:{d:"",xs:[],ys:[]},name:"row-width"})),d.div(["column","0","center","center"])(d.div(["class","h3"])("Padding"),d.p(["class","p"])("Set the padding scale"),T({size:100,curvature:0,steps:100,coordinates:{d:"",xs:[],ys:[]},name:"padding"})))]])(),Ue=d.div(["row","2ch"],["style","backgroundColor","var(--background-600)"],["style","position","fixed"],["style","bottom","0"],["style","width","100%"],["style","color","var(--text-500, black)"],["style","padding","2ch"])(d.select(["class","dropdown"],["change",e=>re({action:"SET_THEME",theme:e.target.value})])(d.optgroup(["attr","label","Pick a theme"])(d.option(["attr","value","none"])("none"),...Object.keys(m.get()).map(e=>d.option(["attr","value",e],["attr","selected",e===v.get()])(e)))),d.button(["class","button"])("capui.zip"));document.addEventListener("DOMContentLoaded",()=>{let e=d.$el("#root");d.$el("html")(["attr:theme","data-theme",v.get],["style","backgroundColor","var(--background-600)"]),e(["innerHTML",()=>[De,Re,Ue]]),re({action:"RENDER_ALL_STYLESHEETS"}),document.adoptedStyleSheets=[H,M,P,A,W,R,U,G,O,D,B,V,F,j,ne,Y,K,ae]});})();
//# sourceMappingURL=ui.js.map
