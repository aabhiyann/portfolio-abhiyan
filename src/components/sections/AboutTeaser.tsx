import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import Button from "../ui/Button";

/**
 * About teaser section for Home page.
 * Extracted from Home.tsx for better component organization.
 */
export const AboutTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-primary/5 opacity-20 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <SectionTitle
          title="Engineering, teaching, and photography"
          subtitle="MS Computer Science at GWU, hands-on product engineering, and a parallel photography practice that keeps me paying attention to composition, pace, and detail."
        />
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button as={Link} to="/about" variant="primary" size="lg">
            About
          </Button>
          <Button as={Link} to="/photography" variant="outline" size="lg">
            Photography
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
