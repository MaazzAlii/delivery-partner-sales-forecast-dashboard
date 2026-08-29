# Prompt 21 — GitHub Commit/Push Hygiene Pass

---

Read `.agent.md` first. Audit the full commit history:

1. Run `git log --oneline` and check every commit followed the `type(scope): message`
   convention and touched a tightly-scoped set of files (not a giant mixed commit).
2. Confirm `git status` is clean (nothing uncommitted) and every commit has actually
   been pushed to `origin/main` (`git log origin/main..HEAD` should be empty).
3. Confirm no `.env`, credentials, or the raw `node_modules/` ever got committed
   (`git log --all --full-history -- .env* node_modules` should be empty).
4. Write `docs/commit_history.md`: paste the clean `git log --oneline` output as
   evidence for the submission, plus one sentence confirming steps 1–3 passed.
5. If anything failed the audit, fix it now (e.g. amend a mis-scoped commit or add
   a missed `.gitignore` entry and commit that fix) before moving on — do not defer.

Commit as `chore(repo): commit hygiene audit and evidence log` and push.
Update `.agent.md`, set next prompt to `prompts/22-vercel-deployment.md`, commit, push.
