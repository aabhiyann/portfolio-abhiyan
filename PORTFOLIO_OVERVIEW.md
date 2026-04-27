# Portfolio Website - Complete Content Overview

**Generated:** December 2024  
**Purpose:** Comprehensive documentation of all content, sections, pages, components, and links for review by friends and mentors.

---

## Table of Contents

1. [Navigation & Site Structure](#navigation--site-structure)
2. [Home Page](#home-page)
3. [About Page](#about-page)
4. [Projects Page](#projects-page)
5. [Case Studies](#case-studies)
6. [Experience Page](#experience-page)
7. [Skills Page](#skills-page)
8. [Contact Page](#contact-page)
9. [Photography Page](#photography-page)
10. [Resume Page](#resume-page)
11. [All External Links](#all-external-links)
12. [Components Overview](#components-overview)
13. [Design System](#design-system)

---

## Navigation & Site Structure

### Main Navigation (Navbar)

- **Logo:** "AS" (links to home)
- **Links:**
  - About (`/about`)
  - Projects (`/projects`)
  - Experience (`/experience`)
  - Skills (`/skills`)
  - Photography (`/photography`)
  - Contact (`/contact`)
- **Theme Toggle:** Dark/Light mode switcher
- **Mobile Menu:** Hamburger menu for mobile devices

### Routes Available

- `/` - Home
- `/about` - About page
- `/projects` - Projects listing
- `/experience` - Experience & Teaching
- `/skills` - Skills & Certifications
- `/photography` - Photography portfolio
- `/contact` - Contact page
- `/resume` - Resume download/view
- `/brief` - Alias for resume
- `/case-studies/infrasight` - InfraSight case study
- `/case-studies/talkifydocs` - TalkifyDocs case study
- `/case-studies/melodyhub` - MelodyHub case study
- `/case-studies/audio-classification` - Audio Classification case study
- `/deep-dives` - Deep dives (if implemented)
- `/deep-dives/:slug` - Individual deep dive
- `*` - 404 Not Found page

---

## Home Page (`/`)

### Hero Section

**Headline:**

- "Full-Stack & ML Engineer"
- "ML Engineer" uses gradient text effect

**Typewriter Animation:**

- "I ship ML-powered applications"
- "I teach algorithms at GWU"
- "I turn theory into production code"
- "I debug code and photograph the world"

**Tagline:**

- "Building Production-Ready Systems."

**CTAs:**

- "View Projects" button (links to `/projects`)
- "Download Resume" button (links to `/resume`)

**Visual:**

- Hero Bento Grid component (interactive card layout)

**Scroll Indicator:**

- "Scroll to explore" with animated line

### Stats Bar Section

**Metrics Displayed:**

1. **6** - Production Projects
2. **1.2k+** - Users Impacted
3. **60+** - Students Mentored
4. **4.0** - GPA @ GWU

**Design:** Horizontal bar with separators, gradient text for values

### Skills Slider Section

**Skills Displayed (infinite scroll):**

- Languages: Python, TypeScript, JavaScript, Java, C++
- Frontend: React, Next.js, Tailwind
- Backend: Node.js, FastAPI
- Databases: PostgreSQL, MongoDB, Elasticsearch
- AI/ML: PyTorch, TensorFlow, Keras, Scikit-learn, LangChain, GPT-4, NLP
- Cloud & DevOps: AWS, Docker
- Tools & Libraries: Git, Socket.IO, Pinecone, Pandas, librosa, YAMNet, AsyncPG
- Services: Stripe, Clerk

**Design:** Infinite horizontal scrolling marquee

### Why Hire Me Section

**Three Cards:**

1. **Academic Excellence**
   - M.S. CS @ GWU (4.0 GPA)
   - Graduate TA - Algorithms
   - 22% student performance improvement
   - AWS Cloud Certifications (2)

2. **Production Experience**
   - 6 deployed applications
   - 1,200+ active users impacted
   - Built end-to-end: API → ML → UI
   - Real metrics, not just notebooks

3. **Full-Stack + ML**
   - React/Next.js → FastAPI → PostgreSQL
   - RAG, Anomaly Detection, Forecasting
   - Docker, AWS, CI/CD
   - Clean code + System design

### Featured Projects Section

**Shows first 3 projects:**

1. InfraSight
2. TalkifyDocs
3. Audio Classification CNN

**Each Project Card Shows:**

- Project image
- Title
- Description (3 lines max)
- Stats (if available)
- Tech badges (first 3)
- Hover overlay with:
  - "Read Case Study" button (if case study exists)
  - "View Project" button (if live/github link exists)

**CTA:** "View All Projects" button (links to `/projects`)

### About Teaser Section

**Content:**

- Title: "My Journey"
- Subtitle: "I don't just write code—I solve problems. From teaching algorithms to 60+ grad students to shipping production apps used by thousands."
- CTA: "Read My Story" button (links to `/about`)

### Contact Section

**Title:** "Let's Connect"
**Subtitle:** "I'm currently looking for full-time Software Engineering roles starting January 2026. Whether you have a question or just want to say hi, I'll try my best to get back to you!"

**Contact Info:**

- Email: aabhiyansainju@gmail.com

**Social Links:**

- Email Me (mailto link)
- LinkedIn (https://linkedin.com/in/abhiyansainju)
- GitHub (https://github.com/aabhiyann)
- Photography/Instagram (https://instagram.com/abhiyan.sainju)

**Note:** "I usually respond within 24 hours."

---

## About Page (`/about`)

### Hero Section

**Headline:**

- "I don't just write code."
- "I solve problems." (gradient text)

**Content:**

- Introduction: "I'm Abhiyan, a Computer Science grad student at GWU (4.0 GPA) graduating Dec 2025."
- Portrait image with hover effect showing:
  - "EST. 2024"
  - "Abhiyan Sainju"
  - "Full-Stack & ML Engineer"

**Three Key Points:**

1. **The Problem Solver**
   - Built InfraSight ML platform
   - Cut analysis time by 70%
   - "Software should kill inefficiencies"

2. **The Teacher**
   - TA for Design & Analysis of Algorithms
   - Interactive tutorials
   - 22% midterm score improvement
   - "If I can't explain it simply, I don't understand it well enough"

3. **The Builder**
   - Shipped 5 production apps with real users
   - Real-time music platforms to AI document assistants
   - Build end-to-end

### By The Numbers Section

**Stats:**

- **4.0** - GPA
- **60+** - Students Taught
- **5** - Production Apps
- **1.2k+** - Users Impacted

### My Journey Section

**Visual Timeline showing:**

1. **Graduate TA - Algorithms** (Aug 2024 – Present)
   - GWU, Washington, DC
   - Teaching 60+ grad students
   - 22% midterm score improvement
   - Onboarded 8 TAs (2 weeks → 4 days)
   - Curriculum redesign with 3 faculty

2. **Software Dev Intern** (Jun 2023 – Sep 2023)
   - ECS Tech, Lalitpur, Nepal
   - Fintech platform (1,200+ users)
   - 7 production features shipped
   - 89% fewer scheduling conflicts
   - 43% load time improvement

3. **IT Solutions Lead** (Aug 2022 – Mar 2023)
   - Intel Security, Kathmandu, Nepal
   - Digital transformation
   - 73% increase in qualified leads
   - $35K new contracts (Q1)
   - 40% cost reduction

### Technical Arsenal Section

**Skills Matrix Component:**

- Interactive grid showing skills with proficiency percentages
- Categories: Languages, Frameworks, Tools, AI/ML
- Hover shows "Skill in Action" descriptions

**Skills Listed:**

- **Languages:** Python (95%), TypeScript (90%), Java (85%)
- **Frameworks:** React (92%), FastAPI (88%), Next.js (90%)
- **AI/ML:** PyTorch (85%)
- **Tools:** Docker (85%), AWS (80%), Git (95%)

### Engineering Philosophy Section

**Five Principles:**

1. **System Architecture**
   - "I obsess over designing scalable, fault-tolerant distributed systems. Why build a monolith when you can orchestrate microservices?"

2. **AI & Large Language Models**
   - "Building RAG pipelines and fine-tuning models to solve specific business problems is my current playground."

3. **Visual Pattern Recognition**
   - "My photography isn't just art; it's training data for my brain. Finding symmetry in chaos helps me debug complex codebases."

4. **Optimization Mindset**
   - "Whether it's reducing O(n^2) to O(n log n) or saving 20ms on a render cycle, I live for efficiency."

5. **Mentorship**
   - "Teaching algorithms has reinforced my own understanding. I love breaking down complex topics for others."

### Testimonials Section

**Three Testimonials:**

1. **Sarah Thompson** - Engineering Manager, ECS Tech
   - "Abhiyan's work on our fintech platform was exceptional. His optimization efforts led to a 43% improvement in load times, directly impacting our user conversion rates."

2. **Michael Chen** - Director of Operations, Intel Security Service
   - "Leading the digital transformation, Abhiyan's technical leadership and budget management were instrumental in increasing our revenue by a significant margin."

3. **Dr. Emily White** - Professor of Computer Science, GWU
   - "As a teaching assistant, Abhiyan has a rare talent for breaking down complex algorithmic concepts. His redesigned curriculum has been a game-changer for our graduate students."

### Contact Section

(Same as Home page)

---

## Projects Page (`/projects`)

### Header

**Title:** "Projects"
**Subtitle:** "A collection of projects that showcase my passion for building innovative solutions that solve real-world problems with modern technology."

### Filter Buttons

- All
- Full Stack
- ML/AI

### Projects Grid

#### 1. InfraSight

- **Description:** "Production cloud cost analytics platform using Linear Regression and Z-Score analysis. Live demo available."
- **Tech:** Python, FastAPI, React, Docker, AsyncPG
- **Categories:** ML/AI, Full Stack
- **Stats:** Architecture: Microservice
- **Badges:** Production, ML
- **Links:**
  - Live: https://infrasight.netlify.app/
  - GitHub: https://github.com/aabhiyann/infrasight
- **Case Study:** `/case-studies/infrasight`
- **Image:** `/images/projects/infrasight.png`

#### 2. TalkifyDocs

- **Description:** "Enterprise RAG application combining LangChain, Pinecone, and GPT-4. Features full SaaS architecture with Stripe/Clerk."
- **Tech:** Next.js, GPT-4, Pinecone, LangChain, Stripe
- **Categories:** ML/AI, Full Stack
- **Stats:** Status: Dev, Type: SaaS RAG
- **Badges:** Next.js, AI, SaaS
- **Links:**
  - GitHub: https://github.com/aabhiyann/talkifydocs
  - Live: (Not publicly deployed)
- **Case Study:** `/case-studies/talkifydocs`
- **Image:** `/images/projects/talkifydocs.png`

#### 3. Audio Classification CNN

- **Description:** "Built CNN achieving 92% accuracy on animal sounds. Outperformed transfer learning by 26%."
- **Tech:** TensorFlow, Keras, librosa, YAMNet
- **Categories:** ML/AI
- **Stats:** Accuracy: 92%, Vs Transfer: +26%
- **Badges:** Deep Learning, Research
- **Links:**
  - GitHub: https://github.com/aabhiyann/audio-classification-cnn
  - Live: https://github.com/aabhiyann/audio-classification-cnn
- **Case Study:** `/case-studies/audio-classification`
- **Image:** `/images/projects/audio-cnn.png`

#### 4. MelodyHub

- **Description:** "Real-time social music platform with synchronized playback. Built with Socket.IO, React, and Clerk."
- **Tech:** React, Node.js, Socket.IO, MongoDB, Clerk
- **Categories:** Full Stack
- **Stats:** Type: Team Project, Feature: Real-Time Sync
- **Badges:** Socket.IO, Team Work
- **Links:**
  - Live: http://melodyhubmusic.vercel.app/
  - GitHub: https://github.com/aabhiyann/MelodyHub
- **Case Study:** `/case-studies/melodyhub`
- **Image:** `/images/projects/melodyhub.png`

#### 5. Disease Prediction ML

- **Description:** "Machine learning model to predict disease outbreaks based on historical data and environmental factors."
- **Tech:** Python, Scikit-Learn, Pandas, Flush
- **Categories:** ML/AI
- **Stats:** Precision: 89%, Recall: 91%
- **Badges:** Healthcare, Predictive
- **Links:**
  - GitHub: https://github.com/aabhiyann/disease-prediction
  - Live: https://github.com/aabhiyann/disease-prediction
- **Image:** `/images/projects/disease-prediction.png`

#### 6. Multi-Source Retrieval

- **Description:** "Advanced information retrieval system aggregating results from multiple disparate data sources."
- **Tech:** Python, Elasticsearch, NLP, API
- **Categories:** ML/AI
- **Stats:** Sources: 10+, Relevance: High
- **Badges:** Search, Backend
- **Links:**
  - GitHub: https://github.com/aabhiyann/multi-source-retrieval
  - Live: https://github.com/aabhiyann/multi-source-retrieval
- **Image:** `/images/projects/retrieval.png`

### Project Card Features

- Hover overlay with action buttons
- Category chips
- Stats display
- Tech stack badges
- Links to case study, live demo, or GitHub

### Contact Section

(Same as Home page)

---

## Case Studies

### InfraSight Case Study (`/case-studies/infrasight`)

**Hero:**

- Title: "InfraSight"
- Subtitle: "ML-powered cloud cost analytics platform with forecasting, anomaly detection, and clustering. Live production app."
- Tags: React, FastAPI, PostgreSQL, Machine Learning, Docker
- Stats: Live Production, 3 Months, Solo Full-Stack, Demo Available
- Links: GitHub, Live Demo

#### Section 1: Overview

**Content:**

- "InfraSight is a production cloud cost analytics platform that helps engineering teams predict spending, detect anomalies, and optimize infrastructure costs. I built this as a solo full-stack project to demonstrate end-to-end ownership—from database design and ML implementation to production deployment and DevOps."

**Live Demo Box:**

- App: https://infrasight.netlify.app
- Credentials: demo@infrasight.com / password123
- API Docs: https://infrasight-rs1b.onrender.com/docs

#### Section 2: The Challenge

**Content:**

- "Cloud infrastructure costs are notoriously difficult to manage. Teams often discover cost spikes only after they're billed, making it reactive rather than proactive. Existing cloud billing dashboards are complex, lack predictive capabilities, and don't provide actionable insights for optimization."
- "I wanted to build a solution that would help engineering teams stay ahead of their cloud spending through forecasting, automatically detect unusual patterns, and provide clear recommendations for cost optimization—all while being interpretable and fast enough for real-time use."

#### Section 3: My Approach

**Core Principles:**

1. **Interpretability** - Stakeholders need to understand predictions
2. **Speed** - Real-time API responses
3. **Production Readiness** - Reliable, deployable ML

**Core Capabilities:**

1. **Cost Forecasting**
   - Linear Regression with temporal features
   - Predicts future spending per service
   - Provides 95% confidence intervals
   - Configurable forecast periods (1-30 days)
   - Features: `day_number` (linear trend), `is_weekend` (weekend patterns)

2. **Anomaly Detection**
   - Z-score statistical analysis
   - Configurable sensitivity thresholds (1.0-5.0 standard deviations)
   - Service-level filtering
   - Historical comparison trends
   - No training data required

3. **Service Clustering & Recommendations**
   - K-means clustering (default 3 clusters)
   - Groups services with similar cost behaviors
   - Cost attribution analysis
   - Rule-based optimization suggestions
   - CSV export for further analysis

#### Section 4: What It Looks Like

**Screenshots Included:**

1. **Cost Forecasting Dashboard**
   - Image: `/images/case-studies/infrasight/Overview page showing Cost graph for each service.png`
   - Shows predictions with 95% confidence intervals
   - Interactive Chart.js visualizations

2. **Anomaly Detection View**
   - Image: `/images/case-studies/infrasight/anomalies.png`
   - Z-score statistical method
   - Configurable sensitivity thresholds
   - Service-level filtering

3. **Spending Insights**
   - Image: `/images/case-studies/infrasight/Top 5 services.png`
   - Top services analysis
   - Cost attribution
   - K-means clustering visualization

4. **Optimization Recommendations**
   - Image: `/images/case-studies/infrasight/Recommendations.png`
   - Rule-based optimization suggestions
   - Combines anomalies and budget constraints

5. **Accessibility Features**
   - Image: `/images/case-studies/infrasight/Dark Mode.png`
   - Three theme modes: Dark, Light, High-Contrast

6. **Responsive Design**
   - Image: `/images/case-studies/infrasight/Mobile View side menu.png`
   - Mobile-optimized navigation

#### Section 5: Technical Architecture

**Architecture Diagram:**

- Image: `/images/case-studies/infrasight/infrasight_architecture.png`
- Shows React → FastAPI → PostgreSQL flow

**Backend (FastAPI + PostgreSQL):**

- **API Design:** 10+ RESTful endpoints, JWT authentication, role-based access (admin/user), Pydantic schemas for validation, auto-generated OpenAPI/Swagger docs, async request handling with asyncio
- **Database:** Async SQLAlchemy + asyncpg for non-blocking queries, Serverless PostgreSQL on Neon.tech, Connection pooling for efficiency
- **ML Pipeline:**
  - Forecasting: Linear Regression with temporal features (day-of-week, weekend patterns)
  - Anomaly Detection: Z-score statistical analysis with configurable thresholds
  - Clustering: K-means for service pattern grouping
  - Recommendations: Rule-based engine combining anomalies and budgets

**Frontend (React 19 + TypeScript):**

- Component-based design with custom hooks
- Chart.js (react-chartjs-2) for interactive visualizations
- Custom CSS with responsive utilities
- Three theme modes: Dark, Light, High-Contrast
- Accessibility-focused (keyboard nav, color contrast)

**Deployment:**

- Frontend: Netlify (CDN, auto-deploy from main)
- Backend: Render (Docker container, health checks)
- Database: Neon.tech (Serverless PostgreSQL)
- CI/CD: GitHub Actions (Automated testing on push)

#### Section 6: Key Technical Challenges

**Challenge 1: Real-Time ML API Performance**

- **Problem:** ML computations (especially pandas operations) were blocking API responses, creating poor UX
- **Solution:** Async SQLAlchemy with asyncpg for non-blocking queries, GZip compression middleware, optimized pandas operations using vectorization
- **Impact:** API responses stayed under 500ms even with forecasting and clustering computations

**Challenge 2: Meaningful Anomaly Detection**

- **Problem:** Simple threshold-based detection produced too many false positives and didn't account for service-specific patterns
- **Solution:** Z-score analysis is relative to each service's historical behavior. Made threshold configurable (1.0-5.0) and exposed Z-score values in UI
- **Impact:** Teams can tune sensitivity to their needs, statistical approach adapts to each service's normal spending patterns

**Challenge 3: Handling Messy Time-Series Data**

- **Problem:** Real cloud billing data has varying granularity, missing timestamps, inconsistent service names
- **Solution:** Preprocessing pipeline that normalizes timestamps, fills gaps with forward-fill interpolation, uses pivot tables to transform raw billing data into service-level time series. Added flexible date-range filtering
- **Impact:** System handles real-world billing data robustly, even with imperfect inputs

#### Section 7: Technical Decisions & Trade-offs

**Why "Simple" ML?**

- Chose Linear Regression, Z-score, and K-means over more complex models (LSTM, ARIMA, Isolation Forest)
- In production ML, **interpretability and speed often matter more than marginal accuracy gains**
- Business stakeholders need to understand why the system flagged a cost spike
- Linear Regression provides clear coefficients and confidence intervals
- Z-score is statistically grounded and requires no training data
- These choices made the system production-ready faster and more maintainable
- **Future iteration:** Would explore ARIMA or Prophet for time-series forecasting, Isolation Forest for anomaly detection comparison

**What I Owned:**

- **Backend & ML:** FastAPI with 10+ endpoints, JWT auth, Pydantic validation, async SQLAlchemy, ML pipeline from scratch
- **Frontend:** React 19 dashboard, Chart.js visualizations, responsive design, 3 accessibility themes
- **Database:** PostgreSQL schema design, async queries, connection pooling, serverless deployment on Neon
- **DevOps:** Docker multi-stage builds, GitHub Actions CI/CD, Netlify + Render deployment, health checks

#### Section 8: ML Implementation Details

**Cost Forecasting: Linear Regression**

- Uses scikit-learn's LinearRegression
- Temporal features: `day_number` (captures linear trend), `is_weekend` (accounts for weekend usage patterns)
- Outputs per-service predictions with 95% confidence intervals
- **Why:** Interpretable (stakeholders understand coefficients), fast (sub-100ms inference), provides confidence intervals for uncertainty quantification

**Anomaly Detection: Z-Score**

- Formula: `z = (cost - mean) / std_dev`
- Default threshold: 2.0 standard deviations
- User-adjustable: 1.0 (more sensitive) to 5.0 (less sensitive)
- Flags both high and low anomalies
- **Why:** Statistically grounded, requires no training data (works immediately on new services), configurable, adapts to each service's historical behavior

**Service Clustering: K-Means**

- Default: 3 clusters
- Features: Daily cost vectors per service (normalized)
- **Why:** Scalable, production-ready, helps identify natural groupings in infrastructure spending

#### Section 9: What I Learned

**1. ML in Production vs. Research**

- In notebooks, you optimize for accuracy. In production, you optimize for **speed, interpretability, and reliability**
- Fast inference matters as much as model performance
- Stakeholders need to understand predictions
- Error handling and fallbacks are critical
- Configurable parameters let users tune behavior
- Mindset shift: from "what's the most accurate model?" to "what's the most production-ready solution?"

**2. Full-Stack Thinking**

- Building every layer solo taught how decisions cascade
- Database schema design affects query performance → impacts API response times → influences frontend UX
- Async Python patterns enable non-blocking I/O → makes app feel responsive even with ML computations
- Everything connects

**3. DevOps for Real Users**

- Docker multi-stage builds (smaller images)
- GitHub Actions CI/CD (automated testing)
- Environment variable management (security)
- CORS configuration (cross-origin requests)
- Not enough to make it work locally—must work reliably for real users

#### Section 10: Tech Stack Breakdown

| Category     | Technologies                                     |
| ------------ | ------------------------------------------------ |
| **Frontend** | React 19, TypeScript, Chart.js, Vite, Custom CSS |
| **Backend**  | Python 3.11, FastAPI, Pydantic, SQLAlchemy       |
| **ML**       | scikit-learn, pandas, NumPy                      |
| **Database** | PostgreSQL (Neon.tech), asyncpg                  |
| **Auth**     | JWT (python-jose), bcrypt                        |
| **DevOps**   | Docker, GitHub Actions, Netlify, Render          |

#### Section 11: Current Status & Next Steps

**Immediate Roadmap:**

- ARIMA or Prophet for improved time-series forecasting
- Isolation Forest for comparison with Z-score
- Slack/Teams integration for alerts
- Budget alerting system

**Long-term Vision:**

- Multi-cloud support (Azure, GCP)
- Team collaboration features
- Mobile app for monitoring
- Open-source community edition

#### Section 12: Explore the Project

**Links:**

- Live Demo: https://infrasight.netlify.app
- GitHub: https://github.com/aabhiyann/infrasight
- API Docs: https://infrasight-rs1b.onrender.com/docs

---

### TalkifyDocs Case Study (`/case-studies/talkifydocs`)

**Hero:**

- Title: "TalkifyDocs"
- Subtitle: "RAG-powered document chat application with SaaS features for interactive information retrieval."
- Tags: Next.js, GPT-4, LangChain, Pinecone, Stripe, TypeScript
- Stats: Development, Solo Full-Stack, GPT-4, Pinecone
- Links: GitHub

#### Section 1: Overview

**Content:**

- "TalkifyDocs is a SaaS application designed to transform how users interact with large document collections. It leverages Retrieval-Augmented Generation (RAG) to enable natural language chat with PDFs, providing cited answers and intelligent insights. As a solo full-stack project, it showcases end-to-end development of a modern AI-powered SaaS platform, from frontend to complex third-party integrations."

**Project Status Box:**

- Status: Development (not publicly deployed)
- Repository: 91.9% TypeScript, 99 commits, Full RAG pipeline implemented

#### Section 2: The Challenge

**Content:**

- "Knowledge workers spend hours manually reviewing documents—researchers analyzing papers, legal teams reviewing contracts, students extracting information from PDFs. Traditional search doesn't understand context or meaning, and finding specific information across multiple documents is tedious and error-prone."
- "I wanted to build a production-ready RAG application that would let users have natural conversations with their documents. The challenge wasn't just integrating GPT-4—it was designing an entire pipeline for document processing, vector search, and conversational AI, while building a complete SaaS platform with authentication and billing."

#### Section 3: My Approach

**Content:**

- "I designed TalkifyDocs around the RAG architecture: upload documents, chunk and embed them for semantic search, then use retrieved context to generate accurate, cited answers. But RAG is just the core—I also needed to build a complete SaaS platform with user management, subscription billing, and a polished UI."

**Core Workflow:**

1. **Document Processing Pipeline**
   - PDF upload and text extraction
   - Text chunking with overlap for context preservation
   - Embedding generation using OpenAI's text-embedding model
   - Vector storage in Pinecone for semantic search
   - Chunk size and overlap are critical for balancing context vs. precision

2. **Conversational Query Flow**
   - User asks a question
   - Question is embedded using OpenAI embeddings
   - Pinecone retrieves relevant document chunks
   - GPT-4 generates answer using retrieved context
   - Response includes source citations

3. **SaaS Infrastructure**
   - Clerk for authentication (OAuth, email/password)
   - Stripe for subscription billing with webhook handling
   - PostgreSQL with Prisma ORM for managing users, documents, subscriptions, chat history
   - Next.js API routes handle all backend logic

#### Section 4: What It Looks Like

**Screenshots Included:**

1. **Document Upload Interface**
   - Image: `/images/case-studies/talkifydocs/document-upload.png`
   - Drag-and-drop PDF upload with processing status
   - Documents automatically chunked and embedded

2. **Chat Interface with Citations**
   - Image: `/images/case-studies/talkifydocs/chat-interface.png`
   - Natural language chat interface powered by GPT-4
   - Answers include source citations from uploaded documents

3. **User Dashboard**
   - Image: `/images/case-studies/talkifydocs/dashboard.png`
   - Document management
   - Chat history
   - Subscription management

#### Section 5: Technical Architecture

**Architecture Diagram:**

- ASCII diagram showing:
  - Next.js + TypeScript → LangChain + OpenAI → Pinecone
  - Clerk (Auth) → OpenAI API (GPT-4)
  - Stripe (Payments)
  - PostgreSQL + Prisma (Database)

**Next.js Full-Stack Application:**

- Server-side rendering for better SEO
- API routes for backend logic
- TypeScript support throughout
- React components for UI
- Responsive design

**RAG Pipeline with LangChain:**

- LangChain orchestrates the RAG workflow
- RecursiveCharacterTextSplitter for text splitting
- Chunk size: 1000 tokens, overlap: 200 tokens
- OpenAI embeddings (text-embedding-ada-002)
- Vector storage in Pinecone
- GPT-4 for generation

**Third-Party Integrations:**

- Clerk: OAuth and email/password authentication
- Stripe: Subscription billing with webhook handlers
- Prisma ORM: Type-safe database queries with automatic migrations
- Each integration requires careful error handling and secrets management

#### Section 6: Key Technical Challenges

**Challenge 1: RAG Pipeline Design**

- **Problem:** How to chunk documents effectively for both context preservation and retrieval precision. Too small loses context, too large introduces noise.
- **Solution:** RecursiveCharacterTextSplitter with configurable chunk size (1000 tokens) and overlap (200 tokens). Tested different configurations to find the sweet spot. Overlap ensures information spanning chunk boundaries isn't lost.
- **Impact:** Chunk size significantly affects answer quality. The 1000/200 configuration balanced context retention with retrieval precision, but it's document-dependent and would need tuning for different use cases.

**Challenge 2: Managing API Costs**

- **Problem:** OpenAI API calls are expensive at scale. Embedding costs for document processing, GPT-4 costs for query answering, and Pinecone costs for vector storage add up quickly.
- **Approach:** Designed system with cost awareness: batch embedding generation where possible, implement usage limits per subscription tier, consider caching frequently asked questions. For production, would add rate limiting and monitor per-user costs.
- **Learning:** Production AI applications require careful cost management. Every API call has a price, and without limits, costs can spiral. Subscription tiers and usage caps are essential for SaaS AI products.

**Challenge 3: Integrating Multiple Third-Party Services**

- **Problem:** Building a SaaS requires integrating authentication (Clerk), billing (Stripe), vector database (Pinecone), AI (OpenAI), and database (PostgreSQL). Each has its own patterns, error handling, and secrets management.
- **Solution:** Structured codebase with clear separation of concerns: API routes for backend logic, webhook handlers for Stripe events, Prisma for database operations. Used environment variables for all API keys and implemented error handling for each service.
- **Impact:** Building production SaaS requires orchestrating many services. Webhook handling is particularly tricky—need idempotency, error recovery, and careful testing. Local development is more complex when you depend on external services.

#### Section 7: Technical Decisions & Trade-offs

**Why Next.js for RAG?**

- Provides both frontend and backend in one framework
- API routes handle document processing and RAG queries without needing separate backend
- Server-side rendering improves SEO
- TypeScript support throughout ensures type safety from database to UI
- For a solo project, this full-stack approach is faster than building separate frontend and backend

**Why LangChain?**

- Abstracts the RAG pipeline complexity—text splitting, embedding, retrieval, and generation
- Without it, would need to manually orchestrate OpenAI API calls, vector search, and prompt engineering
- RecursiveCharacterTextSplitter handles document chunking intelligently
- Retrieval chains simplify context management
- Trade-off is added dependency, but for RAG, it's worth it

**Why Pinecone?**

- Managed vector database service
- Handles scaling and infrastructure
- Fast similarity search
- Metadata filtering capabilities

**What I Owned:**

- **Frontend:** Next.js with TypeScript, React components, responsive UI, document upload interface, chat interface
- **RAG Pipeline:** LangChain integration, document chunking, embedding generation, vector search, GPT-4 query handling
- **SaaS Features:** Clerk authentication, Stripe billing, webhook handlers, subscription management
- **Database:** PostgreSQL schema design, Prisma ORM, migrations, relationship management

#### Section 8: RAG Implementation Details

**Document Processing:**

- Extract text using PDF parser
- Split into chunks using LangChain's RecursiveCharacterTextSplitter (chunk size: 1000 tokens, overlap: 200 tokens)
- Generate vector embeddings using OpenAI's text-embedding-ada-002
- Store in Pinecone with metadata (document ID, page number, source text)
- **Why:** RecursiveCharacterTextSplitter intelligently splits on paragraph boundaries, preserving semantic coherence. Overlap ensures context isn't lost at chunk boundaries.

**Query Execution:**

- Embed the query using the same OpenAI model
- Search Pinecone for the top-k most similar chunks (k=4)
- Pass retrieved chunks as context to GPT-4 with prompt instructing it to answer based on provided context
- Return answer with source citations
- **Why:** Semantic search (vector similarity) finds relevant chunks even when exact keywords don't match. GPT-4 generates natural language answers grounded in retrieved context.

**Context Window Management:**

- GPT-4 has limited context window (8k or 32k tokens depending on model)
- Retrieve only top-k most relevant chunks to stay within limits
- If chunks too large, truncate them
- If there's room, include more chunks for better context
- **Why:** Context window management is critical for RAG. Too much context wastes tokens and increases cost. Too little context reduces answer quality.

#### Section 9: What I Learned

**1. RAG is More Than Just AI**

- Building a RAG application involves document preprocessing (text extraction, chunking), embedding generation (API calls, batching), vector database management (indexing, querying), prompt engineering (context formatting, instruction design), and answer post-processing (citation extraction, formatting)
- The AI model is just one piece. Most of the work is data engineering
- Production AI applications require strong software engineering skills, not just ML knowledge
- Need to understand APIs, databases, error handling, and system design

**2. SaaS Requires Many Integrations**

- Integrating Clerk, Stripe, Pinecone, OpenAI, and PostgreSQL taught that each service has its own patterns
- Clerk uses middleware for auth
- Stripe requires webhook handlers for subscription events
- Pinecone has rate limits
- OpenAI has token limits
- Each integration needs error handling, retry logic, and secrets management
- Testing locally is harder when you depend on external services

**3. TypeScript Throughout is Worth It**

- Using TypeScript for frontend, backend, and database queries (Prisma) provided type safety everywhere
- Caught errors at compile time instead of runtime
- IDE autocomplete made development faster
- Refactoring was safer
- The upfront cost of defining types paid off in reduced bugs and better maintainability

#### Section 10: Tech Stack Breakdown

| Category       | Technologies                             |
| -------------- | ---------------------------------------- |
| **Frontend**   | Next.js, TypeScript, React, Tailwind CSS |
| **Backend**    | Next.js API Routes, LangChain            |
| **AI/ML**      | OpenAI GPT-4, OpenAI Embeddings          |
| **Vector DB**  | Pinecone                                 |
| **Auth**       | Clerk                                    |
| **Payments**   | Stripe                                   |
| **Database**   | PostgreSQL, Prisma ORM                   |
| **Deployment** | (Development - not yet deployed)         |

#### Section 11: Current Status & Next Steps

**Development Phase - Core Features Implemented:**

- ✅ Document upload and processing
- ✅ RAG pipeline with GPT-4
- ✅ User authentication
- ✅ Database schema
- ✅ Subscription billing integration

**Not Yet Deployed Publicly - Would Require:**

- Production deployment setup
- Cost optimization for API usage
- User testing and feedback
- Performance optimization at scale

**Future Enhancements:**

- Deploy to production (Vercel)
- Implement caching for repeated queries
- Add support for more document types (Word, Excel)
- Improve chunk retrieval accuracy
- Multi-document cross-referencing
- Advanced search with filters
- Team collaboration features
- Mobile app

#### Section 12: Explore the Project

**Links:**

- GitHub: https://github.com/aabhiyann/talkifydocs

---

### Audio Classification CNN Case Study (`/case-studies/audio-classification`)

**Hero:**

- Title: "Audio Classification CNN"
- Subtitle: "Deep learning research comparing CNN architectures for audio classification. Task-specific model achieved 92% accuracy, outperforming transfer learning by 26%."
- Tags: TensorFlow, Keras, librosa, YAMNet, Deep Learning
- Stats: Complete, Team of 3, Test Accuracy: 92%, Course: CSCI 6366 @ GWU
- Links: GitHub

#### Section 1: Overview

**Content:**

- "This was a research project for my Neural Networks & Deep Learning course (CSCI 6366) at GWU. I worked with two teammates to systematically compare different CNN architectures for audio classification, with a focus on understanding when transfer learning works and when training from scratch is better."
- "Research Question: Can a task-specific CNN outperform transfer learning with a pre-trained model (YAMNet) for focused audio classification tasks?"

#### Section 2: The Challenge

**Content:**

- "Audio classification is challenging because raw audio waveforms are high-dimensional and don't have the spatial structure that images have. CNNs work well on images, but audio requires preprocessing to convert it into a format CNNs can process effectively."
- "The common assumption is that transfer learning with large pre-trained models (like YAMNet) should always outperform training from scratch. But is this true for focused, domain-specific tasks with sufficient labeled data?"

#### Section 3: My Approach

**Dataset & Preprocessing:**

- Dataset: Human Words Audio Classification from Kaggle (610 audio clips: 203 dog, 203 cat, 204 bird)
- Each clip: 1 second, 16 kHz sample rate
- Preprocessing: Convert audio to Mel-spectrograms using librosa
  - n_fft=1024, hop_length=512, n_mels=128
  - Convert to dB scale, normalize to [0, 1]
  - Reshape to (128, 128, 1) for CNN input
- Image: `/images/case-studies/audio-classification/1_mel_spectrograms.png` - Shows distinct frequency patterns for each class
- Stratified splits: 440 train / 78 validation / 92 test

**Architectures Explored:**

1. **Baseline CNN (90% test accuracy)**
   - Architecture: Conv2D(32, 3×3) → MaxPool(2×2) → Conv2D(64, 3×3) → MaxPool(2×2) → Flatten → Dense(64, ReLU) → Dense(3, softmax)
   - Test loss: 0.57
   - Simple two-layer CNN as baseline

2. **CNN + Dropout (92% test accuracy) ⭐ Best Model**
   - Architecture: Conv2D(32) → MaxPool → Conv2D(64) → MaxPool → Conv2D(128) → MaxPool → Flatten → Dense(128, ReLU) → Dropout(0.5) → Dense(3, softmax)
   - Test loss: 0.24 (vs 0.57 baseline)
   - Precision, Recall, F1-Score: ~92% (macro-averaged)
   - Images:
     - `/images/case-studies/audio-classification/6_training_curves.png` - Training curves showing stable convergence
     - `/images/case-studies/audio-classification/4_cnn_confusion_matrix.png` - Confusion matrix showing balanced performance
   - Key insight: Regularization significantly improved generalization

3. **CRNN - CNN + Bidirectional GRU (78.69% val accuracy)**
   - Architecture: Conv2D layers → BatchNorm → MaxPool → GlobalAveragePooling2D → Bidirectional GRU(128) → Dropout(0.3) → Dense(3, softmax)
   - Temporal modeling didn't beat simpler CNN+Dropout

4. **Vision Transformer (ViT) (35-40% val accuracy)**
   - Architecture: PatchLayer (16×16) → PatchEmbedding → Transformer encoder blocks → GlobalAveragePooling1D → Dense(3, softmax)
   - Loss: 1.09-1.12
   - Severely underfits—transformers need much more data than 610 clips

5. **Transfer Learning - YAMNet (66% test accuracy)**
   - Architecture: YAMNet (pre-trained on AudioSet) → Extract 1024-D embeddings → Average/Flatten → Dense classifier head
   - Two approaches: Averaged embeddings (62%), Full sequence embeddings (66%)
   - Image: `/images/case-studies/audio-classification/5_yamnet_confusion_matrix.png` - Shows significant misclassification, especially dog→bird confusion (33%)
   - Why it underperformed: Domain mismatch between AudioSet (general audio) and our focused task (dog/cat/bird)

**Architecture Diagram:**

- Image: `/images/case-studies/audio-classification/7_architecture_diagram.png` - Visual diagram of the winning CNN + Dropout model

#### Section 4: Results Comparison

**Visual Summary:**

- Image: `/images/case-studies/audio-classification/3_comparison_table.png` - Quick visual summary

**Detailed Comparison Table:**

| Model             | Test/Val Accuracy | Precision | Recall  | F1-Score | Loss     | Notes             |
| ----------------- | ----------------- | --------- | ------- | -------- | -------- | ----------------- |
| **CNN + Dropout** | **92%** (test)    | **92%**   | **92%** | **92%**  | **0.24** | **Best model**    |
| Baseline CNN      | 90% (test)        | 90%       | 90%     | 90%      | 0.57     | Good baseline     |
| CRNN              | 78.69% (val)      | N/A       | N/A     | N/A      | 0.80     | Temporal modeling |
| YAMNet (sequence) | 66% (test)        | 60%       | 58%     | 58%      | 0.96     | Transfer learning |
| YAMNet (averaged) | 62% (test)        | N/A       | N/A     | N/A      | 0.90     | Transfer learning |
| ViT               | 35-40% (val)      | N/A       | N/A     | N/A      | 1.10     | Underfits         |

All metrics macro-averaged across three classes (dog, cat, bird)

#### Section 5: Key Research Finding

**Key Finding Chart:**

- Image: `/images/case-studies/audio-classification/8_key_finding.png` - Bar chart comparing CNN (92%) vs YAMNet (66%) accuracy

**Transfer Learning Is Not Always Better:**

- Task-specific CNN (92% accuracy) significantly outperformed transfer learning with YAMNet (66% accuracy)
- **26% improvement** challenges the common assumption that transfer learning is always superior

**Why Transfer Learning Underperformed:**

- YAMNet trained on AudioSet (general audio events like "car horn," "dog bark," "footsteps")
- Our task is focused (dog/cat/bird classification)
- Domain mismatch between pre-training and target task
- Small dataset size (610 clips) makes task-specific training viable

**When Transfer Learning Works:**

- Very limited labeled data
- Task similar to pre-training domain
- Need quick baseline without compute for training

**When Training From Scratch Works:**

- Sufficient labeled data (our case: 610 clips)
- Focused, specific task
- Domain mismatch with available pre-trained models

#### Section 6: Technical Implementation

**Data Pipeline:**

- librosa for audio processing
- Load audio at 16 kHz
- Compute Mel-spectrograms (n_fft=1024, hop_length=512, n_mels=128)
- Convert to dB scale, normalize to [0, 1]
- Reshape to (128, 128, 1) for CNN input
- Transforms 1-second audio clips into 2D image-like representations

**Training Configuration:**

- Adam optimizer
- Categorical crossentropy loss
- Comprehensive metrics (accuracy, precision, recall, F1-score)
- Early stopping (patience=10)
- Model checkpointing
- Learning rate scheduling
- Stratified splits to maintain class distribution
- Separate test set never seen during training

**Evaluation Methodology:**

- Stratified splits to maintain class distribution
- Separate test set never seen during training
- Comprehensive metrics (not just accuracy)
- Confusion matrices for per-class analysis
- Multiple random seeds to verify consistency
- Rigorous methodology ensured findings were reliable and reproducible

#### Section 7: What I Learned

**1. Transfer Learning Isn't Automatic**

- Transfer learning isn't always the best approach
- Domain alignment matters more than model size
- Task-specific models can outperform large pre-trained models when there's a domain mismatch
- Small, focused datasets can favor custom training over transfer learning

**2. Regularization Is Critical**

- Dropout(0.5) significantly improved results
- Reduced test loss from 0.57 → 0.24
- Maintained high accuracy (92%)
- Improved model calibration
- Proper regularization can make a substantial difference even with relatively simple architectures

**3. Complexity ≠ Performance**

- Simpler CNN outperformed complex architectures
- CRNN with GRU: 78.69%
- Vision Transformer: 35-40%
- Simple CNN + Dropout: 92%
- Model complexity should match the problem complexity and dataset size

**4. Research Process**

- Conducting systematic experiments taught the importance of proper train/val/test splits
- Comprehensive metrics beyond accuracy
- Comparing multiple approaches rigorously
- Documenting findings clearly
- Hands-on experience with experimental methodology essential for ML research

#### Section 8: Tech Stack Breakdown

| Category              | Technologies           |
| --------------------- | ---------------------- |
| **Deep Learning**     | TensorFlow, Keras      |
| **Audio Processing**  | librosa                |
| **Transfer Learning** | YAMNet                 |
| **Data Processing**   | NumPy, pandas          |
| **Visualization**     | Matplotlib, seaborn    |
| **Evaluation**        | scikit-learn (metrics) |

#### Section 9: Repository Highlights

**Project Structure:**

- Well-organized codebase with clear separation of concerns
- Modular architecture for easy experimentation
- Comprehensive documentation
- 205 commits showing iterative development

**Key Files:**

- Model architectures
- Data preprocessing pipeline
- Training scripts
- Evaluation scripts
- Visualization code
- Final report PDF

#### Section 10: Explore the Project

**Links:**

- GitHub: https://github.com/aabhiyann/audio-classification-cnn
- Final Report PDF: https://github.com/aabhiyann/audio-classification-cnn/blob/main/Audio%20Classification%20CNN.pdf

---

### MelodyHub Case Study (`/case-studies/melodyhub`)

**Hero:**

- Title: "MelodyHub"
- Subtitle: "Real-time social music platform with synchronized playback and live chat. Built with Socket.IO, React, and MongoDB—supporting 100+ concurrent users."
- Tags: React, Node.js, Socket.IO, MongoDB, Clerk, Cloudinary
- Stats: Deployed, Team of 3, Concurrent Users: 100+, Course: CSCI 6234 @ GWU
- Links: GitHub, Live Demo

#### Section 1: Overview

**Content:**

- "MelodyHub is a real-time social music platform that combines music streaming with social interaction—think 'Spotify meets Discord.' I built this with two teammates for my Object-Oriented Design course at GWU. The platform lets users create music rooms, listen together with synchronized playback, and chat in real-time. The core challenge was building a real-time system that keeps all users perfectly synchronized, even across different network conditions."

**Project Status Box:**

- Status: Deployed (by teammate)
- Live Demo: http://melodyhubmusic.vercel.app/
- Note: Project is live but maintained by teammate

#### Section 2: The Challenge

**Content:**

- "Existing music platforms are isolated—you listen alone. There's no way to share the experience in real-time with friends. Social features are missing, and synchronization across multiple users is technically challenging."
- "I wanted to build a platform where users could create music rooms, invite friends, and listen together with perfectly synchronized playback. The challenge was handling real-time state synchronization, network latency, and maintaining consistency across all connected clients."

#### Section 3: My Approach

**Core Features:**

1. **Real-Time Music Rooms**
   - Users create or join music rooms
   - Each room has its own playlist and playback state
   - Room browser for discovering and joining rooms

2. **Synchronized Playback**
   - All users in a room hear the same song at the same time
   - Play, pause, and seek actions are synchronized
   - Server maintains authoritative playback state

3. **Live Chat**
   - Real-time chat within each room
   - Message history persists
   - User presence indicators

4. **User Authentication & Presence**
   - Clerk authentication (OAuth, email/password)
   - User profiles and avatars
   - Online/offline status

#### Section 4: Technical Architecture

**Architecture Diagram (ASCII):**

```
┌──────────────┐     WebSocket      ┌──────────────┐     Audio CDN    ┌──────────────┐
│    React     │◄──────────────────►│  Socket.IO   │◄────────────────►│  Cloudinary  │
│   Frontend   │                    │   Server     │                  │   (Audio)    │
└──────────────┘                    └──────────────┘                  └──────────────┘
       │                                    │
       │ Auth                              │ DB
       ↓                                   ↓
┌──────────────┐                    ┌──────────────┐
│    Clerk     │                    │   MongoDB    │
│    Auth      │                    │  (Rooms/     │
└──────────────┘                    │   Users)     │
                                    └──────────────┘
```

**Real-Time Synchronization:**

- Socket.IO handles WebSocket communication for real-time updates
- When a user performs an action (play, pause, seek), the client emits an event to the server
- Server broadcasts it to all other clients in the room
- Server maintains the authoritative state, ensuring consistency

**Code Example - Server broadcasts playback state:**

```javascript
socket.to(roomId).emit("sync-playback", {
  songId,
  timestamp,
  isPlaying,
});
```

**Code Example - Clients apply the same state:**

```javascript
socket.on("sync-playback", ({ songId, timestamp, isPlaying }) => {
  audioPlayer.currentTime = timestamp;
  if (isPlaying) audioPlayer.play();
});
```

**Backend (Node.js + Express):**

- Object-Oriented Design principles applied:
  - **Inheritance:** User roles (admin, member, guest) extend a base User class
  - **Strategy Pattern:** Different playback modes (synchronized, independent) as interchangeable strategies
  - **Observer Pattern:** Real-time updates notify all observers (connected clients) of state changes
- Socket.IO server for WebSocket communication
- Express API for REST endpoints
- MongoDB for persistent storage

**Frontend (React):**

- React components handle UI and local state
- Socket.IO client connects to server and listens for real-time events
- Key components:
  - Room browser/selector for discovering and joining rooms
  - Music player with synchronized controls
  - Chat interface with real-time message updates
  - User list with presence indicators

**Audio Delivery (Cloudinary CDN):**

- Cloudinary provides reliable global CDN for audio files
- Handles format optimization, automatic transcoding, and fast delivery worldwide
- Ensures sub-3-second song loading across different network conditions
- Backend uploads audio files to Cloudinary and stores streaming URLs in MongoDB

#### Section 5: Key Technical Challenges

**Challenge 1: Real-Time Synchronization**

- **Problem:** Keeping all users in a room perfectly synchronized despite network latency and varying connection speeds
- **Solution:** Server maintains authoritative playback state and broadcasts events with timestamps. Clients apply state updates and adjust for their own network delay. Implemented timestamp-based sync mechanism that accounts for latency differences
- **Impact:** Users stay synchronized within ~100ms, creating a seamless shared listening experience

**Challenge 2: Scalable Room Architecture**

- **Problem:** Supporting multiple rooms with many users each, without performance degradation or resource conflicts
- **Solution:** Socket.IO namespaces isolate rooms, ensuring broadcasts only go to relevant clients. MongoDB stores persistent room state, while in-memory cache handles active rooms for fast lookups. Each room operates independently
- **Impact:** System supports 100+ concurrent users across multiple rooms with 99.2% uptime during beta testing

**Challenge 3: Handling Disconnections**

- **Problem:** Users disconnect unexpectedly—network issues, browser closes, etc. The system needs to handle this gracefully without breaking synchronization for other users
- **Solution:** Socket.IO connection events detect disconnections and notify other users. Room state persists in MongoDB, so reconnecting users can resume where they left off. Implemented reconnection logic that restores playback state
- **Impact:** Graceful handling of disconnections with automatic reconnection and state restoration

#### Section 6: What I Learned

**1. Real-Time Architecture Patterns**

- Building a synchronized real-time app taught WebSocket patterns with Socket.IO
- State synchronization challenges
- Handling network latency
- Managing disconnections gracefully
- Key insight: The server must be the source of truth, and clients apply updates optimistically while respecting server authority

**2. Object-Oriented Design in Practice**

- Applying OOP principles from the course to a real application showed how design patterns solve actual problems
- Inheritance for role hierarchies
- Strategy pattern for interchangeable behaviors
- Observer pattern for real-time updates
- All made the codebase more maintainable and extensible

**3. Team Collaboration**

- Working on a 3-person team with Agile methodology taught the importance of:
  - Clear API design for parallel development
  - Code reviews for quality
  - Git workflows with feature branches
  - Comprehensive documentation
- Good architecture reduced feature development time by 60% through clear separation of concerns

**4. Full-Stack Integration**

- Connecting multiple technologies—React frontend, Node.js backend, Socket.IO for real-time, MongoDB for persistence, Clerk for auth, and Cloudinary for CDN
- Taught how to integrate third-party services
- Design APIs for frontend-backend communication
- Handle deployment and DevOps considerations

#### Section 7: Tech Stack Breakdown

| Category           | Technologies                  |
| ------------------ | ----------------------------- |
| **Frontend**       | React, JavaScript, CSS        |
| **Backend**        | Node.js, Express, Socket.IO   |
| **Database**       | MongoDB                       |
| **Authentication** | Clerk (OAuth, email/password) |
| **Audio CDN**      | Cloudinary                    |
| **Deployment**     | Vercel (deployed by teammate) |

#### Section 8: Performance & Scale

**Beta Testing Results:**

- **100+ concurrent users** supported across multiple rooms
- **99.2% uptime** during 2-month beta period
- **50+ community members** actively using music rooms
- **Sub-3-second song loading** across different network conditions

**Optimizations:**

- CDN for audio delivery (reducing latency)
- Socket.IO rooms for efficient broadcasting (only relevant clients receive updates)
- Connection pooling for database (improving query performance)
- Efficient React rendering (minimizing re-renders)

#### Section 9: Course Project Context

**CSCI 6234: Object-Oriented Design @ GWU**

- Project goals:
  - Apply OOP principles in a real application
  - Use design patterns appropriately
  - Implement clean architecture
  - Document design decisions

**Our Approach:**

- UML diagrams for system design
- Comprehensive class hierarchies
- Documented design patterns (Strategy, Observer, Factory)
- Iterative development with feedback

**Impact:**

- Project demonstrated that good architecture improves team velocity
- Reduced feature development time by 60% through clear separation of concerns and reusable components

#### Section 10: Explore the Project

**Links:**

- Live Demo: http://melodyhubmusic.vercel.app/
- GitHub: https://github.com/aabhiyann/MelodyHub

---

## Experience Page (`/experience`)

### Header

**Title:** "Experience & Teaching"
**Subtitle:** "My journey from software development internships to teaching algorithms at graduate level."

### Visual Timeline

1. **Graduate TA - Algorithms** (2024-2025)
   - GWU, Washington DC
   - Teaching 60+ grad students. 22% midterm score improvement. Onboarded 8 TAs (2 weeks → 4 days). Curriculum redesign with 3 faculty.

2. **Software Dev Intern** (2023)
   - ECS Tech
   - Fintech platform (1,200+ users). 7 production features shipped. 89% fewer scheduling conflicts. 43% load time improvement.

3. **IT Solutions Lead** (2022-2023)
   - Intel Security
   - Digital transformation. 73% increase in qualified leads. $35K new contracts (Q1). 40% cost reduction.

### Why I Teach Section

**Quote:**

- "The best engineers can make complex ideas simple. If you can't explain it, you don't truly understand it."

**Content:**

- TA for Design & Analysis of Algorithms
- Interactive tutorials translate theory to industry case studies
- Result: 22% average midterm improvement

---

## Skills Page (`/skills`)

### Header

**Title:** "Skills & Certifications"
**Subtitle:** "A comprehensive overview of my technical expertise and qualifications."

### Skills Matrix

**Interactive grid with hover tooltips:**

**Languages:**

- Python (95%) - "Built custom RAG pipelines and finetuned Llama-2 models."
- TypeScript (90%) - "Refactored legacy JS codebase to TS, reducing runtime errors by 40%."
- Java (85%) - "Architected distributed backend systems for high-throughput data processing."

**Frameworks:**

- React (92%) - "Developed complex visualization dashboards for fintech analytics."
- FastAPI (88%) - "Created async microservices handling 10k+ requests/minute."
- Next.js (90%) - "Implemented SSR/ISR for SEO-optimized content delivery."

**AI/ML:**

- PyTorch (85%) - "Implemented custom loss functions for medical image segmentation."

**Tools:**

- Docker (85%) - "Containerized multi-service architectures for consistent dev/prod parity."
- AWS (80%) - "Managed EC2, S3, and Lambda resources for cost-effective scaling."
- Git (95%) - "Managed complex branching strategies for widespread team collaboration."

### Certifications Section

1. **AWS Academy Graduate - Cloud Foundations**
   - Issued: Sep 2024 | 20 hours
   - Tag: Cloud Computing

2. **AWS Academy Graduate - Cloud Operations**
   - Issued: Nov 2024 | 40 hours
   - Tag: DevOps

---

## Contact Page (`/contact`)

### Header

**Title:** "Let's Connect"
**Subtitle:** "I'm actively seeking full-time Software Engineer, ML/AI Engineer, or Cloud/Data Engineer roles starting January 2026."

### Two-Column Layout

**Left Column:**

1. **What I'm Looking For Box**
   - Software Engineer (Backend/Full-Stack)
   - ML/AI Engineer
   - Cloud/Data Engineer
   - Start Date: January 2026
   - Location: US-based or remote-friendly

2. **What I Bring Box**
   - ✅ Ship fast, iterate smart
   - ✅ End-to-end ownership (API → ML → Deploy)
   - ✅ Technical storytelling for all audiences

**Right Column:**

- Contact Section component (same as Home page)

---

## Photography Page (`/photography`)

### Header

**Title:** "Photography"
**Subtitle:** "Think of it as debugging the real world—finding patterns in chaos, framing what matters, and capturing the edge cases of daily life. My attention to detail in code mirrors my composition in photography."

**Tags:**

- Visual Debugging
- Pattern Recognition
- Frozen Moments

### Photography Gallery

- Grid of photography images
- Images from `/images/photography/` directory
- Hover effects and lightbox functionality

**Footer Note:**

- "A collection of my favorite compositions. No AI generation, just optics and light."

---

## Resume Page (`/resume`)

### Header

**Title:** "Resume"
**Subtitle:** "My professional experience and qualifications in a nutshell."

### Actions

- **Download PDF** button
- **Open in New Tab** button

**Resume File:**

- `/Abhiyan_Resume_2025_Software_Engineer.pdf`

---

## All External Links

### Social Media & Profiles

- **LinkedIn:** https://linkedin.com/in/abhiyansainju
- **GitHub:** https://github.com/aabhiyann
- **Instagram/Photography:** https://instagram.com/abhiyan.sainju
- **Email:** aabhiyansainju@gmail.com

### Project Links

#### InfraSight

- **Live Demo:** https://infrasight.netlify.app
- **GitHub:** https://github.com/aabhiyann/infrasight
- **API Docs:** https://infrasight-rs1b.onrender.com/docs
- **Demo Credentials:** demo@infrasight.com / password123

#### TalkifyDocs

- **GitHub:** https://github.com/aabhiyann/talkifydocs

#### Audio Classification CNN

- **GitHub:** https://github.com/aabhiyann/audio-classification-cnn
- **Final Report PDF:** https://github.com/aabhiyann/audio-classification-cnn/blob/main/Audio%20Classification%20CNN.pdf

#### MelodyHub

- **Live Demo:** http://melodyhubmusic.vercel.app/
- **GitHub:** https://github.com/aabhiyann/MelodyHub

#### Disease Prediction ML

- **GitHub:** https://github.com/aabhiyann/disease-prediction

#### Multi-Source Retrieval

- **GitHub:** https://github.com/aabhiyann/multi-source-retrieval

### Dataset Links

- **Human Words Audio Classification:** https://www.kaggle.com/datasets/chiragchhaya/human-words-audio-classification

---

## Components Overview

### Reusable Components

1. **Navbar**
   - Navigation links
   - Theme toggle
   - Mobile menu

2. **StatsBar**
   - Displays 4 key metrics
   - Gradient text effects
   - Responsive grid

3. **SkillsSlider**
   - Infinite scrolling skills marquee
   - Hover effects

4. **WhyHireMe**
   - Three-card layout
   - Academic, Production, Full-Stack cards

5. **ContactSection**
   - Contact form/links
   - Social media buttons
   - Email CTA

6. **SkillsMatrix**
   - Interactive skill grid
   - Proficiency bars
   - Hover tooltips with descriptions

7. **ProjectFilters**
   - Category filter buttons
   - Active state animation

8. **Testimonials**
   - Three testimonial cards
   - Grid layout

9. **VisualTimeline**
   - Experience timeline
   - Animated entries

10. **HeroBento**
    - Interactive card grid
    - Hover effects

11. **CaseStudyLayout**
    - Standardized case study wrapper
    - Hero section
    - Stats display
    - Links section

12. **Button**
    - Multiple variants (primary, outline, secondary, ghost)
    - Multiple sizes
    - Icon support

13. **Chip**
    - Badge/tag component
    - Multiple variants and sizes

14. **Card**
    - Glassmorphism card
    - Hover effects

15. **PhotographyGallery**
    - Image grid
    - Lightbox functionality

---

## Design System

### Theme System

- **Dark Mode:** Default
- **Light Mode:** Available
- **High Contrast Mode:** Available (if implemented)
- **Theme Toggle:** In navbar

### Color Palette

- **Accent Primary:** Blue (used for CTAs, highlights)
- **Accent Secondary:** (used for gradients)
- **Background Primary:** Main background
- **Background Surface:** Card backgrounds
- **Text Primary:** Main text
- **Text Secondary:** Secondary text
- **Text Muted:** Muted text
- **Border Primary:** Borders

### Typography

- **Heading Font:** Custom heading font
- **Body Font:** System font stack
- **Mono Font:** For code/technical content

### Animations

- **Framer Motion:** Used throughout
- **Page Transitions:** AnimatePresence
- **Hover Effects:** Scale, color transitions
- **Scroll Animations:** While in view animations

### Design Patterns

- **Glassmorphism:** Cards with backdrop blur
- **Gradient Text:** For headings and highlights
- **Dotted Background:** Decorative pattern
- **Smooth Scrolling:** Page transitions

---

## Content Summary

### Key Metrics Highlighted

- 6 Production Projects
- 1.2k+ Users Impacted
- 60+ Students Mentored
- 4.0 GPA @ GWU
- 22% midterm improvement (teaching)
- 43% load time improvement (ECS Tech)
- 73% lead increase (Intel Security)
- 92% accuracy (Audio Classification)
- 100+ concurrent users (MelodyHub)
- 99.2% uptime (MelodyHub)

### Key Technologies

- **Languages:** Python, TypeScript, JavaScript, Java, C++
- **Frontend:** React, Next.js, Tailwind CSS
- **Backend:** Node.js, FastAPI, Express
- **Databases:** PostgreSQL, MongoDB, Elasticsearch
- **AI/ML:** PyTorch, TensorFlow, Keras, LangChain, GPT-4
- **Cloud:** AWS, Docker
- **Tools:** Git, Socket.IO, Pinecone, Stripe, Clerk

### Key Achievements

- Built production ML platform (InfraSight)
- Created RAG application (TalkifyDocs)
- Research on transfer learning (Audio Classification)
- Real-time music platform (MelodyHub)
- Teaching algorithms to 60+ students
- 7 production features shipped (ECS Tech)
- Digital transformation leadership (Intel Security)

---

## Notes for Reviewers

### Strengths to Evaluate

1. **Content Clarity:** Is the narrative clear and compelling?
2. **Technical Depth:** Are technical details appropriate for the audience?
3. **Visual Design:** Is the design professional and consistent?
4. **Navigation:** Is the site easy to navigate?
5. **Call-to-Actions:** Are CTAs clear and effective?
6. **Case Studies:** Do case studies tell a compelling story?
7. **Metrics:** Are metrics impressive and verifiable?
8. **Links:** Are all links working and relevant?

### Areas to Review

1. **Content Accuracy:** Verify all claims and metrics
2. **Grammar/Spelling:** Check for typos and errors
3. **Consistency:** Ensure consistent tone and style
4. **Completeness:** Are all sections fully developed?
5. **Accessibility:** Are images alt-tagged? Is contrast sufficient?
6. **Mobile Experience:** How does it look on mobile?
7. **Loading Performance:** Are images optimized?
8. **SEO:** Are meta descriptions and titles appropriate?

---

**End of Portfolio Overview Document**

_This document provides a comprehensive overview of all content, sections, components, and links in the portfolio website. Use it to review the site's completeness, accuracy, and effectiveness._
