<script lang="ts">
    import ProjectDetail from "$lib/components/ProjectDetail.svelte";
</script>

<ProjectDetail
    title="Leviosa"
    tagline="Encryption and hashing library built to handle sensitive data pipeline steps without becoming a bottleneck."
    year="2024"
    status="Complete"
    role={["Backend Developer"]}
    team={["Gary HENRY"]}
    stack={["Go", "SvelteKit"]}
    gradient="linear-gradient(135deg, hsl(160 60% 30%), hsl(200 70% 40%))"
    logo="/logos/leviosa.png"
>
    <section class="story-section">
        <h2 class="section-title">Overview</h2>
        <p>
            A crucial component originally built for another project, extracted as a standalone
            library to facilitate encryption and hashing of sensitive data. The main challenge was
            designing an API that stays out of the way while remaining correct and fast.
        </p>
    </section>

    <section class="story-section">
        <h2 class="section-title">What I learned</h2>
        <p class="placeholder">
            <!-- Write about what building this taught you — Go reflection, concurrency, memory model, the garbage collector. -->
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
