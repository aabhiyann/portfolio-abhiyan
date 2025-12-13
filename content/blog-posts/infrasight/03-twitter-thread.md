# Twitter/X Thread (10-15 tweets)

---

**Tweet 1 (Hook):**
I just shipped a production ML platform that predicts cloud costs and detects anomalies.

Here's what I learned about production ML vs. notebooks 🧵

🔗 Live demo: infrasight.netlify.app
💻 Source: github.com/aabhiyann/infrasight

---

**Tweet 2:**
The Problem:

Cloud teams discover cost spikes AFTER they're billed. Existing dashboards are reactive, not proactive.

I wanted to build something that forecasts spending, detects anomalies, and recommends optimizations—all in real-time.

---

**Tweet 3:**
Core Capabilities:

1️⃣ Cost Forecasting (Linear Regression with 95% confidence intervals)
2️⃣ Anomaly Detection (Z-score statistical analysis)
3️⃣ Service Clustering (K-means for pattern grouping)
4️⃣ Optimization Recommendations (rule-based engine)

---

**Tweet 4:**
Challenge #1: Real-Time ML API Performance

ML computations (especially pandas) were blocking API responses.

Solution: Async SQLAlchemy + asyncpg, GZip compression, vectorized pandas operations.

Result: API responses < 500ms even with forecasting + clustering.

---

**Tweet 5:**
Challenge #2: Meaningful Anomaly Detection

Simple thresholds ("flag if cost > $100") produced too many false positives.

Solution: Z-score analysis relative to each service's historical behavior. Configurable sensitivity (1.0-5.0 std devs).

Users can tune it to their needs.

---

**Tweet 6:**
Challenge #3: Messy Time-Series Data

Real cloud billing data has:
• Varying granularity
• Missing timestamps
• Inconsistent service names

Not the clean Kaggle datasets you see in tutorials.

Built a preprocessing pipeline to handle it all.

---

**Tweet 7:**
Why I Chose "Simple" ML:

Linear Regression over LSTM
Z-score over Isolation Forest
K-means for clustering

Why? In production, interpretability and speed often matter more than marginal accuracy gains.

Stakeholders need to understand predictions.

---

**Tweet 8:**
Linear Regression:
✅ Interpretable (clear coefficients)
✅ Fast (sub-100ms inference)
✅ Confidence intervals (uncertainty quantification)

Perfect for business forecasting where explainability matters.

---

**Tweet 9:**
Z-score:
✅ Statistically grounded
✅ No training data required (works immediately)
✅ Configurable sensitivity
✅ Adapts to each service's behavior

No need for complex Isolation Forest models.

---

**Tweet 10:**
The Biggest Lesson:

In notebooks, you optimize for accuracy.

In production, you optimize for:
• Speed
• Interpretability
• Reliability

This mindset shift changed how I approach ML engineering.

---

**Tweet 11:**
Tech Stack:

Frontend: React 19, TypeScript, Chart.js
Backend: FastAPI, async SQLAlchemy, Pydantic
ML: scikit-learn, pandas, NumPy
Database: PostgreSQL (Neon.tech)
DevOps: Docker, GitHub Actions, Netlify, Render

---

**Tweet 12:**
What I Built (Solo Full-Stack):

✅ FastAPI backend (10+ endpoints, JWT auth)
✅ React dashboard (interactive charts)
✅ ML pipeline (forecasting, anomaly detection, clustering)
✅ Production deployment (Docker, CI/CD)
✅ 3 accessibility themes (dark, light, high-contrast)

---

**Tweet 13:**
Production ML is:
• 80% data engineering
• 20% modeling

Real data is messy. Real users need fast responses. Real stakeholders need interpretable predictions.

Notebooks don't teach you this.

---

**Tweet 14:**
Try it yourself:

🔗 Live demo: infrasight.netlify.app
📧 Login: demo@infrasight.com / password123
💻 Source: github.com/aabhiyann/infrasight
📖 API docs: infrasight-rs1b.onrender.com/docs

---

**Tweet 15 (CTA):**
What's your experience with production ML?

Have you faced similar trade-offs between accuracy and interpretability?

Drop your thoughts below 👇

And if you found this helpful, RT the first tweet to help other ML engineers!

---

**Hashtags to include in Tweet 1:**
#MachineLearning #MLOps #Python #React #FullStack #CloudComputing

---

**Pro Tips:**
1. Post the thread during peak hours (9-11 AM or 1-3 PM EST on weekdays)
2. Add a screenshot of the app to Tweet 1 for better engagement
3. Engage with replies quickly (first hour is critical for algorithm)
4. Consider pinning the thread to your profile

