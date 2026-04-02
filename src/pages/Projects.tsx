import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  projects as initialProjects,
  Project,
  categories as projectCategories,
} from "../data/Projects";
import Page from "../components/Page";
import SectionTitle from "../components/SectionTitle";
import ProjectDeconstructor from "../components/ProjectDeconstructor";
import { Button, Chip, ProjectCard } from "../components/ui";
import SEO from "../components/SEO";
import ProjectFilters from "../components/ProjectFilters";
import ContactSection from "../components/ContactSection";
import { GitHubActivity } from "../components/GitHubActivity";
import { FileText } from "lucide-react";

interface Architecture {
  nodes: Array<{
    id: string;
    label: string;
    position: { x: number; y: number };
  }>;
  connections: Array<{ from: string; to: string }>;
}

function Projects() {
  const [selectedArch, setSelectedArch] = useState<Architecture | null>(null);
  const projects = initialProjects;
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = projectCategories;

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.categories.includes(activeCategory));
  }, [projects, activeCategory]);

  return (
    <Page>
      <SEO
        title="Software Engineering Projects | Abhiyan Sainju"
        description="Six production projects by Abhiyan Sainju — ML forecasting, RAG document chat, audio classification, real-time collaboration. React, FastAPI, PyTorch, Docker."
        keywords={[
          "Projects",
          "Portfolio",
          "Case Studies",
          "Source Code",
          "React Projects",
          "AI Projects",
        ]}
      />
      <section className="relative py-24 min-h-screen font-heading">
        <div className="relative z-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <SectionTitle
              title="Projects"
              subtitle="Selected engineering work across product, ML systems, and applied research."
            />

            <ProjectFilters
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.length === 0 ? (
                  <motion.div
                    className="col-span-full text-center py-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
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
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">
                        No Projects Found
                      </h3>
                      <p className="text-text-muted mb-6">
                        No projects match the "{activeCategory}" category
                      </p>
                      <button
                        onClick={() => setActiveCategory("All")}
                        className="px-6 py-3 rounded-lg bg-accent-primary text-white font-medium hover:bg-accent-primary/90 transition-colors"
                      >
                        View All Projects
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  filteredProjects.map((project) => (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProjectCard
                        project={project}
                        onArchitectureClick={setSelectedArch}
                      />
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <GitHubActivity />
        </div>
      </section>

      <ContactSection />

      {selectedArch && (
        <ProjectDeconstructor
          architecture={selectedArch}
          onClose={() => setSelectedArch(null)}
        />
      )}
    </Page>
  );
}

export default Projects;
