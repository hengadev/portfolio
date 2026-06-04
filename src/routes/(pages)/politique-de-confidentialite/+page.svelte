<script lang="ts">
    import { _ } from "svelte-i18n";
</script>

<div class="page container__small">
    <div class="content">
        <div class="header">
            <p class="label">{$_("privacy_policy.label")}</p>
            <h1 class="title">{$_("privacy_policy.title")}</h1>
            <p class="updated">{$_("privacy_policy.updated")}</p>
        </div>

        <p class="intro">{$_("privacy_policy.intro")}</p>

        <div class="sections">
            <section>
                <h2 class="section-title">{$_("privacy_policy.s1_title")}</h2>
                <p class="section-body">{$_("privacy_policy.s1_body")}</p>
            </section>

            <section>
                <h2 class="section-title">{$_("privacy_policy.s2_title")}</h2>
                <p class="section-body">{$_("privacy_policy.s2_body")}</p>
            </section>

            <section>
                <h2 class="section-title">{$_("privacy_policy.s3_title")}</h2>
                <p class="section-body">{$_("privacy_policy.s3_body")}</p>
            </section>

            <section>
                <h2 class="section-title">{$_("privacy_policy.s4_title")}</h2>
                <p class="section-body">{$_("privacy_policy.s4_body")}</p>
            </section>

            <section>
                <h2 class="section-title">{$_("privacy_policy.s5_title")}</h2>
                <p class="section-body">
                    {$_("privacy_policy.s5_body")}
                    <a href="/contact">{$_("privacy_policy.contact_form")}</a>.
                </p>
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
        max-width: 56ch;
        display: grid;
        gap: 2.5rem;
    }

    .header {
        display: grid;
        gap: 0.75rem;
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

    .updated {
        font-size: var(--label);
        color: hsl(var(--clr-dark-ternary));
    }

    .intro {
        font-size: var(--p);
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.7;
    }

    .sections {
        display: grid;
        gap: 1.75rem;
    }

    .section-title {
        font-size: var(--p);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
        margin-bottom: 0.5rem;
    }

    .section-body {
        font-size: var(--p);
        color: hsl(var(--clr-dark-ternary));
        line-height: 1.7;
    }

    .section-body a {
        color: hsl(var(--clr-dark-ternary));
        text-decoration: underline;
        text-underline-offset: 3px;
        transition: color 150ms ease;
    }

    .section-body a:hover {
        color: hsl(var(--clr-dark-primary));
    }
</style>
