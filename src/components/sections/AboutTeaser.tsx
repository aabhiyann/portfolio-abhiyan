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
          title="My Journey"
          subtitle="I don't just write code; I solve problems. From teaching algorithms to 60+ grad students to shipping production apps used by thousands."
        />
        <Button as={Link} to="/about" variant="primary" size="lg">
          Read My Story
        </Button>
      </div>
    </section>
  );
};

export default AboutTeaser;
