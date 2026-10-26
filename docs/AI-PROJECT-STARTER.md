# AI / Agent Project Starter

Use this document when an AI assistant or coding agent must create a new project from this template.

## Start command for an agent

Give the agent this instruction:

> Read `docs/AI-PROJECT-STARTER.md`, `PROJECT-BRIEF.md`, `README.md`, and `docs/PROJECT-STARTER-SUMMARY.md`. Create the project described in the brief from this template, preserve security and licensing requirements, verify the result, and do not push or deploy unless explicitly requested.

Before starting, copy `PROJECT-BRIEF.template.md` to `PROJECT-BRIEF.md` and fill in the project-specific requirements. Never put passwords, tokens, cookies, private keys, connection strings, or personal data in the brief.

## Source-of-truth files

Read these before editing:

- `PROJECT-BRIEF.md` — project-specific requirements.
- `README.md` — page inventory, dependency versions, and known limitations.
- `docs/PROJECT-STARTER-SUMMARY.md` — adaptation workflow and reusable project-summary format.
- `assets/vendor/THIRD-PARTY-NOTICES.md` — bundled dependency notices and license paths.

If these documents conflict, the project brief controls project behavior, but it cannot waive security, licensing, or explicit user instructions.

## Default implementation approach

- Keep the project lightweight: HTML, CSS, Bootstrap 5, and native JavaScript unless the brief requires a backend or another stack.
- Keep browser JavaScript in external `.js` files. Do not add inline event handlers or executable inline scripts.
- Keep dependencies local under `assets/vendor/`; do not replace them with public CDNs without explicit approval.
- Preserve direct page-file URLs unless the brief explicitly introduces routing.
- Preserve responsive behavior, keyboard focus visibility, semantic labels, and native form validation.
- Reuse the existing theme and components before introducing another framework or abstraction.
- Do not treat demo authentication, charts, calendar events, tables, or text as production behavior or data.

## Project creation workflow

1. **Confirm the target.** Resolve the exact destination directory and Git root. Do not build inside this reusable template unless the user explicitly wants to customize the template itself.
2. **Inventory requested pages.** Map each requested screen to an existing page or mark it as new. Keep `priceing.html` only when compatibility with its existing URL is required.
3. **Copy the starter safely.** Copy the selected HTML files and required `assets/` paths. Exclude `.git/`, temporary captures, caches, logs, credentials, and unrelated project briefs.
4. **Apply project identity.** Update page titles, brand text, navigation, footer, theme tokens, and sample links consistently across every retained page.
5. **Replace demo content.** Replace sample numbers, rows, charts, calendar events, forms, and external links with project-specific placeholders or real integrations defined by the brief.
6. **Implement the real boundary.** If the project needs a backend, authentication, authorization, database, or API, design and implement those separately from the static demo UI. Enforce validation, authorization, CSRF protection, and safe session handling server-side.
7. **Remove unused pages carefully.** Search HTML, CSS, JavaScript, documentation, and dynamically constructed paths before deleting a page, asset, or vendor dependency.
8. **Document the result.** Create or update `PROJECT-SUMMARY.md` using the reusable format in `docs/PROJECT-STARTER-SUMMARY.md`. Record confirmed facts separately from assumptions.
9. **Verify before completion.** Run the smallest relevant checks, inspect the complete diff, and open every retained page at desktop and narrow widths. Exercise navigation, dropdowns, tabs, dialogs, forms, charts, and calendars without sending real or production data.

## Minimum verification checklist

- Run `python tools/check-html-structure.py`; all retained HTML pages must pass.
- Every retained local `href`, `src`, CSS `url()`, and font path resolves.
- Changed JavaScript parses as a browser script and produces no relevant console errors.
- Navigation and dropdowns remain inside their layout bounds at desktop and narrow widths.
- Forms do not submit credentials or personal data to an external/demo host.
- Demo password values and credential-like literals are absent.
- No required vendor asset was deleted while still referenced.
- Third-party notices and license files remain with bundled dependencies.
- The final Git diff contains only the intended project scope.

## Git and release safety

- Do not commit, create branches, rewrite history, push, publish, or deploy unless the user explicitly requests that action.
- When a commit is requested, inspect all tracked changes, deletions, and untracked files; scan the exact staged scope for credentials before committing.
- A request to commit does not authorize push or deployment.
- Never modify the upstream `source` branch as part of generating a new project.

## Completion report

Report:

- project location and entry point;
- retained, added, and removed pages;
- important implementation choices;
- checks actually run and their results;
- assumptions and unverified areas;
- Git branch/commit state;
- confirmation that no push or deployment occurred unless separately requested.
