<script>
    import '../app.scss';
    import Title from '$lib/components/Title.svelte';
</script>


<Title />

<main>
    <slot />
</main>



<style>
    main {
        margin-top: 2em;
        margin-bottom: 2em;
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 3em;
        margin: 0 auto;
        max-width: 80ch;
    }

    @media (min-width: 1024px) {
    }

    @media (max-width: 1024px) {
    }
</style>