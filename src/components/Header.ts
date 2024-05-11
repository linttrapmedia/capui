import { baseUrl } from "../config";
import { html } from "../template";

export const Header = () => {
  return html.div(
    ["style", "alignItems", "center"],
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "30px"]
  )(
    // github link
    html.a(
      ["attr", "href", "https://github.com/linttrapmedia/capui"],
      ["attr", "target", "_blank"],
      ["style", "padding", "10px"],
      ["style", "display", "flex"],
      ["style", "position", "absolute"],
      ["style", "top", "10px"],
      ["style", "right", "10px"]
    )(
      html.img(
        ["attr", "src", `${baseUrl}/images/github.svg`],
        ["attr", "width", "30px"],
        ["style", "opacity", "0.5"]
      )()
    ),
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
        ["style", "color", "rgba(255,255,255,1)"]
      )("cap"),
      html.span(
        ["style", "color", "rgba(0,0,0,0.6)"],
        ["style", "fontSize", "20px"],
        ["style", "lineHeight", "0.85"],
        ["style", "position", "absolute"],
        ["style", "top", "27px"],
        ["style", "padding", "7px"],
        ["style", "right", "0px"],
        ["style", "backgroundColor", "rgba(255,255,255,1)"],
        ["style", "borderRadius", "6px"]
      )("ui"),
      html.span(
        ["style", "position", "absolute"],
        ["style", "bottom", "0"],
        ["style", "right", "5px"],
        ["style", "fontSize", "10px"],
        ["style", "color", "rgba(255,255,255,0.15)"]
      )("0.0.1")
    ),
    // tagline
    html.div(
      ["style", "color", "rgba(255,255,255,0.35)"],
      ["style", "fontSize", "32px"],
      ["style", "textAlign", "center"]
    )("The Cut & Paste UI, Ctrl+Done."),
    // Description
    html.div(
      ["style", "color", "rgba(255,255,255,0.35)"],
      ["style", "fontSize", "14px"],
      ["style", "textAlign", "center"],
      ["style", "maxWidth", "960px"],
      ["style", "padding", "0 40px"],
      ["style", "opacity", "0.6"]
    )(
      "CAP UI is a part of the Lint Trap Media ecosystem. A powerful system for managing user interfaces with far less code and complexity than React, Angular, Vue, Htmx, or any other framework. ",
      html.a(
        ["attr", "href", "https://github.com/linttrapmedia"],
        ["style", "color", "rgba(255,255,255,0.15)"],
        ["attr", "target", "_blank"]
      )("Learn More")
    ),
    // search
    html.div(
      ["style", "backgroundColor", "rgba(255,255,255,0.05)"],
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
        ["style", "color", "rgba(255,255,255,1)"]
      )(
        html.div()("$"),
        html.input(
          ["attr", "placeholder", "Search"],
          ["style", "border", "none"],
          ["style", "backgroundColor", "transparent"],
          ["style", "fontSize", "20px"],
          ["style", "color", "rgba(255,255,255,1)"],
          ["style", "width", "100%"]
        )()
      ),
      html.button(
        ["style", "backgroundColor", "transparent"],
        ["style", "border", `2px solid rgba(255,255,255,0.2)`],
        ["style", "padding", "15px"],
        ["style", "whiteSpace", "nowrap"],
        ["style", "borderRadius", "5px"],
        ["style", "color", "rgba(255,255,255,0.2)"],
        ["style", "fontSize", "15px"],
        ["style", "cursor", "pointer"],
        ["style:mouseover", "color", "rgba(255,255,255,1)"],
        ["style:mouseout", "color", "rgba(255,255,255,0.2)"],
        ["style:mouseover", "borderColor", "rgba(255,255,255,1)"],
        ["style:mouseout", "borderColor", "rgba(255,255,255,0.2)"],
        ["style", "transition", "all 0.3s"],
        ["style", "fontFamily", "Space Grotesk"],
        ["style", "display", "flex"],
        ["style", "gap", "15px"]
      )(html.span()("Download All"), html.span()("(↓)"))
    )
  );
};
