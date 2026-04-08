import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  onArchitectureClick: _onArchitectureClick,
}: ProjectCardProps) => {
  const primaryProof = project.stats?.[0];
  const primaryAction = project.caseStudyUrl
    ? { type: "case-study" as const, href: project.caseStudyUrl }
    : project.live
      ? { type: "live" as const, href: project.live }
      : project.github
        ? { type: "github" as const, href: project.github }
        : null;

  const secondaryAction =
    primaryAction?.type !== "github" && project.github
      ? { type: "github" as const, href: project.github }
      : primaryAction?.type !== "live" && project.live
        ? { type: "live" as const, href: project.live }
        : null;

  return (
    <motion.div
      className="flex flex-col group h-full overflow-hidden rounded-2xl bg-card border border-border-primary/80 shadow-sm hover:border-accent-primary/20 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="aspect-video relative overflow-hidden border-b border-border-primary/50 shadow-sm">
        <SafeImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* Live indicator */}
        {project.live && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-medium text-white tracking-wide">
                {project.status}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category + stat */}
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

        <div className="mb-5 text-sm text-text-secondary">
          <span className="font-medium text-text-primary">Built with </span>
          <span>{project.tech.slice(0, 4).join(", ")}</span>
        </div>

        {/* Card actions: max 2 total */}
        <div className="flex flex-wrap gap-3 items-center mb-4">
          {primaryAction?.type === "case-study" && (
            <Button
              as={Link}
              to={primaryAction.href}
              variant="primary"
              size="sm"
              className="font-medium"
            >
              Case Study
            </Button>
          )}
          {primaryAction?.type === "live" && (
            <Button
              as="a"
              href={primaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              className="font-medium"
            >
              Live Demo
            </Button>
          )}
          {primaryAction?.type === "github" && (
            <Button
              as="a"
              href={primaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="font-medium"
            >
              Source Code
            </Button>
          )}
          {secondaryAction?.type === "github" && (
            <a
              href={secondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-accent-primary transition-colors"
            >
              GitHub
            </a>
          )}
          {secondaryAction?.type === "live" && (
            <a
              href={secondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-accent-primary transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
