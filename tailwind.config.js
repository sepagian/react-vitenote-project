/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
    },
  },
  daisyui: {
    theme: ["light", "dark"],
  },
  plugins: [require("daisyui")],
};
