<script lang="ts">
	import { page } from "$app/stores";
	import { ArrowLeft } from "lucide-svelte";
</script>

<svelte:head>
	<title>{$page.status} — Gary Henry</title>
</svelte:head>

<div class="error-page container__small">
	<span class="error-code">{$page.status}</span>
	<h1 class="error-title">
		{$page.status === 404 ? "Page not found" : "Something went wrong"}
	</h1>
	<p class="error-message">
		{$page.status === 404
			? "This page doesn't exist or has been moved."
			: $page.error?.message ?? "An unexpected error occurred."}
	</p>
	<a href="/" class="back-link flex" style="--gap: 0.375rem; align-items: center;">
		<ArrowLeft size={16} /> Back to home
	</a>
</div>

<style>
	.error-page {
		margin-inline: auto;
		display: grid;
		gap: 1rem;
		padding-top: 8rem;
		padding-bottom: 8rem;
	}

	.error-code {
		font-size: 0.85rem;
		font-weight: 600;
		color: hsl(var(--clr-dark-ternary));
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.error-title {
		font-size: var(--h1);
		font-weight: 600;
		color: hsl(var(--clr-dark-primary));
		line-height: 1.2;
	}

	.error-message {
		color: hsl(var(--clr-dark-secondary));
		line-height: 1.7;
		max-width: 50ch;
	}

	.back-link {
		margin-top: 0.5rem;
		font-size: 0.9rem;
		font-weight: 500;
		color: hsl(var(--clr-dark-ternary));
		text-decoration: none;
		width: fit-content;
		transition: color 150ms ease, gap 150ms ease;
	}

	.back-link:hover {
		color: hsl(var(--clr-dark-primary));
		gap: 0.5rem;
	}
</style>
