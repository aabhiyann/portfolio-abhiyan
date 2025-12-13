# LinkedIn Short Post (300-500 words)

---

I just built a RAG-powered document chat application. Here's what I learned about production AI vs. notebooks.

**The Project:** TalkifyDocs — a SaaS app that lets you chat with your PDF documents using GPT-4 and vector search.

💻 Source: github.com/aabhiyann/talkifydocs

## 3 Things Building a RAG Application Taught Me:

### 1. RAG is 80% Data Engineering, 20% AI

The hard problems aren't about calling GPT-4. They're about:
- Document chunking (how do you preserve context?)
- Embedding generation (how do you batch API calls?)
- Vector search (how do you retrieve relevant chunks?)
- Prompt engineering (how do you format context?)
- Cost management (how do you avoid $1000 API bills?)

**Production AI requires strong software engineering skills, not just ML knowledge.**

### 2. Chunking is Harder Than It Looks

I used RecursiveCharacterTextSplitter with 1000 tokens and 200 overlap.

Why overlap? Information spanning chunk boundaries would be lost without it.

Why 1000 tokens? Too small loses context. Too large introduces noise.

**Chunk size significantly affects answer quality.** There's no one-size-fits-all—it depends on your documents.

### 3. SaaS Means Orchestrating Many Services

I integrated:
- Clerk (authentication)
- Stripe (billing + webhooks)
- Pinecone (vector database)
- OpenAI (GPT-4 + embeddings)
- PostgreSQL (user data)

Each service has its own patterns, error handling, and secrets management.

**Webhook handling is particularly tricky** — you need idempotency, error recovery, and careful testing.

## What I Built (Solo Full-Stack):

✅ Next.js + TypeScript full-stack app  
✅ RAG pipeline: document upload → chunking → embedding → retrieval → generation  
✅ Clerk authentication (OAuth + email/password)  
✅ Stripe subscription billing with webhook handlers  
✅ PostgreSQL + Prisma ORM  
✅ 91.9% TypeScript · 99 commits  

**The biggest lesson:** Production AI is about data engineering, API orchestration, and cost management—not just model selection.

---

**Try it yourself:** github.com/aabhiyann/talkifydocs

**What's your experience with RAG? Have you faced similar challenges?**

#AI #MachineLearning #RAG #NextJS #TypeScript #SaaS #LLM #GPT4

---

**Note:** This is designed to be posted directly on LinkedIn (not as an article). The shorter format performs better in the feed and encourages comments.

