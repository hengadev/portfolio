<script lang="ts">
    import { _ } from "svelte-i18n";
    import { Github, Twitter, Linkedin, Instagram } from "lucide-svelte";

    const navLinks = [
        { key: "nav.home", href: "/" },
        { key: "nav.projects", href: "/projects" },
        { key: "nav.experiments", href: "/experiments" },
        { key: "nav.blog", href: "/blog" },
        { key: "nav.contact", href: "/contact" },
    ];

    const legalLinks = [
        { key: "footer.mentions", href: "/mentions-legales" },
        { key: "footer.privacy", href: "/politique-de-confidentialite" },
    ];

    const socials = [
        { icon: Github, href: "https://github.com/hengadev", label: "GitHub" },
        { icon: Twitter, href: "https://x.com/0xH3N64", label: "X" },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/garyhenryml",
            label: "LinkedIn",
        },
        {
            icon: Instagram,
            href: "https://www.instagram.com/itshenga/",
            label: "Instagram",
        },
    ];

    const year = new Date().getFullYear();
</script>

<footer class="footer">
    <div class="footer__inner">
        <div class="footer__grid">
            <!-- Left: signoff + tagline -->
            <div class="footer__brand">
                <p class="footer__close">Yours,</p>
                <p class="footer__sign">&mdash; Gary</p>
                <p class="footer__tagline">{$_("footer.tagline")}</p>
                <p class="footer__no-tracking">{$_("footer.no_tracking")}</p>

                <div class="footer__socials">
                    {#each socials as { icon: Icon, href, label }}
                        <a
                            {href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            class="footer__icon"
                        >
                            <Icon size={15} />
                        </a>
                    {/each}
                </div>
            </div>

            <!-- Middle: navigation -->
            <div class="footer__col">
                <p class="footer__label">{$_("footer.nav_label")}</p>
                <nav>
                    {#each navLinks as { key, href }}
                        <a {href}>{$_(key)}</a>
                    {/each}
                </nav>
            </div>

            <!-- Right: contact + legal -->
            <div class="footer__col">
                <p class="footer__label">{$_("footer.contact_label")}</p>
                <a href="/contact" class="footer__contact-link">
                    {$_("nav.contact")}
                </a>
                <p class="footer__label" style="margin-top: var(--space-md)">{$_("footer.legal_label")}</p>
                <nav>
                    {#each legalLinks as { key, href }}
                        <a {href}>{$_(key)}</a>
                    {/each}
                </nav>
            </div>
        </div>

        <div class="footer__bottom">
            <p class="footer__copy">&copy; {year} henga.dev</p>
        </div>
    </div>
</footer>

<style>
    .footer {
        background-color: var(--c-paper-2);
        border-top: 1px solid var(--c-rule);
        margin-top: var(--space-3xl);
    }

    .footer__inner {
        max-width: 72rem;
        width: 90%;
        margin-inline: auto;
        padding-block: var(--space-2xl) var(--space-lg);
    }

    .footer__grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: var(--space-2xl);
        padding-bottom: var(--space-xl);
        border-bottom: 1px solid var(--c-rule);
    }

    /* ── Brand column ── */
    .footer__brand {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .footer__close {
        font-size: var(--text-lg);
        color: var(--c-ink);
        line-height: 1.4;
    }

    .footer__sign {
        font-weight: 600;
        font-size: var(--text-md);
        color: var(--c-ink);
        margin-top: calc(-1 * var(--space-xs));
    }

    .footer__tagline {
        font-size: var(--text-sm);
        color: var(--c-neutral);
        line-height: 1.6;
        max-width: 28ch;
        margin-top: var(--space-xs);
    }

    .footer__no-tracking {
        font-size: var(--text-xs);
        color: var(--c-neutral);
        opacity: 0.6;
        margin-top: calc(-1 * var(--space-2xs));
    }

    .footer__socials {
        display: flex;
        gap: 2px;
        margin-top: var(--space-xs);
    }

    .footer__icon {
        display: grid;
        place-content: center;
        padding: var(--space-2xs);
        border-radius: 0.25rem;
        color: var(--c-neutral);
        text-decoration: none;
        transition:
            color var(--dur-short) var(--ease-out),
            background-color var(--dur-short) var(--ease-out);
    }

    .footer__icon:hover {
        color: var(--c-ink);
        background-color: var(--c-paper);
    }

    .footer__icon:focus-visible {
        outline: 2px solid var(--c-focus);
        outline-offset: 1px;
    }

    /* ── Link columns ── */
    .footer__col {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
    }

    .footer__label {
        font-size: var(--text-xs);
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--c-neutral);
        opacity: 0.7;
    }

    .footer__col nav {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .footer__col nav a,
    .footer__contact-link {
        font-size: var(--text-sm);
        color: var(--c-neutral);
        text-decoration: none;
        width: fit-content;
        transition: color var(--dur-short) var(--ease-out);
    }

    .footer__col nav a:hover,
    .footer__contact-link:hover {
        color: var(--c-ink);
    }

    .footer__col nav a:focus-visible,
    .footer__contact-link:focus-visible {
        outline: 2px solid var(--c-focus);
        outline-offset: 2px;
        border-radius: 2px;
    }

    /* ── Bottom ── */
    .footer__bottom {
        padding-top: var(--space-lg);
    }

    .footer__copy {
        font-size: var(--text-xs);
        color: var(--c-rule);
    }

    @media (max-width: 640px) {
        .footer__grid {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
        }
    }
</style>
