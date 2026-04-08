/**
 * Centralized color tokens aligned with current runtime palette in index.css.
 * Keep this file in sync with CSS custom properties.
 */

export const colors = {
  light: {
    background: "#faf7f2",
    navbar: "#faf7f2",
    surface: "#f4efe8",
    card: "#fffdf9",
    text: "#24292f",
    textSecondary: "#57606a",
    textMuted: "#6e7781",
    border: "#dcd3c6",
    borderMuted: "#e8e1d5",
  },
  dark: {
    background: "#0d1117",
    navbar: "#0d1117",
    surface: "#161b22",
    card: "#0d1117",
    text: "#c9d1d9",
    textSecondary: "#8b949e",
    textMuted: "#6e7681",
    border: "#3d444d",
    borderMuted: "#2d333b",
  },
  accent: {
    primary: { light: "#dc7d47", dark: "#dc7d47" },
    secondary: { light: "#1f2328", dark: "#1e293b" },
    hover: { light: "#af5312", dark: "#e89060" },
    focus: { light: "#d06517", dark: "#dc7d47" },
  },
  state: {
    success: "#3fb950",
    warning: "#ffa657",
    error: "#f85149",
    info: "#58a6ff",
  },
  semantic: {
    link: { light: "#dc7d47", dark: "#dc7d47" },
    button: {
      primary: { light: "#dc7d47", dark: "#dc7d47" },
      secondary: { light: "#1f2328", dark: "#1e293b" },
    },
    chip: { light: "#dc7d47", dark: "#dc7d47" },
  },
} as const;

export const colorUtils = {
  getThemeColor: (colorKey: keyof typeof colors.light, isDark: boolean) => {
    return isDark ? colors.dark[colorKey] : colors.light[colorKey];
  },
  getAccentColor: (accentKey: keyof typeof colors.accent, isDark: boolean) => {
    return isDark
      ? colors.accent[accentKey].dark
      : colors.accent[accentKey].light;
  },
  getSemanticColor: (
    semanticKey: keyof typeof colors.semantic,
    isDark: boolean,
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
  getCSSVar: (colorPath: string) => `var(--color-${colorPath})`,
  getAvailableThemes: () => ["default"],
  getThemeDisplayName: () => "Warm Cream / GitHub Dark",
};

export const generateCSSVariables = () => {
  const cssVars: Record<string, string> = {};

  Object.entries(colors.light).forEach(([key, value]) => {
    cssVars[`--color-light-${key}`] = value;
  });

  Object.entries(colors.dark).forEach(([key, value]) => {
    cssVars[`--color-dark-${key}`] = value;
  });

  Object.entries(colors.accent).forEach(([key, value]) => {
    cssVars[`--color-${key}-light`] = value.light;
    cssVars[`--color-${key}-dark`] = value.dark;
  });

  Object.entries(colors.state).forEach(([key, value]) => {
    cssVars[`--color-${key}`] = value;
  });

  Object.entries(colors.semantic).forEach(([key, value]) => {
    if (typeof value === "object" && "light" in value && "dark" in value) {
      cssVars[`--color-${key}-light`] = value.light;
      cssVars[`--color-${key}-dark`] = value.dark;
    }
  });

  return cssVars;
};

export default colors;
