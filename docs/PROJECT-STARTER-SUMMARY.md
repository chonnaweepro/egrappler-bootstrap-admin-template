# Project Starter Summary

This file has two purposes:

1. Summarize this eGrappler-based admin UI starter so a new contributor can orient quickly.
2. Provide a reusable project-summary template to copy into another project and fill in.

## This starter at a glance

- **Purpose:** a static UI starting point for an internal admin panel or back-office dashboard.
- **Implementation:** HTML, CSS, and native JavaScript with locally bundled vendor assets.
- **Pages:** dashboard, reports, charts, app tour, UI shortcodes, icon gallery, FAQ, pricing, login, signup, and 404 example. `priceing.html` keeps the existing filename/URL.
- **Not included:** backend, database, real authentication, registration, or production data. Charts and page content are demos; login/signup forms are visual examples.
- **Primary theme:** the existing blue navigation (`#428bca`), warm off-white page background, compact admin navigation, and Bootstrap 5 component styling.
- **Fonts:** local Open Sans v44 supplies Latin/math glyphs at weights 300–800 in normal/italic; Noto Sans Thai UI v42 remains the Thai fallback. Their SIL Open Font License notices are in `assets/vendor/fonts/OFL-Open-Sans.txt` and `assets/vendor/fonts/OFL-Noto-Sans-Thai-UI.txt`.
- **Third-party notices:** bundled library versions, applicable licenses, and local license texts are indexed in `assets/vendor/THIRD-PARTY-NOTICES.md`. These notices cover dependencies only; the upstream/template license remains separate and is not included.
- **Dependencies:** see the versioned inventory in the repository `README.md`. Keep the vendor directory intact unless its references have been checked.
- **Source licensing:** the repository does not include an overall project license. Check the upstream/template terms before redistributing. Each font's OFL applies to that font, not the whole template.

## Repository map

- `*.html` — direct page entry points; there is no front controller or build pipeline.
- `assets/css/style.css` — shared layout, theme, and compatibility styling.
- `assets/css/*-init.css` / page CSS — page-specific styles.
- `assets/js/` — shared and page-specific native JavaScript.
- `assets/vendor/` — locally served third-party libraries, icons, and fonts.
- `assets/img/` — template imagery.

For exact library versions and page descriptions, use `README.md` as the source of truth rather than duplicating the inventory here.

## Adapting this starter to another project

1. **Make a copy and preserve relative paths.** Keep each HTML entry point beside `assets/` unless you also update every relative URL in HTML, CSS, and JavaScript.
2. **Replace the brand.** Update the title/brand text, logo if added, navigation labels, footer links, and theme colors in the shared stylesheet. Search every page for the old brand before considering the rename complete.
3. **Keep only the pages the product needs.** Remove demo pages only after checking inbound links, menu items, forms, scripts, CSS, and server routes. Do not repoint a missing page link to an unrelated page.
4. **Replace sample data at its source.** Update the page initializer or connect it to the real API. Do not treat the visual sample charts, calendar events, or table rows as business data.
5. **Implement real authentication and forms separately.** The included login/signup pages are presentation examples only. Add server-side authentication, authorization, CSRF protection, validation, and safe session handling before using them for accounts.
6. **Check licenses before publishing.** Retain third-party license/notice files with their assets. A bundled font license does not grant rights to the rest of the template.
7. **Audit before deleting assets.** Search HTML attributes, CSS `url()`/`@import`, JavaScript string-built paths, manifests, and documentation. Inspect dynamic icon classes and font references. Delete a candidate only after every consumer is updated and the remaining references are rechecked.
8. **Verify the result.** Check local links and asset paths, parse changed JavaScript, inspect the Git diff, and open each retained page at desktop and narrow viewports. Exercise navigation, tabs, dialogs, forms, and other interactive controls without sending real data.

## Reusable project summary template

Copy the section below into the target project's `PROJECT-SUMMARY.md` (or an equivalent onboarding document), replace every bracketed placeholder, and remove sections that genuinely do not apply. Keep confirmed facts separate from assumptions; never put passwords, tokens, private keys, or personal data in the summary.

---

# [Project Name] — Project Summary

**Last reviewed:** [YYYY-MM-DD]
**Status:** [active / maintenance / paused]
**Repository:** [local path or repository name; do not include credentials]

## Purpose and users

- **What it does:** [one or two sentences]
- **Primary users:** [roles or audience]
- **Success looks like:** [observable outcome]
- **Out of scope:** [important non-goals]

## Stack and constraints

- **Languages/frameworks:** [versions where relevant]
- **Runtime/platform:** [OS, server, PHP/Node/etc. version, SAPI if relevant]
- **Data stores/integrations:** [systems and purpose; no secrets]
- **Constraints:** [compatibility, security, performance, licensing, or operational limits]

## Entry points and repository map

- **Main entry points/routes:** [paths and what they serve]
- **Important directories/files:** [path → responsibility]
- **Configuration:** [safe config paths; identify secret storage by location only]
- **Build/package/deploy artifacts:** [what is generated and what must ship]

## System behavior and data flow

- **Main user flow:** [step-by-step, concise]
- **Data flow:** [source → processing → persistence/output]
- **Authorization boundaries:** [who may read/change what]
- **External dependencies:** [APIs/services and failure behavior]

## Development and verification

- **Prerequisites:** [tools/services required]
- **Local start command:** [verified command; say “not verified” if unknown]
- **Focused checks:** [commands and what they prove]
- **Browser/manual checks:** [routes, interactions, viewports]
- **Known verification limits:** [what has not been tested and why]

## Current state

- **Confirmed working:** [evidence-backed items]
- **Known issues:** [symptom, location, severity]
- **Open decisions:** [only decisions that block work]
- **Recent changes:** [brief summary or commit IDs]

## Next steps

1. [highest-priority action, owner if known]
2. [next action]
3. [next action]

## Operational safety and rollback

- **High-impact operations:** [migration, deployment, external writes, etc.]
- **Backup/rollback:** [verified recovery path]
- **Deployment target:** [environment and release path; distinguish test from production]

## References

- [design/spec/runbook/API docs]
- [relevant dashboards or issue links]

---

## Updating this summary

Update the summary when entry points, runtime constraints, authorization, data flow, deployment, or verification commands change. Mark assumptions explicitly, record exact versions/paths only after checking them, and keep temporary task progress in the issue or session rather than turning this document into a changelog.