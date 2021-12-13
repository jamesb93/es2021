<script>
    const title = 'electric spring';
    let printedTitle = title;
    let logoUrl = '/logo/circle1.png';

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

    const randomiseLogo = () => {
        let logoChoice = Math.round((Math.random() * 4) + 1);
        logoUrl = `/logo/circle${logoChoice}.png`
        console.log(logoUrl)
    }
    randomiseLogo();
</script>

<div class='grid'>
    {#each printedTitle as letter}
    <div class='cell' on:mouseenter={randomise}>
        { letter }
    </div>
    {/each}
    <div class="cell">
        <img src={logoUrl} class=logo alt='electric spring logo'/>
    </div>
</div>

<style lang='scss'>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, 5rem);
        place-items: center;
        font-family: $mono;
        padding-bottom: 2em;
    }

    .cell {
        font-size: 5rem;
        width: max-content;
        height: max-content
    }

    .logo {
        max-width: 4rem;
    }
</style>