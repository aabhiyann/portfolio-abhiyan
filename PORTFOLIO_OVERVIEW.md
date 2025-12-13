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
  - Live: https://udaymelodyhhub.vercel.app/
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

**Sections:**

1. **Overview**
   - Production cloud cost analytics platform
   - Live demo available box with:
     - App: infrasight.netlify.app
     - Credentials: demo@infrasight.com / password123
     - API Docs: infrasight-rs1b.onrender.com/docs

2. **The Challenge**
   - Cloud infrastructure cost management problems
   - Reactive vs proactive approach

3. **My Approach**
   - Three core principles: interpretability, speed, production readiness
   - Core Capabilities:
     - Cost Forecasting (Linear Regression)
     - Anomaly Detection (Z-score)
     - Service Clustering & Recommendations (K-means)

4. **What It Looks Like**
   - Screenshots:
     - Cost Forecasting Dashboard
     - Anomaly Detection View
     - Spending Insights

5. **Technical Architecture**
   - ASCII diagram showing React → FastAPI → PostgreSQL
   - Backend details (FastAPI + PostgreSQL)
   - ML Pipeline details
   - Frontend details (React 19 + TypeScript)
   - Deployment table

6. **Engineering Challenges**
   - Challenge 1: Real-Time ML API Performance
   - Challenge 2: Meaningful Anomaly Detection
   - Challenge 3: Handling Time-Series Cost Data

7. **Technical Decisions & Trade-offs**
   - Why Linear Regression?
   - Why Z-Score?
   - Why K-Means?

8. **ML Implementation Details**
   - Forecasting: Linear Regression
   - Anomaly Detection: Z-Score
   - Clustering: K-Means

9. **What I Learned**
   - Full-Stack Solo Development
   - ML in Production vs. Notebooks
   - Async Python Patterns
   - DevOps for Solo Projects

10. **Tech Stack Breakdown**
    - Comprehensive table of technologies

11. **Current Status & Next Steps**
    - Immediate roadmap
    - Long-term vision

12. **Explore the Project**
    - Links to live demo, GitHub, API docs

---

### TalkifyDocs Case Study (`/case-studies/talkifydocs`)

**Hero:**
- Title: "TalkifyDocs"
- Subtitle: "RAG-powered document chat application with SaaS features for interactive information retrieval."
- Tags: Next.js, GPT-4, LangChain, Pinecone, Stripe, TypeScript
- Stats: Development, Solo Full-Stack, GPT-4, Pinecone
- Links: GitHub

**Sections:**

1. **Overview**
   - RAG-powered SaaS application
   - Project status box

2. **The Challenge**
   - Knowledge workers reviewing documents
   - Traditional search limitations

3. **My Approach**
   - RAG architecture design
   - SaaS infrastructure needs

4. **Technical Architecture**
   - ASCII diagram showing Next.js → LangChain → Pinecone
   - Frontend, RAG Pipeline, Auth & Billing, Database

5. **Key Technical Challenges**
   - Challenge 1: RAG Pipeline Design
   - Challenge 2: Managing API Costs
   - Challenge 3: Building a SaaS Architecture

6. **Technical Decisions & Trade-offs**
   - Why Next.js?
   - Why LangChain?
   - Why Pinecone?
   - Why Clerk?
   - Why Stripe?

7. **RAG Implementation Details**
   - Document Processing
   - Query Execution
   - Context Window Management

8. **What I Learned**
   - RAG is 80% Data Engineering, 20% AI
   - SaaS Requires Many Integrations
   - TypeScript Throughout is Worth It

9. **Tech Stack Breakdown**
   - Comprehensive table

10. **Current Status & Next Steps**
    - Development phase features
    - Deployment requirements

11. **Explore the Project**
    - Links to GitHub

---

### Audio Classification CNN Case Study (`/case-studies/audio-classification`)

**Hero:**
- Title: "Audio Classification CNN"
- Subtitle: "Deep learning research comparing CNN architectures for audio classification. Task-specific model achieved 92% accuracy, outperforming transfer learning by 26%."
- Tags: TensorFlow, Keras, librosa, YAMNet, Deep Learning
- Stats: Complete, Team of 3, Test Accuracy: 92%, Course: CSCI 6366 @ GWU
- Links: GitHub

**Sections:**

1. **Overview**
   - Research project for Neural Networks & Deep Learning course
   - Research question box
   - Brief team mention

2. **The Challenge**
   - Audio classification challenges
   - Transfer learning assumptions

3. **My Approach**
   - Dataset & Preprocessing (with mel-spectrograms image)
   - Architectures Explored:
     - Baseline CNN (90%)
     - CNN + Dropout (92%) ⭐ Best Model
     - CRNN (78.69%)
     - Vision Transformer (35-40%)
     - Transfer Learning - YAMNet (66%)
   - Training curves and confusion matrices images

4. **Results Comparison**
   - Visual comparison table image
   - Detailed HTML table

5. **Key Research Finding**
   - Key finding chart image
   - Transfer Learning Is Not Always Better
   - Why it underperformed
   - When transfer learning works vs. when training from scratch works

6. **Technical Implementation**
   - Data Pipeline
   - Training Configuration
   - Evaluation Methodology

7. **What I Learned**
   - Transfer Learning Isn't Automatic
   - Regularization Is Critical
   - Complexity ≠ Performance
   - Research Process

8. **Tech Stack Breakdown**
   - Comprehensive table

9. **Repository Highlights**
   - Project structure
   - 205 commits

10. **Explore the Project**
    - Links to GitHub and final report PDF

---

### MelodyHub Case Study (`/case-studies/melodyhub`)

**Hero:**
- Title: "MelodyHub"
- Subtitle: "Real-time social music platform with synchronized playback and live chat. Built with Socket.IO, React, and MongoDB—supporting 100+ concurrent users."
- Tags: React, Node.js, Socket.IO, MongoDB, Clerk, Cloudinary
- Stats: Deployed, Team of 3, Concurrent Users: 100+, Course: CSCI 6234 @ GWU
- Links: GitHub, Live Demo

**Sections:**

1. **Overview**
   - Real-time social music platform
   - Project status box

2. **The Challenge**
   - Real-time social features missing
   - Synchronization challenges

3. **My Approach**
   - Core Features:
     - Real-Time Music Rooms
     - Synchronized Playback
     - Live Chat
     - User Authentication & Presence

4. **Technical Architecture**
   - ASCII diagram
   - Real-Time Synchronization (with code examples)
   - Backend (Node.js + Express)
   - Frontend (React)
   - Audio Delivery (Cloudinary CDN)

5. **Key Technical Challenges**
   - Challenge 1: Real-Time Synchronization
   - Challenge 2: Scalable Room Architecture
   - Challenge 3: Handling Disconnections

6. **What I Learned**
   - Real-Time Architecture Patterns
   - Object-Oriented Design in Practice
   - Team Collaboration
   - Full-Stack Integration

7. **Tech Stack Breakdown**
   - Comprehensive table

8. **Performance & Scale**
   - Beta testing results
   - Optimizations

9. **Course Project Context**
   - CSCI 6234: Object-Oriented Design @ GWU
   - OOP principles applied

10. **Explore the Project**
    - Links to GitHub and live demo

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
- **Live Demo:** https://udaymelodyhhub.vercel.app/
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

*This document provides a comprehensive overview of all content, sections, components, and links in the portfolio website. Use it to review the site's completeness, accuracy, and effectiveness.*

