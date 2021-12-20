<script>
    const headliners = [
        { day: 23, name: 'Lone Taxidermist', link: 'https://lonetaxidermist.bandcamp.com' },
        { day: 24, name: 'Marie-Jeanne Wyckmans', link: 'https://electrocd.com/en/artiste/wyckmans_ma/marie-jeanne-wyckmans' },
        { day: 25, name: 'Javier Garavaglia + Claudia Robles-Angel', link: 'https://icem.folkwang-uni.de/~gara/'},
        { day: 26, name: 'Rian Treanor', link: 'http://riantreanor.com/'},
        { day: 'Throughout', name: 'Timothy Didymus', link: 'https://www.facebook.com/timothydidymus/'}
    ]
</script>

<h2>Featuring</h2>

<div class="artists">
    {#each headliners as act}
    <a class='artist' target='_blank' href={act.link}>
        <div class="day">{act.day}</div>
        <div class="name">{act.name}</div>
    </a>
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

    .artist:hover {
        background-color: black;
        color: white;
    }

    .artist:visited {
        color: blackre
    }

    .artist:visited:hover {
        color: white;
        
    }
</style>

