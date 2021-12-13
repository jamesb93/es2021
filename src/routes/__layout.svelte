<script lang='ts'>
    import '../app.scss';
    import { shuffle } from '$lib/utils.ts';
    import Title from '$lib/components/Title.svelte';

    let color = [0, 0, 255, 255];
    const c = shuffle(color).slice(0, 3);
    // let c = color.map(x => Math.round(Math.random()) * 255);
    let styleString = `background-color:rgb(${c[0]},${c[1]},${c[2]})`
</script>

<div class="banner" style={styleString} >
<a class='nav' href='/'>home</a>
<!-- <a class='nav' href='/schedule'>schedule</a> -->
<!-- <a class='nav' href='/schedule'>about</a> -->
<!-- <a class='nav' href='/schedule'>archive</a> -->
</div>

<Title />

<main>
    <slot />
</main>

<style lang='scss'>
    main {
        margin-top: 2em;
        margin-bottom: 2em;
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 3em;
        max-width: $breakpoint;
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