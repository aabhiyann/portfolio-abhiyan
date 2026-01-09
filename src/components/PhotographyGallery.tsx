import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { photographyImages } from "../data/images";
import { ImageMetadata } from "../types/image";
import FocusMode from "./FocusMode";
import LazyImage from "./LazyImage";

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function PhotographyGallery({ limit }: { limit?: number }) {
  const [selectedImage, setSelectedImage] = useState<ImageMetadata | null>(
    null,
  );

  // Randomize photos once on component mount
  const shuffledImages = useMemo(
    () => shuffleArray(photographyImages),
    [], // Empty deps = shuffle only once per mount
  );

  const openLightbox = (image: ImageMetadata) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="columns-2 md:columns-3 xl:columns-4 2xl:columns-5 gap-2 md:gap-4 [column-fill:_balance] space-y-2 md:space-y-4">
        {shuffledImages.length === 0 ? (
          <div className="col-span-full py-24 text-center">
            <div className="inline-block p-8 rounded-3xl glass-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-accent-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                No Photos Yet
              </h3>
              <p className="text-text-muted">
                Check back soon for new photography!
              </p>
            </div>
          </div>
        ) : (
          shuffledImages.slice(0, limit).map((image, index) => (
            <motion.figure
              key={index}
              className="relative mb-2 md:mb-4 break-inside-avoid rounded-xl overflow-hidden border border-border-primary/50 group cursor-pointer bg-card/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(image)}
            >
              <div className="overflow-hidden">
                <LazyImage
                  src={image.src}
                  thumbnailSrc={image.thumbnailSrc}
                  alt={image.alt}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* EXIF Overlay on Hover */}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-end">
                <div className="text-white/90 text-sm font-medium tracking-wide">
                  {image.exif?.focalLength} · {image.exif?.settings}
                </div>
              </figcaption>
            </motion.figure>
          ))
        )}
      </div>

      {/* Focus Mode Modal */}
      <FocusMode
        image={selectedImage}
        onClose={closeLightbox}
        onNext={() => {
          if (!selectedImage) return;
          const currentIndex = shuffledImages.findIndex(
            (img) => img.src === selectedImage.src,
          );
          // Only loop if we have multiple images
          if (shuffledImages.length > 1) {
            const nextIndex = (currentIndex + 1) % shuffledImages.length;
            setSelectedImage(shuffledImages[nextIndex]);
          }
        }}
        onPrev={() => {
          if (!selectedImage) return;
          const currentIndex = shuffledImages.findIndex(
            (img) => img.src === selectedImage.src,
          );
          if (shuffledImages.length > 1) {
            const prevIndex =
              (currentIndex - 1 + shuffledImages.length) %
              shuffledImages.length;
            setSelectedImage(shuffledImages[prevIndex]);
          }
        }}
        hasNext={shuffledImages.length > 1}
        hasPrev={shuffledImages.length > 1}
      />
    </>
  );
}

export default PhotographyGallery;
