export type DropdownSettings = {
  bgColorHoverToken: `--${string}`;
  bgColorToken: `--${string}`;
  borderColorToken: `--${string}`;
  borderRadius: number;
  borderWidth: number;
  colorHoverToken: `--${string}`;
  colorToken: `--${string}`;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
};

export const DEFAULT_DROPDOWN_SETTINGS: DropdownSettings = {
  bgColorHoverToken: "--background-700",
  bgColorToken: "--background-900",
  borderColorToken: "--foreground-500",
  borderRadius: 0.35,
  borderWidth: 0.25,
  colorHoverToken: "--text-500",
  colorToken: "--text-500",
  fontSize: 1.35,
  fontWeight: 500,
  lineHeight: 3,
};
