# Prompt 02 — Simulate the Dataset

---

Read `.agent.md` first. Then, in `data/`, create a Python script `simulate_dataset.py`
that generates a realistic **synthetic** 24-month dataset for a small independent
restaurant fulfilling orders through Careem NOW (Sept 2024 – Aug 2026). Do not pull
or claim any real Careem figures — this is simulated.

Requirements for the generator:
- Monthly rows: `month`, `orders`, `avg_order_value_pkr`, `revenue_pkr`,
  `active_promo_days`, `rainy_days` (Rawalpindi/Islamabad seasonality proxy),
  `is_ramadan_month` (flag, since it plausibly shifts food-delivery demand).
- Bake in a mild upward trend (business growing) + seasonality (higher orders in
  winter and during Ramadan evenings, a dip in peak summer heat) + random noise,
  so a moving average AND a regression will both find real signal — don't make it
  a straight line.
- Set a fixed random seed so the dataset is reproducible.
- Output `data/careem_partner_monthly.csv`.
- At the top of the script, add a comment block stating clearly: "SYNTHETIC DATA —
  generated for an educational internship project, not real Careem business data."

Also create `data/DISCLAIMER.md` with 2–3 sentences making the same point, to be
linked from the dashboard later.

Run the script, confirm the CSV has 24 rows and looks sane (print `.describe()`),
then commit `data/simulate_dataset.py`, `data/careem_partner_monthly.csv`, and
`data/DISCLAIMER.md` as `feat(data): simulate 24-month partner order/revenue dataset`
and push.

Update `.agent.md` (check off step 02, log the random seed and any parameter choices
in the decisions log, update file manifest, set next prompt to
`prompts/03-data-cleaning-eda.md`), commit as `docs(agent): update state after dataset simulation`, push.
