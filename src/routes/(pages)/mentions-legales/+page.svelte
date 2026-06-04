<script lang="ts">
    import { _ } from "svelte-i18n";
</script>

<div class="page container__small">
    <div class="content">
        <div class="header">
            <p class="label">{$_("mentions_legales.label")}</p>
            <h1 class="title">{$_("mentions_legales.title")}</h1>
        </div>

        <div class="sections">
            <section>
                <h2 class="section-title">{$_("mentions_legales.editor_section")}</h2>
                <ul class="info-list">
                    <li>{$_("mentions_legales.editor_name")}</li>
                    <li>{$_("mentions_legales.editor_location")}</li>
                    <li>
                        <a href="mailto:{$_('mentions_legales.editor_email')}">
                            {$_("mentions_legales.editor_email")}
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <h2 class="section-title">{$_("mentions_legales.host_section")}</h2>
                <ul class="info-list">
                    <li>{$_("mentions_legales.host_name")}</li>
                    <li>{$_("mentions_legales.host_address")}</li>
                    <li>
                        <a
                            href="https://www.hetzner.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {$_("mentions_legales.host_website")}
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</div>

<style>
    .page {
        margin-inline: auto;
        padding-block: 4rem;
        min-height: 60vh;
    }

    .content {
        max-width: 44ch;
        display: grid;
        gap: 3rem;
    }

    .header {
        display: grid;
        gap: 1rem;
    }

    .label {
        font-size: var(--label);
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: hsl(var(--clr-dark-ternary));
    }

    .title {
        font-size: var(--h1);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    .sections {
        display: grid;
        gap: 2rem;
    }

    .section-title {
        font-size: var(--p);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        margin-bottom: 0.75rem;
    }

    .info-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 0.35rem;
    }

    .info-list li {
        font-size: var(--p);
        color: hsl(var(--clr-dark-ternary));
        line-height: 1.6;
    }

    .info-list a {
        color: hsl(var(--clr-dark-ternary));
        text-decoration: underline;
        text-underline-offset: 3px;
        transition: color 150ms ease;
    }

    .info-list a:hover {
        color: hsl(var(--clr-dark-primary));
    }
</style>
