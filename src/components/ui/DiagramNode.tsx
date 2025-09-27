import React from 'react';
import { motion } from 'framer-motion';

interface DiagramNodeProps {
  label: string;
  position: { x: number; y: number };
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const DiagramNode: React.FC<DiagramNodeProps> = ({ label, position, onHoverStart, onHoverEnd }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="absolute p-4 bg-surface-light dark:bg-surface-dark border border-black/10 dark:border-white/10 rounded-lg shadow-md cursor-pointer"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {label}
    </motion.div>
  );
};

export default DiagramNode;
