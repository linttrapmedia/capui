import { State } from "@linttrap/oem";
import { crazyTheme } from "./crazy_theme";
import { pastelTheme } from "./pastel_theme";
import { Theme } from "./typings";

export const theme = State<Theme>(pastelTheme, {
  key: "theme",
  storage: sessionStorage,
});

export const themeList = State<Record<string, Theme>>(
  { crazy: crazyTheme, pastel: pastelTheme },
  {
    key: "themeList",
    storage: sessionStorage,
  }
);
