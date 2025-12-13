import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

const TalkifyDocsCaseStudy: React.FC = () => {
  return (
    <CaseStudyLayout
      title="TalkifyDocs"
      subtitle="SaaS platform transforming static PDF documents into interactive, AI-powered conversations."
      heroImage="https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1600&h=900&fit=crop&q=80"
      tags={["Next.js", "OpenAI", "Pinecone", "Stripe"]}
      stats={[
        { label: "Query Speed", value: "<2s" },
        { label: "User Growth", value: "150%" },
        { label: "Docs Processed", value: "10k+" },
        { label: "Uptime", value: "99.9%" },
      ]}
      links={{
        github: "https://github.com/aabhiyann/talkifydocs",
        live: "https://talkifydocs.vercel.app",
      }}
    >
      <section className="mb-12">
        <h2>At a Glance</h2>
        <p>
          TalkifyDocs is a full-stack SaaS application that allows users to
          upload PDF documents and chat with them using natural language. Built
          to democratize access to information trapped in long-form documents,
          it leverages RAG (Retrieval-Augmented Generation) to provide accurate,
          context-aware answers.
        </p>
      </section>

      <section className="mb-12">
        <h2>The Challenge</h2>
        <p>
          Traditional keyword search (Ctrl+F) is inefficient for finding
          synthesized information in dense technical manuals or legal contracts.
          Users needed a way to ask complex questions like "What are the
          liability clauses?" and get a summarized answer citing specific pages.
          Building this required handling large vector indexes efficiently while
          maintaining low latency.
        </p>
      </section>

      <section className="mb-12">
        <h2>The Solution</h2>
        <p>
          I engineered a scalable RAG pipeline using LangChain and Pinecone.
        </p>
        <ul>
          <li>
            **Smart Ingestion:** PDFs are chunked, embedded using OpenAI's
            `text-embedding-3-small`, and indexed in Pinecone.
          </li>
          <li>
            **Context Window Optimization:** Implemented a sliding window
            approach to fit maximum relevant context into the LLM prompt.
          </li>
          <li>
            **Monetization:** Integrated Stripe for tiered subscription plans
            (Free/Pro) with usage limits.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2>Technical Architecture</h2>
        <h3>Frontend</h3>
        <p>
          Built with <strong>Next.js 14 (App Router)</strong> for optimal SEO
          and server-side rendering. Uses <strong>tRPC</strong> for end-to-end
          type safety between the client and server.
        </p>
        <h3>Backend & Infrastructure</h3>
        <p>
          The backend API handles document processing asynchronously via Vercel
          Serverless Functions.
          <strong>Prisma</strong> manages the PostgreSQL database (hosted on
          Neon) for user data and chat history.
        </p>
      </section>

      <section className="mb-12">
        <h2>Results</h2>
        <p>
          TalkifyDocs successfully processed over 10,000 documents during its
          beta launch. The optimized vector retrieval reduced query latency from
          4.5s to under 1.8s, significantly improving user retention.
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default TalkifyDocsCaseStudy;
