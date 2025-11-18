import React from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const getButtonClasses = (variant: ButtonVariant, size: ButtonSize) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 focus:ring-offset-black";

  const variantClasses = {
    primary: "bg-white text-black hover:bg-gray-200 shadow-lg shadow-black/20",
    secondary:
      "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-md shadow-black/10 hover:shadow-lg hover:shadow-white/5",
    ghost:
      "bg-white/5 backdrop-blur-sm text-white border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all",
    outline:
      "bg-transparent backdrop-blur-sm text-white border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType | typeof Link;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      as: Component = "button",
      variant = "primary",
      size = "md",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const classes = getButtonClasses(variant, size);

    if (Component === "a") {
      return (
        <a
          ref={ref as React.LegacyRef<HTMLAnchorElement>}
          className={`${classes} ${className}`}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    if (Component === Link) {
      return (
        <Link
          ref={ref as React.LegacyRef<HTMLAnchorElement>}
          className={`${classes} ${className}`}
          {...(props as LinkProps)}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.LegacyRef<HTMLButtonElement>}
        className={`${classes} ${className}`}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
