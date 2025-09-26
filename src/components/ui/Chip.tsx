/**
 * Standardized Chip Component
 * 
 * A centralized chip component that follows the design system standards.
 * All chips in the application should use this component for consistency.
 * 
 * Features:
 * - Theme-aware styling
 * - Consistent prop interface
 * - Design system integration
 * - Multiple variants and sizes
 */

import React from 'react';
import { colorUtils } from '../../design/colors';
import { designSystem } from '../../design/system';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
  currentTheme?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'default',
  size = 'md',
  isDark = false,
  currentTheme = 'default',
  className = '',
  style = {},
  ...props
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'accent':
        return {
          backgroundColor: colorUtils.getAccentColor('primary', isDark, currentTheme),
          color: 'white',
          border: 'none',
        };
      case 'muted':
        return {
          backgroundColor: colorUtils.getThemeColor('surface', isDark, currentTheme),
          color: colorUtils.getThemeColor('textMuted', isDark, currentTheme),
          border: `1px solid ${colorUtils.getThemeColor('borderMuted', isDark, currentTheme)}`,
        };
      default:
        return {
          backgroundColor: colorUtils.getThemeColor('surface', isDark, currentTheme),
          color: colorUtils.getThemeColor('text', isDark, currentTheme),
          border: `1px solid ${colorUtils.getThemeColor('border', isDark, currentTheme)}`,
        };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return {
          padding: `${designSystem.spacing.xs} ${designSystem.spacing.sm}`,
          fontSize: designSystem.typography.fontSize.xs,
          minHeight: '1.5rem',
        };
      case 'md':
        return {
          padding: `${designSystem.spacing.sm} ${designSystem.spacing.md}`,
          fontSize: designSystem.typography.fontSize.sm,
          minHeight: '1.75rem',
        };
      case 'lg':
        return {
          padding: `${designSystem.spacing.sm} ${designSystem.spacing.lg}`,
          fontSize: designSystem.typography.fontSize.base,
          minHeight: '2rem',
        };
      default:
        return {};
    }
  };

  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: designSystem.borderRadius.full,
    fontWeight: designSystem.typography.fontWeight.medium,
    fontFamily: designSystem.typography.fontFamily.body,
    transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...style,
  };

  return (
    <span
      className={className}
      style={baseStyles}
      {...props}
    >
      {children}
    </span>
  );
};
