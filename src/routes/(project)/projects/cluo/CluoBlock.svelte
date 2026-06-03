<script lang="ts">
    import ProjectDetail from "$lib/components/ProjectDetail.svelte";
</script>

<ProjectDetail
    title="Cluo"
    tagline="Multi-surface case management ecosystem for private investigators — desktop app, mobile PWA, and client portal."
    year="2026"
    status="Active"
    role={["Full-Stack Developer", "System Designer", "DevOps Engineer"]}
    team={["Gary HENRY"]}
    stack={["Go", "SvelteKit + Wails", "PostgreSQL + Redis", "AWS S3", "Ansible + Terraform"]}
    gradient="linear-gradient(135deg, hsl(220 70% 35%), hsl(260 60% 50%))"
    logo="/logos/cluo.png"
>
    <section class="story-section">
        <h2 class="section-title">Overview</h2>
        <p>
            Built to replace manual investigation workflows. Field agents use a Wails + SvelteKit
            desktop app for case management, capture evidence on a mobile PWA, and deliver securely
            to clients through a dedicated portal — all driven by one Go API.
        </p>
        <p>
            The legal document chain (Estimate → Mandate → Contract → Invoice) is automated as a
            state machine with per-document PDF generation.
        </p>
    </section>

    <section class="story-section">
        <h2 class="section-title">Technical highlights</h2>
        <ul class="highlight-list">
            <li>
                <strong>4 apps, one backend:</strong> Go API, Wails desktop, mobile PWA, and client
                portal all share a single hexagonal backend with port interfaces.
            </li>
            <li>
                <strong>AI pipeline:</strong> transcribes field audio, extracts structured data
                (people, timelines, facts), and pre-fills the report editor.
            </li>
            <li>
                <strong>Legal chain automation:</strong> Estimate → Mandate → Contract → Invoice
                modeled as a state machine with per-document PDF generation and delivery.
            </li>
            <li>
                <strong>Magic link auth:</strong> SHA-256 tokens with configurable expiration and
                investigator-controlled revocation — no client accounts needed.
            </li>
            <li>
                <strong>Infrastructure as code:</strong> Ansible + Terraform for reproducible,
                version-controlled deployments.
            </li>
        </ul>
    </section>

    <section class="story-section">
        <h2 class="section-title">What I learned</h2>
        <p class="placeholder">
            <!-- Write about what building this taught you. -->
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
