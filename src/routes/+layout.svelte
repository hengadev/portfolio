<script>
	import "../app.css";
	import "../lib/i18n/index.ts";
	import "$lib/theme/store";
	import { isLoading } from "svelte-i18n";
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>Gary Henry — henga.dev</title>
	<meta name="description" content="Freelance full-stack developer based in Paris. Backend-first: Go + SvelteKit. I build web applications and tools that are fast, simple, and correct." />
	<meta name="author" content="Gary Henry" />
	<meta name="robots" content="index, follow" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Gary Henry" />
	<meta property="og:title" content="Gary Henry — henga.dev" />
	<meta property="og:description" content="Freelance full-stack developer based in Paris. Backend-first: Go + SvelteKit. I build web applications and tools that are fast, simple, and correct." />
	<meta property="og:url" content={$page.url.href} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Gary Henry — henga.dev" />
	<meta name="twitter:description" content="Freelance full-stack developer based in Paris. Backend-first: Go + SvelteKit." />

	<link rel="canonical" href={$page.url.href} />
</svelte:head>

{#if !$isLoading}
	<slot></slot>
{/if}
