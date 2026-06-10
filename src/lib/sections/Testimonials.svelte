<script lang="ts">
    import { _ } from "svelte-i18n";
    import { reveal } from "$lib/actions/reveal";

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


</script>

<section class="section testimonials container__small" use:reveal>
    <div class="section__header">
        <h2 class="section__title">{$_('home.testimonials.title')}</h2>
    </div>

    <div class="testimonials__grid">
        {#each testimonials as testimonial, i}
            <figure class="testimonial" use:reveal={{ delay: i * 120 }}>
                <div class="testimonial__body">
                    <span class="testimonial__mark">"</span>
                    <blockquote class="testimonial__quote">
                        {$_(testimonial.quoteKey)}
                    </blockquote>
                </div>
                <figcaption class="testimonial__footer">
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
                </figcaption>
            </figure>
        {/each}

    </div>
</section>

<style>
    .testimonials {
        margin-inline: auto;
        display: grid;
        gap: 2rem;
    }

    .section__title {
        font-size: var(--h2);
        font-weight: 600;
        color: hsl(var(--clr-dark-primary));
    }

    .testimonials__grid {
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem;
    }

    .testimonial {
        width: clamp(280px, 40%, 360px);
    }

    /* ── Card ── */
    .testimonial {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1.5rem;
        padding: 2rem;
        background-color: hsl(var(--clr-light-primary));
        border: 1px solid hsl(var(--clr-light-fournary));
        border-radius: 1rem;
        box-shadow: 0 2px 8px hsl(0 0% 0% / 0.04);
        transition: box-shadow 200ms ease, border-color 200ms ease;
    }

    .testimonial:hover {
        box-shadow: 0 6px 24px hsl(0 0% 0% / 0.08);
    }

    /* ── Quote body ── */
    .testimonial__body {
        flex: 1;
    }

    .testimonial__mark {
        display: block;
        font-size: 4rem;
        line-height: 0.6;
        margin-bottom: 0.75rem;
        color: hsl(var(--clr-accent));
        font-family: Georgia, serif;
        user-select: none;
    }

    .testimonial__quote {
        font-size: 0.95rem;
        color: hsl(var(--clr-dark-secondary));
        line-height: 1.75;
        font-style: italic;
    }

    /* ── Author footer ── */
    .testimonial__footer {
        display: flex;
        align-items: center;
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
