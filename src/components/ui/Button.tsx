import React from "react";
import { Link } from "react-router-dom";

const getButtonClasses = (variant, size) => {
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

const Button = React.forwardRef(
  (
    {
      as: Component = "button",
      variant = "primary",
      size = "md",
      className = "",
      ...props
    },
    ref
  ) => {
    const classes = getButtonClasses(variant, size);

    if (Component === "a") {
      return <a ref={ref} className={`${classes} ${className}`} {...props} />;
    }
    if (Component === Link) {
      return (
        <Link ref={ref} className={`${classes} ${className}`} {...props} />
      );
    }

    return (
      <button ref={ref} className={`${classes} ${className}`} {...props} />
    );
  }
);

Button.displayName = "Button";

export default Button;
