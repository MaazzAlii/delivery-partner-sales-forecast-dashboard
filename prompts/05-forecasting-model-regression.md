# Prompt 05 — Forecasting Model: Regression

---

Read `.agent.md` first. In `model/`, create `03_regression_model.py` (matching your
established format) that:

1. Loads `data/careem_partner_monthly_clean.csv`.
2. Builds a regression model (scikit-learn `LinearRegression` is enough — this is
   an intro-level deliverable, don't over-engineer) predicting `orders` and
   `revenue_pkr` from: a numeric time index (month number since start), calendar
   month (one-hot or cyclical encoding), `active_promo_days`, `rainy_days`,
   `is_ramadan_month`.
3. Uses a simple train/test split appropriate for 24 monthly points (e.g. train on
   first 18 months, test on last 6) — explain in a comment why you're not doing
   k-fold here (too little data, temporal order matters).
4. Reports MAE and MAPE on the test months, same metric basis as Prompt 04 so the
   two models are comparable.
5. Forecasts the next 3 months forward using reasonable assumed values for
   promo/rain/Ramadan flags (state your assumptions in a comment).
6. Saves results to `model/outputs/regression_forecast.csv`, same column format as
   Prompt 04's output.

Commit as `feat(model): add regression forecast model` and push.

Update `.agent.md` (check off step 05, log MAE/MAPE and which features mattered
most, set next prompt to `prompts/06-model-evaluation-selection.md`), commit
`docs(agent): update state after regression model`, push.
