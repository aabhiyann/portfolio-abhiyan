import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Page from "../components/Page";
import SEO from "../components/SEO";
import Button from "../components/ui/Button";
import { articles } from "../data/Articles";
import SimpleMarkdown from "../components/SimpleMarkdown";
import ReadingProgress from "../components/ReadingProgress";
import TableOfContents from "../components/TableOfContents";
import RelatedArticles from "../components/RelatedArticles";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const DeepDiveDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);

  const article = articles.find((a) => a.id === slug);

  useEffect(() => {
    if (!article && slug) {
      // Optional: navigate("/404");
    }
  }, [article, slug, navigate]);

  const handleHeadersExtracted = (headers: TOCItem[]) => {
    setTocItems(headers);
  };

  if (!article) {
    return (
      <Page>
        <section className="py-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-text-muted mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Button as={Link} to="/deep-dives" variant="primary">
              Back to Articles
            </Button>
          </div>
        </section>
      </Page>
    );
  }

  return (
    <Page>
      <SEO
        title={`${article.title} | Abhiyan Sainju`}
        description={article.summary}
      />

      <ReadingProgress />

      <article className="min-h-screen pb-24">
        {/* Header / Hero */}
        <div className="relative py-24 bg-gradient-to-b from-bg-primary to-bg-surface/30 border-b border-border-primary/50">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <Link
              to="/deep-dives"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary border border-accent-primary/20 text-xs font-medium uppercase tracking-wide">
                  {article.source}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6 font-heading leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-text-muted/80 leading-relaxed max-w-3xl">
                {article.summary}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content with TOC */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
          <div className="flex gap-12">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SimpleMarkdown
                  content={article.content}
                  onHeadersExtracted={handleHeadersExtracted}
                />
              </motion.div>

              {/* Related Articles */}
              <RelatedArticles currentArticleId={article.id} />

              {/* Footer / Tags */}
              <div className="mt-16 pt-8 border-t border-border-primary/50">
                <div className="flex flex-wrap gap-2 mb-12">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-sm text-text-secondary transition-colors cursor-default"
                    >
                      <Tag className="w-3.5 h-3.5 opacity-70" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center p-8 rounded-2xl bg-bg-surface/50 border border-border-primary/50">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      Enjoyed this deep dive?
                    </h3>
                    <p className="text-text-muted text-sm">
                      Check out my other articles or view my projects.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      as={Link}
                      to="/deep-dives"
                      variant="outline"
                      size="sm"
                    >
                      All Articles
                    </Button>
                    <Button
                      as={Link}
                      to="/projects"
                      variant="primary"
                      size="sm"
                    >
                      View Projects
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Table of Contents Sidebar */}
            {tocItems.length > 0 && (
              <div className="hidden lg:block w-64 flex-shrink-0">
                <TableOfContents items={tocItems} />
              </div>
            )}
          </div>
        </div>
      </article>
    </Page>
  );
};

export default DeepDiveDetail;
