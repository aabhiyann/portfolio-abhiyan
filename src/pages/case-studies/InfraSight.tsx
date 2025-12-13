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

      <section className="mb-12">
        <h2>ML Model Details</h2>

        <h3>Forecasting: Linear Regression</h3>
        <div className="mb-6 p-6 rounded-2xl glass-card">
          <p className="font-semibold mb-2">Why Linear Regression?</p>
          <ul className="space-y-2 mb-4">
            <li>
              ✅ <strong>Interpretable</strong> predictions for business
              stakeholders
            </li>
            <li>
              ✅ <strong>Fast</strong> inference for real-time API
            </li>
            <li>
              ✅ <strong>Effective</strong> for trend-based cost patterns
            </li>
            <li>
              ✅ Provides <strong>confidence intervals</strong> for uncertainty
            </li>
          </ul>
          <p className="mb-2">
            <strong>Features:</strong>
          </p>
          <ul className="space-y-1 mb-4">
            <li>
              • <code>day_number</code>: Captures linear trend
            </li>
            <li>
              • <code>is_weekend</code>: Accounts for weekend usage patterns
            </li>
          </ul>
          <p>
            <strong>Output:</strong> Per-service predictions with 95% confidence
            intervals
          </p>
        </div>

        <h3>Anomaly Detection: Z-Score</h3>
        <div className="mb-6 p-6 rounded-2xl glass-card">
          <p className="font-semibold mb-2">Why Z-Score?</p>
          <ul className="space-y-2 mb-4">
            <li>
              ✅ Simple, <strong>interpretable</strong> statistical method
            </li>
            <li>✅ No training required (works immediately)</li>
            <li>
              ✅ <strong>Configurable</strong> sensitivity
            </li>
            <li>✅ Detects both high and low anomalies</li>
          </ul>
          <p>
            <strong>Configuration:</strong> Default threshold: 2.0 (flags &gt;2
            standard deviations). User-adjustable from 1.0 to 5.0.
          </p>
        </div>

        <h3>Clustering: K-Means</h3>
        <div className="mb-6 p-6 rounded-2xl glass-card">
          <p className="font-semibold mb-2">Why K-Means?</p>
          <ul className="space-y-2 mb-4">
            <li>
              ✅ Identifies natural <strong>groupings</strong> in spending
            </li>
            <li>✅ Scalable to many services</li>
            <li>✅ Helps find services with similar cost behaviors</li>
          </ul>
          <p>
            <strong>Configuration:</strong> Default: 3 clusters. Features: Daily
            cost vectors per service.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2>What I Learned</h2>

        <h3>1. Full-Stack Solo Development</h3>
        <p>
          Building the entire stack alone taught me how frontend, backend, and
          database decisions interconnect. API design impacts frontend
          structure. Database schema affects query performance.
        </p>

        <h3>2. ML in Production vs. Notebooks</h3>
        <p>Productionizing ML is different:</p>
        <ul className="mb-4">
          <li>
            <strong>Fast inference</strong> matters as much as accuracy
          </li>
          <li>
            <strong>Interpretability</strong> is crucial for business
            stakeholders
          </li>
          <li>
            <strong>Clear error handling</strong> and fallbacks are essential
          </li>
          <li>
            <strong>Configurable parameters</strong> let users control behavior
          </li>
        </ul>
        <p>
          I chose Linear Regression and Z-score because they're{" "}
          <strong>fast, interpretable, and production-ready</strong>. If I had
          more time, I'd explore ARIMA or Prophet for time-series forecasting.
        </p>

        <h3>3. Async Python Patterns</h3>
        <p>Implementing async FastAPI + async SQLAlchemy taught me:</p>
        <ul className="mb-4">
          <li>Non-blocking I/O for concurrent requests</li>
          <li>Connection pooling for database efficiency</li>
          <li>Proper error handling in async contexts</li>
        </ul>

        <h3>4. DevOps for Solo Projects</h3>
        <p>Deploying a multi-service app taught me:</p>
        <ul>
          <li>Docker multi-stage builds for smaller images</li>
          <li>GitHub Actions for CI/CD automation</li>
          <li>Environment variable management</li>
          <li>CORS configuration for cross-origin requests</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2>Tech Stack Breakdown</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border-primary">
                <th className="text-left p-4 font-semibold text-text-primary">
                  Category
                </th>
                <th className="text-left p-4 font-semibold text-text-primary">
                  Technologies
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border-primary/50">
                <td className="p-4 font-medium text-text-primary">Frontend</td>
                <td className="p-4 text-text-secondary">
                  React 19, TypeScript, Chart.js, Vite, Custom CSS
                </td>
              </tr>
              <tr className="border-b border-border-primary/50">
                <td className="p-4 font-medium text-text-primary">Backend</td>
                <td className="p-4 text-text-secondary">
                  Python 3.11, FastAPI, Pydantic, SQLAlchemy
                </td>
              </tr>
              <tr className="border-b border-border-primary/50">
                <td className="p-4 font-medium text-text-primary">ML</td>
                <td className="p-4 text-text-secondary">
                  scikit-learn, pandas, NumPy
                </td>
              </tr>
              <tr className="border-b border-border-primary/50">
                <td className="p-4 font-medium text-text-primary">Database</td>
                <td className="p-4 text-text-secondary">
                  PostgreSQL (Neon.tech), asyncpg
                </td>
              </tr>
              <tr className="border-b border-border-primary/50">
                <td className="p-4 font-medium text-text-primary">Auth</td>
                <td className="p-4 text-text-secondary">
                  JWT (python-jose), bcrypt
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-text-primary">DevOps</td>
                <td className="p-4 text-text-secondary">
                  Docker, GitHub Actions, Netlify, Render
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2>What's Next</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Immediate Roadmap:</h3>
          <ul className="space-y-2 mb-6">
            <li>• ARIMA or Prophet for improved time-series forecasting</li>
            <li>• Isolation Forest for comparison with Z-score</li>
            <li>• Slack/Teams integration for alerts</li>
            <li>• Budget alerting system</li>
          </ul>
          <h3 className="text-lg font-semibold mb-3">Long-term Vision:</h3>
          <ul className="space-y-2">
            <li>• Multi-cloud support (Azure, GCP)</li>
            <li>• Team collaboration features</li>
            <li>• Mobile app for monitoring</li>
            <li>• Open-source community edition</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2>Try It Yourself</h2>
        <div className="p-6 rounded-2xl glass-card">
          <p className="mb-4">
            <strong>🌐 Live Demo:</strong>{" "}
            <a
              href="https://infrasight.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-primary hover:underline font-medium"
            >
              infrasight.netlify.app
            </a>
          </p>
          <p className="mb-4">
            <strong>📧 Demo Login:</strong>{" "}
            <code className="px-2 py-1 rounded bg-bg-surface text-text-primary">
              demo@infrasight.com
            </code>{" "}
            /{" "}
            <code className="px-2 py-1 rounded bg-bg-surface text-text-primary">
              password123
            </code>
          </p>
          <p className="mb-4">
            <strong>💻 Source Code:</strong>{" "}
            <a
              href="https://github.com/aabhiyann/infrasight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-primary hover:underline font-medium"
            >
              github.com/aabhiyann/infrasight
            </a>
          </p>
          <p>
            <strong>📖 API Docs:</strong>{" "}
            <a
              href="https://infrasight-rs1b.onrender.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-primary hover:underline font-medium"
            >
              Auto-generated OpenAPI/Swagger documentation
            </a>
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
};

export default InfraSightCaseStudy;
