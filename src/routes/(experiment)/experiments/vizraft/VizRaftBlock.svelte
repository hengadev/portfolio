<script lang="ts">
    import ProjectDetail from "$lib/components/ProjectDetail.svelte";
    import ProjectBento from "$lib/components/ProjectBento.svelte";
</script>

<ProjectDetail
    title="VizRaft"
    tagline="Implementing the Raft consensus algorithm from scratch in Go — watch leader elections, log replication, and network partitions unfold in real time."
    year="2026"
    status="Active"
    role={["Systems Engineer"]}
    team={["Gary HENRY"]}
    stack={["Go", "WebSockets", "SvelteKit"]}
    backHref="/experiments"
    backLabel="All experiments"
>
    <section class="story-section">
        <h2 class="section-title">Overview</h2>
        <p>
            VizRaft is a from-scratch implementation of the Raft distributed consensus algorithm in
            Go, paired with a real-time visualizer that makes the protocol's behavior tangible.
            Leader elections, log replication, and network partition recovery all play out visually
            as you interact with the cluster.
        </p>
        <p>
            The goal is to turn a paper into running code, then make that code explainable — both
            to myself and to anyone trying to understand how distributed systems stay consistent
            under failure.
        </p>
    </section>

    <ProjectBento gradient="linear-gradient(135deg, hsl(220 80% 30%), hsl(270 60% 45%))" />

    <section class="story-section">
        <h2 class="section-title">What I learned</h2>
        <p class="placeholder">
            This section is coming soon.
        </p>
    </section>
</ProjectDetail>

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
