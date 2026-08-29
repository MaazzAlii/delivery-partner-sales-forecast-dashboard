# Prompt 10 — Screen: Forecast (Actual vs Predicted)

---

Read `.agent.md` first. Build the `/forecast` screen:

- Fetch `public/data/forecast.json`. Render a line chart with two series (actual,
  predicted) across all 24 historical months plus the 3 forecast months, clearly
  distinguishing the forecast region (e.g. dashed line or shaded band).
- Add a toggle between Orders view and Revenue view.
- Below the chart, a small table listing the 3 forecast months' predicted values
  and the model's MAPE, in plain language.
- Reuse the disclaimer banner component from Prompt 09 (don't duplicate the JSX,
  extract a shared component if you haven't already).

Commit as `feat(dashboard): build forecast actual-vs-predicted screen` and push.

Update `.agent.md`, set next prompt to `prompts/11-screen-data-explorer.md`, commit, push.
