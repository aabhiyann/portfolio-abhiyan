// src/types/image.ts
export interface ImageMetadata {
  src: string;
  alt: string;
  width: number;
  height: number;
  format: "webp" | "jpg" | "png";
  exif?: {
    camera: string;
    lens: string;
    settings: string;
    location?: string;
    date: string;
  };
}
