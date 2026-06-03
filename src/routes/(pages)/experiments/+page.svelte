<script lang="ts">
    type Experiment = {
        name: string;
        tagline: string;
        description: string;
        status: "coming-soon" | "live";
        href?: string;
    };

    const experiments: Experiment[] = [
        {
            name: "VizRaft",
            tagline: "A distributed key-value store with real-time interactive visualization.",
            description:
                "A real distributed system implementing the Raft consensus algorithm from scratch in Go, paired with a live visualization: watch leader elections, log replication, and network partitions unfold in real time — and trigger them yourself. Starting from the Raft paper (Ongaro & Ousterhout, 2014) before writing a line of code. The goal is to understand the correctness proofs — quorum safety, election timeout randomization, state machine replication — then build something that makes those abstractions visible and interactive.",
            status: "coming-soon",
        },
    ];
</script>

<div class="page container__small">
    <div class="page__header grid" style="--gap: 0.5rem;">
        <h1 class="page__title">Experiments</h1>
        <p class="page__subtitle">
            Side projects, algorithms, and computer science explorations. Less polished than client
            work — more interesting.
        </p>
    </div>

    <div class="experiments grid" style="--gap: 1.5rem;">
        {#each experiments as experiment}
            <div class="experiment-card grid" style="--gap: 1.25rem;">
                <div class="flex" style="--gap: 0.75rem; align-items: center;">
                    <h2 class="experiment-card__name">{experiment.name}</h2>
                    <span class="status-badge status-badge--{experiment.status}">
                        {experiment.status === "coming-soon" ? "Coming soon" : "Live"}
                    </span>
                </div>
                <p class="experiment-card__tagline">{experiment.tagline}</p>
                <p class="experiment-card__description">{experiment.description}</p>
                {#if experiment.href}
                    <a href={experiment.href} class="experiment-card__link" target="_blank" rel="noopener noreferrer">
                        Open →
                    </a>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
    .page {
        margin-inline: auto;
        display: grid;
        gap: 3.5rem;
        padding-bottom: 4rem;
    }

    .page__title {
        font-size: var(--h1);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    .page__subtitle {
        color: hsl(var(--clr-dark-ternary));
        max-width: 60ch;
    }

    .experiment-card {
        padding: 2rem;
        border-radius: 1.5rem;
        background-color: hsl(var(--clr-light-secondary));
        border: 1px solid hsl(var(--clr-light-fournary));
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.7;
    }

    .experiment-card__name {
        font-size: var(--h3);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    .status-badge {
        font-size: var(--label);
        font-weight: 500;
        border-radius: 999px;
        padding: 0.2rem 0.65rem;
    }

    .status-badge--coming-soon {
        color: hsl(var(--clr-dark-ternary));
        background-color: hsl(var(--clr-light-ternary));
        border: 1px solid hsl(var(--clr-light-fournary));
    }

    .status-badge--live {
        color: hsl(var(--clr-success));
        background-color: hsl(var(--clr-success) / 0.1);
        border: 1px solid hsl(var(--clr-success) / 0.3);
    }

    .experiment-card__tagline {
        font-weight: 500;
        color: hsl(var(--clr-dark-secondary));
    }

    .experiment-card__description {
        color: hsl(var(--clr-dark-ternary));
    }

    .experiment-card__link {
        font-weight: 500;
        color: hsl(var(--clr-dark-primary));
        text-decoration: none;
    }

    .experiment-card__link:hover {
        text-decoration: underline;
    }
</style>
