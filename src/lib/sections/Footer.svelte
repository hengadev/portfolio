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

<footer>
    <div class="footer-inner container__small">
        <div class="footer-grid">
            <div class="brand">
                <a href="/" class="brand-name">henga.dev</a>
                <p class="brand-tagline">{$_("footer.tagline")}</p>
                <p class="brand-no-tracking">{$_("footer.no_tracking")}</p>
                <div class="brand-contact">
                    <p class="col-label">{$_("footer.contact_label")}</p>
                    <a href="/contact" class="contact-link">
                        {$_("nav.contact")}
                    </a>
                </div>
                <div class="brand-socials">
                    {#each socials as { icon: Icon, href, label }}
                        <a
                            {href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            class="social-link"
                            data-tooltip={label}
                        >
                            <Icon size={16} />
                        </a>
                    {/each}
                </div>
            </div>

            <div class="footer-col">
                <p class="col-label">{$_("footer.nav_label")}</p>
                <nav>
                    {#each navLinks as { key, href }}
                        <a {href}>{$_(key)}</a>
                    {/each}
                </nav>
            </div>

            <div class="footer-col">
                <p class="col-label">{$_("footer.legal_label")}</p>
                <nav>
                    {#each legalLinks as { key, href }}
                        <a {href}>{$_(key)}</a>
                    {/each}
                </nav>
            </div>
        </div>

        <div class="footer-bottom">
            <p class="copyright">© {year} henga.dev</p>
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: hsl(var(--clr-light-secondary));
        border-top: 1px solid hsl(var(--clr-stroke));
        margin-top: 8rem;
    }

    .footer-inner {
        margin-inline: auto;
        padding-block: 3rem 1.75rem;
    }

    .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 3rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid hsl(var(--clr-stroke));
    }

    .brand {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .brand-name {
        font-size: 0.9375rem;
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        text-decoration: none;
        width: fit-content;
        transition: opacity 150ms ease;
    }

    .brand-name:hover {
        opacity: 0.75;
    }

    .brand-tagline {
        font-size: 0.8125rem;
        color: hsl(var(--clr-dark-ternary));
        line-height: 1.6;
        max-width: 28ch;
    }

    .brand-no-tracking {
        font-size: 0.75rem;
        color: hsl(var(--clr-dark-ternary));
        opacity: 0.6;
        margin-top: -0.25rem;
    }

    .brand-contact {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        margin-top: 0.25rem;
    }

    .contact-link {
        font-size: 0.8125rem;
        color: hsl(var(--clr-dark-secondary));
        text-decoration: none;
        width: fit-content;
        transition: color 150ms ease;
    }

    .contact-link:hover {
        color: hsl(var(--clr-dark-primary));
    }

    .brand-socials {
        display: flex;
        gap: 0.25rem;
        margin-top: 0.25rem;
    }

    .footer-col {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .col-label {
        font-size: 0.6875rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: hsl(var(--clr-dark-ternary));
        opacity: 0.55;
    }

    nav {
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
    }

    nav a {
        font-size: 0.8125rem;
        color: hsl(var(--clr-dark-secondary));
        text-decoration: none;
        width: fit-content;
        transition: color 150ms ease;
    }

    nav a:hover {
        color: hsl(var(--clr-dark-primary));
    }

    .social-link {
        position: relative;
        display: grid;
        place-content: center;
        padding: 0.35rem;
        border-radius: 0.375rem;
        color: hsl(var(--clr-dark-ternary));
        text-decoration: none;
        transition:
            color 150ms ease,
            background-color 150ms ease;
    }

    .social-link:hover {
        color: hsl(var(--clr-dark-primary));
        background-color: hsl(var(--clr-light-ternary));
    }

    .social-link::after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: calc(100% + 0.5rem);
        left: 50%;
        translate: -50% 4px;
        white-space: nowrap;
        font-size: 0.75rem;
        font-weight: 500;
        color: hsl(var(--clr-dark-primary));
        background-color: hsl(var(--clr-light-ternary));
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        pointer-events: none;
        opacity: 0;
        transition:
            opacity 150ms ease,
            translate 150ms ease;
    }

    .social-link:hover::after {
        opacity: 1;
        translate: -50% 0;
    }

    .footer-bottom {
        padding-top: 1.5rem;
    }

    .copyright {
        font-size: 0.75rem;
        color: hsl(var(--clr-dark-ternary));
        opacity: 0.55;
    }

    /* ---- Light-mode override: dark footer with white text ---- */
    :global(:root:not([data-theme="dark"])) footer {
        background-color: hsl(222 18% 12%);
        border-top-color: hsl(222 15% 17%);
    }

    :global(:root:not([data-theme="dark"])) footer .brand-name {
        color: hsl(0 0% 92%);
    }

    :global(:root:not([data-theme="dark"])) footer .brand-tagline,
    :global(:root:not([data-theme="dark"])) footer .brand-no-tracking {
        color: hsl(0 0% 60%);
    }

    :global(:root:not([data-theme="dark"])) footer .contact-link {
        color: hsl(0 0% 78%);
    }

    :global(:root:not([data-theme="dark"])) footer .contact-link:hover {
        color: hsl(0 0% 92%);
    }

    :global(:root:not([data-theme="dark"])) footer .col-label {
        color: hsl(0 0% 60%);
    }

    :global(:root:not([data-theme="dark"])) footer nav a {
        color: hsl(0 0% 78%);
    }

    :global(:root:not([data-theme="dark"])) footer nav a:hover {
        color: hsl(0 0% 92%);
    }

    :global(:root:not([data-theme="dark"])) footer .social-link {
        color: hsl(0 0% 60%);
    }

    :global(:root:not([data-theme="dark"])) footer .social-link:hover {
        color: hsl(0 0% 92%);
        background-color: hsl(222 12% 22%);
    }

    :global(:root:not([data-theme="dark"])) footer .social-link::after {
        color: hsl(0 0% 92%);
        background-color: hsl(222 12% 22%);
    }

    :global(:root:not([data-theme="dark"])) footer .copyright {
        color: hsl(0 0% 60%);
    }

    :global(:root:not([data-theme="dark"])) footer .footer-grid {
        border-bottom-color: hsl(222 15% 17%);
    }

    @media (max-width: 640px) {
        .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
        }
    }
</style>
