import { useParams } from "react-router-dom";
import Page from "../components/Page";
import Prose from "../components/Prose";
import { articles } from "../data/Articles";
import useSeo from "../utils/useSeo";
import useStructuredData from "../utils/useStructuredData";

function DeepDiveDetail() {
  const { slug } = useParams();
  const article = articles.find((article) => article.slug === slug);

  useSeo({
    title: article
      ? `${article.title} – Deep Dive by Abhiyan Sainju`
      : "Article Not Found – Deep Dive by Abhiyan Sainju",
    description: article
      ? article.abstract
      : "The requested article could not be found.",
    keywords: article
      ? `${article.category}, ${article.title}, Abhiyan Sainju, deep dive, technology, mathematics, creativity`
      : "article not found, deep dive, technology, mathematics, creativity",
  });

  useStructuredData({
    jsonLd: article
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.abstract,
          image: "/og-image.jpg", // Replace with actual article image if available
          datePublished: article.date, // Assuming article.date is in a valid format (e.g., YYYY-MM-DD)
          author: {
            "@type": "Person",
            name: "Abhiyan Sainju",
          },
          publisher: {
            "@type": "Organization",
            name: "Abhiyan Sainju Portfolio", // Replace with your portfolio name
            logo: {
              "@type": "ImageObject",
              url: "/favicon.svg", // Replace with your logo URL
            },
          },
        }
      : null,
  });

  if (!article) {
    return (
      <Page>
        <section className="py-24" style={{ backgroundColor: "#000000" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 font-heading">
              Article not found
            </h1>
          </div>
        </section>
      </Page>
    );
  }

  return (
    <Page>
      <section className="py-24" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Prose>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 font-heading">
              {article.title}
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {article.abstract}
            </p>
            <div className="flex items-center gap-4 text-sm text-white/60 mb-8">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
            <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 relative overflow-hidden rounded-2xl mb-8 border border-white/10"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget
              aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies
              lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl sit amet
              nisl.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget
              aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies
              lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl sit amet
              nisl.
            </p>
          </Prose>
        </div>
      </section>
    </Page>
  );
}

export default DeepDiveDetail;
