import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

interface FloatingActionButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onClick,
  isOpen,
}) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-bg-surface border border-border-primary text-text-primary shadow-sm flex items-center justify-center z-40 opacity-85"
      whileHover={{ scale: 1.03, opacity: 1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? "Close site assistant" : "Open site assistant"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.15 }}
          >
            <X className="w-5 h-5" />
          </motion.span>
        ) : (
          <motion.span
            key="chat"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.15 }}
          >
            <MessageCircle className="w-5 h-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default FloatingActionButton;
