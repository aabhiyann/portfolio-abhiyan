# InfraSight: Building a Production ML Platform for Cloud Cost Analytics

**TL;DR:** I built a live cloud cost analytics platform with ML-powered forecasting and anomaly detection. Here's what I learned about production ML vs. notebooks, and why "simple" models often win in production.

🔗 **Live Demo:** [infrasight.netlify.app](https://infrasight.netlify.app) (demo@infrasight.com / password123)  
💻 **Source:** [github.com/aabhiyann/infrasight](https://github.com/aabhiyann/infrasight)

---

## The Problem

Cloud infrastructure costs are notoriously difficult to manage. Teams discover cost spikes only after they're billed—reactive, not proactive. Existing dashboards are complex, lack predictive capabilities, and don't provide actionable insights.

I wanted to build a solution that helps engineering teams stay ahead through forecasting, automatically detect unusual patterns, and provide clear recommendations—all while being interpretable and fast enough for real-time use.

## My Approach

I designed InfraSight around three core principles:

1. **Interpretability** — Stakeholders need to understand predictions
2. **Speed** — Real-time API responses (< 500ms)
3. **Production Readiness** — Reliable, deployable ML

### Core Capabilities

**Cost Forecasting**  
Linear Regression with temporal features predicts future spending per service with 95% confidence intervals. This gives teams a range of expected costs, not just a single estimate—better for budget planning and risk assessment.

**Anomaly Detection**  
Z-score statistical analysis automatically flags unusual spending patterns. The sensitivity is configurable (1.0-5.0 standard deviations) so teams can tune it to their needs. No training data required—works immediately on new services.

**Service Clustering & Recommendations**  
K-means clustering groups services with similar cost behaviors. Combined with rule-based logic, the system generates actionable optimization recommendations.

## Key Technical Challenges

### 1. Real-Time ML API Performance

**The Problem:** ML computations (especially pandas operations on large datasets) were blocking API responses, creating poor UX.

**My Solution:** I implemented async SQLAlchemy with asyncpg for non-blocking database queries, added GZip compression middleware, and optimized pandas operations using vectorization instead of row-by-row processing.

**Impact:** API responses stayed under 500ms even with forecasting and clustering computations.

### 2. Meaningful Anomaly Detection

**The Problem:** Simple threshold-based detection (e.g., "flag if cost > $100") produced too many false positives and didn't account for service-specific patterns.

**My Solution:** Z-score analysis is relative to each service's historical behavior. I made the threshold configurable and exposed Z-score values in the UI so users understand severity.

**Impact:** Teams can tune sensitivity, and the statistical approach adapts to each service's normal spending patterns.

### 3. Handling Messy Time-Series Data

**The Problem:** Real cloud billing data has varying granularity, missing timestamps, and inconsistent service names—not the clean datasets you see in tutorials.

**My Solution:** I built a preprocessing pipeline that normalizes timestamps, fills gaps with forward-fill interpolation, and uses pivot tables to transform raw billing data into service-level time series.

**Impact:** The system handles real-world billing data robustly, even with imperfect inputs.

## Why I Chose "Simple" ML

I chose Linear Regression, Z-score, and K-means over more complex models (LSTM, ARIMA, Isolation Forest) deliberately.

**In production ML, interpretability and speed often matter more than marginal accuracy gains.**

Business stakeholders need to understand why the system flagged a cost spike. Linear Regression provides clear coefficients and confidence intervals. Z-score is statistically grounded and requires no training data. These choices made the system production-ready faster and more maintainable.

_Future iteration: I'd explore ARIMA or Prophet for time-series forecasting to capture seasonality better, and Isolation Forest for anomaly detection to compare with Z-score. But for an MVP, pragmatic choices ship faster._

## What I Learned

### ML in Production vs. Research

In notebooks, you optimize for accuracy. In production, you optimize for **speed, interpretability, and reliability**. Fast inference matters as much as model performance. Stakeholders need to understand predictions. Error handling and fallbacks are critical.

This mindset shift—from "what's the most accurate model?" to "what's the most production-ready solution?"—changed how I approach ML engineering.

### Full-Stack Thinking

Building every layer solo taught me how decisions cascade. Database schema design affects query performance, which impacts API response times, which influences frontend UX. Async Python patterns enable non-blocking I/O, which makes the app feel responsive even with ML computations. Everything connects.

### DevOps for Real Users

Deploying to production means thinking about Docker multi-stage builds (smaller images), GitHub Actions CI/CD (automated testing), environment variable management (security), and CORS configuration (cross-origin requests). It's not enough to make it work locally—it has to work reliably for real users.

## Tech Stack

**Frontend:** React 19, TypeScript, Chart.js, Vite  
**Backend:** Python 3.11, FastAPI, Pydantic, SQLAlchemy  
**ML:** scikit-learn, pandas, NumPy  
**Database:** PostgreSQL (Neon.tech), asyncpg  
**DevOps:** Docker, GitHub Actions, Netlify, Render

## Try It Yourself

**Live Demo:** [infrasight.netlify.app](https://infrasight.netlify.app)  
**Login:** demo@infrasight.com / password123  
**Source Code:** [github.com/aabhiyann/infrasight](https://github.com/aabhiyann/infrasight)  
**API Docs:** [Auto-generated OpenAPI/Swagger](https://infrasight-rs1b.onrender.com/docs)

---

**What's your experience with production ML? Have you faced similar challenges with interpretability vs. accuracy trade-offs? I'd love to hear your thoughts in the comments.**

#MachineLearning #FullStack #CloudComputing #SoftwareEngineering #Python #React #MLOps #DevOps
