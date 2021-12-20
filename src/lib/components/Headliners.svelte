<script>
    const headliners = [
        { 
            day: 23, 
            act: [{ name:'Lone Taxidermist', link: 'https://lonetaxidermist.bandcamp.com' }],
        },
        { 
            day: 24, 
            act: [{name: 'Marie-Jeanne Wyckmans', link: 'https://electrocd.com/en/artiste/wyckmans_ma/marie-jeanne-wyckmans'}]
        },
        { 
            day: 25, 
            act: [
                { name: 'Javier Garavaglia', link: 'https://icem.folkwang-uni.de/~gara/' },
                { name: 'Claudia Robles-Angel', link: 'http://www.claudearobles.de/' }
            ] 
        },
        { 
            day: 26, act: [{ name: 'Rian Treanor', link: 'http://riantreanor.com/' }]
        },
        { 
            day: 'Throughout', act: [{ name: 'Timothy Didymus', link: 'https://www.facebook.com/timothydidymus/' }]
        }
    ]
</script>

<h2>Featuring</h2>

<div class="artists">
    {#each headliners as x}
    <div class='artist' target='_blank'>
        <div class="day">{x.day}</div>
        {#each x.act as act, i}
            <a class="act" href={act.link}>{act.name}</a>
            {#if x.act.length > 1 && i == x.act.length-2}
            +
            {/if}
        {/each}
    </div>
    {/each}
</div>

<div class="extras">
    PLUS: AME Lunchtime Series, AME Late Night Gig, The Creative Coding Lab Symposium and <i>more</i>
</div>


<style lang='scss'>
    .artists {
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    .artist {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        max-width: max-content;
        text-decoration: none;
        color: black;

        .day {
            font-weight: bold;
        }
    }
    
    .act {
        color: black;
        text-decoration: none;
    }
</style>

