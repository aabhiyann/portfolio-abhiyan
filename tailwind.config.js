/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#F8F7F4",
          dark: "#1A1A1A",
          accent: "#FF7A00",
        },
      },
      fontFamily: {
        heading: ["Space Grotesk", "system-ui"],
        body: ["Inter", "system-ui"],
      },
    },
  },
  plugins: [],
};
