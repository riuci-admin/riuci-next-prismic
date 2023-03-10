/** @type {import('tailwindcss').Config} */
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
  daisyui: {
    themes: [
      {
        riuci: {
          primary: "#1B4C25",
          secondary: "#A8CA45",
          accent: "#F7FFF0",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
