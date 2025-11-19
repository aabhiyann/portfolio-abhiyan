import { useState } from "react";
import { motion } from "framer-motion";
import { motionTokens } from "../utils/Motion";
import { projects as initialProjects } from "../data/Projects";
import Page from "../components/Page";
import { Card } from "../components/ui/Card";
import SectionTitle from "../components/SectionTitle";
import ProjectDeconstructor from "../components/ProjectDeconstructor";
import { Button, Chip } from "../components/ui";
import useSeo from "../utils/useSeo";
import useStructuredData from "../utils/useStructuredData";

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

  useSeo({
    title: "Projects – Abhiyan Sainju",
  useSeo({
    title: "Projects – Abhiyan Sainju",
    description:
      "Explore a collection of software engineering projects by Abhiyan Sainju, showcasing expertise in web development, cloud, and AI.",
    keywords:
      "Abhiyan Sainju projects, software development portfolio, web projects, cloud projects, AI projects",
  });

  return (
    <Page>
      <section
        className="relative py-24 min-h-screen"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <SectionTitle
              title="Projects"
              subtitle="A collection of projects that showcase my passion for building innovative solutions that solve real-world problems with modern technology."
            />

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {initialProjects.map((project, index) => (
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
                    className="flex flex-col bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 hover:bg-white/15 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none"
                  >
                    <div className="aspect-video bg-gradient-to-br from-white/15 to-white/5 relative overflow-hidden group border-b border-white/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-md shadow-black/10">
                          💡 {project.description}
                        </span>
                      </div>

                      <p className="text-white/80 mb-6 leading-relaxed flex-grow">
                        {project.story}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <Chip key={tech} size="sm">
                            {tech}
                          </Chip>
                        ))}
                      </div>

                      <div className="flex gap-4 items-center mt-auto pt-4 border-t border-white/10">
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
                              setSelectedArch(project.architecture)
                            }
                            variant="ghost"
                            size="sm"
                          >
                            Architecture
                          </Button>
                        )}
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
