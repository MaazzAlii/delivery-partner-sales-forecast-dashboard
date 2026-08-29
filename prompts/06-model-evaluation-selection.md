# Prompt 06 — Model Evaluation & Selection

---

Read `.agent.md` first. In `model/`, create `04_model_comparison.py` (or notebook)
that:

1. Loads both `model/outputs/moving_average_forecast.csv` and
   `model/outputs/regression_forecast.csv`.
2. Puts MAE/MAPE for both models for both target variables (`orders`, `revenue_pkr`)
   side by side in one table.
3. Plots actual vs. both models' predictions on one chart per target variable.
4. Writes a short markdown verdict: which model wins and why, in plain language
   suitable for a non-technical restaurant owner (not just "lower MAPE" — explain
   what that means practically, e.g. "predictions are typically within X orders/month").
5. Saves the winning model's 3-month forward forecast as the canonical file:
   `model/outputs/final_forecast.csv` (same column format as before). This is the
   file the dashboard will consume in Prompt 07.

Commit as `feat(model): compare models and select final forecast` and push.

Update `.agent.md` (check off step 06, log the chosen model and its accuracy in
plain language, set next prompt to `prompts/07-export-forecast-data.md`), commit
`docs(agent): update state after model selection`, push.
