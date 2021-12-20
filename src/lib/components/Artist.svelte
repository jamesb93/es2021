<script lang='ts'>
    export let name: string = 'artist name';
    export let blurb: string = 'blurb';
    export let url: string = '';
    export let src: string = '';
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
        max-width: 350px;
        display: flex;
        flex-direction: column;
        box-shadow: 5px 10px rgb(0, 0, 0);
        gap: 10px;
        padding: 1em;
        height: max-content;
        border: 1px solid rgb(171, 171, 171);
    }
    .profile {
        max-width: 100%;
        max-height: 200px;
    }
    .name {
    }

    .blurb {
        width: 100%;
        font-family: $overpass;
        text-align: left;
    }

    a {
        margin: 0 auto;
    }

    a:hover {
        background-color: rgba(0,0,0,0);
    }
</style>


