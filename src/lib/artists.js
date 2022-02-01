import { readable } from 'svelte/store';

export const artists = readable([
    { 
        day: 23, 
        act: [{ name:'Lone Taxidermist', link: 'https://lonetaxidermist.bandcamp.com' }],
        photo: '/artist/taxi.jpg'
    },
    { 
        day: 24, 
        act: [{name: 'Marie-Jeanne Wyckmans', link: 'https://electrocd.com/en/artiste/wyckmans_ma/marie-jeanne-wyckmans'}],
        photo: '/artist/wyckmans.jpg'
    },
    { 
        day: 25, 
        act: [
            { name: 'Javier Garavaglia', link: 'https://icem.folkwang-uni.de/~gara/' },
            { name: 'Claudia Robles-Angel', link: 'http://www.claudearobles.de/' }
        ],
        photo: '/artist/gara-robles-1.jpg'
    },
    { 
        day: 26, 
        act: [{ name: 'Rian Treanor', link: 'http://riantreanor.com/' }],
        photo: '/artist/rian.jpg'
    },
    { 
        day: '23-26', 
        act: [{ name: 'Timothy Didymus', link: 'https://www.facebook.com/timothydidymus/' }],
        photo: '/artist/didymus-1.jpeg'
    }
]);