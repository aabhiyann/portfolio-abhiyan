import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { useTheme } from "../../contexts/useTheme";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined";
  padding?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
  style = {},
  interactive = false,
}) => {
  const { themeState } = useTheme();
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (interactive && tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
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
        return "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/20";
      case "outlined":
        return "bg-white/10 backdrop-blur-md border border-white/20";
      default:
        return "bg-white/10 backdrop-blur-md border border-white/20 shadow-md shadow-black/10";
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
      ref={tiltRef}
      className={`${baseClasses} ${getVariantClasses()} ${getPaddingClasses()} ${className}`}
      style={style}
      data-theme={themeState.isDarkMode ? "dark" : "light"}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Card;
