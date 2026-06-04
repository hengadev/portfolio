<script lang="ts">
    import { ArrowUpRight } from "lucide-svelte";
    import { goto } from "$app/navigation";
    import { _ } from "svelte-i18n";
    import { reveal } from "$lib/actions/reveal";

    type Props = {
        title: string;
        description: string;
        tags: string[];
        type: string;
        href: string;
        logo?: string;
        delay?: number;
    };
    let { title, description, tags, type, href, logo, delay = 0 }: Props = $props();
</script>

<article class="card" role="button" tabindex="0" use:reveal={{ delay }} onclick={() => goto(href)} onkeydown={(e) => e.key === "Enter" && goto(href)}>
    <div class="card__top">
        <div class="card__title-row">
            {#if logo}
                <img src={logo} alt="{title} logo" class="card__logo" />
            {:else}
                <div class="card__icon" aria-hidden="true">{title[0]}</div>
            {/if}
            <h3 class="card__title">{title}</h3>
        </div>
        <span class="card__type">{type}</span>
    </div>

    <div class="card__body">
        <p class="card__description">{description}</p>
    </div>

    <div class="card__footer">
        <div class="card__tags">
            {#each tags as tag}
                <span class="tag">{tag}</span>
            {/each}
        </div>
        <span class="card__link">
            {$_('card.view_project')} <ArrowUpRight size={14} />
        </span>
    </div>
</article>

<style>
    .card {
        display: grid;
        grid-template-rows: auto 1fr auto;
        gap: 1.5rem;
        padding: 1.75rem;
        min-height: 240px;
        border-radius: 0.75rem;
        background-color: hsl(var(--clr-light-primary));
        border: 1px solid hsl(var(--clr-light-fournary));
        cursor: pointer;
        transition: border-color 150ms ease, box-shadow 150ms ease;
        text-align: left;
    }

    .card:hover {
        border-color: hsl(var(--clr-dark-ternary));
        box-shadow: 0 4px 16px hsl(0 0% 0% / 0.06);
    }

    /* Top row: icon+title + type badge */
    .card__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
    }

    .card__title-row {
        display: flex;
        align-items: center;
        gap: 0.625rem;
    }

    .card__logo {
        width: 2rem;
        height: 2rem;
        border-radius: 0.4rem;
        border: 1px solid hsl(var(--clr-light-fournary));
        object-fit: contain;
        flex-shrink: 0;
    }

    .card__icon {
        width: 2rem;
        height: 2rem;
        border-radius: 0.4rem;
        background-color: hsl(var(--clr-light-ternary));
        border: 1px solid hsl(var(--clr-light-fournary));
        display: grid;
        place-content: center;
        font-weight: 700;
        font-size: 0.9rem;
        color: hsl(var(--clr-dark-primary));
        flex-shrink: 0;
    }

    .card__type {
        font-size: 0.7rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-ternary));
        background-color: hsl(var(--clr-light-secondary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 999px;
        padding: 0.15rem 0.6rem;
    }

    /* Body */
    .card__body {
        display: grid;
        gap: 0.5rem;
    }

    .card__title {
        font-size: 1.1rem;
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        line-height: 1.2;
    }

    .card__description {
        font-size: 0.9rem;
        color: hsl(var(--clr-dark-ternary));
        line-height: 1.6;
    }

    /* Footer: tags + link */
    .card__footer {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .card__tags {
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

    .card__link {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        font-size: 0.85rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-primary));
        white-space: nowrap;
        flex-shrink: 0;
    }
</style>
