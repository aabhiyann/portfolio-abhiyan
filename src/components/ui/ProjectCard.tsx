import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Project } from "../../data/Projects";
import { Button, Chip, SafeImage } from "./";

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
  return (
    <motion.div
      className="flex flex-col glass-card glass-card-hover group h-full overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-video relative overflow-hidden border-b border-border-primary/50">
        <SafeImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Live Status Indicator */}
        {project.live && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-surface/80 backdrop-blur-md border border-border-primary/50">
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-xs font-medium text-text-primary tracking-wide">
                Live
              </span>
            </div>
          </div>
        )}

        {/* Glassy overlay on hover - consistent with photography gallery */}
        <div className="absolute inset-0 gradient-overlay-image opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-center justify-center gap-4">
          {project.caseStudyUrl && (
            <Button
              as={Link}
              to={project.caseStudyUrl}
              variant="primary"
              size="sm"
              className="shadow-xl"
            >
              Read Case Study
            </Button>
          )}
          {(project.live || project.github) && !project.caseStudyUrl && (
            <Button
              as="a"
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="shadow-xl"
            >
              View Project
            </Button>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text-primary mb-3 font-heading group-hover:text-accent-primary transition-colors truncate">
          {project.title}
        </h3>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <Chip
              key={category}
              variant="default"
              size="sm"
              className="bg-bg-surface/50"
            >
              {category}
            </Chip>
          ))}
          {project.stats?.slice(0, 2).map((stat) => (
            <Chip key={stat.label} variant="accent" size="sm">
              {stat.value}
            </Chip>
          ))}
        </div>

        <p className="text-text-muted mb-6 leading-relaxed flex-grow line-clamp-3">
          {project.story || project.description}
        </p>

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

          {/* New Deep Dive Button */}
          {project.deepDiveId && (
            <Button
              as={Link}
              to={`/deep-dives/${project.deepDiveId}`}
              variant="outline"
              size="sm"
              className="font-medium inline-flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              Technical Deep Dive
            </Button>
          )}

          <div className="flex-grow"></div>

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
              onClick={() => onArchitectureClick?.(project.architecture!)}
              variant="ghost"
              size="sm"
            >
              Architecture
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
