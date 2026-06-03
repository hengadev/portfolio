<script lang="ts">
    import Cards from "$lib/components/Cards.svelte";

    const projects = [
        {
            title: "Cluo",
            description: "Case management ecosystem for a private investigator — Go API, Wails desktop, mobile PWA, and client portal with AI transcription and legal document automation.",
            tags: ["Go", "SvelteKit", "PostgreSQL", "Wails"],
            type: "Freelance",
            href: "/projects/cluo",
            logo: "/logos/cluo.png",
        },
        {
            title: "Leviosa",
            description: "Wellness booking platform connecting clients with professionals. Go modular monolith with Stripe, Vault encryption, and RabbitMQ.",
            tags: ["Go", "SvelteKit", "PostgreSQL", "Stripe"],
            type: "Freelance",
            href: "/projects/leviosa",
            logo: "/logos/leviosa.png",
        },
        {
            title: "Germinal",
            description: "Event and talent management platform for a creative studio. SvelteKit 5 with background job scheduling, bilingual support, and production infrastructure.",
            tags: ["SvelteKit", "PostgreSQL", "Docker"],
            type: "Freelance",
            href: "/projects/germinal",
            logo: "/logos/germinal.png",
        },
        {
            title: "ENCX",
            description: "Encryption and hashing module powering the secure data pipeline inside Cluo. Designed as a standalone module to avoid becoming a bottleneck.",
            tags: ["Go"],
            type: "Library",
            href: "/projects/encx",
        },
    ] as const;
</script>

<div class="page container__small">
    <header class="page__header">
        <span class="label">Selected work</span>
        <h1 class="title">Projects</h1>
        <p class="subtitle">A collection of things I've built — from platforms to libraries.</p>
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
