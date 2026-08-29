# Prompt 08 — Scaffold the Next.js Dashboard (Vercel-ready)

---

Read `.agent.md` first. In `dashboard/`, scaffold a Next.js (App Router) + TypeScript
project ready to deploy on Vercel with zero extra config:

1. `npx create-next-app@latest` inside `dashboard/` with TypeScript, Tailwind, App
   Router, no `src/` directory changes beyond default — keep it standard so Vercel's
   auto-detection works with no custom `vercel.json`.
2. Install a lightweight charting library (`recharts` is fine) for the forecast chart.
3. Set up a simple top nav with routes for: Overview (`/`), Forecast (`/forecast`),
   Data Explorer (`/data`), Recommendations (`/recommendations`), Methodology (`/about`).
   Leave each page as a stub with a heading for now — content comes in Prompts 9–14.
4. Confirm `dashboard/public/data/forecast.json` and `kpis.json` from Prompt 07 are
   present and fetchable by the app (relative path, no server needed).
5. Run `npm run build` locally to confirm it builds clean before committing.
6. Add a root-level `dashboard/README.md`: how to run it locally (`npm install && npm run dev`).

Commit as `feat(dashboard): scaffold Next.js app with routes and charting lib`
and push.

Update `.agent.md` (check off step 08, set next prompt to
`prompts/09-screen-overview-home.md`), commit `docs(agent): update state after dashboard scaffold`, push.
