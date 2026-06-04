<svelte:options runes />
<script lang="ts">
    import { _, locale } from "svelte-i18n";
    import { ArrowUpRight } from "lucide-svelte";
    import ProjectDetail from "$lib/components/ProjectDetail.svelte";
    import ProjectBento from "$lib/components/ProjectBento.svelte";
</script>

{#key $locale}
<ProjectDetail
    title="Germinal"
    tagline="Event & talent management platform with bilingual support, media galleries, and automated workflows."
    year="2025"
    status="Active"
    role={["Full-Stack Developer", "System Designer", "DevOps Engineer"]}
    team={["Gary HENRY"]}
    stack={["SvelteKit 2.x", "Svelte 5 (Runes)", "PostgreSQL + Drizzle", "AWS S3 + SES", "Docker", "pg-boss", "Sentry"]}
    logo="/logos/germinal.png"
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

    <button class="cta" onclick={() => {}}>
        {$_('germinal.view_repository')} <ArrowUpRight size={14} />
    </button>
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

    .placeholder {
        color: hsl(var(--clr-dark-ternary));
        font-style: italic;
    }

    .cta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-primary));
        padding: 0.5rem 1rem;
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 999px;
        width: fit-content;
        transition: border-color 120ms ease, background-color 120ms ease;
    }

    .cta:hover {
        border-color: hsl(var(--clr-dark-ternary));
        background-color: hsl(var(--clr-light-secondary));
    }
</style>
