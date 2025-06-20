/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./assets/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        doto: ["Doto"],
      },
      colors: {
        primary: "#191919",
        darkgray: "#848484",
        offwhite: "#EBEBEB",
      },
      letterSpacing: {
        tightest: "-0.03em", // then use class: tracking-tightest
      },
    },
  },
  plugins: [],
};
