import React from "react";

const getChipClasses = (variant, size) => {
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

export const Chip = React.forwardRef(
  ({ variant = "default", size = "md", className = "", ...props }, ref) => {
    const classes = getChipClasses(variant, size);
    return <span ref={ref} className={`${classes} ${className}`} {...props} />;
  }
);

Chip.displayName = "Chip";
