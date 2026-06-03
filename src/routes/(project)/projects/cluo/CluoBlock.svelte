<svelte:options runes />
<script lang="ts">
    import { _, locale } from "svelte-i18n";
    import ProjectDetail from "$lib/components/ProjectDetail.svelte";
    import ProjectBento from "$lib/components/ProjectBento.svelte";
</script>

{#key $locale}
<ProjectDetail
    title="Cluo"
    tagline="Multi-surface case management ecosystem for private investigators — desktop app, mobile PWA, and client portal."
    year="2026"
    status="Active"
    role={["Full-Stack Developer", "System Designer", "DevOps Engineer"]}
    team={["Gary HENRY"]}
    stack={["Go", "SvelteKit + Wails", "PostgreSQL + Redis", "AWS S3", "Ansible + Terraform"]}
    logo="/logos/cluo.png"
>
    <section class="story-section">
        <h2 class="section-title">{$_('detail.overview')}</h2>
        <p>{$_('cluo.overview_1')}</p>
        <p>{$_('cluo.overview_2')}</p>
    </section>

    <ProjectBento gradient="linear-gradient(135deg, hsl(220 70% 35%), hsl(260 60% 50%))" />

    <section class="story-section">
        <h2 class="section-title">{$_('detail.highlights')}</h2>
        <ul class="highlight-list">
            <li><strong>{$_('cluo.highlight_1_label')}</strong> {$_('cluo.highlight_1_body')}</li>
            <li><strong>{$_('cluo.highlight_2_label')}</strong> {$_('cluo.highlight_2_body')}</li>
            <li><strong>{$_('cluo.highlight_3_label')}</strong> {$_('cluo.highlight_3_body')}</li>
            <li><strong>{$_('cluo.highlight_4_label')}</strong> {$_('cluo.highlight_4_body')}</li>
            <li><strong>{$_('cluo.highlight_5_label')}</strong> {$_('cluo.highlight_5_body')}</li>
        </ul>
    </section>

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
</style>
