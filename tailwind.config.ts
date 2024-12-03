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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brandGreen: "#00E96F",
        brandBlue: "#4F76F6",
        brandDarkBlue: "#3A57B5",
        brandBg: "#1F2B37",
        brandWhite: "#F9F9F9",
        brandDark: "#212120",
      },
    },
  },
  plugins: [],
};
export default config;
