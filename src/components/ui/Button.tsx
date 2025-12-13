import React from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const getButtonClasses = (variant: ButtonVariant, size: ButtonSize) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-accent-primary text-white font-semibold hover:bg-accent-hover shadow-lg hover:shadow-xl",
    secondary:
      "bg-bg-surface text-text-primary border-2 border-border-primary hover:border-accent-primary shadow-md",
    ghost:
      "bg-transparent text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10",
    outline:
      "bg-bg-card text-text-primary border-2 border-border-primary hover:border-accent-primary hover:text-accent-primary",
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
