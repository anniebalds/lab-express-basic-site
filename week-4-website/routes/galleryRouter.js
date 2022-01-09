const router = require('express').Router();


router.get('/works', (req, res) => {
    const paintings = [
        {
            name: 'Self-Portrait with Thorn Necklace and Hummingbird',
            img: 'https://www.fridakahlo.org/images/paintings/self-portrait-with-necklace-of-thorns.jpg',
            year: 1940
        },
        {
            name: 'Me and My Parrots',
            img: 'https://www.fridakahlo.org/images/paintings/me-and-my-parrots.jpg',
            year: 1941
        },
        {
            name: 'Self Portrait as a Tehuana',
            img: 'https://www.fridakahlo.org/images/paintings/self-portrait-as-a-tehuana.jpg',
            year: 1943
        },
        {
            name: 'The Broken Column',
            img: 'https://www.fridakahlo.org/images/paintings/the-broken-column.jpg',
            year: 1944
        },
        {
            name: 'Self portrait on the Borderline between Mexico and the United States',
            img: 'https://www.fridakahlo.org/images/paintings/self-portrait-along-the-boarder-line-between-mexico-and-the-united-states.jpg',
            year: 1932
        },
        {
            name: 'The Two Fridas',
            img: 'https://www.fridakahlo.org/images/paintings/the-two-fridas.jpg',
            year: 1939
        },
        {
            name: 'Still Life with Parrot',
            img: 'https://www.fridakahlo.org/images/paintings/still-life-with-parrot.jpg',
            year: 1951
        },
    ];

    res.render('works', {
        paintings, 
        css: ['works.css']
    });
});



module.exports = router;