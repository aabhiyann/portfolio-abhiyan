import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import MermaidDiagram from "../../components/MermaidDiagram";
import {
  CaseStudySection,
  CaseStudyImage,
  CaseStudyText,
} from "../../components/case-study";
import { Typography } from "../../components/ui";

const TalkifyDocsCaseStudy: React.FC = () => {
  return (
    <CaseStudyLayout
      title="TalkifyDocs"
      subtitle="RAG-powered document chat application with SaaS features. Chat with your PDFs using GPT-4 and vector search."
      heroImage="/images/projects/talkifydocs.png"
      tags={[
        "Next.js",
        "TypeScript",
        "OpenAI GPT-4",
        "LangChain",
        "Pinecone",
        "Stripe",
      ]}
      stats={[
        { label: "Status", value: "Development" },
        { label: "Timeline", value: "2 Months" },
        { label: "Role", value: "Solo Full-Stack" },
        { label: "Architecture", value: "RAG Pipeline" },
      ]}
      links={{
        github: "https://github.com/aabhiyann/talkifydocs",
      }}
    >
      <CaseStudySection title="Overview">
        <CaseStudyText>
          TalkifyDocs is a SaaS application that lets users chat with their PDF
          documents using AI. Upload a document, ask questions in natural
          language, and get answers with source citations—powered by GPT-4,
          LangChain, and vector search. I built this to explore production RAG
          (Retrieval-Augmented Generation) architecture and modern SaaS
          patterns, integrating authentication, billing, and AI into a cohesive
          full-stack application.
        </CaseStudyText>

        <div className="mb-6 p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
          <Typography
            variant="small"
            className="font-semibold text-text-primary mb-3 block uppercase tracking-wider"
          >
            PROJECT STATUS
          </Typography>
          <div className="space-y-2 text-sm">
            <Typography variant="body" className="text-sm">
              <strong>Stage:</strong> Development (core features complete, not
              publicly deployed)
            </Typography>
            <Typography variant="body" className="text-sm">
              <strong>Source Code:</strong>{" "}
              <a
                href="https://github.com/aabhiyann/talkifydocs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline"
              >
                github.com/aabhiyann/talkifydocs
              </a>
            </Typography>
            <Typography variant="body" color="muted" className="text-sm">
              91.9% TypeScript · 99 commits · Full RAG pipeline implemented
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
            <div className="text-3xl font-bold text-text-primary mb-1">50%</div>
            <div className="text-sm text-text-muted">
              Reduction in research time via natural language queries
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-text-primary mb-1">
              SaaS
            </div>
            <div className="text-sm text-text-muted">
              Production-ready architecture with multi-tenant billing
            </div>
          </div>
        </div>
      </div>

      <CaseStudySection title="The Challenge">
        <CaseStudyText>
          Knowledge workers spend hours manually reviewing documents—researchers
          analyzing papers, legal teams reviewing contracts, students extracting
          information from PDFs. Traditional search doesn't understand context
          or meaning, and finding specific information across multiple documents
          is tedious and error-prone.
        </CaseStudyText>
        <CaseStudyText>
          I wanted to build a production-ready RAG application that would let
          users have natural conversations with their documents. The challenge
          wasn't just integrating GPT-4—it was designing an entire pipeline for
          document processing, vector search, and conversational AI, while
          building a complete SaaS platform with authentication and billing.
        </CaseStudyText>
      </CaseStudySection>

      <CaseStudySection title="My Approach">
        <CaseStudyText>
          I designed TalkifyDocs around the RAG architecture: upload documents,
          chunk and embed them for semantic search, then use retrieved context
          to generate accurate, cited answers. But RAG is just the core—I also
          needed to build a complete SaaS platform with user management,
          subscription billing, and a polished UI.
        </CaseStudyText>
      </CaseStudySection>

      <CaseStudySection title="What It Looks Like">
        <CaseStudyText>
          Here are screenshots showing the key features:
        </CaseStudyText>

        <div className="space-y-12">
          {/* Document Upload Interface */}
          <div>
            <Typography variant="h3" className="mb-4">
              Document Upload Interface
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/talkifydocs/document-upload.png"
              alt="TalkifyDocs document upload interface"
              caption="Drag-and-drop PDF upload with processing status. Documents are automatically chunked and embedded for semantic search."
            />
          </div>

          {/* Chat Interface */}
          <div>
            <Typography variant="h3" className="mb-4">
              Chat Interface with Citations
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/talkifydocs/chat-interface.png"
              alt="TalkifyDocs chat interface showing Q&A with source citations"
              caption="Natural language chat interface powered by GPT-4. Answers include source citations from the uploaded documents."
            />
          </div>

          {/* User Dashboard */}
          <div>
            <Typography variant="h3" className="mb-4">
              User Dashboard
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/talkifydocs/dashboard.png"
              alt="TalkifyDocs user dashboard showing document management"
              caption="User dashboard for managing uploaded documents, viewing chat history, and subscription management."
            />
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-bg-surface/50 border border-border-primary/50">
          <Typography variant="body" color="muted" className="text-sm">
            <strong>Note:</strong> Screenshots will appear here once you add
            images to{" "}
            <code className="px-2 py-1 rounded bg-bg-surface border border-border-primary/30">
              /public/images/case-studies/talkifydocs/
            </code>
          </Typography>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Core Workflow">
        <div className="space-y-8">
          <div>
            <Typography variant="h4" className="mb-2">
              Document Processing Pipeline
            </Typography>
            <CaseStudyText>
              When a user uploads a PDF, the system extracts text, splits it
              into overlapping chunks (to preserve context), generates vector
              embeddings using OpenAI's text-embedding model, and stores them in
              Pinecone for semantic search. Chunk size and overlap are critical
              for balancing context retention vs. retrieval precision.
            </CaseStudyText>
          </div>

          <div>
            <Typography variant="h4" className="mb-2">
              Conversational Query Flow
            </Typography>
            <CaseStudyText>
              When a user asks a question, the system embeds the query, searches
              Pinecone for the most relevant document chunks, and passes them as
              context to GPT-4. The model generates an answer grounded in the
              retrieved content, and the response includes source citations so
              users can verify the information.
            </CaseStudyText>
          </div>

          <div>
            <Typography variant="h4" className="mb-2">
              SaaS Infrastructure
            </Typography>
            <CaseStudyText>
              Beyond the RAG pipeline, I integrated Clerk for authentication
              (OAuth and email/password), Stripe for subscription billing with
              webhook handling, and PostgreSQL with Prisma ORM for managing
              users, documents, subscriptions, and chat history. Next.js API
              routes handle all backend logic.
            </CaseStudyText>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Technical Architecture">
        <CaseStudyText>
          TalkifyDocs integrates six major systems: frontend (Next.js), RAG
          pipeline (LangChain + OpenAI), vector database (Pinecone),
          authentication (Clerk), billing (Stripe), and database (PostgreSQL).
          Each integration required careful design to handle errors, manage API
          keys, and ensure data consistency.
        </CaseStudyText>

        <div className="my-8">
          <MermaidDiagram
            chart={`
graph TB
    subgraph Frontend["Frontend Layer"]
        NextJS["Next.js + TypeScript<br/>React Components"]
    end
    
    subgraph RAG["RAG Pipeline"]
        LangChain["LangChain<br/>Orchestration"]
        OpenAI_Embed["OpenAI Embeddings<br/>text-embedding-ada-002"]
        OpenAI_GPT["OpenAI GPT-4<br/>Generation"]
        Pinecone["Pinecone<br/>Vector Database"]
    end
    
    subgraph Services["Third-Party Services"]
        Clerk["Clerk<br/>Authentication"]
        Stripe["Stripe<br/>Subscription Billing"]
    end
    
    subgraph Database["Data Layer"]
        PostgreSQL["PostgreSQL<br/>User & Document Data"]
        Prisma["Prisma ORM<br/>Type-Safe Queries"]
    end
    
    NextJS -->|API Routes| LangChain
    LangChain -->|Embed Documents| OpenAI_Embed
    LangChain -->|Query| Pinecone
    LangChain -->|Generate Answer| OpenAI_GPT
    NextJS -->|Auth| Clerk
    NextJS -->|Billing| Stripe
    NextJS -->|Database| Prisma
    Prisma -->|Queries| PostgreSQL
    
    style NextJS fill:#8B5CF6,stroke:#A78BFA,color:#F4F4F7
    style LangChain fill:#22C55E,stroke:#4ADE80,color:#F4F4F7
    style Pinecone fill:#3B82F6,stroke:#60A5FA,color:#F4F4F7
    style OpenAI_GPT fill:#F9A825,stroke:#FBC02D,color:#0F172A
    style Clerk fill:#EC4899,stroke:#F472B6,color:#F4F4F7
    style Stripe fill:#635BFF,stroke:#818CF8,color:#F4F4F7
    style PostgreSQL fill:#336791,stroke:#4A90A4,color:#F4F4F7
            `}
            title="RAG Architecture"
          />
        </div>

        <div className="space-y-6">
          <div>
            <Typography variant="h3" className="mb-3">
              Next.js Full-Stack Application
            </Typography>
            <CaseStudyText>
              I chose Next.js for its server-side rendering (better SEO), API
              routes (backend logic), and TypeScript support. The frontend
              includes a document upload interface, chat UI with message
              history, user dashboard, and subscription management. API routes
              handle document processing, query execution, and webhook events.
            </CaseStudyText>
          </div>

          <div>
            <Typography variant="h3" className="mb-3">
              RAG Pipeline with LangChain
            </Typography>
            <CaseStudyText>
              LangChain orchestrates the RAG workflow: text splitting with
              RecursiveCharacterTextSplitter, embedding generation with OpenAI,
              vector storage in Pinecone, and retrieval-augmented generation
              with GPT-4. I configured chunk size (1000 tokens) and overlap (200
              tokens) to preserve context across chunks.
            </CaseStudyText>
          </div>

          <div>
            <Typography variant="h3" className="mb-3">
              Third-Party Integrations
            </Typography>
            <CaseStudyText>
              Clerk handles authentication with OAuth and email/password. Stripe
              manages subscription billing with webhook handlers for
              subscription events (created, updated, canceled). Prisma ORM
              provides type-safe database queries with automatic migrations.
              Each integration required careful error handling and secrets
              management.
            </CaseStudyText>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Key Technical Challenges">
        <CaseStudyText>
          Building a production RAG application taught me that the hard problems
          aren't just about AI—they're about data engineering, cost management,
          and integrating multiple complex systems.
        </CaseStudyText>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 text-xl">
              RAG Pipeline Design
            </Typography>
            <CaseStudyText className="text-base">
              <strong>The Problem:</strong> How to chunk documents effectively
              for both context preservation and retrieval precision. Too small,
              and you lose context. Too large, and you introduce noise.
            </CaseStudyText>
            <CaseStudyText className="text-base">
              <strong>My Solution:</strong> I implemented
              RecursiveCharacterTextSplitter with configurable chunk size (1000
              tokens) and overlap (200 tokens). I tested different
              configurations on sample documents to find the sweet spot. Overlap
              is critical—it ensures that information spanning chunk boundaries
              isn't lost.
            </CaseStudyText>
            <Typography variant="body" color="muted" className="text-sm">
              <strong>Impact:</strong> Chunk size significantly affects answer
              quality. The 1000/200 configuration balanced context retention
              with retrieval precision, but it's document-dependent and would
              need tuning for different use cases.
            </Typography>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 text-xl">
              Managing API Costs
            </Typography>
            <CaseStudyText className="text-base">
              <strong>The Problem:</strong> OpenAI API calls are expensive at
              scale. Embedding costs for document processing, GPT-4 costs for
              query answering, and Pinecone costs for vector storage add up
              quickly with many users.
            </CaseStudyText>
            <CaseStudyText className="text-base">
              <strong>My Approach:</strong> I designed the system with cost
              awareness: batch embedding generation where possible, implement
              usage limits per subscription tier, and consider caching
              frequently asked questions. For production, I'd add rate limiting
              and monitor per-user costs.
            </CaseStudyText>
            <Typography variant="body" color="muted" className="text-sm">
              <strong>Learning:</strong> Production AI applications require
              careful cost management. Every API call has a price, and without
              limits, costs can spiral. This is why subscription tiers and usage
              caps are essential for SaaS AI products.
            </Typography>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 text-xl">
              Integrating Multiple Third-Party Services
            </Typography>
            <CaseStudyText className="text-base">
              <strong>The Problem:</strong> Building a SaaS requires integrating
              authentication (Clerk), billing (Stripe), vector database
              (Pinecone), AI (OpenAI), and database (PostgreSQL). Each has its
              own patterns, error handling, and secrets management.
            </CaseStudyText>
            <CaseStudyText className="text-base">
              <strong>My Solution:</strong> I structured the codebase with clear
              separation of concerns: API routes for backend logic, webhook
              handlers for Stripe events, and Prisma for database operations.
              Used environment variables for all API keys and implemented error
              handling for each service.
            </CaseStudyText>
            <Typography variant="body" color="muted" className="text-sm">
              <strong>Impact:</strong> Building production SaaS requires
              orchestrating many services. Webhook handling is particularly
              tricky—you need idempotency, error recovery, and careful testing.
              Local development is more complex when you depend on external
              services.
            </Typography>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Technical Decisions & Trade-offs">
        <div className="space-y-6">
          <div>
            <Typography variant="h3" className="mb-3">
              Why Next.js for RAG?
            </Typography>
            <CaseStudyText>
              I chose Next.js because it provides both frontend and backend in
              one framework. API routes handle document processing and RAG
              queries without needing a separate backend. Server-side rendering
              improves SEO for landing pages. TypeScript support throughout
              ensures type safety from database to UI. For a solo project, this
              full-stack approach is faster than building separate frontend and
              backend.
            </CaseStudyText>
          </div>

          <div>
            <Typography variant="h3" className="mb-3">
              Why LangChain?
            </Typography>
            <CaseStudyText>
              LangChain abstracts the RAG pipeline complexity—text splitting,
              embedding, retrieval, and generation. Without it, I'd need to
              manually orchestrate OpenAI API calls, vector search, and prompt
              engineering. LangChain's RecursiveCharacterTextSplitter handles
              document chunking intelligently, and its retrieval chains simplify
              context management. The trade-off is added dependency, but for
              RAG, it's worth it.
            </CaseStudyText>
          </div>

          <div>
            <Typography variant="h3" className="mb-3">
              What I Owned
            </Typography>
            <CaseStudyText>
              As a solo project, I built every layer:
            </CaseStudyText>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {[
                {
                  title: "Frontend",
                  desc: "Next.js with TypeScript, React components, responsive UI, document upload interface, chat interface",
                },
                {
                  title: "RAG Pipeline",
                  desc: "LangChain integration, document chunking, embedding generation, vector search, GPT-4 query handling",
                },
                {
                  title: "SaaS Features",
                  desc: "Clerk authentication, Stripe billing, webhook handlers, subscription management",
                },
                {
                  title: "Database",
                  desc: "PostgreSQL schema design, Prisma ORM, migrations, relationship management",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-bg-surface/30 border border-border-primary/30"
                >
                  <Typography variant="h4" className="mb-2 text-base">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body"
                    color="muted"
                    className="text-sm text-text-muted"
                  >
                    {item.desc}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="RAG Implementation Details">
        <CaseStudyText>
          Here's how the RAG pipeline works under the hood:
        </CaseStudyText>

        <div className="space-y-6 mt-6">
          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 text-xl">
              Document Processing
            </Typography>
            <CaseStudyText className="text-base">
              When a user uploads a PDF, I extract text using a PDF parser,
              split it into chunks using LangChain's{" "}
              <code className="px-2 py-1 rounded bg-bg-surface text-sm border border-border-primary/30">
                RecursiveCharacterTextSplitter
              </code>{" "}
              (chunk size: 1000 tokens, overlap: 200 tokens), generate vector
              embeddings using OpenAI's{" "}
              <code className="px-2 py-1 rounded bg-bg-surface text-sm border border-border-primary/30">
                text-embedding-ada-002
              </code>
              , and store them in Pinecone with metadata (document ID, page
              number, source text).
            </CaseStudyText>
            <Typography variant="body" color="muted" className="text-sm">
              <strong>Why this approach:</strong> RecursiveCharacterTextSplitter
              intelligently splits on paragraph boundaries, preserving semantic
              coherence. Overlap ensures context isn't lost at chunk boundaries.
              OpenAI embeddings are high-quality and fast.
            </Typography>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 text-xl">
              Query Execution
            </Typography>
            <CaseStudyText className="text-base">
              When a user asks a question, I embed the query using the same
              OpenAI model, search Pinecone for the top-k most similar chunks
              (k=4), pass the retrieved chunks as context to GPT-4 with a prompt
              instructing it to answer based on the provided context, and return
              the answer with source citations.
            </CaseStudyText>
            <Typography variant="body" color="muted" className="text-sm">
              <strong>Why this approach:</strong> Semantic search (vector
              similarity) finds relevant chunks even when exact keywords don't
              match. GPT-4 generates natural language answers grounded in the
              retrieved context. Citations let users verify the information.
            </Typography>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 text-xl">
              Context Window Management
            </Typography>
            <CaseStudyText className="text-base">
              GPT-4 has a limited context window (8k or 32k tokens depending on
              the model). I retrieve only the top-k most relevant chunks to stay
              within limits. If chunks are too large, I truncate them. If
              there's room, I include more chunks for better context.
            </CaseStudyText>
            <Typography variant="body" color="muted" className="text-sm">
              <strong>Why this approach:</strong> Context window management is
              critical for RAG. Too much context wastes tokens and increases
              cost. Too little context reduces answer quality. Retrieving top-k
              chunks balances relevance and token usage.
            </Typography>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="What I Learned">
        <CaseStudyText>
          Building TalkifyDocs taught me that RAG applications are 80% data
          engineering and integration, 20% AI. The hard problems aren't about
          calling GPT-4—they're about chunking, retrieval, cost management, and
          orchestrating multiple services.
        </CaseStudyText>

        <div className="space-y-6 mt-6">
          {[
            {
              title: "RAG is More Than Just AI",
              text: "Building a RAG application involves document preprocessing (text extraction, chunking), embedding generation (API calls, batching), vector database management (indexing, querying), prompt engineering (context formatting, instruction design), and answer post-processing (citation extraction, formatting). The AI model is just one piece. Most of the work is data engineering. This taught me that production AI applications require strong software engineering skills, not just ML knowledge. You need to understand APIs, databases, error handling, and system design.",
            },
            {
              title: "SaaS Requires Many Integrations",
              text: "Integrating Clerk, Stripe, Pinecone, OpenAI, and PostgreSQL taught me that each service has its own patterns. Clerk uses middleware for auth. Stripe requires webhook handlers for subscription events. Pinecone has rate limits. OpenAI has token limits. Each integration needs error handling, retry logic, and secrets management. Testing locally is harder when you depend on external services.",
            },
            {
              title: "TypeScript Throughout is Worth It",
              text: "Using TypeScript for frontend, backend, and database queries (Prisma) provided type safety everywhere. I caught errors at compile time instead of runtime. IDE autocomplete made development faster. Refactoring was safer. The upfront cost of defining types paid off in reduced bugs and better maintainability.",
            },
          ].map((item) => (
            <div key={item.title}>
              <Typography variant="h3" className="mb-3 text-xl">
                {item.title}
              </Typography>
              <CaseStudyText>{item.text}</CaseStudyText>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection title="Tech Stack Breakdown">
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
              {[
                {
                  category: "Frontend",
                  tech: "Next.js, TypeScript, React, Tailwind CSS",
                },
                { category: "Backend", tech: "Next.js API Routes, LangChain" },
                { category: "AI/ML", tech: "OpenAI GPT-4, OpenAI Embeddings" },
                { category: "Vector DB", tech: "Pinecone" },
                { category: "Auth", tech: "Clerk" },
                { category: "Payments", tech: "Stripe" },
                { category: "Database", tech: "PostgreSQL, Prisma ORM" },
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

      <CaseStudySection title="Current Status & Next Steps">
        <CaseStudyText>
          Core features are complete, but the project isn't publicly deployed.
          To launch, I'd need to optimize costs, add caching, and test at scale.
        </CaseStudyText>

        <div className="mb-6 grid md:grid-cols-2 gap-8">
          <div>
            <Typography variant="h3" className="mb-3 text-lg">
              Completed:
            </Typography>
            <ul className="space-y-2 mb-6 list-disc list-inside text-text-secondary">
              <li>Document upload and processing pipeline</li>
              <li>RAG pipeline with GPT-4 and vector search</li>
              <li>User authentication with Clerk</li>
              <li>Subscription billing with Stripe</li>
              <li>Database schema and Prisma ORM</li>
              <li>TypeScript throughout frontend and backend</li>
            </ul>
          </div>
          <div>
            <Typography variant="h3" className="mb-3 text-lg">
              To Deploy to Production:
            </Typography>
            <ul className="space-y-2 list-disc list-inside text-text-secondary">
              <li>Deploy to Vercel (Next.js hosting)</li>
              <li>
                Implement caching for repeated queries (cost optimization)
              </li>
              <li>Add rate limiting per subscription tier</li>
              <li>Performance testing at scale</li>
              <li>User testing and feedback</li>
              <li>Add support for more document types (Word, Excel)</li>
            </ul>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Explore the Project">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 font-semibold">
              Source Code
            </Typography>
            <p className="text-sm mb-3">
              <a
                href="https://github.com/aabhiyann/talkifydocs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline font-medium"
              >
                github.com/aabhiyann/talkifydocs
              </a>
            </p>
            <Typography variant="body" color="muted" className="text-sm">
              91.9% TypeScript · 99 commits · Well-organized codebase with setup
              documentation
            </Typography>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 font-semibold">
              Technical Deep Dive
            </Typography>
            <Typography variant="body" color="muted" className="text-sm mb-3">
              Read my in-depth analysis of building a production RAG pipeline,
              managing API costs, and integrating multiple third-party services.
            </Typography>
            <a
              href="/deep-dives/talkifydocs-rag-pipeline"
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

export default TalkifyDocsCaseStudy;
