<script lang="ts">
    import type { Snippet } from "svelte";
    import { ArrowLeft, ArrowUpRight } from "lucide-svelte";
    import { goto } from "$app/navigation";
    import { _ } from "svelte-i18n";

    type Props = {
        title: string;
        tagline: string;
        year: string;
        status: string;
        role: string[];
        team: string[];
        stack: string[];
        logo?: string;
        backHref?: string;
        backLabel?: string | undefined;
        demoUrl?: string;
        githubUrl?: string;
        children: Snippet;
    };

    let { title, tagline, year, status, role, team, stack, logo, backHref = "/projects", backLabel = undefined, demoUrl, githubUrl, children }: Props = $props();

    const resolvedBackLabel = $derived(backLabel ?? $_('detail.back_projects'));

    // Measure the sticky header so the sidebar can stack cleanly below it.
    const NAV_PX = 64; // fixed nav ~4rem
    let headerEl: HTMLElement | null = $state(null);
    let sidebarTopPx = $state(NAV_PX);

    $effect(() => {
        if (!headerEl) return;
        const update = () => { sidebarTopPx = NAV_PX + headerEl!.offsetHeight + 16; };
        const ro = new ResizeObserver(update);
        ro.observe(headerEl);
        update();
        return () => ro.disconnect();
    });
</script>

<div class="project-detail">
    <!-- Full-width sticky header -->
    <div class="project-header container__small" bind:this={headerEl}>
        <button class="back-btn" onclick={() => goto(backHref)}>
            <ArrowLeft size={14} />
            <span>{resolvedBackLabel}</span>
        </button>

        <div class="title-area">
            <div class="title-left">
                <div class="name-row">
                    {#if logo}
                        <img src={logo} alt="{title} logo" class="inline-logo" />
                    {/if}
                    <h1 class="project-name">{title}</h1>
                </div>
                <p class="project-tagline">{tagline}</p>
            </div>
            <div class="title-right">
                <div class="badges">
                    <span class="badge">{year}</span>
                    <span class="badge badge--status">{status}</span>
                </div>
                {#if demoUrl || githubUrl}
                <div class="project-links">
                    <div class="links-row">
                        {#if demoUrl}
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer" class="link-btn link-btn--primary">
                            {$_('detail.live_demo')} <ArrowUpRight size={13} />
                        </a>
                        {/if}
                        {#if githubUrl}
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" class="link-btn">
                            GitHub <ArrowUpRight size={13} />
                        </a>
                        {/if}
                    </div>
                    {#if demoUrl}
                    <span class="demo-note">{$_('detail.demo_note')}</span>
                    {/if}
                </div>
                {/if}
            </div>
        </div>
    </div>

    <div class="divider container__small"></div>

    <!-- Two-column body -->
    <div class="project-body container__small">
        <aside class="sidebar" style="top: {sidebarTopPx}px">
            <div class="sidebar__section">
                <p class="sidebar__label">{$_('detail.role')}</p>
                <ul>
                    {#each role as r}
                        <li>{r}</li>
                    {/each}
                </ul>
            </div>
            <div class="sidebar__section">
                <p class="sidebar__label">{$_('detail.team')}</p>
                <ul>
                    {#each team as t}
                        <li>{t}</li>
                    {/each}
                </ul>
            </div>
            <div class="sidebar__section">
                <p class="sidebar__label">{$_('detail.stack')}</p>
                <ul>
                    {#each stack as s}
                        <li>{s}</li>
                    {/each}
                </ul>
            </div>
            <div class="sidebar__section">
                <p class="sidebar__label">{$_('detail.timeline')}</p>
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
        gap: 2rem;
        padding-bottom: 6rem;
    }

    /* ── Sticky header ── */

    .project-header {
        position: sticky;
        top: 4rem;
        z-index: 10;
        margin-inline: auto;
        display: grid;
        gap: 1.5rem;
        padding-block: 1.25rem;
        background-color: hsl(var(--bg-body) / 0.92);
        backdrop-filter: blur(10px);
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

    .title-area {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 2rem;
    }

    .title-left {
        display: grid;
        gap: 0.75rem;
        flex: 1;
        min-width: 0;
    }

    .title-right {
        display: grid;
        gap: 1rem;
        justify-items: end;
        flex-shrink: 0;
    }

    .name-row {
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

    .badges {
        display: flex;
        align-items: center;
        gap: 0.5rem;
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

    /* ── Link buttons ── */

    .project-links {
        display: grid;
        gap: 0.4rem;
    }

    .links-row {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .link-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        font-size: 0.875rem;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        border: 1px solid hsl(var(--clr-light-fournary));
        background-color: hsl(var(--clr-light-primary));
        color: hsl(var(--clr-dark-secondary));
        text-decoration: none;
        transition: border-color 120ms ease, color 120ms ease, background-color 120ms ease;
        width: fit-content;
    }

    .link-btn:hover {
        border-color: hsl(var(--clr-dark-ternary));
        color: hsl(var(--clr-dark-primary));
        background-color: hsl(var(--clr-light-secondary));
    }

    .link-btn--primary {
        background-color: hsl(var(--clr-dark-primary));
        color: hsl(var(--clr-light-primary));
        border-color: hsl(var(--clr-dark-primary));
    }

    .link-btn--primary:hover {
        background-color: hsl(var(--clr-dark-secondary));
        border-color: hsl(var(--clr-dark-secondary));
        color: hsl(var(--clr-light-primary));
    }

    .demo-note {
        font-size: 0.75rem;
        color: hsl(var(--clr-dark-ternary));
        font-style: italic;
    }

    /* ── Divider ── */

    .divider {
        margin-inline: auto;
        height: 1px;
        background-color: hsl(var(--clr-light-fournary));
    }

    /* ── Two-column body ── */

    .project-body {
        margin-inline: auto;
        display: grid;
        grid-template-columns: 14rem 1fr;
        gap: 4rem;
        align-items: start;
    }

    .sidebar {
        display: grid;
        gap: 2rem;
        position: sticky;
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

    .main-content {
        display: grid;
        gap: 3rem;
    }

    @media (max-width: 768px) {
        .project-header {
            position: static;
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
