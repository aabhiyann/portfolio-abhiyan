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
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeCategory === category
              ? "text-white"
              : "text-text-muted hover:text-text-primary hover:bg-bg-surface/50",
          )}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-accent-primary rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
