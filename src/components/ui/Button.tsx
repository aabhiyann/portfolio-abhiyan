import React from 'react';
import { Link } from 'react-router-dom';

const getButtonClasses = (variant, size) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary';

  const variantClasses = {
    primary: 'bg-accent-primary text-white hover:brightness-90',
    secondary: 'bg-accent-secondary text-white hover:brightness-90',
    ghost: 'bg-transparent text-primary border border-border-primary hover:bg-bg-surface',
    outline: 'bg-transparent text-accent-primary border border-accent-primary hover:bg-accent-primary hover:text-white',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

export const Button = React.forwardRef(
  ({ as: Component = 'button', variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const classes = getButtonClasses(variant, size);

    if (Component === 'a') {
      return <a ref={ref} className={`${classes} ${className}`} {...props} />;
    }
    if (Component === Link) {
      return <Link ref={ref} className={`${classes} ${className}`} {...props} />;
    }

    return <button ref={ref} className={`${classes} ${className}`} {...props} />;
  }
);

Button.displayName = 'Button';

export default Button;

