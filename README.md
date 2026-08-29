# Careem Predictive Dashboard — Antigravity Prompt Pack
### Week 4 · AI & ML Department · Group 56 · SafeX Solutions Internship

## What this is
This folder is a **sequenced set of prompts** you paste into Antigravity, one at a time,
to build the Week 4 deliverable: a small forecasting dashboard for a small business
(a restaurant partner on Careem NOW), building on your Week 3 Careem case study.

This pack does **not** contain the finished dashboard. It contains the instructions
that make Antigravity build it, in order, with a clean git history and a live
Vercel deployment — plus a state file so you (or another tool, e.g. Claude Code)
can resume mid-project if you hit a usage limit.

## The business framing (so every prompt stays consistent)
"CaremEats Partner Analytics" — a small independent restaurant that fulfills orders
through Careem NOW. The dashboard forecasts monthly order volume and revenue so the
owner can plan staffing, inventory, and promo timing. **All data is simulated for
educational/portfolio purposes — it is not real Careem data.** Every screen and the
memo must say this explicitly. Do not let Antigravity present the numbers as real.

## Repo layout this will produce
```
delivery-partner-sales-forecast-dashboard/
├── .agent.md                 <- resumable state file, update after every step
├── README.md                 <- this file
├── prompts/                  <- this pack (00–24), read in order
├── data/                     <- created in Prompt 02
├── model/                    <- created in Prompts 03–07
├── dashboard/                <- Next.js app, created in Prompt 08+, deployed to Vercel
└── docs/                     <- memo, outreach tracker, progress report, checklist
```

## How to run this with Antigravity
1. Open Antigravity in an **empty root folder**, paste **Prompt 01** first (it creates
   the meaningful-named repo, git init, GitHub remote, and folder skeleton above).
2. Then feed prompts **02 → 24 in numeric order, one per turn**. Do not skip ahead.
3. After Antigravity finishes each prompt: it must (a) commit that step's files
   individually, (b) push to origin, (c) update `.agent.md`, before you send the next prompt.
4. If Antigravity or your session hits a limit mid-pack, open `.agent.md` — it tells
   you (or a fresh agent, or Claude Code) exactly where to resume.
5. `prompts/00-antigravity-global-rules.md` applies to **every** prompt below —
   paste it once at the start of the session (or keep it pinned/system-level if
   Antigravity supports persistent rules) so the agent doesn't drift on later steps.

## Sequence
| # | File | Produces |
|---|------|----------|
| 00 | antigravity-global-rules.md | Standing rules for the whole session |
| 01 | repo-setup-and-git-workflow.md | Root folder, git init, GitHub remote |
| 02 | dataset-simulation.md | 24 months synthetic order/revenue data |
| 03 | data-cleaning-eda.md | Cleaning + EDA notebook |
| 04 | forecasting-model-moving-average.md | Baseline model |
| 05 | forecasting-model-regression.md | Regression model |
| 06 | model-evaluation-selection.md | Model comparison + chosen model |
| 07 | export-forecast-data.md | JSON/CSV feed for the dashboard |
| 08 | dashboard-scaffold-nextjs.md | Next.js app scaffold, Vercel-ready |
| 09 | screen-overview-home.md | Home/KPI screen |
| 10 | screen-forecast-actual-vs-predicted.md | Forecast chart screen |
| 11 | screen-data-explorer.md | Raw/clean data table screen |
| 12 | screen-recommendations.md | Recommendations screen |
| 13 | screen-methodology-about.md | Methodology/disclaimer screen |
| 14 | screen-outreach-tracker.md | Internal outreach-log viewer (private route) |
| 15 | responsive-styling-pass.md | Design/responsive polish |
| 16 | business-recommendations-memo.md | Written memo (PDF) |
| 17 | outreach-target-organizations.md | 3 real target orgs, researched not invented |
| 18 | outreach-message-drafts.md | Draft outreach messages (human sends, not auto) |
| 19 | outreach-tracker-log-template.md | Tracker spreadsheet template |
| 20 | weekly-progress-report-template.md | Progress report template |
| 21 | github-commit-push-workflow.md | Final commit hygiene pass |
| 22 | vercel-deployment.md | Live Vercel link |
| 23 | portfolio-walkthrough-video.md | Video script + recording checklist |
| 24 | final-qa-submission-checklist.md | Pre-submission QA |

## Group 56 coordination
Before you paste Prompt 02, message Ahmed Mujtaba (Group Leader) with your exact
scope (restaurant order-volume forecasting) so it's logged against duplication by
teammates. Submit the anonymous Group Leader feedback form by Friday — that's on
you, no prompt automates it.
