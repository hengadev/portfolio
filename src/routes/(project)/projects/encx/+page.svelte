<script lang="ts">
    import ProjectDetail from "$lib/components/ProjectDetail.svelte";
</script>

<ProjectDetail
    title="ENCX"
    tagline="Encryption and hashing module powering the secure data pipeline inside Cluo."
    year="2026"
    status="Active"
    role={["Backend Developer"]}
    team={["Gary HENRY"]}
    stack={["Go"]}
    gradient="linear-gradient(135deg, hsl(240 20% 25%), hsl(260 30% 35%))"
>
    <section class="story-section">
        <h2 class="section-title">Overview</h2>
        <p>
            A crucial component of the Cluo project that facilitates encryption and hashing of
            sensitive data. Designed as a standalone module to avoid becoming a bottleneck in the
            data pipeline.
        </p>
        <p class="placeholder">Full write-up coming soon.</p>
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
