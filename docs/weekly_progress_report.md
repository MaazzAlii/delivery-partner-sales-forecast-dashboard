# WEEKLY PROGRESS REPORT

**Project Title:** Careem NOW Partner Analytics — Predictive Dashboard  
**Intern Name:** Maaz Ali  
**Internship Program:** SafeX Solutions Internship (Week 4 Deliverable)  
**Track:** Artificial Intelligence & Machine Learning (AI/ML)  
**Group Number:** Group 56  
**Group Leader:** Ahmed Mujtaba  
**Report Period:** Week 4 (August 24, 2026 – August 30, 2026)  

---

## 1. Project Objective

The objective of this project is to build an end-to-end data analytics and predictive forecasting solution for small independent restaurant partners operating on delivery platforms like Careem NOW in the Rawalpindi/Islamabad region. The project encompasses synthetic dataset simulation, exploratory data analysis, machine learning model evaluation (Simple Moving Average vs Multiple Linear Regression), static JSON data export, a modern Next.js 16 App Router web dashboard, formal business recommendations, and professional organization outreach.

---

## 2. Daily Work Log

| Date | Hours Spent | Tasks & Milestones Achieved |
| :--- | :---: | :--- |
| **Mon, Aug 24** | 4.5 hrs | Initialized Git repository, configured `.gitignore`, scaffolded workspace directories, and created public GitHub repository `MaazzAlii/delivery-partner-sales-forecast-dashboard`. |
| **Tue, Aug 25** | 5.0 hrs | Developed `data/simulate_dataset.py` generating 24-month synthetic order/revenue dataset with winter seasonality, Ramadan surges, promo multipliers, and rain factors. |
| **Wed, Aug 26** | 6.0 hrs | Conducted data cleaning & EDA in `model/01_eda.py`, rendered trend charts in `model/eda_plots/`, built baseline SMA-6 moving average model, and trained champion Multiple Linear Regression model (2.75% MAPE). |
| **Thu, Aug 27** | 6.5 hrs | Exported static JSON feeds (`forecast.json`, `kpis.json`), scaffolded Next.js App Router project in `dashboard/`, built Overview, Forecast, Data Explorer, and Recommendations screens. |
| **Fri, Aug 28** | 5.5 hrs | Implemented Methodology page, private `/internal/outreach` evidence route, responsive Tailwind styling pass, business recommendations memorandum, and target organization research. |
| **Sat, Aug 29** | 4.0 hrs | Formulated personalized outreach message drafts, pre-filled outreach tracker log, and finalized weekly progress report template. |

---

## 3. Deliverables Status Checklist

- [x] **Prompt 01:** Repo Bootstrap & Git Workflow Setup
- [x] **Prompt 02:** 24-Month Dataset Simulation (`data/careem_partner_monthly.csv`)
- [x] **Prompt 03:** Data Cleaning & Exploratory Data Analysis (`model/01_eda.py`)
- [x] **Prompt 04:** Baseline Forecasting Model — Moving Average (`model/02_baseline_moving_average.py`)
- [x] **Prompt 05:** Machine Learning Forecasting Model — Regression (`model/03_regression_model.py`)
- [x] **Prompt 06:** Model Evaluation & Champion Selection (`model/04_model_comparison.py`)
- [x] **Prompt 07:** Data Export Pipeline for Dashboard (`model/05_export_for_dashboard.py`)
- [x] **Prompt 08:** Next.js App Router Scaffold & Layout (`dashboard/`)
- [x] **Prompt 09:** Home / Overview Screen (`dashboard/app/page.tsx`)
- [x] **Prompt 10:** Sales & Demand Forecast Screen (`dashboard/app/forecast/page.tsx`)
- [x] **Prompt 11:** Data Explorer & CSV Export Screen (`dashboard/app/data/page.tsx`)
- [x] **Prompt 12:** Actionable Recommendations Screen (`dashboard/app/recommendations/page.tsx`)
- [x] **Prompt 13:** Methodology & About Screen (`dashboard/app/about/page.tsx`)
- [x] **Prompt 14:** Internal Outreach Tracker Screen (`dashboard/app/internal/outreach/page.tsx`)
- [x] **Prompt 15:** Responsive & Visual Polish Pass (`dashboard/app/layout.tsx`)
- [x] **Prompt 16:** Business Recommendations Memorandum (`docs/recommendations_memo.md`)
- [x] **Prompt 17:** Target Organizations Identification (`docs/target_organizations.md`)
- [x] **Prompt 18:** Personalized Outreach Message Drafts (`docs/outreach_drafts.md`)
- [x] **Prompt 19:** Outreach Tracker Log Template (`docs/outreach_tracker.csv`)
- [x] **Prompt 20:** Weekly Progress Report Template (`docs/weekly_progress_report.md`)
- [ ] **Prompt 21:** Git Commit & Push Hygiene Audit
- [ ] **Prompt 22:** Production Vercel Deployment & Live Link
- [ ] **Prompt 23:** Portfolio Demonstration Video Recording
- [ ] **Prompt 24:** Final Deliverables Audit & Presentation Packaging

---

## 4. Problems Encountered & Solutions Applied

1. **Recharts Tooltip Formatter Type Mismatch in Next.js 16 TypeScript**:
   - *Problem:* Build failed during `npm run build` due to strict Tooltip callback type definitions in Recharts.
   - *Solution:* Updated the `formatter` prop signature to safely parse numeric inputs `Number(val) || 0`, resolving build errors cleanly.

2. **Sequential Prompt Execution & Git Commit Hygiene**:
   - *Problem:* Preserving clean commit logs for every step.
   - *Solution:* Executed single-prompt workflow, verifying local build passing before committing and pushing individual feature commits.

---

## 5. Next Steps & Action Plan

- Perform Git hygiene verification across all branches (Prompt 21).
- Deploy the Next.js application to Vercel production hosting and record the live URL (Prompt 22).
- Record a 3-minute portfolio demonstration video walking through model performance and dashboard features (Prompt 23).
- Conduct final audit and package submission materials for SafeX Solutions internship evaluation (Prompt 24).

---

## 6. Official Project Links

- **Public GitHub Repository:** [https://github.com/MaazzAlii/delivery-partner-sales-forecast-dashboard](https://github.com/MaazzAlii/delivery-partner-sales-forecast-dashboard)
- **Live Vercel Production URL:** *(To be populated upon Prompt 22 completion)*
