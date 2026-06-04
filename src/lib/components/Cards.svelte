<script lang="ts">
    import Card from "$lib/components/Card.svelte";

    type Project = {
        title: string;
        description: string;
        tags: string[];
        type: string;
        href: string;
        logo?: string;
    };
    let { cards }: { cards: Project[] } = $props();
</script>

<div class="cards container__small">
    {#each cards as card, i}
        <Card
            title={card.title}
            description={card.description}
            tags={card.tags}
            type={card.type}
            href={card.href}
            logo={card.logo}
            delay={i * 100}
        />
    {/each}
</div>

<style>
    .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-inline: auto;
    }

    @media (max-width: 900px) {
        .cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 560px) {
        .cards {
            grid-template-columns: 1fr;
        }
    }
</style>
