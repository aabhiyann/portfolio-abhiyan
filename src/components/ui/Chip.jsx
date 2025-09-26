export const Chip = ({ children, className = "", ...props }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm bg-bg-surface/50 text-text-primary border border-border-primary/20 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
