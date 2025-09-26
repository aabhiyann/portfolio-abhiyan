/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Colors will be defined here once new palette is provided
      },
      fontFamily: {
        "heading": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.25s ease-out",
        "scale-hover": "scaleHover 0.15s ease-out",
        "bounce-subtle": "bounceSubtle 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleHover: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.02)" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      transitionProperty: {
        "theme": "background-color, color, border-color",
      },
      backdropBlur: {
        "xs": "2px",
      },
    },
  },
  plugins: [],
};
