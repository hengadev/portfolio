<script lang="ts">
    import { ArrowUpRight } from "lucide-svelte";
    import { goto } from "$app/navigation";

    type Props = {
        title: string;
        tagline: string;
        year: string;
        tags: string[];
        href: string;
        image?: string;
        gradient: string;
        logo?: string;
        featured?: boolean;
    };
    let { title, tagline, year, tags, href, image, gradient, logo, featured = false }: Props = $props();
</script>

<article
    class="project-card"
    class:featured
    role="button"
    tabindex="0"
    onclick={() => goto(href)}
    onkeydown={(e) => e.key === "Enter" && goto(href)}
>
    <div
        class="visual"
        style={`background: ${gradient};` + (image ? ` background-image: url(${image}); background-size: cover; background-position: center top;` : "")}
    >
        {#if !image}
            <div class="visual__placeholder">
                {#if logo}
                    <img src={logo} alt="{title} logo" class="visual__logo" />
                {:else}
                    <span class="visual__initial">{title[0]}</span>
                {/if}
            </div>
        {/if}
    </div>

    <div class="info">
        <div class="info__top">
            <div class="info__title-row">
                {#if logo}
                    <img src={logo} alt="" aria-hidden="true" class="info__logo" />
                {/if}
                <h3 class="project-title">{title}</h3>
            </div>
            <div class="info__right">
                <span class="year">{year}</span>
                <span class="arrow"><ArrowUpRight size={16} /></span>
            </div>
        </div>
        <p class="tagline">{tagline}</p>
        <div class="tags">
            {#each tags as tag}
                <span class="tag">{tag}</span>
            {/each}
        </div>
    </div>
</article>

<style>
    .project-card {
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        border: 1px solid hsl(var(--clr-light-fournary));
        background-color: hsl(var(--clr-light-primary));
        overflow: hidden;
        cursor: pointer;
        transition: border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease;
        text-align: left;
    }

    .project-card:hover {
        border-color: hsl(var(--clr-dark-ternary));
        box-shadow: 0 8px 32px hsl(0 0% 0% / 0.08);
        transform: translateY(-2px);
    }

    .project-card:hover .visual {
        background-position: center 4%;
    }

    /* Visual pane */
    .visual {
        width: 100%;
        height: 220px;
        flex-shrink: 0;
        transition: background-position 400ms ease;
        position: relative;
    }

    .featured .visual {
        height: 320px;
    }

    .visual__placeholder {
        width: 100%;
        height: 100%;
        display: grid;
        place-content: center;
    }

    .visual__logo {
        width: 4rem;
        height: 4rem;
        object-fit: contain;
        opacity: 0.8;
        filter: brightness(0) invert(1);
    }

    .visual__initial {
        font-size: 4rem;
        font-weight: 700;
        color: white;
        opacity: 0.5;
    }

    /* Info strip */
    .info {
        padding: 1.25rem 1.5rem;
        display: grid;
        gap: 0.5rem;
    }

    .info__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
    }

    .info__title-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .info__logo {
        width: 1.375rem;
        height: 1.375rem;
        object-fit: contain;
        border-radius: 0.25rem;
        border: 1px solid hsl(var(--clr-light-fournary));
        flex-shrink: 0;
    }

    .project-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        line-height: 1.2;
    }

    .featured .project-title {
        font-size: 1.25rem;
    }

    .info__right {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        flex-shrink: 0;
    }

    .year {
        font-size: 0.8rem;
        color: hsl(var(--clr-dark-ternary));
        font-weight: 500;
    }

    .arrow {
        color: hsl(var(--clr-dark-ternary));
        display: flex;
        align-items: center;
        transition: color 150ms ease, transform 150ms ease;
    }

    .project-card:hover .arrow {
        color: hsl(var(--clr-dark-primary));
        transform: translate(2px, -2px);
    }

    .tagline {
        font-size: 0.875rem;
        color: hsl(var(--clr-dark-ternary));
        line-height: 1.5;
    }

    .tags {
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
</style>
