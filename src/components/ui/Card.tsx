import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { useTheme } from "../../contexts/useTheme";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined";
  padding?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className = "",
      variant = "default",
      padding = "md",
      style = {},
      interactive = false,
      ...props
    },
    ref,
  ) => {
    const { themeState } = useTheme();
    // Internal ref for VanillaTilt
    const internalRef = useRef<HTMLDivElement>(null);

    // Combine refs to support both VanillaTilt and parent refs (Framer Motion)
    const setRefs = (node: HTMLDivElement | null) => {
      internalRef.current = node;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    useEffect(() => {
      if (interactive && internalRef.current) {
        VanillaTilt.init(internalRef.current, {
          max: 3,
          speed: 800,
          glare: true,
          "max-glare": 0.1,
        });
      }
    }, [interactive]);

    const getVariantClasses = () => {
      switch (variant) {
        case "elevated":
          return "bg-white dark:bg-slate-800 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg";
        case "outlined":
          return "bg-transparent border border-slate-200 dark:border-slate-700";
        default:
          // Default card with good contrast
          return "bg-white dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm";
      }
    };

    const getPaddingClasses = () => {
      switch (padding) {
        case "sm":
          return "p-4";
        case "md":
          return "p-6";
        case "lg":
          return "p-8";
        default:
          return "p-6";
      }
    };

    const baseClasses =
      "rounded-xl transition-all duration-300 ease-in-out relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:via-transparent before:to-transparent before:pointer-events-none";

    return (
      <div
        ref={setRefs}
        className={`${baseClasses} ${getVariantClasses()} ${getPaddingClasses()} ${className}`}
        style={style}
        data-theme={themeState.isDarkMode ? "dark" : "light"}
        {...props}
      >
        <div className="relative z-10">{children}</div>
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
