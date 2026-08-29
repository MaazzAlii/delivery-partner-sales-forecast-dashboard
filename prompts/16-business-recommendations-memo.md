# Prompt 16 — Business Recommendations Memo

---

Read `.agent.md` first, and re-read `model/outputs/final_forecast.csv` and the
Prompt 06 verdict — every recommendation below must trace to an actual number
from those files, not generic advice.

In `docs/`, write `recommendations_memo.md` (I will convert to PDF separately, or
you may generate a PDF directly if you have that capability) containing exactly 3
recommendations for the restaurant owner, each with:
- A one-line headline recommendation.
- The specific forecast number/trend it's based on (e.g. "orders are forecast to
  rise ~14% next month, coinciding with the flagged Ramadan period").
- A concrete action (staffing, inventory, promo timing — whatever the number
  actually supports).
- One honest caveat (model limitation relevant to that specific recommendation).

Then copy the same 3 recommendations into `dashboard/content/recommendations.md`
(the file Prompt 12 created), replacing the placeholder content.

Commit `docs/recommendations_memo.md` and the updated dashboard content file as
`docs(memo): write 3 forecast-based business recommendations` and push.

Update `.agent.md`, set next prompt to `prompts/17-outreach-target-organizations.md`, commit, push.
