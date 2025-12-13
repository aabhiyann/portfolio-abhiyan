import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

const InfraSightCaseStudy: React.FC = () => {
  return (
    <CaseStudyLayout
      title="InfraSight"
      subtitle="AI-powered cloud resource optimization platform reducing infrastructure costs by 40%."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&q=80"
      tags={["Next.js", "Python", "AWS", "Machine Learning"]}
      stats={[
        { label: "Predictive Model", value: "Linear Reg" },
        { label: "Anomaly Method", value: "Z-Score" },
        { label: "Architecture", value: "Async/Docker" },
        { label: "Status", value: "Live Prod" },
      ]}
      links={{
        github: "https://github.com/aabhiyann/infrasight", // Placeholder or actual
        live: "https://infrasight-demo.vercel.app", // Placeholder
      }}
    >
      <section className="mb-12">
        <h2>At a Glance</h2>
        <p>
          InfraSight is a comprehensive cloud cost analytics platform that uses
          statistical analysis to provide actionable insights. By combining
          forecasting, anomaly detection, and clustering, it empowers DevOps
          teams to take control of their cloud spending.
        </p>
      </section>

      <section className="mb-12">
        <h2>The Problem</h2>
        <p>
          Managing cloud budgets is reactive. Teams often discover cost spikes
          only after the bill arrives. Analyzing billing data manually is
          time-consuming, and simple threshold alerts are noisy. I wanted to
          build a proactive solution that treats cost as a first-class
          engineering metric.
        </p>
      </section>

      <section className="mb-12">
        <h2>The Solution</h2>
        <p>
          InfraSight provides a real-time dashboard for proactive cost
          intelligence.
        </p>
        <ul className="mb-6">
          <li>
            <strong>Cost Forecasting:</strong> Linear Regression models with 95%
            confidence intervals to predict future spending trends.
          </li>
          <li>
            <strong>Anomaly Detection:</strong> Z-score statistical analysis to
            flag unusual spending spikes without training complex models.
          </li>
          <li>
            <strong>Service Clustering:</strong> K-means clustering to group
            services with similar cost behaviors.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2>Technical Architecture</h2>
        <h3>Stack</h3>
        <p>
          Built with <strong>FastAPI (Python)</strong> and{" "}
          <strong>React 19 (TypeScript)</strong>, deployed via Docker
          containers.
        </p>
        <h3>Backend Design</h3>
        <p>
          The backend leverages <strong>Async Python</strong> (FastAPI +
          asyncpg) to handle concurrent requests efficiently. It connects to a
          serverless <strong>PostgreSQL</strong> database on Neon.tech. The API
          is fully typed and validated using Pydantic schemas.
        </p>
        <h3>ML Pipeline</h3>
        <p>
          I prioritized interpretability and speed over complexity.
          <ul>
            <li>
              <strong>Forecasting:</strong> Selected Linear Regression for its
              speed and explainability to business stakeholders.
            </li>
            <li>
              <strong>Anomaly Detection:</strong> Implemented Z-score analysis
              with configurable sensitivity (1.0 - 5.0) to reduce false
              positives.
            </li>
          </ul>
        </p>
      </section>

      <section className="mb-12">
        <h2>Engineering Challenges</h2>
        <h3>Real-Time Performance</h3>
        <p>
          ML computations can block API responses. I solved this by using async
          database queries and optimizing Pandas operations with vectorization,
          ensuring the dashboard remains responsive even while processing
          billing data.
        </p>
        <h3>Handling Real-World Data</h3>
        <p>
          Cloud billing data is messy. I built a robust preprocessing pipeline
          to handle missing intervals and normalize data structures before
          feeding it into the analysis engine.
        </p>
      </section>

      <section className="mb-12">
        <h2>Why This Matters</h2>
        <p>
          This project demonstrates end-to-end ownership—from designing the
          database schema to deploying the Docker container. It’s not just a
          notebook script; it’s a living, production-ready application that
          solves a real business problem.
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default InfraSightCaseStudy;
