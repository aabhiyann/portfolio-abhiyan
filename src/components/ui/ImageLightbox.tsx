import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { X, ZoomIn } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

import ReactDOM from "react-dom";

// ... imports remain the same

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  src,
  alt,
}) => {
  // Prevent scrolling when lightbox is open
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md"
        onClick={onClose}
      >
        {/* Close Button - Moved slightly inward to avoid edge overlap */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[10000] backdrop-blur-md border border-white/10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Container */}
        <div
          className="w-full h-full flex items-center justify-center p-4 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={3}
            centerOnInit
          >
            <TransformComponent
              wrapperClass="!w-full !h-full flex items-center justify-center"
              contentClass="!w-full !h-full flex items-center justify-center"
            >
              <motion.img
                src={src}
                alt={alt}
                // Reduced max dimensions to ensure it doesn't feel "too full"
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              />
            </TransformComponent>
          </TransformWrapper>
        </div>

        {/* Instruction Tooltip */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md flex items-center gap-2 pointer-events-none z-[10000]">
          <ZoomIn className="w-4 h-4" />
          Scroll or pinch to zoom
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};

export default ImageLightbox;
