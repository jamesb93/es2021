<nav class="banner" >
    <a class='link' href='/'>home</a>
    <a class='link' href='/line-up'>line-up</a>
    <!-- <a href="/artists" class="link">artists</a> -->
    <a target="_blank" href="https://www.eventbrite.co.uk/o/electric-spring-festival-41013064783" class="link">free tickets</a>
    <a class='link' target='_blank' href='/ES2022-programme.pdf'>digital programme</a>
</nav>

<style lang='scss'>
    nav {
        display: flex;
        flex-direction: row;
        gap: 2em;
        background-color: yellow;
        margin-bottom: 1em;
        padding: 0.5em;

        .link {
            font-family: $mono;
            font-size: 1.5rem;
        }

        .link:hover {
            color: white;
            background-color:black;
        }
    }
    @media (max-width: 600px) {
        nav {
            display: flex;
            flex-direction: column;
        }
    }
</style>