// Custom theme configuration for shadcn/ui
// This theme is designed for a luxury real estate website

export const luxuryTheme = {
  extend: "new-york",
  base: {
    radius: "0", // Sharp edges for modern luxury feel
    font: {
      sans: "Montserrat",
      serif: "Playfair Display",
    },
  },
  colors: {
    primary: {
      DEFAULT: "#c8a97e", // Gold/brass luxury accent
      foreground: "#ffffff",
    },
    secondary: {
      DEFAULT: "#1a1a1a", // Near black for contrast
      foreground: "#ffffff",
    },
    background: "#ffffff",
    foreground: "#1a1a1a",
    muted: {
      DEFAULT: "#f5f5f5",
      foreground: "#737373",
    },
    accent: {
      DEFAULT: "#f8f5f0", // Soft cream accent
      foreground: "#1a1a1a",
    },
    card: {
      DEFAULT: "#ffffff",
      foreground: "#1a1a1a",
    },
    border: "#e5e5e5",
  },
};