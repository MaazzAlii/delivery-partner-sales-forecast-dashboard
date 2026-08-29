# Prompt 17 — Identify Target Organizations (research, not invention)

---

Read `.agent.md` first. This step is research, not generation — do not invent
company names or claim contact details you haven't actually found.

Goal: identify up to 3 **real** organizations or professionals that plausibly fit
this dashboard's target audience (small food/retail businesses that fulfill orders
through delivery platforms like Careem NOW, or people who advise them — e.g. a
local restaurant owner, an SME business consultant, a small logistics/courier
operator). Reasonable places to look: public business directories, LinkedIn,
company "contact us" pages, local chamber-of-commerce listings — for the
Rawalpindi/Islamabad area if geographically relevant.

For each of the up to 3 orgs, record in `docs/target_organizations.md`:
- Organization/professional name and what they do (from a real, cited source).
- Why they plausibly fit (one sentence, tied to this project's forecasting use case).
- A real public contact channel (general email, LinkedIn, contact form — not a
  personal number scraped from somewhere private).
- Source you used to confirm they're real (URL).

If you can't verify a real contact channel for a candidate, don't include it —
leave it out rather than filling the gap with a guess.

Commit as `docs(outreach): research and list target organizations` and push.
Update `.agent.md`, set next prompt to `prompts/18-outreach-message-drafts.md`, commit, push.
