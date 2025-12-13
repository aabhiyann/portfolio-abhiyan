import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

const InfraSightCaseStudy: React.FC = () => {
  return (
    <CaseStudyLayout
      title="InfraSight"
      subtitle="ML-powered cloud cost analytics platform with forecasting, anomaly detection, and clustering. Live production app."
      heroImage="/images/projects/infrasight.png"
      tags={["React", "FastAPI", "PostgreSQL", "Machine Learning", "Docker"]}
      stats={[
        { label: "Status", value: "🟢 LIVE" },
        { label: "Forecasting", value: "Linear Reg" },
        { label: "Anomaly Detection", value: "Z-Score" },
        { label: "Architecture", value: "Async/Docker" },
      ]}
      links={{
        github: "https://github.com/aabhiyann/infrasight",
        live: "https://infrasight.netlify.app",
      }}
    >
      <section className="mb-12">
        <h2>At a Glance</h2>
        <div className="mb-6 p-6 rounded-2xl glass-card">
          <p className="text-lg font-semibold mb-4">
            🟢 <strong>LIVE PRODUCTION APP</strong> - Not just a GitHub repo
          </p>
          <p className="mb-2">
            <strong>Live Demo:</strong>{" "}
            <a
              href="https://infrasight.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-primary hover:underline"
            >
              infrasight.netlify.app
            </a>
          </p>
          <p className="mb-2">
            <strong>Demo Credentials:</strong> demo@infrasight.com / password123
          </p>
          <p className="mb-2">
            <strong>API Docs:</strong>{" "}
            <a
              href="https://infrasight-rs1b.onrender.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-primary hover:underline"
            >
              Auto-generated OpenAPI/Swagger
            </a>
          </p>
        </div>
        <p>
          InfraSight is a production-ready cloud cost analytics platform that
          combines ML-powered forecasting, statistical anomaly detection, and
          service clustering. Built as a solo full-stack project, it
          demonstrates end-to-end ownership from database design to production
          deployment.
        </p>
      </section>

      <section className="mb-12">
        <h2>The Problem</h2>
        <p>
          <strong>Who needs this:</strong> DevOps teams managing cloud
          infrastructure, finance teams forecasting costs, engineering managers
          needing spending visibility.
        </p>
        <p>
          <strong>The pain:</strong> Cloud billing dashboards are complex and
          reactive. Teams discover cost spikes after they're billed. Manual
          analysis is time-consuming. No easy way to spot unusual spending.
        </p>
        <p>
          <strong>Why I built it:</strong> I wanted a proactive,
          analytics-driven approach to cloud cost management that combines
          statistical analysis with intuitive visualizations.
        </p>
      </section>

      <section className="mb-12">
        <h2>The Solution</h2>
        <p>InfraSight provides four core capabilities:</p>
        <ul className="mb-6 space-y-3">
          <li>
            <strong>Cost Forecasting:</strong> Linear Regression with confidence
            intervals to predict future spending per service. Configurable
            forecast periods (1-30 days).
          </li>
          <li>
            <strong>Anomaly Detection:</strong> Z-score statistical method with
            configurable sensitivity thresholds (1.0-5.0). Detects both high and
            low anomalies.
          </li>
          <li>
            <strong>Service Clustering:</strong> K-means clustering to identify
            services with similar cost behaviors. Helps find spending patterns.
          </li>
          <li>
            <strong>Recommendations:</strong> Rule-based optimization
            suggestions combining anomalies and budget constraints.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2>Technical Architecture</h2>
        <div className="mb-6 p-6 rounded-2xl glass-card">
          <pre className="text-sm font-mono overflow-x-auto">
            {`┌──────────────┐     REST API      ┌──────────────┐     SQL      ┌──────────────┐
│  React + TS  │◄─────────────────►│   FastAPI    │◄────────────►│ PostgreSQL   │
│  Chart.js    │                    │  + ML Engine │              │ (Neon.tech)  │
│  (Netlify)   │                    │  (Render)    │              │              │
└──────────────┘                    └──────────────┘              └──────────────┘`}
          </pre>
        </div>

        <h3>Backend (FastAPI + PostgreSQL)</h3>
        <p>
          <strong>API Design:</strong> 10+ RESTful endpoints with JWT
          authentication, role-based access (admin/user), Pydantic schemas for
          validation, auto-generated OpenAPI/Swagger docs, and async request
          handling with asyncio.
        </p>
        <p>
          <strong>Database:</strong> Async SQLAlchemy + asyncpg for non-blocking
          queries. Serverless PostgreSQL on Neon.tech with connection pooling.
        </p>
        <p>
          <strong>ML Pipeline:</strong>
        </p>
        <ul className="mb-4">
          <li>
            <strong>Forecasting:</strong> Linear Regression with temporal
            features (day-of-week, weekend patterns). Provides per-service
            predictions with 95% confidence intervals.
          </li>
          <li>
            <strong>Anomaly Detection:</strong> Z-score statistical analysis
            with configurable thresholds (default 2.0, user-adjustable 1.0-5.0).
            No training required, works immediately.
          </li>
          <li>
            <strong>Clustering:</strong> K-means for service pattern grouping
            (default 3 clusters). Features daily cost vectors per service.
          </li>
        </ul>

        <h3>Frontend (React 19 + TypeScript)</h3>
        <p>
          Component-based design with custom hooks, Chart.js for interactive
          visualizations, custom CSS with responsive utilities, three theme
          modes (Dark, Light, High-Contrast), and accessibility-focused design
          (keyboard nav, color contrast).
        </p>

        <h3>Deployment</h3>
        <ul>
          <li>
            <strong>Frontend:</strong> Netlify (CDN, auto-deploy from main)
          </li>
          <li>
            <strong>Backend:</strong> Render (Docker container, health checks)
          </li>
          <li>
            <strong>Database:</strong> Neon.tech (Serverless PostgreSQL)
          </li>
          <li>
            <strong>CI/CD:</strong> GitHub Actions (Automated testing on push)
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2>Engineering Challenges</h2>
        <h3>Challenge 1: Real-Time ML API Performance</h3>
        <p>
          <strong>Problem:</strong> ML computations could slow down API
          responses.
        </p>
        <p>
          <strong>Solution:</strong> Used async SQLAlchemy + asyncpg for
          non-blocking queries, implemented GZip compression middleware, and
          optimized pandas operations with vectorization.
        </p>
        <p>
          <strong>Result:</strong> Responsive API that handles forecasting +
          clustering without blocking.
        </p>

        <h3>Challenge 2: Meaningful Anomaly Detection</h3>
        <p>
          <strong>Problem:</strong> Simple threshold-based detection produces
          too many false positives.
        </p>
        <p>
          <strong>Solution:</strong> Implemented Z-score statistical method,
          made threshold configurable (users tune sensitivity: 1.0-5.0), added
          service-level filtering, and included Z-score values so users
          understand severity.
        </p>
        <p>
          <strong>Result:</strong> Flexible anomaly detection users can
          customize.
        </p>

        <h3>Challenge 3: Handling Time-Series Cost Data</h3>
        <p>
          <strong>Problem:</strong> Cloud billing data has varying granularity
          and potential gaps.
        </p>
        <p>
          <strong>Solution:</strong> Built data preprocessing pipeline for
          normalization, created pivot table transformations for service-level
          analysis, and added flexible date-range filtering.
        </p>
        <p>
          <strong>Result:</strong> Robust handling of real-world billing data.
        </p>
      </section>

      <section className="mb-12">
        <h2>Why This Matters</h2>
        <div className="mb-6 p-6 rounded-2xl bg-accent-primary/5 border border-accent-primary/10">
          <h3 className="text-xl font-bold mb-4 text-accent-primary">
            For Recruiters:
          </h3>
          <ul className="space-y-2">
            <li>
              ✅ <strong>Live Production App</strong> - Not just a GitHub repo
            </li>
            <li>
              ✅ <strong>Full-Stack Ownership</strong> - Built every layer solo
            </li>
            <li>
              ✅ <strong>Modern Tech Stack</strong> - React 19, async Python,
              TypeScript
            </li>
            <li>
              ✅ <strong>Real ML Techniques</strong> - Practical, working
              solutions
            </li>
            <li>
              ✅ <strong>Production DevOps</strong> - Docker, CI/CD, cloud
              deployment
            </li>
            <li>
              ✅ <strong>Accessible Design</strong> - 3 theme modes, keyboard
              navigation
            </li>
          </ul>
        </div>

        <h3>What I Built (Complete Ownership)</h3>
        <ul className="mb-4">
          <li>
            ✅ Full Backend API - 10+ endpoints with auth, validation, error
            handling
          </li>
          <li>
            ✅ ML Pipeline - Forecasting, anomaly detection, clustering from
            scratch
          </li>
          <li>
            ✅ React Dashboard - Interactive charts, filters, responsive design
          </li>
          <li>✅ Production Deployment - Docker, CI/CD, cloud hosting</li>
          <li>✅ Database Design - Schema, models, async queries</li>
          <li>
            ✅ Auth System - JWT tokens, password hashing, role-based access
          </li>
        </ul>

        <h3>Why I Chose "Simple" ML Techniques</h3>
        <p>
          I prioritized <strong>production readiness</strong> over model
          complexity:
        </p>
        <ul>
          <li>
            <strong>Linear Regression:</strong> Interpretable, fast, provides
            confidence intervals. Perfect for business stakeholders who need to
            understand predictions.
          </li>
          <li>
            <strong>Z-Score:</strong> Simple, interpretable, no training
            required. Works immediately and is configurable.
          </li>
          <li>
            <strong>K-Means:</strong> Scalable, production-ready clustering.
            Helps find natural groupings in spending.
          </li>
        </ul>
        <p>
          <em>
            If I had more time, I'd explore ARIMA or Prophet for time-series
            forecasting, but these were the right choices for an MVP that needed
            to ship.
          </em>
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default InfraSightCaseStudy;
