import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars
import { photographyImages } from "../data/images";

function PhotographyGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % photographyImages.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(photographyImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      selectedIndex === 0 ? photographyImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(photographyImages[prevIndex]);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {photographyImages.map((image, index) => (
          <motion.figure
            key={index}
            className="mb-4 break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => openLightbox(image, index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto group-hover:scale-[1.02] transition duration-300"
              loading="lazy"
            />

            {/* EXIF Overlay on Hover */}
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-sm space-y-1">
                <div className="font-medium">{image.exif?.camera}</div>
                <div className="text-xs opacity-90">{image.exif?.settings}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Next image"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Close lightbox"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* EXIF Details Panel */}
              <div className="p-6 border-t border-black/10 dark:border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Camera & Settings */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-text-light dark:text-text-dark font-heading">
                      Camera Details
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-light dark:text-muted-dark">
                          Camera:
                        </span>
                        <span className="text-text-light dark:text-text-dark font-medium">
                          {selectedImage.exif?.camera}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-light dark:text-muted-dark">
                          Lens:
                        </span>
                        <span className="text-text-light dark:text-text-dark font-medium">
                          {selectedImage.exif?.lens}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-light dark:text-muted-dark">
                          Date:
                        </span>
                        <span className="text-text-light dark:text-text-dark font-medium">
                          {selectedImage.exif?.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Technical Settings */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-text-light dark:text-text-dark font-heading">
                      Technical Settings
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 bg-black/5 dark:bg-white/10 rounded-lg">
                        <div className="text-muted-light dark:text-muted-dark">
                          Focal Length
                        </div>
                        <div className="font-semibold text-text-light dark:text-text-dark">
                          {selectedImage.exif?.focalLength}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-black/5 dark:bg-white/10 rounded-lg">
                        <div className="text-muted-light dark:text-muted-dark">
                          Aperture
                        </div>
                        <div className="font-semibold text-text-light dark:text-text-dark">
                          {selectedImage.exif?.aperture}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-black/5 dark:bg-white/10 rounded-lg">
                        <div className="text-muted-light dark:text-muted-dark">
                          Shutter Speed
                        </div>
                        <div className="font-semibold text-text-light dark:text-text-dark">
                          {selectedImage.exif?.shutterSpeed}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-black/5 dark:bg-white/10 rounded-lg">
                        <div className="text-muted-light dark:text-muted-dark">
                          ISO
                        </div>
                        <div className="font-semibold text-text-light dark:text-text-dark">
                          {selectedImage.exif?.iso}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PhotographyGallery;
