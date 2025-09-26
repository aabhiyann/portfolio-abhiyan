/**
 * Standardized Typography Component
 *
 * A centralized typography component that follows the design system standards.
 * All text in the application should use this component for consistency.
 * 
 * Features:
 * - Theme-aware styling
 * - Consistent prop interface
 * - Design system integration
 * - Semantic HTML elements
 */

import React from "react";
import { colorUtils } from "../../design/colors";
import { designSystem } from "../../design/system";

export interface TypographyProps {
  children: React.ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "caption"
    | "small";
  color?: "primary" | "secondary" | "muted" | "accent";
  isDark?: boolean;
  currentTheme?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body",
  color = "primary",
  isDark = false,
  currentTheme = "default",
  className = "",
  style = {},
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "h1":
        return {
          fontSize: designSystem.typography.fontSize["6xl"],
          fontWeight: designSystem.typography.fontWeight.bold,
          lineHeight: designSystem.typography.lineHeight.tight,
          fontFamily: designSystem.typography.fontFamily.heading,
        };
      case "h2":
        return {
          fontSize: designSystem.typography.fontSize["5xl"],
          fontWeight: designSystem.typography.fontWeight.bold,
          lineHeight: designSystem.typography.lineHeight.snug,
          fontFamily: designSystem.typography.fontFamily.heading,
        };
      case "h3":
        return {
          fontSize: designSystem.typography.fontSize["3xl"],
          fontWeight: designSystem.typography.fontWeight.semibold,
          lineHeight: designSystem.typography.lineHeight.snug,
          fontFamily: designSystem.typography.fontFamily.heading,
        };
      case "h4":
        return {
          fontSize: designSystem.typography.fontSize["2xl"],
          fontWeight: designSystem.typography.fontWeight.semibold,
          lineHeight: designSystem.typography.lineHeight.snug,
          fontFamily: designSystem.typography.fontFamily.heading,
        };
      case "h5":
        return {
          fontSize: designSystem.typography.fontSize.xl,
          fontWeight: designSystem.typography.fontWeight.semibold,
          lineHeight: designSystem.typography.lineHeight.normal,
          fontFamily: designSystem.typography.fontFamily.heading,
        };
      case "h6":
        return {
          fontSize: designSystem.typography.fontSize.lg,
          fontWeight: designSystem.typography.fontWeight.semibold,
          lineHeight: designSystem.typography.lineHeight.normal,
          fontFamily: designSystem.typography.fontFamily.heading,
        };
      case "body":
        return {
          fontSize: designSystem.typography.fontSize.base,
          fontWeight: designSystem.typography.fontWeight.normal,
          lineHeight: designSystem.typography.lineHeight.relaxed,
          fontFamily: designSystem.typography.fontFamily.body,
        };
      case "caption":
        return {
          fontSize: designSystem.typography.fontSize.sm,
          fontWeight: designSystem.typography.fontWeight.normal,
          lineHeight: designSystem.typography.lineHeight.normal,
          fontFamily: designSystem.typography.fontFamily.body,
        };
      case "small":
        return {
          fontSize: designSystem.typography.fontSize.xs,
          fontWeight: designSystem.typography.fontWeight.normal,
          lineHeight: designSystem.typography.lineHeight.tight,
          fontFamily: designSystem.typography.fontFamily.body,
        };
      default:
        return {};
    }
  };

  const getColorStyles = (): React.CSSProperties => {
    switch (color) {
      case "primary":
        return {
          color: colorUtils.getThemeColor("text", isDark, currentTheme),
        };
      case "secondary":
        return {
          color: colorUtils.getThemeColor("textSecondary", isDark, currentTheme),
        };
      case "muted":
        return {
          color: colorUtils.getThemeColor("textMuted", isDark, currentTheme),
        };
      case "accent":
        return {
          color: colorUtils.getAccentColor("primary", isDark, currentTheme),
        };
      default:
        return {};
    }
  };

  const baseStyles: React.CSSProperties = {
    margin: 0,
    ...getVariantStyles(),
    ...getColorStyles(),
    ...style,
  };

  const getTag = (): keyof React.JSX.IntrinsicElements => {
    switch (variant) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";
      case "h6":
        return "h6";
      case "body":
        return "p";
      case "caption":
        return "span";
      case "small":
        return "small";
      default:
        return "p";
    }
  };

  const Tag = getTag() as React.ElementType;

  return (
    <Tag className={className} style={baseStyles}>
      {children}
    </Tag>
  );
};

export default Typography;
