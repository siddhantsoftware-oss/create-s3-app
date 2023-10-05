/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#17121c",
        background: "#e5e0eb",
        primary: "#6f5a87",
        secondary: "#ccc2d6",
        accent: "#65527a",
      },
    },
  },
  plugins: [],
};
