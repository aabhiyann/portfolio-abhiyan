import { motion } from "framer-motion";
import { motionTokens } from "../utils/Motion";
import { articles } from "../data/Articles";
import Page from "../components/Page";
import SEO from "../components/SEO";

function DeepDives() {
  return (
    <Page>
      <SEO
        title="Deep Dives – Abhiyan Sainju"
        description="Explore in-depth articles and deep dives by Abhiyan Sainju on technology, mathematics, and the intersection of code and creativity."
      />
      {/* Hero Section */}
      <section
        className="relative py-24 min-h-screen"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
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
                  <motion.article
                    key={article.id}
                    className="group bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:shadow-2xl hover:shadow-white/10 hover:border-white/30 hover:bg-white/15 transition-all duration-300 relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: motionTokens.duration.slow / 1000,
                      delay: index * 0.05,
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-text-secondary transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-text-muted mb-3 leading-relaxed">
                          {article.summary}
                        </p>
                      </div>

                      <div className="flex-shrink-0">
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-hover transition-colors font-medium"
                        >
                          Read on {article.source}
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.article>
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
