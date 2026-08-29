# Prompt 07 — Export Forecast Data for the Dashboard

---

Read `.agent.md` first. In `model/`, create `05_export_for_dashboard.py` that:

1. Loads `data/careem_partner_monthly_clean.csv` and `model/outputs/final_forecast.csv`.
2. Merges them into a single tidy JSON file the Next.js dashboard can fetch directly
   (no live Python backend needed — this is a static-data dashboard):
   `dashboard/public/data/forecast.json`, shaped as an array of
   `{ month, actualOrders, predictedOrders, actualRevenue, predictedRevenue }`.
3. Also writes `dashboard/public/data/kpis.json` with a few precomputed summary
   numbers for the home screen: latest month actual orders, month-over-month %
   change, next-month forecast, chosen model name, and its MAPE.
4. Includes a `"disclaimer"` field in both JSON files stating the data is simulated
   for an educational project.

Commit as `feat(export): produce dashboard-ready forecast JSON` and push.

Update `.agent.md` (check off step 07, note the exact JSON file paths in the file
manifest, set next prompt to `prompts/08-dashboard-scaffold-nextjs.md`), commit
`docs(agent): update state after data export`, push.
