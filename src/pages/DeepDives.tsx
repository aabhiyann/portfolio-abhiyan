import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { motionTokens } from "../utils/Motion";
import { articles, categories } from "../data/Articles";
import Page from "../components/Page";
import useSeo from "../utils/useSeo";

function DeepDives() {
  useSeo({
    title: "Deep Dives – Abhiyan Sainju",
    description:
      "Explore in-depth articles and deep dives by Abhiyan Sainju on technology, mathematics, and the intersection of code and creativity.",
    keywords:
      "Abhiyan Sainju deep dives, technology articles, software engineering insights, AI, cloud computing, creative coding",
  });

  return (
    <Page>
      {/* Hero Section */}
      <section
        className="relative py-24 min-h-screen"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionTokens.duration.slow / 1000 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 font-heading">
                Deep Dives
              </h1>

              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                In-depth explorations of technology, mathematics, and the
                intersection of code and creativity. Each article represents
                hours of research, analysis, and thoughtful writing.
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === 0
                        ? "bg-white text-black"
                        : "bg-white/10 text-white/70 hover:text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Featured Articles */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-white mb-8 font-heading">
                Featured Articles
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {articles
                  .filter((article) => article.featured)
                  .map((article, index) => (
                    <motion.article
                      key={article.id}
                      className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:shadow-2xl hover:shadow-white/10 hover:border-white/30 hover:bg-white/15 transition-all duration-300 relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: motionTokens.duration.slow / 1000,
                        delay: index * 0.1,
                      }}
                    >
                      <div className="aspect-video bg-gradient-to-br from-white/15 to-white/5 relative border-b border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/15 backdrop-blur-md text-white border border-white/30 shadow-md shadow-black/10">
                            {article.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white group-hover:text-white/80 transition-colors">
                            {article.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-white/70 mb-4 leading-relaxed">
                          {article.abstract}
                        </p>

                        <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                          <span>{article.date}</span>
                          <span>{article.readTime}</span>
                        </div>

                        <Link
                          to={`/deep-dives/${article.slug}`}
                          className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium"
                        >
                          Read Article
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
                        </Link>
                      </div>
                    </motion.article>
                  ))}
              </div>
            </div>

            {/* All Articles */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-8 font-heading">
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
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-sm shadow-black/5">
                            {article.category}
                          </span>
                          {article.featured && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/15 backdrop-blur-md text-white border border-white/30 shadow-md shadow-black/10">
                              Featured
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/80 transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-white/70 mb-3 leading-relaxed">
                          {article.abstract}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <Link
                          to={`/deep-dives/${article.slug}`}
                          className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium"
                        >
                          Read
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
                        </Link>
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
