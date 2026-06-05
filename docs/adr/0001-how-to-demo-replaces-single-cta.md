# ADR-0001 — "How to Demo" section replaces the single Live Demo CTA

**Status:** Accepted

---

## Context

Some projects (Leviosa, Germinal) have multiple user roles with distinct experiences. The original `ProjectDetail` component had a single `demoUrl` prop that rendered a "Live demo" button in the sticky header, pointing to the public entry point of the app.

This was insufficient: it gave visitors no way to discover the admin or partner views without manually changing URLs or knowing credentials — both unreasonable expectations for a portfolio visitor.

## Decision

For projects with multiple Demo Roles:

1. The `demoUrl` button in the `ProjectDetail` header is replaced by a "How to demo" anchor link that scrolls to a dedicated section in the main content.
2. The "How to demo" section is owned by the Block component. It renders one card per Demo Role with the role label, a short description of what that perspective shows, the login URL, and credentials (email + password). Public roles (no login required) show a "No login required" label instead of credentials.
3. `ProjectDetail` gains a `demoAnchor` prop. When set, it renders the anchor link instead of the `demoUrl` button. When absent, the existing `demoUrl` button behavior is preserved.
4. Credential values are hardcoded in the Block component as static data (see CONTEXT.md — Credential ownership).

## Alternatives considered

- **In-app credential hints only** — Germinal already shows credentials on the login page in mock mode. Rejected as the primary path because the visitor has no way to discover the app entry points before navigating there.
- **Magic links per role** — Auto-login URLs that bypass the login page. Rejected: adds attack surface to the demo apps and is out of scope.
- **Portfolio env vars** — Inject credentials from homelab into the portfolio container. Rejected: over-engineering for public demo values that are already visible in `.env.example` files.

## Consequences

- `ProjectDetail` is backward-compatible: projects without roles (ENCX) keep the `demoUrl` button unchanged.
- If demo credentials change in the homelab `.env`, the corresponding Block component must be updated manually.
- The in-app credential hint on Germinal's login page is kept as a developer convenience (not removed).
