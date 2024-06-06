export type Component = {
  title: string;
  exampleSrc: string;
  example: string | undefined;
  preview: string;
};

export type DialogProps<V> = {
  view: V;
  showing: boolean;
};

export type TokenDialogProps = DialogProps<"preview" | "source">;

export type Tokens = {
  whiteLightness: number;
  whiteAaxis: number;
  whiteBaxis: number;
  blackLightness: number;
  blackAaxis: number;
  blackBaxis: number;
  grayLightness: number;
  grayAaxis: number;
  grayBaxis: number;
  redLightness: number;
  redAaxis: number;
  redBaxis: number;
  orangeLightness: number;
  orangeAaxis: number;
  orangeBaxis: number;
  yellowLightness: number;
  yellowAaxis: number;
  yellowBaxis: number;
  greenLightness: number;
  greenAaxis: number;
  greenBaxis: number;
  cyanLightness: number;
  cyanAaxis: number;
  cyanBaxis: number;
  blueLightness: number;
  blueAaxis: number;
  blueBaxis: number;
  purpleLightness: number;
  purpleAaxis: number;
  purpleBaxis: number;
  pinkLightness: number;
  pinkAaxis: number;
  pinkBaxis: number;
};

export type Settings = {
  tokens: Tokens;
};
