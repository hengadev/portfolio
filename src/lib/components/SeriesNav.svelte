<script lang="ts">
    import { ArrowLeft, ArrowRight } from "lucide-svelte";
    import type { SeriesEntry } from "$lib/server/blog";

    let {
        series,
        currentSlug,
        entries,
    }: {
        series: string;
        currentSlug: string;
        entries: SeriesEntry[];
    } = $props();

    let currentIndex = $derived(entries.findIndex((e) => e.slug === currentSlug));
    let previous = $derived(currentIndex > 0 ? entries[currentIndex - 1] : null);
    let next = $derived(currentIndex < entries.length - 1 ? entries[currentIndex + 1] : null);
</script>

<nav class="series-nav" aria-label="Series navigation">
    <p class="series-nav__label">
        {series}
        <span class="series-nav__counter">
            Part {currentIndex + 1} of {entries.length}
        </span>
    </p>

    <div class="series-nav__links">
        {#if previous}
            <a href="/blog/{previous.slug}" class="series-nav__link series-nav__link--prev">
                <ArrowLeft size={14} />
                <div class="series-nav__link-text">
                    <span class="series-nav__link-direction">Previous</span>
                    <span class="series-nav__link-title">{previous.title}</span>
                </div>
            </a>
        {:else}
            <div></div>
        {/if}

        {#if next}
            <a href="/blog/{next.slug}" class="series-nav__link series-nav__link--next">
                <div class="series-nav__link-text">
                    <span class="series-nav__link-direction">Next</span>
                    <span class="series-nav__link-title">{next.title}</span>
                </div>
                <ArrowRight size={14} />
            </a>
        {:else}
            <div></div>
        {/if}
    </div>
</nav>

<style>
    .series-nav {
        display: grid;
        gap: 0.75rem;
        padding: 1.25rem;
        background-color: hsl(var(--clr-light-secondary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 0.5rem;
    }

    .series-nav__label {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: hsl(var(--clr-dark-ternary));
    }

    .series-nav__counter {
        font-weight: 400;
        color: hsl(var(--clr-dark-ternary));
        opacity: 0.7;
    }

    .series-nav__links {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
    }

    .series-nav__link {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        text-decoration: none;
        padding: 0.75rem;
        border-radius: 0.375rem;
        border: 1px solid hsl(var(--clr-light-fournary));
        transition: border-color 150ms ease, background-color 150ms ease;
    }

    .series-nav__link:hover {
        border-color: hsl(var(--clr-dark-ternary));
        background-color: hsl(var(--clr-light-ternary));
    }

    .series-nav__link--next {
        justify-content: flex-end;
        text-align: right;
    }

    .series-nav__link-text {
        display: grid;
        gap: 0.15rem;
    }

    .series-nav__link-direction {
        font-size: 0.7rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-ternary));
    }

    .series-nav__link-title {
        font-size: 0.85rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-primary));
        line-height: 1.3;
    }

    :global(.series-nav__link svg) {
        flex-shrink: 0;
        margin-top: 0.2rem;
        color: hsl(var(--clr-dark-ternary));
    }
</style>
