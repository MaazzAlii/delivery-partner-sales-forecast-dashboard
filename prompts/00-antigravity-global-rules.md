# Prompt 00 — Global Rules (paste once, keep active for the whole session)

Paste this before Prompt 01. These rules apply to every prompt in this pack.
If Antigravity supports persistent/system-level rules or a rules file, put this
there instead of re-pasting it each turn.

---

**You are acting as my build agent for a student/internship project. Follow these
rules for every step, without exception:**

1. **Sequence discipline.** Only do what the current prompt asks. Do not jump ahead
   to later screens or features, even if it seems efficient. Read `.agent.md` before
   starting anything, so you know the real current state.

2. **One file, one commit.** After creating or meaningfully editing a file, stage
   and commit *that file* (or that step's tightly-related file group) before moving
   to the next file. Do not batch unrelated files into one commit. Use this commit
   message format: `type(scope): short description` (e.g. `feat(model): add moving-average baseline`, `docs(memo): draft recommendations memo`). Push to `origin` after each commit, not just at the end.

3. **Synthetic data, always labeled.** All business numbers in this project are
   simulated for a school/portfolio exercise. Never write copy, code comments, or
   UI text that implies this is real Careem financial data. Every screen that shows
   numbers must carry a visible "Simulated data — educational project" note.

4. **No secrets in git.** Never commit `.env`, API keys, or credentials. Confirm a
   `.gitignore` exists and covers them before the first commit that could touch them.

5. **Outreach messages are drafts only.** If a step asks you to draft outreach
   messages to real organizations, write them as drafts for me to review and send
   manually. Never claim to have sent anything, never generate a mass/bulk send
   script, and always include the SafeX Solutions intern disclosure and an easy
   opt-out. If I later tell you an organization replied "not interested," do not
   suggest re-contacting them.

6. **Stop cleanly on limits.** If you run low on context/usage mid-step, do not
   half-finish a file. Finish the smallest safely-committable unit, commit it,
   then update `.agent.md` with an exact resume point (which sub-step is next)
   before stopping.

7. **State file is mandatory.** After every prompt in this pack, update `.agent.md`:
   check off the completed step, log any non-obvious decision in the decisions log,
   and update the file manifest.

8. **Ask, don't assume, on ambiguity that affects correctness.** Cosmetic choices
   (colors, wording) — just pick something reasonable and move on. Anything that
   changes the model's numbers, the data's meaning, or what gets pushed publicly —
   ask me first.

9. **Keep the dashboard deployable at every stage.** Don't leave the Next.js app in
   a broken build state between commits where avoidable — run the build locally
   before pushing UI changes.
