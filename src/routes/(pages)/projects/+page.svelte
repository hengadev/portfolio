<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";

    const projects = [
        {
            title: "Germinal",
            tagline: "Event & talent management platform with bilingual support, media galleries, and automated workflows.",
            year: "2025",
            tags: ["SvelteKit", "PostgreSQL", "Docker", "AWS S3"],
            href: "/projects/germinal",
            image: "/projects/germinal.jpg",
            gradient: "linear-gradient(135deg, hsl(20 80% 40%), hsl(359 70% 50%))",
            logo: "/logos/germinal.png",
            featured: true,
        },
        {
            title: "Cluo",
            tagline: "Multi-surface case management ecosystem for private investigators — desktop, mobile PWA, and client portal.",
            year: "2026",
            tags: ["Go", "SvelteKit", "Wails", "PostgreSQL"],
            href: "/projects/cluo",
            image: "/projects/cluo.jpg",
            gradient: "linear-gradient(135deg, hsl(220 70% 35%), hsl(260 60% 50%))",
            logo: "/logos/cluo.png",
        },
        {
            title: "Leviosa",
            tagline: "Encryption and hashing library built to handle sensitive data without becoming a bottleneck.",
            year: "2024",
            tags: ["Go", "SvelteKit"],
            href: "/projects/leviosa",
            image: "/projects/leviosa.jpg",
            gradient: "linear-gradient(135deg, hsl(160 60% 30%), hsl(200 70% 40%))",
            logo: "/logos/leviosa.png",
        },
    ] as const;

    const featured = projects[0];
    const rest = projects.slice(1);
</script>

<div class="page container__small">
    <header class="page__header">
        <span class="label">Selected work</span>
        <h1 class="title">Projects</h1>
        <p class="subtitle">A collection of things I've built — from platforms to libraries.</p>
    </header>

    <div class="projects">
        <ProjectCard {...featured} featured />

        <div class="projects__grid">
            {#each rest as project}
                <ProjectCard {...project} />
            {/each}
        </div>
    </div>
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

    .projects {
        display: grid;
        gap: 1.25rem;
    }

    .projects__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.25rem;
    }

    @media (max-width: 640px) {
        .projects__grid {
            grid-template-columns: 1fr;
        }
    }
</style>
