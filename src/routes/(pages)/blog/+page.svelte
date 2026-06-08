<script lang="ts">
    import { _, locale } from "svelte-i18n";
    import { ArrowRight } from "lucide-svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    function formatDate(dateStr: string): string {
        return new Date(dateStr).toLocaleDateString($locale === 'fr' ? 'fr-FR' : 'en-US', {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    }
</script>

<div class="page container__small">
    <header class="page__header">
        <h1 class="page__title">{$_('blog.title')}</h1>
        <p class="page__subtitle">{$_('blog.subtitle')}</p>
    </header>

    {#if data.posts.length === 0}
        <p class="empty">{$_('blog.empty')}</p>
    {:else}
        <ul class="post-list">
            {#each data.posts as post}
                <li class="post-item">
                    <a href="/blog/{post.slug}" class="post-link">
                        <time class="post__date" datetime={post.date}>{formatDate(post.date)}</time>
                        <h2 class="post__title">
                            {post.title}
                            <ArrowRight size={18} class="post__arrow" />
                        </h2>
                        <p class="post__description">{post.description}</p>
                        <div class="post__tags">
                            {#each post.tags as tag}
                                <span class="tag">{tag}</span>
                            {/each}
                            {#if post.series}
                                <span class="tag tag--series">{post.series} · Part {post.seriesOrder}</span>
                            {/if}
                        </div>
                    </a>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .page {
        margin-inline: auto;
        display: grid;
        gap: 3rem;
        padding-bottom: 6rem;
    }

    .page__header {
        display: grid;
        gap: 0.5rem;
    }

    .page__title {
        font-size: var(--h1);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    .page__subtitle {
        color: hsl(var(--clr-dark-ternary));
    }

    .empty {
        color: hsl(var(--clr-dark-ternary));
    }

    .post-list {
        display: grid;
        gap: 0;
    }

    .post-item {
        border-top: 1px solid hsl(var(--clr-light-fournary));
    }

    .post-item:last-child {
        border-bottom: 1px solid hsl(var(--clr-light-fournary));
    }

    .post-link {
        display: grid;
        gap: 0.5rem;
        padding-block: 1.75rem;
        text-decoration: none;
        transition: padding-left 150ms ease;
    }

    .post-link:hover {
        padding-left: 0.5rem;
    }

    .post__date {
        font-size: 0.8rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-ternary));
    }

    .post__title {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-size: var(--h3);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        line-height: 1.3;
    }

    :global(.post__arrow) {
        flex-shrink: 0;
        opacity: 0;
        transform: translateX(-4px);
        transition: opacity 150ms ease, transform 150ms ease;
        color: hsl(var(--clr-dark-primary));
    }

    .post-link:hover :global(.post__arrow) {
        opacity: 1;
        transform: translateX(0);
    }

    .post__description {
        color: hsl(var(--clr-dark-ternary));
        line-height: 1.6;
        max-width: 70ch;
    }

    .post__tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.375rem;
        margin-top: 0.25rem;
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

    .tag--series {
        background-color: hsl(var(--clr-light-ternary));
        font-weight: 600;
    }
</style>
