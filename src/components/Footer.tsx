import React from "react";
import { Link } from "react-router-dom";

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    className="text-white/70 hover:text-white transition-colors duration-300"
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
    className="text-white/70 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer
      className="border-t border-white/10 backdrop-blur-sm bg-black/50 relative before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/5 before:to-transparent before:pointer-events-none"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-white">Work</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/photography">Photography</FooterLink>
              <FooterLink to="/deep-dives">Deep Dives</FooterLink>
            </nav>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-white">Connect</h4>
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
            <h4 className="font-semibold text-white">Resources</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink to="/about">About</FooterLink>
              <a
                href="/Abhiyan_Sainju_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                Resume
              </a>
            </nav>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-white">Side Quests</h4>
            <p className="text-sm text-white/70">
              Currently experimenting with Agentic AI workflows and reading
              'Designing Data-Intensive Applications'.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/70">
          <p>
            &copy; {new Date().getFullYear()} Abhiyan Sainju. Built with React &
            Tailwind.
          </p>
          <p className="text-xs text-white/50 mt-2">
            Built with accessibility in mind (ARIA compliant).
          </p>
          <div className="flex justify-center mt-4">
            <img
              src="https://img.shields.io/github/last-commit/aabhiyann/portfolio-abhiyan?style=flat-square&color=black"
              alt="Last Commit"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
