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
        X,
    } from "lucide-svelte";
    import { theme, toggleTheme } from "$lib/theme/store";
    import { browser } from "$app/environment";

    /* ── N8 links — only the inner destinations, not home ── */
    const termLinks = [
        { key: "nav.projects", href: "/projects" },
        { key: "nav.experiments", href: "/experiments" },
        { key: "nav.blog", href: "/blog" },
        { key: "nav.contact", href: "/contact" },
    ];

    /* ── Mobile nav — keeps home ── */
    const mobileLinks = [
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

<!-- ── Desktop: N8 terminal command ── -->
<header class="nav-term" aria-label="Main navigation">
    <div class="nav-term__inner">
        <a href="/" class="nav-term__wordmark" aria-label="Home">
            <span class="nav-term__path">{pathSlug}</span>
        </a>

        <pre class="nav-term__line" aria-label="Navigation links"><span class="prompt">&gt;</span> henga
{#each termLinks as { key, href }}
    <a href={href} class:active={isActive(href)}>{$_(key)}</a>
{/each}<span class="caret" aria-hidden="true">▮</span></pre>

        <div class="nav-term__controls">
            <a
                href={$locale === "fr" ? "/Henry_Gary_Resume_FR.pdf" : "/Henry_Gary_Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume"
                class="ctrl-btn"
            >
                <FileDown size={15} />
            </a>
            <button
                class="ctrl-btn"
                onclick={toggleTheme}
                aria-label={$theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
                {#if $theme === "dark"}
                    <Sun size={15} />
                {:else}
                    <Moon size={15} />
                {/if}
            </button>
            <button
                class="ctrl-btn"
                onclick={toggleLocale}
                aria-label={$locale === "fr" ? "Switch to English" : "Passer en français"}
            >
                {$locale === "fr" ? "EN" : "FR"}
            </button>

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

<!-- ── Overlay ── -->
<div
    class="mobile-overlay"
    class:visible={menuOpen}
    onclick={closeMenu}
    role="presentation"
    aria-hidden="true"
></div>

<!-- ── Mobile drawer ── -->
<aside
    id="mobile-drawer"
    class="mobile-drawer"
    class:open={menuOpen}
    aria-hidden={!menuOpen}
>
    <div class="drawer-header">
        <a href="/" class="drawer-path" onclick={closeMenu}>
            <span>~/</span><span class="caret caret--sm" aria-hidden="true">▮</span>
        </a>
        <button class="drawer-close" onclick={closeMenu} aria-label="Close menu">
            <X size={20} />
        </button>
    </div>

    <nav class="drawer-nav">
        <ul class="drawer-links">
            {#each mobileLinks as { key, href }, i}
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
                        <Icon size={18} />
                    </a>
                {/each}
                <a
                    href={$locale === "fr" ? "/Henry_Gary_Resume_FR.pdf" : "/Henry_Gary_Resume.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open resume"
                    class="icon-link"
                    onclick={closeMenu}
                >
                    <FileDown size={18} />
                </a>
            </div>
            <div class="drawer-controls">
                <button
                    class="ctrl-btn"
                    onclick={toggleTheme}
                    aria-label={$theme === "dark" ? "Light mode" : "Dark mode"}
                >
                    {#if $theme === "dark"}
                        <Sun size={15} />
                    {:else}
                        <Moon size={15} />
                    {/if}
                </button>
                <button
                    class="ctrl-btn"
                    onclick={toggleLocale}
                    aria-label={$locale === "fr" ? "English" : "Français"}
                >
                    {$locale === "fr" ? "EN" : "FR"}
                </button>
            </div>
        </div>
    </div>
</aside>

<style>
    /* ── N8 Terminal header ── */
    .nav-term {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: var(--z-sticky);
        padding-block: var(--space-sm) var(--space-sm);
        border-bottom: 1px solid var(--c-rule);
        background-color: var(--c-paper);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
    }

    :global([data-theme="dark"]) .nav-term {
        background-color: var(--c-paper-glass);
    }

    .nav-term__inner {
        max-width: 72rem;
        width: 90%;
        margin-inline: auto;
        display: flex;
        align-items: center;
        gap: var(--space-sm);
    }

    /* ── Wordmark (terminal path) ── */
    .nav-term__wordmark {
        text-decoration: none;
        flex-shrink: 0;
    }

    .nav-term__wordmark:focus-visible {
        outline: 2px solid var(--c-focus);
        outline-offset: 3px;
        border-radius: 2px;
    }

    .nav-term__path {
        font-family: var(--font-outlier);
        font-size: var(--text-sm);
        color: var(--c-ink);
    }

    /* ── Prompt line ── */
    .nav-term__line {
        font-family: var(--font-outlier);
        font-size: var(--text-sm);
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.6ch;
        flex-wrap: wrap;
        white-space: pre;
        color: var(--c-neutral);
    }

    .prompt {
        color: var(--c-accent);
        padding-right: 0.2ch;
    }

    .nav-term__line :global(a) {
        color: var(--c-neutral);
        text-decoration: none;
        transition: color var(--dur-short) var(--ease-out);
        position: relative;
    }

    .nav-term__line :global(a):hover {
        color: var(--c-ink);
    }

    .nav-term__line :global(a):focus-visible {
        outline: 2px solid var(--c-focus);
        outline-offset: 2px;
        border-radius: 2px;
    }

    .nav-term__line :global(a).active {
        color: var(--c-ink);
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    .caret {
        display: inline-block;
        width: 1ch;
        color: var(--c-accent);
        animation: blink 1.05s steps(2) infinite;
    }

    .caret--sm {
        font-size: 0.85em;
    }

    @keyframes blink {
        50% { opacity: 0; }
    }

    @media (prefers-reduced-motion: reduce) {
        .caret {
            animation: none;
            opacity: 1;
        }
    }

    /* ── Controls (right side) ── */
    .nav-term__controls {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: var(--space-2xs);
        flex-shrink: 0;
    }

    .ctrl-btn {
        display: grid;
        place-content: center;
        width: 1.875rem;
        height: 1.875rem;
        font-size: 0.75rem;
        font-weight: 600;
        font-family: var(--font-body);
        letter-spacing: 0.05em;
        color: var(--c-neutral);
        background: none;
        border: 1px solid var(--c-rule);
        border-radius: 0.25rem;
        cursor: pointer;
        transition:
            color var(--dur-short) var(--ease-out),
            border-color var(--dur-short) var(--ease-out),
            background-color var(--dur-short) var(--ease-out);
    }

    .ctrl-btn:hover {
        color: var(--c-ink);
        border-color: var(--c-neutral);
        background-color: var(--c-paper-2);
    }

    .ctrl-btn:focus-visible {
        outline: 2px solid var(--c-focus);
        outline-offset: 1px;
    }

    /* ── Burger button ── */
    .burger-btn {
        display: none;
        place-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 0.25rem;
        color: var(--c-neutral);
        cursor: pointer;
        border: none;
        background: none;
        transition: background-color var(--dur-short) var(--ease-out), color var(--dur-short) var(--ease-out);
    }

    .burger-btn:hover {
        background-color: var(--c-paper-2);
        color: var(--c-ink);
    }

    .burger-icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4px;
        width: 18px;
        height: 18px;
    }

    .burger-icon span {
        display: block;
        width: 100%;
        height: 1.5px;
        background-color: currentColor;
        border-radius: 2px;
        transform-origin: center;
        transition:
            transform 280ms var(--ease-out),
            opacity 200ms var(--ease-out),
            width 280ms var(--ease-out);
    }

    .burger-icon.open span:nth-child(1) {
        transform: translateY(5.5px) rotate(45deg);
    }

    .burger-icon.open span:nth-child(2) {
        opacity: 0;
        width: 0;
    }

    .burger-icon.open span:nth-child(3) {
        transform: translateY(-5.5px) rotate(-45deg);
    }

    /* ── Mobile overlay ── */
    .mobile-overlay {
        position: fixed;
        inset: 0;
        z-index: calc(var(--z-sticky) - 1);
        background-color: var(--c-ink);
        opacity: 0.4;
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        opacity: 0;
        pointer-events: none;
        transition: opacity 350ms var(--ease-out);
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
        z-index: var(--z-modal);
        display: flex;
        flex-direction: column;
        background-color: var(--c-paper);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border-left: 1px solid var(--c-rule);
        padding: var(--space-lg) var(--space-lg) var(--space-xl);
        transform: translateX(100%);
        visibility: hidden;
        transition:
            transform 350ms var(--ease-out),
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
        padding-bottom: var(--space-lg);
        border-bottom: 1px solid var(--c-rule);
        margin-bottom: var(--space-lg);
    }

    .drawer-path {
        font-family: var(--font-outlier);
        font-size: var(--text-sm);
        color: var(--c-ink);
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    .drawer-close {
        display: grid;
        place-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 0.25rem;
        color: var(--c-neutral);
        cursor: pointer;
        transition: background-color var(--dur-short) var(--ease-out), color var(--dur-short) var(--ease-out);
    }

    .drawer-close:hover {
        background-color: var(--c-paper-2);
        color: var(--c-ink);
    }

    /* ── Drawer nav ── */
    .drawer-nav {
        flex: 1;
    }

    .drawer-links {
        display: flex;
        flex-direction: column;
        gap: var(--space-2xs);
    }

    .drawer-links li {
        opacity: 0;
        transform: translateX(16px);
    }

    .mobile-drawer.open .drawer-links li {
        animation: slideInLink 320ms var(--ease-out) forwards;
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
        font-size: 1.3rem;
        font-weight: 500;
        font-family: var(--font-body);
        color: var(--c-neutral);
        text-decoration: none;
        padding: var(--space-sm) var(--space-sm);
        border-radius: 0.375rem;
        transition:
            color var(--dur-short) var(--ease-out),
            background-color var(--dur-short) var(--ease-out);
    }

    .drawer-links a:hover {
        color: var(--c-ink);
        background-color: var(--c-paper-2);
    }

    .drawer-links a.active {
        color: var(--c-ink);
        font-weight: 600;
    }

    /* ── Drawer footer ── */
    .drawer-footer {
        padding-top: var(--space-lg);
    }

    .drawer-divider {
        width: 100%;
        height: 1px;
        background-color: var(--c-rule);
        margin-bottom: var(--space-lg);
    }

    .drawer-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .drawer-socials {
        display: flex;
        align-items: center;
        gap: var(--space-2xs);
    }

    .drawer-controls {
        display: flex;
        align-items: center;
        gap: var(--space-xs);
    }

    .icon-link {
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

    .icon-link:hover {
        color: var(--c-ink);
        background-color: var(--c-paper-2);
    }

    /* ── Responsive ── */
    @media (max-width: 768px) {
        .nav-term__line {
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
