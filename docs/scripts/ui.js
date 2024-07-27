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
`);var R=new CSSStyleSheet,se=()=>R.replaceSync(`/* 
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
`);var W=new CSSStyleSheet,ce=()=>W.replaceSync(`/* 
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
`);var D=new CSSStyleSheet,be=()=>D.replaceSync("");var he=new Map,Le=new MutationObserver(e=>{e.forEach(o=>{if(o.addedNodes.length>0&&o.type==="childList"){for(let r of o.addedNodes)if(r instanceof Element)for(let[t,[i,d]]of he.entries()){let s=r.querySelectorAll(t);for(let l of s)K(l,i,d)}}})});Le.observe(document,{attributes:!0,childList:!0,subtree:!0});function He(e,o=!0,r){return(...t)=>{o&&he.set(e,[t,r]);let i=document.querySelectorAll(e);for(let d of i)K(d,t,r)}}function ze(e,o){return(...r)=>K(e,r,o)}function Me(e,o){return(...r)=>{let t="http://www.w3.org/1999/xhtml",i=document.createElementNS(t,e);return K(i,r,o)}}function K(e,o=[],r={}){o.forEach(([i,...d])=>r[i](e,...d));function t(...i){return i.forEach(d=>e.append(d)),e}return t}function H(e){return new Proxy({},{get:(o,r)=>r==="el"?t=>ze(t,e):r==="$el"?(t,i)=>He(t,i,e):Me(r,e)})}function E(e){let{event:o=null,eventElement:r=window,hideOnFalse:t=!0,invokeImmediately:i=!0,mediaMinWidth:d=0,mediaMaxWidth:s=1/0,state:l=void 0}=e??{};return(...c)=>{let[n,h,p,f]=c,g=()=>{if(!(window.innerWidth>=d&&window.innerWidth<=s))return;let _=l&&typeof p=="function"?p(l.get()):p,ie=String(_)==="true"||String(_)==="false",le=typeof f=="function"?f(l?l.get():void 0):f??!0;if(ie&&t&&String(_)==="false"||ie&&le===!1)return n.removeAttribute(h);le!==!1&&n.setAttribute(h,String(_))};l&&l.sub(g),o&&(n??r).addEventListener(o,g),window.addEventListener("resize",g),i&&g()}}function z(e){let{event:o=null,eventElement:r=window,invokeImmediately:t=!0,mediaMinWidth:i=0,mediaMaxWidth:d=1/0,method:s="classList",state:l=null}=e??{};return(...c)=>{let[n,h,p]=c,f=()=>{if(!(window.innerWidth>=i&&window.innerWidth<=d))return;let v=typeof h=="function"?h(l?l.get():void 0):h;(typeof p=="function"?p(l?l.get():void 0):p??!0)&&(s==="className"?n.setAttribute("class",v):n.classList.add(v))};l&&l.sub(f),o&&(n??r).addEventListener(o,f),window.addEventListener("resize",f),t&&f()}}function k(e){let{state:o,event:r}=e??{};return(...t)=>{let[i,d,s]=t,l=()=>{(typeof s=="function"?s(o?o.get():void 0):s??!0)?i.addEventListener(r,n=>d(n)):i.removeEventListener(r,n=>d(n))};o&&o.sub(l),l()}}function ee(e){let{state:o}=e??{};return(...r)=>{let[t,i,d]=r,s=()=>{let l=o?i(o.get()):i();(typeof d=="function"?d(o?o.get():void 0):d??!0)&&(t.innerHTML="",Array.isArray(l)?l.forEach(n=>{n instanceof HTMLElement||n instanceof SVGElement?t.appendChild(n):t.appendChild(document.createTextNode(String(n)))}):l instanceof HTMLElement||l instanceof SVGElement?t.appendChild(l):t.innerHTML=String(l))};o&&o.sub(s),s()}}function y(e){let{event:o=null,eventElement:r=window,invokeImmediately:t=!0,mediaMinWidth:i=0,mediaMaxWidth:d=1/0,state:s=void 0}=e??{};return(...l)=>{let[c,n,h,p]=l,f=()=>{if(!(window.innerWidth>=i&&window.innerWidth<=d))return;let v=String(typeof h=="function"?h(s?s.get():void 0):h);(typeof p=="function"?p(s?s.get():void 0):p??!0)&&(n.startsWith("--")?c.style.setProperty(n,v):c.style[n]=v)};s&&s.sub(f),window.addEventListener("resize",f),o&&(c??r).addEventListener(o,f),t&&!o&&f()}}function O(e){let{event:o,eventElement:r,state:t}=e??{};return(...i)=>{let[d,s,l]=i,c=()=>{let n=typeof s=="function"?s(t?t.get():void 0):s;(typeof l=="function"?l(t?t.get():void 0):l??!0)&&(d.textContent=String(n))};t&&t.sub(c),window.addEventListener("resize",c),o&&(d??r).addEventListener(o,c),c()}}function $e(e,o,r){let t=o.split("."),i=(d,s,l)=>{let[c,...n]=s;return n.length===0?Array.isArray(d)?[...d.slice(0,c),l,...d.slice(c+1)]:{...d,[c]:l}:(d[c]===void 0&&(d[c]=typeof n[0]=="number"?[]:{}),{...d,[c]:i(d[c],n,l)})};return i(e,t,r)}function S(e,o){let r=e;if(o){let g=o.storage.getItem(o.key),v=JSON.parse(g),_=v!=null;(o.overwrite??!0)&&_&&(e=v),!(o.overwrite??!0)&&_&&(Array.isArray(e)&&Array.isArray(v)?e=[...e,...v]:typeof e=="object"&&typeof v=="object"&&(e={...e,...v}))}let t=e,i=[],d=()=>t,s=()=>i.forEach(g=>g(t)),l=g=>()=>n(g(t)),c=()=>n(r),n=g=>{t=g,i.forEach(v=>v(t)),o&&o.storage.setItem(o.key,JSON.stringify(t))};return{deepSet:(g,v)=>n($e(t,g,v)),get:d,pub:s,reset:c,reduce:l,set:n,sub:g=>i.push(g),unsub:g=>i.splice(i.indexOf(g),1)}}var ge={name:"crazy",components:{accordion:{},alerts:{},badge:{},bg:{},button:{bgColorHoverToken:"--background-200",bgColorToken:"--background-100",borderColorToken:"2px solid var(--foreground-500)",borderColorHoverToken:"2px solid var(--foreground-400)",borderRadiusToken:"---border-radius-300",borderWidthToken:"--border-width-300",colorHoverToken:"--text-300",colorToken:"--text-500",fontSize:1,fontWeight:400,fontLineHeight:1.5},card:{},dashboard:{},dialog:{},dropdown:{bgColorHoverToken:"--background-700",bgColorToken:"--background-600",borderColorToken:"3px solid var(--foreground-700)",borderColorHoverToken:"3px dashed var(--foreground-600)",borderRadiusToken:"var(--scales-border-radius-700)",borderWidthToken:"var(--scales-border-width-700)",colorHoverToken:"--text-500",colorToken:"--text-800"},flexgrid:{},flexpane:{},grid:{},section:{},slider:{bgColorHoverToken:"--background-900",bgColorToken:"--background-800",borderColorToken:"5px double var(--foreground-900)",borderColorHoverToken:"5px groove var(--foreground-800)",borderRadius:"var(--scales-border-radius-900)",borderWidth:"var(--scales-border-width-900)",colorHoverToken:"--text-700",colorToken:"--text-900"},toggles:{},tooltip:{},typography:{colorToken:"--text-500",fontSizeBase:1,fontSizeSpread:2,fontWeight:400,lineHeight:1.5}},globals:{palette:{black:{"100":"#1a1a1a","200":"#333333","300":"#4d4d4d","400":"#666666","500":"#808080","600":"#999999","700":"#b3b3b3","800":"#cccccc","900":"#e6e6e6"},white:{"100":"#e6e6ff","200":"#ccccff","300":"#b3b3ff","400":"#9999ff","500":"#8080ff","600":"#6666ff","700":"#4d4dff","800":"#3333ff","900":"#1a1aff"},blue:{"100":"#ccf2ff","200":"#99e6ff","300":"#66d9ff","400":"#33ccff","500":"#00bfff","600":"#00a3cc","700":"#008699","800":"#006a66","900":"#004d33"},yellow:{"100":"#ffffcc","200":"#ffff99","300":"#ffff66","400":"#ffff33","500":"#ffff00","600":"#cccc00","700":"#999900","800":"#666600","900":"#333300"},red:{"100":"#ffcccc","200":"#ff9999","300":"#ff6666","400":"#ff3333","500":"#ff0000","600":"#cc0000","700":"#990000","800":"#660000","900":"#330000"},green:{"100":"#ccffcc","200":"#99ff99","300":"#66ff66","400":"#33ff33","500":"#00ff00","600":"#00cc00","700":"#009900","800":"#006600","900":"#003300"},orange:{"100":"#ffe5cc","200":"#ffcc99","300":"#ffb366","400":"#ff9933","500":"#ff8000","600":"#cc6600","700":"#994d00","800":"#663300","900":"#331a00"},purple:{"100":"#f2ccff","200":"#e699ff","300":"#d966ff","400":"#cc33ff","500":"#bf00ff","600":"#9900cc","700":"#730099","800":"#4d0066","900":"#260033"},pink:{"100":"#ffccf2","200":"#ff99e6","300":"#ff66d9","400":"#ff33cc","500":"#ff00bf","600":"#cc0099","700":"#990073","800":"#66004d","900":"#330026"}},semantic:{action:"red",background:"yellow",brand:"pink",error:"blue",foreground:"purple",info:"green",success:"orange",text:"black",warning:"white"}}};var re={name:"pastel",components:{accordion:{},alerts:{},badge:{},bg:{},button:{bgColorHoverToken:"--action-600",bgColorToken:"--action-500",borderColorToken:"var(--action-500)",borderColorHoverToken:"var(--action-600)",borderRadiusToken:"4px",borderWidthToken:"1px",colorHoverToken:"--text-600",colorToken:"--text-500",fontSize:2,fontWeight:500,fontLineHeight:1.5},card:{},dashboard:{},dialog:{},dropdown:{bgColorHoverToken:"--background-600",bgColorToken:"--background-500",borderColorToken:"var(--background-500)",borderColorHoverToken:"var(--background-600)",borderRadiusToken:"4px",borderWidthToken:"1px",colorHoverToken:"--foreground-600",colorToken:"--foreground-500"},flexgrid:{},flexpane:{},grid:{},section:{},slider:{bgColorHoverToken:"--action-600",bgColorToken:"--action-500",borderColorToken:"var(--action-500)",borderColorHoverToken:"var(--action-600)",borderRadius:"4px",borderWidth:"1px",colorHoverToken:"--foreground-600",colorToken:"--foreground-500"},toggles:{},tooltip:{},typography:{colorToken:"--text-500"}},globals:{palette:{black:{"100":"#000000","200":"#141414","300":"#282828","400":"#3d3d3d","500":"#525252","600":"#666666","700":"#7a7a7a","800":"#8f8f8f","900":"#a3a3a3"},white:{"100":"#e0e0e0","200":"#e6e6e6","300":"#ebebeb","400":"#f0f0f0","500":"#f5f5f5","600":"#fafafa","700":"#fcfcfc","800":"#fefefe","900":"#ffffff"},blue:{"100":"#003366","200":"#004080","300":"#004d99","400":"#0059b3","500":"#0066cc","600":"#3385ff","700":"#66a3ff","800":"#99c2ff","900":"#cce0ff"},yellow:{"100":"#665500","200":"#806600","300":"#997700","400":"#b38800","500":"#cc9900","600":"#ffcc00","700":"#ffd633","800":"#ffeb99","900":"#fff2cc"},red:{"100":"#660000","200":"#800000","300":"#990000","400":"#b30000","500":"#cc0000","600":"#ff3333","700":"#ff6666","800":"#ff9999","900":"#ffcccc"},green:{"100":"#003300","200":"#004d00","300":"#006600","400":"#008000","500":"#009900","600":"#00cc00","700":"#33ff33","800":"#66ff66","900":"#99ff99"},orange:{"100":"#663300","200":"#804000","300":"#994d00","400":"#b35900","500":"#cc6600","600":"#ff8000","700":"#ff9933","800":"#ffb266","900":"#ffcc99"},purple:{"100":"#330033","200":"#4d004d","300":"#660066","400":"#800080","500":"#990099","600":"#cc00cc","700":"#d633d6","800":"#e066e0","900":"#f2ccff"},pink:{"100":"#660033","200":"#800040","300":"#99004d","400":"#b30059","500":"#cc0066","600":"#ff3385","700":"#ff66a3","800":"#ff99c2","900":"#ffccd5"}},semantic:{action:"blue",background:"white",brand:"purple",error:"red",foreground:"black",info:"blue",success:"green",text:"black",warning:"yellow"},fonts:{display:"Poppins, sans-serif",mono:"monospace",sans:"Arial, sans-serif",serif:"Georgia, serif"},text:{lineHeight:{"100":1.2,"200":1.4,"300":1.6,"400":1.8,"500":2,"600":2.2,"700":2.4,"800":2.6,"900":2.8},size:{"100":"1ch","200":"2ch","300":"3ch","400":"4ch","500":"5ch","600":"6ch","700":"7ch","800":"8ch","900":"9ch"},weight:{"100":100,"200":200,"300":300,"400":400,"500":500,"600":600,"700":700,"800":800,"900":900}}}};var b=S(re,{key:"theme",storage:sessionStorage}),x=S({crazy:ge,pastel:re},{key:"themeList",storage:sessionStorage});var Pe={bgColorHoverToken:"--background-700",bgColorToken:"--background-500",borderColorToken:"--foreground-500",borderColorHoverToken:"--foreground-500",borderRadiusToken:"--border-radius-300",borderWidthToken:"--border-width-300",colorHoverToken:"--text-500",colorToken:"--text-500",fontSize:1,fontWeight:400,fontLineHeight:1.5},G=new CSSStyleSheet,pe=()=>{let e=b.get().components.button??Pe;return G.replaceSync(`
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
`);var B=new CSSStyleSheet,te=()=>{let e="var(--token-color-background, black)",o="var(--token-color-background-hue)",r="var(--token-color-background-saturation)",t="var(--token-color-background-lightness)",d=`
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
}`;return B.replaceSync(`${d}${s}${l}`)};var j=new CSSStyleSheet,ve=()=>j.replaceSync(`:root {
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
`);var Ae={bgColorHoverToken:"--background-700",bgColorToken:"--background-500",borderColorToken:"--foreground-100",borderColorHoverToken:"--foreground-200",borderRadiusToken:"--radius-scaling",borderWidthToken:"--borders-scaling",colorHoverToken:"--text-500",colorToken:"--text-500"},F=new CSSStyleSheet,ue=()=>{let e=b.get().components.dropdown??Ae,o=`
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

`);var Ie={bgColorHoverToken:"--background-100",bgColorToken:"--background-100",borderColorToken:"--foreground-100",borderColorHoverToken:"--foreground-200",borderRadius:"--border-radius-500",borderWidth:"--border-width-100",colorHoverToken:"--foreground-500",colorToken:"--foreground-500"},ae=new CSSStyleSheet,we=()=>{let e=b.get().components.slider??Ie;return ae.replaceSync(`
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
`);var $=new CSSStyleSheet,oe=()=>{let e="";for(let o in x.get()){let r=x.get()[o];e+=':root[data-theme="'+o+`"] {
`;let t="";for(let n in r.globals.palette){let h=r.globals.palette[n];for(let p in h)t+=`--${n}-${p}: ${h[p]};
`}e+=t;let i="";for(let n in r.globals.semantic){let h=r.globals.semantic[n],p=r.globals.palette[h];for(let f in p)i+=`--${n}-${f}: var(--${h}-${f}, ${p[f]});
`}e+=i;let d="";for(let n in r.globals.fonts)d+=`--font-${n}: ${r.globals.fonts[n]};
`;e+=d;let s="";for(let n in r.globals.text?.size)s+=`--text-size-${n}: ${r.globals.text.size[n]};
`;e+=s,console.log(s);let l="";for(let n in r.globals.text?.weight)l+=`--text-weight-${n}: ${r.globals.text.weight[n]};
`;e+=l;let c="";for(let n in r.globals.text?.lineHeight)c+=`--text-line-height-${n}: ${r.globals.text.lineHeight[n]};
`;e+=c,e+=`}
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
`);var Ne={colorToken:"--text-500"},ne=new CSSStyleSheet,_e=()=>{let e=b.get().components.typography??Ne,o=".h1, .h2, .h3, .h4, .h5, .h6, .p, .span, .div, .li, .td, .th, .summary",r=`
.h1 { 
  font-family: var(--font-sans);
  font-size: var(--text-size-500, 4ch); 
  font-weight: var(--text-weight-500, 500); 
  line-height: var(--text-line-height-500, 1); 
  padding: 0;
  margin: 0;
}

.h2 { 
  font-family: var(--font-sans);
  font-size: var(--text-size-400, 3ch); 
  font-weight: var(--text-weight-400, 500); 
  line-height: var(--text-line-height-400, 1); 
  padding: 0;
  margin: 0;
}

.h3 { 
  font-family: var(--font-sans);
  font-size: var(--text-size-300, 2.5ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.h4 { 
  font-family: var(--font-sans);
  font-size: var(--text-size-200, 2ch); 
  font-weight: var(--text-weight-200, 500); 
  line-height: var(--text-line-height-200, 1); 
  padding: 0;
  margin: 0;
}

.h5 { 
  font-family: var(--font-sans);
  font-size: var(--text-size-100, 1.5ch); 
  font-weight: var(--text-weight-100, 500); 
  line-height: var(--text-line-height-100, 1); 
  padding: 0;
  margin: 0;
}

.h6 { 
  font-family: var(--font-sans);
  font-size: var(--text-size-100, 1ch); 
  font-weight: var(--text-weight-100, 500); 
  line-height: var(--text-line-height-100, 1); 
  padding: 0;
  margin: 0;
}

.p{ 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.span { 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.div { 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.li { 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.td { 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.th { 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}

.summary { 
  font-family: var(--font-serif);
  font-size: var(--text-size-300, 2ch); 
  font-weight: var(--text-weight-300, 500); 
  line-height: var(--text-line-height-300, 1); 
  padding: 0;
  margin: 0;
}
`;return ne.replaceSync(r)};function u(e){let o="",r=Array.from(e.cssRules);for(let t of r)o+=t.cssText+`
`;return o}var m=new JSZip,L=e=>{switch(e.action){case"DISABLE_TOKENS":oe();break;case"DOWNLOAD_ALL":m.file("tokens.css",u($)),m.file("accordion.css",u(N)),m.file("alerts.css",u(R)),m.file("badge.css",u(W)),m.file("bg.css",u(D)),m.file("button.css",u(G)),m.file("card.css",u(U)),m.file("dashboard.css",u(B)),m.file("dialog.css",u(j)),m.file("dropdown.css",u(F)),m.file("flexgrid.css",u(V)),m.file("flexpane.css",u(Y)),m.file("grid.css",u(q)),m.file("section.css",u(J)),m.file("toggles.css",u(Z)),m.file("tooltip.css",u(Q)),m.generateAsync({type:"blob"}).then(t=>{let i=document.createElement("a");i.href=URL.createObjectURL(t),i.download="capui.zip",i.click()});break;case"DOWNLOAD_THEME_TOKENS":let o=document.createElement("a");o.href=URL.createObjectURL(new Blob([u($)],{type:"text/css"})),o.download="tokens.css",o.click();break;case"ENABLE_TOKENS":oe();break;case"SET_THEME":let r=x.get()[e.theme];b.set(r),L({action:"RENDER_ALL_STYLESHEETS"});break;case"RENDER_ALL_STYLESHEETS":oe(),te(),de(),se(),ce(),be(),pe(),fe(),te(),ve(),ue(),me(),ke(),ye(),xe(),we(),Se(),Te(),_e();break}};var P=(e,o="0px",r="center",t="center",i="auto")=>(e.style.display="flex",e.style.gap=o,e.style.flexDirection="column",e.style.alignItems=r,e.style.justifyContent=t,e.style.width=i),A=(e,o="0px",r="center",t="center",i="auto")=>(e.style.display="flex",e.style.gap=o,e.style.flexDirection="row",e.style.alignItems=r,e.style.justifyContent=t,e.style.width=i);function Re(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(n=>n+n).join(""));let o=parseInt(e.slice(0,2),16)/255,r=parseInt(e.slice(2,4),16)/255,t=parseInt(e.slice(4,6),16)/255,i=Math.max(o,r,t),d=Math.min(o,r,t),s=0,l=0,c=(i+d)/2;if(i!==d){let n=i-d;switch(l=c>.5?n/(2-i-d):n/(i+d),i){case o:s=(r-t)/n+(r<t?6:0);break;case r:s=(t-o)/n+2;break;case t:s=(o-r)/n+4;break}s/=6}return{hue:Math.round(s*360),saturation:Math.round(l*100),lightness:Math.round(c*100)}}var X=e=>{let{hue:o,saturation:r,lightness:t}=Re(e),i=t<50?100:0;return`hsl(${o}, ${r}%, ${i}%, 1)`};var T=S(b.get().globals.palette),w=S("500"),C=H({attr:E({state:T}),"attr:scalekey":E({state:w}),class:z({state:T}),style:y({state:T}),column:P,row:A,click:k({event:"click"}),change:k({event:"change"}),input:k({event:"input"}),"style:scalekey":y({state:w}),"text:scalekey":O({state:w})}),We=e=>{let o=b.get().globals.palette[e],r=`--${e}-${w.get()}`,t=()=>T.get()[e][w.get()],i=()=>X(o[w.get()]),d=l=>{let n=l.target.value,h={...T.get(),[e]:{...T.get()[e],[w.get()]:n}};T.set(h)},s=l=>{let n=l.target.value;b.deepSet(`globals.palette.${e}.${w.get()}`,n),x.set({...x.get(),[b.get().name]:b.get()}),L({action:"RENDER_ALL_STYLESHEETS"})};return C.div(["column","0px","center","center","100%"],["style","position","relative"],["style","border",`3px solid var(--${e}-500)`],["style","borderRadius","8px"])(C.label(["row","20px","center","space-between","100%"],["style:scalekey",r,t],["style",r,t],["style","padding","20px"],["style","width","100%"],["style","borderTopLeftRadius","5px"],["style","borderTopRightRadius","5px"],["style","backgroundColor",`var(--${e}-${w.get()})`],["style","fontSize","1.25ch"],["style","color",i],["style:scalekey","color",i],["attr","for",e])(C.span(["text:scalekey",()=>`--${e}-${w.get()}`])(),C.span(["text:scalekey",t])()),C.div(["row","0px","center","center","100%"])(...Object.entries(o).map(([l,c])=>C.label(["style",`--${e}-${l}`,()=>T.get()[e][l]],["style","padding","10px 5px"],["style","width","100%"],["style","borderBottomLeftRadius","5px",()=>l==="100"],["style","borderBottomRightRadius","5px",()=>l==="900"],["style","backgroundColor",`var(--${e}-${l})`],["style","display","flex"],["style","justifyContent","center"],["style","alignItems","center"],["style","fontSize","0.75ch"],["style","color",X(c)],["attr","for",e],["style","position","relative"],["click",()=>w.set(l)])(l))),C.input(["attr","type","color"],["attr","id",e],["style","visibility","hidden"],["attr","value",()=>T.get()[e][w.get()]],["attr:scalekey","value",()=>T.get()[e][w.get()]],["input",d],["change",s],["style","position","absolute"],["style","top","0"],["style","left","0"],["style","width","100%"],["style","height","100%"])())},Ee=()=>C.div(["class","grid"],["style","--mobile-columns",1],["style","--desktop-columns",3])(...Object.entries(b.get().globals.palette).map(([e,o])=>C.div(["class","grid__item"],["column","10px","flex-start"])(We(e))));var I=S(b.get().globals.semantic),De=S("background"),M=H({attr:E({state:I}),class:z({state:I}),style:y({state:I}),column:P,row:A,click:k({event:"click"}),change:k({event:"change"}),focus:k({event:"focus"}),blur:k({event:"blur"}),input:k({event:"input"}),text:O({state:I})}),Oe=e=>{let o=b.get().globals.palette[b.get().globals.semantic[e]][500],r=()=>b.get().globals.semantic[e],t=Object.keys(b.get().globals.palette),i=()=>X(o);return M.label(["row","0px","center","space-between","100%"],["style","backgroundColor",`var(--${e}-500)`],["style","borderRadius","8px"],["style","borderWidth","0px"],["style","fontSize","1.25ch"],["style","fontWeight","bold"],["style","padding","20px"],["style","color",i],["style","appearance","none"],["style","position","relative"],["click",()=>De.set(e)])(M.div(["text",()=>`${e} \u2192 ${r()}`])(),M.select(["attr","id",`select-${e}`],["style","cursor","pointer"],["style","top","0"],["style","left","0"],["style","position","absolute"],["style","width","100%"],["style","height","100%"],["style","opacity","0"],["change",d=>{let s=d.target;I.set({...I.get(),[e]:s.value}),b.deepSet(`globals.semantic.${e}`,s.value),x.set({...x.get(),[b.get().name]:b.get()}),L({action:"RENDER_ALL_STYLESHEETS"})}])(M.optgroup(["attr","label","Palette Color"])(...t.map(d=>M.option(["attr","selected",()=>d===r()])(d)))))},Ce=()=>M.div(["class","grid"],["style","--mobile-columns",1],["style","--desktop-columns",3])(...Object.entries(b.get().globals.semantic).map(([e,o])=>M.div(["class","grid__item"],["column","10px","flex-start"])(Oe(e))));var a=H({"innerHTML:theme":ee({state:b}),"style:theme":y({state:b}),"attr:theme":E({state:b}),attr:E(),change:k({event:"change"}),class:z(),click:k({event:"click"}),innerHTML:ee(),input:k({event:"input"}),style:y(),"style:mobile":y({mediaMinWidth:0}),"style:tablet":y({mediaMinWidth:768}),"style:mouseover":y({event:"mouseover"}),"style:mouseout":y({event:"mouseout"}),column:P,row:A});var Ge=a.div(["row","10px","center","space-between"],["style","color","var(--text-500, black)"],["style","position","sticky"],["style","top","0"],["style","width","100%"],["style","zIndex","1000"])(a.div(["row","2ch"],["style","padding","0 2ch"])(a.div(["style","color","var(--brand-500)"],["style","height","100%"],["style","fontFamily","Splash"],["style","fontWeight","bold"],["style","fontSize","5ch"],["style","textAlign","center"])("cap"),a.div(["style","color","var(--brand-500)"],["style","height","100%"],["style","fontWeight","bold"],["style","fontSize","0.5ch"],["style","textAlign","center"])("v1.0.0")),a.div(["row","20px"],["style","padding","0 20px"])(a.select(["class","dropdown"],["change",e=>window.location.hash=e.target.value])(a.optgroup(["attr","label","Section"])(a.option()("palette"),a.option()("colors"),a.option()("fonts"),a.option()("text"),a.option()("grids"),a.option()("boxes"),a.option()("icons"),a.option()("colors"),a.option()("buttons"),a.option()("dropdown"),a.option()("accordion"),a.option()("alerts"),a.option()("badge"),a.option()("bg"),a.option()("card"),a.option()("dashboard"),a.option()("dialog"),a.option()("flexgrid"),a.option()("flexpane"),a.option()("grid"),a.option()("section"),a.option()("toggles"),a.option()("tooltip"))))),Ue=a.div(["column","60px","flex-start","space-between"],["style","padding","20px"],["innerHTML:theme",()=>[a.div(["column","10px","flex-start","center","100%"])(a.h2(["class","h2"])("Tokens"),a.h3(["class","h3"])("Palette"),a.p(["class","p"])("Define the fundamental colors of your design system."),Ee()),a.div(["column","10px","flex-start","center","100%"])(a.h3(["class","h3"])("Semantic"),a.p(["class","p"])("Assign the semantic use of your colors."),Ce()),a.h3(["class","h3"])("Fonts"),a.h3(["class","h3"])("Text"),a.h3(["class","h3"])("Grids"),a.h3(["class","h3"])("Boxes"),a.h3(["class","h3"])("Icons"),a.h2(["class","h2"])("Components"),a.h3(["class","h3"])("Accordion"),a.h3(["class","h3"])("Alerts"),a.h3(["class","h3"])("Background"),a.h3(["class","h3"])("Badge"),a.h3(["class","h3"])("Button"),a.h3(["class","h3"])("Card"),a.h3(["class","h3"])("Dashboard"),a.h3(["class","h3"])("Dialog"),a.h3(["class","h3"])("Dropdown"),a.h3(["class","h3"])("Flexgrid"),a.h3(["class","h3"])("Flexpane"),a.h3(["class","h3"])("Grid"),a.h3(["class","h3"])("Section"),a.h3(["class","h3"])("Sizing"),a.h3(["class","h3"])("Slider"),a.h3(["class","h3"])("Toggles"),a.h3(["class","h3"])("Tooltip"),a.h3(["class","h3"])("Typography")]])(),Be=a.div(["row","2ch"],["style","backgroundColor","var(--background-600)"],["style","position","fixed"],["style","bottom","0"],["style","width","100%"],["style","color","var(--text-500, black)"],["style","padding","2ch"])(a.select(["class","dropdown"],["change",e=>L({action:"SET_THEME",theme:e.target.value})])(a.optgroup(["attr","label","Pick a theme"])(a.option(["attr","value","none"])("none"),...Object.entries(x.get()).map(([e])=>a.option(["attr","value",e],["attr","selected",e===b.get().name])(e)))),a.button(["class","button"])("capui.zip"));document.addEventListener("DOMContentLoaded",()=>{let e=a.$el("#root");a.$el("html")(["attr:theme","data-theme",()=>b.get().name],["style","backgroundColor","var(--background-200, white)"]),e(["innerHTML",()=>[Ge,Ue,Be]]),L({action:"RENDER_ALL_STYLESHEETS"}),document.adoptedStyleSheets=[$,N,R,W,D,G,U,B,j,F,V,Y,q,J,ae,Z,Q,ne]});})();
//# sourceMappingURL=ui.js.map
