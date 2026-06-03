<script>
	import "../app.css";
	import "../lib/i18n/index.ts";
	import "$lib/theme/store";
	import { isLoading } from "svelte-i18n";
</script>

{#if !$isLoading}
	<slot></slot>
{/if}
