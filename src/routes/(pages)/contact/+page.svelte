<script lang="ts">
    import { enhance } from "$app/forms";
    import { _ } from "svelte-i18n";

    let { form } = $props();

    let loading = $state(false);
</script>

<svelte:head>
	<title>Contact — Gary Henry</title>
	<meta name="description" content="Have a project in mind or want to collaborate? Send Gary a message." />
	<meta property="og:title" content="Contact — Gary Henry" />
	<meta property="og:description" content="Have a project in mind or want to collaborate? Send Gary a message." />
</svelte:head>

<div class="page container__small">
    {#if form?.success}
        <div class="result">
            <p class="label">{$_("contact.success_label")}</p>
            <h1 class="title">{$_("contact.success_title")}</h1>
            <p class="body">{$_("contact.success_body")}</p>
        </div>
    {:else}
        <div class="content">
            <div class="header">
                <p class="label">{$_("contact.label")}</p>
                <h1 class="title">{$_("contact.title")}</h1>
                <p class="body">{$_("contact.body")}</p>
            </div>

            <form
                method="POST"
                use:enhance={() => {
                    loading = true;
                    return async ({ update }) => {
                        loading = false;
                        await update();
                    };
                }}
            >
                {#if form?.error === "send_failed"}
                    <p class="form-error">{$_("contact.error_body")}</p>
                {/if}

                <div class="fields">
                    <div class="field">
                        <label for="name">{$_("contact.name")}</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder={$_("contact.name_placeholder")}
                            required
                            class:input-error={form?.error === "missing_fields"}
                        />
                    </div>

                    <div class="field">
                        <label for="email">{$_("contact.email")}</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder={$_("contact.email_placeholder")}
                            required
                            class:input-error={form?.error === "invalid_email" ||
                                form?.error === "missing_fields"}
                        />
                    </div>

                    <div class="field">
                        <label for="message">{$_("contact.message")}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder={$_("contact.message_placeholder")}
                            required
                            class:input-error={form?.error === "missing_fields"}
                        ></textarea>
                    </div>
                </div>

                <button type="submit" disabled={loading} class="submit">
                    {loading ? $_("contact.sending") : $_("contact.submit")}
                </button>
            </form>
        </div>
    {/if}
</div>

<style>
    .page {
        margin-inline: auto;
        padding-block: 4rem;
        display: grid;
        place-items: center;
        min-height: 60vh;
    }

    .result,
    .content {
        display: grid;
        gap: 1rem;
        width: 100%;
        max-width: 44ch;
    }

    .content {
        gap: 2.5rem;
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

    .body {
        color: hsl(var(--clr-dark-ternary));
        line-height: 1.7;
    }

    form {
        display: grid;
        gap: 1.5rem;
    }

    .fields {
        display: grid;
        gap: 1rem;
    }

    .field {
        display: grid;
        gap: 0.4rem;
    }

    label {
        font-size: var(--label);
        font-weight: 500;
        color: hsl(var(--clr-dark-secondary));
        letter-spacing: 0.04em;
    }

    input,
    textarea {
        width: 100%;
        padding: 0.65rem 0.85rem;
        border-radius: 6px;
        border: 1px solid hsl(var(--clr-stroke));
        background-color: hsl(var(--clr-light-primary));
        color: hsl(var(--clr-dark-primary));
        font-size: var(--p);
        resize: vertical;
        transition: border-color 150ms ease;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: hsl(var(--clr-accent));
    }

    input.input-error,
    textarea.input-error {
        border-color: hsl(var(--clr-error));
    }

    .form-error {
        font-size: var(--label);
        color: hsl(var(--clr-error));
    }

    .submit {
        justify-self: start;
        padding: 0.65rem 1.5rem;
        border-radius: 6px;
        background-color: hsl(var(--clr-dark-primary));
        color: hsl(var(--clr-light-primary));
        font-size: var(--label);
        font-weight: 600;
        letter-spacing: 0.04em;
        cursor: pointer;
        transition:
            opacity 150ms ease,
            background-color 150ms ease;
    }

    .submit:hover:not(:disabled) {
        opacity: 0.85;
    }

    .submit:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
