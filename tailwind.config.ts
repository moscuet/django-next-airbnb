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
        'air-bnb':'#ff385c',
        'air-bnb-dark':'#d50027'
      },
      screens: {
        'xl': '1440px',
      },
    },
    plugins: [],
  },
};
export default config;
