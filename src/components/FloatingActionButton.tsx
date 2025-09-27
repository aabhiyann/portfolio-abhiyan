import React from 'react';
import { motion } from 'framer-motion';

interface FloatingActionButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick, isOpen }) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-16 h-16 bg-accent-primary text-white rounded-full shadow-lg flex items-center justify-center z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isOpen ? 'Close AI Concierge' : 'Open AI Concierge'}
    >
      <motion.div
        initial={false}
        animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </motion.div>
    </motion.button>
  );
};

export default FloatingActionButton;
