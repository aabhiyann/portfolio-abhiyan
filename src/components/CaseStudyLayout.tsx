import React from "react";
import { useLocation } from "react-router-dom";
import Page from "./Page"; // Assuming Page is in components
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import SEO from "./SEO";

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  stats: Array<{ label: string; value: string }>;
  links: {
    github?: string;
    live?: string;
  };
  tags: string[];
  children: React.ReactNode;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  title,
  subtitle,
  heroImage,
  stats,
  links,
  tags,
  children,
}) => {
  const location = useLocation();
  const SITE_URL = "https://www.abhiyansainju.com";
  const caseStudyUrl = `${SITE_URL}${location.pathname}`;
  const imageUrl = heroImage
    ? `${SITE_URL}${heroImage.startsWith("/") ? heroImage : `/${heroImage}`}`
    : `${SITE_URL}/og-image.png`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${title} - Case Study`,
    description: subtitle,
    author: {
      "@type": "Person",
      name: "Abhiyan Sainju",
      url: SITE_URL,
      sameAs: [
        "https://linkedin.com/in/abhiyansainju",
        "https://github.com/aabhiyann",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Abhiyan Sainju",
      url: SITE_URL,
    },
    image: imageUrl,
    datePublished: new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": caseStudyUrl,
    },
    keywords: tags.join(", "),
    articleSection: "Technology Case Study",
    inLanguage: "en-US",
  };

  return (
    <Page>
      <SEO
        title={`${title} - Case Study | Abhiyan Sainju`}
        description={subtitle}
        keywords={tags}
        type="article"
        image={imageUrl}
        jsonLd={articleSchema}
      />

      <article className="min-h-screen pb-24">
        {/* Back Link */}
        <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
          <Link
            to="/projects"
            className="inline-flex items-center text-text-muted hover:text-accent-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <header className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-xs uppercase tracking-[0.18em] text-text-muted">
              {tags.map((tag) => (
                <span key={tag} className="text-accent-primary">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-text-primary mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mb-8">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              {links.live && (
                <Button
                  as="a"
                  href={links.live}
                  target="_blank"
                  variant="primary"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </Button>
              )}
              {links.github && (
                <Button
                  as="a"
                  href={links.github}
                  target="_blank"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> View Source
                </Button>
              )}
            </div>
          </motion.div>
        </header>

        {/* Hero Image */}
        {heroImage && (
          <div className="max-w-[90rem] mx-auto px-6 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-border-primary/50 bg-card/20 relative group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={heroImage}
                  alt={`${title} preview`}
                  className="w-full h-auto object-cover max-h-[600px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        )}

        {/* Quick Stats Grid */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6 rounded-2xl border border-border-primary/50 bg-bg-surface/40">
            {stats.map((stat, i) => (
              <div key={i} className="text-center flex flex-col justify-center">
                <div className="text-xl md:text-3xl font-bold font-heading text-accent-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content (The Story) */}
        <div className="max-w-3xl mx-auto px-6 prose prose-invert prose-lg prose-headings:font-heading prose-a:text-accent-primary">
          {children}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto px-6 mt-24 pt-12 border-t border-border-primary/30 text-center">
          <h3 className="text-2xl font-bold mb-6">Other Projects</h3>
          <Link to="/projects">
            <Button variant="outline">View All Projects</Button>
          </Link>
        </div>
      </article>
    </Page>
  );
};

export default CaseStudyLayout;
