import { settings } from "../../state";
import { html } from "../../template";
import { genOklchColorTokens } from "../../util/generators";
const { tokens } = settings.get();

export const Source = html.pre(
  ["class", "language-css"],
  ["style", "borderRadius", "5px"],
  [
    "settings:innerHTML",
    () =>
      html.code(
        ["class", "language-css"],
        ["style", "fontSize", "11px"]
      )(
        html.div(
          ["style", "display", "flex"],
          ["style", "flexDirection", "column"],
          ["style", "gap", "10px"]
        )(
          [
            genOklchColorTokens("white-alpha", 1, 0.4, 0.4, "alpha"),
            genOklchColorTokens("black-alpha", 0, -0.4, -0.4, "alpha"),
            genOklchColorTokens("grey", tokens.grayLightness, tokens.greenAaxis, tokens.greenBaxis, "lightness"),
            genOklchColorTokens("red", tokens.redLightness, tokens.redAaxis, tokens.redBaxis, "lightness"),
            genOklchColorTokens("orange", tokens.orangeLightness, tokens.orangeAaxis, tokens.orangeBaxis, "lightness"),
            genOklchColorTokens("yellow", tokens.yellowLightness, tokens.yellowAaxis, tokens.yellowBaxis, "lightness"),
            genOklchColorTokens("green", tokens.greenLightness, tokens.greenAaxis, tokens.greenBaxis, "lightness"),
            genOklchColorTokens("cyan", tokens.cyanLightness, tokens.cyanAaxis, tokens.cyanBaxis, "lightness"),
            genOklchColorTokens("blue", tokens.blueLightness, tokens.blueAaxis, tokens.blueBaxis, "lightness"),
            genOklchColorTokens("purple", tokens.purpleLightness, tokens.purpleAaxis, tokens.purpleBaxis, "lightness"),
            genOklchColorTokens("pink", tokens.pinkLightness, tokens.pinkAaxis, tokens.pinkBaxis, "lightness"),
          ].join("\n")
        )
      ),
  ]
)();
