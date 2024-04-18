import { HTML, State, useAttribute, useInnerHTML, useStyle } from "@linttrap/oem";

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

const html = HTML({
  attr: useAttribute(),
  style: useStyle(),
  innerHTML: useInnerHTML(),
});

const colors = State<{
  primary: string;
  secondary: string;
  accent: string;
}>({
  primary: "#dcdcdc",
  secondary: "rgb(83 83 83)",
  accent: "#818181",
});

const Header = () => {
  return html.div(
    ["style", "alignItems", "center"],
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "20px"]
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
      ["style", "alignSelf", "center"]
    )(
      html.span(
        ["style", "fontFamily", "Splash"],
        ["style", "fontSize", "75px"],
        ["style", "color", colors.get().secondary]
      )("cap"),
      html.span(
        ["style", "color", colors.get().primary],
        ["style", "fontSize", "20px"],
        ["style", "lineHeight", "0.85"],
        ["style", "position", "absolute"],
        ["style", "top", "27px"],
        ["style", "padding", "7px"],
        ["style", "right", "0px"],
        ["style", "backgroundColor", colors.get().secondary],
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
      ["style", "padding", "30px"],
      ["style", "fontSize", "32px"],
      ["style", "textAlign", "center"]
    )("Copy & Paste UI Web Components. Ctrl+Done.")
  );
};

const Body = () => {
  return html.div()("Body");
};

const Footer = () => {
  return html.div()("Footer");
};

document.addEventListener("DOMContentLoaded", () => {
  const root = html.$el("#root");
  root(["innerHTML", () => [Header(), Body(), Footer()]]);
});
