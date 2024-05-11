const alphaFormat = (n: number) =>
  new Intl.NumberFormat("en", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  }).format(n);

export const genOklchColorTokens = (
  color: string,
  lightness: number,
  aAxis: number,
  bAxis: number,
  variantMode: "lightness" | "alpha"
) => {
  const shades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const lightnessToken = `--token-${color}-lightness: ${lightness};`;
  const aAxisToken = `--token-${color}-aAxis: ${aAxis};`;
  const bAxisToken = `--token-${color}-bAxis: ${bAxis};`;
  const lightnessParam = `var(--token-${color}-lightness)`;
  const aAxisParam = `var(--token-${color}-aAxis)`;
  const bAxisParam = `var(--token-${color}-bAxis)`;
  const colorBaseName = `--token-${color}`;
  const colorBaseValue = `oklch(${lightnessParam}, ${aAxisParam}, ${bAxisParam})`;
  const colorBaseParam = `${colorBaseName}: ${colorBaseValue};`;
  const colorDefinitions = shades
    .map((n) => {
      const tokenSuffix = n ? `-${alphaFormat(n)}` : "";
      const tokenName = `--token-${color}${tokenSuffix}`;
      const tokenRange = (n * 0.01).toFixed(2);
      const tokenValue =
        variantMode === "alpha"
          ? `oklch(${lightnessParam}, ${aAxisParam}, ${bAxisParam} / ${tokenRange})`
          : `oklch(${tokenRange}, ${aAxisParam}, ${bAxisParam})`;
      const tokenParam = `${tokenName}: ${tokenValue};`;
      return tokenParam;
    })
    .join("\n");
  return `${lightnessToken}\n${aAxisToken}\n${bAxisToken}\n${colorBaseParam}\n${colorDefinitions}`;
};

export const genAlphaColorTokens = (color: string, red: number, green: number, blue: number) => {
  const redToken = `--token-${color}-red: ${red};`;
  const greenToken = `--token-${color}-green: ${green};`;
  const blueToken = `--token-${color}-blue: ${blue};`;
  const shades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const redParam = `var(--token-${color}-red)`;
  const greenParam = `var(--token-${color}-green)`;
  const blueParam = `var(--token-${color}-blue)`;
  const colorBaseName = `--token-${color}`;
  const colorBaseValue = `hsla(${redParam}, ${greenParam}, ${blueParam})`;
  const colorBaseParam = `${colorBaseName}: ${colorBaseValue};`;
  const colorDefinitions = shades
    .map((n) => {
      const tokenSuffix = n ? `-${alphaFormat(n)}` : "";
      const tokenName = `--token-${color}${tokenSuffix}`;
      const tokenValue = `hsla(${redParam}, ${greenParam}, ${blueParam}, ${(n * 0.01).toFixed(2)})`;
      const tokenParam = `${tokenName}: ${tokenValue};`;
      return tokenParam;
    })
    .join("\n");
  return `${redToken}\n${greenToken}\n${blueToken}\n${colorBaseParam}\n${colorDefinitions}`;
};

export const genOpacColorTokens = (color: string, hue: number, saturation: number) => {
  const hueToken = `--token-${color}-hue: ${hue};`;
  const saturationToken = `--token-${color}-saturation: ${saturation}%;`;
  const shades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const hueVar = `var(--token-${color}-hue)`;
  const saturationVar = `var(--token-${color}-saturation)`;
  const colorBaseName = `--token-${color}`;
  const colorBaseValue = `hsl(${hueVar}, ${saturationVar}, 100%)`;
  const colorBaseParam = `${colorBaseName}: ${colorBaseValue};`;
  const colorDefinitions = shades
    .map((n) => {
      const tokenSuffix = n ? `-${alphaFormat(n)}` : "";
      const tokenName = `--token-${color}${tokenSuffix}`;
      const tokenValue = `hsl(${hueVar}, ${saturationVar}, ${n}%)`;
      const tokenParam = `${tokenName}: ${tokenValue};`;
      return tokenParam;
    })
    .join("\n");
  return `${hueToken}\n${saturationToken}\n${colorBaseParam}\n${colorDefinitions}`;
};
