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
  // Current Theme: Yellow + Blue (from your original palette)
  light: {
    // Background Colors
    background: '#F1F5F9',      // Light blue-gray
    navbar: '#FFFBEB',          // Warm cream
    surface: '#FFFFFF',         // Pure white
    card: '#FFFFFF',           // Card backgrounds
    
    // Text Colors
    text: '#0F172A',           // Dark slate
    textSecondary: '#64748B',   // Slate gray
    textMuted: '#94A3B8',      // Light slate
    
    // Border Colors
    border: '#A8A29E',         // From your palette
    borderMuted: '#64748B',    // Muted border
  },
  
  // Dark Theme Colors
  dark: {
    // Background Colors
    background: '#1A202C',      // Dark slate
    navbar: '#1A202C',         // Dark slate
    surface: '#2D3748',        // Darker slate
    card: '#2D3748',           // Card backgrounds
    
    // Text Colors
    text: '#F4F4F7',           // Light gray
    textSecondary: '#A0AEC0',   // Medium gray
    textMuted: '#718096',      // Muted gray
    
    // Border Colors
    border: '#4A5568',         // Dark border
    borderMuted: '#718096',    // Muted border
  },

  // Alternative Theme A: Kathmandu Fog
  kathmanduFog: {
    light: {
      background: '#F8FAFC',      // Slate-50
      navbar: '#F8FAFC',         // Slate-50
      surface: '#FFFFFF',        // White
      card: '#FFFFFF',          // White
      text: '#1E293B',           // Slate-800
      textSecondary: '#64748B',  // Slate-500
      textMuted: '#94A3B8',     // Slate-400
      border: '#E2E8F0',        // Slate-200
      borderMuted: '#CBD5E1',   // Slate-300
    },
    dark: {
      background: '#1E293B',      // Slate-800
      navbar: '#1E293B',        // Slate-800
      surface: '#334155',        // Slate-700
      card: '#334155',          // Slate-700
      text: '#F8FAFC',           // Slate-50
      textSecondary: '#94A3B8',  // Slate-400
      textMuted: '#64748B',     // Slate-500
      border: '#475569',        // Slate-600
      borderMuted: '#64748B',   // Slate-500
    },
  },

  // Alternative Theme B: Creative Voltage
  creativeVoltage: {
    light: {
      background: '#F8FAFC',      // Slate-50
      navbar: '#F8FAFC',         // Slate-50
      surface: '#FFFFFF',        // White
      card: '#FFFFFF',          // White
      text: '#1E293B',           // Slate-800
      textSecondary: '#64748B',  // Slate-500
      textMuted: '#94A3B8',     // Slate-400
      border: '#E2E8F0',        // Slate-200
      borderMuted: '#CBD5E1',   // Slate-300
    },
    dark: {
      background: '#1E293B',      // Slate-800
      navbar: '#1E293B',        // Slate-800
      surface: '#334155',        // Slate-700
      card: '#334155',          // Slate-700
      text: '#F8FAFC',           // Slate-50
      textSecondary: '#94A3B8',  // Slate-400
      textMuted: '#64748B',     // Slate-500
      border: '#475569',        // Slate-600
      borderMuted: '#64748B',   // Slate-500
    },
  },
  
  // Accent Colors (Theme-aware)
  accent: {
    // Current Theme: Yellow + Blue
    primary: {
      light: '#F9A825',        // Warm yellow
      dark: '#8B5CF6',         // Purple
    },
    
    secondary: {
      light: '#3B82F6',        // Blue
      dark: '#22C55E',         // Green
    },
    
    hover: {
      light: '#F59E0B',        // Darker yellow
      dark: '#7C3AED',         // Darker purple
    },
    
    focus: {
      light: '#F9A825',        // Yellow focus
      dark: '#8B5CF6',         // Purple focus
    },
  },

  // Kathmandu Fog Accent Colors
  kathmanduFogAccent: {
    primary: {
      light: '#F472B6',        // Pink-400
      dark: '#F472B6',         // Pink-400
    },
    
    secondary: {
      light: '#94A3B8',       // Slate-400
      dark: '#94A3B8',        // Slate-400
    },
    
    hover: {
      light: '#EC4899',       // Pink-500
      dark: '#EC4899',        // Pink-500
    },
    
    focus: {
      light: '#F472B6',       // Pink-400
      dark: '#F472B6',        // Pink-400
    },
  },

  // Creative Voltage Accent Colors
  creativeVoltageAccent: {
    primary: {
      light: '#8B5CF6',       // Violet-500
      dark: '#8B5CF6',        // Violet-500
    },
    
    secondary: {
      light: '#94A3B8',       // Slate-400
      dark: '#94A3B8',        // Slate-400
    },
    
    hover: {
      light: '#7C3AED',       // Violet-600
      dark: '#7C3AED',        // Violet-600
    },
    
    focus: {
      light: '#8B5CF6',       // Violet-500
      dark: '#8B5CF6',        // Violet-500
    },
  },
  
  // State Colors (Universal)
  state: {
    success: '#10B981',        // Green
    warning: '#F59E0B',        // Orange
    error: '#EF4444',          // Red
    info: '#3B82F6',           // Blue
  },
  
  // Semantic Colors
  semantic: {
    // Link Colors
    link: {
      light: '#3B82F6',        // Blue
      dark: '#22C55E',         // Green
    },
    
    // Button Colors
    button: {
      primary: {
        light: '#F9A825',      // Yellow
        dark: '#8B5CF6',       // Purple
      },
      secondary: {
        light: '#3B82F6',      // Blue
        dark: '#22C55E',       // Green
      },
    },
    
    // Chip/Tag Colors
    chip: {
      light: '#3B82F6',        // Blue
      dark: '#22C55E',         // Green
    },
  },

  // Kathmandu Fog Semantic Colors
  kathmanduFogSemantic: {
    link: {
      light: '#F472B6',        // Pink-400
      dark: '#F472B6',         // Pink-400
    },
    
    button: {
      primary: {
        light: '#F472B6',      // Pink-400
        dark: '#F472B6',       // Pink-400
      },
      secondary: {
        light: '#94A3B8',      // Slate-400
        dark: '#94A3B8',       // Slate-400
      },
    },
    
    chip: {
      light: '#F472B6',        // Pink-400
      dark: '#F472B6',         // Pink-400
    },
  },

  // Creative Voltage Semantic Colors
  creativeVoltageSemantic: {
    link: {
      light: '#8B5CF6',        // Violet-500
      dark: '#8B5CF6',         // Violet-500
    },
    
    button: {
      primary: {
        light: '#8B5CF6',      // Violet-500
        dark: '#8B5CF6',       // Violet-500
      },
      secondary: {
        light: '#94A3B8',      // Slate-400
        dark: '#94A3B8',       // Slate-400
      },
    },
    
    chip: {
      light: '#8B5CF6',        // Violet-500
      dark: '#8B5CF6',         // Violet-500
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
  getThemeColor: (colorKey: keyof typeof colors.light, isDark: boolean, theme: string = 'default') => {
    if (theme === 'kathmanduFog') {
      return isDark ? colors.kathmanduFog.dark[colorKey] : colors.kathmanduFog.light[colorKey];
    }
    if (theme === 'creativeVoltage') {
      return isDark ? colors.creativeVoltage.dark[colorKey] : colors.creativeVoltage.light[colorKey];
    }
    return isDark ? colors.dark[colorKey] : colors.light[colorKey];
  },
  
  /**
   * Get accent color based on theme
   */
  getAccentColor: (accentKey: keyof typeof colors.accent, isDark: boolean, theme: string = 'default') => {
    if (theme === 'kathmanduFog') {
      return isDark ? colors.kathmanduFogAccent[accentKey].dark : colors.kathmanduFogAccent[accentKey].light;
    }
    if (theme === 'creativeVoltage') {
      return isDark ? colors.creativeVoltageAccent[accentKey].dark : colors.creativeVoltageAccent[accentKey].light;
    }
    return isDark ? colors.accent[accentKey].dark : colors.accent[accentKey].light;
  },
  
  /**
   * Get semantic color based on theme
   */
  getSemanticColor: (semanticKey: keyof typeof colors.semantic, isDark: boolean, theme: string = 'default') => {
    if (theme === 'kathmanduFog') {
      const semantic = colors.kathmanduFogSemantic[semanticKey];
      if (typeof semantic === 'object' && 'light' in semantic && 'dark' in semantic) {
        return isDark ? semantic.dark : semantic.light;
      }
      return semantic as string;
    }
    if (theme === 'creativeVoltage') {
      const semantic = colors.creativeVoltageSemantic[semanticKey];
      if (typeof semantic === 'object' && 'light' in semantic && 'dark' in semantic) {
        return isDark ? semantic.dark : semantic.light;
      }
      return semantic as string;
    }
    const semantic = colors.semantic[semanticKey];
    if (typeof semantic === 'object' && 'light' in semantic && 'dark' in semantic) {
      return isDark ? semantic.dark : semantic.light;
    }
    return semantic as string;
  },
  
  /**
   * Get CSS custom property for color
   */
  getCSSVar: (colorPath: string) => `var(--color-${colorPath})`,

  /**
   * Get all available themes
   */
  getAvailableThemes: () => {
    return ['default', 'kathmanduFog', 'creativeVoltage'];
  },

  /**
   * Get theme display name
   */
  getThemeDisplayName: (theme: string) => {
    const names = {
      'default': 'Yellow + Blue',
      'kathmanduFog': 'Kathmandu Fog',
      'creativeVoltage': 'Creative Voltage'
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
    if (typeof value === 'object') {
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
    if (typeof value === 'object' && 'light' in value && 'dark' in value) {
      cssVars[`--color-${key}-light`] = value.light;
      cssVars[`--color-${key}-dark`] = value.dark;
    } else {
      cssVars[`--color-${key}`] = value as string;
    }
  });
  
  return cssVars;
};

export default colors;
