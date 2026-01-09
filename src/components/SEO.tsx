import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

type SEOProps = {
  title: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
  keywords?: string[];
  author?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
};

const SITE_URL = "https://www.abhiyansainju.com";

export default function SEO({
  title,
  description,
  type = "website",
  image = "/og-image.png",
  keywords = [],
  author = "Abhiyan Sainju",
  noindex = false,
  jsonLd,
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `${SITE_URL}${location.pathname}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Abhiyan Sainju Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@abhiyansainju" />
      <meta name="twitter:site" content="@abhiyansainju" />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Structured Data (Page Specific) */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
