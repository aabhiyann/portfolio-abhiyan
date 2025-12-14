import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
  keywords?: string[];
};

export default function SEO({
  title,
  description,
  name = "Abhiyan Sainju",
  type = "website",
  image = "/og-image.png",
  keywords = [],
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
