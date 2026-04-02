import React from "react";
import { Link } from "react-router-dom";

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    className="text-text-muted hover:text-text-primary transition-colors duration-300 block py-1.5"
  >
    {children}
  </Link>
);

interface ExternalFooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalFooterLink: React.FC<ExternalFooterLinkProps> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-text-muted hover:text-text-primary transition-colors duration-300 block py-1.5"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border-primary bg-bg-primary">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.24em] text-accent-primary">
              Work
            </h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/photography">Photography</FooterLink>
              <FooterLink to="/deep-dives">Deep Dives</FooterLink>
            </nav>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.24em] text-accent-primary">
              Connect
            </h4>
            <nav className="flex flex-col space-y-2">
              <ExternalFooterLink href="https://github.com/aabhiyann">
                GitHub
              </ExternalFooterLink>
              <ExternalFooterLink href="https://linkedin.com/in/abhiyansainju">
                LinkedIn
              </ExternalFooterLink>
              <ExternalFooterLink href="mailto:aabhiyansainju@gmail.com">
                Email
              </ExternalFooterLink>
              <ExternalFooterLink href="https://github.com/aabhiyann/portfolio-abhiyan">
                View Source
              </ExternalFooterLink>
            </nav>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.24em] text-accent-primary">
              Info
            </h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/resume">Resume</FooterLink>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border-primary text-center text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} Abhiyan Sainju</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
