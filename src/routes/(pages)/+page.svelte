<script lang="ts">
    import Cards from "$lib/components/Cards.svelte";
    import Card from "$lib/components/Card.svelte";
    import Testimonials from "$lib/sections/Testimonials.svelte";
    import { _, locale } from "svelte-i18n";
    import { ArrowRight } from "lucide-svelte";
    import { reveal } from "$lib/actions/reveal";
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
    <section class="section hero container__small">
        <span class="hero__availability" use:reveal>
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
        <div class="hero__ctas flex" style="--gap: 1rem; justify-content: center;">
            <a href="/contact" class="cta-primary">{$_('home.hero.cta_primary')}</a>
            <a href="/projects" class="cta-secondary">{$_('home.hero.cta_secondary')}</a>
        </div>
    </section>

    <section class="section about container__small">
        <div class="section__header about__header" use:reveal>
            <h2 class="section__title">{$_('home.about.title')}</h2>
        </div>
        <div class="about__body">
            <div class="about__photo" use:reveal>
                <img src="/toji_locks.jpg" alt="Profile photo placeholder" />
            </div>
            <div class="about__content grid" style="--gap: 1.25rem;">
                <p class="about__bio" use:reveal={{ delay: 0 }}>
                    {$_('home.about.bio1')}
                </p>
                <p class="about__bio" use:reveal={{ delay: 100 }}>
                    {$_('home.about.bio2')}
                </p>
                <p class="about__bio" use:reveal={{ delay: 200 }}>
                    {$_('home.about.bio3')}
                </p>
            </div>
        </div>
    </section>

    <section class="section process container__small" use:reveal>
        <div class="section__header process__header">
            <h2 class="section__title">{$_('home.process.title')}</h2>
            <p class="section__subtitle">{$_('home.process.subtitle')}</p>
        </div>
        <div class="process__steps">
            <div class="process__step" use:reveal={{ delay: 0 }}>
                <span class="process__number">01</span>
                <div class="process__step-content">
                    <h3 class="process__step-title">{$_('home.process.step1.title')}</h3>
                    <p class="process__step-desc">{$_('home.process.step1.description')}</p>
                </div>
            </div>
            <div class="process__step" use:reveal={{ delay: 80 }}>
                <span class="process__number">02</span>
                <div class="process__step-content">
                    <h3 class="process__step-title">{$_('home.process.step2.title')}</h3>
                    <p class="process__step-desc">{$_('home.process.step2.description')}</p>
                </div>
            </div>
            <div class="process__step" use:reveal={{ delay: 160 }}>
                <span class="process__number">03</span>
                <div class="process__step-content">
                    <h3 class="process__step-title">{$_('home.process.step3.title')}</h3>
                    <p class="process__step-desc">{$_('home.process.step3.description')}</p>
                </div>
            </div>
            <div class="process__step" use:reveal={{ delay: 240 }}>
                <span class="process__number">04</span>
                <div class="process__step-content">
                    <h3 class="process__step-title">{$_('home.process.step4.title')}</h3>
                    <p class="process__step-desc">{$_('home.process.step4.description')}</p>
                </div>
            </div>
        </div>

    </section>

    <section class="section projects">
        <div class="section__header section__header--row container__small" use:reveal>
            <div class="section__header-top">
                <h2 class="section__title">{$_('home.projects.title')}</h2>
                <a href="/projects" class="section__link flex" style="--gap: 0.375rem; align-items: center;">
                    {$_('home.projects.link')} <ArrowRight size={16} />
                </a>
            </div>
            <p class="section__subtitle">{$_('home.projects.subtitle')}</p>
        </div>
        <Cards cards={projects} />
    </section>

    <Testimonials />

    <section class="section experiments container__small">
        <div class="section__header section__header--row" use:reveal>
            <div class="section__header-top">
                <h2 class="section__title">{$_('home.experiments.title')}</h2>
                <a href="/experiments" class="section__link flex" style="--gap: 0.375rem; align-items: center;">
                    {$_('home.experiments.link')} <ArrowRight size={16} />
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

    {#if data.latestPosts.length > 0}
    <section class="section articles container__small">
        <div class="section__header section__header--row" use:reveal>
            <div class="section__header-top">
                <h2 class="section__title">{$_('home.posts.title')}</h2>
                <a href="/blog" class="section__link flex" style="--gap: 0.375rem; align-items: center;">
                    {$_('home.posts.link')} <ArrowRight size={16} />
                </a>
            </div>
            <p class="section__subtitle">{$_('home.posts.subtitle')}</p>
        </div>
        <ul class="article-list">
            {#each data.latestPosts as post, i}
                <li class="article-item" use:reveal={{ delay: i * 80 }}>
                    <a href="/blog/{post.slug}" class="article-link">
                        <time class="article__date" datetime={post.date}>{formatDate(post.date)}</time>
                        <h3 class="article__title">
                            {post.title}
                            <ArrowRight size={16} class="article__arrow" />
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

    <section class="section cta container__small" use:reveal>
        <h2 class="cta__title">{$_('home.cta.title')}</h2>
        <p class="cta__desc">
            {$_('home.cta.desc').split('\n')[0]}<br />
            {$_('home.cta.desc').split('\n')[1]}
        </p>
        <a href="/contact" class="cta__btn">{$_('home.cta.btn')}</a>
    </section>
</div>

<style>
    .page {
        display: grid;
        gap: 9rem;
        padding-bottom: 6rem;
    }

    /* ── Hero entrance ── */
    @keyframes fade-up {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    @media (prefers-reduced-motion: no-preference) {
        .hero__availability {
            animation: fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hero__title {
            animation: fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) 75ms both;
        }
        .hero__subtitle {
            animation: fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) 150ms both;
        }
        .badges {
            animation: fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) 225ms both;
        }
        .hero__ctas {
            animation: fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) 300ms both;
        }
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

    .hero__availability {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.8rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-secondary));
        background-color: hsl(145 60% 92%);
        border: 1px solid hsl(145 50% 80%);
        border-radius: 999px;
        padding: 0.3rem 0.85rem;
    }

    :global([data-theme="dark"]) .hero__availability {
        background-color: hsl(145 30% 15%);
        border-color: hsl(145 40% 25%);
        color: hsl(145 50% 72%);
    }

    :global([data-theme="dark"]) .availability__dot {
        background-color: hsl(145 70% 55%);
    }

    .availability__dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: hsl(145 70% 40%);
        flex-shrink: 0;
        animation: pulse-dot 2s ease-in-out infinite;
    }

    @keyframes pulse-dot {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
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
        border-radius: 0.375rem;
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
        background-color: hsl(var(--clr-light-primary));
        padding: 0.65rem 1.5rem;
        border-radius: 0.375rem;
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

    .about__body {
        display: grid;
        grid-template-columns: 200px 1fr;
        gap: 2.5rem;
        align-items: start;
    }

    .about__photo {
        width: 200px;
        aspect-ratio: 3 / 4;
        border-radius: 0.75rem;
        flex-shrink: 0;
        overflow: hidden;
    }

    .about__photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .about__bio {
        color: hsl(var(--clr-dark-secondary));
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

    .process__header {
        margin-inline: 0;
    }

    /* ── Process ── */
    .process {
        margin-inline: auto;
        display: grid;
        gap: 2rem;
    }

    .process__steps {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }

    .process__step {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        padding: 1.75rem 1.5rem;
        background-color: hsl(var(--clr-light-primary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-top: 2px solid hsl(var(--clr-dark-primary));
        border-radius: 0.75rem;
        transition: box-shadow 200ms ease, transform 200ms ease;
    }

    .process__step:not(:last-child)::after {
        content: '→';
        position: absolute;
        right: -0.85rem;
        top: 1.6rem;
        font-size: 0.9rem;
        color: hsl(var(--clr-light-fournary));
        z-index: 1;
        pointer-events: none;
    }

    .process__step:hover {
        box-shadow: 0 8px 28px hsl(0 0% 0% / 0.08);
        transform: translateY(-2px);
    }

    .process__number {
        font-size: 1.75rem;
        font-weight: 700;
        letter-spacing: -0.03em;
        color: hsl(var(--clr-dark-primary));
        background: none;
        border: none;
        border-radius: 0;
        width: auto;
        height: auto;
        display: block;
        line-height: 1;
    }

    .process__step-content {
        display: grid;
        gap: 0.5rem;
        flex: 1;
    }

    .process__step-title {
        font-size: 1rem;
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        line-height: 1.3;
    }

    .process__step-desc {
        font-size: 0.875rem;
        color: hsl(var(--clr-dark-ternary));
        line-height: 1.65;
    }


    @media (max-width: 900px) {
        .process__steps {
            grid-template-columns: repeat(2, 1fr);
        }
        .process__step::after {
            display: none;
        }
    }

    @media (max-width: 520px) {
        .process__steps {
            grid-template-columns: 1fr;
        }
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

    /* ── Articles ── */
    .articles {
        margin-inline: auto;
    }

    .articles .section__header {
        margin-bottom: 3rem;
    }

    .article-list {
        display: grid;
        gap: 0.75rem;
    }

    .article-item {
        background-color: hsl(var(--clr-light-primary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 0.75rem;
        transition: border-color 150ms ease, box-shadow 150ms ease;
    }

    .article-item:hover {
        border-color: hsl(var(--clr-dark-ternary));
        box-shadow: 0 4px 16px hsl(0 0% 0% / 0.06);
    }

    .article-link {
        display: grid;
        gap: 0.4rem;
        padding: 1.5rem;
        text-decoration: none;
        transition: padding-left 150ms ease;
    }

    .article-link:hover {
        padding-left: 2rem;
    }

    .article__date {
        font-size: 0.8rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-ternary));
    }

    .article__title {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-size: var(--h3);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        line-height: 1.3;
    }

    :global(.article__arrow) {
        flex-shrink: 0;
        opacity: 0;
        transform: translateX(-4px);
        transition: opacity 150ms ease, transform 150ms ease;
        color: hsl(var(--clr-dark-primary));
    }

    .article-link:hover :global(.article__arrow) {
        opacity: 1;
        transform: translateX(0);
    }

    .article__description {
        font-size: 0.9rem;
        color: hsl(var(--clr-dark-ternary));
        line-height: 1.6;
    }

    .article__tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.375rem;
        margin-top: 0.125rem;
    }

    .tag {
        font-size: 0.7rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-secondary));
        background-color: hsl(var(--clr-light-secondary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 999px;
        padding: 0.15rem 0.55rem;
    }

    /* ── CTA ── */
    .cta {
        margin-inline: auto;
        display: grid;
        gap: 1.25rem;
        text-align: center;
        justify-items: center;
    }

    .cta__title {
        font-size: var(--h2);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    .cta__desc {
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.7;
    }

    .cta__btn {
        text-decoration: none;
        font-weight: 500;
        font-size: var(--p);
        color: hsl(var(--clr-light-primary));
        background-color: hsl(var(--clr-dark-primary));
        padding: 0.65rem 1.5rem;
        border-radius: 0.375rem;
        margin-top: 0.5rem;
        transition: background-color 150ms ease;
    }

    .cta__btn:hover {
        background-color: hsl(var(--clr-dark-secondary));
    }
</style>
