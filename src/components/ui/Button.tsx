/**
 * Standardized Button Component
 * 
 * A centralized button component that follows the design system standards.
 * All buttons in the application should use this component for consistency.
 * 
 * Features:
 * - Theme-aware styling
 * - Consistent prop interface
 * - Design system integration
 * - Accessibility support
 */

import React from 'react';
import { colorUtils } from '../../design/colors';
import { designSystem } from '../../design/system';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
  currentTheme?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isDark = false,
  currentTheme = 'default',
  children,
  className = '',
  style = {},
  ...props
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colorUtils.getAccentColor('primary', isDark, currentTheme),
          color: 'white',
          border: 'none',
          boxShadow: designSystem.shadows.sm,
        };
      case 'secondary':
        return {
          backgroundColor: colorUtils.getAccentColor('secondary', isDark, currentTheme),
          color: 'white',
          border: 'none',
          boxShadow: designSystem.shadows.sm,
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: colorUtils.getThemeColor('text', isDark, currentTheme),
          border: `1px solid ${colorUtils.getThemeColor('border', isDark, currentTheme)}`,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: colorUtils.getAccentColor('primary', isDark, currentTheme),
          border: `1px solid ${colorUtils.getAccentColor('primary', isDark, currentTheme)}`,
        };
      default:
        return {};
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return {
          padding: `${designSystem.spacing.sm} ${designSystem.spacing.md}`,
          fontSize: designSystem.typography.fontSize.sm,
          minHeight: '2rem',
        };
      case 'md':
        return {
          padding: `${designSystem.spacing.md} ${designSystem.spacing.lg}`,
          fontSize: designSystem.typography.fontSize.base,
          minHeight: '2.5rem',
        };
      case 'lg':
        return {
          padding: `${designSystem.spacing.lg} ${designSystem.spacing.xl}`,
          fontSize: designSystem.typography.fontSize.lg,
          minHeight: '3rem',
        };
      default:
        return {};
    }
  };

  const getHoverStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
      case 'secondary':
        return {
          filter: 'brightness(0.9)',
          boxShadow: designSystem.shadows.md,
        };
      case 'ghost':
        return {
          backgroundColor: colorUtils.getThemeColor('surface', isDark, currentTheme),
        };
      case 'outline':
        return {
          backgroundColor: colorUtils.getAccentColor('primary', isDark, currentTheme),
          color: 'white',
        };
      default:
        return {};
    }
  };

  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: designSystem.borderRadius.lg,
    fontWeight: designSystem.typography.fontWeight.medium,
    fontFamily: designSystem.typography.fontFamily.body,
    transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const hoverStyles = getHoverStyles();
    Object.assign(e.currentTarget.style, hoverStyles);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const originalStyles = getVariantStyles();
    Object.assign(e.currentTarget.style, originalStyles);
  };

  const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    e.currentTarget.style.outline = `2px solid ${colorUtils.getAccentColor('focus', isDark, currentTheme)}`;
    e.currentTarget.style.outlineOffset = '2px';
  };

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    e.currentTarget.style.outline = 'none';
    e.currentTarget.style.outlineOffset = '0';
  };

  return (
    <button
      className={className}
      style={baseStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
