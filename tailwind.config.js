/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        vert: "#617f67",
        creme: "#fff6e7",
      },
      fontFamily: {
        inter: ["Inter"],
        poppins: ["Poppins"],
      },
    },
    screens: {
      xs: { min: "320px", max: "480px" },
      sm: "481px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
