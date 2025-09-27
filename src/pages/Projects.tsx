import { useState } from "react";
import { motion } from "framer-motion"; 
import { motionTokens } from "../utils/motion";
import { projects } from "../data/projects";
import Page from "../components/Page";
import { useTheme } from "../contexts/useTheme";
import { colorUtils } from "../design/colors";
import { Card } from "../components/ui/Card";
import SectionTitle from "../components/SectionTitle";
import ProjectDeconstructor from "../components/ProjectDeconstructor";

function Projects() {
  const { themeState } = useTheme();
  const { isDarkMode, currentTheme } = themeState;
  const [selectedArch, setSelectedArch] = useState(null);

  return (
    <Page>
      <section 
        className="py-24"
        style={{
          backgroundColor: colorUtils.getThemeColor('background', isDarkMode, currentTheme),
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle 
            title="Projects" 
            subtitle="A collection of projects that showcase my passion for building innovative solutions that solve real-world problems with modern technology." 
            isDark={isDarkMode} 
            currentTheme={currentTheme} 
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: motionTokens.duration.slow / 1000,
                  delay: index * 0.1,
                }}
              >
                <Card
                  interactive
                  isDark={themeState.isDarkMode}
                  currentTheme={themeState.currentTheme}
                  className="group bg-surface-light dark:bg-surface-dark rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
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
                    <div className="flex gap-4 items-center">
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
                      {project.architecture && (
                        <button onClick={() => setSelectedArch(project.architecture)} className="btn-ghost">
                          Explore Architecture
                        </button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {selectedArch && (
        <ProjectDeconstructor architecture={selectedArch} onClose={() => setSelectedArch(null)} />
      )}
    </Page>
  );
}

export default Projects;
