import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Project } from "../../data/Projects";
import { Button, SafeImage } from "./";

interface ProjectCardProps {
  project: Project;
  onArchitectureClick?: (
    architecture: NonNullable<Project["architecture"]>,
  ) => void;
}

export const ProjectCard = ({
  project,
  onArchitectureClick,
}: ProjectCardProps) => {
  const primaryProof = project.stats?.[0];
  const primaryActionLabel = project.caseStudyUrl
    ? "Case Study"
    : project.live
      ? "Open Demo"
      : "Source Code";
  const primaryActionHref =
    project.caseStudyUrl || project.live || project.github;

  return (
    <motion.div
      className="flex flex-col group h-full overflow-hidden rounded-2xl bg-card border border-border-primary/80 shadow-sm hover:border-accent-primary/20 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-video relative overflow-hidden border-b border-border-primary/50">
        <SafeImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* Live Status Indicator */}
        {project.live && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-xs font-medium text-white tracking-wide">
                Live
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3 text-xs uppercase tracking-[0.18em] text-text-muted">
          <span>{project.categories.slice(0, 2).join(" / ")}</span>
          {primaryProof && (
            <span className="text-accent-primary font-mono tracking-[0.14em]">
              {primaryProof.label}: {primaryProof.value}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-text-primary mb-3 font-heading group-hover:text-accent-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-text-muted mb-6 leading-relaxed flex-grow line-clamp-3">
          {project.story || project.description}
        </p>

        <div className="mb-6 text-sm text-text-secondary">
          <span className="font-medium text-text-primary">Built with </span>
          <span>{project.tech.slice(0, 4).join(", ")}</span>
        </div>

        <div className="flex gap-4 items-center mt-auto pt-4 border-t border-border-primary flex-wrap">
          {primaryActionHref &&
            (project.caseStudyUrl ? (
              <Button
                as={Link}
                to={primaryActionHref}
                variant="primary"
                size="sm"
                className="font-medium"
              >
                {primaryActionLabel}
              </Button>
            ) : (
              <Button
                as="a"
                href={primaryActionHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                className="font-medium"
              >
                {primaryActionLabel}
              </Button>
            ))}

          <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
            {project.deepDiveId && (
              <Link
                to={`/deep-dives/${project.deepDiveId}`}
                className="inline-flex items-center gap-2 hover:text-accent-primary transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                Read Deep Dive
              </Link>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-primary transition-colors"
              >
                GitHub
              </a>
            )}
            {project.live && project.caseStudyUrl && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-primary transition-colors"
              >
                Live Demo
              </a>
            )}
            {project.architecture && (
              <button
                type="button"
                onClick={() => onArchitectureClick?.(project.architecture!)}
                className="hover:text-accent-primary transition-colors"
              >
                Architecture
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
