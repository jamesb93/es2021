<script>
    import Artist from '$lib/components/Artist.svelte';
    import Masonry from '$lib/components/Masonry.svelte';

    const artists = {
        'Rian Treanor ': {
            blurb  : 'Rian Treanor reimagines the intersection of club culture, experimental art and computer music, presenting an insightful and compelling musical world of fractured and interlocking components.',
            src : '/artists/rian2.jpg',
            url : 'http://riantreanor.com/'
        },

        'Claudia Robles Angeles' : {
            blurb : 'Claudia Robles-Angel is a new media and sound artist born in Bogotá-Colombia, currently living in Cologne-Germany and active worldwide. Her work and research cover different aspects of visual and sound art, which extend from audio-visual fixed media compositions to performances and installations interacting with biomedical signals via the usage of interfaces such as, for example, the BCI (Brain Computer Interface) measuring brain waves activity.',
            src : '/artists/claudia.jpg',
            url : 'http://www.claudearobles.de'
        },

        'Javier Alejandro Garavaglia' : {
            blurb : 'Javier A. Garavaglia is an award-winning composer, violist, performer, sound artist/sound-designer, music technologist and professor. His composition is a constant search for new sonic experiences combining new developments in computerised sound synthesis, live interaction, extended instrumental techniques and sound spatialisation.', 
            src : '/artists/javier.jpg',
            url : 'https://icem.folkwang-uni.de/~gara/'
        },

        'Lone Taxidermist' : {
            blurb : '',
            src : '/artists/taxi.jpg',
            url : 'https://lonetaxidermist.bandcamp.com'

        },

        'Marie-Jeanne Wyckmans' : {
            blurb : '',
            src : '/artists/marie.jpg'
        }
    };
</script>

<div class='h2'>ARTISTS</div>

<Masonry stretchFirst={false} colWidth={'minmax(Min(20em, 100%), 1fr)'}>
{#each Object.entries(artists) as [k, v]}
    <Artist
        name={k}
        blurb={v.blurb}
        url={v.url}
        src={v.src}
    />
{/each}
</Masonry>



    <!-- <Artist
    name='Rian Treanor'
    blurb='Rian Treanor reimagines the intersection of club culture, experimental art and computer music, presenting an insightful and compelling musical world of fractured and interlocking components.'
    src='/artists/rian2.jpg'
    url='http://riantreanor.com/'
    />
    
    <Artist 
    name='Javier Alejandro Garavaglia'
    blurb='Javier A. Garavaglia is an award-winning composer, violist, performer, sound artist/sound-designer, music technologist and professor. His composition is a constant search for new sonic experiences combining new developments in computerised sound synthesis, live interaction, extended instrumental techniques and sound spatialisation.' 
    src='/artists/javier.jpg'
    url='https://icem.folkwang-uni.de/~gara/'
    />

    <Artist 
    name='Claudia Robles Angeles'
    blurb='Claudia Robles-Angel is a new media and sound artist born in Bogotá-Colombia, currently living in Cologne-Germany and active worldwide. Her work and research cover different aspects of visual and sound art, which extend from audio-visual fixed media compositions to performances and installations interacting with biomedical signals via the usage of interfaces such as, for example, the BCI (Brain Computer Interface) measuring brain waves activity.'
    src='/artists/claudia.jpg'
    url='http://www.claudearobles.de'
    />
    
    <Artist 
    name='Lone Taxidermist'
    blurb=''
    src='/artists/taxi.jpg'
    url='https://lonetaxidermist.bandcamp.com'
    />

    <Artist 
    name='Marie-Jeanne Wyckmans'
    blurb=''
    src='/artists/marie.jpg'
    url=''
    /> -->