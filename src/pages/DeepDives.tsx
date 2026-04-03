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
        description="Long-form technical writing by Abhiyan Sainju — ML systems, production engineering, and software research."
      />
      {/* Hero Section */}
      <section className="relative py-24 min-h-screen font-heading">
        <div className="relative z-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <motion.div
              className="max-w-4xl mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionTokens.duration.slow / 1000 }}
            >
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent-primary/60" />
                <span className="label-serif">Writing</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-6 font-heading">
                Deep Dives
              </h1>

              <p className="text-xl text-text-muted leading-relaxed max-w-3xl">
                Long-form technical writing on research, systems, and the work
                of getting ML into production.
              </p>
            </motion.div>

            {/* All Articles */}
            <div>
              {articles.length === 0 ? (
                <div className="text-center py-24">
                  <div className="inline-block p-12 rounded-2xl bg-bg-surface border border-border-primary max-w-md">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-primary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-accent-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      No Articles Yet
                    </h3>
                    <p className="text-text-muted">Articles coming soon.</p>
                  </div>
                </div>
              ) : (
                <div className="divide-y divide-border-primary/70 border-y border-border-primary/70">
                  {articles.map((article, index) => (
                    <Link key={article.id} to={`/deep-dives/${article.id}`}>
                      <MotionCard
                        className="group relative bg-transparent border-0 shadow-none rounded-none"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: motionTokens.duration.slow / 1000,
                          delay: index * 0.05,
                        }}
                      >
                        <div className="py-8 flex flex-col md:flex-row md:items-start gap-6">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3 text-xs uppercase tracking-[0.18em]">
                              <span className="font-mono text-accent-primary">
                                {article.date === "Coming Soon"
                                  ? "Upcoming"
                                  : article.date}
                              </span>
                              <span className="text-text-muted font-mono">
                                {article.source}
                              </span>
                              <span className="text-text-muted/60">
                                {article.readTime}
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                              {article.title}
                            </h3>

                            <p className="text-text-muted/80 leading-relaxed max-w-3xl">
                              {article.summary}
                            </p>
                          </div>

                          <div className="flex-shrink-0 pt-1">
                            <div className="inline-flex items-center gap-2 text-accent-primary font-medium group-hover:translate-x-1 transition-transform">
                              Read Deep Dive
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </MotionCard>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default DeepDives;
