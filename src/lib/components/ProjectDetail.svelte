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
</script>

<div class="project-detail">
    <!-- Header row -->
    <div class="project-header container__small">
        <button class="back-btn" onclick={() => goto(backHref)}>
            <ArrowLeft size={14} />
            <span>{resolvedBackLabel}</span>
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
            {#if demoUrl || githubUrl}
            <div class="sidebar__section">
                <p class="sidebar__label">{$_('detail.links')}</p>
                <ul class="links-list">
                    {#if demoUrl}
                    <li>
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer" class="sidebar-link">
                            {$_('detail.live_demo')} <ArrowUpRight size={12} />
                        </a>
                        <span class="demo-note">{$_('detail.demo_note')}</span>
                    </li>
                    {/if}
                    {#if githubUrl}
                    <li>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" class="sidebar-link">
                            GitHub <ArrowUpRight size={12} />
                        </a>
                    </li>
                    {/if}
                </ul>
            </div>
            {/if}
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
        padding-top: 3rem;
        padding-bottom: 6rem;
    }

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

    .separator {
        margin-inline: auto;
        height: 1px;
        background-color: hsl(var(--clr-light-fournary));
    }

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
        top: 3rem;
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

    .links-list {
        display: grid;
        gap: 0.5rem;
        list-style: none;
        padding: 0;
    }

    .links-list li {
        display: grid;
        gap: 0.15rem;
    }

    .sidebar-link {
        display: inline-flex;
        align-items: center;
        gap: 0.2rem;
        font-size: 0.9rem;
        color: hsl(var(--clr-dark-secondary));
        text-decoration: underline;
        text-decoration-color: hsl(var(--clr-light-fournary));
        text-underline-offset: 3px;
        transition: color 120ms ease;
        width: fit-content;
    }

    .sidebar-link:hover {
        color: hsl(var(--clr-dark-primary));
    }

    .demo-note {
        font-size: 0.75rem;
        color: hsl(var(--clr-dark-ternary));
        font-style: italic;
    }

    .main-content {
        display: grid;
        gap: 3rem;
    }

    @media (max-width: 768px) {
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
