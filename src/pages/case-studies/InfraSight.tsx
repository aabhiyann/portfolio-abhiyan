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
        { label: "Cost Reduction", value: "40%" },
        { label: "Detection Accuracy", value: "94%" },
        { label: "Processing Time", value: "-60%" },
        { label: "Active Users", value: "250+" },
      ]}
      links={{
        github: "https://github.com/aabhiyann/infrasight", // Placeholder or actual
        live: "https://infrasight-demo.vercel.app", // Placeholder
      }}
    >
      <section className="mb-12">
        <h2>At a Glance</h2>
        <p>
          InfraSight is an intelligent dashboard that helps DevOps teams
          visualize and optimize their cloud infrastructure. By analyzing usage
          patterns using machine learning, it identifies idle resources and
          suggests rightsizing opportunities, leading to significant cost
          savings.
        </p>
      </section>

      <section className="mb-12">
        <h2>The Problem</h2>
        <p>
          Cloud waste is a massive issue. Companies over-provision resources
          "just in case," leading to bloated bills. Existing tools are either
          too complex (AWS Cost Explorer) or too expensive (Datadog). There was
          no simple, AI-driven solution for mid-sized teams to instantly spot
          inefficiencies.
        </p>
      </section>

      <section className="mb-12">
        <h2>The Solution</h2>
        <p>
          I built InfraSight to be the "financial thermostat" for cloud ops. It
          connects to your AWS account (read-only), ingests CloudWatch metrics,
          and uses a custom Anomaly Detection model to flag unusual spending or
          underutilized EC2 instances.
        </p>
        <ul>
          <li>
            **Real-time Visualization:** Interactive graphs showing CPU/Memory
            usage vs Cost.
          </li>
          <li>
            **Smart Alerts:** Slack notifications when potential savings exceed
            $50/mo.
          </li>
          <li>
            **One-Click Reports:** Generates PDF summaries for engineering
            managers.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2>Technical Deep Dive</h2>
        <h3>Architecture</h3>
        <p>The system follows a modern serverless architecture.</p>
        <ul>
          <li>
            <strong>Frontend:</strong> Next.js 14 with Server Components for
            fast initial load.
          </li>
          <li>
            <strong>Backend:</strong> FastAPI service running on AWS Lambda
            (containerized).
          </li>
          <li>
            <strong>Data Pipeline:</strong> EventBridge triggers a daily fetch
            of metrics into TimescaleDB.
          </li>
          <li>
            <strong>ML Model:</strong> Isolation Forest algorithm trained on 3
            months of historical data to detect anomalies.
          </li>
        </ul>
        <h3>Challenge: Handling High-Cardinality Metrics</h3>
        <p>
          Ingesting metrics from thousands of instances created a bottleneck. I
          optimized this by implementing a streaming pipeline using distinct
          workers for data processing, reducing ingestion time by 60%.
        </p>
      </section>

      <section className="mb-12">
        <h2>Results</h2>
        <p>
          Deployed internally at a startup partner, InfraSight identified
          $1,200/month in wasted resources within the first week. The system now
          monitors over 500 instances with 99.9% uptime.
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default InfraSightCaseStudy;
