<script>
    import Banner from '$lib/components/Banner.svelte';

    const title = 'electric spring';
    let printedTitle = title;
    let logoUrl = '/logo/circle1.png';

    const randomCase = string => {
        const randomised = string.split('').map(x => { 
            const chance = Math.random();
            if (chance >= 0.8) {
                return x
            } else {
                return x.toUpperCase()
            }
        }).join('');
        return randomised;
    }

    let randomTitle = randomCase(title);

    const randomiseLogo = () => {
        let logoChoice = Math.round((Math.random() * 4) + 1);
        logoUrl = `/logo/circle${logoChoice}.png`
        console.log(logoUrl)
    }
    randomiseLogo();
</script>

<header>
    <Banner />

    <div class='festival-name'>
        <h1 class='name' on:mouseenter={ () => { randomTitle = randomCase(title)} }>{ randomTitle }</h1>
        <img src={logoUrl} class=logo alt='electric spring logo'/>
    </div>
    
    <div class="info date">
        23-27 february 2022 | university of huddersfield + dai hall 
    </div>

</header>

<style lang='scss'>
    .festival-name {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: left;
        align-items: center;
        gap: 1em;
        margin-bottom: 1em;
        .name {
            font-size: 3rem;
            font-family: $mono;
        }
        .logo {
            max-width: 3rem;
        }
    }

    .date {
        font-family: $mono;
        background-color: rgba(255, 255, 0, 0.744);
        text-align: left;
    }
</style>