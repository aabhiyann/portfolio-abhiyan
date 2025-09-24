/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Custom color tokens
        "light-bg": "#F8F7F4",
        "dark-bg": "#1A1A1A",
        accent: "#FF7A00",
        "accent-ink": "#2A1A07",
        surface: {
          light: "#FFFFFF",
          dark: "#151821",
        },
        text: {
          light: "#333333",
          dark: "#E0E0E0",
        },
        muted: {
          light: "#6B7280",
          dark: "#98A1B3",
        },
        // State colors
        info: "#3B82F6",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.25s ease-out",
        "scale-hover": "scaleHover 0.15s ease-out",
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
      },
    },
  },
  plugins: [],
};
