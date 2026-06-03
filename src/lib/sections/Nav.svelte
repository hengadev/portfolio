<script lang="ts">
    import { page } from "$app/stores";
    import { Github, Twitter, Linkedin, Instagram, FileDown } from "lucide-svelte";

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Experiments", href: "/experiments" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    const socials = [
        { icon: Github, href: "https://github.com/GaryHY", label: "GitHub" },
        { icon: Twitter, href: "https://x.com/", label: "X" },
        { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
        { icon: Instagram, href: "https://www.instagram.com/itshenga/", label: "Instagram" },
    ];

    let pathSlug = $derived(`~${$page.url.pathname}`);

    let currentPath = $derived($page.url.pathname);

    function isActive(href: string): boolean {
        if (href === "/") return currentPath === "/";
        return currentPath.startsWith(href);
    }
</script>

<header>
    <div class="nav-inner container">
        <a href="/" class="terminal-path">
            <span>{pathSlug}</span><span class="cursor"></span>
        </a>

        <nav>
            <ul class="nav-links">
                {#each navLinks as { name, href }}
                    <li>
                        <a {href} class:active={isActive(href)}>{name}</a>
                    </li>
                {/each}
            </ul>
        </nav>

        <div class="social-links">
            {#each socials as { icon: Icon, href, label }}
                <a
                    {href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    class="icon-link"
                    data-tooltip={label}
                >
                    <Icon size={20} />
                </a>
            {/each}
            <a href="/resume.pdf" download aria-label="Download resume" class="icon-link" data-tooltip="Resume">
                <FileDown size={20} />
            </a>
        </div>
    </div>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        padding-block: 1.25rem;
        background-color: hsl(var(--clr-light-primary) / 0.85);
        backdrop-filter: blur(12px);
    }

    .nav-inner {
        margin-inline: auto;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
    }

    /* Terminal path */
    a.terminal-path {
        text-decoration: none;
        cursor: pointer;
    }

    .terminal-path {
        display: flex;
        align-items: center;
        font-family: "Courier New", Courier, monospace;
        font-size: 1rem;
        color: hsl(var(--clr-dark-secondary));
    }

    .cursor {
        display: inline-block;
        width: 0.55em;
        height: 1.1em;
        background-color: hsl(var(--clr-dark-secondary));
        vertical-align: text-bottom;
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    /* Navigation links */
    .nav-links {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .nav-links a {
        display: block;
        font-size: 1rem;
        font-weight: 500;
        color: hsl(var(--clr-grey-400));
        text-decoration: none;
        padding: 0.4rem 0.75rem;
        border-radius: 0.375rem;
        transition:
            color 150ms ease,
            background-color 150ms ease;
    }

    .nav-links a:hover {
        color: hsl(var(--clr-dark-primary));
        background-color: hsl(var(--clr-light-secondary));
    }

    .nav-links a.active {
        color: hsl(var(--clr-dark-primary));
        font-weight: 600;
    }

    /* Social icons */
    .social-links {
        display: flex;
        align-items: center;
        gap: 0.125rem;
        margin-left: auto;
        width: fit-content;
    }

    .icon-link {
        position: relative;
        display: grid;
        place-content: center;
        padding: 0.5rem;
        border-radius: 0.375rem;
        color: hsl(var(--clr-grey-400));
        text-decoration: none;
        transition:
            color 150ms ease,
            background-color 150ms ease;
    }

    .icon-link:hover {
        color: hsl(var(--clr-dark-primary));
        background-color: hsl(var(--clr-light-secondary));
    }

    .icon-link::after {
        content: attr(data-tooltip);
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 50%;
        translate: -50% 0;
        white-space: nowrap;
        font-size: 0.75rem;
        font-weight: 500;
        color: hsl(var(--clr-light-primary));
        background-color: hsl(var(--clr-dark-primary));
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        pointer-events: none;
        opacity: 0;
        translate: -50% -4px;
        transition:
            opacity 150ms ease,
            translate 150ms ease;
    }

    .icon-link:hover::after {
        opacity: 1;
        translate: -50% 0;
    }
</style>
