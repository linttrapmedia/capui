import { tokenDialog } from "../../state";
import { html } from "../../template";
import { PreviewDialog } from "../Dialog";
import { Editor } from "./Editor";
import { Source } from "./Source";

const handlePreviewClick = () => tokenDialog.set({ ...tokenDialog.get(), view: "preview" });
const handleSourceClick = () => {
  tokenDialog.set({ ...tokenDialog.get(), view: "source" });
  globalThis.Prism.highlightAll();
};
const content = html.div()(
  html.div(["style", "display", "flex"], ["style", "gap", "10px"])(
    html.button(["click", handlePreviewClick])("Preview"),
    html.button(["click", handleSourceClick])("Source")
  ),
  html.div(["tokenDialog:innerHTML", () => (tokenDialog.get().view === "source" ? Source : Editor)])()
);

export const Tokens = () => {
  const dialog = PreviewDialog({
    title: "Tokens",
    content: content,
    state: tokenDialog,
  });

  return html.div(["class", "card card--medium card--light card--ghost"], ["style", "gridColumn", "span 6"])(
    dialog,
    html.div(
      ["class", "card__title"],
      ["style", "cursor", "pointer"],
      ["click", () => tokenDialog.set({ showing: true, view: "source" })]
    )("Tokens"),
    html.div(
      ["class", "card__actions"],
      ["style", "cursor", "pointer"],
      ["click", () => tokenDialog.set({ showing: true, view: "source" })]
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
      ["style", "display", "flex"],
      ["style", "gap", "20px"],
      ["style", "flexWrap", "wrap"],
      ["style", "alignItems", "center"],
      ["style", "justifyContent", "center"]
    )("coming soon...")
  );
};
