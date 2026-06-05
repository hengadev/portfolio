<svelte:options runes />
<script lang="ts">
    import { _, locale } from "svelte-i18n";
    import ProjectDetail from "$lib/components/ProjectDetail.svelte";
    import ProjectBento from "$lib/components/ProjectBento.svelte";
</script>

{#key $locale}
<ProjectDetail
    title="Germinal"
    tagline={$_('germinal.tagline')}
    year="2025"
    status="Active"
    role={["Full-Stack Developer", "System Designer", "DevOps Engineer"]}
    team={["Gary HENRY"]}
    stack={["SvelteKit 2.x", "Svelte 5 (Runes)", "PostgreSQL + Drizzle", "AWS S3 + SES", "Docker", "pg-boss", "Sentry"]}
    logo="/logos/germinal.png"
    demoUrl="https://germinal.henga.dev"
    githubUrl="https://github.com/hengadev/germinal"
>
    <section class="story-section">
        <h2 class="section-title">{$_('detail.overview')}</h2>
        <p>{$_('germinal.overview_1')}</p>
        <p>{$_('germinal.overview_2')}</p>
    </section>

    <ProjectBento gradient="linear-gradient(135deg, hsl(20 80% 40%), hsl(359 70% 50%))" />

    <section class="story-section">
        <h2 class="section-title">{$_('detail.highlights')}</h2>
        <ul class="highlight-list">
            <li><strong>{$_('germinal.highlight_1_label')}</strong> {$_('germinal.highlight_1_body')}</li>
            <li><strong>{$_('germinal.highlight_2_label')}</strong> {$_('germinal.highlight_2_body')}</li>
            <li><strong>{$_('germinal.highlight_3_label')}</strong> {$_('germinal.highlight_3_body')}</li>
            <li><strong>{$_('germinal.highlight_4_label')}</strong> {$_('germinal.highlight_4_body')}</li>
            <li><strong>{$_('germinal.highlight_5_label')}</strong> {$_('germinal.highlight_5_body')}</li>
            <li><strong>{$_('germinal.highlight_6_label')}</strong> {$_('germinal.highlight_6_body')}</li>
            <li><strong>{$_('germinal.highlight_7_label')}</strong> {$_('germinal.highlight_7_body')}</li>
        </ul>
    </section>

    <section class="story-section">
        <h2 class="section-title">{$_('detail.learned')}</h2>
        <p>{$_('germinal.learned_1')}</p>
        <p>{$_('germinal.learned_2')}</p>
        <p>{$_('germinal.learned_3')}</p>
        <p>{$_('germinal.learned_4')}</p>
        <p>{$_('germinal.learned_5')}</p>
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

    .highlight-list {
        display: grid;
        gap: 0.75rem;
        padding-left: 1.25rem;
        list-style: disc;
    }

    .highlight-list li {
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.65;
        font-size: 0.975rem;
    }

</style>
