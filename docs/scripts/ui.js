(()=>{var x=new CSSStyleSheet,X=()=>x.replaceSync(`/* 
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
`);var S=new CSSStyleSheet,ee=()=>S.replaceSync(`/* 
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
`);var _=new CSSStyleSheet,oe=()=>_.replaceSync(`/* 
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
`);var T=new CSSStyleSheet,re=()=>T.replaceSync("");var te=new Map,me=new MutationObserver(e=>{e.forEach(o=>{if(o.addedNodes.length>0&&o.type==="childList"){for(let t of o.addedNodes)if(t instanceof Element)for(let[r,[n,a]]of te.entries()){let i=t.querySelectorAll(r);for(let l of i)O(l,n,a)}}})});me.observe(document,{attributes:!0,childList:!0,subtree:!0});function fe(e,o=!0,t){return(...r)=>{o&&te.set(e,[r,t]);let n=document.querySelectorAll(e);for(let a of n)O(a,r,t)}}function ke(e,o){return(...t)=>O(e,t,o)}function ye(e,o){return(...t)=>{let r="http://www.w3.org/1999/xhtml",n=document.createElementNS(r,e);return O(n,t,o)}}function O(e,o=[],t={}){o.forEach(([n,...a])=>t[n](e,...a));function r(...n){return n.forEach(a=>e.append(a)),e}return r}function V(e){return new Proxy({},{get:(o,t)=>t==="el"?r=>ke(r,e):t==="$el"?(r,n)=>fe(r,n,e):ye(t,e)})}function U(e){let{event:o=null,eventElement:t=window,hideOnFalse:r=!0,invokeImmediately:n=!0,mediaMinWidth:a=0,mediaMaxWidth:i=1/0,state:l=void 0}=e??{};return(...s)=>{let[d,u,k,m]=s,g=()=>{if(!(window.innerWidth>=a&&window.innerWidth<=i))return;let y=l&&typeof k=="function"?k(l.get()):k,Z=String(y)==="true"||String(y)==="false",Q=typeof m=="function"?m(l?l.get():void 0):m??!0;if(Z&&r&&String(y)==="false"||Z&&Q===!1)return d.removeAttribute(u);Q!==!1&&d.setAttribute(u,String(y))};l&&l.sub(g),o&&(d??t).addEventListener(o,g),window.addEventListener("resize",g),n&&g()}}function K(e){let{event:o=null,eventElement:t=window,invokeImmediately:r=!0,mediaMinWidth:n=0,mediaMaxWidth:a=1/0,method:i="classList",state:l=null}=e??{};return(...s)=>{let[d,u,k]=s,m=()=>{if(!(window.innerWidth>=n&&window.innerWidth<=a))return;let h=typeof u=="function"?u(l?l.get():void 0):u;(typeof k=="function"?k(l?l.get():void 0):k??!0)&&(i==="className"?d.setAttribute("class",h):d.classList.add(h))};l&&l.sub(m),o&&(d??t).addEventListener(o,m),window.addEventListener("resize",m),r&&m()}}function E(e){let{state:o,event:t}=e??{};return(...r)=>{let[n,a,i]=r,l=()=>{(typeof i=="function"?i(o?o.get():void 0):i??!0)?n.addEventListener(t,d=>a(d)):n.removeEventListener(t,d=>a(d))};o&&o.sub(l),l()}}function J(e){let{state:o}=e??{};return(...t)=>{let[r,n,a]=t,i=()=>{let l=o?n(o.get()):n();(typeof a=="function"?a(o?o.get():void 0):a??!0)&&(r.innerHTML="",Array.isArray(l)?l.forEach(d=>{d instanceof HTMLElement?r.appendChild(d):r.appendChild(document.createTextNode(String(d)))}):l instanceof HTMLElement?r.appendChild(l):r.innerHTML=String(l))};o&&o.sub(i),i()}}function G(e){let{event:o=null,eventElement:t=window,invokeImmediately:r=!0,mediaMinWidth:n=0,mediaMaxWidth:a=1/0,state:i=void 0}=e??{};return(...l)=>{let[s,d,u,k]=l,m=()=>{if(!(window.innerWidth>=n&&window.innerWidth<=a))return;let h=String(typeof u=="function"?u(i?i.get():void 0):u);(typeof k=="function"?k(i?i.get():void 0):k??!0)&&(d.startsWith("--")?s.style.setProperty(d,h):s.style[d]=h)};i&&i.sub(m),window.addEventListener("resize",m),o&&(s??t).addEventListener(o,m),r&&!o&&m()}}function we(e,o,t){let r=o.split("."),n=(a,i,l)=>{let[s,...d]=i;return d.length===0?Array.isArray(a)?[...a.slice(0,s),l,...a.slice(s+1)]:{...a,[s]:l}:(a[s]===void 0&&(a[s]=typeof d[0]=="number"?[]:{}),{...a,[s]:n(a[s],d,l)})};return n(e,r,t)}function B(e,o){let t=e;if(o){let g=o.storage.getItem(o.key),h=JSON.parse(g),y=h!=null;(o.overwrite??!0)&&y&&(e=h),!(o.overwrite??!0)&&y&&(Array.isArray(e)&&Array.isArray(h)?e=[...e,...h]:typeof e=="object"&&typeof h=="object"&&(e={...e,...h}))}let r=e,n=[],a=()=>r,i=()=>n.forEach(g=>g(r)),l=g=>()=>d(g(r)),s=()=>d(t),d=g=>{r=g,n.forEach(h=>h(r)),o&&o.storage.setItem(o.key,JSON.stringify(r))};return{deepSet:(g,h)=>d(we(r,g,h)),get:a,pub:i,reset:s,reduce:l,set:d,sub:g=>n.push(g),unsub:g=>n.splice(n.indexOf(g),1)}}var L={bgColorHoverToken:"--background-700",bgColorToken:"--background-500",borderColorToken:"--foreground-100",borderRadius:.35,borderWidth:.25,colorHoverToken:"--text-500",colorToken:"--text-500",fontSize:1.5,fontWeight:500,lineHeight:3};var H={bgColorHoverToken:"--background-700",bgColorToken:"--background-500",borderColorToken:"--foreground-100",borderRadius:.35,borderWidth:.25,colorHoverToken:"--text-500",colorToken:"--text-500",fontSize:1.5,fontWeight:500,lineHeight:3};var xe={pastel:{colors:{palette:{black:"#333333",red:"#d38459",orange:"#f1be78",yellow:"#fffacd",green:"#77dd77",blue:"#aec6cf",purple:"#c3b1e1",pink:"#ffb6c1",white:"#e2e2e2"},semantic:{action:"blue",background:"blue",brand:"red",error:"red",foreground:"white",info:"blue",success:"green",text:"black",warning:"yellow"},saturationRange:1,lightnessRange:1},button:{...L,colorToken:"--black-600",fontSize:1.25,lineHeight:4,borderWidth:.25,bgColorToken:"--background-700",bgColorHoverToken:"--background-800",borderColorToken:"--background-400"},dropdown:{...H,colorToken:"--black-600",fontSize:1.25,lineHeight:4,borderWidth:.25,bgColorToken:"--background-700",bgColorHoverToken:"--background-800",borderColorToken:"--background-400"},scaling:{borders:1,colGap:1,icon:1,padding:1,rowGap:1,text:1,weight:1}},rich:{colors:{palette:{black:"#000000",red:"#b22222",orange:"#ff4500",yellow:"#ffd700",green:"#006400",blue:"#00008b",purple:"#4b0082",pink:"#ff1493",white:"#f5f5f5"},semantic:{action:"blue",background:"black",brand:"red",error:"red",foreground:"black",info:"blue",success:"green",text:"white",warning:"yellow"},saturationRange:.1,lightnessRange:.25},button:L,dropdown:H,scaling:{borders:1,colGap:1,icon:1,padding:1,rowGap:1,text:1,weight:1}}},b=B(xe),f=B("pastel",{key:"theme",storage:sessionStorage});var M=new CSSStyleSheet,ae=()=>{let e=f.get()!=="none"?b.get()[f.get()].button:L;return M.replaceSync(`
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
`)};var C=new CSSStyleSheet,ne=()=>C.replaceSync(`.card {
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
`);var z=new CSSStyleSheet,Y=()=>{let e="var(--token-color-background, black)",o="var(--token-color-background-hue)",t="var(--token-color-background-saturation)",r="var(--token-color-background-lightness)",a=`
  .dashboard {

    --dashboard-overflow-y: hidden;
    --dashboard-rows: auto auto;
    --dashboard-text-color: var(--token-color-background-contrast, black);
    --dashboard-max-height: auto;
    --dashboard-bg-color: var(${e}, black);
    --dashboard-columns: 1fr 1fr 1fr;
    --dashboard-overflow: auto;
    --dashboard-overflow-y: auto;

    --dashboard-aside-bg-color: hsl(${o}, ${t}, calc(${r} + 1.5%));
    --dashboard-aside-body-column: 1/4;
    --dashboard-aside-body-row: 6/7;
    --dashboard-aside-body-padding: 20px;
    --dashboard-aside-footer-column: 1/4;
    --dashboard-aside-footer-row: 8/9;
    --dashboard-aside-footer-padding: 20px;
    --dashboard-aside-header-column: 1/4;
    --dashboard-aside-header-row: 5/6;
    --dashboard-aside-header-padding: 20px;
    
    --dashboard-main-bg-color: hsl(${o}, ${t}, calc(${r} + 0%));
    --dashboard-main-body-column: 1/4;
    --dashboard-main-body-row: 4/5;
    --dashboard-main-body-padding: 20px;
    --dashboard-main-footer-column: 1/4;
    --dashboard-main-footer-row: 10/11;
    --dashboard-main-footer-padding: 20px;
    --dashboard-main-header-column: 1/4;
    --dashboard-main-header-row: 3/4;
    --dashboard-main-header-padding: 20px;

    --dashboard-nav-bg-color: hsl(${o}, ${t}, calc(${r} + 1.5%));
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
}`;return z.replaceSync(`${a}${i}${l}`)};var $=new CSSStyleSheet,ie=()=>$.replaceSync(`:root {
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
`);var A=new CSSStyleSheet,le=()=>{let e=f.get()!=="none"?b.get()[f.get()].dropdown:H,o=`
.dropdown {
    
    --dropdown-bg-color: var(${e.bgColorToken}, white);
    --dropdown-bg-color-hover: var(${e.bgColorHoverToken}, rgba(0, 0, 0, 0.1));
    --dropdown-border-color: var(${e.borderColorToken}, black);
    --dropdown-border-radius: ${e.borderRadius}ch;
    --dropdown-border-width: ${e.borderWidth}ch;
    --dropdown-color: var(${e.colorToken}, black);
    --dropdown-color-hover: var(${e.colorHoverToken}, black);
    --dropdown-font-size: ${e.fontSize}ch;
    --dropdown-font-weight: ${e.fontWeight};
    --dropdown-line-height: ${e.lineHeight}ch;
    --dropdown-arrow-size: ${e.lineHeight*.21}ch;

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
`;return A.replaceSync(o)};var P=new CSSStyleSheet,de=()=>P.replaceSync(`.flexgrid {
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
`);var N=new CSSStyleSheet,ce=()=>N.replaceSync(`:root {

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
.flexpane--disabled {}`);var D=new CSSStyleSheet,se=()=>D.replaceSync(`.grid {
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
`);var I=new CSSStyleSheet,be=()=>I.replaceSync(`.section {
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

`);var R=new CSSStyleSheet,ge=()=>R.replaceSync(`.toggle {
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
`);function Se(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(d=>d+d).join(""));let o=parseInt(e.slice(0,2),16)/255,t=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255,n=Math.max(o,t,r),a=Math.min(o,t,r),i=0,l=0,s=(n+a)/2;if(n!==a){let d=n-a;switch(l=s>.5?d/(2-n-a):d/(n+a),n){case o:i=(t-r)/d+(t<r?6:0);break;case t:i=(r-o)/d+2;break;case r:i=(o-t)/d+4;break}i/=6}return{hue:Math.round(i*360),saturation:Math.round(l*100),lightness:Math.round(s*100)}}var q=(e,o,t,r)=>{let{hue:n,saturation:a,lightness:i}=Se(e),l=i>=100?100:i,s=a>=100?100:a,d=o===50?i:Math.min(Math.max(l+(o-50)*t,0),100),u=a===0?0:a===50?a:Math.min(Math.max(s+(o-50)*r,0),100);return{hue:n,saturation:u,lightness:d}};var w=new CSSStyleSheet,he=[10,20,30,40,50,60,70,80,90],j=()=>{let e="";for(let o in b.get()){e+=':root[data-theme="'+o+`"] {
`;for(let t in b.get()[o].colors.palette){let r=b.get()[o].colors.palette[t];for(let n of he){let a=q(r,n,b.get()[o].colors.lightnessRange,b.get()[o].colors.saturationRange),i=`hsl(${a.hue}, ${a.saturation}%, ${a.lightness}%)`;e+=`--${t}-${n}0: ${i};
`}}for(let t in b.get()[o].colors.semantic){let r=b.get()[o].colors.semantic[t],n=b.get()[o].colors.palette[r];for(let a of he){let i=q(n,a,b.get()[o].colors.lightnessRange,b.get()[o].colors.saturationRange),l=`hsl(${i.hue}, ${i.saturation}%, ${i.lightness}%)`;e+=`--${t}-${a}0: ${l};
`}}e+=`--icon-scaling: ${b.get()[o].scaling.icon}ch;
`,e+=`--text-scaling: ${b.get()[o].scaling.text}ch;
`,e+=`--col-gap-scaling: ${b.get()[o].scaling.colGap}ch;
`,e+=`--row-gap-scaling: ${b.get()[o].scaling.rowGap}ch;
`,e+=`--padding-scaling: ${b.get()[o].scaling.padding}ch;
`,e+=`--borders-scaling: ${b.get()[o].scaling.borders}ch;
`,e+=`--weight-scaling: ${b.get()[o].scaling.weight}ch;
`,e+=`}
`}w.replaceSync(e)};var W=new CSSStyleSheet,pe=()=>W.replaceSync(`.tooltip {
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
`);function p(e){let o="",t=Array.from(e.cssRules);for(let r of t)o+=r.cssText+`
`;return o}var v=new JSZip;var F=e=>{switch(e.action){case"DISABLE_TOKENS":j();break;case"DOWNLOAD_ALL":v.file("tokens.css",p(w)),v.file("accordion.css",p(x)),v.file("alerts.css",p(S)),v.file("badge.css",p(_)),v.file("bg.css",p(T)),v.file("button.css",p(M)),v.file("card.css",p(C)),v.file("dashboard.css",p(z)),v.file("dialog.css",p($)),v.file("dropdown.css",p(A)),v.file("flexgrid.css",p(P)),v.file("flexpane.css",p(N)),v.file("grid.css",p(D)),v.file("section.css",p(I)),v.file("toggles.css",p(R)),v.file("tooltip.css",p(W)),v.generateAsync({type:"blob"}).then(t=>{let r=document.createElement("a");r.href=URL.createObjectURL(t),r.download="capui.zip",r.click()});break;case"DOWNLOAD_THEME_TOKENS":let o=document.createElement("a");o.href=URL.createObjectURL(new Blob([p(w)],{type:"text/css"})),o.download="tokens.css",o.click();break;case"ENABLE_TOKENS":j();break;case"SET_THEME":f.set(e.theme),F({action:"RENDER_ALL_STYLESHEETS"});break;case"RENDER_ALL_STYLESHEETS":j(),Y(),X(),ee(),oe(),re(),ae(),ne(),Y(),ie(),le(),de(),ce(),se(),be(),ge(),pe();break}};var ve=(e,o="0px",t="center",r="center",n="auto")=>(e.style.display="flex",e.style.gap=o,e.style.flexDirection="column",e.style.alignItems=t,e.style.justifyContent=r,e.style.width=n),ue=(e,o="0px",t="center",r="center",n="auto")=>(e.style.display="flex",e.style.gap=o,e.style.flexDirection="row",e.style.alignItems=t,e.style.justifyContent=r,e.style.width=n);var c=V({"style:theme":G({state:f}),"attr:theme":U({state:f}),attr:U(),change:E({event:"change"}),class:K(),click:E({event:"click"}),innerHTML:J(),input:E({event:"input"}),style:G(),column:ve,row:ue});var _e=c.div(["row","10px","center","space-between"],["style","backgroundColor","var(--background-600, white)"],["style","color","var(--text-500, black)"],["style","position","fixed"],["style","top","0"],["style","width","100%"])(c.div(["row","2ch"],["style","padding","0 2ch"])(c.div(["style","color","var(--brand-500)"],["style","height","100%"],["style","fontFamily","Splash"],["style","fontWeight","bold"],["style","fontSize","5ch"],["style","textAlign","center"])("cap"),c.div(["style","color","var(--brand-500)"],["style","height","100%"],["style","fontWeight","bold"],["style","fontSize","0.5ch"],["style","textAlign","center"])("v1.0.0")),c.div(["row","20px"],["style","padding","0 20px"])(c.select(["class","dropdown"],["class","dropdown--small"],["change",e=>window.location.hash=e.target.value])(c.optgroup(["attr","label","Section"])(c.option()("tokens"),c.option()("buttons"),c.option()("dropdown"),c.option()("accordion"),c.option()("alerts"),c.option()("badge"),c.option()("bg"),c.option()("card"),c.option()("dashboard"),c.option()("dialog"),c.option()("flexgrid"),c.option()("flexpane"),c.option()("grid"),c.option()("section"),c.option()("toggles"),c.option()("tooltip"))))),Te=c.div()("Body"),Ee=c.div(["row","2ch"],["style","backgroundColor","var(--background-600)"],["style","position","fixed"],["style","bottom","0"],["style","width","100%"],["style","color","var(--text-500, black)"],["style","padding","2ch"])(c.select(["class","dropdown"],["change",e=>F({action:"SET_THEME",theme:e.target.value})])(c.optgroup(["attr","label","Pick a theme"])(c.option(["attr","value","none"])("none"),...Object.keys(b.get()).map(e=>c.option(["attr","value",e],["attr","selected",e===f.get()])(e)))),c.button(["class","button"])("capui.zip"));document.addEventListener("DOMContentLoaded",()=>{let e=c.$el("#root");c.$el("html")(["attr:theme","data-theme",f.get],["style","backgroundColor","var(--background-500)"]),e(["innerHTML",()=>[_e,Te,Ee]]),F({action:"RENDER_ALL_STYLESHEETS"}),document.adoptedStyleSheets=[w,x,S,_,T,M,C,z,$,A,P,N,D,I,R,W]});})();
//# sourceMappingURL=ui.js.map
