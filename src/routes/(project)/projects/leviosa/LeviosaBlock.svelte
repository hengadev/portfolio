<svelte:options runes />
<script lang="ts">
    import { _, locale } from "svelte-i18n";
    import ProjectDetail from "$lib/components/ProjectDetail.svelte";
    import ProjectBento from "$lib/components/ProjectBento.svelte";
</script>

{#key $locale}
<ProjectDetail
    title="Leviosa"
    tagline="Encryption and hashing library built to handle sensitive data pipeline steps without becoming a bottleneck."
    year="2024"
    status="Complete"
    role={["Backend Developer"]}
    team={["Gary HENRY"]}
    stack={["Go", "SvelteKit"]}
    logo="/logos/leviosa.png"
>
    <section class="story-section">
        <h2 class="section-title">{$_('detail.overview')}</h2>
        <p>{$_('leviosa.overview_1')}</p>
    </section>

    <ProjectBento gradient="linear-gradient(135deg, hsl(160 60% 30%), hsl(200 70% 40%))" />

    <section class="story-section">
        <h2 class="section-title">{$_('detail.learned')}</h2>
        <p>{$_('leviosa.learned_1')}</p>
        <p>{$_('leviosa.learned_2')}</p>
        <p>{$_('leviosa.learned_3')}</p>
        <p>{$_('leviosa.learned_4')}</p>
    </section>
</ProjectDetail>
{/key}

<style>
    .story-section {
        display: grid;
        gap: 1rem;
    }

    .section-title {
        font-size: var(--h3);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    p {
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.75;
        font-size: 0.975rem;
    }

    .placeholder {
        color: hsl(var(--clr-dark-ternary));
        font-style: italic;
    }
</style>
