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

    const legalLinks = [
        { key: "footer.mentions", href: "/mentions-legales" },
        { key: "footer.privacy", href: "/politique-de-confidentialite" },
    ];

    const year = new Date().getFullYear();
</script>

<footer>
    <div class="footer-inner container__small">
        <p class="copyright">© {year} henga.dev</p>

        <nav>
            {#each navLinks as { key, href }}
                <a {href}>{$_(key)}</a>
            {/each}
        </nav>

        <div class="socials">
            {#each socials as { icon: Icon, href, label }}
                <a
                    {href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    class="social-link"
                    data-tooltip={label}
                >
                    <Icon size={18} />
                </a>
            {/each}
        </div>
    </div>

    <div class="footer-legal container__small">
        {#each legalLinks as { key, href }}
            <a {href}>{$_(key)}</a>
        {/each}
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
        padding-block: 2rem;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
    }

    .copyright {
        font-size: 0.85rem;
        color: hsl(var(--clr-dark-ternary));
    }

    nav {
        display: flex;
        gap: 0.25rem;
        justify-content: center;
    }

    nav a {
        font-size: 0.85rem;
        color: hsl(var(--clr-dark-ternary));
        text-decoration: none;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        transition: color 150ms ease;
    }

    nav a:hover {
        color: hsl(var(--clr-dark-primary));
    }

    .socials {
        display: flex;
        gap: 0.25rem;
        justify-content: flex-end;
    }

    .social-link {
        position: relative;
        display: grid;
        place-content: center;
        padding: 0.4rem;
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

    .footer-legal {
        margin-inline: auto;
        padding-bottom: 1.25rem;
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    .footer-legal a {
        font-size: 0.75rem;
        color: hsl(var(--clr-dark-ternary));
        text-decoration: none;
        opacity: 0.7;
        transition: opacity 150ms ease;
    }

    .footer-legal a:hover {
        opacity: 1;
    }
</style>
