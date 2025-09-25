import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { motionTokens } from "../utils/motion";
import { colorUtils } from "../design/colors";

function Projects({ isDark = false, currentTheme = 'default' }) {
  const projects = [
    {
      id: 1,
      title: "InfraSight",
      description:
        "Cloud infrastructure monitoring and analytics platform that helps teams track performance, costs, and security across multiple cloud providers.",
      image: "/images/projects/infrasight-hero.webp",
      github: "https://github.com/aabhiyann/infrasight",
      live: "https://infrasight-demo.vercel.app",
      tech: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
      impact:
        "Reduced infrastructure costs by 40% and improved deployment reliability by 95%",
    },
    {
      id: 2,
      title: "MelodyHub",
      description:
        "Music discovery and playlist management app with AI-powered recommendations and social features for music enthusiasts.",
      image: "/images/projects/melodyhub-hero.webp",
      github: "https://github.com/aabhiyann/melodyhub",
      live: "https://melodyhub.vercel.app",
      tech: ["Vue.js", "Python", "Spotify API", "MongoDB", "Redis", "Docker"],
      impact:
        "Served 10K+ users with 85% user retention rate and 4.8/5 app store rating",
    },
    {
      id: 3,
      title: "TalkifyDocs",
      description:
        "AI-powered document summarization tool that converts lengthy documents into concise, actionable insights using advanced NLP.",
      image: "/images/projects/talkifydocs-hero.webp",
      github: "https://github.com/aabhiyann/talkifydocs",
      live: "https://talkifydocs.vercel.app",
      tech: ["React", "OpenAI", "TypeScript", "FastAPI", "PostgreSQL", "AWS"],
      impact:
        "Processed 50K+ documents, saving users an average of 2 hours per document review",
    },
    {
      id: 4,
      title: "CloudCost Optimizer",
      description:
        "Automated cloud resource optimization platform that analyzes usage patterns and recommends cost-saving strategies.",
      image: "/images/projects/cloudcost-hero.webp",
      github: "https://github.com/aabhiyann/cloudcost-optimizer",
      live: "https://cloudcost-demo.vercel.app",
      tech: ["React", "Python", "AWS", "Terraform", "Grafana", "Prometheus"],
      impact:
        "Helped companies save $2M+ annually in cloud costs with 99.9% accuracy",
    },
    {
      id: 5,
      title: "DevOps Dashboard",
      description:
        "Comprehensive DevOps monitoring dashboard with real-time metrics, alerting, and deployment tracking across environments.",
      image: "/images/projects/devops-dashboard-hero.webp",
      github: "https://github.com/aabhiyann/devops-dashboard",
      live: "https://devops-dashboard.vercel.app",
      tech: ["Next.js", "Go", "Kubernetes", "Prometheus", "Grafana", "Docker"],
      impact:
        "Reduced incident response time by 60% and improved system uptime to 99.95%",
    },
    {
      id: 6,
      title: "AI Code Reviewer",
      description:
        "Intelligent code review assistant that analyzes pull requests and provides detailed feedback on code quality, security, and best practices.",
      image: "/images/projects/ai-code-reviewer-hero.webp",
      github: "https://github.com/aabhiyann/ai-code-reviewer",
      live: "https://ai-code-reviewer.vercel.app",
      tech: ["React", "Python", "OpenAI", "GitHub API", "Docker", "AWS"],
      impact:
        "Improved code quality by 35% and reduced review time by 50% across development teams",
    },
  ];

  return (
    <div 
      className="min-h-screen pt-24"
      style={{
        backgroundColor: colorUtils.getThemeColor('background', isDark, currentTheme),
      }}
    >
      <section 
        className="py-24"
        style={{
          backgroundColor: colorUtils.getThemeColor('background', isDark, currentTheme),
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.h1
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6 font-heading"
            style={{
              color: colorUtils.getThemeColor('text', isDark, currentTheme)
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: motionTokens.duration.slow / 1000 }}
          >
            Projects
          </motion.h1>

          <motion.p
            className="text-xl text-muted-light dark:text-muted-dark mb-16 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionTokens.duration.slow / 1000,
              delay: 0.2,
            }}
          >
            A collection of projects that showcase my passion for building
            innovative solutions that solve real-world problems with modern
            technology.
          </motion.p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-surface-light dark:bg-surface-dark rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: index * 0.1,
                }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-blue-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  {/* Impact Statement */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
                      💡 {project.impact}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-light dark:text-muted-dark mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent-ink transition-colors font-medium"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent-ink transition-colors font-medium"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
