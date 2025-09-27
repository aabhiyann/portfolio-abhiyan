import { useState } from "react";
import { motion } from "framer-motion"; 
import { photographyImages } from "../data/images";
import FocusMode from "./FocusMode";

function PhotographyGallery({ limit }: { limit?: number }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {photographyImages.slice(0, limit).map((image, index) => (
          <motion.figure
            key={index}
            className="relative mb-4 break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => openLightbox(image)}
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

      {/* Focus Mode Modal */}
      <FocusMode image={selectedImage} onClose={closeLightbox} />
    </>
  );
}

export default PhotographyGallery;
