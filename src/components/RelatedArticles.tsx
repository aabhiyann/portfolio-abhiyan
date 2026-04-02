import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/Articles";
import { MotionCard } from "./ui/MotionCard";
import { ArrowRight } from "lucide-react";

interface RelatedArticlesProps {
  currentArticleId: string;
  limit?: number;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  currentArticleId,
  limit = 3,
}) => {
  const currentArticle = articles.find((a) => a.id === currentArticleId);
  if (!currentArticle) return null;

  // Find related articles by matching tags
  const related = articles
    .filter((article) => {
      if (article.id === currentArticleId) return false;
      // Check if articles share at least one tag
      return article.tags.some((tag) => currentArticle.tags.includes(tag));
    })
    .slice(0, limit);

  // If no tag matches, show other articles
  if (related.length === 0) {
    const otherArticles = articles
      .filter((a) => a.id !== currentArticleId)
      .slice(0, limit);
    return (
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-text-primary mb-6 font-heading">
          More Articles
        </h3>
        <div className="divide-y divide-border-primary/70 border-y border-border-primary/70">
          {otherArticles.map((article) => (
            <Link key={article.id} to={`/deep-dives/${article.id}`}>
              <MotionCard className="group bg-transparent border-0 shadow-none rounded-none">
                <div className="py-6 flex items-start justify-between gap-6">
                  <div className="max-w-2xl">
                    <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-sm text-text-muted mb-3 line-clamp-2 leading-relaxed">
                      {article.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-text-muted">
                      <span className="font-mono text-accent-primary">
                        {article.date}
                      </span>
                      <span>{article.source}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-accent-primary pt-1">
                    Read Deep Dive
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </MotionCard>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-text-primary mb-6 font-heading">
        Related Articles
      </h3>
      <div className="divide-y divide-border-primary/70 border-y border-border-primary/70">
        {related.map((article) => (
          <Link key={article.id} to={`/deep-dives/${article.id}`}>
            <MotionCard className="group bg-transparent border-0 shadow-none rounded-none">
              <div className="py-6 flex items-start justify-between gap-6">
                <div className="max-w-2xl">
                  <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-text-muted mb-3 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-text-muted">
                    <span className="font-mono text-accent-primary">
                      {article.date}
                    </span>
                    <span>{article.source}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-accent-primary pt-1">
                  Read Deep Dive
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </MotionCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
