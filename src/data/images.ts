// src/data/images.ts
import { ImageMetadata } from "../types/image";

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

export const photographyImages: ImageMetadata[] = [
  {
    src: "/images/photography/photo-kathmandu-street.webp",
    alt: "Street scene in Kathmandu",
    width: 1200,
    height: 800,
    format: "webp",
    exif: {
      camera: "Fujifilm X-T3",
      lens: "35mm f/2",
      settings: "f/2 · 1/250 · ISO 200",
      location: "Kathmandu, Nepal",
      date: "2023-12-20",
    },
  },
  {
    src: "/images/photography/photo-dc-monument.webp",
    alt: "Washington Monument at sunset",
    width: 1200,
    height: 1600,
    format: "webp",
    exif: {
      camera: "Fujifilm X-T3",
      lens: "23mm f/2",
      settings: "f/5.6 · 1/60 · ISO 400",
      location: "Washington, DC",
      date: "2024-03-15",
    },
  },
];
