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
  // Light Theme Options
  light: {
    // Option 1: Clean & Modern (Default)
    background: "#FAFAFA", // Clean white-gray
    navbar: "#FFFFFF", // Pure white
    surface: "#FFFFFF", // Pure white
    card: "#FFFFFF", // Card backgrounds

    // Text Colors - Better contrast
    text: "#1A1A1A", // Near black for better readability
    textSecondary: "#4A5568", // Darker gray for better contrast
    textMuted: "#718096", // Medium gray for subtle text

    // Border Colors
    border: "#E2E8F0", // Light gray border
    borderMuted: "#F1F5F9", // Very light border
  },

  // Alternative Light Theme: Warm & Professional
  lightWarm: {
    background: "#FEFEFE", // Warm white
    navbar: "#FDF6E3", // Warm cream
    surface: "#FFFFFF", // Pure white
    card: "#FFFFFF", // Card backgrounds

    text: "#2D3748", // Dark gray
    textSecondary: "#4A5568", // Medium dark gray
    textMuted: "#718096", // Medium gray

    border: "#D6D3D1", // Warm border
    borderMuted: "#F3F4F6", // Light warm border
  },

  // Alternative Light Theme: Cool & Minimal
  lightCool: {
    background: "#F8FAFC", // Cool white
    navbar: "#F1F5F9", // Cool light gray
    surface: "#FFFFFF", // Pure white
    card: "#FFFFFF", // Card backgrounds

    text: "#0F172A", // Dark slate
    textSecondary: "#475569", // Slate gray
    textMuted: "#64748B", // Light slate

    border: "#CBD5E1", // Cool border
    borderMuted: "#E2E8F0", // Light cool border
  },

  // Dark Theme: Purple + Green
  dark: {
    // Background Colors
    background: "#0F172A", // Darker slate for better contrast
    navbar: "#0F172A", // Darker slate
    surface: "#1E293B", // Dark slate
    card: "#1E293B", // Card backgrounds

    // Text Colors - Better contrast
    text: "#F8FAFC", // Near white for better readability
    textSecondary: "#CBD5E1", // Light gray for better contrast
    textMuted: "#94A3B8", // Medium light gray for subtle text

    // Border Colors
    border: "#334155", // Dark border
    borderMuted: "#475569", // Muted border
  },

  // Accent Colors (Theme-aware)
  accent: {
    // Light Theme: Yellow + Blue
    primary: {
      light: "#3B82F6", // Blue
      dark: "#8B5CF6", // Purple
    },

    secondary: {
      light: "#F9A825", // Warm yellow
      dark: "#22C55E", // Green
    },

    hover: {
      light: "#2563EB", // Darker blue
      dark: "#7C3AED", // Darker purple
    },

    focus: {
      light: "#3B82F6", // Blue focus
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
        light: "#3B82F6", // Blue
        dark: "#8B5CF6", // Purple
      },
      secondary: {
        light: "#F9A825", // Yellow
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
  getThemeColor: (colorKey: keyof typeof colors.light, isDark: boolean, themeVariant: string = 'default') => {
    if (isDark) {
      return colors.dark[colorKey];
    }
    
    // Support different light theme variants
    switch (themeVariant) {
      case 'warm':
        return colors.lightWarm[colorKey];
      case 'cool':
        return colors.lightCool[colorKey];
      default:
        return colors.light[colorKey];
    }
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
    return ["default", "warm", "cool"];
  },

  /**
   * Get theme display name
   */
  getThemeDisplayName: (theme: string) => {
    const names: Record<string, string> = {
      default: "Clean & Modern",
      warm: "Warm & Professional", 
      cool: "Cool & Minimal",
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
