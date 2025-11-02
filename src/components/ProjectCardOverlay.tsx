import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardOverlayProps {
  projectUrl: string;
}

const ProjectCardOverlay: React.FC<ProjectCardOverlayProps> = ({
  projectUrl,
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none group-hover:pointer-events-auto">
      <Link
        to={projectUrl}
        className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm hover:bg-white/20 transition-colors pointer-events-auto"
      >
        View Project
      </Link>
    </div>
  );
};

export default ProjectCardOverlay;
