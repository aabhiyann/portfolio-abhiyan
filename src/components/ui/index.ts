/**
 * UI Components Index
 * 
 * Centralized exports for all UI components.
 * This ensures consistent imports across the application.
 */

export { Button } from './Button';
export type { ButtonProps } from './Button';

export { Card } from './Card';
export type { CardProps } from './Card';

export { Typography } from './Typography';
export type { TypographyProps } from './Typography';

export { Chip } from './Chip';
export type { ChipProps } from './Chip';

// Re-export design system utilities for convenience
export { colorUtils } from '../../design/colors';
export { designSystem } from '../../design/system';
