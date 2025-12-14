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
      {/* Gallery Grid */}
      <div className="columns-2 md:columns-3 gap-2 md:gap-4 [column-fill:_balance] space-y-2 md:space-y-4">
        {photographyImages.slice(0, limit).map((image, index) => (
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
        ))}
      </div>

      {/* Focus Mode Modal */}
      <FocusMode image={selectedImage} onClose={closeLightbox} />
    </>
  );
}

export default PhotographyGallery;
