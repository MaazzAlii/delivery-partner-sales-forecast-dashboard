# Prompt 09 — Screen: Overview / Home

---

Read `.agent.md` first. Build the `/` (home) screen in the dashboard:

- Fetch `public/data/kpis.json`. Show 4 KPI cards: latest month orders, MoM % change
  (colored green/red appropriately), next-month forecast, model accuracy (plain
  language, e.g. "Predictions are typically within ~8% of actual").
- Below the cards, a compact preview chart (last 6 actual + next 3 predicted months)
  linking to the full `/forecast` page.
- A visible, non-dismissible banner: "Simulated data — educational project, not real
  Careem figures," pulling the disclaimer text from the JSON.
- Keep it responsive and visually clean — real hierarchy, not four identical boxes
  in a row with no emphasis on what matters most.

Commit as `feat(dashboard): build overview/home screen` and push.

Update `.agent.md` (check off step 09, set next prompt to
`prompts/10-screen-forecast-actual-vs-predicted.md`), commit, push.
