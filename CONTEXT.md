# Portfolio — Domain Context

This is a personal portfolio site for Gary Henry. It showcases freelance projects, experiments, and writing.

---

## Glossary

### Projects & Demos

**Project**
A piece of client or personal work displayed on the portfolio. Has a title, tagline, year, status, role(s), team, and stack.

**Demo**
A publicly accessible deployment of a project, running in mock mode with seeded data. Intended for portfolio visitors to explore the app without a real account.
_Avoid_: Live app, production preview.

**Demo Role**
A named access level within a demo deployment, identified by a role label, login URL, email, and password. Each Demo Role gives the visitor a distinct perspective on the app (e.g., Admin sees the back-office; Client sees the booking flow).
_Avoid_: User type, account type.

**How to Demo section**
The section on a project detail page that lists each Demo Role with its credentials and a direct link to the login page. Replaces the single "Live demo" CTA for projects with multiple roles.
_Avoid_: Demo guide, credentials section.

**Mock mode**
The deployment configuration where `USE_MOCK_DATA=true`. The app skips the real backend and uses seeded data. Authentication still requires credentials, which are defined in the homelab `.env` and hardcoded in the portfolio Block components.

### Page Structure

**Block component**
The project-specific Svelte component (e.g., `LeviosaBlock.svelte`) that owns all content for a project detail page — sections, role data, credentials. Rendered as children of `ProjectDetail`.

**ProjectDetail**
The shared layout component that renders the sticky header, sidebar, and two-column body. It is project-agnostic — it receives content via a slot and routing props via typed props.

---

## Credential ownership

Demo credential values are hardcoded in each Block component. They originate from the homelab `.env` (single source of truth at deploy time) but are duplicated into the portfolio as static data because they are intentionally public — they appear on the login page in mock mode.

If credentials change in the homelab `.env`, the corresponding Block component must be updated manually.

---

## Relationships

- A **Project** may have zero or more **Demo Roles**
- A **Block component** owns the **Demo Roles** for its project
- **ProjectDetail** is unaware of **Demo Roles** — it only receives a scroll anchor ID
- **Mock mode** is the runtime condition under which **Demo Roles** are valid credentials
