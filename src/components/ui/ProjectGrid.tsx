import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { MotionCard } from "../ui/MotionCard";
import { motionTokens } from "../../utils/motion";
import { SafeImage } from "../ui";
import { Project } from "../../data/Projects";

interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

/**
 * Reusable grid component for displaying project cards.
 * Extracted from Home.tsx to eliminate code duplication.
 *
 * @param projects - Array of projects to display
 */
export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
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

              {/* Live Status Indicator */}
              {project.live && (
                <div className="absolute top-3 right-3 z-10">
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/55 border border-white/10">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="text-[10px] font-medium text-white tracking-wide">
                      Live
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-text-muted">
              <span>{project.categories.slice(0, 2).join(" / ")}</span>
              {project.stats?.[0] && (
                <span className="font-mono text-accent-primary tracking-[0.14em]">
                  {project.stats[0].label}: {project.stats[0].value}
                </span>
              )}
            </div>

            <h3 className="text-xl font-semibold mb-3 text-text-primary font-heading">
              {project.title}
            </h3>
            <p className="text-text-muted mb-4 flex-grow line-clamp-3 text-sm leading-relaxed">
              {project.story || project.description}
            </p>

            <div className="mt-auto pt-4 border-t border-border-primary/50">
              <div className="text-sm text-text-secondary mb-4">
                <span className="font-medium text-text-primary">
                  Built with{" "}
                </span>
                <span>{project.tech.slice(0, 3).join(", ")}</span>
              </div>

              <div className="flex items-center justify-between gap-4 flex-wrap">
                {project.caseStudyUrl ? (
                  <Button
                    as={Link}
                    to={project.caseStudyUrl}
                    size="sm"
                    variant="primary"
                  >
                    Case Study
                  </Button>
                ) : (
                  <Button
                    as="a"
                    href={project.live || project.github}
                    target="_blank"
                    size="sm"
                    variant="primary"
                  >
                    Open Project
                  </Button>
                )}

                <div className="flex items-center gap-4 text-sm text-text-secondary">
                  {project.live && project.caseStudyUrl && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="hover:text-accent-primary transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="hover:text-accent-primary transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MotionCard>
      ))}
    </div>
  );
};

export default ProjectGrid;
