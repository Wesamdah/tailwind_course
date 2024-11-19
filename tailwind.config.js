/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        wideScreen: { raw: "(min-aspect-ratio:3/2)" },
        // tallScreen: { raw: "(min-aspect-ratio:1/2)" },
        tallScreen: { raw: "(max-aspect-ratio:13/20)" },
        tabletScreen: {
          raw: "(min-aspect-ratio: 13/20) and (max-aspect-ratio: 3/2)",
        },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forward ",
      },
    },
  },
  plugins: [],
};
