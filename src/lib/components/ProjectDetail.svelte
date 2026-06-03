<script lang="ts">
    import type { Snippet } from "svelte";
    import { ArrowLeft } from "lucide-svelte";
    import { goto } from "$app/navigation";

    type Props = {
        title: string;
        tagline: string;
        year: string;
        status: string;
        role: string[];
        team: string[];
        stack: string[];
        image?: string;
        gradient: string;
        logo?: string;
        children: Snippet;
    };

    let { title, tagline, year, status, role, team, stack, image, gradient, logo, children }: Props = $props();
</script>

<div class="project-detail">
    <!-- Hero -->
    <div
        class="hero"
        style={`background: ${gradient};` + (image ? ` background-image: url(${image}); background-size: cover; background-position: center top;` : "")}
        role="img"
        aria-label="{title} project preview"
    >
        {#if !image && logo}
            <img src={logo} alt="" aria-hidden="true" class="hero__logo" />
        {/if}
    </div>

    <!-- Header row -->
    <div class="project-header container__small">
        <button class="back-btn" onclick={() => goto("/projects")}>
            <ArrowLeft size={14} />
            <span>All projects</span>
        </button>

        <div class="title-row">
            <div class="title-row__left">
                {#if logo}
                    <img src={logo} alt="{title} logo" class="inline-logo" />
                {/if}
                <h1 class="project-name">{title}</h1>
            </div>
            <div class="title-row__meta">
                <span class="badge">{year}</span>
                <span class="badge badge--status">{status}</span>
            </div>
        </div>

        <p class="project-tagline">{tagline}</p>
    </div>

    <div class="separator container__small"></div>

    <!-- Two-column layout -->
    <div class="project-body container__small">
        <aside class="sidebar">
            <div class="sidebar__section">
                <p class="sidebar__label">Role</p>
                <ul>
                    {#each role as r}
                        <li>{r}</li>
                    {/each}
                </ul>
            </div>
            <div class="sidebar__section">
                <p class="sidebar__label">Team</p>
                <ul>
                    {#each team as t}
                        <li>{t}</li>
                    {/each}
                </ul>
            </div>
            <div class="sidebar__section">
                <p class="sidebar__label">Stack</p>
                <ul>
                    {#each stack as s}
                        <li>{s}</li>
                    {/each}
                </ul>
            </div>
            <div class="sidebar__section">
                <p class="sidebar__label">Timeline</p>
                <p>{year} — {status}</p>
            </div>
        </aside>

        <main class="main-content">
            {@render children()}
        </main>
    </div>
</div>

<style>
    .project-detail {
        display: grid;
        gap: 2.5rem;
        padding-bottom: 6rem;
    }

    /* Hero */
    .hero {
        width: 100%;
        height: 420px;
        display: grid;
        place-content: center;
        position: relative;
    }

    .hero__logo {
        width: 5rem;
        height: 5rem;
        object-fit: contain;
        opacity: 0.6;
        filter: brightness(0) invert(1);
    }

    /* Header */
    .project-header {
        margin-inline: auto;
        display: grid;
        gap: 1rem;
    }

    .back-btn {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-ternary));
        width: fit-content;
        transition: color 120ms ease;
    }

    .back-btn:hover {
        color: hsl(var(--clr-dark-primary));
    }

    .title-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .title-row__left {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .inline-logo {
        width: 2rem;
        height: 2rem;
        object-fit: contain;
        border-radius: 0.375rem;
        border: 1px solid hsl(var(--clr-light-fournary));
        flex-shrink: 0;
    }

    .project-name {
        font-size: var(--h1);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        line-height: 1.1;
    }

    .title-row__meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-shrink: 0;
    }

    .badge {
        font-size: 0.75rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-ternary));
        background-color: hsl(var(--clr-light-secondary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 999px;
        padding: 0.2rem 0.65rem;
    }

    .badge--status {
        color: hsl(115 50% 38%);
        background-color: hsl(115 50% 95%);
        border-color: hsl(115 50% 80%);
    }

    .project-tagline {
        font-size: 1.1rem;
        color: hsl(var(--clr-dark-ternary));
        line-height: 1.6;
        max-width: 60ch;
    }

    /* Separator */
    .separator {
        margin-inline: auto;
        height: 1px;
        background-color: hsl(var(--clr-light-fournary));
    }

    /* Body */
    .project-body {
        margin-inline: auto;
        display: grid;
        grid-template-columns: 14rem 1fr;
        gap: 4rem;
        align-items: start;
    }

    /* Sidebar */
    .sidebar {
        display: grid;
        gap: 2rem;
        position: sticky;
        top: 8rem;
    }

    .sidebar__section {
        display: grid;
        gap: 0.5rem;
    }

    .sidebar__label {
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: hsl(var(--clr-dark-ternary));
    }

    .sidebar__section ul {
        display: grid;
        gap: 0.25rem;
    }

    .sidebar__section li,
    .sidebar__section p {
        font-size: 0.9rem;
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.5;
    }

    /* Main content */
    .main-content {
        display: grid;
        gap: 3rem;
    }

    @media (max-width: 768px) {
        .hero {
            height: 260px;
        }

        .project-body {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .sidebar {
            position: static;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }
    }
</style>
