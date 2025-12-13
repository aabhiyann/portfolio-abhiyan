# Reddit Post (r/MachineLearning or r/webdev)

---

**Title:** I built a production ML platform for cloud cost analytics. Here's what I learned about production ML vs. notebooks.

**Subreddit:** r/MachineLearning (or r/webdev, r/cscareerquestions)

---

**Post Body:**

I just shipped a live ML platform that predicts cloud costs and detects spending anomalies. Thought I'd share what I learned about production ML vs. notebooks.

**Live demo:** https://infrasight.netlify.app (demo@infrasight.com / password123)  
**Source:** https://github.com/aabhiyann/infrasight

## The Project

InfraSight is a cloud cost analytics platform with:

- Cost forecasting (Linear Regression with 95% confidence intervals)
- Anomaly detection (Z-score statistical analysis)
- Service clustering (K-means for pattern grouping)
- Optimization recommendations (rule-based engine)

## 3 Things Production ML Taught Me:

### 1. "Simple" ML Often Wins in Production

I chose Linear Regression over LSTM, Z-score over Isolation Forest, and K-means for clustering.

Why? **Interpretability and speed matter more than marginal accuracy gains.**

Business stakeholders need to understand why the system flagged a $500 cost spike. Linear Regression provides clear coefficients. Z-score is statistically grounded and requires no training data.

These "simple" choices made the system production-ready faster and more maintainable.

### 2. Real-Time Performance is Non-Negotiable

ML computations (especially pandas on large datasets) were blocking API responses.

**Solution:** Async SQLAlchemy + asyncpg for non-blocking queries, GZip compression, and vectorized pandas operations.

**Result:** API responses < 500ms even with forecasting + clustering.

### 3. Real Data is Messy

Cloud billing data has varying granularity, missing timestamps, and inconsistent service names—not the clean Kaggle datasets.

I built a preprocessing pipeline that normalizes timestamps, fills gaps with forward-fill interpolation, and transforms raw billing data into service-level time series.

**Production ML is 80% data engineering, 20% modeling.**

## Tech Stack

**Frontend:** React 19, TypeScript, Chart.js  
**Backend:** FastAPI, async SQLAlchemy, Pydantic  
**ML:** scikit-learn, pandas, NumPy  
**Database:** PostgreSQL (Neon.tech)  
**DevOps:** Docker, GitHub Actions, Netlify, Render

## What I Built (Solo Full-Stack):

- FastAPI backend with 10+ endpoints, JWT auth, async SQLAlchemy
- React 19 dashboard with Chart.js visualizations
- ML pipeline: forecasting, anomaly detection, clustering
- PostgreSQL on Neon (serverless)
- Docker + GitHub Actions CI/CD
- Deployed on Netlify + Render

## The Biggest Lesson

In notebooks, you optimize for accuracy.

In production, you optimize for:

- Speed
- Interpretability
- Reliability

This mindset shift changed how I approach ML engineering.

---

**Try it yourself:** https://infrasight.netlify.app

**What's your experience with production ML? Have you faced similar trade-offs?**

---

**Note for posting:**

- Best subreddits: r/MachineLearning, r/webdev, r/cscareerquestions, r/learnmachinelearning
- Post on weekdays during peak hours (9-11 AM or 1-3 PM EST)
- Engage with comments quickly (first hour is critical)
- Be prepared for technical questions and constructive criticism
- Consider adding a screenshot of the app in the post
