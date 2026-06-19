<script lang="ts">
    import { _, locale } from "svelte-i18n";
    import { FileDown, ArrowUpRight, MessageCircle, Sun, Moon, Github, Linkedin, Twitter, Instagram, UserPlus, Share2, Check } from "lucide-svelte";
    import { reveal } from "$lib/actions/reveal";
    import { theme, toggleTheme } from "$lib/theme/store";
    import { toggleLocale } from "$lib/i18n/toggle";

    const orderedSocials = [
        { icon: Github, href: "https://github.com/hengadev", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/gary-henry", label: "LinkedIn" },
        { icon: Twitter, href: "https://x.com/0xH3N64", label: "X" },
        { icon: Instagram, href: "https://www.instagram.com/itshenga/", label: "Instagram" },
    ];

    let resumeHref = $derived(
        $locale === "fr"
            ? "https://henga.dev/Henry_Gary_Resume_FR.pdf"
            : "https://henga.dev/Henry_Gary_Resume.pdf"
    );

    const vcard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "FN:Gary Henry",
        "N:Henry;Gary;;;",
        "TITLE:Freelance Developer",
        "EMAIL;TYPE=INTERNET:henry.gary@hotmail.com",
        "URL:https://henga.dev",
        "URL:https://linkedin.com/in/gary-henry",
        "END:VCARD",
    ].join("\n");
    const vcardHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;

    let copied = $state(false);

    async function share() {
        const url = "https://links.henga.dev";
        if (navigator.share) {
            try {
                await navigator.share({ title: "Gary Henry", url });
            } catch {
                // user dismissed the share sheet
            }
            return;
        }
        await navigator.clipboard.writeText(url);
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }
</script>

<svelte:head>
    <title>Gary Henry — Links</title>
    <meta name="description" content="Gary Henry — Freelance Developer. Resume, portfolio, and social links." />
    <meta name="robots" content="noindex, follow" />
</svelte:head>

<div class="top-controls">
    <button
        class="lang-toggle"
        onclick={toggleLocale}
        aria-label={$locale === "fr" ? "Switch to English" : "Passer en français"}
    >
        {$locale === "fr" ? "EN" : "FR"}
    </button>
    <button
        class="theme-toggle"
        onclick={toggleTheme}
        aria-label={$theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
        {#if $theme === "dark"}
            <Sun size={16} />
        {:else}
            <Moon size={16} />
        {/if}
    </button>
</div>

<button class="share-toggle" onclick={share} aria-label={$_("links.share")}>
    {#if copied}
        <Check size={16} />
    {:else}
        <Share2 size={16} />
    {/if}
</button>
{#if copied}
    <span class="copied-toast">{$_("links.copied")}</span>
{/if}

<div class="links-page container__small">
    <div class="profile" use:reveal>
        <img class="avatar" src="/profile.jpg" alt="Gary Henry" />
        <h1 class="name">Gary Henry</h1>
        <p class="tagline">{$_("links.tagline")}</p>
        <span class="status-badge">{$_("links.status")}</span>
    </div>

    <div class="socials" use:reveal={{ delay: 75 }}>
        {#each orderedSocials as { icon: Icon, href, label }}
            <a {href} target="_blank" rel="noopener noreferrer" aria-label={label} class="social-icon">
                <Icon size={20} />
            </a>
        {/each}
    </div>

    <div class="actions" use:reveal={{ delay: 150 }}>
        <a href={vcardHref} download="Gary-Henry.vcf" class="cta-primary action">
            <UserPlus size={18} />
            {$_("links.saveContact")}
        </a>
        <a href={resumeHref} target="_blank" rel="noopener noreferrer" class="cta-secondary action">
            <FileDown size={18} />
            {$_("links.resume")}
        </a>
        <a href="https://henga.dev" class="cta-secondary action">
            <ArrowUpRight size={18} />
            {$_("links.portfolio")}
        </a>
        <a href="https://henga.dev/contact" class="cta-secondary action">
            <MessageCircle size={18} />
            {$_("links.contact")}
        </a>
    </div>
</div>

<style>
    .top-controls {
        position: fixed;
        top: 1.25rem;
        right: 1.25rem;
        display: flex;
        gap: 0.5rem;
        z-index: 10;
    }

    .theme-toggle {
        display: grid;
        place-content: center;
        width: 2.25rem;
        height: 2.25rem;
        color: hsl(var(--clr-dark-secondary));
        background: hsl(var(--clr-light-primary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 0.375rem;
        transition: color 150ms ease, border-color 150ms ease, background-color 150ms ease;
    }

    .theme-toggle:hover {
        color: hsl(var(--clr-dark-primary));
        border-color: hsl(var(--clr-accent));
        background-color: hsl(var(--clr-light-secondary));
    }

    .lang-toggle {
        display: grid;
        place-content: center;
        width: 2.25rem;
        height: 2.25rem;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.03em;
        color: hsl(var(--clr-dark-secondary));
        background: hsl(var(--clr-light-primary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 0.375rem;
        transition: color 150ms ease, border-color 150ms ease, background-color 150ms ease;
    }

    .lang-toggle:hover {
        color: hsl(var(--clr-dark-primary));
        border-color: hsl(var(--clr-accent));
        background-color: hsl(var(--clr-light-secondary));
    }

    .share-toggle {
        position: fixed;
        top: 1.25rem;
        left: 1.25rem;
        display: grid;
        place-content: center;
        width: 2.25rem;
        height: 2.25rem;
        color: hsl(var(--clr-dark-secondary));
        background: hsl(var(--clr-light-primary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 0.375rem;
        transition: color 150ms ease, border-color 150ms ease, background-color 150ms ease;
        z-index: 10;
    }

    .share-toggle:hover {
        color: hsl(var(--clr-dark-primary));
        border-color: hsl(var(--clr-accent));
        background-color: hsl(var(--clr-light-secondary));
    }

    .copied-toast {
        position: fixed;
        top: 1.5rem;
        left: 3.75rem;
        font-size: 0.8125rem;
        color: hsl(var(--clr-dark-primary));
        background: hsl(var(--clr-light-primary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 0.375rem;
        padding: 0.375rem 0.625rem;
        z-index: 10;
    }

    .links-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        justify-content: center;
        gap: 2.5rem;
        padding-block: 4rem;
        margin-inline: auto;
        max-width: 420px;
    }

    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        text-align: center;
    }

    .avatar {
        width: 128px;
        height: 128px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid hsl(var(--clr-light-fournary));
        margin-bottom: 0.75rem;
    }

    .name {
        font-size: 1.5rem;
        font-weight: 700;
        color: hsl(var(--clr-dark-primary));
    }

    .tagline {
        font-size: 0.9375rem;
        color: hsl(var(--clr-dark-secondary));
    }

    .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.8125rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-secondary));
        background-color: hsl(145 60% 92%);
        border: 1px solid hsl(145 50% 80%);
        border-radius: 999px;
        padding: 0.3rem 0.85rem;
        margin-top: 0.25rem;
    }

    :global([data-theme="dark"]) .status-badge {
        background-color: hsl(145 30% 15%);
        border-color: hsl(145 40% 25%);
        color: hsl(145 50% 72%);
    }

    .status-badge::before {
        content: "";
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background: hsl(145 70% 40%);
        flex-shrink: 0;
        animation: pulse-dot 2s ease-in-out infinite;
    }

    :global([data-theme="dark"]) .status-badge::before {
        background: hsl(145 70% 55%);
    }

    @keyframes pulse-dot {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }

    .socials {
        display: flex;
        gap: 0.75rem;
    }

    .social-icon {
        display: grid;
        place-content: center;
        width: 2.5rem;
        height: 2.5rem;
        color: hsl(var(--clr-dark-secondary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 50%;
        transition: color 150ms ease, border-color 150ms ease, background-color 150ms ease;
    }

    .social-icon:hover,
    .social-icon:focus-visible {
        color: hsl(var(--clr-dark-primary));
        border-color: hsl(var(--clr-accent));
        background-color: hsl(var(--clr-light-secondary));
    }

    .actions {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        width: 100%;
    }

    .action {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        text-decoration: none;
        font-weight: 500;
        font-size: var(--p);
        padding: 0.75rem 1.5rem;
        border-radius: 0.375rem;
        transition: background-color 150ms ease, border-color 150ms ease;
    }

    .action.cta-primary {
        color: hsl(var(--clr-light-primary));
        background-color: hsl(var(--clr-dark-primary));
    }

    .action.cta-primary:hover,
    .action.cta-primary:focus-visible {
        background-color: hsl(var(--clr-dark-secondary));
        outline: 2px solid hsl(var(--clr-accent));
        outline-offset: 2px;
    }

    .action.cta-secondary {
        color: hsl(var(--clr-dark-primary));
        background-color: hsl(var(--clr-light-primary));
        border: 2px solid hsl(var(--clr-light-fournary));
    }

    .action.cta-secondary:hover,
    .action.cta-secondary:focus-visible {
        border-color: hsl(var(--clr-accent));
        background-color: hsl(var(--clr-light-secondary));
        outline: none;
    }

    @media (max-width: 768px) {
        .links-page {
            padding-block: 3rem;
        }
    }
</style>
