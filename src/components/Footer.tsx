import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border-primary bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-8 text-sm text-text-muted">
          {/* Left: social + site links */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/aabhiyann"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/abhiyansainju"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors"
              >
                LinkedIn
              </a>
              <Link
                to="/resume"
                className="hover:text-text-primary transition-colors"
              >
                Resume
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <Link
                to="/now"
                className="hover:text-text-primary transition-colors"
              >
                Now
              </Link>
              <Link
                to="/uses"
                className="hover:text-text-primary transition-colors"
              >
                Uses
              </Link>
              <Link
                to="/deep-dives"
                className="hover:text-text-primary transition-colors"
              >
                Writing
              </Link>
            </div>
          </div>

          {/* Right: byline + copyright */}
          <div className="flex flex-col items-start sm:items-end gap-1 text-xs">
            <span>Designed and built by hand in Washington, DC</span>
            <span>&copy; {new Date().getFullYear()} Abhiyan Sainju</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
