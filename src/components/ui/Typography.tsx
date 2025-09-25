/**
 * Reusable Typography Component
 *
 * A centralized typography component that uses the design system.
 * All text in the application should use this component for consistency.
 */

import React from "react";
import { colors, colorUtils } from "../../design/colors";

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
  const getVariantStyles = () => {
    switch (variant) {
      case "h1":
        return {
          fontSize: "3.75rem",
          fontWeight: "700",
          lineHeight: "1.1",
          fontFamily: "var(--font-family-heading)",
        };
      case "h2":
        return {
          fontSize: "3rem",
          fontWeight: "700",
          lineHeight: "1.2",
          fontFamily: "var(--font-family-heading)",
        };
      case "h3":
        return {
          fontSize: "1.875rem",
          fontWeight: "600",
          lineHeight: "1.3",
          fontFamily: "var(--font-family-heading)",
        };
      case "h4":
        return {
          fontSize: "1.5rem",
          fontWeight: "600",
          lineHeight: "1.4",
          fontFamily: "var(--font-family-heading)",
        };
      case "h5":
        return {
          fontSize: "1.25rem",
          fontWeight: "600",
          lineHeight: "1.5",
          fontFamily: "var(--font-family-heading)",
        };
      case "h6":
        return {
          fontSize: "1.125rem",
          fontWeight: "600",
          lineHeight: "1.5",
          fontFamily: "var(--font-family-heading)",
        };
      case "body":
        return {
          fontSize: "1rem",
          fontWeight: "400",
          lineHeight: "1.6",
          fontFamily: "var(--font-family-body)",
        };
      case "caption":
        return {
          fontSize: "0.875rem",
          fontWeight: "400",
          lineHeight: "1.5",
          fontFamily: "var(--font-family-body)",
        };
      case "small":
        return {
          fontSize: "0.75rem",
          fontWeight: "400",
          lineHeight: "1.4",
          fontFamily: "var(--font-family-body)",
        };
      default:
        return {};
    }
  };

  const getColorStyles = () => {
    switch (color) {
      case "primary":
        return {
          color: colorUtils.getThemeColor("text", isDark, currentTheme),
        };
      case "secondary":
        return {
          color: colorUtils.getThemeColor(
            "textSecondary",
            isDark,
            currentTheme
          ),
        };
      case "muted":
        return {
          color: colorUtils.getThemeColor("textMuted", isDark),
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

  const getTag = () => {
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

  const Tag = getTag() as keyof JSX.IntrinsicElements;

  return (
    <Tag className={className} style={baseStyles}>
      {children}
    </Tag>
  );
};

export default Typography;
