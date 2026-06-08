<script lang="ts">
    import { ArrowLeft } from "lucide-svelte";
    import { _, locale } from "svelte-i18n";
    import type { PageData } from "./$types";
    import SeriesNav from "$lib/components/SeriesNav.svelte";

    let { data }: { data: PageData } = $props();

    let PostContent = $derived(data.component);

    function formatDate(dateStr: string): string {
        return new Date(dateStr).toLocaleDateString($locale === 'fr' ? 'fr-FR' : 'en-US', {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    }
</script>

<div class="page container__small">
    <a href="/blog" class="back-link flex" style="--gap: 0.375rem; align-items: center;">
        <ArrowLeft size={16} /> {$_('blog.back')}
    </a>

    <article>
        <header class="post__header">
            <time class="post__date" datetime={data.metadata.date}>
                {formatDate(data.metadata.date)}
            </time>
            <h1 class="post__title">{data.metadata.title}</h1>
            <p class="post__description">{data.metadata.description}</p>
            <div class="post__tags">
                {#each data.metadata.tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            </div>
        </header>

        {#if data.seriesEntries && data.metadata.series}
            <SeriesNav
                series={data.metadata.series}
                currentSlug={data.metadata.slug}
                entries={data.seriesEntries}
            />
        {/if}

        <div class="prose">
            <PostContent />
        </div>

        {#if data.seriesEntries && data.metadata.series}
            <SeriesNav
                series={data.metadata.series}
                currentSlug={data.metadata.slug}
                entries={data.seriesEntries}
            />
        {/if}
    </article>
</div>

<style>
    .page {
        margin-inline: auto;
        display: grid;
        gap: 3rem;
        padding-bottom: 6rem;
    }

    .back-link {
        font-size: 0.9rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-ternary));
        text-decoration: none;
        width: fit-content;
        transition: color 150ms ease, gap 150ms ease;
    }

    .back-link:hover {
        color: hsl(var(--clr-dark-primary));
        gap: 0.5rem;
    }

    .post__header {
        display: grid;
        gap: 0.75rem;
        padding-bottom: 2.5rem;
        border-bottom: 1px solid hsl(var(--clr-light-fournary));
    }

    .post__date {
        font-size: 0.85rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-ternary));
    }

    .post__title {
        font-size: var(--h1);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        line-height: 1.2;
    }

    .post__description {
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.7;
        max-width: 65ch;
    }

    .post__tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.375rem;
    }

    .tag {
        font-size: 0.7rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-secondary));
        background-color: hsl(var(--clr-light-secondary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 999px;
        padding: 0.15rem 0.55rem;
    }

    /* Prose styles for rendered markdown */
    .prose {
        display: grid;
        gap: 1.5rem;
        max-width: 70ch;
    }

    .prose :global(h2) {
        font-size: var(--h2);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        margin-top: 1rem;
    }

    .prose :global(h3) {
        font-size: var(--h3);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        margin-top: 0.5rem;
    }

    .prose :global(p) {
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.8;
    }

    .prose :global(a) {
        color: hsl(var(--clr-dark-primary));
        text-underline-offset: 3px;
    }

    .prose :global(code) {
        font-family: "Courier New", Courier, monospace;
        font-size: 0.875em;
        background-color: hsl(var(--clr-light-secondary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 0.25rem;
        padding: 0.1em 0.35em;
    }

    .prose :global(pre) {
        background-color: hsl(var(--clr-light-secondary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 0.5rem;
        padding: 1.25rem;
        overflow-x: auto;
    }

    .prose :global(pre code) {
        background: none;
        border: none;
        padding: 0;
        font-size: 0.9rem;
        line-height: 1.7;
    }

    .prose :global(ul),
    .prose :global(ol) {
        padding-left: 1.5rem;
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.8;
    }

    .prose :global(ul) {
        list-style-type: disc;
    }

    .prose :global(ol) {
        list-style-type: decimal;
    }

    .prose :global(blockquote) {
        border-left: 3px solid hsl(var(--clr-light-fournary));
        padding-left: 1rem;
        color: hsl(var(--clr-dark-ternary));
        font-style: italic;
    }

    .prose :global(hr) {
        border: none;
        border-top: 1px solid hsl(var(--clr-light-fournary));
    }
</style>
