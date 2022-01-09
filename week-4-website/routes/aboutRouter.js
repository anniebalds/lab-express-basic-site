const router = require('express').Router();

router.get('/about', (req, res) => {
    res.render('about', {
        css: ['about.css']
    });
});

module.exports = router

