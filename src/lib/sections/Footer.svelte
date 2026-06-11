<script lang="ts">
    import { _ } from "svelte-i18n";
    import { Github, Twitter, Linkedin, Instagram } from "lucide-svelte";

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

<footer class="foot-letter">
    <div class="foot-letter__rule"></div>

    <p class="foot-letter__close">Yours,</p>
    <p class="foot-letter__sign">&mdash; Gary</p>

    <p class="foot-letter__ps">
        P.S. &mdash; letters back welcome at <a href="/contact" class="foot-letter__link">/contact</a>.
    </p>

    <div class="foot-letter__socials">
        {#each socials as { icon: Icon, href, label }}
            <a
                {href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                class="foot-letter__icon"
            >
                <Icon size={15} />
            </a>
        {/each}
    </div>

    <p class="foot-letter__copy">&copy; {year} henga.dev</p>
</footer>

<style>
    .foot-letter {
        max-width: 60rem;
        width: 90%;
        margin-inline: auto;
        padding-block: var(--space-2xl) var(--space-xl);
    }

    .foot-letter__rule {
        width: 100%;
        height: 1px;
        background-color: var(--c-rule);
        margin-bottom: var(--space-xl);
    }

    .foot-letter__close {
        font-family: var(--font-display);
        font-style: italic;
        font-size: var(--text-lg);
        color: var(--c-ink);
        line-height: 1.4;
    }

    .foot-letter__sign {
        font-family: var(--font-body);
        font-weight: 600;
        font-style: normal;
        font-size: var(--text-md);
        color: var(--c-ink);
        margin-top: var(--space-2xs);
    }

    .foot-letter__ps {
        font-size: var(--text-sm);
        color: var(--c-neutral);
        margin-top: var(--space-lg);
        line-height: 1.6;
    }

    .foot-letter__link {
        color: var(--c-accent);
        text-decoration: underline;
        text-underline-offset: 2px;
        transition: color var(--dur-short) var(--ease-out);
    }

    .foot-letter__link:hover {
        color: var(--c-ink);
    }

    .foot-letter__link:focus-visible {
        outline: 2px solid var(--c-focus);
        outline-offset: 2px;
        border-radius: 2px;
    }

    .foot-letter__socials {
        display: flex;
        align-items: center;
        gap: var(--space-xs);
        margin-top: var(--space-lg);
    }

    .foot-letter__icon {
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

    .foot-letter__icon:hover {
        color: var(--c-ink);
        background-color: var(--c-paper-2);
    }

    .foot-letter__icon:focus-visible {
        outline: 2px solid var(--c-focus);
        outline-offset: 1px;
    }

    .foot-letter__copy {
        font-size: var(--text-xs);
        color: var(--c-rule);
        margin-top: var(--space-xl);
        letter-spacing: 0.02em;
    }
</style>
