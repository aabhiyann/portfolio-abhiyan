import React from 'react';

const getChipClasses = (variant, size) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium';

  const variantClasses = {
    default: 'bg-bg-surface border border-border-primary text-text-primary',
    accent: 'bg-accent-primary border-transparent text-white',
    muted: 'bg-bg-surface border border-border-secondary text-text-secondary',
  };

  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

export const Chip = React.forwardRef(
  ({ variant = 'default', size = 'md', className = '', ...props }, ref) => {
    const classes = getChipClasses(variant, size);
    return <span ref={ref} className={`${classes} ${className}`} {...props} />;
  }
);

Chip.displayName = 'Chip';
