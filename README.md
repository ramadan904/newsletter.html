# newsletter.html

Devpost Weekly — a standalone, responsive HTML newsletter.

- **`index.html`** — the full issue. Single file, no build step, no dependencies.
  Open it in a browser or serve the directory (`python3 -m http.server`).

## Current issue

September 17, 2026 — winner spotlights (Project Blackbox, the 0.5B watch LLM),
the Nebius AI Builder Program, and five open hackathons.

## Before sending

Every placeholder link is marked with `data-todo="link"` and currently points at a
generic Devpost page. Find them with:

```sh
grep -n 'data-todo="link"' index.html
```

Replace each `href` with the real project or registration URL, then drop the
`data-todo` attribute.

## Notes

- Light and dark themes both ship; dark follows `prefers-color-scheme` and can be
  forced with `<html data-theme="dark">`.
- Layout is fluid down to phone width. All colors are CSS custom properties on
  `:root`, so re-theming is a one-block edit.
