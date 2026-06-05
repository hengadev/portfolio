<script>
    import Nav from "$lib/sections/Nav.svelte";
    import Footer from "$lib/sections/Footer.svelte";
</script>

<Nav />
<div class="content">
    <slot></slot>
</div>
<Footer />

<style>
    .content {
        padding-top: 6rem;
        padding-bottom: 1rem;
        min-height: calc(100vh - 6rem);
    }
</style>
