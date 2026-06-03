<script lang="ts">
	import { page } from "$app/stores";
	import SideNavigation from "../SideNavigation.svelte";
	import GerminalBlock from "./GerminalBlock.svelte";
	let tabs = ["Overview", "Architecture", "Technical Stack"];
</script>

<div class="grid" style="--gap: 3rem;">
	<SideNavigation project="Germinal" {tabs} />
	<GerminalBlock />
</div>
