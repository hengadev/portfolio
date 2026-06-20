<svelte:options runes />
<script lang="ts">
    import { _, locale } from "svelte-i18n";
    import { ArrowUpRight } from "lucide-svelte";
    import ProjectDetail from "$lib/components/ProjectDetail.svelte";
    // import ProjectBento from "$lib/components/ProjectBento.svelte";

    const DEMO_ROLES = [
        {
            labelKey: 'leviosa.demo_admin_label',
            descKey: 'leviosa.demo_admin_desc',
            url: 'https://leviosa.henga.dev/auth',
            email: 'admin@demo.henga.dev',
            password: 'admin',
        },
        {
            labelKey: 'leviosa.demo_partner_label',
            descKey: 'leviosa.demo_partner_desc',
            url: 'https://leviosa.henga.dev/auth',
            email: 'partner@demo.henga.dev',
            password: 'partner',
        },
        {
            labelKey: 'leviosa.demo_client_label',
            descKey: 'leviosa.demo_client_desc',
            url: 'https://leviosa.henga.dev/auth',
            email: 'client@demo.henga.dev',
            password: 'client',
        },
    ];
</script>

{#key $locale}
<ProjectDetail
    title="Leviosa"
    tagline={$_('projects.leviosa')}
    year="2024"
    status="Complete"
    role={["Full-Stack Developer"]}
    team={["Gary HENRY"]}
    stack={["Go", "SvelteKit", "Stripe", "Vault", "RabbitMQ"]}
    logo="/logos/leviosa.png"
    demoAnchor="explore-demo"
    githubUrl="https://github.com/Leviosa-care/leviosa"
>
    <section class="story-section">
        <h2 class="section-title">{$_('detail.overview')}</h2>
        <p>{$_('leviosa.overview_1')}</p>
    </section>

    <!-- <ProjectBento gradient="linear-gradient(135deg, hsl(160 60% 30%), hsl(200 70% 40%))" /> -->

    <section class="story-section">
        <h2 class="section-title">{$_('detail.learned')}</h2>
        <p>{$_('leviosa.learned_1')}</p>
        <p>{$_('leviosa.learned_2')}</p>
        <p>{$_('leviosa.learned_3')}</p>
        <p>{$_('leviosa.learned_4')}</p>
    </section>

    <section class="story-section demo-section" id="explore-demo">
        <h2 class="section-title">{$_('detail.explore_demo_title')}</h2>
        <p class="demo-subtitle">{$_('detail.explore_demo_subtitle')}</p>
        <div class="role-grid">
            {#each DEMO_ROLES as r}
            <div class="role-card">
                <div class="role-card__header">
                    <span class="role-label">{$_(r.labelKey)}</span>
                    <a href={r.url} target="_blank" rel="noopener noreferrer" class="open-btn">
                        {$_('detail.open_role')} <ArrowUpRight size={12} />
                    </a>
                </div>
                <p class="role-desc">{$_(r.descKey)}</p>
                <div class="credentials">
                    <span class="cred-item"><span class="cred-key">email</span>{r.email}</span>
                    <span class="cred-item"><span class="cred-key">password</span>{r.password}</span>
                </div>
            </div>
            {/each}
        </div>
    </section>
</ProjectDetail>
{/key}

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

    /* ── Explore demo section ── */

    .demo-section {
        scroll-margin-top: 20rem;
    }

    .demo-subtitle {
        color: hsl(var(--clr-dark-ternary));
        font-size: 0.9rem;
        line-height: 1.65;
    }

    .role-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-top: 0.25rem;
    }

    .role-card {
        display: grid;
        gap: 0.6rem;
        padding: 1rem 1.1rem;
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 0.5rem;
        background-color: hsl(var(--clr-light-secondary));
    }

    .role-card__header {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 0.5rem;
    }

    .role-label {
        font-size: 0.85rem;
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    .open-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.8rem;
        font-weight: 500;
        padding: 0.25rem 0.65rem;
        border-radius: 0.3rem;
        border: 1px solid hsl(var(--clr-light-fournary));
        background-color: hsl(var(--clr-light-primary));
        color: hsl(var(--clr-dark-secondary));
        text-decoration: none;
        transition: border-color 120ms ease, color 120ms ease;
    }

    .open-btn:hover {
        border-color: hsl(var(--clr-dark-ternary));
        color: hsl(var(--clr-dark-primary));
    }

    .role-desc {
        font-size: 0.85rem;
        color: hsl(var(--clr-dark-ternary));
        line-height: 1.55;
    }

    .credentials {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        margin-top: 0.15rem;
        padding-top: 0.6rem;
        border-top: 1px solid hsl(var(--clr-light-fournary));
    }

    .cred-item {
        display: flex;
        gap: 0.5rem;
        font-size: 0.8rem;
        font-family: monospace;
        color: hsl(var(--clr-dark-secondary));
    }

    .cred-key {
        color: hsl(var(--clr-dark-ternary));
        min-width: 4.5rem;
    }
</style>
