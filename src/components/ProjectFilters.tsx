import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

interface ProjectFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (_category: string) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12 border-b border-border-primary/60 pb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            "relative pb-2 text-sm font-medium transition-colors duration-300",
            activeCategory === category
              ? "text-text-primary"
              : "text-text-muted hover:text-text-primary",
          )}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute left-0 right-0 bottom-0 h-px bg-accent-primary"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10 uppercase tracking-[0.14em]">
            {category}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
