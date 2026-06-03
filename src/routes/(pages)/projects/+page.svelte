<script lang="ts">
    import Cards from "$lib/components/Cards.svelte";
    import { _, locale } from "svelte-i18n";

    const projects = $derived.by(() => {
        void $locale;
        return [
        {
            title: "Cluo",
            description: $_("projects.cluo"),
            tags: ["Go", "SvelteKit", "PostgreSQL", "Wails"],
            type: $_("projects.type_freelance"),
            href: "/projects/cluo",
            logo: "/logos/cluo.png",
        },
        {
            title: "Leviosa",
            description: $_("projects.leviosa"),
            tags: ["Go", "SvelteKit", "PostgreSQL", "Stripe"],
            type: $_("projects.type_freelance"),
            href: "/projects/leviosa",
            logo: "/logos/leviosa.png",
        },
        {
            title: "Germinal",
            description: $_("projects.germinal"),
            tags: ["SvelteKit", "PostgreSQL", "Docker"],
            type: $_("projects.type_freelance"),
            href: "/projects/germinal",
            logo: "/logos/germinal.png",
        },
        {
            title: "ENCX",
            description: $_("projects.encx"),
            tags: ["Go"],
            type: $_("projects.type_library"),
            href: "/projects/encx",
        },
        ];
    });
</script>

<div class="page container__small">
    <header class="page__header">
        <span class="label">{$_('projects.label')}</span>
        <h1 class="title">{$_('projects.title')}</h1>
        <p class="subtitle">{$_('projects.subtitle')}</p>
    </header>

    <Cards cards={projects} />
</div>

<style>
    .page {
        margin-inline: auto;
        padding-block: 3rem;
    }

    .page__header {
        display: grid;
        gap: 0.5rem;
        margin-bottom: 3rem;
    }

    .label {
        font-size: var(--label);
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: hsl(var(--clr-dark-ternary));
    }

    .title {
        font-size: var(--h1);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        line-height: 1.1;
    }

    .subtitle {
        color: hsl(var(--clr-dark-ternary));
        line-height: 1.7;
        max-width: 52ch;
    }
</style>
