import { html } from "../template";
import {} from "../x.config";

type CardProps = {
  backgroundColor?: string;
  onClick: () => void;
  title: string;
  content: HTMLElement;
};

export const Card = (props: CardProps) => {
  return html.div(
    ["class", "card"],
    ["class", "card--small"],
    ["class", "card--light"],
    ["class", "card--ghost"],
    ["style", "--card-bg-color", props.backgroundColor ?? "initial", Boolean(props.backgroundColor)]
  )(
    html.div(["class", "card__title"])(props.title),
    html.div(
      ["class", "card__actions"],
      ["style", "cursor", "pointer"],
      ["click", props.onClick]
    )(
      html.div(
        ["style", "width", "8px"],
        ["style", "height", "8px"],
        ["style", "borderRight", "1px solid rgba(255,255,255,1)"],
        ["style", "borderBottom", "1px solid rgba(255,255,255,1)"],
        ["style", "display", "flex"],
        ["style", "transform", "rotate(-45deg)"]
      )("")
    ),
    html.div(
      ["class", "card__body"],
      ["innerHTML:static", () => props.content],
      ["style", "display", "flex"],
      ["style", "gap", "20px"],
      ["style", "flexWrap", "wrap"],
      ["style", "alignItems", "center"],
      ["style", "justifyContent", "center"]
    )()
  );
};
