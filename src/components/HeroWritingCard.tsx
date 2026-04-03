import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { articles } from "../data/Articles";

const HeroWritingCard: React.FC = () => {
  // Get latest 2 articles
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <div className="h-full w-full rounded-2xl bg-card p-6 border border-border-primary/50 shadow-sm flex flex-col justify-between hover:border-accent-primary/40 transition-colors">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="label-serif">Latest Writing</h3>
          <BookOpen className="w-4 h-4 text-text-muted" />
        </div>
        <div className="space-y-4">
          {latestArticles.map((article) => (
            <Link
              key={article.id}
              to={`/deep-dives/${article.id}`}
              className="group block"
            >
              <h4 className="text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors line-clamp-2">
                {article.title}
              </h4>
              <p className="text-xs text-text-muted mt-1">{article.date}</p>
            </Link>
          ))}
        </div>
      </div>
      <Link
        to="/deep-dives"
        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-primary group mt-4 hover:opacity-80 transition-opacity"
      >
        All Deep Dives
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default HeroWritingCard;
