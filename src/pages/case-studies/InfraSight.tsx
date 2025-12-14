import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import MermaidDiagram from "../../components/MermaidDiagram";

const InfraSightCaseStudy: React.FC = () => {
  return (
    <CaseStudyLayout
      title="InfraSight"
      subtitle="ML-powered cloud cost analytics platform with forecasting, anomaly detection, and clustering. Live production app."
      heroImage="/images/projects/infrasight.png"
      tags={["React", "FastAPI", "PostgreSQL", "Machine Learning", "Docker"]}
      stats={[
        { label: "Status", value: "Live Production" },
        { label: "Timeline", value: "3 Months" },
        { label: "Role", value: "Solo Full-Stack" },
        { label: "Users", value: "Demo Available" },
      ]}
      links={{
        github: "https://github.com/aabhiyann/infrasight",
        live: "https://infrasight.netlify.app",
      }}
    >
      <section className="mb-12">
        <h2>Overview</h2>
        <p className="text-lg leading-relaxed mb-6">
          InfraSight is a production cloud cost analytics platform that helps
          engineering teams predict spending, detect anomalies, and optimize
          infrastructure costs. I built this as a solo full-stack project to
          demonstrate end-to-end ownership—from database design and ML
          implementation to production deployment and DevOps.
        </p>

        <div className="mb-6 p-6 rounded-2xl bg-accent-primary/5 border border-accent-primary/10">
          <p className="text-sm font-semibold text-accent-primary mb-3">
            LIVE DEMO AVAILABLE
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <strong>App:</strong>{" "}
              <a
                href="https://infrasight.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline"
              >
                infrasight.netlify.app
              </a>
            </p>
            <p>
              <strong>Credentials:</strong> demo@infrasight.com / password123
            </p>
            <p>
              <strong>API Docs:</strong>{" "}
              <a
                href="https://infrasight-rs1b.onrender.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline"
              >
                OpenAPI/Swagger Documentation
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>The Challenge</h2>
        <p className="text-lg leading-relaxed mb-4">
          Cloud infrastructure costs are notoriously difficult to manage. Teams
          often discover cost spikes only after they're billed, making it
          reactive rather than proactive. Existing cloud billing dashboards are
          complex, lack predictive capabilities, and don't provide actionable
          insights for optimization.
        </p>
        <p className="leading-relaxed">
          I wanted to build a solution that would help engineering teams stay
          ahead of their cloud spending through forecasting, automatically
          detect unusual patterns, and provide clear recommendations for cost
          optimization—all while being interpretable and fast enough for
          real-time use.
        </p>
      </section>

      <section className="mb-12">
        <h2>My Approach</h2>
        <p className="text-lg leading-relaxed mb-6">
          I designed InfraSight around three core principles:{" "}
          <strong>interpretability</strong> (stakeholders need to understand
          predictions), <strong>speed</strong> (real-time API responses), and{" "}
          <strong>production readiness</strong> (reliable, deployable ML).
        </p>

        <h3 className="text-xl font-semibold mb-4">Core Capabilities</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">Cost Forecasting</h4>
            <p className="leading-relaxed">
              I implemented Linear Regression with temporal features to predict
              future spending per service. The model provides 95% confidence
              intervals, giving teams a range of expected costs rather than a
              single point estimate. This transparency helps with budget
              planning and risk assessment.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Anomaly Detection</h4>
            <p className="leading-relaxed">
              Using Z-score statistical analysis, the system automatically flags
              unusual spending patterns. I made the sensitivity configurable
              (1.0-5.0 standard deviations) so teams can tune it to their
              tolerance for alerts. This approach requires no training data and
              works immediately on new services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">
              Service Clustering & Recommendations
            </h4>
            <p className="leading-relaxed">
              K-means clustering groups services with similar cost behaviors,
              helping teams identify patterns across their infrastructure.
              Combined with rule-based logic, the system generates actionable
              optimization recommendations based on detected anomalies and
              budget constraints.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>What It Looks Like</h2>
        <p className="mb-6">
          Here are screenshots from the live production app showing the key
          features:
        </p>

        <div className="space-y-8">
          {/* Cost Forecasting Dashboard */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Cost Forecasting Dashboard
            </h3>
            <div className="rounded-2xl overflow-hidden border border-border-primary/50 shadow-xl">
              <img
                src="/images/case-studies/infrasight/Overview page showing Cost graph for each service.png"
                alt="InfraSight Cost Forecasting Dashboard showing predictions with confidence intervals"
                className="w-full h-auto"
              />
            </div>
            <p className="mt-3 text-sm text-text-muted italic">
              Overview page showing cost graphs for each service. Predicts
              future spending per service with 95% confidence intervals.
              Interactive Chart.js visualizations.
            </p>
          </div>

          {/* Anomaly Detection View */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Anomaly Detection View
            </h3>
            <div className="rounded-2xl overflow-hidden border border-border-primary/50 shadow-xl">
              <img
                src="/images/case-studies/infrasight/anomalies.png"
                alt="InfraSight Anomaly Detection showing Z-score analysis with configurable thresholds"
                className="w-full h-auto"
              />
            </div>
            <p className="mt-3 text-sm text-text-muted italic">
              Z-score statistical method with configurable sensitivity.
              Service-level filtering and historical comparison.
            </p>
          </div>

          {/* Spending Insights */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Spending Insights</h3>
            <div className="rounded-2xl overflow-hidden border border-border-primary/50 shadow-xl">
              <img
                src="/images/case-studies/infrasight/Top 5 services.png"
                alt="InfraSight Spending Insights showing top services and cost attribution"
                className="w-full h-auto"
              />
            </div>
            <p className="mt-3 text-sm text-text-muted italic">
              Top services analysis with cost attribution. K-means clustering
              helps identify services with similar cost behaviors.
            </p>
          </div>

          {/* Recommendations */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Optimization Recommendations
            </h3>
            <div className="rounded-2xl overflow-hidden border border-border-primary/50 shadow-xl">
              <img
                src="/images/case-studies/infrasight/Recommendations.png"
                alt="InfraSight Recommendations showing rule-based optimization suggestions"
                className="w-full h-auto"
              />
            </div>
            <p className="mt-3 text-sm text-text-muted italic">
              Rule-based optimization suggestions combining anomalies and budget
              constraints to help reduce cloud costs.
            </p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Accessibility - Dark Mode */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Accessibility Features
            </h3>
            <div className="rounded-2xl overflow-hidden border border-border-primary/50 shadow-xl">
              <img
                src="/images/case-studies/infrasight/Dark Mode.png"
                alt="InfraSight Dark Mode theme showing accessibility options"
                className="w-full h-auto"
              />
            </div>
            <p className="mt-3 text-sm text-text-muted italic">
              Three theme modes: Dark, Light, and High-Contrast for improved
              accessibility and user preference.
            </p>
          </div>

          {/* Responsive Design - Mobile */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Responsive Design</h3>
            <div className="rounded-2xl overflow-hidden border border-border-primary/50 shadow-xl">
              <img
                src="/images/case-studies/infrasight/Mobile View side menu.png"
                alt="InfraSight Mobile View showing responsive design"
                className="w-full h-auto"
              />
            </div>
            <p className="mt-3 text-sm text-text-muted italic">
              Fully responsive design with mobile-optimized navigation and
              touch-friendly interactions.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>Technical Architecture</h2>

        <MermaidDiagram
          chart={`
graph TB
    subgraph Frontend["Frontend Layer"]
        React["React 19 + TypeScript<br/>Chart.js Visualizations"]
    end
    
    subgraph Backend["Backend Layer"]
        FastAPI["FastAPI<br/>REST API + ML Engine"]
        Auth["JWT Authentication<br/>Role-Based Access"]
    end
    
    subgraph Database["Data Layer"]
        PostgreSQL["PostgreSQL<br/>Neon.tech Serverless"]
        AsyncPG["asyncpg<br/>Connection Pooling"]
    end
    
    subgraph ML["ML Pipeline"]
        Forecasting["Linear Regression<br/>Cost Forecasting"]
        Anomaly["Z-Score Analysis<br/>Anomaly Detection"]
        Clustering["K-Means<br/>Service Clustering"]
    end
    
    React -->|REST API| FastAPI
    FastAPI -->|Async Queries| PostgreSQL
    FastAPI -->|ML Processing| Forecasting
    FastAPI -->|ML Processing| Anomaly
    FastAPI -->|ML Processing| Clustering
    FastAPI -->|Auth| Auth
    PostgreSQL -->|Connection Pool| AsyncPG
    
    style React fill:#8B5CF6,stroke:#A78BFA,color:#F4F4F7
    style FastAPI fill:#22C55E,stroke:#4ADE80,color:#F4F4F7
    style PostgreSQL fill:#3B82F6,stroke:#60A5FA,color:#F4F4F7
    style Forecasting fill:#F9A825,stroke:#FBC02D,color:#0F172A
    style Anomaly fill:#F9A825,stroke:#FBC02D,color:#0F172A
    style Clustering fill:#F9A825,stroke:#FBC02D,color:#0F172A
          `}
          title="System Architecture"
        />

        <div className="mb-6 rounded-2xl overflow-hidden border border-border-primary/50 shadow-xl">
          <img
            src="/images/case-studies/infrasight/infrasight_architecture.png"
            alt="InfraSight Technical Architecture Diagram"
            className="w-full h-auto"
          />
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
        <h2>Key Technical Challenges</h2>
        <p className="text-lg leading-relaxed mb-6">
          Building a production ML system taught me that the hard problems
          aren't always algorithmic—they're about making ML work reliably in
          real-world conditions.
        </p>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <h3 className="text-xl font-semibold mb-3">
              Real-Time ML API Performance
            </h3>
            <p className="mb-3 leading-relaxed">
              <strong>The Problem:</strong> ML computations (especially pandas
              operations on large datasets) were blocking API responses,
              creating poor user experience.
            </p>
            <p className="mb-3 leading-relaxed">
              <strong>My Solution:</strong> I implemented async SQLAlchemy with
              asyncpg for non-blocking database queries, added GZip compression
              middleware to reduce payload sizes, and optimized pandas
              operations using vectorization instead of row-by-row processing.
            </p>
            <p className="leading-relaxed text-text-muted">
              <strong>Impact:</strong> API responses stayed under 500ms even
              with forecasting and clustering computations, making the app feel
              responsive.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <h3 className="text-xl font-semibold mb-3">
              Meaningful Anomaly Detection
            </h3>
            <p className="mb-3 leading-relaxed">
              <strong>The Problem:</strong> Simple threshold-based detection
              (e.g., "flag if cost &gt; $100") produced too many false positives
              and didn't account for service-specific spending patterns.
            </p>
            <p className="mb-3 leading-relaxed">
              <strong>My Solution:</strong> I chose Z-score statistical analysis
              because it's relative to each service's historical behavior. I
              made the threshold configurable (1.0-5.0 standard deviations) and
              exposed Z-score values in the UI so users understand severity.
            </p>
            <p className="leading-relaxed text-text-muted">
              <strong>Impact:</strong> Teams can tune sensitivity to their
              needs, and the statistical approach adapts to each service's
              normal spending patterns.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <h3 className="text-xl font-semibold mb-3">
              Handling Messy Time-Series Data
            </h3>
            <p className="mb-3 leading-relaxed">
              <strong>The Problem:</strong> Real cloud billing data has varying
              granularity, missing timestamps, and inconsistent service
              names—not the clean datasets you see in tutorials.
            </p>
            <p className="mb-3 leading-relaxed">
              <strong>My Solution:</strong> I built a preprocessing pipeline
              that normalizes timestamps, fills gaps with forward-fill
              interpolation, and uses pivot tables to transform raw billing data
              into service-level time series. Added flexible date-range
              filtering to handle different reporting periods.
            </p>
            <p className="leading-relaxed text-text-muted">
              <strong>Impact:</strong> The system handles real-world billing
              data robustly, even with imperfect inputs.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>Technical Decisions & Trade-offs</h2>

        <h3 className="text-xl font-semibold mb-4">Why "Simple" ML?</h3>
        <p className="leading-relaxed mb-6">
          I chose Linear Regression, Z-score, and K-means over more complex
          models (LSTM, ARIMA, Isolation Forest) deliberately. In production ML,{" "}
          <strong>
            interpretability and speed often matter more than marginal accuracy
            gains
          </strong>
          . Business stakeholders need to understand why the system flagged a
          cost spike. Linear Regression provides clear coefficients and
          confidence intervals. Z-score is statistically grounded and requires
          no training data. These choices made the system production-ready
          faster and more maintainable.
        </p>
        <p className="leading-relaxed mb-6 text-text-muted italic">
          Future iteration: I'd explore ARIMA or Prophet for time-series
          forecasting to capture seasonality better, and Isolation Forest for
          anomaly detection to compare with Z-score. But for an MVP, pragmatic
          choices ship faster.
        </p>

        <h3 className="text-xl font-semibold mb-4">What I Owned</h3>
        <p className="leading-relaxed mb-4">
          As a solo project, I built every layer:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-bg-surface/30 border border-border-primary/30">
            <h4 className="font-semibold mb-2">Backend & ML</h4>
            <p className="text-sm text-text-muted">
              FastAPI with 10+ endpoints, JWT auth, Pydantic validation, async
              SQLAlchemy, ML pipeline from scratch
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-surface/30 border border-border-primary/30">
            <h4 className="font-semibold mb-2">Frontend</h4>
            <p className="text-sm text-text-muted">
              React 19 dashboard, Chart.js visualizations, responsive design, 3
              accessibility themes
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-surface/30 border border-border-primary/30">
            <h4 className="font-semibold mb-2">Database</h4>
            <p className="text-sm text-text-muted">
              PostgreSQL schema design, async queries, connection pooling,
              serverless deployment on Neon
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-surface/30 border border-border-primary/30">
            <h4 className="font-semibold mb-2">DevOps</h4>
            <p className="text-sm text-text-muted">
              Docker multi-stage builds, GitHub Actions CI/CD, Netlify + Render
              deployment, health checks
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>ML Implementation Details</h2>
        <p className="text-lg leading-relaxed mb-6">
          Here's how each ML component works under the hood:
        </p>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <h3 className="text-xl font-semibold mb-3">
              Cost Forecasting: Linear Regression
            </h3>
            <p className="mb-3 leading-relaxed">
              I use scikit-learn's LinearRegression with two temporal features:{" "}
              <code className="px-2 py-1 rounded bg-bg-surface text-sm">
                day_number
              </code>{" "}
              (captures linear trend) and{" "}
              <code className="px-2 py-1 rounded bg-bg-surface text-sm">
                is_weekend
              </code>{" "}
              (accounts for weekend usage patterns). The model outputs
              per-service predictions with 95% confidence intervals.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              <strong>Why this approach:</strong> Linear Regression is
              interpretable (stakeholders understand coefficients), fast
              (sub-100ms inference), and provides confidence intervals for
              uncertainty quantification. Perfect for business forecasting where
              explainability matters.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <h3 className="text-xl font-semibold mb-3">
              Anomaly Detection: Z-Score
            </h3>
            <p className="mb-3 leading-relaxed">
              I calculate Z-scores for each service's daily cost:{" "}
              <code className="px-2 py-1 rounded bg-bg-surface text-sm">
                z = (cost - mean) / std_dev
              </code>
              . Default threshold is 2.0 standard deviations, but users can
              adjust from 1.0 (more sensitive) to 5.0 (less sensitive). The
              system flags both high and low anomalies.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              <strong>Why this approach:</strong> Z-score is statistically
              grounded, requires no training data (works immediately on new
              services), and is configurable. It adapts to each service's
              historical behavior rather than using fixed thresholds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <h3 className="text-xl font-semibold mb-3">
              Service Clustering: K-Means
            </h3>
            <p className="mb-3 leading-relaxed">
              I use K-means (default 3 clusters) on daily cost vectors to group
              services with similar spending behaviors. Features are normalized
              cost time series per service.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              <strong>Why this approach:</strong> K-means is scalable,
              production-ready, and helps identify natural groupings in
              infrastructure spending. Teams can see which services behave
              similarly and optimize them together.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>What I Learned</h2>
        <p className="text-lg leading-relaxed mb-6">
          This project taught me that building production ML systems is
          fundamentally different from Jupyter notebooks.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              ML in Production vs. Research
            </h3>
            <p className="leading-relaxed">
              In notebooks, you optimize for accuracy. In production, you
              optimize for{" "}
              <strong>speed, interpretability, and reliability</strong>. Fast
              inference matters as much as model performance. Stakeholders need
              to understand predictions. Error handling and fallbacks are
              critical. Configurable parameters let users tune behavior to their
              needs.
            </p>
            <p className="leading-relaxed mt-3 text-text-muted">
              This mindset shift—from "what's the most accurate model?" to
              "what's the most production-ready solution?"—changed how I
              approach ML engineering.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Full-Stack Thinking</h3>
            <p className="leading-relaxed">
              Building every layer solo taught me how decisions cascade.
              Database schema design affects query performance, which impacts
              API response times, which influences frontend UX. Async Python
              patterns enable non-blocking I/O, which makes the app feel
              responsive even with ML computations. Everything connects.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              DevOps for Real Users
            </h3>
            <p className="leading-relaxed">
              Deploying to production means thinking about Docker multi-stage
              builds (smaller images), GitHub Actions CI/CD (automated testing),
              environment variable management (security), and CORS configuration
              (cross-origin requests). It's not enough to make it work
              locally—it has to work reliably for real users.
            </p>
          </div>
        </div>
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
        <h2>Explore the Project</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-accent-primary/5 border border-accent-primary/10">
            <h3 className="font-semibold mb-3">Live Demo</h3>
            <p className="text-sm mb-3">
              <a
                href="https://infrasight.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline font-medium"
              >
                infrasight.netlify.app
              </a>
            </p>
            <p className="text-sm text-text-muted">
              Login:{" "}
              <code className="px-2 py-1 rounded bg-bg-surface text-xs">
                demo@infrasight.com
              </code>{" "}
              /{" "}
              <code className="px-2 py-1 rounded bg-bg-surface text-xs">
                password123
              </code>
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <h3 className="font-semibold mb-3">Source Code & Docs</h3>
            <p className="text-sm mb-2">
              <a
                href="https://github.com/aabhiyann/infrasight"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline font-medium"
              >
                GitHub Repository
              </a>
            </p>
            <p className="text-sm">
              <a
                href="https://infrasight-rs1b.onrender.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline font-medium"
              >
                API Documentation
              </a>
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <h3 className="font-semibold mb-3">Technical Deep Dive</h3>
            <p className="text-sm mb-3 text-text-muted">
              Read my in-depth analysis of the technical decisions, challenges,
              and learnings from building this production ML platform.
            </p>
            <a
              href="/deep-dives/infrasight-production-ml"
              className="text-accent-primary hover:underline font-medium text-sm inline-flex items-center gap-1"
            >
              Read Deep Dive →
            </a>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
};

export default InfraSightCaseStudy;
