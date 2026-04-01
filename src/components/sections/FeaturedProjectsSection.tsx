import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import SectionTitle from "../SectionTitle";
import ProjectGrid from "../ui/ProjectGrid";
import { motionTokens } from "../../utils/motion";
import { Project } from "../../data/Projects";

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

/**
 * Featured projects section for Home page.
 * Extracted from Home.tsx for better component organization.
 */
export const FeaturedProjectsSection: React.FC<
  FeaturedProjectsSectionProps
> = ({ projects }) => {
  return (
    <section id="projects" className="py-24 bg-bg-primary">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="Selected work with code, demos, and technical writing."
        />
        <ProjectGrid projects={projects} variant="featured" />
        <motion.div
          className="text-center mt-12"
          variants={motionTokens.variants.fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            duration: motionTokens.duration.slow / 1000,
            delay: 0.4,
          }}
        >
          <Button as={Link} to="/projects" variant="primary" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
