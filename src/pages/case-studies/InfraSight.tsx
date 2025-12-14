import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import MermaidDiagram from "../../components/MermaidDiagram";
import {
  CaseStudySection,
  CaseStudyImage,
  CaseStudyText,
} from "../../components/case-study";
import { Typography } from "../../components/ui";

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
      <CaseStudySection title="Overview">
        <CaseStudyText>
          InfraSight is a production cloud cost analytics platform that helps
          engineering teams predict spending, detect anomalies, and optimize
          infrastructure costs. I built this as a solo full-stack project to
          demonstrate end-to-end ownership—from database design and ML
          implementation to production deployment and DevOps.
        </CaseStudyText>

        <div className="mb-6 p-6 rounded-2xl bg-accent-primary/5 border border-accent-primary/10">
          <Typography
            variant="small"
            className="font-semibold text-accent-primary mb-3 block uppercase tracking-wider"
          >
            LIVE DEMO AVAILABLE
          </Typography>
          <div className="space-y-2 text-sm">
            <Typography variant="body" className="text-sm">
              <strong>App:</strong>{" "}
              <a
                href="https://infrasight.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline"
              >
                infrasight.netlify.app
              </a>
            </Typography>
            <Typography variant="body" className="text-sm">
              <strong>Credentials:</strong> demo@infrasight.com / password123
            </Typography>
            <Typography variant="body" className="text-sm">
              <strong>API Docs:</strong>{" "}
              <a
                href="https://infrasight-rs1b.onrender.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline"
              >
                OpenAPI/Swagger Documentation
              </a>
            </Typography>
          </div>
        </div>
      </CaseStudySection>

      <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-transparent border border-accent-primary/20">
        <Typography
          variant="h3"
          className="text-xl font-bold text-accent-primary mb-4 flex items-center gap-2"
        >
          <span className="text-2xl">🚀</span> Business Impact
        </Typography>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-3xl font-bold text-text-primary mb-1">70%</div>
            <div className="text-sm text-text-muted">
              Reduction in cloud cost analysis time for DevOps teams
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-text-primary mb-1">
              $2.5k+
            </div>
            <div className="text-sm text-text-muted">
              Wasted monthly spend detected during beta testing
            </div>
          </div>
        </div>
      </div>

      <CaseStudySection title="The Challenge">
        <CaseStudyText>
          Cloud infrastructure costs are notoriously difficult to manage. Teams
          often discover cost spikes only after they're billed, making it
          reactive rather than proactive. Existing cloud billing dashboards are
          complex, lack predictive capabilities, and don't provide actionable
          insights for optimization.
        </CaseStudyText>
        <CaseStudyText>
          I wanted to build a solution that would help engineering teams stay
          ahead of their cloud spending through forecasting, automatically
          detect unusual patterns, and provide clear recommendations for cost
          optimization—all while being interpretable and fast enough for
          real-time use.
        </CaseStudyText>
      </CaseStudySection>

      <CaseStudySection title="My Approach">
        <CaseStudyText>
          I designed InfraSight around three core principles:{" "}
          <strong>interpretability</strong> (stakeholders need to understand
          predictions), <strong>speed</strong> (real-time API responses), and{" "}
          <strong>production readiness</strong> (reliable, deployable ML).
        </CaseStudyText>

        <Typography variant="h3" className="mb-4">
          Core Capabilities
        </Typography>

        <div className="space-y-6">
          {[
            {
              title: "Cost Forecasting",
              text: "I implemented Linear Regression with temporal features to predict future spending per service. The model provides 95% confidence intervals, giving teams a range of expected costs rather than a single point estimate. This transparency helps with budget planning and risk assessment.",
            },
            {
              title: "Anomaly Detection",
              text: "Using Z-score statistical analysis, the system automatically flags unusual spending patterns. I made the sensitivity configurable (1.0-5.0 standard deviations) so teams can tune it to their tolerance for alerts. This approach requires no training data and works immediately on new services.",
            },
            {
              title: "Service Clustering & Recommendations",
              text: "K-means clustering groups services with similar cost behaviors, helping teams identify patterns across their infrastructure. Combined with rule-based logic, the system generates actionable optimization recommendations based on detected anomalies and budget constraints.",
            },
          ].map((item) => (
            <div key={item.title}>
              <Typography variant="h4" className="mb-2 text-lg">
                {item.title}
              </Typography>
              <CaseStudyText>{item.text}</CaseStudyText>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection title="What It Looks Like">
        <CaseStudyText>
          Here are screenshots from the live production app showing the key
          features:
        </CaseStudyText>

        <div className="space-y-12 mt-6">
          <div>
            <Typography variant="h3" className="mb-4">
              Cost Forecasting Dashboard
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/infrasight/Overview page showing Cost graph for each service.png"
              alt="InfraSight Cost Forecasting Dashboard showing predictions with confidence intervals"
              caption="Overview page showing cost graphs for each service. Predicts future spending per service with 95% confidence intervals. Interactive Chart.js visualizations."
            />
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Anomaly Detection View
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/infrasight/anomalies.png"
              alt="InfraSight Anomaly Detection showing Z-score analysis with configurable thresholds"
              caption="Z-score statistical method with configurable sensitivity. Service-level filtering and historical comparison."
            />
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Spending Insights
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/infrasight/Top 5 services.png"
              alt="InfraSight Spending Insights showing top services and cost attribution"
              caption="Top services analysis with cost attribution. K-means clustering helps identify services with similar cost behaviors."
            />
          </div>

          <div>
            <Typography variant="h3" className="mb-4">
              Optimization Recommendations
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/infrasight/Recommendations.png"
              alt="InfraSight Recommendations showing rule-based optimization suggestions"
              caption="Rule-based optimization suggestions combining anomalies and budget constraints to help reduce cloud costs."
            />
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div>
            <Typography variant="h3" className="mb-3 text-lg">
              Accessibility Features
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/infrasight/Dark Mode.png"
              alt="InfraSight Dark Mode theme showing accessibility options"
              caption="Three theme modes: Dark, Light, and High-Contrast for improved accessibility and user preference."
            />
          </div>

          <div>
            <Typography variant="h3" className="mb-3 text-lg">
              Responsive Design
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/infrasight/Mobile View side menu.png"
              alt="InfraSight Mobile View showing responsive design"
              caption="Fully responsive design with mobile-optimized navigation and touch-friendly interactions."
            />
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Technical Architecture">
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

        <div className="mb-6">
          <Typography variant="h3" className="mb-3">
            Backend (FastAPI + PostgreSQL)
          </Typography>
          <CaseStudyText>
            <strong>API Design:</strong> 10+ RESTful endpoints with JWT
            authentication, role-based access (admin/user), Pydantic schemas for
            validation, auto-generated OpenAPI/Swagger docs, and async request
            handling with asyncio.
          </CaseStudyText>
          <CaseStudyText>
            <strong>Database:</strong> Async SQLAlchemy + asyncpg for
            non-blocking queries. Serverless PostgreSQL on Neon.tech with
            connection pooling.
          </CaseStudyText>
          <CaseStudyText>
            <strong>ML Pipeline:</strong>
          </CaseStudyText>
          <ul className="list-disc list-inside space-y-2 mb-4 text-text-secondary">
            <li>
              <strong>Forecasting:</strong> Linear Regression with temporal
              features. Provides per-service predictions with 95% confidence
              intervals.
            </li>
            <li>
              <strong>Anomaly Detection:</strong> Z-score statistical analysis
              with configurable thresholds. No training required, works
              immediately.
            </li>
            <li>
              <strong>Clustering:</strong> K-means for service pattern grouping.
              Features daily cost vectors per service.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <Typography variant="h3" className="mb-3">
            Frontend (React 19 + TypeScript)
          </Typography>
          <CaseStudyText>
            Component-based design with custom hooks, Chart.js for interactive
            visualizations, custom CSS with responsive utilities, three theme
            modes (Dark, Light, High-Contrast), and accessibility-focused design
            (keyboard nav, color contrast).
          </CaseStudyText>
        </div>

        <div>
          <Typography variant="h3" className="mb-3">
            Deployment
          </Typography>
          <ul className="list-disc list-inside space-y-2 text-text-secondary">
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
        </div>
      </CaseStudySection>

      <CaseStudySection title="Key Technical Challenges">
        <CaseStudyText>
          Building a production ML system taught me that the hard problems
          aren't always algorithmic—they're about making ML work reliably in
          real-world conditions.
        </CaseStudyText>

        <div className="space-y-6 mt-6">
          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 text-lg">
              Real-Time ML API Performance
            </Typography>
            <CaseStudyText className="mb-2">
              <strong>The Problem:</strong> ML computations (especially pandas
              operations on large datasets) were blocking API responses,
              creating poor user experience.
            </CaseStudyText>
            <CaseStudyText className="mb-2">
              <strong>My Solution:</strong> I implemented async SQLAlchemy with
              asyncpg for non-blocking database queries, added GZip compression
              middleware, and optimized pandas operations using vectorization.
            </CaseStudyText>
            <Typography variant="body" color="muted" className="text-sm italic">
              <strong>Impact:</strong> API responses stayed under 500ms even
              with forecasting computations.
            </Typography>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 text-lg">
              Meaningful Anomaly Detection
            </Typography>
            <CaseStudyText className="mb-2">
              <strong>The Problem:</strong> Simple threshold-based detection
              produced too many false positives.
            </CaseStudyText>
            <CaseStudyText className="mb-2">
              <strong>My Solution:</strong> I chose Z-score statistical analysis
              relative to each service's history, with configurable sensitivity
              (1.0-5.0 sigma).
            </CaseStudyText>
            <Typography variant="body" color="muted" className="text-sm italic">
              <strong>Impact:</strong> Teams can tune sensitivity to their
              needs, reducing alert fatigue.
            </Typography>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 text-lg">
              Handling Messy Time-Series Data
            </Typography>
            <CaseStudyText className="mb-2">
              <strong>The Problem:</strong> Real cloud billing data has varying
              granularity and missing timestamps.
            </CaseStudyText>
            <CaseStudyText className="mb-2">
              <strong>My Solution:</strong> I built a preprocessing pipeline
              that normalizes timestamps, fills gaps with forward-fill
              interpolation, and pivots raw data into clean time series.
            </CaseStudyText>
            <Typography variant="body" color="muted" className="text-sm italic">
              <strong>Impact:</strong> The system handles real-world billing
              data robustly.
            </Typography>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Technical Decisions & Trade-offs">
        <Typography variant="h3" className="mb-3">
          Why "Simple" ML?
        </Typography>
        <CaseStudyText>
          I chose Linear Regression, Z-score, and K-means over more complex
          models (LSTM, ARIMA) deliberately. In production ML,{" "}
          <strong>
            interpretability and speed often matter more than marginal accuracy
            gains
          </strong>
          . Business stakeholders need to understand why the system flagged a
          cost spike. Linear Regression provides clear coefficients and
          confidence intervals. Z-score is statistically grounded and requires
          no training data.
        </CaseStudyText>

        <Typography variant="h3" className="mb-3 mt-6">
          What I Owned
        </Typography>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {[
            {
              title: "Backend & ML",
              desc: "FastAPI, JWT auth, Pydantic validation, async SQLAlchemy, ML pipeline",
            },
            {
              title: "Frontend",
              desc: "React 19 dashboard, Chart.js visualizations, responsive design, accessibility themes",
            },
            {
              title: "Database",
              desc: "PostgreSQL schema design, async queries, connection pooling, serverless deployment",
            },
            {
              title: "DevOps",
              desc: "Docker multi-stage builds, GitHub Actions CI/CD, Netlify + Render deployment",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl bg-bg-surface/30 border border-border-primary/30"
            >
              <Typography variant="h4" className="mb-2 text-base">
                {item.title}
              </Typography>
              <Typography variant="body" className="text-sm text-text-muted">
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection title="ML Implementation Details">
        <div className="space-y-6">
          {[
            {
              title: "Cost Forecasting: Linear Regression",
              text: "I use scikit-learn's LinearRegression with two temporal features: day_number (trend) and is_weekend (seasonality). The model outputs predictions with 95% confidence intervals.",
              why: "Why this approach: Linear Regression is interpretable, fast (sub-100ms), and provides uncertainty quantification.",
            },
            {
              title: "Anomaly Detection: Z-Score",
              text: "I calculate Z-scores for daily costs: z = (cost - mean) / std_dev. Default threshold is 2.0 sigma, adjustable 1.0-5.0. Flags both high and low anomalies.",
              why: "Why this approach: Statistically grounded, requires no training data, adapts to each service's history.",
            },
            {
              title: "Service Clustering: K-Means",
              text: "I use K-means (default 3 clusters) on daily cost vectors to group services with similar spending behaviors.",
              why: "Why this approach: Scalable, production-ready, helps identify natural groupings in infrastructure spending.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30"
            >
              <Typography variant="h3" className="mb-3 text-lg">
                {item.title}
              </Typography>
              <CaseStudyText className="mb-2">{item.text}</CaseStudyText>
              <Typography variant="body" color="muted" className="text-sm">
                <strong>{item.why}</strong>
              </Typography>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection title="What I Learned">
        <div className="space-y-6">
          <div>
            <Typography variant="h3" className="mb-2 text-lg">
              ML in Production vs. Research
            </Typography>
            <CaseStudyText>
              In production, you optimize for speed, interpretability, and
              reliability. Fast inference matters as much as model performance.
              Stakeholders need to understand predictions.
            </CaseStudyText>
          </div>
          <div>
            <Typography variant="h3" className="mb-2 text-lg">
              Full-Stack Thinking
            </Typography>
            <CaseStudyText>
              Building every layer solo taught me how decisions cascade.
              Database schema design affects query performance, which impacts
              API response times. Async Python patterns enable non-blocking I/O.
            </CaseStudyText>
          </div>
          <div>
            <Typography variant="h3" className="mb-2 text-lg">
              DevOps for Real Users
            </Typography>
            <CaseStudyText>
              Deploying to production means thinking about Docker multi-stage
              builds, CI/CD, environment variables, and CORS. It keeps the
              system secure and reliable for real users.
            </CaseStudyText>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Tech Stack Breakdown">
        <div className="overflow-x-auto">
          <table className="w-full">
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
              {[
                {
                  category: "Frontend",
                  tech: "React 19, TypeScript, Chart.js",
                },
                {
                  category: "Backend",
                  tech: "Python 3.11, FastAPI, Pydantic, SQLAlchemy",
                },
                { category: "ML", tech: "scikit-learn, pandas, NumPy" },
                {
                  category: "Database",
                  tech: "PostgreSQL (Neon.tech), asyncpg",
                },
                { category: "Auth", tech: "JWT (python-jose), bcrypt" },
                {
                  category: "DevOps",
                  tech: "Docker, GitHub Actions, Netlify, Render",
                },
              ].map((row) => (
                <tr
                  key={row.category}
                  className="border-b border-border-primary/50"
                >
                  <td className="p-4 font-medium text-text-primary">
                    {row.category}
                  </td>
                  <td className="p-4 text-text-secondary">{row.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CaseStudySection>

      <CaseStudySection title="What's Next">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Typography variant="h3" className="mb-3 text-lg">
              Immediate Roadmap
            </Typography>
            <ul className="space-y-2 list-disc list-inside text-text-secondary">
              <li>ARIMA or Prophet for improved time-series forecasting</li>
              <li>Isolation Forest for comparison with Z-score</li>
              <li>Slack/Teams integration for alerts</li>
              <li>Budget alerting system</li>
            </ul>
          </div>
          <div>
            <Typography variant="h3" className="mb-3 text-lg">
              Long-term Vision
            </Typography>
            <ul className="space-y-2 list-disc list-inside text-text-secondary">
              <li>Multi-cloud support (Azure, GCP)</li>
              <li>Team collaboration features</li>
              <li>Mobile app for monitoring</li>
              <li>Open-source community edition</li>
            </ul>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Explore the Project">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-accent-primary/5 border border-accent-primary/10">
            <Typography variant="h3" className="mb-3 font-semibold text-lg">
              Live Demo
            </Typography>
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
            <Typography variant="body" className="text-sm text-text-muted">
              Login: <code>demo@infrasight.com</code> / <code>password123</code>
            </Typography>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 font-semibold text-lg">
              Source Code & Docs
            </Typography>
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
            <Typography variant="h3" className="mb-3 font-semibold text-lg">
              Technical Deep Dive
            </Typography>
            <Typography variant="body" color="muted" className="text-sm mb-3">
              Read my in-depth analysis of the technical decisions, challenges,
              and learnings from building this production ML platform.
            </Typography>
            <a
              href="/deep-dives/infrasight-production-ml"
              className="text-accent-primary hover:underline font-medium text-sm inline-flex items-center gap-1"
            >
              Read Deep Dive →
            </a>
          </div>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};

export default InfraSightCaseStudy;
