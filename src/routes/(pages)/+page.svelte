<script lang="ts">
    import Cards from "$lib/components/Cards.svelte";
    import Card from "$lib/components/Card.svelte";
    import Testimonials from "$lib/sections/Testimonials.svelte";
    import { _, locale } from "svelte-i18n";
    import { ArrowRight } from "lucide-svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    function formatDate(dateStr: string): string {
        return new Date(dateStr).toLocaleDateString($locale === 'fr' ? 'fr-FR' : 'en-US', {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    }

    const skills = ["Go", "TypeScript", "Python", "Rust", "SvelteKit", "PostgreSQL", "Docker", "Linux", "AI-augmented"];

    const projects = $derived.by(() => {
        void $locale;
        return [
        {
            title: "Cluo",
            description: $_("projects.cluo"),
            tags: ["Go", "SvelteKit", "PostgreSQL", "Wails"],
            type: $_("projects.type_freelance"),
            href: "/projects/cluo",
            logo: "/logos/cluo.png",
        },
        {
            title: "Leviosa",
            description: $_("projects.leviosa"),
            tags: ["Go", "SvelteKit", "PostgreSQL", "Stripe"],
            type: $_("projects.type_freelance"),
            href: "/projects/leviosa",
            logo: "/logos/leviosa.png",
        },
        {
            title: "Germinal",
            description: $_("projects.germinal"),
            tags: ["SvelteKit", "PostgreSQL", "Docker"],
            type: $_("projects.type_freelance"),
            href: "/projects/germinal",
            logo: "/logos/germinal.png",
        },
        ];
    });

    const experiments = $derived.by(() => {
        void $locale;
        return [
        {
            title: "VizRaft",
            description: $_("experiments.vizraft"),
            tags: ["Go", "Raft"],
            type: $_("experiments.type_coming_soon"),
            href: "/experiments",
        },
        ];
    });
</script>

<svelte:head>
	<title>Gary Henry — Freelance Developer</title>
	<meta name="description" content="You bring the problem. I handle the rest — design, build, and ship. Full-stack freelance developer based in Paris. Go, SvelteKit, PostgreSQL." />
	<meta property="og:title" content="Gary Henry — Freelance Developer" />
	<meta property="og:description" content="You bring the problem. I handle the rest — design, build, and ship. Full-stack freelance developer based in Paris. Go, SvelteKit, PostgreSQL." />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Gary Henry",
		"url": "https://henga.dev",
		"jobTitle": "Freelance Full-Stack Developer",
		"description": "Full-stack freelance developer based in Paris. Go + SvelteKit.",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Paris",
			"addressCountry": "FR"
		},
		"email": "henry.gary@hotmail.com",
		"knowsAbout": ["Go", "TypeScript", "SvelteKit", "PostgreSQL", "Docker", "Distributed Systems", "Cryptography"]
	})}</script>`}
</svelte:head>

<div class="page">
    <!-- ─── 1.0 HERO — who I am ─── -->
    <section class="section hero">
        <span class="hero__availability">
            <span class="availability__dot"></span>
            {$_('home.hero.availability')}
        </span>
        <h1 class="hero__title">{$_('home.hero.title')}</h1>
        <p class="hero__subtitle">
            {$_('home.hero.subtitle')}
        </p>
        <div class="badges">
            {#each skills as skill}
                <span class="badge">{skill}</span>
            {/each}
        </div>
        <a href="/contact" class="hero__cta">
            {$_('home.hero.cta_primary')} <ArrowRight size={16} />
        </a>
    </section>

    <!-- ─── 2.0 ABOUT — how I work (bio) ─── -->
    <section class="section about">
        <div class="about__label">
            <span class="stage-num">2.0</span>
            <h2 class="section__title">{$_('home.about.title')}</h2>
        </div>
        <div class="about__body">
            <div class="about__photo">
                <img src="/toji_locks.jpg" alt="Profile photo" />
            </div>
            <div class="about__content">
                <p class="about__bio">{$_('home.about.bio1')}</p>
                <p class="about__bio">{$_('home.about.bio2')}</p>
                <p class="about__bio">{$_('home.about.bio3')}</p>
            </div>
        </div>
    </section>

    <!-- ─── 3.0 PROCESS — numbered timeline ─── -->
    <section class="section process">
        <div class="process__header">
            <span class="stage-num">3.0</span>
            <h2 class="section__title">{$_('home.process.title')}</h2>
        </div>
        <p class="process__subtitle">{$_('home.process.subtitle')}</p>

        <ol class="process__timeline">
            <li class="process__step">
                <span class="process__number" aria-hidden="true">01</span>
                <div class="process__rule"></div>
                <div class="process__step-content">
                    <h3 class="process__step-title">{$_('home.process.step1.title')}</h3>
                    <p class="process__step-desc">{$_('home.process.step1.description')}</p>
                </div>
            </li>
            <li class="process__step">
                <span class="process__number" aria-hidden="true">02</span>
                <div class="process__rule"></div>
                <div class="process__step-content">
                    <h3 class="process__step-title">{$_('home.process.step2.title')}</h3>
                    <p class="process__step-desc">{$_('home.process.step2.description')}</p>
                </div>
            </li>
            <li class="process__step">
                <span class="process__number" aria-hidden="true">03</span>
                <div class="process__rule"></div>
                <div class="process__step-content">
                    <h3 class="process__step-title">{$_('home.process.step3.title')}</h3>
                    <p class="process__step-desc">{$_('home.process.step3.description')}</p>
                </div>
            </li>
            <li class="process__step">
                <span class="process__number" aria-hidden="true">04</span>
                <div class="process__rule"></div>
                <div class="process__step-content">
                    <h3 class="process__step-title">{$_('home.process.step4.title')}</h3>
                    <p class="process__step-desc">{$_('home.process.step4.description')}</p>
                </div>
            </li>
        </ol>
    </section>

    <!-- ─── 4.0 PROJECTS — what I've built ─── -->
    <section class="section projects">
        <div class="projects__header">
            <span class="stage-num">4.0</span>
            <div class="projects__header-row">
                <h2 class="section__title">{$_('home.projects.title')}</h2>
                <a href="/projects" class="section__link">
                    {$_('home.projects.link')} <ArrowRight size={14} />
                </a>
            </div>
            <p class="section__subtitle">{$_('home.projects.subtitle')}</p>
        </div>
        <Cards cards={projects} />
    </section>

    <!-- ─── 4.1 TESTIMONIALS ─── -->
    <Testimonials />

    <!-- ─── 4.2 EXPERIMENTS ─── -->
    <section class="section experiments">
        <div class="experiments__header">
            <div class="experiments__header-row">
                <h2 class="section__title">{$_('home.experiments.title')}</h2>
                <a href="/experiments" class="section__link">
                    {$_('home.experiments.link')} <ArrowRight size={14} />
                </a>
            </div>
            <p class="section__subtitle">{$_('home.experiments.subtitle')}</p>
        </div>
        <div class="experiments__grid">
            {#each experiments as experiment, i}
                <Card
                    title={experiment.title}
                    description={experiment.description}
                    tags={experiment.tags}
                    type={experiment.type}
                    href={experiment.href}
                    delay={i * 100}
                />
            {/each}
        </div>
    </section>

    <!-- ─── 5.0 BLOG (conditional) ─── -->
    {#if data.latestPosts.length > 0}
    <section class="section articles">
        <div class="articles__header">
            <div class="articles__header-row">
                <h2 class="section__title">{$_('home.posts.title')}</h2>
                <a href="/blog" class="section__link">
                    {$_('home.posts.link')} <ArrowRight size={14} />
                </a>
            </div>
            <p class="section__subtitle">{$_('home.posts.subtitle')}</p>
        </div>
        <ul class="article-list">
            {#each data.latestPosts as post}
                <li class="article-item">
                    <a href="/blog/{post.slug}" class="article-link">
                        <time class="article__date" datetime={post.date}>{formatDate(post.date)}</time>
                        <h3 class="article__title">
                            {post.title}
                            <ArrowRight size={14} class="article__arrow" />
                        </h3>
                        <p class="article__description">{post.description}</p>
                        <div class="article__tags">
                            {#each post.tags as tag}
                                <span class="tag">{tag}</span>
                            {/each}
                        </div>
                    </a>
                </li>
            {/each}
        </ul>
    </section>
    {/if}

    <!-- ─── 6.0 CTA — let's talk ─── -->
    <section class="section cta">
        <span class="stage-num">6.0</span>
        <h2 class="cta__title">{$_('home.cta.title')}</h2>
        <p class="cta__desc">
            {$_('home.cta.desc').split('\n')[0]}<br />
            {$_('home.cta.desc').split('\n')[1]}
        </p>
        <a href="/contact" class="cta__link">
            {$_('home.cta.btn')} <ArrowRight size={16} />
        </a>
    </section>
</div>

<style>
    /* ────────────────────────────────────
       Page shell — varied section gaps
       ──────────────────────────────────── */
    .page {
        display: grid;
        gap: 0;
        padding-bottom: var(--space-3xl);
    }

    .section {
        max-width: 72rem;
        width: 90%;
        margin-inline: auto;
    }

    /* Stage number labels */
    .stage-num {
        font-family: var(--font-outlier);
        font-size: var(--text-xs);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--c-rule);
    }

    /* Shared section title */
    .section__title {
        font-family: var(--font-display);
        font-size: var(--text-xl);
        font-weight: 600;
        font-style: normal;
        color: var(--c-ink);
    }

    .section__subtitle {
        font-size: var(--text-sm);
        color: var(--c-neutral);
        line-height: 1.6;
        margin-top: var(--space-2xs);
    }

    .section__link {
        font-size: var(--text-sm);
        font-weight: 500;
        font-family: var(--font-body);
        color: var(--c-ink);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: var(--space-2xs);
        transition: gap var(--dur-short) var(--ease-out);
    }

    .section__link:hover {
        gap: var(--space-xs);
    }

    .section__link:focus-visible {
        outline: 2px solid var(--c-focus);
        outline-offset: 2px;
        border-radius: 2px;
    }

    /* ────────────────────────────────────
       1.0 Hero — left-biased, display face
       ──────────────────────────────────── */
    .hero {
        padding-top: var(--space-xl);
        padding-bottom: var(--space-3xl);
        display: grid;
        gap: var(--space-lg);
        justify-items: start;
        text-align: left;
    }

    /* Stagger entrance — only motion on the page */
    @keyframes fade-up {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    @media (prefers-reduced-motion: no-preference) {
        .hero__availability { animation: fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero__title        { animation: fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) 75ms both; }
        .hero__subtitle     { animation: fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) 150ms both; }
        .badges             { animation: fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) 225ms both; }
        .hero__cta          { animation: fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) 300ms both; }
    }

    .hero__availability {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        font-size: var(--text-xs);
        font-weight: 500;
        font-family: var(--font-body);
        color: var(--c-avail-text);
        background-color: var(--c-avail-bg);
        border: 1px solid var(--c-avail-border);
        border-radius: 999px;
        padding: var(--space-2xs) var(--space-sm);
    }

    :global([data-theme="dark"]) .hero__availability {
        color: var(--c-avail-text);
    }

    :global([data-theme="dark"]) .availability__dot {
        background-color: var(--c-avail-dot);
    }

    .availability__dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: var(--c-avail-dot);
        flex-shrink: 0;
        animation: pulse-dot 2s var(--ease-in-out) infinite;
    }

    @keyframes pulse-dot {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }

    .hero__title {
        font-family: var(--font-display);
        font-size: var(--text-display);
        font-weight: 600;
        font-style: normal;
        color: var(--c-ink);
        line-height: 1.05;
        overflow-wrap: anywhere;
        min-width: 0;
    }

    .hero__subtitle {
        font-size: var(--text-md);
        color: var(--c-neutral);
        max-width: 52ch;
        line-height: 1.55;
    }

    .badges {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-xs);
    }

    .badge {
        font-size: var(--text-xs);
        font-weight: 500;
        font-family: var(--font-body);
        color: var(--c-neutral);
        background-color: var(--c-paper-2);
        border: 1px solid var(--c-rule);
        border-radius: 999px;
        padding: 0.15rem 0.6rem;
    }

    .hero__cta {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        text-decoration: none;
        font-family: var(--font-body);
        font-weight: 500;
        font-size: var(--text-base);
        color: var(--c-accent);
        margin-top: var(--space-sm);
        transition: gap var(--dur-short) var(--ease-out);
    }

    .hero__cta:hover {
        gap: var(--space-sm);
    }

    .hero__cta:focus-visible {
        outline: 2px solid var(--c-focus);
        outline-offset: 3px;
        border-radius: 2px;
    }

    /* ────────────────────────────────────
       2.0 About
       ──────────────────────────────────── */
    .about {
        padding-block: var(--space-3xl);
    }

    .about__label {
        display: flex;
        align-items: baseline;
        gap: var(--space-sm);
        margin-bottom: var(--space-xl);
    }

    .about__body {
        display: grid;
        grid-template-columns: 180px 1fr;
        gap: var(--space-xl);
        align-items: start;
    }

    .about__photo {
        width: 180px;
        aspect-ratio: 3 / 4;
        border-radius: 0.5rem;
        flex-shrink: 0;
        overflow: hidden;
        border: 1px solid var(--c-rule);
    }

    .about__photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .about__content {
        display: grid;
        gap: var(--space-md);
    }

    .about__bio {
        font-size: var(--text-base);
        color: var(--c-muted);
        line-height: 1.7;
    }

    @media (max-width: 600px) {
        .about__body {
            grid-template-columns: 1fr;
        }
        .about__photo {
            width: 140px;
            aspect-ratio: 1;
        }
    }

    /* ────────────────────────────────────
       3.0 Process — vertical numbered timeline
       ──────────────────────────────────── */
    .process {
        padding-block: var(--space-3xl);
    }

    .process__header {
        display: flex;
        align-items: baseline;
        gap: var(--space-sm);
        margin-bottom: var(--space-2xs);
    }

    .process__subtitle {
        font-size: var(--text-sm);
        color: var(--c-neutral);
        line-height: 1.6;
        margin-bottom: var(--space-xl);
    }

    .process__timeline {
        display: grid;
        gap: 0;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .process__step {
        display: grid;
        grid-template-columns: 3.5rem 1fr;
        gap: 0 var(--space-md);
        align-items: start;
        position: relative;
    }

    /* Vertical connector line — runs through center of number column */
    .process__step::before {
        content: '';
        position: absolute;
        left: calc(3.5rem / 2);
        top: 0;
        bottom: 0;
        width: 2px;
        background-color: var(--c-rule);
        transform: translateX(-50%);
    }

    .process__step:last-child::before {
        display: none;
    }

    .process__rule {
        display: none;
    }

    .process__number {
        width: 3rem;
        height: 3rem;
        display: grid;
        place-content: center;
        font-family: var(--font-body);
        font-size: var(--text-sm);
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        color: var(--c-accent);
        background-color: var(--c-paper);
        border: 1.5px solid var(--c-accent);
        border-radius: 50%;
        line-height: 1;
        justify-self: center;
        position: relative;
        z-index: 1;
    }

    .process__step-content {
        padding-block: var(--space-xs) var(--space-xl);
    }

    .process__step-title {
        font-family: var(--font-display);
        font-size: var(--text-md);
        font-weight: 600;
        font-style: normal;
        color: var(--c-ink);
        margin-bottom: var(--space-2xs);
    }

    .process__step-desc {
        font-size: var(--text-sm);
        color: var(--c-neutral);
        line-height: 1.65;
    }

    @media (max-width: 520px) {
        .process__step {
            grid-template-columns: 2.5rem 1fr;
            gap: 0 var(--space-sm);
        }

        .process__step::before {
            left: calc(2.5rem / 2);
        }

        .process__number {
            width: 2.5rem;
            height: 2.5rem;
            font-size: var(--text-xs);
        }
    }

    /* ────────────────────────────────────
       4.0 Projects
       ──────────────────────────────────── */
    .projects {
        padding-block: var(--space-3xl) var(--space-xl);
    }

    .projects__header {
        margin-bottom: var(--space-xl);
    }

    .projects__header-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: var(--space-md);
        margin-bottom: var(--space-2xs);
    }

    /* ────────────────────────────────────
       4.2 Experiments
       ──────────────────────────────────── */
    .experiments {
        padding-block: var(--space-xl);
    }

    .experiments__header {
        margin-bottom: var(--space-xl);
    }

    .experiments__header-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: var(--space-md);
        margin-bottom: var(--space-2xs);
    }

    .experiments__grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: var(--space-md);
    }

    /* ────────────────────────────────────
       5.0 Articles
       ──────────────────────────────────── */
    .articles {
        padding-block: var(--space-3xl);
    }

    .articles__header {
        margin-bottom: var(--space-xl);
    }

    .articles__header-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: var(--space-md);
        margin-bottom: var(--space-2xs);
    }

    .article-list {
        display: grid;
        gap: var(--space-sm);
    }

    .article-item {
        background-color: var(--c-paper);
        border: 1px solid var(--c-rule);
        border-radius: 0.5rem;
        transition: border-color var(--dur-short) var(--ease-out), box-shadow var(--dur-short) var(--ease-out);
    }

    .article-item:hover {
        border-color: var(--c-neutral);
        box-shadow: 0 4px 16px var(--c-paper-2);
    }

    .article-link {
        display: grid;
        gap: var(--space-2xs);
        padding: var(--space-lg);
        text-decoration: none;
        transition: padding-left var(--dur-short) var(--ease-out);
    }

    .article-link:hover {
        padding-left: calc(var(--space-lg) + var(--space-xs));
    }

    .article-link:focus-visible {
        outline: 2px solid var(--c-focus);
        outline-offset: -2px;
        border-radius: 0.5rem;
    }

    .article__date {
        font-size: var(--text-xs);
        font-weight: 500;
        font-family: var(--font-body);
        color: var(--c-neutral);
    }

    .article__title {
        display: flex;
        align-items: center;
        gap: var(--space-2xs);
        font-family: var(--font-display);
        font-size: var(--text-lg);
        font-weight: 600;
        font-style: normal;
        color: var(--c-ink);
        line-height: 1.3;
    }

    :global(.article__arrow) {
        flex-shrink: 0;
        opacity: 0;
        transform: translateX(-4px);
        transition: opacity var(--dur-short) var(--ease-out), transform var(--dur-short) var(--ease-out);
        color: var(--c-ink);
    }

    .article-link:hover :global(.article__arrow) {
        opacity: 1;
        transform: translateX(0);
    }

    .article__description {
        font-size: var(--text-sm);
        color: var(--c-neutral);
        line-height: 1.6;
    }

    .article__tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2xs);
        margin-top: var(--space-3xs);
    }

    .tag {
        font-size: var(--text-xs);
        font-weight: 500;
        font-family: var(--font-body);
        color: var(--c-neutral);
        background-color: var(--c-paper-2);
        border: 1px solid var(--c-rule);
        border-radius: 999px;
        padding: 0.15rem 0.55rem;
    }

    /* ────────────────────────────────────
       6.0 CTA — typographic link, not button
       ──────────────────────────────────── */
    .cta {
        padding-block: var(--space-3xl);
        display: grid;
        gap: var(--space-md);
        text-align: left;
    }

    .cta__title {
        font-family: var(--font-display);
        font-size: var(--text-2xl);
        font-weight: 600;
        font-style: normal;
        color: var(--c-ink);
        line-height: 1.15;
    }

    .cta__desc {
        font-size: var(--text-base);
        color: var(--c-muted);
        line-height: 1.7;
        max-width: 52ch;
    }

    .cta__link {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        text-decoration: none;
        font-family: var(--font-body);
        font-weight: 500;
        font-size: var(--text-base);
        color: var(--c-accent);
        margin-top: var(--space-sm);
        transition: gap var(--dur-short) var(--ease-out);
    }

    .cta__link:hover {
        gap: var(--space-sm);
    }

    .cta__link:focus-visible {
        outline: 2px solid var(--c-focus);
        outline-offset: 3px;
        border-radius: 2px;
    }
</style>
