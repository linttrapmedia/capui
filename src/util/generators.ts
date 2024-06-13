export function hexToHSL(hex: string) {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    hue: Math.round(h * 360),
    saturation: Math.round(s * 100),
    lightness: Math.round(l * 100),
  };
}

// // Function to generate HSL variations
// export function generateHSLVariations(hexColor: string): { [key: number]: string } {
//   const [baseHue, baseSaturation, baseLightness] = hexToHSL(hexColor);

//   const variations: { [key: number]: string } = {};
//   for (let i = 1; i <= 9; i++) {
//     const suffix = i * 100;
//     let variationLightness: number;

//     if (suffix < 500) {
//       variationLightness = baseLightness - (500 - suffix) * 0.1;
//     } else if (suffix > 500) {
//       variationLightness = baseLightness + (suffix - 500) * 0.1;
//     } else {
//       variationLightness = baseLightness;
//     }

//     // Ensure lightness stays within 0-100 range
//     variationLightness = Math.max(0, Math.min(100, variationLightness));

//     variations[suffix] = `hsl(${baseHue.toFixed(1)}, ${baseSaturation.toFixed(1)}%, ${variationLightness.toFixed(1)}%)`;
//   }

//   return variations;
// }

// // Function to generate HSL variations
// export function generateHSLcontrastVariations(hexColor: string): { [key: number]: string } {
//   const [baseHue, baseSaturation, baseLightness] = hexToHSL(hexColor);

//   const variations: { [key: number]: string } = {};
//   for (let i = 1; i <= 9; i++) {
//     const suffix = i * 100;
//     let variationLightness: number;

//     if (suffix > 500) {
//       variationLightness = baseLightness + (500 - suffix) * 0.1;
//     } else if (suffix < 500) {
//       variationLightness = baseLightness - (suffix - 500) * 0.1;
//     } else {
//       variationLightness = baseLightness;
//     }

//     // Ensure lightness stays within 0-100 range
//     variationLightness = Math.max(0, Math.min(100, variationLightness));

//     variations[suffix] = `hsl(${baseHue.toFixed(1)}, ${baseSaturation.toFixed(1)}%, ${variationLightness.toFixed(1)}%)`;
//   }

//   return variations;
// }

// // Example usage
// const baseColorHex = "#3498db"; // Replace with your fundamental color
// const colorVariations = generateHSLVariations(baseColorHex);

// console.log(colorVariations);
