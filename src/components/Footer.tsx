import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border-primary bg-bg-surface">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <div className="flex items-center gap-6">
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
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-right">
            <span>Designed and built by hand in Washington, DC</span>
            <span>&copy; {new Date().getFullYear()} Abhiyan Sainju</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
