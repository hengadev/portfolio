<div class="page container__small">
    <div class="coming-soon">
        <p class="label">Coming soon</p>
        <h1 class="title">Projects</h1>
        <p class="body">
            A curated collection of the things I've built — currently being put together.
            Check back soon.
        </p>
    </div>
</div>

<style>
    .page {
        margin-inline: auto;
        display: grid;
        place-content: center;
        min-height: 60vh;
    }

    .coming-soon {
        display: grid;
        gap: 1rem;
        max-width: 44ch;
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
</style>
