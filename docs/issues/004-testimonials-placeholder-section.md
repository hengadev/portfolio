# 004 — Testimonials placeholder section

**Type:** AFK
**Status:** done
**Blocked by:** None

## What to build

Add a new "Testimonials" section to the homepage, positioned between the projects section and the blog/CTA section. The section is built to accommodate 1–3 quote cards but ships empty — showing a tasteful placeholder state until real testimonials are added.

Adding a real testimonial later should be a one-line change in the component (appending to a hardcoded array). No CMS or backend needed.

The section needs EN and FR i18n keys under `home.testimonials`.

## Acceptance criteria

- [x] Testimonials section renders on the homepage in the correct position
- [x] Empty/placeholder state is visually clean — not a broken layout
- [x] Component structure accepts a hardcoded array of testimonial objects (author, quote, company/context)
- [x] EN and FR translations complete for section title and placeholder text
- [x] Adding a testimonial object to the array renders it correctly without any other changes
- [x] Responsive on mobile

## Parent

docs/prd/portfolio-dual-audience-positioning.md
