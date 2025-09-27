import { useEffect } from 'react';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const useSeo = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
}: SeoProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDescription = document.querySelector('meta[name="description"]')?.getAttribute('content');
    const prevKeywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content');
    const prevOgImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
    const prevOgType = document.querySelector('meta[property="og:type"]')?.getAttribute('content');
    const prevTwitterCard = document.querySelector('meta[property="twitter:card"]')?.getAttribute('content');
    const prevTwitterTitle = document.querySelector('meta[property="twitter:title"]')?.getAttribute('content');
    const prevTwitterDescription = document.querySelector('meta[property="twitter:description"]')?.getAttribute('content');
    const prevTwitterImage = document.querySelector('meta[property="twitter:image"]')?.getAttribute('content');

    if (title) {
      document.title = title;
    }
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
    if (keywords) {
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', keywords);
    }
    if (ogImage) {
      document.querySelector('meta[property="og:image"]')?.setAttribute('content', ogImage);
    }
    document.querySelector('meta[property="og:type"]')?.setAttribute('content', ogType);
    document.querySelector('meta[property="twitter:card"]')?.setAttribute('content', twitterCard);
    if (twitterTitle) {
      document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', twitterTitle);
    }
    if (twitterDescription) {
      document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', twitterDescription);
    }
    if (twitterImage) {
      document.querySelector('meta[property="twitter:image"]')?.setAttribute('content', twitterImage);
    }

    return () => {
      document.title = prevTitle;
      if (prevDescription) {
        document.querySelector('meta[name="description"]')?.setAttribute('content', prevDescription);
      }
      if (prevKeywords) {
        document.querySelector('meta[name="keywords"]')?.setAttribute('content', prevKeywords);
      }
      if (prevOgImage) {
        document.querySelector('meta[property="og:image"]')?.setAttribute('content', prevOgImage);
      }
      if (prevOgType) {
        document.querySelector('meta[property="og:type"]')?.setAttribute('content', prevOgType);
      }
      if (prevTwitterCard) {
        document.querySelector('meta[property="twitter:card"]')?.setAttribute('content', prevTwitterCard);
      }
      if (prevTwitterTitle) {
        document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', prevTwitterTitle);
      }
      if (prevTwitterDescription) {
        document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', prevTwitterDescription);
      }
      if (prevTwitterImage) {
        document.querySelector('meta[property="twitter:image"]')?.setAttribute('content', prevTwitterImage);
      }
    };
  }, [title, description, keywords, ogImage, ogType, twitterCard, twitterTitle, twitterDescription, twitterImage]);
};

export default useSeo;
