import React from "react";
import { ArrowLeft, ExternalLink, Github, Rocket } from "lucide-react";
import Button from "../../components/ui/Button";
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
      subtitle="AI-powered PDF chat application with RAG pipeline. Live production app using Gemini 3.0 + Groq for fast, intelligent document analysis."
      heroImage="/images/projects/talkifydocs.png"
      tags={[
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Google Gemini",
        "Groq",
        "Pinecone",
        "tRPC",
      ]}
      stats={[
        { label: "Status", value: "Live Production" },
        { label: "Timeline", value: "4-6 Weeks" },
        { label: "Role", value: "Solo Full-Stack" },
        { label: "Cost", value: "$0/month" },
      ]}
      links={{
        github: "https://github.com/aabhiyann/talkifydocs",
        live: "https://talkifydocs.vercel.app",
      }}
    >
      <CaseStudySection title="Overview">
        <CaseStudyText>
          TalkifyDocs is a production SaaS application that lets users chat with
          their PDF documents using AI. Upload a document, ask questions in
          natural language, and get streaming answers with source citations,
          powered by Google Gemini 3.0 Flash, Groq (Llama 3.3), and vector
          search. I built this to explore production RAG (Retrieval-Augmented
          Generation) architecture using 100% free tier services while
          maintaining enterprise-grade performance and features.
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
                href="https://talkifydocs.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline"
              >
                talkifydocs.vercel.app
              </a>
            </Typography>
            <Typography variant="body" className="text-sm">
              <strong>Tech Stack:</strong> Next.js 16, React 19, TypeScript,
              Gemini 3.0, Groq (Llama 3.3), Pinecone
            </Typography>
            <Typography variant="body" color="muted" className="text-sm">
              100% free tier · No API costs · Production deployment on Vercel
            </Typography>
          </div>
        </div>
      </CaseStudySection>

      <div className="mb-12 p-8 rounded-2xl gradient-accent-subtle">
        <Typography
          variant="h3"
          className="text-xl font-bold text-accent-primary mb-4 flex items-center gap-2"
        >
          <Rocket className="w-5 h-5" /> Business Impact
        </Typography>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-3xl font-bold text-text-primary mb-1">$0</div>
            <div className="text-sm text-text-muted">
              Monthly operating cost using 100% free tier (Gemini, Neon,
              Pinecone)
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-text-primary mb-1">
              &lt;2s
            </div>
            <div className="text-sm text-text-muted">
              Streaming chat responses with real-time document analysis
            </div>
          </div>
        </div>
      </div>

      <CaseStudySection title="The Challenge">
        <CaseStudyText>
          Modern document analysis suffers from manual inefficiency. Knowledge
          workers spend hours manually reviewing documents—researchers analyzing
          papers, legal teams reviewing contracts, students extracting
          information from PDFs. Traditional search doesn't understand context
          or meaning, and finding specific information across multiple documents
          is tedious and error-prone.
        </CaseStudyText>
        <CaseStudyText>
          I wanted to build a production-ready RAG application that would let
          users have natural conversations with their documents using completely
          free AI services. The challenge wasn't just integrating AI—it was
          designing an entire pipeline for document processing, vector search,
          and conversational AI, while achieving 100% free tier operation
          through strategic technology choices (Gemini 3.0, Groq, Neon, Pinecone
          free).
        </CaseStudyText>
      </CaseStudySection>

      <CaseStudySection title="My Approach">
        <CaseStudyText>
          I designed TalkifyDocs around the RAG architecture: upload documents,
          chunk and embed them for semantic search, then use retrieved context
          to generate accurate, cited answers. I migrated from OpenAI to Google
          Gemini 3.0 Flash for embeddings and chat (completely free), with Groq
          (Llama 3.3 70B) as a high-speed fallback. This dual-provider setup
          ensures reliability while maintaining $0/month operating costs.
        </CaseStudyText>
      </CaseStudySection>

      <CaseStudySection title="What It Looks Like">
        <CaseStudyText>
          Here are screenshots from the live production app showing the key
          features:
        </CaseStudyText>

        <div className="space-y-12 mt-6">
          {/* Landing Page */}
          <div>
            <Typography variant="h3" className="mb-4">
              Landing Page
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/talkifydocs/landing-dark-mode.png"
              alt="TalkifyDocs landing page showing hero section and features"
              caption="Modern landing page with dark mode. Clean design showcasing AI-powered PDF chat features and easy onboarding."
            />
          </div>

          {/* Chat Interface */}
          <div>
            <Typography variant="h3" className="mb-4">
              AI Chat Interface
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/talkifydocs/chat-dark-mode.png"
              alt="TalkifyDocs chat interface with streaming AI responses"
              caption="Real-time chat interface powered by Gemini 3.0 Flash. Streaming responses with source citations and conversation history."
            />
          </div>

          {/* Dashboard */}
          <div>
            <Typography variant="h3" className="mb-4">
              User Dashboard
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/talkifydocs/dashboard.png"
              alt="TalkifyDocs user dashboard showing document management"
              caption="Clean dashboard for managing uploaded PDFs, viewing upload status, and accessing chat conversations."
            />
          </div>

          {/* How It Works */}
          <div>
            <Typography variant="h3" className="mb-4">
              Feature Explanation
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/talkifydocs/how-it-works.png"
              alt="TalkifyDocs how it works section explaining RAG pipeline"
              caption="Clear visual explanation of the RAG pipeline: Upload → Process → Chat. Helps users understand the technology."
            />
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div>
            <Typography variant="h3" className="mb-3 text-lg">
              Subscription Tiers
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/talkifydocs/pricing-page.png"
              alt="TalkifyDocs pricing page with Free and Pro tiers"
              caption="Stripe-integrated subscription billing with Free and Pro tiers. Clear value proposition for each plan."
            />
          </div>

          <div>
            <Typography variant="h3" className="mb-3 text-lg">
              Account Management
            </Typography>
            <CaseStudyImage
              src="/images/case-studies/talkifydocs/user-profile.png"
              alt="TalkifyDocs user profile and account settings"
              caption="Clerk-powered authentication with user profile management, settings, and subscription control."
            />
          </div>
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
              embeddings using Gemini's embedding-001 model (768 dimensions),
              and stores them in Pinecone for semantic search. Chunk size and
              overlap are critical for balancing context retention vs. retrieval
              precision.
            </CaseStudyText>
          </div>

          <div>
            <Typography variant="h4" className="mb-2">
              Conversational Query Flow
            </Typography>
            <CaseStudyText>
              When a user asks a question, the system embeds the query, searches
              Pinecone for the most relevant document chunks, and passes them as
              context to Gemini 3.0 Flash (or Groq as fallback). The model
              generates a streaming answer grounded in the retrieved content,
              and the response includes source citations so users can verify the
              information.
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
          TalkifyDocs integrates multiple modern services: frontend (Next.js 16
          + React 19), dual AI providers (Gemini 3.0 + Groq), vector database
          (Pinecone), authentication (Clerk), billing (Stripe), and database
          (PostgreSQL). The architecture prioritizes cost efficiency (100% free
          tier) while maintaining production-grade reliability through
          dual-provider fallback.
        </CaseStudyText>

        <div className="my-8">
          <MermaidDiagram
            chart={`
graph TB
    subgraph Frontend["Frontend Layer"]
        NextJS["Next.js 16 + React 19<br/>TypeScript + tRPC"]
    end
    
    subgraph AIProviders["Dual AI Providers"]
        Gemini["Google Gemini 3.0 Flash<br/>Embeddings (768-d) + Chat"]
        Groq["Groq (Llama 3.3 70B)<br/>High-Speed Fallback"]
    end
    
    subgraph RAG["RAG Pipeline"]
        LangChain["LangChain<br/>Orchestration"]
        Pinecone["Pinecone<br/>Vector Database (768-d)"]
    end
    
    subgraph Services["Third-Party Services"]
        Clerk["Clerk<br/>Authentication"]
        Stripe["Stripe<br/>Subscription Billing"]
    end
    
    subgraph Database["Data Layer"]
        PostgreSQL["PostgreSQL (Neon.tech)<br/>User & Document Data"]
        Prisma["Prisma ORM<br/>Type-Safe Queries"]
    end
    
    NextJS -->|tRPC API| LangChain
    LangChain -->|Embed Documents| Gemini
    LangChain -->|Fallback| Groq
    LangChain -->|Vector Search| Pinecone
    Gemini -->|Primary Chat| LangChain
    NextJS -->|Auth| Clerk
    NextJS -->|Billing| Stripe
    NextJS -->|Database| Prisma
    Prisma -->|Queries| PostgreSQL
    
    style NextJS fill:#8B5CF6,stroke:#A78BFA,color:#F4F4F7
    style Gemini fill:#4285F4,stroke:#669DF6,color:#F4F4F7
    style Groq fill:#F9A825,stroke:#FBC02D,color:#0F172A
    style LangChain fill:#22C55E,stroke:#4ADE80,color:#F4F4F7
    style Pinecone fill:#3B82F6,stroke:#60A5FA,color:#F4F4F7
    style Clerk fill:#EC4899,stroke:#F472B6,color:#F4F4F7
    style Stripe fill:#635BFF,stroke:#818CF8,color:#F4F4F7
    style PostgreSQL fill:#336791,stroke:#4A90A4,color:#F4F4F7
            `}
            title="RAG Architecture with Dual AI Providers"
          />
        </div>

        <div className="space-y-6">
          <div>
            <Typography variant="h3" className="mb-3">
              Next.js Full-Stack Application
            </Typography>
            <CaseStudyText>
              I chose Next.js 16 (App Router) for its server-side rendering
              (better SEO), tRPC for type-safe API routes, and full TypeScript
              support. The frontend includes a document upload interface, chat
              UI with streaming responses, user dashboard, and subscription
              management. tRPC procedures handle document processing, query
              execution, and webhook events with end-to-end type safety.
            </CaseStudyText>
          </div>

          <div>
            <Typography variant="h3" className="mb-3">
              RAG Pipeline with LangChain
            </Typography>
            <CaseStudyText>
              LangChain orchestrates the RAG workflow: text splitting with
              RecursiveCharacterTextSplitter, embedding generation with Gemini
              Embeddings (768-d), vector storage in Pinecone, and
              retrieval-augmented generation with Gemini 3.0 Flash or Groq
              (Llama 3.3 70B). I configured chunk size (1000 tokens) and overlap
              (200 tokens) to preserve context across chunks.
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
          aren't just about AI. They're about data engineering, cost management,
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
              is critical; it ensures that information spanning chunk boundaries
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
              Achieving 100% Free Tier Operation
            </Typography>
            <CaseStudyText className="text-base">
              <strong>The Challenge:</strong> Originally built with OpenAI
              (GPT-4 + ada-002 embeddings), which would cost $100+/month at
              scale. When ChatGPT added PDF support, I paused. Two years later,
              revived for portfolio using completely free services.
            </CaseStudyText>
            <CaseStudyText className="text-base">
              <strong>My Solution:</strong> Migrated to Gemini 3.0 Flash (free
              embeddings 768-d + chat) and Groq (Llama 3.3 70B fallback).
              Updated Pinecone vector dimensions from 1536 to 768. Result:
              $0/month cost while maintaining production-grade performance.
            </CaseStudyText>
            <Typography variant="body" color="muted" className="text-sm">
              <strong>Impact:</strong> Dual-provider reliability at zero cost.
              Gemini 3.0 Flash outperforms GPT-4 in speed with excellent
              quality. Proof that modern free-tier AI services enable production
              apps.
            </Typography>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 text-xl">
              Integrating Multiple Third-Party Services
            </Typography>
            <CaseStudyText className="text-base">
              <strong>The Problem:</strong> Building a SaaS requires integrating
              authentication (Clerk), billing (Stripe), vector database
              (Pinecone), dual AI providers (Gemini + Groq), and database
              (PostgreSQL). Each has its own patterns, error handling, and
              secrets management.
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
              tricky: you need idempotency, error recovery, and careful testing.
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
              LangChain abstracts the RAG pipeline complexity (text splitting,
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
                  desc: "LangChain integration, document chunking, embedding generation, vector search, Gemini/Groq query handling",
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
              embeddings using Gemini's{" "}
              <code className="px-2 py-1 rounded bg-bg-surface text-sm border border-border-primary/30">
                embedding-001 (768-d)
              </code>
              , and store them in Pinecone with metadata (document ID, page
              number, source text).
            </CaseStudyText>
            <Typography variant="body" color="muted" className="text-sm">
              <strong>Why this approach:</strong> RecursiveCharacterTextSplitter
              intelligently splits on paragraph boundaries, preserving semantic
              coherence. Overlap ensures context isn't lost at chunk boundaries.
              Gemini embeddings are high-quality, fast, and completely free.
            </Typography>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 text-xl">
              Query Execution
            </Typography>
            <CaseStudyText className="text-base">
              When a user asks a question, I embed the query using the same
              Gemini model, search Pinecone for the top-k most similar chunks
              (k=4), pass the retrieved chunks as context to Gemini 3.0 Flash
              (or Groq as fallback) with a prompt instructing it to answer based
              on the provided context, and return the answer with source
              citations.
            </CaseStudyText>
            <Typography variant="body" color="muted" className="text-sm">
              <strong>Why this approach:</strong> Semantic search (vector
              similarity) finds relevant chunks even when exact keywords don't
              match. Gemini 3.0 Flash generates natural language answers
              grounded in the retrieved context with streaming support.
              Citations let users verify the information.
            </Typography>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 text-xl">
              Context Window Management
            </Typography>
            <CaseStudyText className="text-base">
              Gemini models have limited context windows (varies by version). I
              retrieve only the top-k most relevant chunks to stay within
              limits. If chunks are too large, I truncate them. If there's room,
              I include more chunks for better context.
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
          calling AI models. They're about chunking, retrieval, cost management,
          and orchestrating multiple services.
        </CaseStudyText>

        <div className="space-y-6 mt-6">
          {[
            {
              title: "RAG is More Than Just AI",
              text: "Building a RAG application involves document preprocessing (text extraction, chunking), embedding generation (API calls, batching), vector database management (indexing, querying), prompt engineering (context formatting, instruction design), and answer post-processing (citation extraction, formatting). The AI model is just one piece. Most of the work is data engineering. This taught me that production AI applications require strong software engineering skills, not just ML knowledge. You need to understand APIs, databases, error handling, and system design.",
            },
            {
              title: "SaaS Requires Many Integrations",
              text: "Integrating Clerk, Stripe, Pinecone, Gemini, Groq, and PostgreSQL taught me that each service has its own patterns. Clerk uses middleware for auth. Stripe requires webhook handlers for subscription events. Pinecone has rate limits. Gemini and Groq have different API patterns. Each integration needs error handling, retry logic, and secrets management. Testing locally is harder when you depend on external services.",
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
                {
                  category: "AI/ML",
                  tech: "Google Gemini 3.0, Groq (Llama 3.3 70B)",
                },
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
              <li>RAG pipeline with Gemini and Groq</li>
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
