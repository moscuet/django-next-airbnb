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
        "air-bnb": "#ff385c",
        "air-bnb-dark": "#d50027",
      },
      screens: {
        xs: "550px",
        sm: "640px",
        md: "768px",
        lg: "930px",
        xl: "950px",
        "2xl": "1130px",
        "3xl": "1440px",
        "4xl": "1540px",
        "5xl": "1640px",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
      },
      aspectRatio: {
        '3/2': '3 / 2',
      }
    },
    // corePlugins: {
    //   aspectRatio: false,
    // },
    plugins: [
      // require("@tailwindcss/aspect-ratio")
    ],
  },
};
export default config;
