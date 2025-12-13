import React from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import SEO from "../components/SEO";
import Button from "../components/ui/Button";

const DeepDiveDetail: React.FC = () => {
  return (
    <Page>
      <SEO
        title="Article Coming Soon | Abhiyan Sainju"
        description="In-depth technical articles by Abhiyan Sainju are coming soon. Check back later for deep dives into AI, system design, and software engineering."
      />
      <section className="py-24 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="text-6xl">📝</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6 font-heading">
            Article Coming Soon
          </h1>
          <p className="text-xl text-text-muted mb-8 leading-relaxed">
            I'm working on in-depth technical articles about AI, system design,
            and software engineering. Check back soon!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as={Link} to="/deep-dives" variant="primary" size="lg">
              ← Back to Articles
            </Button>
            <Button as={Link} to="/projects" variant="outline" size="lg">
              View Projects Instead
            </Button>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default DeepDiveDetail;
