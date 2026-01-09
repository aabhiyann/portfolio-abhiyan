import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { MotionCard } from "../ui/MotionCard";
import { motionTokens } from "../../utils/motion";
import { SafeImage } from "../ui";
import { Project } from "../../data/Projects";

interface ProjectGridProps {
  projects: Project[];
  variant?: "default" | "featured";
  className?: string;
}

/**
 * Reusable grid component for displaying project cards.
 * Extracted from Home.tsx to eliminate code duplication.
 *
 * @param projects - Array of projects to display
 * @param variant - 'featured' shows compact cards with stats, 'default' shows full cards
 */
export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  variant = "default",
  className,
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${className || ""}`}
    >
      {projects.map((project, index) => (
        <MotionCard
          key={project.id}
          className="h-full flex flex-col"
          variants={motionTokens.variants.fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            duration: motionTokens.duration.slow / 1000,
            delay: 0.1 + index * 0.1,
          }}
          whileHover={{ y: -8 }}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="mb-4 overflow-hidden rounded-lg aspect-video relative group">
              <SafeImage
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                fallback="/images/project-placeholder.png"
              />
              {/* Glassy overlay on hover */}
              <div className="absolute inset-0 gradient-overlay-image opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 p-4">
                {project.caseStudyUrl && (
                  <Button
                    as={Link}
                    to={project.caseStudyUrl}
                    size="sm"
                    variant="primary"
                    className="w-full max-w-[140px]"
                  >
                    Read Case Study
                  </Button>
                )}
                {(project.live || project.github) && (
                  <Button
                    as="a"
                    href={project.live || project.github}
                    target="_blank"
                    size="sm"
                    variant={project.caseStudyUrl ? "outline" : "primary"}
                    className="w-full max-w-[140px] btn-overlay"
                  >
                    View Project
                  </Button>
                )}
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-text-primary font-heading">
              {project.title}
            </h3>
            <p className="text-text-muted mb-4 flex-grow line-clamp-3 text-sm">
              {project.description}
            </p>

            {/* Stats */}
            {variant === "featured" && project.stats && (
              <div className="flex gap-4 mb-4 border-y border-border-primary/50 py-2">
                {project.stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="text-xs">
                    <span className="text-text-muted block text-[10px] uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <span className="font-mono text-accent-primary font-medium">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </MotionCard>
      ))}
    </div>
  );
};

export default ProjectGrid;
