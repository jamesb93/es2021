<script>
    import { artists } from '$lib/artists';
</script>

<h2>Featuring</h2>

<div class="artists">
    <div class="artist">
        <h3><u>23</u> <a href="https://linktr.ee/Lonetaxidermist">Nat Sharp</a></h3>
        <img src='/artist/taxi.jpg' alt='Nat Sharp profile'/>
    </div>

    <div class="artist">
        <h3><u>24</u> <a href="https://electrocd.com/en/artiste/wyckmans_ma/marie-jeanne-wyckmans">Marie-Jeanne Wyckmans</a></h3>
        <img src='/artist/wyckmans.jpg' alt='Marie-Jeanne Wyckmans profile'/>
    </div>
</div>

<div>
    <h3><u>25</u> <a href="https://icem.folkwang-uni.de/~gara/">Javier Garavaglia</a> and <a href="http://www.claudearobles.de/"> Claudia Robles-Angel</a></h3>
    <div class="image-row">
        <img src="/artist/gara.jpg" alt="Javier Garavaglia profile">
        <img src="/artist/robles.jpeg" alt="Claudia Robles profile">
    </div>
</div>

<div class="artists">
    <div class="artist">
        <h3><u>26</u> <a href="http://riantreanor.com/">Rian Treanor</a></h3>
        <img src='/artist/rian.jpg' alt='Rian Treanor profile'/>
    </div>

    <div class="artist">
        <h3><u>23-26</u> <a href="https://www.facebook.com/timothydidymus/">Timothy Didymus</a></h3>
        <img src='/artist/didy.jpg' alt='Timothy Didymus profile'/>
    </div>
</div>


<div class="extras">
    PLUS: AME Lunchtime Series, AME Late Night Gig, The Creative Coding Lab Symposium and <i>more</i>. See the <a href='/line-up'>full line-up</a> for more details.
</div>

<style lang='scss'>
    h3 { 
        margin-bottom: 0.3em;
        text-align: left;
    }

    h3 > a {
        color: black;
        text-decoration: none;
    }
    .image-row {
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 1em;
    }

    img { 
        width: 100%;
        min-width: 100%;
    }

    p { 
        text-align: left;
    }
    .artists {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1em;
    }

    @media (max-width: 1200px) {
        .artists {
            grid-template-columns: auto;
        }
    }

    .artist {
        display: flex;
        flex-direction: column;
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

