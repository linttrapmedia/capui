(()=>{var N=new CSSStyleSheet,de=()=>N.replaceSync(`/* 
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
`);var R=new CSSStyleSheet,ce=()=>R.replaceSync(`/* 
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
`);var W=new CSSStyleSheet,se=()=>W.replaceSync(`/* 
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
`);var D=new CSSStyleSheet,be=()=>D.replaceSync("");var he=new Map,Le=new MutationObserver(e=>{e.forEach(o=>{if(o.addedNodes.length>0&&o.type==="childList"){for(let t of o.addedNodes)if(t instanceof Element)for(let[r,[n,l]]of he.entries()){let c=t.querySelectorAll(r);for(let i of c)K(i,n,l)}}})});Le.observe(document,{attributes:!0,childList:!0,subtree:!0});function He(e,o=!0,t){return(...r)=>{o&&he.set(e,[r,t]);let n=document.querySelectorAll(e);for(let l of n)K(l,r,t)}}function ze(e,o){return(...t)=>K(e,t,o)}function Me(e,o){return(...t)=>{let r="http://www.w3.org/1999/xhtml",n=document.createElementNS(r,e);return K(n,t,o)}}function K(e,o=[],t={}){o.forEach(([n,...l])=>t[n](e,...l));function r(...n){return n.forEach(l=>e.append(l)),e}return r}function H(e){return new Proxy({},{get:(o,t)=>t==="el"?r=>ze(r,e):t==="$el"?(r,n)=>He(r,n,e):Me(t,e)})}function E(e){let{event:o=null,eventElement:t=window,hideOnFalse:r=!0,invokeImmediately:n=!0,mediaMinWidth:l=0,mediaMaxWidth:c=1/0,state:i=void 0}=e??{};return(...b)=>{let[d,u,w,k]=b,h=()=>{if(!(window.innerWidth>=l&&window.innerWidth<=c))return;let _=i&&typeof w=="function"?w(i.get()):w,le=String(_)==="true"||String(_)==="false",ie=typeof k=="function"?k(i?i.get():void 0):k??!0;if(le&&r&&String(_)==="false"||le&&ie===!1)return d.removeAttribute(u);ie!==!1&&d.setAttribute(u,String(_))};i&&i.sub(h),o&&(d??t).addEventListener(o,h),window.addEventListener("resize",h),n&&h()}}function z(e){let{event:o=null,eventElement:t=window,invokeImmediately:r=!0,mediaMinWidth:n=0,mediaMaxWidth:l=1/0,method:c="classList",state:i=null}=e??{};return(...b)=>{let[d,u,w]=b,k=()=>{if(!(window.innerWidth>=n&&window.innerWidth<=l))return;let p=typeof u=="function"?u(i?i.get():void 0):u;(typeof w=="function"?w(i?i.get():void 0):w??!0)&&(c==="className"?d.setAttribute("class",p):d.classList.add(p))};i&&i.sub(k),o&&(d??t).addEventListener(o,k),window.addEventListener("resize",k),r&&k()}}function m(e){let{state:o,event:t}=e??{};return(...r)=>{let[n,l,c]=r,i=()=>{(typeof c=="function"?c(o?o.get():void 0):c??!0)?n.addEventListener(t,d=>l(d)):n.removeEventListener(t,d=>l(d))};o&&o.sub(i),i()}}function ee(e){let{state:o}=e??{};return(...t)=>{let[r,n,l]=t,c=()=>{let i=o?n(o.get()):n();(typeof l=="function"?l(o?o.get():void 0):l??!0)&&(r.innerHTML="",Array.isArray(i)?i.forEach(d=>{d instanceof HTMLElement||d instanceof SVGElement?r.appendChild(d):r.appendChild(document.createTextNode(String(d)))}):i instanceof HTMLElement||i instanceof SVGElement?r.appendChild(i):r.innerHTML=String(i))};o&&o.sub(c),c()}}function y(e){let{event:o=null,eventElement:t=window,invokeImmediately:r=!0,mediaMinWidth:n=0,mediaMaxWidth:l=1/0,state:c=void 0}=e??{};return(...i)=>{let[b,d,u,w]=i,k=()=>{if(!(window.innerWidth>=n&&window.innerWidth<=l))return;let p=String(typeof u=="function"?u(c?c.get():void 0):u);(typeof w=="function"?w(c?c.get():void 0):w??!0)&&(d.startsWith("--")?b.style.setProperty(d,p):b.style[d]=p)};c&&c.sub(k),window.addEventListener("resize",k),o&&(b??t).addEventListener(o,k),r&&!o&&k()}}function O(e){let{event:o,eventElement:t,state:r}=e??{};return(...n)=>{let[l,c,i]=n,b=()=>{let d=typeof c=="function"?c(r?r.get():void 0):c;(typeof i=="function"?i(r?r.get():void 0):i??!0)&&(l.textContent=String(d))};r&&r.sub(b),window.addEventListener("resize",b),o&&(l??t).addEventListener(o,b),b()}}function $e(e,o,t){let r=o.split("."),n=(l,c,i)=>{let[b,...d]=c;return d.length===0?Array.isArray(l)?[...l.slice(0,b),i,...l.slice(b+1)]:{...l,[b]:i}:(l[b]===void 0&&(l[b]=typeof d[0]=="number"?[]:{}),{...l,[b]:n(l[b],d,i)})};return n(e,r,t)}function S(e,o){let t=e;if(o){let h=o.storage.getItem(o.key),p=JSON.parse(h),_=p!=null;(o.overwrite??!0)&&_&&(e=p),!(o.overwrite??!0)&&_&&(Array.isArray(e)&&Array.isArray(p)?e=[...e,...p]:typeof e=="object"&&typeof p=="object"&&(e={...e,...p}))}let r=e,n=[],l=()=>r,c=()=>n.forEach(h=>h(r)),i=h=>()=>d(h(r)),b=()=>d(t),d=h=>{r=h,n.forEach(p=>p(r)),o&&o.storage.setItem(o.key,JSON.stringify(r))};return{deepSet:(h,p)=>d($e(r,h,p)),get:l,pub:c,reset:b,reduce:i,set:d,sub:h=>n.push(h),unsub:h=>n.splice(n.indexOf(h),1)}}var pe={name:"crazy",components:{accordion:{},alerts:{},badge:{},bg:{},button:{bgColorHoverToken:"--background-200",bgColorToken:"--background-100",borderColorToken:"2px solid var(--foreground-500)",borderColorHoverToken:"2px solid var(--foreground-400)",borderRadiusToken:"---border-radius-300",borderWidthToken:"--border-width-300",colorHoverToken:"--text-300",colorToken:"--text-500",fontSize:1,fontWeight:400,fontLineHeight:1.5},card:{},dashboard:{},dialog:{},dropdown:{bgColorHoverToken:"--background-700",bgColorToken:"--background-600",borderColorToken:"3px solid var(--foreground-700)",borderColorHoverToken:"3px dashed var(--foreground-600)",borderRadiusToken:"var(--scales-border-radius-700)",borderWidthToken:"var(--scales-border-width-700)",colorHoverToken:"--text-500",colorToken:"--text-800"},flexgrid:{},flexpane:{},grid:{},section:{},slider:{bgColorHoverToken:"--background-900",bgColorToken:"--background-800",borderColorToken:"5px double var(--foreground-900)",borderColorHoverToken:"5px groove var(--foreground-800)",borderRadius:"var(--scales-border-radius-900)",borderWidth:"var(--scales-border-width-900)",colorHoverToken:"--text-700",colorToken:"--text-900"},toggles:{},tooltip:{},typography:{colorToken:"--text-500",fontSizeBase:1,fontSizeSpread:2,fontWeight:400,lineHeight:1.5}},globals:{palette:{black:{"100":"#1a1a1a","200":"#333333","300":"#4d4d4d","400":"#666666","500":"#808080","600":"#999999","700":"#b3b3b3","800":"#cccccc","900":"#e6e6e6"},white:{"100":"#e6e6ff","200":"#ccccff","300":"#b3b3ff","400":"#9999ff","500":"#8080ff","600":"#6666ff","700":"#4d4dff","800":"#3333ff","900":"#1a1aff"},blue:{"100":"#ccf2ff","200":"#99e6ff","300":"#66d9ff","400":"#33ccff","500":"#00bfff","600":"#00a3cc","700":"#008699","800":"#006a66","900":"#004d33"},yellow:{"100":"#ffffcc","200":"#ffff99","300":"#ffff66","400":"#ffff33","500":"#ffff00","600":"#cccc00","700":"#999900","800":"#666600","900":"#333300"},red:{"100":"#ffcccc","200":"#ff9999","300":"#ff6666","400":"#ff3333","500":"#ff0000","600":"#cc0000","700":"#990000","800":"#660000","900":"#330000"},green:{"100":"#ccffcc","200":"#99ff99","300":"#66ff66","400":"#33ff33","500":"#00ff00","600":"#00cc00","700":"#009900","800":"#006600","900":"#003300"},orange:{"100":"#ffe5cc","200":"#ffcc99","300":"#ffb366","400":"#ff9933","500":"#ff8000","600":"#cc6600","700":"#994d00","800":"#663300","900":"#331a00"},purple:{"100":"#f2ccff","200":"#e699ff","300":"#d966ff","400":"#cc33ff","500":"#bf00ff","600":"#9900cc","700":"#730099","800":"#4d0066","900":"#260033"},pink:{"100":"#ffccf2","200":"#ff99e6","300":"#ff66d9","400":"#ff33cc","500":"#ff00bf","600":"#cc0099","700":"#990073","800":"#66004d","900":"#330026"}},semantic:{action:"red",background:"yellow",brand:"pink",error:"blue",foreground:"purple",info:"green",success:"orange",text:"black",warning:"white"}}};var re={name:"pastel",components:{accordion:{},alerts:{},badge:{},bg:{},button:{bgColorHoverToken:"--background-200",bgColorToken:"--background-100",borderColorToken:"2px solid var(--foreground-500)",borderColorHoverToken:"2px solid var(--foreground-400)",borderRadiusToken:"---border-radius-300",borderWidthToken:"--border-width-300",colorHoverToken:"--text-300",colorToken:"--text-500",fontSize:1,fontWeight:400,fontLineHeight:1.5},card:{},dashboard:{},dialog:{},dropdown:{bgColorHoverToken:"--background-300",bgColorToken:"--background-200",borderColorToken:"1px solid var(--foreground-600)",borderColorHoverToken:"1px solid var(--foreground-500)",borderRadiusToken:"var(--scales-border-radius-200)",borderWidthToken:"var(--scales-border-width-200)",colorHoverToken:"--text-300",colorToken:"--text-600"},flexgrid:{},flexpane:{},grid:{},section:{},slider:{bgColorHoverToken:"--background-200",bgColorToken:"--background-100",borderColorToken:"1px solid var(--foreground-500)",borderColorHoverToken:"1px solid var(--foreground-400)",borderRadius:"var(--scales-border-radius-300)",borderWidth:"var(--scales-border-width-300)",colorHoverToken:"--text-300",colorToken:"--text-500"},toggles:{},tooltip:{},typography:{colorToken:"--text-900",fontSizeBase:1,fontSizeSpread:2,fontWeight:400,lineHeight:1.5}},globals:{palette:{black:{"100":"#f0f0f0","200":"#d9d9d9","300":"#c2c2c2","400":"#ababab","500":"#949494","600":"#7d7d7d","700":"#666666","800":"#4f4f4f","900":"#383838"},white:{"100":"#b2b2b2","200":"#c2c2c2","300":"#d2d2d2","400":"#e2e2e2","500":"#f2f2f2","600":"#f3f3f3","700":"#f2f2f2","800":"#f1f1f1","900":"#ffffff"},blue:{"100":"#dceeff","200":"#b8ddff","300":"#95ccff","400":"#71bbff","500":"#4daaff","600":"#2a99ff","700":"#0077ff","800":"#0066cc","900":"#0055aa"},yellow:{"100":"#fff4cc","200":"#ffe999","300":"#ffdd66","400":"#ffd233","500":"#ffc700","600":"#e6b300","700":"#cc9900","800":"#b38600","900":"#996600"},red:{"100":"#ffcccc","200":"#ff9999","300":"#ff6666","400":"#ff3333","500":"#ff0000","600":"#e60000","700":"#cc0000","800":"#b30000","900":"#990000"},green:{"100":"#ccffcc","200":"#99ff99","300":"#66ff66","400":"#33ff33","500":"#00ff00","600":"#00e600","700":"#00cc00","800":"#00b300","900":"#009900"},orange:{"100":"#ffe5cc","200":"#ffcc99","300":"#ffb366","400":"#ff9933","500":"#ff8000","600":"#e67300","700":"#cc6600","800":"#b35900","900":"#994d00"},purple:{"100":"#f2ccff","200":"#e699ff","300":"#d966ff","400":"#cc33ff","500":"#bf00ff","600":"#a600e6","700":"#8c00cc","800":"#7300b3","900":"#590099"},pink:{"100":"#ffccf2","200":"#ff99e6","300":"#ff66d9","400":"#ff33cc","500":"#ff00bf","600":"#e600a6","700":"#cc008c","800":"#b30073","900":"#990059"}},semantic:{action:"blue",background:"blue",brand:"purple",error:"red",foreground:"black",info:"blue",success:"green",text:"black",warning:"yellow"}}};var s=S(re,{key:"theme",storage:sessionStorage}),f=S({crazy:pe,pastel:re},{key:"themeList",storage:sessionStorage});var Pe={bgColorHoverToken:"--background-700",bgColorToken:"--background-500",borderColorToken:"--foreground-500",borderColorHoverToken:"--foreground-500",borderRadiusToken:"--border-radius-300",borderWidthToken:"--border-width-300",colorHoverToken:"--text-500",colorToken:"--text-500",fontSize:1,fontWeight:400,fontLineHeight:1.5},B=new CSSStyleSheet,ge=()=>{let e=s.get().components.button??Pe;return B.replaceSync(`
.button { 
  --button-bg-color: var(${e.bgColorToken}, black);
  --button-bg-color-hover: var(${e.bgColorHoverToken}, rgba(0, 0, 0, 0.1));
  --button-border-color: var(${e.borderColorToken}, black);
  --button-border-radius: var(${e.borderRadiusToken}, 0);
  --button-border-width: var(${e.borderWidthToken}, 0);
  --button-color: var(${e.colorToken}, white);
  --button-color-hover: var(${e.colorHoverToken}, black);
  --button-font-size: ${e.fontSize}ch;
  --button-font-weight: ${e.fontWeight};
  --button-line-height: ${e.fontLineHeight}ch;
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
`)};var G=new CSSStyleSheet,fe=()=>G.replaceSync(`.card {
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
`);var U=new CSSStyleSheet,te=()=>{let e="var(--token-color-background, black)",o="var(--token-color-background-hue)",t="var(--token-color-background-saturation)",r="var(--token-color-background-lightness)",l=`
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
}`,i=`

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
}`;return U.replaceSync(`${l}${c}${i}`)};var j=new CSSStyleSheet,ve=()=>j.replaceSync(`:root {
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
`);var Ae={bgColorHoverToken:"--background-700",bgColorToken:"--background-500",borderColorToken:"--foreground-100",borderColorHoverToken:"--foreground-200",borderRadiusToken:"--radius-scaling",borderWidthToken:"--borders-scaling",colorHoverToken:"--text-500",colorToken:"--text-500"},F=new CSSStyleSheet,ue=()=>{let e=s.get().components.dropdown??Ae,o=`
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
`;return F.replaceSync(o)};var V=new CSSStyleSheet,me=()=>V.replaceSync(`.flexgrid {
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
`);var Y=new CSSStyleSheet,ke=()=>Y.replaceSync(`:root {

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
.flexpane--disabled {}`);var q=new CSSStyleSheet,ye=()=>q.replaceSync(`.grid {
  --desktop-columns: 12;
  --desktop-max-col-width: 6ch;
  --desktop-col-gap: 2ch;
  --mobile-col-gap: 2ch;
  --desktop-row-gap: 2ch;
  --mobile-row-gap: 1ch;
  --mobile-columns: 6;
  --mobile-max-col-width: 1fr;

  display: grid;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  box-sizing: border-box;
  grid-template-rows: max-content;
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

  display: flex;
  box-sizing: border-box;
}

@media screen and (min-width: 0px) and (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(var(--mobile-columns),1fr);
    column-gap: var(--mobile-col-gap);
    row-gap: var(--mobile-row-gap);
  }
  .grid__item {
    align-items: var(--mobile-align-items);
    justify-items: var(--mobile-justify-items);
  }
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
  .grid {
    grid-template-columns: repeat(var(--desktop-columns),1fr);
    column-gap: var(--desktop-col-gap);
    row-gap: var(--desktop-row-gap);
  }
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
`);var J=new CSSStyleSheet,xe=()=>J.replaceSync(`.section {
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

`);var Ie={bgColorHoverToken:"--background-100",bgColorToken:"--background-100",borderColorToken:"--foreground-100",borderColorHoverToken:"--foreground-200",borderRadius:"--border-radius-500",borderWidth:"--border-width-100",colorHoverToken:"--foreground-500",colorToken:"--foreground-500"},ae=new CSSStyleSheet,we=()=>{let e=s.get().components.slider??Ie;return ae.replaceSync(`
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
`)};var Z=new CSSStyleSheet,Se=()=>Z.replaceSync(`.toggle {
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
`);var $=new CSSStyleSheet,oe=()=>{let e="";for(let o in f.get()){e+=':root[data-theme="'+o+`"] {
`;for(let t in f.get()[o].globals.palette){let r=f.get()[o].globals.palette[t];for(let n in r)e+=`--${t}-${n}: ${r[n]};
`}for(let t in f.get()[o].globals.semantic){let r=f.get()[o].globals.semantic[t],n=f.get()[o].globals.palette[r];for(let l in n)e+=`--${t}-${l}: var(--${r}-${l}, ${n[l]});
`}e+=`}
`}$.replaceSync(e)};var Q=new CSSStyleSheet,Te=()=>Q.replaceSync(`.tooltip {
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
`);var Ne={colorToken:"--text-500",fontSizeBase:1.5,fontSizeSpread:.25,fontWeight:500,lineHeight:1.5},ne=new CSSStyleSheet,_e=()=>{let e=s.get().components.typography??Ne,t=`
.h1, .h2, .h3, .h4, .h5, .h6, .p, .span, .div, .li, .td, .th, .summary { 
  --text-color: var(${e.colorToken}, white);
  --text-font-size-base: ${e.fontSizeBase}ch;
  --text-font-weight: ${e.fontWeight};
  --text-line-height: ${e.lineHeight}ch;

  color: var(--text-color);
}

.h1 { font-size: 4ch; }
.h2 { font-size: 3ch; }
.h3 { font-size: 2ch; }
// .h4 { font-size: var(--text-font-size-base); }
// .h5 { font-size: calc(var(--text-font-size-base) * 0.75); }
// .h6 { font-size: calc(var(--text-font-size-base) * 0.5); }
.p { margin: 0; font-size: 1.5ch; padding: 1ch 0;}
// .span { font-size: var(--text-font-size-base); }
// .div { font-size: var(--text-font-size-base); }
// .li { font-size: var(--text-font-size-base); }
// .td { font-size: var(--text-font-size-base); }
// .th { font-size: var(--text-font-size-base); }
// .summary { font-size: var(--text-font-size-base); }
`;return ne.replaceSync(t)};function g(e){let o="",t=Array.from(e.cssRules);for(let r of t)o+=r.cssText+`
`;return o}var v=new JSZip,L=e=>{switch(e.action){case"DISABLE_TOKENS":oe();break;case"DOWNLOAD_ALL":v.file("tokens.css",g($)),v.file("accordion.css",g(N)),v.file("alerts.css",g(R)),v.file("badge.css",g(W)),v.file("bg.css",g(D)),v.file("button.css",g(B)),v.file("card.css",g(G)),v.file("dashboard.css",g(U)),v.file("dialog.css",g(j)),v.file("dropdown.css",g(F)),v.file("flexgrid.css",g(V)),v.file("flexpane.css",g(Y)),v.file("grid.css",g(q)),v.file("section.css",g(J)),v.file("toggles.css",g(Z)),v.file("tooltip.css",g(Q)),v.generateAsync({type:"blob"}).then(r=>{let n=document.createElement("a");n.href=URL.createObjectURL(r),n.download="capui.zip",n.click()});break;case"DOWNLOAD_THEME_TOKENS":let o=document.createElement("a");o.href=URL.createObjectURL(new Blob([g($)],{type:"text/css"})),o.download="tokens.css",o.click();break;case"ENABLE_TOKENS":oe();break;case"SET_THEME":let t=f.get()[e.theme];s.set(t),L({action:"RENDER_ALL_STYLESHEETS"});break;case"RENDER_ALL_STYLESHEETS":oe(),te(),de(),ce(),se(),be(),ge(),fe(),te(),ve(),ue(),me(),ke(),ye(),xe(),we(),Se(),Te(),_e();break}};var P=(e,o="0px",t="center",r="center",n="auto")=>(e.style.display="flex",e.style.gap=o,e.style.flexDirection="column",e.style.alignItems=t,e.style.justifyContent=r,e.style.width=n),A=(e,o="0px",t="center",r="center",n="auto")=>(e.style.display="flex",e.style.gap=o,e.style.flexDirection="row",e.style.alignItems=t,e.style.justifyContent=r,e.style.width=n);function Re(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(d=>d+d).join(""));let o=parseInt(e.slice(0,2),16)/255,t=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255,n=Math.max(o,t,r),l=Math.min(o,t,r),c=0,i=0,b=(n+l)/2;if(n!==l){let d=n-l;switch(i=b>.5?d/(2-n-l):d/(n+l),n){case o:c=(t-r)/d+(t<r?6:0);break;case t:c=(r-o)/d+2;break;case r:c=(o-t)/d+4;break}c/=6}return{hue:Math.round(c*360),saturation:Math.round(i*100),lightness:Math.round(b*100)}}var X=e=>{let{hue:o,saturation:t,lightness:r}=Re(e),n=r<50?100:0;return`hsl(${o}, ${t}%, ${n}%, 1)`};var T=S(s.get().globals.palette),x=S("500"),C=H({attr:E({state:T}),"attr:scalekey":E({state:x}),class:z({state:T}),style:y({state:T}),column:P,row:A,click:m({event:"click"}),change:m({event:"change"}),input:m({event:"input"}),"style:scalekey":y({state:x}),"text:scalekey":O({state:x})}),We=e=>{let o=s.get().globals.palette[e],t=`--${e}-${x.get()}`,r=()=>T.get()[e][x.get()],n=()=>X(o[x.get()]),l=i=>{let d=i.target.value,u={...T.get(),[e]:{...T.get()[e],[x.get()]:d}};T.set(u)},c=i=>{let d=i.target.value;s.deepSet(`globals.palette.${e}.${x.get()}`,d),f.set({...f.get(),[s.get().name]:s.get()}),L({action:"RENDER_ALL_STYLESHEETS"})};return C.div(["column","0px","center","center","100%"],["style","position","relative"],["style","border",`3px solid var(--${e}-500)`],["style","borderRadius","8px"])(C.label(["row","20px","center","space-between","100%"],["style:scalekey",t,r],["style",t,r],["style","padding","20px"],["style","width","100%"],["style","borderTopLeftRadius","5px"],["style","borderTopRightRadius","5px"],["style","backgroundColor",`var(--${e}-${x.get()})`],["style","fontSize","1.25ch"],["style","color",n],["style:scalekey","color",n],["attr","for",e])(C.span(["text:scalekey",()=>`--${e}-${x.get()}`])(),C.span(["text:scalekey",r])()),C.div(["row","0px","center","center","100%"])(...Object.entries(o).map(([i,b])=>C.label(["style",`--${e}-${i}`,()=>T.get()[e][i]],["style","padding","10px 5px"],["style","width","100%"],["style","borderBottomLeftRadius","5px",()=>i==="100"],["style","borderBottomRightRadius","5px",()=>i==="900"],["style","backgroundColor",`var(--${e}-${i})`],["style","display","flex"],["style","justifyContent","center"],["style","alignItems","center"],["style","fontSize","0.75ch"],["style","color",X(b)],["attr","for",e],["style","position","relative"],["click",()=>x.set(i)])(i))),C.input(["attr","type","color"],["attr","id",e],["style","visibility","hidden"],["attr","value",()=>T.get()[e][x.get()]],["attr:scalekey","value",()=>T.get()[e][x.get()]],["input",l],["change",c],["style","position","absolute"],["style","top","0"],["style","left","0"],["style","width","100%"],["style","height","100%"])())},Ee=()=>C.div(["class","grid"],["style","--mobile-columns",1],["style","--desktop-columns",3])(...Object.entries(s.get().globals.palette).map(([e,o])=>C.div(["class","grid__item"],["column","10px","flex-start"])(We(e))));var I=S(s.get().globals.semantic),De=S("background"),M=H({attr:E({state:I}),class:z({state:I}),style:y({state:I}),column:P,row:A,click:m({event:"click"}),change:m({event:"change"}),focus:m({event:"focus"}),blur:m({event:"blur"}),input:m({event:"input"}),text:O({state:I})}),Oe=e=>{let o=s.get().globals.palette[s.get().globals.semantic[e]][500],t=()=>s.get().globals.semantic[e],r=Object.keys(s.get().globals.palette),n=()=>X(o);return M.label(["row","0px","center","space-between","100%"],["style","backgroundColor",`var(--${e}-500)`],["style","borderRadius","8px"],["style","borderWidth","0px"],["style","fontSize","1.25ch"],["style","fontWeight","bold"],["style","padding","20px"],["style","color",n],["style","appearance","none"],["style","position","relative"],["click",()=>De.set(e)])(M.div(["text",()=>`${e} \u2192 ${t()}`])(),M.select(["attr","id",`select-${e}`],["style","cursor","pointer"],["style","top","0"],["style","left","0"],["style","position","absolute"],["style","width","100%"],["style","height","100%"],["style","opacity","0"],["change",l=>{let c=l.target;I.set({...I.get(),[e]:c.value}),s.deepSet(`globals.semantic.${e}`,c.value),f.set({...f.get(),[s.get().name]:s.get()}),L({action:"RENDER_ALL_STYLESHEETS"})}])(M.optgroup(["attr","label","Palette Color"])(...r.map(l=>M.option(["attr","selected",()=>l===t()])(l)))))},Ce=()=>M.div(["class","grid"],["style","--mobile-columns",1],["style","--desktop-columns",3])(...Object.entries(s.get().globals.semantic).map(([e,o])=>M.div(["class","grid__item"],["column","10px","flex-start"])(Oe(e))));var a=H({"innerHTML:theme":ee({state:s}),"style:theme":y({state:s}),"attr:theme":E({state:s}),attr:E(),change:m({event:"change"}),class:z(),click:m({event:"click"}),innerHTML:ee(),input:m({event:"input"}),style:y(),"style:mobile":y({mediaMinWidth:0}),"style:tablet":y({mediaMinWidth:768}),"style:mouseover":y({event:"mouseover"}),"style:mouseout":y({event:"mouseout"}),column:P,row:A});var Be=a.div(["row","10px","center","space-between"],["style","color","var(--text-500, black)"],["style","position","sticky"],["style","top","0"],["style","width","100%"],["style","zIndex","1000"])(a.div(["row","2ch"],["style","padding","0 2ch"])(a.div(["style","color","var(--brand-500)"],["style","height","100%"],["style","fontFamily","Splash"],["style","fontWeight","bold"],["style","fontSize","5ch"],["style","textAlign","center"])("cap"),a.div(["style","color","var(--brand-500)"],["style","height","100%"],["style","fontWeight","bold"],["style","fontSize","0.5ch"],["style","textAlign","center"])("v1.0.0")),a.div(["row","20px"],["style","padding","0 20px"])(a.select(["class","dropdown"],["change",e=>window.location.hash=e.target.value])(a.optgroup(["attr","label","Section"])(a.option()("tokens"),a.option()("buttons"),a.option()("dropdown"),a.option()("accordion"),a.option()("alerts"),a.option()("badge"),a.option()("bg"),a.option()("card"),a.option()("dashboard"),a.option()("dialog"),a.option()("flexgrid"),a.option()("flexpane"),a.option()("grid"),a.option()("section"),a.option()("toggles"),a.option()("tooltip"))))),Ge=a.div(["column","20px","flex-start","space-between"],["style","padding","20px"],["innerHTML:theme",()=>[a.div(["class","h2"])("Tokens"),a.div(["column","10px","flex-start","center","100%"])(a.div(["class","h3"])("Palette"),a.p(["class","p"])("Define the fundamental colors of your design system."),Ee()),a.div(["column","10px","flex-start","center","100%"])(a.div(["class","h3"])("Semantic"),a.p(["class","p"])("Assign the semantic use of your colors."),Ce()),a.div(["class","h3"])("Fonts"),a.div(["class","h3"])("Text"),a.div(["class","h3"])("Grids"),a.div(["class","h3"])("Boxes"),a.div(["class","h3"])("Icons"),a.div(["class","h2"])("Components"),a.div(["class","h3"])("Accordion"),a.div(["class","h3"])("Alerts"),a.div(["class","h3"])("Background"),a.div(["class","h3"])("Badge"),a.div(["class","h3"])("Button"),a.div(["class","h3"])("Card"),a.div(["class","h3"])("Dashboard"),a.div(["class","h3"])("Dialog"),a.div(["class","h3"])("Dropdown"),a.div(["class","h3"])("Flexgrid"),a.div(["class","h3"])("Flexpane"),a.div(["class","h3"])("Grid"),a.div(["class","h3"])("Section"),a.div(["class","h3"])("Sizing"),a.div(["class","h3"])("Slider"),a.div(["class","h3"])("Toggles"),a.div(["class","h3"])("Tooltip"),a.div(["class","h3"])("Typography")]])(),Ue=a.div(["row","2ch"],["style","backgroundColor","var(--background-600)"],["style","position","fixed"],["style","bottom","0"],["style","width","100%"],["style","color","var(--text-500, black)"],["style","padding","2ch"])(a.select(["class","dropdown"],["change",e=>L({action:"SET_THEME",theme:e.target.value})])(a.optgroup(["attr","label","Pick a theme"])(a.option(["attr","value","none"])("none"),...Object.entries(f.get()).map(([e])=>a.option(["attr","value",e],["attr","selected",e===s.get().name])(e)))),a.button(["class","button"])("capui.zip"));document.addEventListener("DOMContentLoaded",()=>{let e=a.$el("#root");a.$el("html")(["attr:theme","data-theme",()=>s.get().name],["style","backgroundColor","var(--background-200, white)"]),e(["innerHTML",()=>[Be,Ge,Ue]]),L({action:"RENDER_ALL_STYLESHEETS"}),document.adoptedStyleSheets=[$,N,R,W,D,B,G,U,j,F,V,Y,q,J,ae,Z,Q,ne]});})();
//# sourceMappingURL=ui.js.map
