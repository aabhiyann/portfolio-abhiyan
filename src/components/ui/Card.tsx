import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { useTheme } from '../../contexts/UseTheme';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  style = {},
  interactive = false,
}) => {
  const { themeState } = useTheme();
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

  const getVariantClasses = () => {
    switch (variant) {
      case 'elevated':
        return 'bg-bg-surface shadow-lg';
      case 'outlined':
        return 'bg-bg-surface border border-border-primary';
      default:
        return 'bg-bg-surface border border-border-secondary shadow-sm';
    }
  };

  const getPaddingClasses = () => {
    switch (padding) {
      case 'sm':
        return 'p-4';
      case 'md':
        return 'p-6';
      case 'lg':
        return 'p-8';
      default:
        return 'p-6';
    }
  };

  const baseClasses = 'rounded-xl transition-all duration-300 ease-in-out';

  return (
    <div
      ref={tiltRef}
      className={`${baseClasses} ${getVariantClasses()} ${getPaddingClasses()} ${className}`}
      style={style}
      data-theme={themeState.isDarkMode ? 'dark' : 'light'}
    >
      {children}
    </div>
  );
};

export default Card;
