import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "",
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-violet-600";
  
  const variants = {
    primary: "bg-accent text-white hover:brightness-95 shadow-sm hover:shadow-md",
    ghost: "border border-black/10 dark:border-white/10 text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5",
    outline: "border border-accent text-accent hover:bg-accent hover:text-white",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
