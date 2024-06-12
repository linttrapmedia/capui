import { Tokens } from "./state";

export const DARK_THEME: Tokens = {
  colors: {
    accent: ["#FF5A5F", "#FFFFFF"], // Accent color with white text
    black: ["#1F1F1F", "#FFFFFF"], // Black background with white text
    brand: ["#4A90E2", "#FFFFFF"], // Brand color with white text
    error: ["#FF6347", "#FFFFFF"], // Error color with white text
    grey: ["#757575", "#FFFFFF"], // Grey color with white text
    info: ["#3E82FC", "#FFFFFF"], // Info color with white text
    primary: ["#1E88E5", "#FFFFFF"], // Primary color with white text
    secondary: ["#4CAF50", "#FFFFFF"], // Secondary color with white text
    success: ["#00C853", "#FFFFFF"], // Success color with white text
    warning: ["#FFC107", "#1F1F1F"], // Warning color with dark text
    white: ["#FFFFFF", "#1F1F1F"], // White text on dark background
  },
  fonts: {
    primary: "Arial, sans-serif",
    secondary: "Arial, sans-serif",
    tertiary: "Arial, sans-serif",
  },
};

export const LIGHT_THEME: Tokens = {
  colors: {
    accent: ["#FF00FF", "#00FFFF"], // Magenta background with cyan text
    black: ["#000000", "#FFFF00"], // Black background with yellow text
    brand: ["#00FF00", "#FF00FF"], // Bright green background with magenta text
    error: ["#FF0000", "#0000FF"], // Red background with blue text
    grey: ["#808080", "#FF69B4"], // Grey background with hot pink text
    info: ["#0000FF", "#00FF00"], // Blue background with green text
    primary: ["#FFA500", "#8A2BE2"], // Orange background with blue violet text
    secondary: ["#FFFF00", "#000000"], // Yellow background with black text
    success: ["#00FF00", "#FF0000"], // Green background with red text
    warning: ["#FF4500", "#32CD32"], // Orange red background with lime green text
    white: ["#FFFFFF", "#0000FF"], // White background with blue text
  },
  fonts: {
    primary: "'Comic Sans MS', cursive, sans-serif", // Comic Sans for a fun, crazy look
    secondary: "'Comic Sans MS', cursive, sans-serif",
    tertiary: "'Comic Sans MS', cursive, sans-serif",
  },
};
