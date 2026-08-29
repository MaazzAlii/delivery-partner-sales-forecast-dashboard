# Prompt 14 — Screen: Outreach Tracker (internal, not public-facing content)

---

Read `.agent.md` first. Build an internal-only `/internal/outreach` route that
renders `docs/outreach_tracker.csv` (from Prompt 19) as a simple table: organization,
platform, date contacted, response, follow-up needed.

Important: this route shows YOUR outreach log for grading evidence, not client
data — it contains no client-confidential info, just your own contact log. Still,
add a `noindex` meta tag and don't link to it from the main nav (direct URL only),
since it's process evidence, not a feature for the dashboard's "audience."

Commit as `feat(dashboard): add internal outreach tracker view` and push.
Update `.agent.md`, set next prompt to `prompts/15-responsive-styling-pass.md`, commit, push.
