<script lang="ts">
    import { _ } from "svelte-i18n";
    import { onMount } from "svelte";

    type Testimonial = {
        quoteKey: string;
        author: string;
        roleKey: string;
        avatar?: string;
    };

    const testimonials: Testimonial[] = [
        {
            quoteKey: "home.testimonials.livio_quote",
            author: "Livio",
            roleKey: "home.testimonials.livio_role",
        },
        {
            quoteKey: "home.testimonials.serge_quote",
            author: "Serge",
            roleKey: "home.testimonials.serge_role",
        },
    ];

    let current = $state(0);

    onMount(() => {
        const interval = setInterval(() => {
            current = (current + 1) % testimonials.length;
        }, 8000);

        return () => clearInterval(interval);
    });
</script>

<section class="section testimonial-section">
    <div class="testimonial-inner">
        <span class="testimonial__mark">&ldquo;</span>
        <blockquote class="testimonial__quote">
            {$_(testimonials[current].quoteKey)}
        </blockquote>

        {#if testimonials.length > 1}
            <div class="testimonial__nav">
                {#each testimonials as _, i}
                    <button
                        class="dot"
                        class:active={i === current}
                        onclick={() => (current = i)}
                        aria-label="Show testimonial {i + 1}"
                    ></button>
                {/each}
            </div>
        {/if}

        <div class="testimonial__attr">
            <span class="testimonial__name">{testimonials[current].author}</span>
            <span class="testimonial__sep">&mdash;</span>
            <span class="testimonial__role">{$_(testimonials[current].roleKey)}</span>
        </div>
    </div>
</section>

<style>
    .testimonial-section {
        margin-inline: auto;
        max-width: 72rem;
        width: 90%;
        padding-block: var(--space-3xl);
    }

    .testimonial-inner {
        max-width: 52ch;
        margin-inline: auto;
        text-align: center;
    }

    .testimonial__mark {
        display: block;
        font-size: clamp(3rem, 6vw, 5rem);
        line-height: 0.8;
        color: var(--c-accent);
        user-select: none;
        margin-bottom: var(--space-md);
    }

    .testimonial__quote {
        font-size: clamp(1.15rem, 2.2vw, 1.5rem);
        font-style: italic;
        font-weight: 400;
        color: var(--c-ink);
        line-height: 1.55;
    }

    .testimonial__nav {
        display: flex;
        justify-content: center;
        gap: var(--space-xs);
        margin-top: var(--space-xl);
    }

    .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 1px solid var(--c-rule);
        background: transparent;
        cursor: pointer;
        padding: 0;
        transition:
            background-color var(--dur-short) var(--ease-out),
            border-color var(--dur-short) var(--ease-out);
    }

    .dot:hover {
        border-color: var(--c-neutral);
    }

    .dot.active {
        background-color: var(--c-accent);
        border-color: var(--c-accent);
    }

    .dot:focus-visible {
        outline: 2px solid var(--c-focus);
        outline-offset: 2px;
    }

    .testimonial__attr {
        margin-top: var(--space-md);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--space-xs);
    }

    .testimonial__name {
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--c-ink);
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }

    .testimonial__sep {
        color: var(--c-rule);
    }

    .testimonial__role {
        font-size: var(--text-sm);
        color: var(--c-neutral);
    }
</style>
