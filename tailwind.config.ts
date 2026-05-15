import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cabinet Grotesk'", "sans-serif"],
        body: ["'Satoshi'", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#01696f",
          hover: "#0c4e54",
          soft: "#dce9e7",
          dark: "#61a7b1",
          "dark-hover": "#84bbc2",
          "dark-soft": "#20363a",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
