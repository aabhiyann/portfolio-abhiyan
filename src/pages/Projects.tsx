import { useState } from "react";
import { motion } from "framer-motion";
import { motionTokens } from "../utils/Motion";
import { projects as initialProjects, Project } from "../data/projects";
import Page from "../components/Page";
import { Card } from "../components/ui/Card";
import SectionTitle from "../components/SectionTitle";
import ProjectDeconstructor from "../components/ProjectDeconstructor";
import { Button, Chip } from "../components/ui";
import SEO from "../components/SEO";

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
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  // Elaborate function - generates a more detailed description (placeholder for AI integration)
  const handleElaborate = async (projectId: number) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, isLoading: true } : p)),
    );

    // Simulate API call delay - in production, this would call an AI API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectId
          ? {
              ...p,
              isLoading: false,
              elaboratedDescription:
                p.story ||
                "This project showcases advanced engineering practices and innovative problem-solving approaches.",
            }
          : p,
      ),
    );
  };

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
                    className="flex flex-col bg-card border border-border-primary hover:border-accent-primary/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="aspect-video relative overflow-hidden group border-b border-border-primary">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                        <Chip variant="accent" size="sm">
                          {project.impact}
                        </Chip>
                      </div>

                      <p className="text-text-muted mb-6 leading-relaxed flex-grow line-clamp-3">
                        {project.story || project.description}
                      </p>

                      {project.elaboratedDescription && (
                        <p className="mb-6 text-sm text-text-muted bg-bg-surface/50 p-3 rounded-lg border border-border-primary">
                          {project.elaboratedDescription}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <Chip key={tech} size="sm">
                            {tech}
                          </Chip>
                        ))}
                      </div>

                      <div className="flex gap-4 items-center mt-auto pt-4 border-t border-border-primary">
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
                        <Button
                          onClick={() => handleElaborate(project.id)}
                          disabled={
                            !!project.isLoading ||
                            !!project.elaboratedDescription
                          }
                          variant="primary"
                          size="sm"
                          className="ml-auto"
                        >
                          {project.isLoading
                            ? "Generating..."
                            : project.elaboratedDescription
                              ? "Done"
                              : "Elaborate"}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
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
