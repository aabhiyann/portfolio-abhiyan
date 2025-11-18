import React from "react";

type ChipVariant = "default" | "accent" | "muted";
type ChipSize = "sm" | "md" | "lg";

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: ChipVariant;
  size?: ChipSize;
  children?: React.ReactNode;
}

const getChipClasses = (variant: ChipVariant, size: ChipSize) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-medium";

  const variantClasses = {
    default:
      "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-md shadow-black/10",
    accent: "bg-white text-black border-transparent shadow-lg",
    muted:
      "bg-white/10 backdrop-blur-md border border-white/20 text-white/70 shadow-sm shadow-black/5",
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
    ref
  ) => {
    const classes = getChipClasses(variant, size);
    return (
      <span ref={ref} className={`${classes} ${className}`} {...props}>
        {children}
      </span>
    );
  }
);

Chip.displayName = "Chip";
