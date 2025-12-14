# LinkedIn Short Post (300-500 words)

---

I just shipped a production ML platform that predicts cloud costs and detects spending anomalies. Here's what I learned about production ML vs. notebooks.

**The Project:** InfraSight — a cloud cost analytics platform with ML-powered forecasting, anomaly detection, and optimization recommendations.

🔗 Live demo: infrasight.netlify.app (demo@infrasight.com / password123)

## 3 Things Production ML Taught Me:

### 1. "Simple" ML Often Wins in Production

I chose Linear Regression over LSTM, Z-score over Isolation Forest, and K-means for clustering.

Why? **Interpretability and speed matter more than marginal accuracy gains.**

Business stakeholders need to understand why the system flagged a $500 cost spike. Linear Regression provides clear coefficients. Z-score is statistically grounded and requires no training data.

These "simple" choices made the system production-ready faster and more maintainable.

### 2. Real-Time Performance is Non-Negotiable

ML computations (especially pandas on large datasets) were blocking API responses.

Solution: Async SQLAlchemy + asyncpg for non-blocking queries, GZip compression, and vectorized pandas operations.

Result: API responses stayed under 500ms even with forecasting + clustering.

### 3. Real Data is Messy

Cloud billing data has varying granularity, missing timestamps, and inconsistent service names—not the clean Kaggle datasets.

I built a preprocessing pipeline that normalizes timestamps, fills gaps with forward-fill interpolation, and transforms raw billing data into service-level time series.

Production ML is 80% data engineering, 20% modeling.

## What I Built (Solo Full-Stack):

✅ FastAPI backend with 10+ endpoints, JWT auth, async SQLAlchemy  
✅ React 19 dashboard with Chart.js visualizations  
✅ ML pipeline: forecasting, anomaly detection, clustering  
✅ PostgreSQL on Neon (serverless)  
✅ Docker + GitHub Actions CI/CD  
✅ Deployed on Netlify + Render

**The biggest lesson:** In production, you optimize for speed, interpretability, and reliability—not just accuracy.

---

**Try it yourself:** infrasight.netlify.app

**What's your experience with production ML? Have you faced similar trade-offs?**

#MachineLearning #FullStack #Python #React #MLOps #CloudComputing #SoftwareEngineering

---

**Note:** This is designed to be posted directly on LinkedIn (not as an article). The shorter format performs better in the feed and encourages comments.

