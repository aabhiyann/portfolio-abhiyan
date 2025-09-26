import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { motionTokens } from "../utils/motion";

function DeepDives() {
  const articles = [
    {
      id: 1,
      title:
        "AI Copyright Law: Navigating the Legal Landscape of Machine Learning",
      abstract:
        "An in-depth analysis of copyright implications in AI training, fair use doctrine, and the evolving legal framework surrounding machine learning models.",
      date: "March 2024",
      readTime: "12 min read",
      category: "AI & Law",
      featured: true,
      slug: "ai-copyright-law",
    },
    {
      id: 2,
      title: "The Coupon Collector's Problem: A Mathematical Journey",
      abstract:
        "Exploring one of probability theory's most elegant problems, from basic combinatorics to advanced statistical applications in real-world scenarios.",
      date: "February 2024",
      readTime: "8 min read",
      category: "Mathematics",
      featured: false,
      slug: "coupon-collectors-problem",
    },
    {
      id: 3,
      title: "Cloud Architecture Patterns: Building Scalable Systems",
      abstract:
        "A comprehensive guide to designing resilient, scalable cloud architectures using modern patterns and best practices from production environments.",
      date: "January 2024",
      readTime: "15 min read",
      category: "Cloud Computing",
      featured: true,
      slug: "cloud-architecture-patterns",
    },
    {
      id: 4,
      title: "The Psychology of Code Reviews: Fostering Better Collaboration",
      abstract:
        "Understanding the human side of technical reviews, communication patterns, and strategies for creating more effective development teams.",
      date: "December 2023",
      readTime: "10 min read",
      category: "Software Engineering",
      featured: false,
      slug: "psychology-code-reviews",
    },
    {
      id: 5,
      title:
        "Photography as Data: Computational Analysis of Visual Composition",
      abstract:
        "Exploring how machine learning can analyze photographic composition, color theory, and aesthetic principles to enhance visual storytelling.",
      date: "November 2023",
      readTime: "14 min read",
      category: "AI & Photography",
      featured: false,
      slug: "photography-computational-analysis",
    },
    {
      id: 6,
      title: "The Future of DevOps: AI-Driven Infrastructure Management",
      abstract:
        "Examining how artificial intelligence is transforming infrastructure automation, predictive maintenance, and deployment strategies.",
      date: "October 2023",
      readTime: "11 min read",
      category: "DevOps",
      featured: true,
      slug: "ai-driven-devops",
    },
  ];

  const categories = [
    "All",
    "AI & Law",
    "Mathematics",
    "Cloud Computing",
    "Software Engineering",
    "AI & Photography",
    "DevOps",
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24">
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

            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              In-depth explorations of technology, mathematics, and the
              intersection of code and creativity. Each article represents hours
              of research, analysis, and thoughtful writing.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === 0
                        ? "bg-accent-primary text-white"
                        : "bg-bg-surface text-text-secondary hover:text-accent-primary border border-border-primary/20"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-8 font-heading">
              Featured Articles
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {articles
                .filter((article) => article.featured)
                .map((article, index) => (
                  <motion.article
                    key={article.id}
                    className="group bg-surface-light dark:bg-surface-dark rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: motionTokens.duration.slow / 1000,
                      delay: index * 0.1,
                    }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-blue-500/20 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/90 text-white">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                          {article.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-muted-light dark:text-muted-dark mb-4 leading-relaxed">
                        {article.abstract}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-light dark:text-muted-dark mb-4">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>

                      <Link
                        to={`/deep-dives/${article.slug}`}
                        className="inline-flex items-center gap-2 text-accent hover:text-accent-ink transition-colors font-medium"
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
            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-8 font-heading">
              All Articles
            </h2>

            <div className="space-y-6">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  className="group bg-surface-light dark:bg-surface-dark rounded-xl border border-black/5 dark:border-white/10 p-6 hover:shadow-lg transition-all duration-300"
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
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                          {article.category}
                        </span>
                        {article.featured && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200">
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-2 group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-muted-light dark:text-muted-dark mb-3 leading-relaxed">
                        {article.abstract}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-muted-light dark:text-muted-dark">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <Link
                        to={`/deep-dives/${article.slug}`}
                        className="inline-flex items-center gap-2 text-accent hover:text-accent-ink transition-colors font-medium"
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
      </section>
    </div>
  );
}

export default DeepDives;
