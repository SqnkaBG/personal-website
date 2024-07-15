// tailwind.config.ts

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
        "neon-blue": "#3437d3",
      },
      textShadow: {
        neon: "0 0 10px #3437d3, 0 0 20px #3437d3, 0 0 30px #3437d3, 0 0 40px #3437d3, 0 0 50px #3437d3, 0 0 60px #3437d3, 0 0 70px #3437d3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

export default config;
