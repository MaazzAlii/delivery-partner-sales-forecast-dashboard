# Prompt 12 — Screen: Recommendations

---

Read `.agent.md` first. Build the `/recommendations` screen:

- This screen renders the 3 business recommendations written in Prompt 16 (they
  will exist as a markdown or JSON source by then — if this prompt runs first,
  create `dashboard/content/recommendations.md` with clear placeholder structure
  for 3 recommendations, each with: title, one-paragraph rationale tied to a
  specific forecast number, and a concrete action for the restaurant owner. Prompt
  16 will fill in the real content — don't invent business advice here yourself.
- Render the markdown cleanly with headings per recommendation.

Commit as `feat(dashboard): build recommendations screen` and push.
Update `.agent.md`, set next prompt to `prompts/13-screen-methodology-about.md`, commit, push.
