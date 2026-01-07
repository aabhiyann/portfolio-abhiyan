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
                    <ProjectCard
                      project={project}
                      onArchitectureClick={setSelectedArch}
                    />
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
