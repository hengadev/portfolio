<script lang="ts">
    import Cards from "$lib/components/Cards.svelte";
    import Card from "$lib/components/Card.svelte";
    import { ArrowRight, Mail } from "lucide-svelte";

    const skills = ["Go", "TypeScript", "Python", "Rust", "SvelteKit", "PostgreSQL", "Docker", "Linux"];

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
    ];

    const experiments = [
        {
            title: "VizRaft",
            description: "Implementing the Raft consensus algorithm from scratch in Go — watch leader elections, log replication, and network partitions unfold in real time.",
            tags: ["Go", "Raft"],
            type: "Coming soon",
            href: "/experiments",
        },
    ];
</script>

<div class="page">
    <section class="section hero container__small">
        <h1 class="hero__title">Freelance full-stack developer.</h1>
        <p class="hero__subtitle">
            Backend-leaning, with a taste for mathematics, electronics, and the occasional riff.
        </p>
        <div class="badges">
            {#each skills as skill}
                <span class="badge">{skill}</span>
            {/each}
        </div>
        <div class="hero__ctas flex" style="--gap: 1rem; justify-content: center;">
            <a href="/contact" class="cta-primary">Let's collaborate</a>
            <a href="/projects" class="cta-secondary">View Projects</a>
        </div>
    </section>

    <section class="section about container__small">
        <div class="section__header about__header">
            <h2 class="section__title">About me</h2>
            <a href="/about" class="about__link flex" style="--gap: 0.375rem; align-items: center;">
                More about me <ArrowRight size={16} />
            </a>
        </div>
        <div class="about__content grid" style="--gap: 1.25rem;">
            <p class="about__bio">
                I'm a freelance full-stack developer with a strong backend focus. I build web
                applications and tools — mostly with <span class="tech">Go</span> on the server and
                <span class="tech">SvelteKit</span> on the frontend — and I care about systems that
                are fast, simple, and correct.
            </p>
            <p class="about__bio">
                My main stack is <span class="tech">Go</span>, <span class="tech">TypeScript</span>,
                <span class="tech">PostgreSQL</span>, and <span class="tech">Docker</span>, with some
                <span class="tech">Python</span> and <span class="tech">Rust</span> for the right
                problems. I tend to go deep before going wide: I'd rather understand why something
                works than reach for the nearest abstraction.
            </p>
            <p class="about__bio">
                I studied mathematics up through graduate coursework, which probably explains why I'm
                drawn to things like consensus algorithms and encryption. Outside of code, I tinker
                with electronics and play electric guitar.
            </p>
        </div>
    </section>

    <section class="section projects">
        <div class="section__header section__header--row container__small">
            <div class="section__header-top">
                <h2 class="section__title">Projects</h2>
                <a href="/projects" class="section__link flex" style="--gap: 0.375rem; align-items: center;">
                    View all <ArrowRight size={16} />
                </a>
            </div>
            <p class="section__subtitle">A selection of freelance work.</p>
        </div>
        <Cards cards={projects} />
    </section>

    <section class="section experiments container__small">
        <div class="section__header section__header--row">
            <div class="section__header-top">
                <h2 class="section__title">Experiments</h2>
                <a href="/experiments" class="section__link flex" style="--gap: 0.375rem; align-items: center;">
                    View all <ArrowRight size={16} />
                </a>
            </div>
            <p class="section__subtitle">Side projects, algorithms, and computer science explorations.</p>
        </div>
        <div class="experiments__grid">
            {#each experiments as experiment}
                <Card
                    title={experiment.title}
                    description={experiment.description}
                    tags={experiment.tags}
                    type={experiment.type}
                    href={experiment.href}
                />
            {/each}
        </div>
    </section>

    <section class="section cta container__small">
        <div class="cta__inner grid" style="--gap: 1.25rem;">
            <h2 class="section__title">Looking to Collaborate?</h2>
            <p>
                Open to freelance projects and open-source collaboration.<br />
                If you have something interesting to build, reach out.
            </p>
            <a href="mailto:henry.gary@hotmail.com" class="cta__link flex" style="--gap: 0.5rem; align-items: center; width: fit-content;">
                <Mail size={18} />
                henry.gary@hotmail.com
            </a>
        </div>
    </section>
</div>

<style>
    .page {
        display: grid;
        gap: 9rem;
        padding-bottom: 6rem;
    }

    /* ── Shared ── */
    .section__header {
        margin-inline: auto;
        margin-bottom: 2rem;
        display: grid;
        gap: 0.375rem;
    }

    .section__title {
        font-size: var(--h2);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    .section__subtitle {
        color: hsl(var(--clr-dark-ternary));
    }

    /* ── Hero ── */
    .hero {
        margin-inline: auto;
        display: grid;
        gap: 1.5rem;
        padding-top: 2rem;
        text-align: center;
        justify-items: center;
    }

    .hero__title {
        font-size: var(--h1);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        line-height: 1.2;
    }

    .hero__subtitle {
        color: hsl(var(--clr-dark-ternary));
        max-width: 52ch;
    }

    .badges {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
    }

    .badge {
        font-size: 0.7rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-secondary));
        background-color: hsl(var(--clr-light-secondary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 999px;
        padding: 0.15rem 0.6rem;
    }

    .hero__ctas {
        margin-top: 1rem;
    }

    .cta-primary {
        text-decoration: none;
        font-weight: 500;
        font-size: var(--p);
        color: hsl(var(--clr-light-primary));
        background-color: hsl(var(--clr-dark-primary));
        padding: 0.65rem 1.5rem;
        border-radius: 999px;
        transition: background-color 150ms ease;
    }

    .cta-primary:hover {
        background-color: hsl(var(--clr-dark-secondary));
    }

    .cta-secondary {
        text-decoration: none;
        font-weight: 500;
        font-size: var(--p);
        color: hsl(var(--clr-dark-primary));
        background-color: transparent;
        padding: 0.65rem 1.5rem;
        border-radius: 999px;
        border: 2px solid hsl(var(--clr-light-fournary));
        transition: border-color 150ms ease, background-color 150ms ease;
    }

    .cta-secondary:hover {
        border-color: hsl(var(--clr-dark-primary));
        background-color: hsl(var(--clr-light-secondary));
    }

    /* ── About ── */
    .about {
        margin-inline: auto;
        display: grid;
        gap: 1.5rem;
    }

    .about__header {
        margin-inline: 0;
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .about__bio {
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.7;
    }

    .tech {
        display: inline-block;
        font-family: "Courier New", Courier, monospace;
        font-size: 0.85em;
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        background-color: hsl(var(--clr-light-secondary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 0.3rem;
        padding: 0.05em 0.4em;
    }

    .about__link {
        font-size: var(--p);
        font-weight: 500;
        color: hsl(var(--clr-dark-primary));
        text-decoration: none;
        transition: gap 150ms ease;
    }

    .about__link:hover {
        gap: 0.625rem;
    }

    /* ── Section header with title + link row ── */
    .section__header-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .section__link {
        font-size: var(--p);
        font-weight: 500;
        color: hsl(var(--clr-dark-primary));
        text-decoration: none;
        transition: gap 150ms ease;
    }

    .section__link:hover {
        gap: 0.625rem;
    }

    /* ── Projects / Experiments section header ── */
    .projects .section__header,
    .experiments .section__header {
        margin-bottom: 3rem;
    }

    /* ── Experiments ── */
    .experiments {
        margin-inline: auto;
    }

    .experiments__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    /* ── CTA ── */
    .cta {
        margin-inline: auto;
    }

    .cta__inner {
        padding: 2.5rem;
        border-radius: 1.5rem;
        background-color: hsl(var(--clr-light-secondary));
        border: 1px solid hsl(var(--clr-light-fournary));
    }

    .cta__link {
        font-size: var(--p);
        font-weight: 500;
        color: hsl(var(--clr-dark-primary));
        text-decoration: none;
        padding: 0.6rem 1.25rem;
        border-radius: 999px;
        border: 2px solid hsl(var(--clr-light-fournary));
        transition: border-color 150ms ease, background-color 150ms ease;
    }

    .cta__link:hover {
        border-color: hsl(var(--clr-dark-primary));
        background-color: hsl(var(--clr-light-ternary));
    }
</style>
