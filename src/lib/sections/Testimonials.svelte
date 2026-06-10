<script lang="ts">
    import { _ } from "svelte-i18n";
    import { reveal } from "$lib/actions/reveal";
    import { Quote } from "lucide-svelte";

    type Testimonial = {
        quote: string;
        author: string;
        context?: string;
    };

    /**
     * Hardcoded testimonial array. To add a real testimonial,
     * append an object: { quote: "...", author: "...", context: "..." }
     */
    const testimonials: Testimonial[] = [];

    let isEmpty = $derived(testimonials.length === 0);
</script>

<section class="section testimonials container__small" use:reveal>
    <div class="section__header">
        <h2 class="section__title">{$_('home.testimonials.title')}</h2>
    </div>

    {#if isEmpty}
        <div class="testimonials__placeholder">
            <Quote size={28} class="testimonials__placeholder-icon" />
            <p class="testimonials__placeholder-text">
                {$_('home.testimonials.placeholder')}
            </p>
        </div>
    {:else}
        <div class="testimonials__grid">
            {#each testimonials as testimonial, i}
                <figure class="testimonial" use:reveal={{ delay: i * 100 }}>
                    <Quote size={18} class="testimonial__icon" />
                    <blockquote class="testimonial__quote">
                        {testimonial.quote}
                    </blockquote>
                    <figcaption class="testimonial__author">
                        <span class="testimonial__name">{testimonial.author}</span>
                        {#if testimonial.context}
                            <span class="testimonial__context">{testimonial.context}</span>
                        {/if}
                    </figcaption>
                </figure>
            {/each}
        </div>
    {/if}
</section>

<style>
    .testimonials {
        margin-inline: auto;
        display: grid;
        gap: 2rem;
    }

    .section__header {
        margin-bottom: 0;
    }

    .section__title {
        font-size: var(--h2);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    /* ── Placeholder state ── */
    .testimonials__placeholder {
        display: grid;
        place-items: center;
        gap: 1rem;
        padding: 3rem 2rem;
        border: 2px dashed hsl(var(--clr-light-fournary));
        border-radius: 0.75rem;
        background-color: hsl(var(--clr-light-secondary));
    }

    :global(.testimonials__placeholder-icon) {
        color: hsl(var(--clr-dark-ternary));
        opacity: 0.4;
    }

    .testimonials__placeholder-text {
        color: hsl(var(--clr-dark-ternary));
        text-align: center;
        font-size: 0.9rem;
        line-height: 1.6;
    }

    /* ── Testimonial cards ── */
    .testimonials__grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1rem;
    }

    .testimonial {
        display: grid;
        gap: 0.75rem;
        padding: 1.75rem;
        background-color: hsl(var(--clr-light-primary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 0.75rem;
        transition: border-color 150ms ease, box-shadow 150ms ease;
    }

    .testimonial:hover {
        border-color: hsl(var(--clr-dark-ternary));
        box-shadow: 0 4px 16px hsl(0 0% 0% / 0.06);
    }

    :global(.testimonial__icon) {
        color: hsl(var(--clr-dark-ternary));
        opacity: 0.35;
    }

    .testimonial__quote {
        font-size: 0.95rem;
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.7;
        font-style: italic;
    }

    .testimonial__author {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
        margin-top: 0.25rem;
    }

    .testimonial__name {
        font-size: 0.85rem;
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    .testimonial__context {
        font-size: 0.8rem;
        color: hsl(var(--clr-dark-ternary));
    }

    @media (max-width: 600px) {
        .testimonials__grid {
            grid-template-columns: 1fr;
        }
    }
</style>
