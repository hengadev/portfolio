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

<section class="section testimonials">
    <div class="testimonials__inner">
        <div class="section__header">
            <h2 class="section__title">{$_('home.testimonials.title')}</h2>
        </div>

        <div class="testimonial-stack">
            {#each testimonials as testimonial, i}
                <div class="testimonial-card" class:active={i === current}>
                    <span class="testimonial__mark">&ldquo;</span>
                    <blockquote class="testimonial__quote">
                        {$_(testimonial.quoteKey)}
                    </blockquote>

                    <div class="testimonial__attr">
                        <div class="testimonial__avatar" aria-hidden="true">
                            {#if testimonial.avatar}
                                <img src={testimonial.avatar} alt={testimonial.author} class="testimonial__avatar-img" />
                            {:else}
                                <span class="testimonial__avatar-initial">{testimonial.author[0]}</span>
                            {/if}
                        </div>
                        <div class="testimonial__meta">
                            <span class="testimonial__name">{testimonial.author}</span>
                            <span class="testimonial__role">{$_(testimonial.roleKey)}</span>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

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
    </div>
</section>

<style>
    .testimonials {
        margin-inline: auto;
        display: grid;
        gap: 2rem;
    }

    .testimonials__inner {
        max-width: 52ch;
        margin-inline: auto;
        text-align: center;
    }

    .section__header {
        margin-bottom: 2rem;
    }

    .section__title {
        font-size: var(--h2);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    .testimonial-stack {
        display: grid;
    }

    .testimonial-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 2.5rem 2rem;
        background-color: hsl(var(--clr-light-primary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 1rem;
        box-shadow: 0 2px 8px hsl(0 0% 0% / 0.04);
        grid-area: 1 / 1;
        visibility: hidden;
    }

    .testimonial-card.active {
        visibility: visible;
    }

    .testimonial__mark {
        display: block;
        font-size: clamp(3rem, 6vw, 5rem);
        line-height: 0.8;
        color: hsl(var(--clr-accent));
        font-family: Georgia, serif;
        user-select: none;
    }

    .testimonial__quote {
        font-size: clamp(1.15rem, 2.2vw, 1.5rem);
        font-style: italic;
        font-weight: 400;
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.55;
    }

    .testimonial__nav {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        margin-top: 1.5rem;
    }

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 1.5px solid hsl(var(--clr-light-fournary));
        background: transparent;
        cursor: pointer;
        padding: 0;
        transition: background-color 150ms ease, border-color 150ms ease;
    }

    .dot:hover {
        border-color: hsl(var(--clr-dark-ternary));
    }

    .dot.active {
        background-color: hsl(var(--clr-accent));
        border-color: hsl(var(--clr-accent));
    }

    .dot:focus-visible {
        outline: 2px solid hsl(var(--clr-accent));
        outline-offset: 2px;
    }

    .testimonial__attr {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.875rem;
    }

    .testimonial__avatar {
        flex-shrink: 0;
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 50%;
        background-color: hsl(var(--clr-light-ternary));
        border: 2px solid hsl(var(--clr-light-fournary));
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .testimonial__avatar-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .testimonial__avatar-initial {
        font-size: 1rem;
        font-weight: 600;
        color: hsl(var(--clr-dark-ternary));
        text-transform: uppercase;
    }

    .testimonial__meta {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
        text-align: left;
    }

    .testimonial__name {
        font-size: 0.875rem;
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    .testimonial__role {
        font-size: 0.8rem;
        color: hsl(var(--clr-dark-ternary));
    }
</style>
