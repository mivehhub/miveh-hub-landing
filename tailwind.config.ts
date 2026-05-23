import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E0E11",
        bone: "#F4F1EA",
        mist: "#A7A7A7",
        line: "#242428",
        purple: "#683A96",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      letterSpacing: {
        wideish: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
