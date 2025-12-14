---
title: "InfraSight: Building a Production ML Platform for Cloud Cost Analytics"
published: false
description: "What I learned building a live ML platform with forecasting, anomaly detection, and optimization recommendations—and why 'simple' ML often wins in production."
tags: machinelearning, python, react, devops
cover_image: https://your-portfolio.com/images/case-studies/infrasight/infrasight_architecture.png
canonical_url: https://your-portfolio.com/projects/infrasight
---

# InfraSight: Building a Production ML Platform for Cloud Cost Analytics

**TL;DR:** I built a live cloud cost analytics platform with ML-powered forecasting and anomaly detection. Here's what I learned about production ML vs. notebooks, and why "simple" models often win in production.

🔗 **[Live Demo](https://infrasight.netlify.app)** (demo@infrasight.com / password123)  
💻 **[Source Code](https://github.com/aabhiyann/infrasight)**  
📖 **[API Documentation](https://infrasight-rs1b.onrender.com/docs)**

---

## Table of Contents
- [The Problem](#the-problem)
- [My Approach](#my-approach)
- [Key Technical Challenges](#key-technical-challenges)
- [Why I Chose "Simple" ML](#why-i-chose-simple-ml)
- [What I Learned](#what-i-learned)
- [Tech Stack](#tech-stack)
- [Try It Yourself](#try-it-yourself)

---

## The Problem

Cloud infrastructure costs are notoriously difficult to manage. Teams discover cost spikes only after they're billed—reactive, not proactive. Existing cloud billing dashboards are complex, lack predictive capabilities, and don't provide actionable insights for optimization.

I wanted to build a solution that would help engineering teams stay ahead of their cloud spending through forecasting, automatically detect unusual patterns, and provide clear recommendations for cost optimization—all while being interpretable and fast enough for real-time use.

---

## My Approach

I designed InfraSight around three core principles:

1. **Interpretability** — Stakeholders need to understand predictions
2. **Speed** — Real-time API responses (< 500ms)
3. **Production Readiness** — Reliable, deployable ML

### Core Capabilities

#### Cost Forecasting

I implemented Linear Regression with temporal features to predict future spending per service. The model provides 95% confidence intervals, giving teams a range of expected costs rather than a single point estimate. This transparency helps with budget planning and risk assessment.

#### Anomaly Detection

Using Z-score statistical analysis, the system automatically flags unusual spending patterns. I made the sensitivity configurable (1.0-5.0 standard deviations) so teams can tune it to their tolerance for alerts. This approach requires no training data and works immediately on new services.

#### Service Clustering & Recommendations

K-means clustering groups services with similar cost behaviors, helping teams identify patterns across their infrastructure. Combined with rule-based logic, the system generates actionable optimization recommendations based on detected anomalies and budget constraints.

---

## Key Technical Challenges

Building a production ML system taught me that the hard problems aren't always algorithmic—they're about making ML work reliably in real-world conditions.

### Challenge 1: Real-Time ML API Performance

**The Problem:** ML computations (especially pandas operations on large datasets) were blocking API responses, creating poor user experience.

**My Solution:** I implemented async SQLAlchemy with asyncpg for non-blocking database queries, added GZip compression middleware to reduce payload sizes, and optimized pandas operations using vectorization instead of row-by-row processing.

**Impact:** API responses stayed under 500ms even with forecasting and clustering computations, making the app feel responsive.

### Challenge 2: Meaningful Anomaly Detection

**The Problem:** Simple threshold-based detection (e.g., "flag if cost > $100") produced too many false positives and didn't account for service-specific spending patterns.

**My Solution:** I chose Z-score statistical analysis because it's relative to each service's historical behavior. I made the threshold configurable (1.0-5.0 standard deviations) and exposed Z-score values in the UI so users understand severity.

**Impact:** Teams can tune sensitivity to their needs, and the statistical approach adapts to each service's normal spending patterns.

### Challenge 3: Handling Messy Time-Series Data

**The Problem:** Real cloud billing data has varying granularity, missing timestamps, and inconsistent service names—not the clean datasets you see in tutorials.

**My Solution:** I built a preprocessing pipeline that normalizes timestamps, fills gaps with forward-fill interpolation, and uses pivot tables to transform raw billing data into service-level time series. Added flexible date-range filtering to handle different reporting periods.

**Impact:** The system handles real-world billing data robustly, even with imperfect inputs.

---

## Why I Chose "Simple" ML

I chose Linear Regression, Z-score, and K-means over more complex models (LSTM, ARIMA, Isolation Forest) deliberately. 

**In production ML, interpretability and speed often matter more than marginal accuracy gains.**

Business stakeholders need to understand why the system flagged a cost spike. Linear Regression provides clear coefficients and confidence intervals. Z-score is statistically grounded and requires no training data. These choices made the system production-ready faster and more maintainable.

### ML Implementation Details

#### Cost Forecasting: Linear Regression

I use scikit-learn's `LinearRegression` with two temporal features:
- `day_number` (captures linear trend)
- `is_weekend` (accounts for weekend usage patterns)

The model outputs per-service predictions with 95% confidence intervals.

**Why this approach:** Linear Regression is interpretable (stakeholders understand coefficients), fast (sub-100ms inference), and provides confidence intervals for uncertainty quantification. Perfect for business forecasting where explainability matters.

#### Anomaly Detection: Z-Score

I calculate Z-scores for each service's daily cost:

```python
z = (cost - mean) / std_dev
```

Default threshold is 2.0 standard deviations, but users can adjust from 1.0 (more sensitive) to 5.0 (less sensitive). The system flags both high and low anomalies.

**Why this approach:** Z-score is statistically grounded, requires no training data (works immediately on new services), and is configurable. It adapts to each service's historical behavior rather than using fixed thresholds.

#### Service Clustering: K-Means

I use K-means (default 3 clusters) on daily cost vectors to group services with similar spending behaviors. Features are normalized cost time series per service.

**Why this approach:** K-means is scalable, production-ready, and helps identify natural groupings in infrastructure spending. Teams can see which services behave similarly and optimize them together.

---

## What I Learned

This project taught me that building production ML systems is fundamentally different from Jupyter notebooks.

### ML in Production vs. Research

In notebooks, you optimize for accuracy. In production, you optimize for **speed, interpretability, and reliability**. Fast inference matters as much as model performance. Stakeholders need to understand predictions. Error handling and fallbacks are critical. Configurable parameters let users tune behavior to their needs.

This mindset shift—from "what's the most accurate model?" to "what's the most production-ready solution?"—changed how I approach ML engineering.

### Full-Stack Thinking

Building every layer solo taught me how decisions cascade. Database schema design affects query performance, which impacts API response times, which influences frontend UX. Async Python patterns enable non-blocking I/O, which makes the app feel responsive even with ML computations. Everything connects.

### DevOps for Real Users

Deploying to production means thinking about Docker multi-stage builds (smaller images), GitHub Actions CI/CD (automated testing), environment variable management (security), and CORS configuration (cross-origin requests). It's not enough to make it work locally—it has to work reliably for real users.

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, TypeScript, Chart.js, Vite, Custom CSS |
| **Backend** | Python 3.11, FastAPI, Pydantic, SQLAlchemy |
| **ML** | scikit-learn, pandas, NumPy |
| **Database** | PostgreSQL (Neon.tech), asyncpg |
| **Auth** | JWT (python-jose), bcrypt |
| **DevOps** | Docker, GitHub Actions, Netlify, Render |

---

## Architecture

```
┌──────────────┐     REST API      ┌──────────────┐     SQL      ┌──────────────┐
│  React + TS  │◄─────────────────►│   FastAPI    │◄────────────►│ PostgreSQL   │
│  Chart.js    │                    │  + ML Engine │              │ (Neon.tech)  │
│  (Netlify)   │                    │  (Render)    │              │              │
└──────────────┘                    └──────────────┘              └──────────────┘
```

**Deployment:**
- **Frontend:** Netlify (CDN, auto-deploy from main)
- **Backend:** Render (Docker container, health checks)
- **Database:** Neon.tech (Serverless PostgreSQL)
- **CI/CD:** GitHub Actions (Automated testing on push)

---

## What's Next

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

---

## Try It Yourself

**Live Demo:** [infrasight.netlify.app](https://infrasight.netlify.app)  
**Login:** demo@infrasight.com / password123  
**Source Code:** [github.com/aabhiyann/infrasight](https://github.com/aabhiyann/infrasight)  
**API Docs:** [Auto-generated OpenAPI/Swagger](https://infrasight-rs1b.onrender.com/docs)

---

## Conclusion

Building InfraSight taught me that production ML is fundamentally different from research ML. The best model isn't always the most accurate—it's the one that's interpretable, fast, and reliable. "Simple" ML techniques like Linear Regression and Z-score can be more valuable than complex deep learning models when you need to ship quickly and maintain stakeholder trust.

**What's your experience with production ML? Have you faced similar trade-offs between accuracy and interpretability? I'd love to hear your thoughts in the comments.**

---

*If you found this helpful, follow me for more posts on ML engineering, full-stack development, and production systems.*

**Connect with me:**
- LinkedIn: [linkedin.com/in/abhiyansainju](https://linkedin.com/in/abhiyansainju)
- GitHub: [github.com/aabhiyann](https://github.com/aabhiyann)
- Portfolio: [your-portfolio.com](https://your-portfolio.com)

