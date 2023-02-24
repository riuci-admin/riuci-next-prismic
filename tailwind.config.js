module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./slices/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
      },
      colors: {
        "green-light": "#F7FFF0",
        "green-soft": "#A8CA45",
        "green-medium": "#47833F",
        "green-dark": "#1B4C25",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
