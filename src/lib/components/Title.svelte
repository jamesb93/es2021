<script>
    const title = 'electric spring';
    let printedTitle = title;

    function randomise() {
        let random = '';
        for (let i=0; i < title.length; i++) {
            let r = Math.random();
            let letter = title[i];
            if (r > 0.8) {
                random += letter.toUpperCase();
            } else {
                random += letter;
            }
        }
        printedTitle = random;
    }
    randomise();
</script>

<div class='grid'>
    {#each printedTitle as letter}
    <div class='cell' on:mouseenter={randomise}>
        { letter }
    </div>
    {/each}
    <img src='/circle.jpg' class=logo/>
</div>

<style lang='scss'>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, 6rem);
        place-items: center;
        font-family: $mono; 
    }

    .cell {
        font-size: 6rem;
        width: fit-content;
        height: fit-content
    }

    .logo {
        max-width: 4rem;
    }
</style>