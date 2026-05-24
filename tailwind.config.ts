import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0A1F6E",
          "blue-card": "#0D2B99",
          red: "#CC0000",
          gold: "#FFD700",
          "gold-dark": "#B8860B",
          cream: "#FFF8E7",
          story: "#8B2500",
          footer: "#050F3D",
        },
      },
      fontFamily: {
        pacifico: ["var(--font-pacifico)", "cursive"],
        dancing: ["var(--font-dancing)", "cursive"],
        oswald: ["var(--font-oswald)", "sans-serif"],
        sans: ["var(--font-open-sans)", "sans-serif"],
      },
      keyframes: {
        pulse: {
          "0%": { opacity: "0.3" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        pulse: "pulse 2.5s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
