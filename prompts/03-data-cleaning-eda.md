# Prompt 03 — Data Cleaning & Exploratory Data Analysis

---

Read `.agent.md` first. In `model/`, create a Jupyter notebook `01_eda.ipynb`
(or a plain `.py` if Antigravity can't render notebooks — ask me which you can
actually execute) that:

1. Loads `data/careem_partner_monthly.csv`.
2. Checks and reports: missing values, dtypes, date parsing, obvious outliers.
   Even though the data is synthetic and should be clean, write this step for real
   — it's a required skill demonstration, not decoration.
3. Plots: orders over time, revenue over time, a month-over-month growth rate,
   and a simple seasonal view (orders by calendar month averaged across years).
4. Writes 4–6 bullet observations in a markdown cell (e.g. "orders roughly double
   during Ramadan-flagged months," "clear winter uptick," etc. — base these on what
   the plots actually show, don't invent findings).
5. Saves the cleaned dataframe (even if unchanged) to `data/careem_partner_monthly_clean.csv`
   so downstream steps have a stable input.

Commit `model/01_eda.ipynb` and `data/careem_partner_monthly_clean.csv` as
`feat(eda): exploratory analysis of partner order/revenue trends` and push.

Update `.agent.md` (check off step 03, note the 4–6 observations in the decisions
log, set next prompt to `prompts/04-forecasting-model-moving-average.md`), commit
as `docs(agent): update state after EDA`, push.
