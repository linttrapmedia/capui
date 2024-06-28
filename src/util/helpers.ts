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

interface Point {
  x: number;
  y: number;
  v?: number;
}

export function generateBezierCurve(size: number = 100, curvature: number = 0, steps: number = 100): Point[] {
  const p0: Point = { x: 0, y: size }; // Start point (bottom left)
  const p3: Point = { x: size, y: 0 }; // End point (top right)

  // Adjust control points based on curvature
  let p1: Point, p2: Point;
  if (curvature === 0) {
    // Straight line
    p1 = { x: size / 2, y: size / 2 };
    p2 = { x: size / 2, y: size / 2 };
  } else if (curvature > 0) {
    // Positive curvature (upward curve)
    p1 = { x: size * curvature, y: size };
    p2 = { x: size, y: size * curvature };
  } else {
    // Negative curvature (downward curve)
    p1 = { x: 0, y: size * (1 + curvature) };
    p2 = { x: size * (1 + curvature), y: 0 };
  }

  // Function to calculate cubic Bézier point
  function getBezierPoint(t: number, p0: Point, p1: Point, p2: Point, p3: Point): Point {
    const x = (1 - t) ** 3 * p0.x + 3 * (1 - t) ** 2 * t * p1.x + 3 * (1 - t) * t ** 2 * p2.x + t ** 3 * p3.x;
    const y = (1 - t) ** 3 * p0.y + 3 * (1 - t) ** 2 * t * p1.y + 3 * (1 - t) * t ** 2 * p2.y + t ** 3 * p3.y;
    const v = x / size;
    return { x, y, v };
  }

  // Calculate arc lengths at discrete intervals
  const arcLengths = [0];
  let prevPoint = p0;
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const point = getBezierPoint(t, p0, p1, p2, p3);
    const dx = point.x - prevPoint.x;
    const dy = point.y - prevPoint.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    arcLengths.push(arcLengths[i - 1] + length);
    prevPoint = point;
  }
  const totalLength = arcLengths[steps];

  // Generate evenly spaced coordinates based on arc length
  const coordinates: Point[] = [];
  for (let i = 0; i <= steps; i++) {
    const targetLength = (i / steps) * totalLength;
    let t = 0;
    for (let j = 1; j <= steps; j++) {
      if (arcLengths[j] >= targetLength) {
        const ratio = (targetLength - arcLengths[j - 1]) / (arcLengths[j] - arcLengths[j - 1]);
        t = (j - 1 + ratio) / steps;
        break;
      }
    }
    coordinates.push(getBezierPoint(t, p0, p1, p2, p3));
  }

  return coordinates;
}

export const generateColorVariation = (
  hex: string,
  variation: number,
  lightnessScaling: number,
  saturationScaling: number
) => {
  const { hue, saturation, lightness } = hexToHSL(hex);
  const _lightness = lightness >= 100 ? 100 : lightness;
  const _saturation = saturation >= 100 ? 100 : saturation;
  const rangedLightness =
    variation === 50 ? lightness : Math.min(Math.max(_lightness + (variation - 50) * lightnessScaling, 0), 100);
  const rangedSaturation =
    saturation === 0
      ? 0
      : saturation === 50
      ? saturation
      : Math.min(Math.max(_saturation + (variation - 50) * saturationScaling, 0), 100);
  return { hue, saturation: rangedSaturation, lightness: rangedLightness };
};

export const rescaleNumbers = ({ numbers, scale }: { numbers: number[]; scale: number }) => {
  const firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length - 1];
  const scaledNumbers = numbers.map((number) => firstNumber + (number / lastNumber) * scale);
  return scaledNumbers;
};

export function scaleNumbers(
  range: number,
  startValue: number,
  endValue: number,
  curve: number,
  lean: number
): number[] {
  const scaledNumbers: number[] = [];

  const interpolate = (t: number, curve: number, lean: number): number => {
    // Apply lean
    t = Math.pow(t, lean);

    if (curve < 0) {
      return Math.pow(t, 1 + Math.abs(curve)); // Ease-in (slow start, fast end)
    } else if (curve > 0) {
      return 1 - Math.pow(1 - t, 1 + curve); // Ease-out (fast start, slow end)
    } else {
      return t; // Linear
    }
  };

  for (let i = 0; i < range; i++) {
    const t = i / (range - 1); // Normalize t between 0 and 1
    // console.log(`t (${i}):`, t); // Debug log
    const scaledT = interpolate(t, curve, lean);
    // console.log(`scaledT (${i}):`, scaledT); // Debug log
    const scaledValue = startValue + scaledT * (endValue - startValue);
    // console.log(`scaledValue (${i}):`, scaledValue); // Debug log
    scaledNumbers.push(scaledValue);
  }

  return scaledNumbers;
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
