import React from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const getButtonClasses = (variant: ButtonVariant, size: ButtonSize) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary focus:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-accent-primary text-white hover:bg-accent-hover shadow-lg shadow-accent-primary/20",
    secondary:
      "bg-surface text-text-primary border border-border-primary hover:bg-bg-primary hover:border-accent-primary/50 shadow-md",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary hover:bg-accent-primary/10",
    outline:
      "bg-transparent text-text-primary border border-border-primary hover:border-accent-primary hover:text-accent-primary",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
    ref,
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
  },
);

Button.displayName = "Button";

export default Button;
