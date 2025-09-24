export const Chip = ({ children, className = "", ...props }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm bg-black/5 dark:bg-white/10 text-text-light dark:text-text-dark ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
