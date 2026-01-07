import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { motionTokens } from "../utils/motion";
import { MotionCard } from "../components/ui/MotionCard";
import { articles } from "../data/Articles";
import Page from "../components/Page";
import SEO from "../components/SEO";
import { ArrowRight } from "lucide-react";

function DeepDives() {
  return (
    <Page>
      <SEO
        title="Deep Dives – Abhiyan Sainju"
        description="Explore in-depth articles and deep dives by Abhiyan Sainju on technology, mathematics, and the intersection of code and creativity."
      />
      {/* Hero Section */}
      <section className="relative py-24 min-h-screen font-heading">
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionTokens.duration.slow / 1000 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-6 font-heading">
                Deep Dives
              </h1>

              <p className="text-xl text-text-muted mb-8 max-w-3xl mx-auto">
                In-depth explorations of technology, mathematics, and the
                intersection of code and creativity. Each article represents
                hours of research, analysis, and thoughtful writing.
              </p>
            </motion.div>

            {/* All Articles */}
            <div>
              <h2 className="text-2xl font-semibold text-text-primary mb-8 font-heading">
                All Articles
              </h2>

              <div className="space-y-6">
                {articles.map((article, index) => (
                  <Link key={article.id} to={`/deep-dives/${article.id}`}>
                    <MotionCard
                      className="group relative glass-card glass-card-hover mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: motionTokens.duration.slow / 1000,
                        delay: index * 0.05,
                      }}
                    >
                      <div className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                              {article.date === "Coming Soon"
                                ? "Upcoming"
                                : article.date}
                            </span>
                            <span className="text-xs text-text-muted font-mono uppercase tracking-wider">
                              {article.source}
                            </span>
                            <span className="text-xs text-text-muted/60">
                              {article.readTime}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                            {article.title}
                          </h3>

                          <p className="text-text-muted/80 mb-3 leading-relaxed">
                            {article.summary}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-3">
                            {article.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-md bg-white/5 text-text-muted/60"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center gap-2 text-accent-primary font-medium group-hover:translate-x-1 transition-transform">
                            Read Article
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </MotionCard>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default DeepDives;
