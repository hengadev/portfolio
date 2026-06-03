<script lang="ts">
	import SideNavigation from "../SideNavigation.svelte";
	import CluoBlock from "./CluoBlock.svelte";
	let tabs = ["Overview", "Architecture", "Technical Stack"];
</script>

<div class="grid" style="--gap: 3rem;">
	<SideNavigation project="Cluo" {tabs} />
	<CluoBlock />
</div>
