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
        '2xl': '1440px',
        'xl':'950px',
        'lg':'930px'
      },
      fontSize: {
        'xs': '12px', 
        'sm': '14px', 
      },
    },
    plugins: [],
  },
};
export default config;
