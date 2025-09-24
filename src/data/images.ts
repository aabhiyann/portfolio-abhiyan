// src/data/images.ts
import { ImageMetadata } from "../types/image";
import { imageEXIFData } from "./exif-data";

export const heroImages: ImageMetadata[] = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center",
    alt: "Landscape by Abhiyan",
    width: 1920,
    height: 1080,
    format: "jpg",
    exif: {
      camera: "Fujifilm X-T3",
      lens: "23mm f/2",
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
export const photographyImages: ImageMetadata[] = imageEXIFData.map((exif, index) => ({
  src: `/images/photography/${exif.filename}.webp`,
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
    focalLength: exif.focalLength,
    aperture: exif.aperture,
    shutterSpeed: exif.shutterSpeed,
    iso: exif.iso.toString(),
  },
}));
