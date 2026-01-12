import { motion } from "framer-motion";
import { Code, Github, Zap, Calendar } from "lucide-react";
import SEO from "../components/SEO";
import { GitHubActivity } from "../components/GitHubActivity";

const Analytics = () => {
  const stats = [
    {
      label: "Total Projects",
      value: "8+",
      icon: <Code className="w-6 h-6" />,
      color: "blue",
    },
    {
      label: "GitHub Contributions",
      value: "2.2K+",
      icon: <Github className="w-6 h-6" />,
      color: "purple",
    },
    {
      label: "Technologies",
      value: "15+",
      icon: <Zap className="w-6 h-6" />,
      color: "green",
    },
    {
      label: "Years Experience",
      value: "2+",
      icon: <Calendar className="w-6 h-6" />,
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: "bg-blue-500/10 text-blue-500",
    purple: "bg-purple-500/10 text-purple-500",
    green: "bg-green-500/10 text-green-500",
    orange: "bg-orange-500/10 text-orange-500",
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title="Analytics | Abhiyan Sainju"
        description="Portfolio metrics, GitHub activity, and technical stack overview"
      />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Analytics
          </h1>
          <p className="text-lg text-text-muted max-w-2xl">
            Portfolio metrics, GitHub activity, and technical stack overview.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-6 border border-border-primary"
            >
              {/* Icon Circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  colorClasses[stat.color as keyof typeof colorClasses]
                }`}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <div className="text-3xl font-bold text-text-primary mb-1">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Activity */}
        <div className="mb-16">
          <GitHubActivity />
        </div>

        {/* Tech Stack - Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card rounded-2xl p-8 border border-border-primary"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Tech Stack
          </h2>
          <p className="text-text-muted text-sm mb-6">
            Technologies and tools I work with across projects
          </p>
          <div className="flex items-center justify-center py-12">
            <p className="text-text-muted">
              Tech stack visualization coming soon...
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
