export const tokensStyleSheet = new CSSStyleSheet();

export const syncTokensStyleSheet = () =>
  tokensStyleSheet.replaceSync(`:root {
  /* Color Palette */
  --token-black-r: 20;
  --token-black-g: 21;
  --token-black-b: 27;
  --token-black: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 1);
  --token-black-01: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.01);
  --token-black-02: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.02);
  --token-black-03: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.03);
  --token-black-04: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.04);
  --token-black-05: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.05);
  --token-black-06: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.06);
  --token-black-07: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.07);
  --token-black-08: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.08);
  --token-black-09: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.09);
  --token-black-10: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.1);
  --token-black-20: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.2);
  --token-black-30: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.3);
  --token-black-40: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.4);
  --token-black-50: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.5);
  --token-black-60: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.6);
  --token-black-70: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.7);
  --token-black-80: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.8);
  --token-black-90: rgba(var(--token-black-r), var(--token-black-g), var(--token-black-b), 0.9);

  --token-blue-r: 66;
  --token-blue-g: 153;
  --token-blue-b: 225;
  --token-blue: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 1);
  --token-blue-01: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.01);
  --token-blue-02: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.02);
  --token-blue-03: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.03);
  --token-blue-04: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.04);
  --token-blue-05: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.05);
  --token-blue-06: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.06);
  --token-blue-07: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.07);
  --token-blue-08: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.08);
  --token-blue-09: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.09);
  --token-blue-10: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.1);
  --token-blue-20: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.2);
  --token-blue-30: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.3);
  --token-blue-40: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.4);
  --token-blue-50: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.5);
  --token-blue-60: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.6);
  --token-blue-70: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.7);
  --token-blue-80: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.8);
  --token-blue-90: rgba(var(--token-blue-r), var(--token-blue-g), var(--token-blue-b), 0.9);

  --token-green-r: 52;
  --token-green-g: 163;
  --token-green-b: 99;
  --token-green: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 1);
  --token-green-01: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.01);
  --token-green-02: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.02);
  --token-green-03: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.03);
  --token-green-04: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.04);
  --token-green-05: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.05);
  --token-green-06: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.06);
  --token-green-07: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.07);
  --token-green-08: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.08);
  --token-green-09: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.09);
  --token-green-10: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.1);
  --token-green-20: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.2);
  --token-green-30: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.3);
  --token-green-40: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.4);
  --token-green-50: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.5);
  --token-green-60: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.6);
  --token-green-70: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.7);
  --token-green-80: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.8);
  --token-green-90: rgba(var(--token-green-r), var(--token-green-g), var(--token-green-b), 0.9);

  --token-orange-r: 237;
  --token-orange-g: 137;
  --token-orange-b: 54;
  --token-orange: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 1);
  --token-orange-01: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.01);
  --token-orange-02: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.02);
  --token-orange-03: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.03);
  --token-orange-04: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.04);
  --token-orange-05: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.05);
  --token-orange-06: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.06);
  --token-orange-07: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.07);
  --token-orange-08: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.08);
  --token-orange-09: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.09);
  --token-orange-10: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.1);
  --token-orange-20: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.2);
  --token-orange-30: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.3);
  --token-orange-40: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.4);
  --token-orange-50: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.5);
  --token-orange-60: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.6);
  --token-orange-70: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.7);
  --token-orange-80: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.8);
  --token-orange-90: rgba(var(--token-orange-r), var(--token-orange-g), var(--token-orange-b), 0.9);

  --token-purple-r: 128;
  --token-purple-g: 90;
  --token-purple-b: 213;
  --token-purple: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 1);
  --token-purple-01: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.01);
  --token-purple-02: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.02);
  --token-purple-03: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.03);
  --token-purple-04: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.04);
  --token-purple-05: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.05);
  --token-purple-06: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.06);
  --token-purple-07: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.07);
  --token-purple-08: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.08);
  --token-purple-09: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.09);
  --token-purple-10: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.1);
  --token-purple-20: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.2);
  --token-purple-30: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.3);
  --token-purple-40: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.4);
  --token-purple-50: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.5);
  --token-purple-60: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.6);
  --token-purple-70: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.7);
  --token-purple-80: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.8);
  --token-purple-90: rgba(var(--token-purple-r), var(--token-purple-g), var(--token-purple-b), 0.9);

  --token-red-r: 229;
  --token-red-g: 62;
  --token-red-b: 62;
  --token-red: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 1);
  --token-red-01: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.01);
  --token-red-02: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.02);
  --token-red-03: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.03);
  --token-red-04: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.04);
  --token-red-05: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.05);
  --token-red-06: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.06);
  --token-red-07: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.07);
  --token-red-08: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.08);
  --token-red-09: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.09);
  --token-red-10: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.1);
  --token-red-20: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.2);
  --token-red-30: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.3);
  --token-red-40: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.4);
  --token-red-50: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.5);
  --token-red-60: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.6);
  --token-red-70: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.7);
  --token-red-80: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.8);
  --token-red-90: rgba(var(--token-red-r), var(--token-red-g), var(--token-red-b), 0.9);

  --token-white-r: 255;
  --token-white-g: 255;
  --token-white-b: 255;
  --token-white: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 1);
  --token-white-01: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.01);
  --token-white-02: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.02);
  --token-white-03: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.03);
  --token-white-04: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.04);
  --token-white-05: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.05);
  --token-white-06: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.06);
  --token-white-07: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.07);
  --token-white-08: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.08);
  --token-white-09: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.09);
  --token-white-10: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.1);
  --token-white-20: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.2);
  --token-white-30: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.3);
  --token-white-40: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.4);
  --token-white-50: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.5);
  --token-white-60: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.6);
  --token-white-70: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.7);
  --token-white-80: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.8);
  --token-white-90: rgba(var(--token-white-r), var(--token-white-g), var(--token-white-b), 0.9);

  --token-yellow-r: 236;
  --token-yellow-g: 201;
  --token-yellow-b: 75;
  --token-yellow: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 1);
  --token-yellow-01: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.01);
  --token-yellow-02: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.02);
  --token-yellow-03: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.03);
  --token-yellow-04: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.04);
  --token-yellow-05: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.05);
  --token-yellow-06: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.06);
  --token-yellow-07: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.07);
  --token-yellow-08: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.08);
  --token-yellow-09: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.09);
  --token-yellow-10: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.1);
  --token-yellow-20: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.2);
  --token-yellow-30: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.3);
  --token-yellow-40: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.4);
  --token-yellow-50: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.5);
  --token-yellow-60: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.6);
  --token-yellow-70: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.7);
  --token-yellow-80: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.8);
  --token-yellow-90: rgba(var(--token-yellow-r), var(--token-yellow-g), var(--token-yellow-b), 0.9);

  /* Fonts */

  --token-font-mono: Consolas, Menlo, Monaco, "Liberation Mono", monospace;
  --token-font-sans: system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;
  --token-font-serif: Georgia, Cambria, "Times New Roman", Times, serif;
  --token-font-size-2xs: 11px;
  --token-font-size-xs: 12px;
  --token-font-size-sm: 14px;
  --token-font-size-md: 16px;
  --token-font-size-lg: 18px;
  --token-font-size-xl: 20px;
  --token-font-size-2xl: 24px;
  --token-font-size-3xl: 30px;
  --token-font-size-4xl: 36px;
}

.align-items-center {
  align-items: center;
}
.align-items-end {
  align-items: flex-end;
}
.align-items-start {
  align-items: flex-start;
}
.bg-color-black {
  background-color: var(--token-black);
}
.bg-color-black-01 {
  background-color: var(--token-black-01);
}
.bg-color-black-01\:hover:hover {
  background-color: var(--token-black-01);
}
.bg-color-black-02 {
  background-color: var(--token-black-02);
}
.bg-color-black-02\:hover:hover {
  background-color: var(--token-black-02);
}
.bg-color-black-03 {
  background-color: var(--token-black-03);
}
.bg-color-black-03\:hover:hover {
  background-color: var(--token-black-03);
}
.bg-color-black-04 {
  background-color: var(--token-black-04);
}
.bg-color-black-04\:hover:hover {
  background-color: var(--token-black-04);
}
.bg-color-black-05 {
  background-color: var(--token-black-05);
}
.bg-color-black-05\:hover:hover {
  background-color: var(--token-black-05);
}
.bg-color-black-06 {
  background-color: var(--token-black-06);
}
.bg-color-black-06\:hover:hover {
  background-color: var(--token-black-06);
}
.bg-color-black-07 {
  background-color: var(--token-black-07);
}
.bg-color-black-07\:hover:hover {
  background-color: var(--token-black-07);
}
.bg-color-black-08 {
  background-color: var(--token-black-08);
}
.bg-color-black-08\:hover:hover {
  background-color: var(--token-black-08);
}
.bg-color-black-09 {
  background-color: var(--token-black-09);
}
.bg-color-black-09\:hover:hover {
  background-color: var(--token-black-09);
}
.bg-color-black-10 {
  background-color: var(--token-black-10);
}
.bg-color-black-10\:hover:hover {
  background-color: var(--token-black-10);
}
.bg-color-black-20 {
  background-color: var(--token-black-20);
}
.bg-color-black-20\:hover:hover {
  background-color: var(--token-black-20);
}
.bg-color-black-30 {
  background-color: var(--token-black-30);
}
.bg-color-black-30\:hover:hover {
  background-color: var(--token-black-30);
}
.bg-color-black-40 {
  background-color: var(--token-black-40);
}
.bg-color-black-40\:hover:hover {
  background-color: var(--token-black-40);
}
.bg-color-black-50 {
  background-color: var(--token-black-50);
}
.bg-color-black-50\:hover:hover {
  background-color: var(--token-black-50);
}
.bg-color-black-60 {
  background-color: var(--token-black-60);
}
.bg-color-black-60\:hover:hover {
  background-color: var(--token-black-60);
}
.bg-color-black-70 {
  background-color: var(--token-black-70);
}
.bg-color-black-70\:hover:hover {
  background-color: var(--token-black-70);
}
.bg-color-black-80 {
  background-color: var(--token-black-80);
}
.bg-color-black-80\:hover:hover {
  background-color: var(--token-black-80);
}
.bg-color-black-90 {
  background-color: var(--token-black-90);
}
.bg-color-black-90\:hover:hover {
  background-color: var(--token-black-90);
}
.bg-color-black\:hover:hover {
  background-color: var(--token-black);
}
.bg-color-blue {
  background-color: var(--token-blue);
}
.bg-color-blue-01 {
  background-color: var(--token-blue-01);
}
.bg-color-blue-01\:hover:hover {
  background-color: var(--token-blue-01);
}
.bg-color-blue-02 {
  background-color: var(--token-blue-02);
}
.bg-color-blue-02\:hover:hover {
  background-color: var(--token-blue-02);
}
.bg-color-blue-03 {
  background-color: var(--token-blue-03);
}
.bg-color-blue-03\:hover:hover {
  background-color: var(--token-blue-03);
}
.bg-color-blue-04 {
  background-color: var(--token-blue-04);
}
.bg-color-blue-04\:hover:hover {
  background-color: var(--token-blue-04);
}
.bg-color-blue-05 {
  background-color: var(--token-blue-05);
}
.bg-color-blue-05\:hover:hover {
  background-color: var(--token-blue-05);
}
.bg-color-blue-06 {
  background-color: var(--token-blue-06);
}
.bg-color-blue-06\:hover:hover {
  background-color: var(--token-blue-06);
}
.bg-color-blue-07 {
  background-color: var(--token-blue-07);
}
.bg-color-blue-07\:hover:hover {
  background-color: var(--token-blue-07);
}
.bg-color-blue-08 {
  background-color: var(--token-blue-08);
}
.bg-color-blue-08\:hover:hover {
  background-color: var(--token-blue-08);
}
.bg-color-blue-09 {
  background-color: var(--token-blue-09);
}
.bg-color-blue-09\:hover:hover {
  background-color: var(--token-blue-09);
}
.bg-color-blue-10 {
  background-color: var(--token-blue-10);
}
.bg-color-blue-10\:hover:hover {
  background-color: var(--token-blue-10);
}
.bg-color-blue-20 {
  background-color: var(--token-blue-20);
}
.bg-color-blue-20\:hover:hover {
  background-color: var(--token-blue-20);
}
.bg-color-blue-30 {
  background-color: var(--token-blue-30);
}
.bg-color-blue-30\:hover:hover {
  background-color: var(--token-blue-30);
}
.bg-color-blue-40 {
  background-color: var(--token-blue-40);
}
.bg-color-blue-40\:hover:hover {
  background-color: var(--token-blue-40);
}
.bg-color-blue-50 {
  background-color: var(--token-blue-50);
}
.bg-color-blue-50\:hover:hover {
  background-color: var(--token-blue-50);
}
.bg-color-blue-60 {
  background-color: var(--token-blue-60);
}
.bg-color-blue-60\:hover:hover {
  background-color: var(--token-blue-60);
}
.bg-color-blue-70 {
  background-color: var(--token-blue-70);
}
.bg-color-blue-70\:hover:hover {
  background-color: var(--token-blue-70);
}
.bg-color-blue-80 {
  background-color: var(--token-blue-80);
}
.bg-color-blue-80\:hover:hover {
  background-color: var(--token-blue-80);
}
.bg-color-blue-90 {
  background-color: var(--token-blue-90);
}
.bg-color-blue-90\:hover:hover {
  background-color: var(--token-blue-90);
}
.bg-color-blue\:hover:hover {
  background-color: var(--token-blue);
}
.bg-color-green {
  background-color: var(--token-green);
}
.bg-color-green-01 {
  background-color: var(--token-green-01);
}
.bg-color-green-01\:hover:hover {
  background-color: var(--token-green-01);
}
.bg-color-green-02 {
  background-color: var(--token-green-02);
}
.bg-color-green-02\:hover:hover {
  background-color: var(--token-green-02);
}
.bg-color-green-03 {
  background-color: var(--token-green-03);
}
.bg-color-green-03\:hover:hover {
  background-color: var(--token-green-03);
}
.bg-color-green-04 {
  background-color: var(--token-green-04);
}
.bg-color-green-04\:hover:hover {
  background-color: var(--token-green-04);
}
.bg-color-green-05 {
  background-color: var(--token-green-05);
}
.bg-color-green-05\:hover:hover {
  background-color: var(--token-green-05);
}
.bg-color-green-06 {
  background-color: var(--token-green-06);
}
.bg-color-green-06\:hover:hover {
  background-color: var(--token-green-06);
}
.bg-color-green-07 {
  background-color: var(--token-green-07);
}
.bg-color-green-07\:hover:hover {
  background-color: var(--token-green-07);
}
.bg-color-green-08 {
  background-color: var(--token-green-08);
}
.bg-color-green-08\:hover:hover {
  background-color: var(--token-green-08);
}
.bg-color-green-09 {
  background-color: var(--token-green-09);
}
.bg-color-green-09\:hover:hover {
  background-color: var(--token-green-09);
}
.bg-color-green-10 {
  background-color: var(--token-green-10);
}
.bg-color-green-10\:hover:hover {
  background-color: var(--token-green-10);
}
.bg-color-green-20 {
  background-color: var(--token-green-20);
}
.bg-color-green-20\:hover:hover {
  background-color: var(--token-green-20);
}
.bg-color-green-30 {
  background-color: var(--token-green-30);
}
.bg-color-green-30\:hover:hover {
  background-color: var(--token-green-30);
}
.bg-color-green-40 {
  background-color: var(--token-green-40);
}
.bg-color-green-40\:hover:hover {
  background-color: var(--token-green-40);
}
.bg-color-green-50 {
  background-color: var(--token-green-50);
}
.bg-color-green-50\:hover:hover {
  background-color: var(--token-green-50);
}
.bg-color-green-60 {
  background-color: var(--token-green-60);
}
.bg-color-green-60\:hover:hover {
  background-color: var(--token-green-60);
}
.bg-color-green-70 {
  background-color: var(--token-green-70);
}
.bg-color-green-70\:hover:hover {
  background-color: var(--token-green-70);
}
.bg-color-green-80 {
  background-color: var(--token-green-80);
}
.bg-color-green-80\:hover:hover {
  background-color: var(--token-green-80);
}
.bg-color-green-90 {
  background-color: var(--token-green-90);
}
.bg-color-green-90\:hover:hover {
  background-color: var(--token-green-90);
}
.bg-color-green\:hover:hover {
  background-color: var(--token-green);
}
.bg-color-orange {
  background-color: var(--token-orange);
}
.bg-color-orange-01 {
  background-color: var(--token-orange-01);
}
.bg-color-orange-01\:hover:hover {
  background-color: var(--token-orange-01);
}
.bg-color-orange-02 {
  background-color: var(--token-orange-02);
}
.bg-color-orange-02\:hover:hover {
  background-color: var(--token-orange-02);
}
.bg-color-orange-03 {
  background-color: var(--token-orange-03);
}
.bg-color-orange-03\:hover:hover {
  background-color: var(--token-orange-03);
}
.bg-color-orange-04 {
  background-color: var(--token-orange-04);
}
.bg-color-orange-04\:hover:hover {
  background-color: var(--token-orange-04);
}
.bg-color-orange-05 {
  background-color: var(--token-orange-05);
}
.bg-color-orange-05\:hover:hover {
  background-color: var(--token-orange-05);
}
.bg-color-orange-06 {
  background-color: var(--token-orange-06);
}
.bg-color-orange-06\:hover:hover {
  background-color: var(--token-orange-06);
}
.bg-color-orange-07 {
  background-color: var(--token-orange-07);
}
.bg-color-orange-07\:hover:hover {
  background-color: var(--token-orange-07);
}
.bg-color-orange-08 {
  background-color: var(--token-orange-08);
}
.bg-color-orange-08\:hover:hover {
  background-color: var(--token-orange-08);
}
.bg-color-orange-09 {
  background-color: var(--token-orange-09);
}
.bg-color-orange-09\:hover:hover {
  background-color: var(--token-orange-09);
}
.bg-color-orange-10 {
  background-color: var(--token-orange-10);
}
.bg-color-orange-10\:hover:hover {
  background-color: var(--token-orange-10);
}
.bg-color-orange-20 {
  background-color: var(--token-orange-20);
}
.bg-color-orange-20\:hover:hover {
  background-color: var(--token-orange-20);
}
.bg-color-orange-30 {
  background-color: var(--token-orange-30);
}
.bg-color-orange-30\:hover:hover {
  background-color: var(--token-orange-30);
}
.bg-color-orange-40 {
  background-color: var(--token-orange-40);
}
.bg-color-orange-40\:hover:hover {
  background-color: var(--token-orange-40);
}
.bg-color-orange-50 {
  background-color: var(--token-orange-50);
}
.bg-color-orange-50\:hover:hover {
  background-color: var(--token-orange-50);
}
.bg-color-orange-60 {
  background-color: var(--token-orange-60);
}
.bg-color-orange-60\:hover:hover {
  background-color: var(--token-orange-60);
}
.bg-color-orange-70 {
  background-color: var(--token-orange-70);
}
.bg-color-orange-70\:hover:hover {
  background-color: var(--token-orange-70);
}
.bg-color-orange-80 {
  background-color: var(--token-orange-80);
}
.bg-color-orange-80\:hover:hover {
  background-color: var(--token-orange-80);
}
.bg-color-orange-90 {
  background-color: var(--token-orange-90);
}
.bg-color-orange-90\:hover:hover {
  background-color: var(--token-orange-90);
}
.bg-color-orange\:hover:hover {
  background-color: var(--token-orange);
}
.bg-color-purple {
  background-color: var(--token-purple);
}
.bg-color-purple-01 {
  background-color: var(--token-purple-01);
}
.bg-color-purple-01\:hover:hover {
  background-color: var(--token-purple-01);
}
.bg-color-purple-02 {
  background-color: var(--token-purple-02);
}
.bg-color-purple-02\:hover:hover {
  background-color: var(--token-purple-02);
}
.bg-color-purple-03 {
  background-color: var(--token-purple-03);
}
.bg-color-purple-03\:hover:hover {
  background-color: var(--token-purple-03);
}
.bg-color-purple-04 {
  background-color: var(--token-purple-04);
}
.bg-color-purple-04\:hover:hover {
  background-color: var(--token-purple-04);
}
.bg-color-purple-05 {
  background-color: var(--token-purple-05);
}
.bg-color-purple-05\:hover:hover {
  background-color: var(--token-purple-05);
}
.bg-color-purple-06 {
  background-color: var(--token-purple-06);
}
.bg-color-purple-06\:hover:hover {
  background-color: var(--token-purple-06);
}
.bg-color-purple-07 {
  background-color: var(--token-purple-07);
}
.bg-color-purple-07\:hover:hover {
  background-color: var(--token-purple-07);
}
.bg-color-purple-08 {
  background-color: var(--token-purple-08);
}
.bg-color-purple-08\:hover:hover {
  background-color: var(--token-purple-08);
}
.bg-color-purple-09 {
  background-color: var(--token-purple-09);
}
.bg-color-purple-09\:hover:hover {
  background-color: var(--token-purple-09);
}
.bg-color-purple-10 {
  background-color: var(--token-purple-10);
}
.bg-color-purple-10\:hover:hover {
  background-color: var(--token-purple-10);
}
.bg-color-purple-20 {
  background-color: var(--token-purple-20);
}
.bg-color-purple-20\:hover:hover {
  background-color: var(--token-purple-20);
}
.bg-color-purple-30 {
  background-color: var(--token-purple-30);
}
.bg-color-purple-30\:hover:hover {
  background-color: var(--token-purple-30);
}
.bg-color-purple-40 {
  background-color: var(--token-purple-40);
}
.bg-color-purple-40\:hover:hover {
  background-color: var(--token-purple-40);
}
.bg-color-purple-50 {
  background-color: var(--token-purple-50);
}
.bg-color-purple-50\:hover:hover {
  background-color: var(--token-purple-50);
}
.bg-color-purple-60 {
  background-color: var(--token-purple-60);
}
.bg-color-purple-60\:hover:hover {
  background-color: var(--token-purple-60);
}
.bg-color-purple-70 {
  background-color: var(--token-purple-70);
}
.bg-color-purple-70\:hover:hover {
  background-color: var(--token-purple-70);
}
.bg-color-purple-80 {
  background-color: var(--token-purple-80);
}
.bg-color-purple-80\:hover:hover {
  background-color: var(--token-purple-80);
}
.bg-color-purple-90 {
  background-color: var(--token-purple-90);
}
.bg-color-purple-90\:hover:hover {
  background-color: var(--token-purple-90);
}
.bg-color-purple\:hover:hover {
  background-color: var(--token-purple);
}
.bg-color-red {
  background-color: var(--token-red);
}
.bg-color-red-01 {
  background-color: var(--token-red-01);
}
.bg-color-red-01\:hover:hover {
  background-color: var(--token-red-01);
}
.bg-color-red-02 {
  background-color: var(--token-red-02);
}
.bg-color-red-02\:hover:hover {
  background-color: var(--token-red-02);
}
.bg-color-red-03 {
  background-color: var(--token-red-03);
}
.bg-color-red-03\:hover:hover {
  background-color: var(--token-red-03);
}
.bg-color-red-04 {
  background-color: var(--token-red-04);
}
.bg-color-red-04\:hover:hover {
  background-color: var(--token-red-04);
}
.bg-color-red-05 {
  background-color: var(--token-red-05);
}
.bg-color-red-05\:hover:hover {
  background-color: var(--token-red-05);
}
.bg-color-red-06 {
  background-color: var(--token-red-06);
}
.bg-color-red-06\:hover:hover {
  background-color: var(--token-red-06);
}
.bg-color-red-07 {
  background-color: var(--token-red-07);
}
.bg-color-red-07\:hover:hover {
  background-color: var(--token-red-07);
}
.bg-color-red-08 {
  background-color: var(--token-red-08);
}
.bg-color-red-08\:hover:hover {
  background-color: var(--token-red-08);
}
.bg-color-red-09 {
  background-color: var(--token-red-09);
}
.bg-color-red-09\:hover:hover {
  background-color: var(--token-red-09);
}
.bg-color-red-10 {
  background-color: var(--token-red-10);
}
.bg-color-red-10\:hover:hover {
  background-color: var(--token-red-10);
}
.bg-color-red-20 {
  background-color: var(--token-red-20);
}
.bg-color-red-20\:hover:hover {
  background-color: var(--token-red-20);
}
.bg-color-red-30 {
  background-color: var(--token-red-30);
}
.bg-color-red-30\:hover:hover {
  background-color: var(--token-red-30);
}
.bg-color-red-40 {
  background-color: var(--token-red-40);
}
.bg-color-red-40\:hover:hover {
  background-color: var(--token-red-40);
}
.bg-color-red-50 {
  background-color: var(--token-red-50);
}
.bg-color-red-50\:hover:hover {
  background-color: var(--token-red-50);
}
.bg-color-red-60 {
  background-color: var(--token-red-60);
}
.bg-color-red-60\:hover:hover {
  background-color: var(--token-red-60);
}
.bg-color-red-70 {
  background-color: var(--token-red-70);
}
.bg-color-red-70\:hover:hover {
  background-color: var(--token-red-70);
}
.bg-color-red-80 {
  background-color: var(--token-red-80);
}
.bg-color-red-80\:hover:hover {
  background-color: var(--token-red-80);
}
.bg-color-red-90 {
  background-color: var(--token-red-90);
}
.bg-color-red-90\:hover:hover {
  background-color: var(--token-red-90);
}
.bg-color-red\:hover:hover {
  background-color: var(--token-red);
}
.bg-color-white {
  background-color: var(--token-white);
}
.bg-color-white-01 {
  background-color: var(--token-white-01);
}
.bg-color-white-01\:hover:hover {
  background-color: var(--token-white-01);
}
.bg-color-white-02 {
  background-color: var(--token-white-02);
}
.bg-color-white-02\:hover:hover {
  background-color: var(--token-white-02);
}
.bg-color-white-03 {
  background-color: var(--token-white-03);
}
.bg-color-white-03\:hover:hover {
  background-color: var(--token-white-03);
}
.bg-color-white-04 {
  background-color: var(--token-white-04);
}
.bg-color-white-04\:hover:hover {
  background-color: var(--token-white-04);
}
.bg-color-white-05 {
  background-color: var(--token-white-05);
}
.bg-color-white-05\:hover:hover {
  background-color: var(--token-white-05);
}
.bg-color-white-06 {
  background-color: var(--token-white-06);
}
.bg-color-white-06\:hover:hover {
  background-color: var(--token-white-06);
}
.bg-color-white-07 {
  background-color: var(--token-white-07);
}
.bg-color-white-07\:hover:hover {
  background-color: var(--token-white-07);
}
.bg-color-white-08 {
  background-color: var(--token-white-08);
}
.bg-color-white-08\:hover:hover {
  background-color: var(--token-white-08);
}
.bg-color-white-09 {
  background-color: var(--token-white-09);
}
.bg-color-white-09\:hover:hover {
  background-color: var(--token-white-09);
}
.bg-color-white-10 {
  background-color: var(--token-white-10);
}
.bg-color-white-10\:hover:hover {
  background-color: var(--token-white-10);
}
.bg-color-white-20 {
  background-color: var(--token-white-20);
}
.bg-color-white-20\:hover:hover {
  background-color: var(--token-white-20);
}
.bg-color-white-30 {
  background-color: var(--token-white-30);
}
.bg-color-white-30\:hover:hover {
  background-color: var(--token-white-30);
}
.bg-color-white-40 {
  background-color: var(--token-white-40);
}
.bg-color-white-40\:hover:hover {
  background-color: var(--token-white-40);
}
.bg-color-white-50 {
  background-color: var(--token-white-50);
}
.bg-color-white-50\:hover:hover {
  background-color: var(--token-white-50);
}
.bg-color-white-60 {
  background-color: var(--token-white-60);
}
.bg-color-white-60\:hover:hover {
  background-color: var(--token-white-60);
}
.bg-color-white-70 {
  background-color: var(--token-white-70);
}
.bg-color-white-70\:hover:hover {
  background-color: var(--token-white-70);
}
.bg-color-white-80 {
  background-color: var(--token-white-80);
}
.bg-color-white-80\:hover:hover {
  background-color: var(--token-white-80);
}
.bg-color-white-90 {
  background-color: var(--token-white-90);
}
.bg-color-white-90\:hover:hover {
  background-color: var(--token-white-90);
}
.bg-color-white\:hover:hover {
  background-color: var(--token-white);
}
.bg-color-yellow {
  background-color: var(--token-yellow);
}
.bg-color-yellow-01 {
  background-color: var(--token-yellow-01);
}
.bg-color-yellow-01\:hover:hover {
  background-color: var(--token-yellow-01);
}
.bg-color-yellow-02 {
  background-color: var(--token-yellow-02);
}
.bg-color-yellow-02\:hover:hover {
  background-color: var(--token-yellow-02);
}
.bg-color-yellow-03 {
  background-color: var(--token-yellow-03);
}
.bg-color-yellow-03\:hover:hover {
  background-color: var(--token-yellow-03);
}
.bg-color-yellow-04 {
  background-color: var(--token-yellow-04);
}
.bg-color-yellow-04\:hover:hover {
  background-color: var(--token-yellow-04);
}
.bg-color-yellow-05 {
  background-color: var(--token-yellow-05);
}
.bg-color-yellow-05\:hover:hover {
  background-color: var(--token-yellow-05);
}
.bg-color-yellow-06 {
  background-color: var(--token-yellow-06);
}
.bg-color-yellow-06\:hover:hover {
  background-color: var(--token-yellow-06);
}
.bg-color-yellow-07 {
  background-color: var(--token-yellow-07);
}
.bg-color-yellow-07\:hover:hover {
  background-color: var(--token-yellow-07);
}
.bg-color-yellow-08 {
  background-color: var(--token-yellow-08);
}
.bg-color-yellow-08\:hover:hover {
  background-color: var(--token-yellow-08);
}
.bg-color-yellow-09 {
  background-color: var(--token-yellow-09);
}
.bg-color-yellow-09\:hover:hover {
  background-color: var(--token-yellow-09);
}
.bg-color-yellow-10 {
  background-color: var(--token-yellow-10);
}
.bg-color-yellow-10\:hover:hover {
  background-color: var(--token-yellow-10);
}
.bg-color-yellow-20 {
  background-color: var(--token-yellow-20);
}
.bg-color-yellow-20\:hover:hover {
  background-color: var(--token-yellow-20);
}
.bg-color-yellow-30 {
  background-color: var(--token-yellow-30);
}
.bg-color-yellow-30\:hover:hover {
  background-color: var(--token-yellow-30);
}
.bg-color-yellow-40 {
  background-color: var(--token-yellow-40);
}
.bg-color-yellow-40\:hover:hover {
  background-color: var(--token-yellow-40);
}
.bg-color-yellow-50 {
  background-color: var(--token-yellow-50);
}
.bg-color-yellow-50\:hover:hover {
  background-color: var(--token-yellow-50);
}
.bg-color-yellow-60 {
  background-color: var(--token-yellow-60);
}
.bg-color-yellow-60\:hover:hover {
  background-color: var(--token-yellow-60);
}
.bg-color-yellow-70 {
  background-color: var(--token-yellow-70);
}
.bg-color-yellow-70\:hover:hover {
  background-color: var(--token-yellow-70);
}
.bg-color-yellow-80 {
  background-color: var(--token-yellow-80);
}
.bg-color-yellow-80\:hover:hover {
  background-color: var(--token-yellow-80);
}
.bg-color-yellow-90 {
  background-color: var(--token-yellow-90);
}
.bg-color-yellow-90\:hover:hover {
  background-color: var(--token-yellow-90);
}
.bg-color-yellow\:hover:hover {
  background-color: var(--token-yellow);
}
.border-width-0 {
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
}
.border-width-1 {
  border-width: 1px;
}
.border-width-2 {
  border-width: 2px;
}
.border-width-3 {
  border-width: 3px;
}
.border-width-4 {
  border-width: 4px;
}
.border-width-5 {
  border-width: 5px;
}
.border-bottom-width-0 {
  border-bottom-width: 0;
}
.border-bottom-width-1 {
  border-bottom-width: 1px;
}
.border-bottom-width-2 {
  border-bottom-width: 2px;
}
.border-bottom-width-3 {
  border-bottom-width: 3px;
}
.border-bottom-width-4 {
  border-bottom-width: 4px;
}
.border-bottom-width-5 {
  border-bottom-width: 5px;
}
.border-left-width-0 {
  border-left-width: 0;
}
.border-left-width-1 {
  border-left-width: 1px;
}
.border-left-width-2 {
  border-left-width: 2px;
}
.border-left-width-3 {
  border-left-width: 3px;
}
.border-left-width-4 {
  border-left-width: 4px;
}
.border-left-width-5 {
  border-left-width: 5px;
}
.border-right-width-0 {
  border-right-width: 0;
}
.border-right-width-1 {
  border-right-width: 1px;
}
.border-right-width-2 {
  border-right-width: 2px;
}
.border-right-width-3 {
  border-right-width: 3px;
}
.border-right-width-4 {
  border-right-width: 4px;
}
.border-right-width-5 {
  border-right-width: 5px;
}
.border-top-width-0 {
  border-top-width: 0;
}
.border-top-width-1 {
  border-top-width: 1px;
}
.border-top-width-2 {
  border-top-width: 2px;
}
.border-top-width-3 {
  border-top-width: 3px;
}
.border-top-width-4 {
  border-top-width: 4px;
}
.border-top-width-5 {
  border-top-width: 5px;
}
.color-black {
  color: var(--token-black);
}
.color-black-01 {
  color: var(--token-black-01);
}
.color-black-01\:hover:hover {
  color: var(--token-black-01);
}
.color-black-02 {
  color: var(--token-black-02);
}
.color-black-02\:hover:hover {
  color: var(--token-black-02);
}
.color-black-03 {
  color: var(--token-black-03);
}
.color-black-03\:hover:hover {
  color: var(--token-black-03);
}
.color-black-04 {
  color: var(--token-black-04);
}
.color-black-04\:hover:hover {
  color: var(--token-black-04);
}
.color-black-05 {
  color: var(--token-black-05);
}
.color-black-05\:hover:hover {
  color: var(--token-black-05);
}
.color-black-06 {
  color: var(--token-black-06);
}
.color-black-06\:hover:hover {
  color: var(--token-black-06);
}
.color-black-07 {
  color: var(--token-black-07);
}
.color-black-07\:hover:hover {
  color: var(--token-black-07);
}
.color-black-08 {
  color: var(--token-black-08);
}
.color-black-08\:hover:hover {
  color: var(--token-black-08);
}
.color-black-09 {
  color: var(--token-black-09);
}
.color-black-09\:hover:hover {
  color: var(--token-black-09);
}
.color-black-10 {
  color: var(--token-black-10);
}
.color-black-10\:hover:hover {
  color: var(--token-black-10);
}
.color-black-20 {
  color: var(--token-black-20);
}
.color-black-20\:hover:hover {
  color: var(--token-black-20);
}
.color-black-30 {
  color: var(--token-black-30);
}
.color-black-30\:hover:hover {
  color: var(--token-black-30);
}
.color-black-40 {
  color: var(--token-black-40);
}
.color-black-40\:hover:hover {
  color: var(--token-black-40);
}
.color-black-50 {
  color: var(--token-black-50);
}
.color-black-50\:hover:hover {
  color: var(--token-black-50);
}
.color-black-60 {
  color: var(--token-black-60);
}
.color-black-60\:hover:hover {
  color: var(--token-black-60);
}
.color-black-70 {
  color: var(--token-black-70);
}
.color-black-70\:hover:hover {
  color: var(--token-black-70);
}
.color-black-80 {
  color: var(--token-black-80);
}
.color-black-80\:hover:hover {
  color: var(--token-black-80);
}
.color-black-90 {
  color: var(--token-black-90);
}
.color-black-90\:hover:hover {
  color: var(--token-black-90);
}
.color-black\:hover:hover {
  color: var(--token-black);
}
.color-blue {
  color: var(--token-blue);
}
.color-blue-01 {
  color: var(--token-blue-01);
}
.color-blue-01\:hover:hover {
  color: var(--token-blue-01);
}
.color-blue-02 {
  color: var(--token-blue-02);
}
.color-blue-02\:hover:hover {
  color: var(--token-blue-02);
}
.color-blue-03 {
  color: var(--token-blue-03);
}
.color-blue-03\:hover:hover {
  color: var(--token-blue-03);
}
.color-blue-04 {
  color: var(--token-blue-04);
}
.color-blue-04\:hover:hover {
  color: var(--token-blue-04);
}
.color-blue-05 {
  color: var(--token-blue-05);
}
.color-blue-05\:hover:hover {
  color: var(--token-blue-05);
}
.color-blue-06 {
  color: var(--token-blue-06);
}
.color-blue-06\:hover:hover {
  color: var(--token-blue-06);
}
.color-blue-07 {
  color: var(--token-blue-07);
}
.color-blue-07\:hover:hover {
  color: var(--token-blue-07);
}
.color-blue-08 {
  color: var(--token-blue-08);
}
.color-blue-08\:hover:hover {
  color: var(--token-blue-08);
}
.color-blue-09 {
  color: var(--token-blue-09);
}
.color-blue-09\:hover:hover {
  color: var(--token-blue-09);
}
.color-blue-10 {
  color: var(--token-blue-10);
}
.color-blue-10\:hover:hover {
  color: var(--token-blue-10);
}
.color-blue-20 {
  color: var(--token-blue-20);
}
.color-blue-20\:hover:hover {
  color: var(--token-blue-20);
}
.color-blue-30 {
  color: var(--token-blue-30);
}
.color-blue-30\:hover:hover {
  color: var(--token-blue-30);
}
.color-blue-40 {
  color: var(--token-blue-40);
}
.color-blue-40\:hover:hover {
  color: var(--token-blue-40);
}
.color-blue-50 {
  color: var(--token-blue-50);
}
.color-blue-50\:hover:hover {
  color: var(--token-blue-50);
}
.color-blue-60 {
  color: var(--token-blue-60);
}
.color-blue-60\:hover:hover {
  color: var(--token-blue-60);
}
.color-blue-70 {
  color: var(--token-blue-70);
}
.color-blue-70\:hover:hover {
  color: var(--token-blue-70);
}
.color-blue-80 {
  color: var(--token-blue-80);
}
.color-blue-80\:hover:hover {
  color: var(--token-blue-80);
}
.color-blue-90 {
  color: var(--token-blue-90);
}
.color-blue-90\:hover:hover {
  color: var(--token-blue-90);
}
.color-blue\:hover:hover {
  color: var(--token-blue);
}
.color-green {
  color: var(--token-green);
}
.color-green-01 {
  color: var(--token-green-01);
}
.color-green-01\:hover:hover {
  color: var(--token-green-01);
}
.color-green-02 {
  color: var(--token-green-02);
}
.color-green-02\:hover:hover {
  color: var(--token-green-02);
}
.color-green-03 {
  color: var(--token-green-03);
}
.color-green-03\:hover:hover {
  color: var(--token-green-03);
}
.color-green-04 {
  color: var(--token-green-04);
}
.color-green-04\:hover:hover {
  color: var(--token-green-04);
}
.color-green-05 {
  color: var(--token-green-05);
}
.color-green-05\:hover:hover {
  color: var(--token-green-05);
}
.color-green-06 {
  color: var(--token-green-06);
}
.color-green-06\:hover:hover {
  color: var(--token-green-06);
}
.color-green-07 {
  color: var(--token-green-07);
}
.color-green-07\:hover:hover {
  color: var(--token-green-07);
}
.color-green-08 {
  color: var(--token-green-08);
}
.color-green-08\:hover:hover {
  color: var(--token-green-08);
}
.color-green-09 {
  color: var(--token-green-09);
}
.color-green-09\:hover:hover {
  color: var(--token-green-09);
}
.color-green-10 {
  color: var(--token-green-10);
}
.color-green-10\:hover:hover {
  color: var(--token-green-10);
}
.color-green-20 {
  color: var(--token-green-20);
}
.color-green-20\:hover:hover {
  color: var(--token-green-20);
}
.color-green-30 {
  color: var(--token-green-30);
}
.color-green-30\:hover:hover {
  color: var(--token-green-30);
}
.color-green-40 {
  color: var(--token-green-40);
}
.color-green-40\:hover:hover {
  color: var(--token-green-40);
}
.color-green-50 {
  color: var(--token-green-50);
}
.color-green-50\:hover:hover {
  color: var(--token-green-50);
}
.color-green-60 {
  color: var(--token-green-60);
}
.color-green-60\:hover:hover {
  color: var(--token-green-60);
}
.color-green-70 {
  color: var(--token-green-70);
}
.color-green-70\:hover:hover {
  color: var(--token-green-70);
}
.color-green-80 {
  color: var(--token-green-80);
}
.color-green-80\:hover:hover {
  color: var(--token-green-80);
}
.color-green-90 {
  color: var(--token-green-90);
}
.color-green-90\:hover:hover {
  color: var(--token-green-90);
}
.color-green\:hover:hover {
  color: var(--token-green);
}
.color-orange {
  color: var(--token-orange);
}
.color-orange-01 {
  color: var(--token-orange-01);
}
.color-orange-01\:hover:hover {
  color: var(--token-orange-01);
}
.color-orange-02 {
  color: var(--token-orange-02);
}
.color-orange-02\:hover:hover {
  color: var(--token-orange-02);
}
.color-orange-03 {
  color: var(--token-orange-03);
}
.color-orange-03\:hover:hover {
  color: var(--token-orange-03);
}
.color-orange-04 {
  color: var(--token-orange-04);
}
.color-orange-04\:hover:hover {
  color: var(--token-orange-04);
}
.color-orange-05 {
  color: var(--token-orange-05);
}
.color-orange-05\:hover:hover {
  color: var(--token-orange-05);
}
.color-orange-06 {
  color: var(--token-orange-06);
}
.color-orange-06\:hover:hover {
  color: var(--token-orange-06);
}
.color-orange-07 {
  color: var(--token-orange-07);
}
.color-orange-07\:hover:hover {
  color: var(--token-orange-07);
}
.color-orange-08 {
  color: var(--token-orange-08);
}
.color-orange-08\:hover:hover {
  color: var(--token-orange-08);
}
.color-orange-09 {
  color: var(--token-orange-09);
}
.color-orange-09\:hover:hover {
  color: var(--token-orange-09);
}
.color-orange-10 {
  color: var(--token-orange-10);
}
.color-orange-10\:hover:hover {
  color: var(--token-orange-10);
}
.color-orange-20 {
  color: var(--token-orange-20);
}
.color-orange-20\:hover:hover {
  color: var(--token-orange-20);
}
.color-orange-30 {
  color: var(--token-orange-30);
}
.color-orange-30\:hover:hover {
  color: var(--token-orange-30);
}
.color-orange-40 {
  color: var(--token-orange-40);
}
.color-orange-40\:hover:hover {
  color: var(--token-orange-40);
}
.color-orange-50 {
  color: var(--token-orange-50);
}
.color-orange-50\:hover:hover {
  color: var(--token-orange-50);
}
.color-orange-60 {
  color: var(--token-orange-60);
}
.color-orange-60\:hover:hover {
  color: var(--token-orange-60);
}
.color-orange-70 {
  color: var(--token-orange-70);
}
.color-orange-70\:hover:hover {
  color: var(--token-orange-70);
}
.color-orange-80 {
  color: var(--token-orange-80);
}
.color-orange-80\:hover:hover {
  color: var(--token-orange-80);
}
.color-orange-90 {
  color: var(--token-orange-90);
}
.color-orange-90\:hover:hover {
  color: var(--token-orange-90);
}
.color-orange\:hover:hover {
  color: var(--token-orange);
}
.color-purple {
  color: var(--token-purple);
}
.color-purple-01 {
  color: var(--token-purple-01);
}
.color-purple-01\:hover:hover {
  color: var(--token-purple-01);
}
.color-purple-02 {
  color: var(--token-purple-02);
}
.color-purple-02\:hover:hover {
  color: var(--token-purple-02);
}
.color-purple-03 {
  color: var(--token-purple-03);
}
.color-purple-03\:hover:hover {
  color: var(--token-purple-03);
}
.color-purple-04 {
  color: var(--token-purple-04);
}
.color-purple-04\:hover:hover {
  color: var(--token-purple-04);
}
.color-purple-05 {
  color: var(--token-purple-05);
}
.color-purple-05\:hover:hover {
  color: var(--token-purple-05);
}
.color-purple-06 {
  color: var(--token-purple-06);
}
.color-purple-06\:hover:hover {
  color: var(--token-purple-06);
}
.color-purple-07 {
  color: var(--token-purple-07);
}
.color-purple-07\:hover:hover {
  color: var(--token-purple-07);
}
.color-purple-08 {
  color: var(--token-purple-08);
}
.color-purple-08\:hover:hover {
  color: var(--token-purple-08);
}
.color-purple-09 {
  color: var(--token-purple-09);
}
.color-purple-09\:hover:hover {
  color: var(--token-purple-09);
}
.color-purple-10 {
  color: var(--token-purple-10);
}
.color-purple-10\:hover:hover {
  color: var(--token-purple-10);
}
.color-purple-20 {
  color: var(--token-purple-20);
}
.color-purple-20\:hover:hover {
  color: var(--token-purple-20);
}
.color-purple-30 {
  color: var(--token-purple-30);
}
.color-purple-30\:hover:hover {
  color: var(--token-purple-30);
}
.color-purple-40 {
  color: var(--token-purple-40);
}
.color-purple-40\:hover:hover {
  color: var(--token-purple-40);
}
.color-purple-50 {
  color: var(--token-purple-50);
}
.color-purple-50\:hover:hover {
  color: var(--token-purple-50);
}
.color-purple-60 {
  color: var(--token-purple-60);
}
.color-purple-60\:hover:hover {
  color: var(--token-purple-60);
}
.color-purple-70 {
  color: var(--token-purple-70);
}
.color-purple-70\:hover:hover {
  color: var(--token-purple-70);
}
.color-purple-80 {
  color: var(--token-purple-80);
}
.color-purple-80\:hover:hover {
  color: var(--token-purple-80);
}
.color-purple-90 {
  color: var(--token-purple-90);
}
.color-purple-90\:hover:hover {
  color: var(--token-purple-90);
}
.color-purple\:hover:hover {
  color: var(--token-purple);
}
.color-red {
  color: var(--token-red);
}
.color-red-01 {
  color: var(--token-red-01);
}
.color-red-01\:hover:hover {
  color: var(--token-red-01);
}
.color-red-02 {
  color: var(--token-red-02);
}
.color-red-02\:hover:hover {
  color: var(--token-red-02);
}
.color-red-03 {
  color: var(--token-red-03);
}
.color-red-03\:hover:hover {
  color: var(--token-red-03);
}
.color-red-04 {
  color: var(--token-red-04);
}
.color-red-04\:hover:hover {
  color: var(--token-red-04);
}
.color-red-05 {
  color: var(--token-red-05);
}
.color-red-05\:hover:hover {
  color: var(--token-red-05);
}
.color-red-06 {
  color: var(--token-red-06);
}
.color-red-06\:hover:hover {
  color: var(--token-red-06);
}
.color-red-07 {
  color: var(--token-red-07);
}
.color-red-07\:hover:hover {
  color: var(--token-red-07);
}
.color-red-08 {
  color: var(--token-red-08);
}
.color-red-08\:hover:hover {
  color: var(--token-red-08);
}
.color-red-09 {
  color: var(--token-red-09);
}
.color-red-09\:hover:hover {
  color: var(--token-red-09);
}
.color-red-10 {
  color: var(--token-red-10);
}
.color-red-10\:hover:hover {
  color: var(--token-red-10);
}
.color-red-20 {
  color: var(--token-red-20);
}
.color-red-20\:hover:hover {
  color: var(--token-red-20);
}
.color-red-30 {
  color: var(--token-red-30);
}
.color-red-30\:hover:hover {
  color: var(--token-red-30);
}
.color-red-40 {
  color: var(--token-red-40);
}
.color-red-40\:hover:hover {
  color: var(--token-red-40);
}
.color-red-50 {
  color: var(--token-red-50);
}
.color-red-50\:hover:hover {
  color: var(--token-red-50);
}
.color-red-60 {
  color: var(--token-red-60);
}
.color-red-60\:hover:hover {
  color: var(--token-red-60);
}
.color-red-70 {
  color: var(--token-red-70);
}
.color-red-70\:hover:hover {
  color: var(--token-red-70);
}
.color-red-80 {
  color: var(--token-red-80);
}
.color-red-80\:hover:hover {
  color: var(--token-red-80);
}
.color-red-90 {
  color: var(--token-red-90);
}
.color-red-90\:hover:hover {
  color: var(--token-red-90);
}
.color-red\:hover:hover {
  color: var(--token-red);
}
.color-white {
  color: var(--token-white);
}
.color-white-01 {
  color: var(--token-white-01);
}
.color-white-01\:hover:hover {
  color: var(--token-white-01);
}
.color-white-02 {
  color: var(--token-white-02);
}
.color-white-02\:hover:hover {
  color: var(--token-white-02);
}
.color-white-03 {
  color: var(--token-white-03);
}
.color-white-03\:hover:hover {
  color: var(--token-white-03);
}
.color-white-04 {
  color: var(--token-white-04);
}
.color-white-04\:hover:hover {
  color: var(--token-white-04);
}
.color-white-05 {
  color: var(--token-white-05);
}
.color-white-05\:hover:hover {
  color: var(--token-white-05);
}
.color-white-06 {
  color: var(--token-white-06);
}
.color-white-06\:hover:hover {
  color: var(--token-white-06);
}
.color-white-07 {
  color: var(--token-white-07);
}
.color-white-07\:hover:hover {
  color: var(--token-white-07);
}
.color-white-08 {
  color: var(--token-white-08);
}
.color-white-08\:hover:hover {
  color: var(--token-white-08);
}
.color-white-09 {
  color: var(--token-white-09);
}
.color-white-09\:hover:hover {
  color: var(--token-white-09);
}
.color-white-10 {
  color: var(--token-white-10);
}
.color-white-10\:hover:hover {
  color: var(--token-white-10);
}
.color-white-20 {
  color: var(--token-white-20);
}
.color-white-20\:hover:hover {
  color: var(--token-white-20);
}
.color-white-30 {
  color: var(--token-white-30);
}
.color-white-30\:hover:hover {
  color: var(--token-white-30);
}
.color-white-40 {
  color: var(--token-white-40);
}
.color-white-40\:hover:hover {
  color: var(--token-white-40);
}
.color-white-50 {
  color: var(--token-white-50);
}
.color-white-50\:hover:hover {
  color: var(--token-white-50);
}
.color-white-60 {
  color: var(--token-white-60);
}
.color-white-60\:hover:hover {
  color: var(--token-white-60);
}
.color-white-70 {
  color: var(--token-white-70);
}
.color-white-70\:hover:hover {
  color: var(--token-white-70);
}
.color-white-80 {
  color: var(--token-white-80);
}
.color-white-80\:hover:hover {
  color: var(--token-white-80);
}
.color-white-90 {
  color: var(--token-white-90);
}
.color-white-90\:hover:hover {
  color: var(--token-white-90);
}
.color-white\:hover:hover {
  color: var(--token-white);
}
.color-yellow {
  color: var(--token-yellow);
}
.color-yellow-01 {
  color: var(--token-yellow-01);
}
.color-yellow-01\:hover:hover {
  color: var(--token-yellow-01);
}
.color-yellow-02 {
  color: var(--token-yellow-02);
}
.color-yellow-02\:hover:hover {
  color: var(--token-yellow-02);
}
.color-yellow-03 {
  color: var(--token-yellow-03);
}
.color-yellow-03\:hover:hover {
  color: var(--token-yellow-03);
}
.color-yellow-04 {
  color: var(--token-yellow-04);
}
.color-yellow-04\:hover:hover {
  color: var(--token-yellow-04);
}
.color-yellow-05 {
  color: var(--token-yellow-05);
}
.color-yellow-05\:hover:hover {
  color: var(--token-yellow-05);
}
.color-yellow-06 {
  color: var(--token-yellow-06);
}
.color-yellow-06\:hover:hover {
  color: var(--token-yellow-06);
}
.color-yellow-07 {
  color: var(--token-yellow-07);
}
.color-yellow-07\:hover:hover {
  color: var(--token-yellow-07);
}
.color-yellow-08 {
  color: var(--token-yellow-08);
}
.color-yellow-08\:hover:hover {
  color: var(--token-yellow-08);
}
.color-yellow-09 {
  color: var(--token-yellow-09);
}
.color-yellow-09\:hover:hover {
  color: var(--token-yellow-09);
}
.color-yellow-10 {
  color: var(--token-yellow-10);
}
.color-yellow-10\:hover:hover {
  color: var(--token-yellow-10);
}
.color-yellow-20 {
  color: var(--token-yellow-20);
}
.color-yellow-20\:hover:hover {
  color: var(--token-yellow-20);
}
.color-yellow-30 {
  color: var(--token-yellow-30);
}
.color-yellow-30\:hover:hover {
  color: var(--token-yellow-30);
}
.color-yellow-40 {
  color: var(--token-yellow-40);
}
.color-yellow-40\:hover:hover {
  color: var(--token-yellow-40);
}
.color-yellow-50 {
  color: var(--token-yellow-50);
}
.color-yellow-50\:hover:hover {
  color: var(--token-yellow-50);
}
.color-yellow-60 {
  color: var(--token-yellow-60);
}
.color-yellow-60\:hover:hover {
  color: var(--token-yellow-60);
}
.color-yellow-70 {
  color: var(--token-yellow-70);
}
.color-yellow-70\:hover:hover {
  color: var(--token-yellow-70);
}
.color-yellow-80 {
  color: var(--token-yellow-80);
}
.color-yellow-80\:hover:hover {
  color: var(--token-yellow-80);
}
.color-yellow-90 {
  color: var(--token-yellow-90);
}
.color-yellow-90\:hover:hover {
  color: var(--token-yellow-90);
}
.color-yellow\:hover:hover {
  color: var(--token-yellow);
}
.display-block {
  display: block;
}
.display-inline {
  display: inline;
}
.display-inline-block {
  display: inline-block;
}
.display-none {
  display: none;
}
.flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.flex-column-reverse {
  flex-direction: column-reverse;
}
.flex-nowrap {
  flex-wrap: nowrap;
}
.flex-row {
  flex-direction: row;
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}
.font-mono {
  font-family: var(--token-font-mono);
}
.font-sans {
  font-family: var(--token-font-sans);
}
.font-serif {
  font-family: var(--token-font-serif);
}
.font-size-2xl {
  font-size: var(--token-font-size-2xl);
}
.font-size-2xs {
  font-size: var(--token-font-size-2xs);
}
.font-size-3xl {
  font-size: var(--token-font-size-3xl);
}
.font-size-4xl {
  font-size: var(--token-font-size-4xl);
}
.font-size-lg {
  font-size: var(--token-font-size-lg);
}
.font-size-md {
  font-size: var(--token-font-size-md);
}
.font-size-sm {
  font-size: var(--token-font-size-sm);
}
.font-size-xl {
  font-size: var(--token-font-size-xl);
}
.font-size-xs {
  font-size: var(--token-font-size-xs);
}
.justify-content-around {
  justify-content: space-around;
}
.justify-content-between {
  justify-content: space-between;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-end {
  justify-content: flex-end;
}
.justify-content-start {
  justify-content: flex-start;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-scroll {
  overflow: scroll;
}
.overflow-visible {
  overflow: visible;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.overflow-x-scroll {
  overflow-x: scroll;
}
.overflow-x-visible {
  overflow-x: visible;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-y-hidden {
  overflow-y: hidden;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.overflow-y-visible {
  overflow-y: visible;
}
.pos-absolute {
  position: absolute;
}
.pos-fixed {
  position: fixed;
}
.pos-inherit {
  position: inherit;
}
.pos-initial {
  position: initial;
}
.pos-relative {
  position: relative;
}
.pos-static {
  position: static;
}
.pos-sticky {
  position: sticky;
}
.pos-unset {
  position: unset;
}
.vis-hidden {
  visibility: hidden;
}
.vis-visible {
  visibility: visible;
}
`);