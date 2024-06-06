import { State } from "@linttrap/oem";
import { Settings, TokenDialogProps } from "./x.typings";

export const dialog = State<{
  showing: boolean;
  title?: string;
  description?: string;
  exampleSrc?: string;
  example?: string | undefined;
}>({
  showing: false,
  title: "",
  description: "",
  exampleSrc: "",
  example: undefined,
});

type Pages = "HOME" | "TOKENS" | "ACCORDION";

export const pageState = State<Pages>("HOME", {
  key: "page",
  storage: sessionStorage,
});

export const tokens = State<Settings>({
  tokens: {
    blackLightness: 1,
    blackAaxis: 0,
    blackBaxis: 0,
    whiteLightness: 0.9,
    whiteAaxis: 0,
    whiteBaxis: 0,
    grayLightness: 0.5,
    grayAaxis: 0,
    grayBaxis: 0,
    redLightness: 0.5,
    redAaxis: 0,
    redBaxis: 0,
    orangeLightness: 0.5,
    orangeAaxis: 0,
    orangeBaxis: 0,
    yellowLightness: 0.5,
    yellowAaxis: 0,
    yellowBaxis: 0,
    greenLightness: 0.5,
    greenAaxis: 0,
    greenBaxis: 0,
    cyanLightness: 0.5,
    cyanAaxis: 0,
    cyanBaxis: 0,
    blueLightness: 0.5,
    blueAaxis: 0,
    blueBaxis: 0,
    purpleLightness: 0.5,
    purpleAaxis: 0,
    purpleBaxis: 0,
    pinkLightness: 0.5,
    pinkAaxis: 0,
    pinkBaxis: 0,
  },
});

export const tokenDialog = State<TokenDialogProps>({
  view: "preview",
  showing: true,
});
