<script lang="ts">
    import Cards from "$lib/components/Cards.svelte";
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
        <div class="grid" style="--gap: 1.25rem;">
            <p class="about__bio">
                Freelance full-stack developer with a backend focus, building web applications and
                tools with Go, TypeScript, and Rust. I care about systems that are fast, simple, and
                correct — probably a side effect of studying mathematics. When I'm not coding, I'm
                tinkering with electronics or making noise on an electric guitar.
            </p>
            <a href="/about" class="about__link flex" style="--gap: 0.375rem; align-items: center; width: fit-content;">
                More about me <ArrowRight size={16} />
            </a>
        </div>
    </section>

    <section class="section projects">
        <div class="section__header container__small">
            <h2 class="section__title">Projects</h2>
            <p class="section__subtitle">A selection of freelance work.</p>
        </div>
        <Cards cards={projects} />
    </section>

    <section class="section experiments container__small">
        <div class="section__header">
            <h2 class="section__title">Experiments</h2>
            <p class="section__subtitle">Side projects, algorithms, and computer science explorations.</p>
        </div>
        <div class="experiment-card grid" style="--gap: 1.5rem;">
            <div class="flex" style="--gap: 0.75rem; align-items: center;">
                <h3 class="experiment-card__name">VizRaft</h3>
                <span class="coming-soon">Coming soon</span>
            </div>
            <p class="experiment-card__tagline">
                A distributed key-value store with real-time interactive visualization.
            </p>
            <p>
                A real distributed system implementing the Raft consensus algorithm from scratch in
                Go, paired with a live visualization: watch leader elections, log replication, and
                network partitions unfold in real time — and trigger them yourself.
            </p>
            <p>
                Starting from the Raft paper (Ongaro & Ousterhout, 2014) before writing a line of
                code. The goal is to understand the correctness proofs — quorum safety, election
                timeout randomization, state machine replication — then build something that makes
                those abstractions visible and interactive.
            </p>
            <a href="/experiments" class="experiment-card__link flex" style="--gap: 0.375rem; align-items: center; width: fit-content;">
                See all experiments <ArrowRight size={16} />
            </a>
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
        gap: 6rem;
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

    .about__bio {
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.7;
        max-width: 60ch;
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

    /* ── Projects section header ── */
    .projects .section__header {
        margin-bottom: 3rem;
    }

    /* ── Experiments ── */
    .experiments {
        margin-inline: auto;
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

    .coming-soon {
        font-size: var(--label);
        font-weight: 500;
        color: hsl(var(--clr-dark-ternary));
        background-color: hsl(var(--clr-light-ternary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 999px;
        padding: 0.2rem 0.65rem;
    }

    .experiment-card__tagline {
        font-weight: 500;
        color: hsl(var(--clr-dark-secondary));
    }

    .experiment-card__link {
        font-size: var(--p);
        font-weight: 500;
        color: hsl(var(--clr-dark-primary));
        text-decoration: none;
        transition: gap 150ms ease;
    }

    .experiment-card__link:hover {
        gap: 0.625rem;
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
