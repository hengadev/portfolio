<svelte:options runes />
<script lang="ts">
    import { _, locale } from "svelte-i18n";
    import ProjectDetail from "$lib/components/ProjectDetail.svelte";
</script>

{#key $locale}
<ProjectDetail
    title="ENCX"
    tagline={$_('projects.encx')}
    year="2026"
    status="Active"
    role={["Backend Developer"]}
    team={["Gary HENRY"]}
    stack={["Go"]}
    gradient="linear-gradient(135deg, hsl(240 20% 25%), hsl(260 30% 35%))"
>
    <section class="story-section">
        <h2 class="section-title">{$_('detail.overview')}</h2>
        <p>{$_('encx.overview_1')}</p>
    </section>

    <section class="story-section">
        <h2 class="section-title">{$_('detail.learned')}</h2>
        <p>{$_('encx.learned_1')}</p>
        <p>{$_('encx.learned_2')}</p>
        <p>{$_('encx.learned_3')}</p>
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
