<script lang="ts">
    import { Github, Twitter, Linkedin, Instagram } from "lucide-svelte";

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    const socials = [
        { icon: Github, href: "https://github.com/GaryHY", label: "GitHub" },
        { icon: Twitter, href: "https://x.com/", label: "X" },
        { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
        { icon: Instagram, href: "https://www.instagram.com/itshenga/", label: "Instagram" },
    ];

    const year = new Date().getFullYear();
</script>

<footer>
    <div class="footer-inner container__small">
        <p class="copyright">© {year} henga.dev</p>

        <nav>
            {#each navLinks as { name, href }}
                <a {href}>{name}</a>
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
</footer>

<style>
    footer {
        background-color: hsl(var(--clr-grey-700));
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
        color: hsl(var(--clr-light-primary) / 0.55);
    }

    nav {
        display: flex;
        gap: 0.25rem;
        justify-content: center;
    }

    nav a {
        font-size: 0.85rem;
        color: hsl(var(--clr-light-primary) / 0.65);
        text-decoration: none;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        transition: color 150ms ease;
    }

    nav a:hover {
        color: hsl(var(--clr-light-primary));
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
        color: hsl(var(--clr-light-primary) / 0.6);
        text-decoration: none;
        transition:
            color 150ms ease,
            background-color 150ms ease;
    }

    .social-link:hover {
        color: hsl(var(--clr-light-primary));
        background-color: hsl(var(--clr-light-primary) / 0.08);
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
        background-color: hsl(var(--clr-light-primary));
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
</style>
