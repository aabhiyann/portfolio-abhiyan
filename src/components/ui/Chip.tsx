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
    default:
      "bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300",
    accent:
      "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800",
    muted:
      "bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-500",
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
