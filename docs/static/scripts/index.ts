import { HTML, State, useAttribute, useClassName, useEvent, useInnerHTML, useStyle } from "@linttrap/oem";

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const dialog = card.querySelector("dialog") as HTMLDialogElement;
    const close = document.querySelector("dialog .dialog__header__close") as HTMLElement;
    card.addEventListener("click", () => {
      dialog.showModal();
    });
    close.addEventListener("click", (e) => {
      e.stopPropagation();
      dialog.close();
    });
  });
});

const dialog = State<{
  showing: boolean;
  title?: string;
  description?: string;
  content?: HTMLElement | Node | string;
}>({
  showing: false,
  title: "",
  description: "",
  content: "",
});

const html = HTML({
  attr: useAttribute(),
  click: useEvent("click"),
  class: useClassName(),
  dialogShowing: useAttribute({ state: dialog }),
  style: useStyle(),
  "style:mouseover": useStyle({
    event: "mouseover",
  }),
  "style:mouseout": useStyle({
    event: "mouseout",
  }),
  innerHTML: useInnerHTML(),
  "innerHTML:dialog": useInnerHTML({ state: dialog }),
});

const colors = State<{
  primary: string;
  secondary: string;
  accent: string;
}>({
  primary: "#848383",
  secondary: "#444444",
  accent: "#e2e2e2",
});

const Buttons = () => {
  return html.div(
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "20px"],
    ["style", "padding", "20px"]
  )(
    html.button(["class", "button button--primary"])("Primary Button"),
    html.button(["class", "button button--secondary"])("Secondary Button"),
    html.button(["class", "button button--accent"])("Accent Button"),
    html.button(["class", "button button--danger"])("Danger Button"),
    html.button(["class", "button button--warning"])("Warning Button"),
    html.button(["class", "button button--success"])("Success Button"),
    html.button(["class", "button button--info"])("Info Button")
  );
};

const lib = [
  { title: "Alerts", description: "Alerts and notifications", image: "static/images/button.svg", content: Buttons() },
  { title: "Buttons", description: "A simple button component", image: "static/images/button.svg", content: Buttons() },
];

dialog.set({ showing: true, ...lib[1] });

const Header = () => {
  return html.div(
    ["style", "alignItems", "center"],
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "30px"],
    ["style", "padding", "20px"]
  )(
    // github link
    html.a(
      ["attr", "href", "https://github.com/linttrapmedia/capui"],
      ["attr", "target", "_blank"],
      ["style", "padding", "10px"],
      ["style", "display", "flex"],
      ["style", "position", "absolute"],
      ["style", "top", "0"],
      ["style", "right", "0"]
    )(html.img(["attr", "src", "static/images/github.svg"], ["attr", "width", "30px"], ["style", "opacity", "0.5"])()),
    // logo
    html.div(
      ["style", "position", "relative"],
      ["style", "height", "75px"],
      ["style", "width", "148px"],
      ["style", "alignSelf", "center"],
      ["style", "margin", "0 0 30px"]
    )(
      html.span(
        ["style", "fontFamily", "Splash"],
        ["style", "fontSize", "75px"],
        ["style", "color", colors.get().accent]
      )("cap"),
      html.span(
        ["style", "color", colors.get().primary],
        ["style", "fontSize", "20px"],
        ["style", "lineHeight", "0.85"],
        ["style", "position", "absolute"],
        ["style", "top", "27px"],
        ["style", "padding", "7px"],
        ["style", "right", "0px"],
        ["style", "backgroundColor", colors.get().accent],
        ["style", "borderRadius", "6px"]
      )("ui"),
      html.span(
        ["style", "position", "absolute"],
        ["style", "bottom", "0"],
        ["style", "right", "5px"],
        ["style", "fontSize", "10px"],
        ["style", "color", colors.get().secondary]
      )("0.0.1")
    ),
    // tagline
    html.div(
      ["style", "color", colors.get().secondary],
      ["style", "fontSize", "32px"],
      ["style", "textAlign", "center"]
    )("Copy & Paste UI Web Components. Ctrl+Done."),
    // Description
    html.div(
      ["style", "color", colors.get().secondary],
      ["style", "fontSize", "14px"],
      ["style", "textAlign", "center"],
      ["style", "maxWidth", "960px"],
      ["style", "margin", "auto"],
      ["style", "padding", "0 40px"],
      ["style", "opacity", "0.6"]
    )(
      "CAP UI is a part of the Lint Trap Media ecosystem. A powerful system for managing user interfaces with far less code and complexity than React, Angular, Vue, Htmx, or any other framework. ",
      html.a(
        ["attr", "href", "https://github.com/linttrapmedia"],
        ["style", "color", colors.get().secondary],
        ["attr", "target", "_blank"]
      )("Learn More")
    ),
    // search
    html.div(
      ["style", "backgroundColor", colors.get().secondary],
      ["style", "display", "flex"],
      ["style", "width", "100%"],
      ["style", "maxWidth", "960px"],
      ["style", "padding", "20px"],
      ["style", "borderRadius", "5px"],
      ["style", "alignItems", "center"],
      ["style", "justifyContent", "space-between"],
      ["style", "gap", "10px"]
    )(
      html.div(
        ["style", "display", "flex"],
        ["style", "alignItems", "center"],
        ["style", "gap", "10px"],
        ["style", "width", "100%"],
        ["style", "maxWidth", "500px"],
        ["style", "color", colors.get().accent]
      )(
        html.div()("$"),
        html.input(
          ["attr", "placeholder", "Search"],
          ["style", "border", "none"],
          ["style", "backgroundColor", "transparent"],
          ["style", "fontSize", "20px"],
          ["style", "color", colors.get().accent],
          ["style", "width", "100%"]
        )()
      ),
      html.button(
        ["style", "backgroundColor", "transparent"],
        ["style", "border", `1px solid ${colors.get().primary}`],
        ["style", "padding", "15px"],
        ["style", "whiteSpace", "nowrap"],
        ["style", "borderRadius", "5px"],
        ["style", "color", colors.get().primary],
        ["style", "fontSize", "15px"],
        ["style", "cursor", "pointer"],
        ["style:mouseover", "color", colors.get().secondary],
        ["style:mouseout", "color", colors.get().primary],
        ["style:mouseover", "backgroundColor", colors.get().accent],
        ["style:mouseout", "backgroundColor", colors.get().secondary],
        ["style", "transition", "all 0.3s"],
        ["style", "fontFamily", "Space Grotesk"],
        ["style", "display", "flex"],
        ["style", "gap", "15px"]
      )(html.span()("Download All"), html.span()("(↓)"))
    )
  );
};

type CardProps = {
  title: string;
  description: string;
  image: string;
  content: HTMLElement | Node | string;
};

const Dialog = () => {
  return html.dialog(
    // ["dialogShowing", "open", true],
    ["dialogShowing", "open", () => dialog.get().showing],
    ["style", "width", "90vw"],
    ["style", "height", "90vh"],
    ["style", "top", "5vh"],
    ["style", "zIndex", "1000"],
    ["style", "borderRadius", "5px"],
    ["style", "border", "none"],
    [
      "innerHTML:dialog",
      () => {
        return [
          html.div(["style", "fontSize", "21px"])(dialog.get().title),
          html.div(["style", "fontSize", "14px"], ["style", "color", colors.get().primary])(dialog.get().description),
          html.button(
            ["style", "position", "absolute"],
            ["style", "top", "10px"],
            ["style", "right", "10px"],
            ["click", () => dialog.set({ showing: false })],
            ["style", "border", `1px solid ${colors.get().primary}`],
            ["style", "backgroundColor", "transparent"],
            ["style", "color", colors.get().primary],
            ["style", "fontSize", "14px"],
            ["style", "cursor", "pointer"],
            ["style", "borderRadius", "5px"],
            ["style", "padding", "5px 15px"]
          )("close"),
          html.div(["style", "padding", "20px"])(dialog.get().content),
        ];
      },
    ]
  )();
};

const Card = ({ title, description, content, image }: CardProps) => {
  return html.div(
    ["click", () => dialog.set({ title, description, content, showing: true })],
    ["style", "backgroundColor", "rgba(0,0,0,0.1)"],
    ["style", "borderRadius", "5px"],
    ["style", "padding", "20px"],
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "10px"],
    ["style", "position", "relative"],
    ["style", "cursor", "pointer"],
    ["style:mouseover", "boxShadow", "rgba(0, 0, 0, 0.4) 10px 10px 2px"],
    ["style:mouseout", "boxShadow", "none"],
    ["style", "transition", "all 0.3s"],
    ["style", "borderRadius", "5px"]
  )(
    // html.img(["attr", "src", image], ["style", "width", "100%"], ["style", "borderRadius", "5px"])(),
    html.div(
      ["style", "color", colors.get().accent],
      ["style", "fontSize", "20px"],
      ["style", "textAlign", "center"]
    )(title),
    html.div(
      ["style", "color", colors.get().secondary],
      ["style", "fontSize", "14px"],
      ["style", "textAlign", "center"]
    )(description)
  );
};

const Body = () => {
  return html.div(["style", "padding", "20px"])(
    html.div(
      ["style", "display", "grid"],
      ["style", "justifyContent", "center"],
      ["style", "gridTemplateColumns", "repeat(auto-fill, minmax(300px, 1fr))"],
      ["style", "gap", "20px"],
      ["style", "maxWidth", "960px"],
      ["style", "margin", "auto"],
      ["style", "width", "100%"]
    )(...lib.map(Card))
  );
};

const Footer = () => {
  return html.div(
    ["style", "maxWidth", "960px"],
    ["style", "padding", "20px"],
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "20px"],
    ["style", "margin", "auto"]
  )(
    html.div(
      ["style", "color", colors.get().secondary],
      ["style", "fontSize", "20px"],
      ["style", "textAlign", "center"]
    )(html.div(["style", "fontSize", "20px"], ["style", "color", colors.get().accent])("cap ui")),
    html.div(
      ["style", "color", colors.get().secondary],
      ["style", "fontSize", "14px"],
      ["style", "textAlign", "center"]
    )(
      "©2024 All rights reserved. Made in the USA 🇺🇸 by Kevin Lint as a product of ",
      html.a(
        ["attr", "href", "https://github.com/linttrapmedia"],
        ["style", "color", colors.get().secondary]
      )("Lint Trap Media")
    )
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = html.$el("#root");
  root(["innerHTML", () => [Dialog(), Header(), Body(), Footer()]], ["style", "backgroundColor", colors.get().primary]);
});
