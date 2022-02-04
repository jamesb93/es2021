<script lang='ts'>
    import '../app.scss';

    import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main>
    <slot />
</main>

<style lang='scss'>
    main {
        padding-top: 2em;
        max-width: $breakpoint;
        min-width: 35ch;
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        height: 100vh;
    }

    .nav {
        color:white;
    }

    @media (min-width: $breakpoint) {
        main {
            margin: 0 auto;
        }
    }

    @media (max-width: $breakpoint) {

    }
</style>