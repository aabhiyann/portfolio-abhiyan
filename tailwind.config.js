/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Theme-aware colors using CSS custom properties
        // These will be defined in index.css and updated by ThemeContext
        
        // Background colors
        "bg-primary": "var(--color-bg-primary)",
        "bg-secondary": "var(--color-bg-secondary)",
        "bg-surface": "var(--color-bg-surface)",
        "bg-card": "var(--color-bg-card)",
        
        // Text colors
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        
        // Border colors
        "border-primary": "var(--color-border-primary)",
        "border-secondary": "var(--color-border-secondary)",
        
        // Accent colors
        "accent-primary": "var(--color-accent-primary)",
        "accent-secondary": "var(--color-accent-secondary)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-focus": "var(--color-accent-focus)",
        
        // State colors
        "success": "var(--color-success)",
        "warning": "var(--color-warning)",
        "error": "var(--color-error)",
        "info": "var(--color-info)",
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
