# Prompt 01 — Repo Bootstrap & Git Workflow

Paste into Antigravity in an empty working directory:

---

Create the root project folder for my Week 4 internship deliverable. Do the following,
committing and pushing after each numbered step (per the global rules already given):

1. Create a folder named `delivery-partner-sales-forecast-dashboard` in the current directory and
   `cd` into it. This name must be used everywhere going forward (repo name, GitHub
   repo name, Vercel project name).
2. Run `git init`. Create a `.gitignore` covering: `node_modules/`, `.next/`, `.env*`,
   `__pycache__/`, `*.pyc`, `.DS_Store`, `venv/`. Commit as `chore(repo): initial gitignore`.
3. Create the top-level folders: `data/`, `model/`, `dashboard/`, `docs/`. Add a
   one-line `README.md` placeholder inside each explaining its purpose. Commit as
   `chore(repo): scaffold top-level folders`.
4. Copy this `prompts/` folder into the repo root exactly as given (do not rewrite
   its contents) and commit as `chore(repo): add antigravity prompt pack`.
5. Copy `.agent.md` into the repo root and commit as `chore(repo): add agent state file`.
6. Create a GitHub repository named `delivery-partner-sales-forecast-dashboard` under my account,
   with description: "Simulated forecasting dashboard for a small Careem NOW
   restaurant partner — Week 4 AI/ML internship project (synthetic data)." Set
   visibility to public (ask me to confirm if you're unsure). Add it as `origin` and
   push the `main` branch with all commits so far.
7. Update `.agent.md`: fill in the repo URL, check off "01 Repo & git setup," set
   "Next prompt to run" to `prompts/02-dataset-simulation.md`. Commit as
   `docs(agent): update state after repo bootstrap` and push.

Stop after step 7 and tell me the repo URL.
