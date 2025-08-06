/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "serif"],
        londrina: ["Londrina Outline", "serif"],
      },
      colors: {
        primary: "#77b430",
        secondary: "#293240",
      },
      container: {
        screens: {
          sm: "100%",
          md: "768px",
          lg: "1024px",
          xl: "1170px",
        },
      },
    },
  },
  plugins: [],
};
