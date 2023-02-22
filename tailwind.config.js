module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./slices/**/*.js"],
  theme: {
    fontFamily: {
      sans: 'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      colors: {
        "green-light": "#F7FFF0",
        "green-soft": "#AAC947",
        "green-medium": "#47833F",
        "green-dark": "#1B4C25",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
