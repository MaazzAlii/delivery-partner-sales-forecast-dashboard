# Portfolio Demonstration Video Script & Recording Checklist

**Project Title:** Careem NOW Partner Analytics — Predictive Dashboard  
**Presenter:** Maaz Ali (SafeX Solutions Intern, Group 56)  
**Target Duration:** 5 to 10 Minutes  
**Camera Requirement:** Face-cam visible / Screen capture  

---

## 1. Pre-Recording Checklist

- [ ] **Live Deployment Verification:** Open [https://delivery-partner-sales-forecast-dashboard.vercel.app](https://delivery-partner-sales-forecast-dashboard.vercel.app) in browser and confirm all routes load without errors.
- [ ] **Console Sanity Check:** Open DevTools (`F12`) and verify 0 uncaught JavaScript errors or broken static assets.
- [ ] **Display Setup:** Set screen resolution to 1920x1080 (1080p HD) with 125% browser zoom for optimal text readability.
- [ ] **Audio & Camera:** Position face webcam in upper/lower corner, test microphone input levels, and ensure quiet room acoustics.
- [ ] **Tab Pre-Loading:** Open Vercel dashboard, GitHub repository (`MaazzAlii/delivery-partner-sales-forecast-dashboard`), and Jupyter notebook (`model/03_regression_model.ipynb`) in separate tabs for smooth switching.

---

## 2. Timestamped Video Script

### Section 1: Introduction & Problem Context (0:00 – 0:45)
- **On Screen:** Face camera + Title slide / Dashboard Home (`/`).
- **Talking Points:**
  - *"Hello everyone! My name is Maaz Ali, AI & Machine Learning Intern at SafeX Solutions (Group 56). Today I am presenting my Week 4 capstone project: Careem NOW Partner Analytics — Predictive Sales & Demand Dashboard."*
  - *"The problem we are solving is operational uncertainty for independent restaurant partners operating on food delivery platforms like Careem NOW across Rawalpindi and Islamabad. Small food merchants struggle with unpredictable order surges, leading to kitchen bottlenecks during peak hours and ingredient stockouts."*

---

### Section 2: Synthetic Dataset Architecture (0:45 – 2:00)
- **On Screen:** `data/simulate_dataset.py` in editor & `data/DISCLAIMER.md`.
- **Talking Points:**
  - *"First, let's look at the dataset. All data in this project is 100% synthetic and simulated using Python (`seed=42`) for educational purposes — it contains no private Careem corporate figures."*
  - *"We simulated 24 historical months (September 2024 to August 2026) incorporating real-world operational drivers: an underlying growth trend (+22 orders/mo), winter seasonality (+14%), Ramadan demand spikes (+18%), active Careem promotion multipliers (+11.75 orders/day), and monsoon rain surge factors (+21.32 orders/day)."*

---

### Section 3: Machine Learning Models & Evaluation (2:00 – 3:45)
- **On Screen:** `model/eda_plots/orders_model_comparison.png` & Jupyter Notebook.
- **Talking Points:**
  - *"We evaluated two distinct forecasting approaches against out-of-sample test data: a baseline 6-Month Simple Moving Average (SMA-6) and a feature-engineered Multiple Linear Regression model."*
  - *"While the moving average baseline lagged behind seasonal shifts, achieving a 7.96% MAPE (~148 orders error margin), our champion Multiple Linear Regression model achieved an outstanding **2.75% MAPE** (~51 orders error margin) — representing a **65.5% reduction in forecast error**."*

---

### Section 4: Live Dashboard Demo (3:45 – 7:30)
- **On Screen:** Active browser session on Vercel deployment.
- **Talking Points & Navigation Steps:**
  - **Overview (`/`):** *"Here is our Overview home screen. Notice the Careem brand dark theme, top disclaimer banner, and 4 primary KPI cards: Latest Orders (2,126), MoM Growth (+7.6%), Next-Month Forecast (1,927), and Model Accuracy Benchmark (97.25%). Below is our 9-month demand trajectory preview chart."*
  - **Forecast (`/forecast`):** *"Navigating to the Forecast page, we see our interactive Recharts dual-series line chart. We can seamlessly toggle between Order Volume View and Revenue View in PKR. Notice the shaded green zone highlighting our 3-month forward forecast (September–November 2026)."*
  - **Data Explorer (`/data`):** *"On the Data Explorer page, users can filter, sort, and inspect all 27 dataset records, and export raw data directly via our client-side 'Export to CSV' button."*
  - **Methodology (`/about`):** *"The Methodology page breaks down our algorithms in plain language, explaining parameters, model selection rationale, and honest limitations."*
  - **Internal Outreach (`/internal/outreach`):** *"Finally, we have an internal, unlinked process evidence route logging outreach efforts to local business associations."*

---

### Section 5: Strategic Business Recommendations (7:30 – 8:45)
- **On Screen:** `/recommendations` page & `docs/recommendations_memo.md`.
- **Talking Points:**
  - *"Machine learning predictions are only useful if they drive action. We translated our forecast into 3 concrete strategies for restaurant owners:"*
  - *"1. **Pre-Winter Bulk Packaging Procurement:** Order volume ramps +10.8% by November (2,136 orders). Locking in bulk packaging by Oct 15 saves 5-8%."*
  - *"2. **Peak Weekend Kitchen Shift Scheduling:** Monthly demand crosses 2,000 orders in October. Adding 2 prep cooks for Friday-Sunday evening shifts maintains under-20-minute prep SLAs."*
  - *"3. **Targeted Off-Peak & Rainy-Day Promos:** September is a transition month (1,927 orders). Scheduling 8 Careem promo banner days cushions off-peak dips."*

---

### Section 6: Wrap-Up & Future Outlook (8:45 – 9:30)
- **On Screen:** GitHub Repository home page (`MaazzAlii/delivery-partner-sales-forecast-dashboard`).
- **Talking Points:**
  - *"With additional time or access to live Careem partner APIs, future iterations would incorporate real-time hourly order dispatch feeds and hyper-local weather APIs."*
  - *"Thank you to SafeX Solutions, Group Leader Ahmed Mujtaba, and Group 56 for this incredible learning experience. The full codebase, documentation, and live dashboard link are available on GitHub. Thank you!"*
