import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const FocusMode = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <TransformWrapper>
          <TransformComponent>
            <motion.img
              src={image.src}
              alt={image.alt}
              className="max-w-screen-xl max-h-screen"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </TransformComponent>
        </TransformWrapper>
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full text-white hover:bg-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="absolute bottom-6 left-6 text-white bg-black/30 p-4 rounded-lg">
          <p className="font-bold">{image.exif?.camera}</p>
          <p>{image.exif?.settings}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FocusMode;
