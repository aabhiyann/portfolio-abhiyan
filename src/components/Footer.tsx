import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, children }) => (
  <Link to={to} className="text-secondary hover:text-primary transition-colors duration-300">
    {children}
  </Link>
);

const ExternalFooterLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-surface border-t border-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-primary">Work</h4>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/photography">Photography</FooterLink>
            <FooterLink to="/deep-dives">Deep Dives</FooterLink>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-primary">Connect</h4>
            <ExternalFooterLink href="https://github.com/aabhiyann">GitHub</ExternalFooterLink>
            <ExternalFooterLink href="https://linkedin.com/in/abhiyansainju">LinkedIn</ExternalFooterLink>
            <ExternalFooterLink href="mailto:abhiyan.sainju@email.com">Email</ExternalFooterLink>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-primary">Resources</h4>
            <FooterLink to="/about">About</FooterLink>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-300">Resume</a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-primary">Other</h4>
            <p className="text-sm text-secondary">Currently Listening: <span className="font-medium text-primary">IVE - Either Way</span></p>
            <p className="text-sm text-secondary">Visca Barça! 🔵🔴</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border-primary text-center text-sm text-secondary">
          <p>&copy; {new Date().getFullYear()} Abhiyan Sainju. Built with ❤️ using React, Vite, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
