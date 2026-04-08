import React from "react";
import SectionTitle from "./SectionTitle";

const WhyHireMe: React.FC = () => {
  const highlights = [
    "M.S. Computer Science, GWU with focus on distributed systems and ML",
    "6 applications shipped and deployed with end-to-end ownership",
    "1,200+ active users across production projects",
    "React / Next.js, FastAPI, PostgreSQL, Docker, AWS, CI/CD",
    "RAG pipelines, anomaly detection, and forecasting in production",
    "AWS Cloud Foundations + Cloud Operations certified",
  ];

  return (
    <section className="py-24 bg-bg-surface/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionTitle
          title="What I Bring"
          subtitle="Shipped products. Measurable outcomes."
        />

        <div className="rounded-2xl border border-border-primary bg-card p-8 md:p-10">
          <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-4xl">
            I build production-grade software at the intersection of product,
            machine learning, and systems design. The focus is consistent:
            shipping useful outcomes with clean architecture and measurable
            impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border-primary/60 px-4 py-3"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-primary shrink-0" />
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
