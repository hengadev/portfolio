<script lang="ts">
    import { page } from "$app/stores";
    import { _, locale } from "svelte-i18n";
    import { toggleLocale } from "$lib/i18n/toggle";
    import {
        Github,
        Twitter,
        Linkedin,
        Instagram,
        FileDown,
        Sun,
        Moon,
        Menu,
        X,
    } from "lucide-svelte";
    import { theme, toggleTheme } from "$lib/theme/store";
    import { browser } from "$app/environment";

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

    let pathSlug = $derived(`~${$page.url.pathname}`);
    let currentPath = $derived($page.url.pathname);
    let menuOpen = $state(false);

    function isActive(href: string): boolean {
        if (href === "/") return currentPath === "/";
        return currentPath.startsWith(href);
    }

    function closeMenu() {
        menuOpen = false;
    }

    $effect(() => {
        if (browser) {
            document.body.style.overflow = menuOpen ? "hidden" : "";
            return () => {
                document.body.style.overflow = "";
            };
        }
    });
</script>

<header>
    <div class="nav-inner container">
        <a href="/" class="terminal-path">
            <span>{pathSlug}</span><span class="cursor"></span>
        </a>

        <nav class="desktop-nav">
            <ul class="nav-links">
                {#each navLinks as { key, href }}
                    <li>
                        <a {href} class:active={isActive(href)}>{$_(key)}</a>
                    </li>
                {/each}
            </ul>
        </nav>

        <div class="nav-right">
            <div class="desktop-social social-links">
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
                <a
                    href={$locale === "fr" ? "/Henry_Gary_Resume_FR.pdf" : "/Henry_Gary_Resume.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open resume in new tab"
                    class="icon-link"
                    data-tooltip={$locale === "fr" ? "CV" : "Resume"}
                >
                    <FileDown size={20} />
                </a>
                <div class="lang-separator" aria-hidden="true"></div>
                <button
                    class="lang-toggle"
                    onclick={toggleTheme}
                    aria-label={$theme === "dark"
                        ? "Switch to light mode"
                        : "Switch to dark mode"}
                    data-tooltip={$theme === "dark" ? "Light" : "Dark"}
                >
                    {#if $theme === "dark"}
                        <Sun size={16} />
                    {:else}
                        <Moon size={16} />
                    {/if}
                </button>
                <button
                    class="lang-toggle"
                    onclick={toggleLocale}
                    aria-label={$locale === "fr"
                        ? "Switch to English"
                        : "Passer en français"}
                    data-tooltip={$locale === "fr" ? "English" : "Français"}
                >
                    {$locale === "fr" ? "EN" : "FR"}
                </button>
            </div>

            <button
                class="burger-btn"
                onclick={() => (menuOpen = !menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-drawer"
            >
                <span class="burger-icon" class:open={menuOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>
        </div>
    </div>
</header>

<!-- Overlay -->
<div
    class="mobile-overlay"
    class:visible={menuOpen}
    onclick={closeMenu}
    role="presentation"
    aria-hidden="true"
></div>

<!-- Mobile drawer -->
<aside
    id="mobile-drawer"
    class="mobile-drawer"
    class:open={menuOpen}
    aria-hidden={!menuOpen}
>
    <div class="drawer-header">
        <a href="/" class="terminal-path drawer-path" onclick={closeMenu}>
            <span>~/</span><span class="cursor"></span>
        </a>
        <button class="drawer-close" onclick={closeMenu} aria-label="Close menu">
            <X size={20} />
        </button>
    </div>

    <nav class="drawer-nav">
        <ul class="drawer-links">
            {#each navLinks as { key, href }, i}
                <li style="--i: {i}">
                    <a
                        {href}
                        class:active={isActive(href)}
                        onclick={closeMenu}
                    >
                        {$_(key)}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>

    <div class="drawer-footer">
        <div class="drawer-divider"></div>
        <div class="drawer-bottom">
            <div class="drawer-socials">
                {#each socials as { icon: Icon, href, label }}
                    <a
                        {href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        class="icon-link"
                        onclick={closeMenu}
                    >
                        <Icon size={20} />
                    </a>
                {/each}
                <a
                    href={$locale === "fr" ? "/Henry_Gary_Resume_FR.pdf" : "/Henry_Gary_Resume.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open resume in new tab"
                    class="icon-link"
                    onclick={closeMenu}
                >
                    <FileDown size={20} />
                </a>
            </div>
            <div class="drawer-controls">
                <button
                    class="lang-toggle"
                    onclick={toggleTheme}
                    aria-label={$theme === "dark"
                        ? "Switch to light mode"
                        : "Switch to dark mode"}
                >
                    {#if $theme === "dark"}
                        <Sun size={16} />
                    {:else}
                        <Moon size={16} />
                    {/if}
                </button>
                <button
                    class="lang-toggle"
                    onclick={toggleLocale}
                    aria-label={$locale === "fr"
                        ? "Switch to English"
                        : "Passer en français"}
                >
                    {$locale === "fr" ? "EN" : "FR"}
                </button>
            </div>
        </div>
    </div>
</aside>

<style>
    /* ── Header ── */
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        padding-block: 1.25rem;
        background-color: hsl(var(--clr-light-primary) / 0.85);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
    }

    .nav-inner {
        margin-inline: auto;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
    }

    /* ── Terminal path ── */
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
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }

    /* ── Desktop nav ── */
    .desktop-nav .nav-links {
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

    /* ── Right side group ── */
    .nav-right {
        grid-column: 3;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    /* ── Social icons ── */
    .social-links {
        display: flex;
        align-items: center;
        gap: 0.125rem;
    }

    .lang-separator {
        width: 1px;
        height: 1.25rem;
        background-color: hsl(var(--clr-light-fournary));
        margin-inline: 0.375rem;
        flex-shrink: 0;
    }

    .lang-toggle {
        position: relative;
        display: grid;
        place-content: center;
        width: 2rem;
        height: 2rem;
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: hsl(var(--clr-grey-400));
        background: none;
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 0.375rem;
        cursor: pointer;
        transition:
            color 150ms ease,
            border-color 150ms ease,
            background-color 150ms ease;
    }

    .lang-toggle:hover {
        color: hsl(var(--clr-dark-primary));
        background-color: hsl(var(--clr-light-secondary));
        border-color: hsl(var(--clr-dark-ternary));
    }

    .lang-toggle::after {
        content: attr(data-tooltip);
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 50%;
        translate: -50% -4px;
        white-space: nowrap;
        font-size: 0.75rem;
        font-weight: 500;
        color: hsl(var(--clr-light-primary));
        background-color: hsl(var(--clr-dark-primary));
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        pointer-events: none;
        opacity: 0;
        transition: opacity 150ms ease, translate 150ms ease;
    }

    .lang-toggle:hover::after {
        opacity: 1;
        translate: -50% 0;
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
        translate: -50% -4px;
        white-space: nowrap;
        font-size: 0.75rem;
        font-weight: 500;
        color: hsl(var(--clr-light-primary));
        background-color: hsl(var(--clr-dark-primary));
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        pointer-events: none;
        opacity: 0;
        transition:
            opacity 150ms ease,
            translate 150ms ease;
    }

    .icon-link:hover::after {
        opacity: 1;
        translate: -50% 0;
    }

    /* ── Burger button ── */
    .burger-btn {
        display: none;
        place-content: center;
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 0.375rem;
        color: hsl(var(--clr-grey-400));
        cursor: pointer;
        transition: background-color 150ms ease, color 150ms ease;
    }

    .burger-btn:hover {
        background-color: hsl(var(--clr-light-secondary));
        color: hsl(var(--clr-dark-primary));
    }

    .burger-icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        width: 20px;
        height: 20px;
    }

    .burger-icon span {
        display: block;
        width: 100%;
        height: 1.5px;
        background-color: currentColor;
        border-radius: 2px;
        transform-origin: center;
        transition:
            transform 280ms cubic-bezier(0.4, 0, 0.2, 1),
            opacity 200ms ease,
            width 280ms ease;
    }

    .burger-icon.open span:nth-child(1) {
        transform: translateY(6.5px) rotate(45deg);
    }

    .burger-icon.open span:nth-child(2) {
        opacity: 0;
        width: 0;
    }

    .burger-icon.open span:nth-child(3) {
        transform: translateY(-6.5px) rotate(-45deg);
    }

    /* ── Mobile overlay ── */
    .mobile-overlay {
        position: fixed;
        inset: 0;
        z-index: 9998;
        background-color: hsl(var(--clr-dark-primary) / 0.4);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        opacity: 0;
        pointer-events: none;
        transition: opacity 350ms ease;
    }

    .mobile-overlay.visible {
        opacity: 1;
        pointer-events: auto;
    }

    /* ── Mobile drawer ── */
    .mobile-drawer {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(340px, 88vw);
        z-index: 9999;
        display: flex;
        flex-direction: column;
        background-color: hsl(var(--clr-light-primary) / 0.97);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border-left: 1px solid hsl(var(--clr-light-fournary));
        padding: 1.25rem 1.5rem 2rem;
        transform: translateX(100%);
        visibility: hidden;
        transition:
            transform 350ms cubic-bezier(0.4, 0, 0.2, 1),
            visibility 350ms;
    }

    .mobile-drawer.open {
        transform: translateX(0);
        visibility: visible;
    }

    /* ── Drawer header ── */
    .drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 2rem;
        border-bottom: 1px solid hsl(var(--clr-light-fournary));
        margin-bottom: 2rem;
    }

    .drawer-path {
        font-size: 0.95rem;
    }

    .drawer-close {
        display: grid;
        place-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 0.375rem;
        color: hsl(var(--clr-grey-400));
        cursor: pointer;
        transition: background-color 150ms ease, color 150ms ease;
    }

    .drawer-close:hover {
        background-color: hsl(var(--clr-light-secondary));
        color: hsl(var(--clr-dark-primary));
    }

    /* ── Drawer nav links ── */
    .drawer-nav {
        flex: 1;
    }

    .drawer-links {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .drawer-links li {
        opacity: 0;
        transform: translateX(16px);
    }

    .mobile-drawer.open .drawer-links li {
        animation: slideInLink 320ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        animation-delay: calc(80ms + var(--i) * 55ms);
    }

    @keyframes slideInLink {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .drawer-links a {
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 500;
        color: hsl(var(--clr-grey-400));
        text-decoration: none;
        padding: 0.6rem 0.75rem;
        border-radius: 0.5rem;
        transition:
            color 150ms ease,
            background-color 150ms ease;
    }

    .drawer-links a:hover {
        color: hsl(var(--clr-dark-primary));
        background-color: hsl(var(--clr-light-secondary));
    }

    .drawer-links a.active {
        color: hsl(var(--clr-dark-primary));
        font-weight: 600;
    }

    /* ── Drawer footer ── */
    .drawer-footer {
        padding-top: 1.5rem;
    }

    .drawer-divider {
        width: 100%;
        height: 1px;
        background-color: hsl(var(--clr-light-fournary));
        margin-bottom: 1.5rem;
    }

    .drawer-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .drawer-socials {
        display: flex;
        align-items: center;
        gap: 0.125rem;
    }

    .drawer-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    /* ── Responsive ── */
    @media (max-width: 768px) {
        .desktop-nav,
        .desktop-social {
            display: none;
        }

        .burger-btn {
            display: grid;
        }
    }

    @media (min-width: 769px) {
        .burger-btn,
        .mobile-overlay,
        .mobile-drawer {
            display: none;
        }
    }
</style>
