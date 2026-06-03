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
    {#each cards as card}
        <Card
            title={card.title}
            description={card.description}
            tags={card.tags}
            type={card.type}
            href={card.href}
            logo={card.logo}
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
</style>
