/**
 * Reusable Card Component
 * 
 * A centralized card component that uses the design system colors.
 * All cards in the application should use this component for consistency.
 */

import React from 'react';
import { colors, colorUtils } from '../../design/colors';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
  currentTheme?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  isDark = false,
  currentTheme = 'default',
  variant = 'default',
  padding = 'md',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'elevated':
        return {
          backgroundColor: colorUtils.getThemeColor('surface', isDark, currentTheme),
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          border: 'none',
        };
      case 'outlined':
        return {
          backgroundColor: colorUtils.getThemeColor('surface', isDark, currentTheme),
          border: `1px solid ${colorUtils.getThemeColor('border', isDark, currentTheme)}`,
          boxShadow: 'none',
        };
      default:
        return {
          backgroundColor: colorUtils.getThemeColor('surface', isDark, currentTheme),
          border: `1px solid ${colorUtils.getThemeColor('borderMuted', isDark)}`,
          boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        };
    }
  };

  const getPaddingStyles = () => {
    switch (padding) {
      case 'sm':
        return { padding: '1rem' };
      case 'md':
        return { padding: '1.5rem' };
      case 'lg':
        return { padding: '2rem' };
      default:
        return { padding: '1.5rem' };
    }
  };

  const baseStyles: React.CSSProperties = {
    borderRadius: '1rem',
    transition: 'all 0.15s ease',
    ...getVariantStyles(),
    ...getPaddingStyles(),
  };

  return (
    <div
      className={className}
      style={baseStyles}
    >
      {children}
    </div>
  );
};

export default Card;
