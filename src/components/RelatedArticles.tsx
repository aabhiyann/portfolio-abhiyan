import React from "react";
import { Link } from "react-router-dom";
import { articles, Article } from "../data/Articles";
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.map((article) => (
            <Link key={article.id} to={`/deep-dives/${article.id}`}>
              <MotionCard className="group h-full bg-card border border-border-primary hover:border-accent-primary/30 transition-all duration-300">
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-text-muted mb-4 line-clamp-2">
                    {article.summary}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-accent-primary">
                    Read Article
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((article) => (
          <Link key={article.id} to={`/deep-dives/${article.id}`}>
            <MotionCard className="group h-full bg-card border border-border-primary hover:border-accent-primary/30 transition-all duration-300">
              <div className="p-6">
                <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-text-muted mb-4 line-clamp-2">
                  {article.summary}
                </p>
                <div className="flex items-center gap-2 text-sm text-accent-primary">
                  Read Article
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
