# Prompt 04 — Baseline Forecasting Model: Moving Average

---

Read `.agent.md` first. In `model/`, create `02_baseline_moving_average.py` (or a
notebook, matching the format you used in Prompt 03) that:

1. Loads `data/careem_partner_monthly_clean.csv`.
2. Implements a 3-month and a 6-month simple moving average forecast for `orders`
   and `revenue_pkr`.
3. Backtests it: for each of the last 6 actual months, predict using only prior
   months' data, then compare predicted vs actual.
4. Computes MAE and MAPE for both window sizes.
5. Picks the better window size and forecasts the next 3 months forward.
6. Saves results to `model/outputs/moving_average_forecast.csv` with columns:
   `month, actual_orders, predicted_orders, actual_revenue, predicted_revenue`
   (actuals blank for the 3 forward-forecast months).

Commit as `feat(model): add moving-average baseline forecast` and push.

Update `.agent.md` (check off step 04, log MAE/MAPE numbers and chosen window size
in the decisions log, set next prompt to `prompts/05-forecasting-model-regression.md`),
commit `docs(agent): update state after baseline model`, push.
