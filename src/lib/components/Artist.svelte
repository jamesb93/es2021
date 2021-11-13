<script>
    export let src = '';
    export let url= '';
    export let name = 'artist name';
    export let blurb = 'blurb';
</script>

<div class='container'>
    <a target='_blank' href={url}>
        <img 
        class='profile' 
        src={src} 
        alt={`Artist profile of ${name}`}
        />
    </a>

    <div class='name'>
        { name }
    </div>
    
    <div class='blurb'>
        { blurb }
    </div>
</div>

<style lang='scss'>
    .container {
        max-width: 300px;
        min-width: 200px;
        display: flex;
        flex-direction: column;
        box-shadow: 5px 10px rgb(0, 0, 0);
        gap: 10px;
        padding: 1em;
    }
    .profile {
        max-width: 100%;
    }
    .name {
        font-size: 2rem;
    }

    .blurb {
        width: 100%;
        font-size: 1rem;
        font-family: $overpass;
    }

    a:hover {
        background-color: rgba(0,0,0,0);
    }
</style>


