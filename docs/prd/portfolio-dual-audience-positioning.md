# Portfolio Dual-Audience Positioning

**Status:** Done
**Date:** 2026-06-10

## Problem Statement

The current portfolio (henga.dev) serves two distinct audiences — potential clients (solo founders, small operators) and recruiters — but the copy and structure are generic enough that neither group gets a clear signal. Clients don't see evidence that Gary can own a full project end-to-end. Recruiters see a backend-leaning profile without context on full-stack capability.

## Solution

One site, sharpened copy and structural additions. No separate routes per audience — the site is bilingual (EN/FR) and the same page serves both. The changes are:

1. Hero rewrite: direct ownership-first value proposition
2. Availability badge: persistent signal in the hero
3. bio3 rewrite: closing paragraph that speaks to clients
4. Process section: 4-step workflow + pricing model signal
5. Testimonials section: placeholder ready for real entries
6. CTA copy: aligned with new hero voice

## User Stories

1. As a solo founder, I want to immediately understand that Gary can own my full project, so that I don't have to worry about coordinating multiple contractors.
2. As a solo founder, I want to know Gary is available before I invest time reaching out, so that I don't waste effort on someone who is booked.
3. As a solo founder, I want to understand how an engagement would work step by step, so that I can evaluate the process fit before contacting.
4. As a solo founder, I want to know what kind of projects Gary takes on (scope, pricing model), so that I can self-qualify before reaching out.
5. As a recruiter, I want to read a clear, non-jargon description of Gary's capability, so that I can assess fit for a role quickly.
6. As a recruiter, I want to see that Gary has shipped real projects end-to-end, so that I can validate the profile.
7. As a visitor, I want to read the site in either English or French, so that I can engage in my preferred language.

## Implementation Decisions

- **Hero copy**: "I build the full thing." / "You bring the problem. I handle the rest — design, build, and ship." No backend-first label — clients don't understand it and in the AI era full-stack ownership is the right frame.
- **Availability badge**: Hardcoded green pill in the hero. No dynamic toggle — update manually when status changes.
- **bio3**: Speaks to solo founders directly. bio1 and bio2 unchanged.
- **Process section**: Positioned between about and projects. 4 steps with staggered reveal animations. Pricing signal: "fixed-scope / clear deliverable" — no numbers.
- **Testimonials section**: Ships empty with a dashed placeholder. Hardcoded array — appending one object renders a card without other changes.
- **CTA copy**: Mirrors hero voice. "Got a project?" / "Bring me your problem and I'll take it from spec to production."
- **No backend-first label**: Removed from hero, bio, footer tagline, meta description, og:description, and JSON-LD.
- **No separate routes**: One homepage serves both audiences.

## Testing Decisions

- Visual review in both light and dark mode
- Visual review at mobile breakpoint (≤600px)
- Both EN and FR locales verified for all new/changed keys
- Availability badge: verify green pill in light and dark
- Process section: verify step cards and pricing pill render correctly
- Testimonials placeholder: verify dashed box renders cleanly when array is empty

## Out of Scope

- Dynamic availability toggle (admin UI or CMS)
- Real testimonials (placeholders only at launch)
- Separate recruiter and client routes
- Pricing page or rate information
- About page rewrite (legacy page, no nav links pointing to it)

## Further Notes

- The "backend lean" is implicit through project content and blog — no need to state it in copy.
- Testimonials: Gary is on good terms with past clients and can gather quotes when ready. Adding one is a one-line array change in `src/lib/sections/Testimonials.svelte`.
- French is the primary language for French-speaking client outreach; EN is default for recruiters.
