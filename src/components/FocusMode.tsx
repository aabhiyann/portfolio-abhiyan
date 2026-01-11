import { ChevronLeft, ChevronRight, X as CloseIcon } from "lucide-react";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ImageMetadata } from "../types/image";

interface FocusModeProps {
  image: ImageMetadata | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

const FocusMode: React.FC<FocusModeProps> = ({
  image,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) => {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Trap scroll

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [image, onClose, onNext, onPrev]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center backdrop-blur-sm"
        onClick={onClose}
      >
        <TransformWrapper
          centerOnInit
          initialScale={1}
          minScale={0.5}
          maxScale={3}
        >
          <TransformComponent
            wrapperClass="!w-full !h-full flex items-center justify-center"
            contentClass="!w-full !h-full flex items-center justify-center"
          >
            <div className="relative inline-block">
              <motion.img
                key={image.src} // Key change triggers re-render/animation
                src={image.src}
                alt={image.alt}
                className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
              />

              {/* Glassmorphism EXIF Overlay - positioned relative to image */}
              {image.exif && (
                <div
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[60] px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-3 text-white text-xs">
                    <span>{image.exif.settings}</span>
                    {image.exif.focalLength && (
                      <>
                        <span className="text-white/40">·</span>
                        <span>{image.exif.focalLength}</span>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </TransformComponent>
        </TransformWrapper>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[60] border border-white/10 backdrop-blur-md"
          aria-label="Close gallery"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        {/* Navigation Buttons */}
        {hasPrev && onPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[60] border border-white/10 backdrop-blur-md hidden md:block"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        {hasNext && onNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[60] border border-white/10 backdrop-blur-md hidden md:block"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default FocusMode;
