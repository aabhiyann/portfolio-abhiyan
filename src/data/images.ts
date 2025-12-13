// src/data/images.ts
import { ImageMetadata } from "../types/image";
import { imageEXIFData } from "./ExifData";

export const heroImages: ImageMetadata[] = [
  {
    src: "/images/photography/IMG_6355Ben.webp",
    alt: "Landscape by Abhiyan",
    width: 1920,
    height: 1080,
    format: "webp",
    exif: {
      camera: "Canon EOS 750D",
      lens: "18-55mm",
      settings: "f/8 · 1/125 · ISO 200",
      location: "Mountain Landscape",
      date: "2024-01-15",
    },
  },
];

export const projectImages: Record<string, ImageMetadata[]> = {
  infrasight: [
    {
      src: "/images/projects/infrasight-hero.webp",
      alt: "InfraSight Dashboard",
      width: 1200,
      height: 800,
      format: "webp",
    },
    {
      src: "/images/projects/infrasight-mobile.webp",
      alt: "InfraSight Mobile View",
      width: 600,
      height: 1200,
      format: "webp",
    },
  ],
  melodyhub: [
    {
      src: "/images/projects/melodyhub-hero.webp",
      alt: "MelodyHub Interface",
      width: 1200,
      height: 800,
      format: "webp",
    },
  ],
  talkifydocs: [
    {
      src: "/images/projects/talkifydocs-hero.webp",
      alt: "TalkifyDocs Dashboard",
      width: 1200,
      height: 800,
      format: "webp",
    },
  ],
};

// Generate photography images with real EXIF data
// Note: Using main image as thumbnail since dedicated thumbnails don't exist yet
export const photographyImages: ImageMetadata[] = imageEXIFData.map((exif) => ({
  src: `/images/photography/${exif.filename}.webp`,
  thumbnailSrc: `/images/photography/${exif.filename}.webp`, // Fallback to main image
  alt: `Photography by Abhiyan - ${exif.filename}`,
  width: 1200,
  height: 1500,
  format: "webp",
  exif: {
    camera: exif.camera,
    lens: exif.lens,
    settings: `${exif.aperture} · ${exif.shutterSpeed} · ISO ${exif.iso}`,
    location: "Various Locations",
    date: new Date(exif.dateTaken).toLocaleDateString(),
    focalLength: exif.focalLength
      ? `${Math.round(parseFloat(exif.focalLength))}mm`
      : undefined,
    aperture: exif.aperture,
    shutterSpeed: exif.shutterSpeed,
    iso: exif.iso.toString(),
  },
}));
