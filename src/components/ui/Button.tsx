/**
 * Reusable Button Component
 * 
 * A centralized button component that uses the design system colors.
 * All buttons in the application should use this component for consistency.
 */

import React from 'react';
import { colors, colorUtils } from '../../design/colors';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
  currentTheme?: string;
  children: React.ReactNode;
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
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colorUtils.getAccentColor('primary', isDark, currentTheme),
          color: 'white',
          border: 'none',
          '&:hover': {
            filter: 'brightness(0.9)',
          },
        };
      case 'secondary':
        return {
          backgroundColor: colorUtils.getAccentColor('secondary', isDark, currentTheme),
          color: 'white',
          border: 'none',
          '&:hover': {
            filter: 'brightness(0.9)',
          },
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: colorUtils.getThemeColor('text', isDark, currentTheme),
          border: `1px solid ${colorUtils.getThemeColor('border', isDark, currentTheme)}`,
          '&:hover': {
            backgroundColor: colorUtils.getAccentColor('secondary', isDark, currentTheme),
            color: 'white',
          },
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: colorUtils.getAccentColor('primary', isDark, currentTheme),
          border: `1px solid ${colorUtils.getAccentColor('primary', isDark, currentTheme)}`,
          '&:hover': {
            backgroundColor: colorUtils.getAccentColor('primary', isDark, currentTheme),
            color: 'white',
          },
        };
      default:
        return {};
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
        };
      case 'md':
        return {
          padding: '0.75rem 1.25rem',
          fontSize: '1rem',
        };
      case 'lg':
        return {
          padding: '1rem 1.5rem',
          fontSize: '1.125rem',
        };
      default:
        return {};
    }
  };

  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.75rem',
    fontWeight: '500',
    transition: 'all 0.15s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    border: 'none',
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...style,
  };

  return (
    <button
      className={className}
      style={baseStyles}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
