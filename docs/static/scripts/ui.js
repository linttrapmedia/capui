(() => {
  // node_modules/.pnpm/@linttrap+oem@0.0.13/node_modules/@linttrap/oem/src/html/HTML.ts
  var selectorMap = /* @__PURE__ */ new Map();
  var matchObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0 && mutation.type === "childList") {
        for (const node of mutation.addedNodes) {
          if (node instanceof Element) {
            for (const [selector, [props, config]] of selectorMap.entries()) {
              const els = node.querySelectorAll(selector);
              for (const el of els)
                HtmlTag(el, props, config);
            }
          }
        }
      }
    });
  });
  matchObserver.observe(document, { attributes: true, childList: true, subtree: true });
  function AdoptElBySelector(selector, watch = true, config) {
    return (...props) => {
      if (watch)
        selectorMap.set(selector, [props, config]);
      const els = document.querySelectorAll(selector);
      for (const el of els)
        HtmlTag(el, props, config);
    };
  }
  function AdoptElByInstance(el, config) {
    return (...props) => HtmlTag(el, props, config);
  }
  function CreateEl(tag, config) {
    return (...props) => {
      const ns = "http://www.w3.org/1999/xhtml";
      const el = document.createElementNS(ns, tag);
      return HtmlTag(el, props, config);
    };
  }
  function HtmlTag(el, traits = [], config = {}) {
    traits.forEach(([trait, ...args]) => config[trait](el, ...args));
    function fn(...children) {
      children.forEach((child) => el.append(child));
      return el;
    }
    return fn;
  }
  function HTML(config) {
    return new Proxy({}, {
      get: (_, prop) => {
        if (prop === "el")
          return (el) => AdoptElByInstance(el, config);
        if (prop === "$el")
          return (selector, watch) => AdoptElBySelector(selector, watch, config);
        return CreateEl(prop, config);
      }
    });
  }

  // node_modules/.pnpm/@linttrap+oem@0.0.13/node_modules/@linttrap/oem/src/html/traits/Attribute.ts
  var useAttribute = ({
    event = null,
    eventElement = window,
    hideOnFalse = true,
    invokeImmediately = true,
    mediaMinWidth = 0,
    mediaMaxWidth = Infinity,
    state = null
  } = {}) => {
    return (el, prop, val, condition) => {
      const apply = () => {
        const isInBreakpoint = window.innerWidth >= mediaMinWidth && window.innerWidth <= mediaMaxWidth;
        if (!isInBreakpoint)
          return;
        const _val = String(typeof val === "function" ? val() : val);
        const _condition = typeof condition === "function" ? condition() : condition ?? true;
        if (!_condition)
          return;
        if (hideOnFalse && _val === "false") {
          el.removeAttribute(prop);
        } else {
          el.setAttribute(prop, _val);
        }
      };
      if (state)
        state.sub(apply);
      if (event)
        (el ?? eventElement).addEventListener(event, apply);
      window.addEventListener("resize", apply);
      if (invokeImmediately)
        apply();
    };
  };

  // node_modules/.pnpm/@linttrap+oem@0.0.13/node_modules/@linttrap/oem/src/html/traits/InnerHTML.ts
  var useInnerHTML = ({ state } = {}) => (el, children, condition) => {
    const apply = () => {
      el.innerHTML = "";
      const _children = children();
      if (typeof condition === "function" ? condition() : condition ?? true) {
        el.innerHTML = "";
        if (Array.isArray(_children)) {
          _children.forEach((c) => {
            if (c instanceof HTMLElement)
              el.appendChild(c);
            else
              el.appendChild(document.createTextNode(String(c)));
          });
        } else if (_children instanceof HTMLElement) {
          el.appendChild(_children);
        } else {
          el.appendChild(document.createTextNode(String(_children)));
        }
      }
    };
    if (state)
      state.sub(apply);
    apply();
  };

  // node_modules/.pnpm/@linttrap+oem@0.0.13/node_modules/@linttrap/oem/src/html/traits/Style.ts
  var useStyle = ({
    event = null,
    eventElement = window,
    invokeImmediately = true,
    mediaType = "screen",
    mediaMinWidth = 0,
    mediaMaxWidth = Infinity,
    state = null
  } = {}) => {
    const fingerPrint = (Math.random() * 1e8).toFixed(0);
    const printId = "print-style-" + fingerPrint;
    let style = document.getElementById(printId);
    if (!style) {
      style = document.createElement("style");
      style.id = printId;
      style.setAttribute("type", "text/css");
      style.setAttribute("media", "print");
      if (mediaType === "print")
        document.getElementsByTagName("head")[0].appendChild(style);
    }
    const sheet = style.sheet;
    return (el, prop, val, condition) => {
      if (mediaType === "print")
        el.dataset.printId = el.dataset.printId ?? (Math.random() * 1e8).toFixed(0);
      const apply = () => {
        if (mediaType === "print") {
          const selector = prop + "-" + el.dataset.printId;
          const _val = String(typeof val === "function" ? val() : val);
          const propFmt = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
          sheet.insertRule(`.${selector} { ${propFmt}:${_val} !important; }`, 0);
          el.classList.add(selector);
        } else {
          const isInBreakpoint = window.innerWidth >= mediaMinWidth && window.innerWidth <= mediaMaxWidth;
          if (!isInBreakpoint)
            return;
          const _val = String(typeof val === "function" ? val() : val);
          (typeof condition === "function" ? condition() : condition ?? true) ? el.style[prop] = _val : null;
        }
      };
      if (state)
        state.sub(apply);
      window.addEventListener("resize", apply);
      if (event)
        (el ?? eventElement).addEventListener(event, apply);
      if (invokeImmediately && !event)
        apply();
    };
  };

  // node_modules/.pnpm/@linttrap+oem@0.0.13/node_modules/@linttrap/oem/src/state/State.ts
  function State(param) {
    const originalParam = param;
    let _param = param;
    const _subscribers = [];
    const _get = () => _param;
    const _reduce = (cb) => () => _set(cb(_param));
    const _reset = () => _set(originalParam);
    const _set = (param2) => (_param = param2, _subscribers.forEach((i) => i(_param)));
    const _sub = (cb) => _subscribers.push(cb);
    const _unsub = (cb) => _subscribers.splice(_subscribers.indexOf(cb), 1);
    return { get: _get, reset: _reset, reduce: _reduce, set: _set, sub: _sub, unsub: _unsub };
  }

  // src/components/ui.ts
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const dialog = card.querySelector("dialog");
      const close = document.querySelector("dialog .dialog__header__close");
      card.addEventListener("click", () => {
        dialog.showModal();
      });
      close.addEventListener("click", (e) => {
        e.stopPropagation();
        dialog.close();
      });
    });
  });
  var html = HTML({
    attr: useAttribute(),
    style: useStyle(),
    "style:mouseover": useStyle({
      event: "mouseover"
    }),
    "style:mouseout": useStyle({
      event: "mouseout"
    }),
    innerHTML: useInnerHTML()
  });
  var colors = State({
    primary: "#848383",
    secondary: "#444444",
    accent: "#e2e2e2"
  });
  var Header = () => {
    return html.div(["style", "alignItems", "center"], ["style", "display", "flex"], ["style", "flexDirection", "column"], ["style", "gap", "20px"], ["style", "padding", "20px"])(html.a(["attr", "href", "https://github.com/linttrapmedia/capui"], ["attr", "target", "_blank"], ["style", "padding", "10px"], ["style", "display", "flex"], ["style", "position", "absolute"], ["style", "top", "0"], ["style", "right", "0"])(html.img(["attr", "src", "static/images/github.svg"], ["attr", "width", "30px"], ["style", "opacity", "0.5"])()), html.div(["style", "position", "relative"], ["style", "height", "75px"], ["style", "width", "148px"], ["style", "alignSelf", "center"])(html.span(["style", "fontFamily", "Splash"], ["style", "fontSize", "75px"], ["style", "color", colors.get().accent])("cap"), html.span(["style", "color", colors.get().primary], ["style", "fontSize", "20px"], ["style", "lineHeight", "0.85"], ["style", "position", "absolute"], ["style", "top", "27px"], ["style", "padding", "7px"], ["style", "right", "0px"], ["style", "backgroundColor", colors.get().accent], ["style", "borderRadius", "6px"])("ui"), html.span(["style", "position", "absolute"], ["style", "bottom", "0"], ["style", "right", "5px"], ["style", "fontSize", "10px"], ["style", "color", colors.get().secondary])("0.0.1")), html.div(["style", "color", colors.get().secondary], ["style", "fontSize", "32px"], ["style", "textAlign", "center"])("Copy & Paste UI Web Components. Ctrl+Done."), html.div(["style", "color", colors.get().secondary], ["style", "fontSize", "21px"], ["style", "textAlign", "center"])("Copy & Paste UI Web Components. Ctrl+Done."), html.div(["style", "backgroundColor", colors.get().secondary], ["style", "display", "flex"], ["style", "width", "100%"], ["style", "maxWidth", "960px"], ["style", "padding", "20px"], ["style", "borderRadius", "5px"], ["style", "alignItems", "center"], ["style", "justifyContent", "space-between"], ["style", "gap", "10px"])(html.div(["style", "display", "flex"], ["style", "alignItems", "center"], ["style", "gap", "10px"], ["style", "width", "100%"], ["style", "maxWidth", "500px"], ["style", "color", colors.get().accent])(html.div()("$"), html.input(["attr", "placeholder", "Search"], ["style", "border", "none"], ["style", "backgroundColor", "transparent"], ["style", "fontSize", "20px"], ["style", "color", colors.get().accent], ["style", "width", "100%"])()), html.button(["style", "backgroundColor", "transparent"], ["style", "border", `1px solid ${colors.get().primary}`], ["style", "padding", "15px"], ["style", "whiteSpace", "nowrap"], ["style", "borderRadius", "5px"], ["style", "color", colors.get().primary], ["style", "fontSize", "15px"], ["style", "cursor", "pointer"], ["style:mouseover", "color", colors.get().secondary], ["style:mouseout", "color", colors.get().primary], ["style:mouseover", "backgroundColor", colors.get().accent], ["style:mouseout", "backgroundColor", colors.get().secondary], ["style", "transition", "all 0.3s"], ["style", "fontFamily", "Space Grotesk"], ["style", "display", "flex"], ["style", "gap", "15px"])(html.span()("Download All"), html.span()("(\u2193)"))));
  };
  var Body = () => {
    return html.div()("Body");
  };
  var Footer = () => {
    return html.div(["style", "maxWidth", "960px"], ["style", "padding", "20px"], ["style", "display", "flex"], ["style", "flexDirection", "column"], ["style", "gap", "20px"], ["style", "margin", "auto"])(html.div(["style", "color", colors.get().secondary], ["style", "fontSize", "20px"], ["style", "textAlign", "center"])(html.div(["style", "fontSize", "20px"], ["style", "color", colors.get().accent])("cap ui")), html.div(["style", "color", colors.get().secondary], ["style", "fontSize", "14px"], ["style", "textAlign", "center"])("\xA92024 All rights reserved. Made in the USA \u{1F1FA}\u{1F1F8} by Kevin Lint as a product of ", html.a(["attr", "href", "https://linttrap.media"], ["style", "color", colors.get().secondary])("Lint Trap Media")));
  };
  document.addEventListener("DOMContentLoaded", () => {
    const root = html.$el("#root");
    root(["innerHTML", () => [Header(), Body(), Footer()]], ["style", "backgroundColor", colors.get().primary]);
  });
})();
//# sourceMappingURL=ui.js.map
