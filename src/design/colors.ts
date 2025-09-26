/**
 * Centralized Color Palette System
 *
 * This file defines all colors used throughout the application.
 * All components should import and use these color tokens instead of hardcoded values.
 *
 * Design Philosophy:
 * - Light Theme: Yellow + Blue (warm, professional)
 * - Dark Theme: Purple + Green (modern, sophisticated)
 * - Consistent naming convention
 * - Semantic color roles
 */

export const colors = {
  // Light Theme: Yellow + Blue
  light: {
    // Background Colors
    background: "#F1F5F9", // Light blue-gray
    navbar: "#FFFBEB", // Warm cream
    surface: "#FFFFFF", // Pure white
    card: "#FFFFFF", // Card backgrounds

    // Text Colors
    text: "#0F172A", // Dark slate
    textSecondary: "#64748B", // Slate gray
    textMuted: "#A0AEC0", // Light gray

    // Border Colors
    border: "#A8A29E", // Warm border
    borderMuted: "#64748B", // Muted border
  },

  // Dark Theme: Purple + Green
  dark: {
    // Background Colors
    background: "#1A202C", // Dark slate
    navbar: "#1A202C", // Dark slate
    surface: "#2D3748", // Darker slate
    card: "#2D3748", // Card backgrounds

    // Text Colors
    text: "#F4F4F7", // Light gray
    textSecondary: "#A0AEC0", // Medium gray
    textMuted: "#718096", // Muted gray

    // Border Colors
    border: "#4A5568", // Dark border
    borderMuted: "#718096", // Muted border
  },

  // Accent Colors (Theme-aware)
  accent: {
    // Light Theme: Yellow + Blue
    primary: {
      light: "#F9A825", // Warm yellow
      dark: "#8B5CF6", // Purple
    },

    secondary: {
      light: "#3B82F6", // Blue
      dark: "#22C55E", // Green
    },

    hover: {
      light: "#F59E0B", // Darker yellow
      dark: "#7C3AED", // Darker purple
    },

    focus: {
      light: "#F9A825", // Yellow focus
      dark: "#8B5CF6", // Purple focus
    },
  },

  // State Colors (Universal)
  state: {
    success: "#10B981", // Green
    warning: "#F59E0B", // Orange
    error: "#EF4444", // Red
    info: "#3B82F6", // Blue
  },

  // Semantic Colors
  semantic: {
    // Link Colors
    link: {
      light: "#3B82F6", // Blue
      dark: "#22C55E", // Green
    },

    // Button Colors
    button: {
      primary: {
        light: "#F9A825", // Yellow
        dark: "#8B5CF6", // Purple
      },
      secondary: {
        light: "#3B82F6", // Blue
        dark: "#22C55E", // Green
      },
    },

    // Chip/Tag Colors
    chip: {
      light: "#3B82F6", // Blue
      dark: "#22C55E", // Green
    },
  },
} as const;

/**
 * Color utility functions
 */
export const colorUtils = {
  /**
   * Get theme-aware color
   */
  getThemeColor: (colorKey: keyof typeof colors.light, isDark: boolean) => {
    return isDark ? colors.dark[colorKey] : colors.light[colorKey];
  },

  /**
   * Get accent color based on theme
   */
  getAccentColor: (accentKey: keyof typeof colors.accent, isDark: boolean) => {
    return isDark
      ? colors.accent[accentKey].dark
      : colors.accent[accentKey].light;
  },

  /**
   * Get semantic color based on theme
   */
  getSemanticColor: (
    semanticKey: keyof typeof colors.semantic,
    isDark: boolean
  ) => {
    const semantic = colors.semantic[semanticKey];
    if (
      typeof semantic === "object" &&
      "light" in semantic &&
      "dark" in semantic
    ) {
      return isDark ? semantic.dark : semantic.light;
    }
    return semantic as unknown as string;
  },

  /**
   * Get CSS custom property for color
   */
  getCSSVar: (colorPath: string) => `var(--color-${colorPath})`,

  /**
   * Get all available themes
   */
  getAvailableThemes: () => {
    return ["default"];
  },

  /**
   * Get theme display name
   */
  getThemeDisplayName: (theme: string) => {
    const names = {
      default: "Yellow + Blue / Purple + Green",
    };
    return names[theme] || theme;
  },
};

/**
 * CSS Custom Properties Generator
 * Generates CSS variables for all colors
 */
export const generateCSSVariables = () => {
  const cssVars: Record<string, string> = {};

  // Light theme variables
  Object.entries(colors.light).forEach(([key, value]) => {
    cssVars[`--color-light-${key}`] = value;
  });

  // Dark theme variables
  Object.entries(colors.dark).forEach(([key, value]) => {
    cssVars[`--color-dark-${key}`] = value;
  });

  // Accent colors
  Object.entries(colors.accent).forEach(([key, value]) => {
    if (typeof value === "object") {
      cssVars[`--color-${key}-light`] = value.light;
      cssVars[`--color-${key}-dark`] = value.dark;
    }
  });

  // State colors
  Object.entries(colors.state).forEach(([key, value]) => {
    cssVars[`--color-${key}`] = value;
  });

  // Semantic colors
  Object.entries(colors.semantic).forEach(([key, value]) => {
    if (typeof value === "object" && "light" in value && "dark" in value) {
      cssVars[`--color-${key}-light`] = value.light;
      cssVars[`--color-${key}-dark`] = value.dark;
    } else {
      cssVars[`--color-${key}`] = value as unknown as string;
    }
  });

  return cssVars;
};

export default colors;
