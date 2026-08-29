# Prompt 22 — Vercel Deployment

---

Read `.agent.md` first. Deploy `dashboard/` to Vercel as a live link for submission:

1. Confirm the GitHub repo from Prompt 01 is what Vercel will import from (this
   should be a GitHub-connected deployment, not a one-off CLI upload, so it
   auto-redeploys on future pushes).
2. Set the Vercel project's **root directory** to `dashboard/` (since the Next.js
   app lives in a subfolder of the repo, not the repo root) — this is the most
   common misconfiguration, double-check it explicitly.
3. Confirm framework preset auto-detects as Next.js, build command `next build`,
   output handled automatically — no custom `vercel.json` should be needed for a
   standard App Router project; only add one if something genuinely requires it,
   and explain why in a comment if so.
4. Trigger the deploy, confirm it succeeds, and visit the live URL to sanity-check
   every route from Prompts 9–14 actually loads with real data (not a blank/error page).
5. Record the live URL in `README.md`, `.agent.md`, and `docs/weekly_progress_report.md`.

Commit any config changes as `chore(deploy): configure Vercel root directory for dashboard`
and push.

Update `.agent.md`, set next prompt to `prompts/23-portfolio-walkthrough-video.md`, commit, push.
