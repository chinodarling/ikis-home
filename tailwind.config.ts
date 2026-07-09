import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F4EE",
        foreground: "#2E2A26",
        primary: "#B98E5F",
        secondary: "#D8C8B8",
        accent: "#7D6A58"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "2rem"
      }
    }
  },
  plugins: []
};

export default config;
