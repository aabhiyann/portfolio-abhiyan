import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects as initialProjects, Project } from "../data/Projects";
import Page from "../components/Page";
import { Card } from "../components/ui/Card";
import SectionTitle from "../components/SectionTitle";
import ProjectDeconstructor from "../components/ProjectDeconstructor";
import { Button, Chip } from "../components/ui";
import SEO from "../components/SEO";
import ProjectFilters from "../components/ProjectFilters";
import ContactSection from "../components/ContactSection";

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

  const categories = ["All", "Full Stack", "ML/AI", "Research"];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <Page>
      <SEO
        title="Projects | Abhiyan Sainju"
        description="Explore a collection of my projects, from AI-driven SaaS platforms to full-stack web applications."
      />
      <section className="relative py-24 min-h-screen font-heading">
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <SectionTitle
              title="Projects"
              subtitle="A collection of projects that showcase my passion for building innovative solutions that solve real-world problems with modern technology."
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
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      interactive
                      className="flex flex-col bg-card border border-border-primary hover:border-accent-primary/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden group h-full"
                    >
                      <div className="aspect-video relative overflow-hidden group border-b border-border-primary">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                          {project.caseStudyUrl && (
                            <Button
                              as={Link}
                              to={project.caseStudyUrl}
                              variant="primary"
                              size="sm"
                              className="shadow-xl scale-95 group-hover:scale-100 transition-transform"
                            >
                              Read Case Study
                            </Button>
                          )}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity duration-300">
                          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-4 flex flex-wrap gap-2">
                          <Chip
                            variant="default"
                            size="sm"
                            className="bg-surface/50"
                          >
                            {project.category}
                          </Chip>
                          {project.stats?.slice(0, 2).map((stat) => (
                            <Chip key={stat.label} variant="accent" size="sm">
                              {stat.value}
                            </Chip>
                          ))}
                        </div>

                        <p className="text-text-muted mb-6 leading-relaxed flex-grow line-clamp-3">
                          {project.story || project.description}
                        </p>

                        {/* Elaborated description removed */}

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <Chip key={tech} size="sm">
                              {tech}
                            </Chip>
                          ))}
                        </div>

                        <div className="flex gap-4 items-center mt-auto pt-4 border-t border-border-primary flex-wrap">
                          {project.caseStudyUrl && (
                            <Button
                              as={Link}
                              to={project.caseStudyUrl}
                              variant="primary"
                              size="sm"
                              className="font-medium"
                            >
                              Case Study
                            </Button>
                          )}
                          <Button
                            as="a"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="ghost"
                            size="sm"
                          >
                            GitHub
                          </Button>
                          <Button
                            as="a"
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="ghost"
                            size="sm"
                            disabled={!project.live}
                          >
                            Live Demo
                          </Button>
                          {project.architecture && (
                            <Button
                              onClick={() =>
                                setSelectedArch(project.architecture ?? null)
                              }
                              variant="ghost"
                              size="sm"
                            >
                              Architecture
                            </Button>
                          )}
                          {/* Elaborate button removed for authenticity */}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
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
