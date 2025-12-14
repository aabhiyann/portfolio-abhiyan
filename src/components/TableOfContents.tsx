import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  className,
}) => {
  if (items.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`sticky top-24 self-start ${className || ""}`}
    >
      <div className="p-6 rounded-2xl bg-bg-surface/50 border border-border-primary/50">
        <div className="flex items-center gap-2 mb-4">
          <List className="w-4 h-4 text-accent-primary" />
          <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
            Table of Contents
          </h3>
        </div>
        <nav className="space-y-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`block py-1.5 px-2 rounded-md text-sm transition-colors hover:bg-white/5 ${
                item.level === 1
                  ? "font-semibold text-text-primary"
                  : item.level === 2
                    ? "text-text-secondary ml-3"
                    : "text-text-muted ml-6 text-xs"
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default TableOfContents;
