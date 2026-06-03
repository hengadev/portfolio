<script lang="ts">
    import Cards from "$lib/components/Cards.svelte";

    const experiments = [
        {
            title: "VizRaft",
            description: "Implementing the Raft consensus algorithm from scratch in Go — watch leader elections, log replication, and network partitions unfold in real time.",
            tags: ["Go", "Raft"],
            type: "Active",
            href: "/experiments/vizraft",
        },
    ] as const;
</script>

<div class="page container__small">
    <header class="page__header">
        <span class="label">Personal work</span>
        <h1 class="title">Experiments</h1>
        <p class="subtitle">
            Side projects, algorithms, and computer science explorations. Less polished than client
            work — more interesting.
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
