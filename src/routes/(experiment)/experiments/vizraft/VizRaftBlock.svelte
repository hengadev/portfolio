<svelte:options runes />
<script lang="ts">
    import { _, locale } from "svelte-i18n";
    import ProjectDetail from "$lib/components/ProjectDetail.svelte";
    // import ProjectBento from "$lib/components/ProjectBento.svelte";
</script>

{#key $locale}
<ProjectDetail
    title="VizRaft"
    tagline={$_('experiments.vizraft')}
    year="2026"
    status="Active"
    role={["Systems Engineer"]}
    team={["Gary HENRY"]}
    stack={["Go", "WebSockets", "SvelteKit"]}
    backHref="/experiments"
    backLabel={$_('detail.back_experiments')}
>
    <section class="story-section">
        <h2 class="section-title">{$_('detail.overview')}</h2>
        <p>{$_('vizraft.overview_1')}</p>
        <p>{$_('vizraft.overview_2')}</p>
    </section>

    <!-- <ProjectBento gradient="linear-gradient(135deg, hsl(220 80% 30%), hsl(270 60% 45%))" /> -->

    <section class="story-section">
        <h2 class="section-title">{$_('detail.learned')}</h2>
        <p class="placeholder">{$_('detail.coming_soon')}</p>
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
