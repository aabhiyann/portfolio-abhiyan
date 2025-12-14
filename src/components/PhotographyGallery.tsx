import { useState } from "react";
import { motion } from "framer-motion";
import { photographyImages } from "../data/images";
import { ImageMetadata } from "../types/image";
import FocusMode from "./FocusMode";
import LazyImage from "./LazyImage";

function PhotographyGallery({ limit }: { limit?: number }) {
  const [selectedImage, setSelectedImage] = useState<ImageMetadata | null>(
    null,
  );

  const openLightbox = (image: ImageMetadata) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Gallery Grid - Pinterest-style Bento on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
        {photographyImages.slice(0, limit).map((image, index) => {
          // Create varying heights for Pinterest-style bento grid
          const patterns = [
            "row-span-1", // normal
            "row-span-2", // tall
            "row-span-1", // normal
            "row-span-1", // normal
            "row-span-2", // tall
            "row-span-1 sm:col-span-2", // wide on tablet+
          ];
          const pattern = patterns[index % patterns.length];

          return (
            <motion.figure
              key={index}
              className={`relative break-inside-avoid rounded-xl overflow-hidden border border-border-primary/50 group cursor-pointer bg-card/50 ${pattern}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
              onClick={() => openLightbox(image)}
            >
              <div className="overflow-hidden h-full">
                <LazyImage
                  src={image.src}
                  thumbnailSrc={image.thumbnailSrc}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* EXIF Overlay on Hover */}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-end">
                <div className="text-white/90 text-sm font-medium tracking-wide">
                  {image.exif?.focalLength} · {image.exif?.settings}
                </div>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>

      {/* Focus Mode Modal */}
      <FocusMode image={selectedImage} onClose={closeLightbox} />
    </>
  );
}

export default PhotographyGallery;
