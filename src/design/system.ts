/**
 * Design System Configuration
 * 
 * Centralized configuration for the entire design system.
 * This file should be imported by all components to ensure consistency.
 */

import { colors, generateCSSVariables } from './colors';

export const designSystem = {
  colors,
  
  // Typography
  typography: {
    fontFamily: {
      heading: '"Space Grotesk", sans-serif',
      body: '"Inter", sans-serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
  },
  
  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Animation
  animation: {
    duration: {
      fast: '150ms',
      normal: '250ms',
      slow: '400ms',
      slower: '600ms',
    },
    easing: {
      easeOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
    },
  },
  
  // Z-Index
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
} as const;

/**
 * CSS Variables for the design system
 */
export const cssVariables = generateCSSVariables();

/**
 * Utility functions for design system
 */
export const designUtils = {
  /**
   * Get responsive value
   */
  responsive: (values: Record<string, string>) => {
    return Object.entries(values)
      .map(([breakpoint, value]) => {
        if (breakpoint === 'base') return value;
        return `@media (min-width: ${designSystem.breakpoints[breakpoint as keyof typeof designSystem.breakpoints]}) { ${value} }`;
      })
      .join(' ');
  },
  
  /**
   * Get theme-aware CSS variable
   */
  getThemeVar: (property: string, isDark: boolean) => {
    return `var(--color-${isDark ? 'dark' : 'light'}-${property})`;
  },
  
  /**
   * Get accent CSS variable
   */
  getAccentVar: (property: string, isDark: boolean) => {
    return `var(--color-${property}-${isDark ? 'dark' : 'light'})`;
  },
};

export default designSystem;
