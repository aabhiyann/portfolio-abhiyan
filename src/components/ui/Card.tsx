/**
 * Standardized Card Component
 * 
 * A centralized card component that follows the design system standards.
 * All cards in the application should use this component for consistency.
 * 
 * Features:
 * - Theme-aware styling
 * - Consistent prop interface
 * - Design system integration
 * - Multiple variants and sizes
 */

import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { colorUtils } from '../../design/colors';
import { designSystem } from '../../design/system';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
  currentTheme?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  isDark = false,
  currentTheme = 'default',
  variant = 'default',
  padding = 'md',
  style = {},
  interactive = false,
}) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (interactive && tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 3,
        speed: 800,
        glare: true,
        'max-glare': 0.1,
      });
    }
  }, [interactive]);

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'elevated':
        return {
          backgroundColor: colorUtils.getThemeColor('surface', isDark, currentTheme),
          boxShadow: designSystem.shadows.lg,
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
          border: `1px solid ${colorUtils.getThemeColor('borderMuted', isDark, currentTheme)}`,
          boxShadow: designSystem.shadows.sm,
        };
    }
  };

  const getPaddingStyles = (): React.CSSProperties => {
    switch (padding) {
      case 'sm':
        return { padding: designSystem.spacing.md };
      case 'md':
        return { padding: designSystem.spacing.lg };
      case 'lg':
        return { padding: designSystem.spacing.xl };
      default:
        return { padding: designSystem.spacing.lg };
    }
  };

  const baseStyles: React.CSSProperties = {
    borderRadius: designSystem.borderRadius.xl,
    transition: `all ${designSystem.animation.duration.normal} ${designSystem.animation.easing.easeInOut}`,
    ...getVariantStyles(),
    ...getPaddingStyles(),
    ...style,
  };

  return (
    <div
      ref={tiltRef}
      className={className}
      style={baseStyles}
    >
      {children}
    </div>
  );
};

export default Card;
