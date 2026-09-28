# Devpost Weekly

A responsive newsletter site, set up as a **Lovable-compatible** project:
Vite + React + TypeScript + Tailwind CSS + shadcn/ui conventions.

## Use it with Lovable

1. Push this repo to GitHub (it's already there).
2. In Lovable, create a project from / connect it to this GitHub repository.
   Lovable syncs both ways: edits in Lovable are committed here, and commits
   pushed here show up in Lovable.
3. Ask Lovable for changes in plain language, e.g. *"add a Sponsors section
   under Featured Hackathons"*.

## Run locally

```sh
npm install
npm run dev        # http://localhost:8080
npm run build      # production build to dist/
npm run lint
npm run typecheck
```

## Project layout

```
index.html                      Vite entry (theme applied before first paint)
src/
  data/issue.ts                 All issue content — edit this to publish a new issue
  pages/Index.tsx               The newsletter page
  components/newsletter/        Section, Card, Badge, CtaLink, Winner/Program/Hackathon cards
  components/ThemeToggle.tsx    Light/dark toggle (remembers choice, defaults to system)
  index.css                     Design tokens (HSL CSS variables, light + .dark)
  lib/utils.ts                  cn() helper used by shadcn/ui
tailwind.config.ts              Maps tokens to Tailwind colors (primary, gold, urgent, faint…)
components.json                 shadcn/ui config — `npx shadcn@latest add button` works
email/newsletter.html           Original single-file HTML version, for email sends
```

## Current issue

September 17, 2026 — winner spotlights (Project Blackbox, the 0.5B watch LLM),
the Nebius AI Builder Program, and five open hackathons.

## Before sending

Placeholder links are flagged `todo: true` in `src/data/issue.ts` (rendered with
`data-todo="link"`), and marked `data-todo="link"` in `email/newsletter.html`.
They currently point at generic Devpost pages. Find them with:

```sh
grep -n 'todo: true' src/data/issue.ts
grep -n 'data-todo="link"' email/newsletter.html
```

Replace each `href` with the real project or registration URL, then drop the flag.
