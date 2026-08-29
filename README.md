# Delivery Partner Sales Forecast — Case Study

[![License: MIT](https://img.shields.io/badge/License-MIT-indigo.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![Python](https://img.shields.io/badge/Python-3.11+-blue?logo=python)](https://python.org)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-6366F1?logo=vercel)](https://delivery-partner-sales-forecast-dashboard.vercel.app)

> **SYNTHETIC DATA & NON-AFFILIATION DISCLAIMER**  
> All figures, order volumes, revenue metrics, and operational projections in this repository are **100% synthetic and simulated** for educational demonstration as part of the **SafeX Solutions Internship Program** (Week 4 Deliverable, Group 56, AI & ML Department).  
> *This is an independent student project analyzing a hypothetical delivery-partner business; it is not affiliated with, endorsed by, or produced in partnership with Careem.*

---

## 📌 Executive Summary

This repository delivers an end-to-end predictive demand forecasting case study designed for independent restaurant partners operating on food delivery platforms in the Rawalpindi / Islamabad region. 

The project evaluates both a baseline **Simple Moving Average (SMA-6)** model and a feature-engineered **Multiple Linear Regression** champion model, which achieves a **2.75% MAPE** (~51 orders/month average variance) compared to **7.96% MAPE** (~148 orders/month variance) for the baseline model (a **65.5% error reduction**).

---

## 🌐 Live Production Links

- **Live Web Dashboard:** [https://delivery-partner-sales-forecast-dashboard.vercel.app](https://delivery-partner-sales-forecast-dashboard.vercel.app)
- **GitHub Repository:** [https://github.com/MaazzAlii/delivery-partner-sales-forecast-dashboard](https://github.com/MaazzAlii/delivery-partner-sales-forecast-dashboard)
- **Internal Outreach Tracker:** [https://delivery-partner-sales-forecast-dashboard.vercel.app/internal/outreach](https://delivery-partner-sales-forecast-dashboard.vercel.app/internal/outreach) *(Process evidence route for internship grading)*

---

## 🚀 Key Dashboard Features

1. **Overview / Home (`/`):** 4 primary KPI cards (Latest Orders, MoM Growth %, Next-Month Forecast, Model Accuracy Benchmark) + 9-month demand trend preview chart.
2. **Sales & Demand Forecast (`/forecast`):** Interactive Recharts dual-series line chart comparing historical actuals vs predicted values across all 27 months, featuring a toggle between Order Volume and Revenue (PKR).
3. **Data Explorer (`/data`):** Sortable, searchable table of all 27 dataset records with client-side CSV export functionality (`exportToCSV`).
4. **Strategic Recommendations (`/recommendations`):** 3 actionable business strategies (Inventory acquisition, kitchen shift scheduling, platform promo timing) tied directly to forecast numbers.
5. **Methodology & About (`/about`):** Plain-language breakdown of dataset parameters, algorithm evaluations, model limitations, non-affiliation notice, and project credits.
6. **Internal Outreach Tracker (`/internal/outreach`):** Unlinked private evidence log for internship grading.

---

## 📂 Repository Architecture

```text
delivery-partner-sales-forecast-dashboard/
├── data/                                 # Raw & cleaned synthetic datasets
│   ├── careem_partner_monthly.csv        # 24-month synthetic order & revenue data
│   ├── careem_partner_monthly_clean.csv  # Standardized clean dataset feed
│   ├── simulate_dataset.py               # Python generator script (seed=42)
│   └── DISCLAIMER.md                     # Synthetic data disclaimer
├── model/                                # Python scripts & Jupyter notebooks
│   ├── 01_eda.py / 01_eda.ipynb          # Exploratory Data Analysis & quality checks
│   ├── 02_baseline_moving_average.py     # SMA-3 vs SMA-6 baseline forecasting
│   ├── 03_regression_model.py            # Multiple Linear Regression model training
│   ├── 04_model_comparison.py            # Head-to-head backtesting & champion selection
│   ├── 05_export_for_dashboard.py        # Static JSON exporter pipeline
│   ├── eda_plots/                        # High-resolution PNG visualizations
│   └── outputs/                          # Model CSV output feeds
├── dashboard/                            # Next.js 16 App Router Web Application
│   ├── app/                              # App Router pages (/forecast, /data, /about...)
│   ├── components/                       # Shared React UI components (DisclaimerBanner...)
│   ├── content/                          # Recommendation JSON content feeds
│   ├── public/data/                      # Static JSON API feeds (forecast.json, kpis.json)
│   └── vercel.json                       # Vercel deployment configuration
├── docs/                                 # Formal internship documentation & evidence
│   ├── recommendations_memo.md           # 3-page formal business memorandum
│   ├── target_organizations.md           # Verified public target organizations research
│   ├── outreach_drafts.md                # Personalized email/InMail outreach drafts
│   ├── outreach_tracker.csv              # Internship outreach activity log
│   ├── weekly_progress_report.md         # SafeX Solutions weekly progress report
│   └── commit_history.md                 # Git commit hygiene audit log
└── .agent.md                             # Agent state tracking file
```

---

## 🛠️ Local Development & Quick Start

### Python Data & Modeling Pipeline

```bash
# 1. Generate synthetic dataset
python data/simulate_dataset.py

# 2. Run EDA & generate charts
python model/01_eda.py

# 3. Train & backtest baseline SMA model
python model/02_baseline_moving_average.py

# 4. Train & backtest Linear Regression model
python model/03_regression_model.py

# 5. Evaluate models & select champion
python model/04_model_comparison.py

# 6. Export static JSON feed to dashboard
python model/05_export_for_dashboard.py
```

### Next.js Dashboard Local Server

```bash
cd dashboard
npm install
npm run dev
# Open http://localhost:3000 in browser
```

---

## 👨‍💻 Project Credits & Internship Context

- **Intern Name:** Maaz Ali
- **Program:** SafeX Solutions Internship Program (Week 4 Deliverable)
- **Track:** AI & Machine Learning (AI/ML)
- **Group:** Group 56
- **Group Leader:** Ahmed Mujtaba
