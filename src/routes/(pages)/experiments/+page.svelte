<script lang="ts">
    import Cards from "$lib/components/Cards.svelte";
    import { _, locale } from "svelte-i18n";

    const experiments = $derived.by(() => {
        void $locale;
        return [
        {
            title: "VizRaft",
            description: $_("experiments.vizraft"),
            tags: ["Go", "Raft"],
            type: $_("experiments.type_active"),
            href: "/experiments/vizraft",
        },
        ];
    });
</script>

<div class="page container__small">
    <header class="page__header">
        <span class="label">{$_('experiments.label')}</span>
        <h1 class="title">{$_('experiments.title')}</h1>
        <p class="subtitle">
            {$_('experiments.subtitle')}
        </p>
    </header>

    <Cards cards={experiments} />
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
