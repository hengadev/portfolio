<script lang="ts">
    import { ArrowUpRight } from "lucide-svelte";
    import ProjectDetail from "$lib/components/ProjectDetail.svelte";
    import ProjectBento from "$lib/components/ProjectBento.svelte";
</script>

<ProjectDetail
    title="Germinal"
    tagline="Event & talent management platform with bilingual support, media galleries, and automated workflows."
    year="2025"
    status="Active"
    role={["Full-Stack Developer", "System Designer", "DevOps Engineer"]}
    team={["Gary HENRY"]}
    stack={["SvelteKit 2.x", "Svelte 5 (Runes)", "PostgreSQL + Drizzle", "AWS S3 + SES", "Docker", "pg-boss", "Sentry"]}
    logo="/logos/germinal.png"
>
    <section class="story-section">
        <h2 class="section-title">Overview</h2>
        <p>
            A sophisticated event and talent management platform with bilingual support, media
            galleries, automated workflows, and production-ready infrastructure.
        </p>
        <p>
            Built from the ground up as a full-stack showcase demonstrating modern web development
            practices. The platform features a custom middleware system for cross-cutting concerns,
            an LRU caching layer with tag-based invalidation, and a PostgreSQL-backed job scheduler
            for asynchronous tasks.
        </p>
    </section>

    <ProjectBento gradient="linear-gradient(135deg, hsl(20 80% 40%), hsl(359 70% 50%))" />

    <section class="story-section">
        <h2 class="section-title">Technical highlights</h2>
        <ul class="highlight-list">
            <li>
                <strong>Middleware architecture:</strong> Decorator pattern for composable request
                handling — validation, auth, rate limiting, and CSRF in a single chain.
            </li>
            <li>
                <strong>Background jobs:</strong> pg-boss integration with cron-scheduled tasks for
                email queues, cleanup, and reminders.
            </li>
            <li>
                <strong>Caching strategy:</strong> LRU cache with TTL and tag-based invalidation
                for optimal performance.
            </li>
            <li>
                <strong>Type safety:</strong> End-to-end TypeScript with Zod schemas for runtime
                validation.
            </li>
            <li>
                <strong>Production deployment:</strong> Multi-stage Docker builds with security
                hardening (non-root user, Alpine base).
            </li>
            <li>
                <strong>Observability:</strong> Sentry integration for error tracking and
                performance monitoring.
            </li>
            <li>
                <strong>Testing:</strong> Vitest for unit tests and Playwright for E2E coverage.
            </li>
        </ul>
    </section>

    <section class="story-section">
        <h2 class="section-title">What I learned</h2>
        <p class="placeholder">
            <!-- Write about what building this taught you — architecture decisions, mistakes, surprises. -->
            This section is coming soon.
        </p>
    </section>

    <button class="cta" onclick={() => {}}>
        View repository <ArrowUpRight size={14} />
    </button>
</ProjectDetail>

<style>
    .story-section {
        display: grid;
        gap: 1rem;
    }

    .section-title {
        font-size: var(--h3);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    p {
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.75;
        font-size: 0.975rem;
    }

    .highlight-list {
        display: grid;
        gap: 0.75rem;
        padding-left: 1.25rem;
        list-style: disc;
    }

    .highlight-list li {
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.65;
        font-size: 0.975rem;
    }

    .placeholder {
        color: hsl(var(--clr-dark-ternary));
        font-style: italic;
    }

    .cta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-primary));
        padding: 0.5rem 1rem;
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 999px;
        width: fit-content;
        transition: border-color 120ms ease, background-color 120ms ease;
    }

    .cta:hover {
        border-color: hsl(var(--clr-dark-ternary));
        background-color: hsl(var(--clr-light-secondary));
    }
</style>
