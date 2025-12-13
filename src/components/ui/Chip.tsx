import React from "react";

type ChipVariant = "default" | "accent" | "muted";
type ChipSize = "sm" | "md" | "lg";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: ChipVariant;
  size?: ChipSize;
  children?: React.ReactNode;
}

const getChipClasses = (variant: ChipVariant, size: ChipSize) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors";

  const variantClasses = {
    default: "bg-bg-surface border border-border-primary text-text-secondary",
    accent:
      "bg-accent-primary/10 text-accent-primary border border-accent-primary/30",
    muted: "bg-bg-surface/50 border border-border-secondary text-text-muted",
  };

  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  (
    { variant = "default", size = "md", className = "", children, ...props },
    ref,
  ) => {
    const classes = getChipClasses(variant, size);
    return (
      <span ref={ref} className={`${classes} ${className}`} {...props}>
        {children}
      </span>
    );
  },
);

Chip.displayName = "Chip";
