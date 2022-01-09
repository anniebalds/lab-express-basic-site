const router = require("express").Router();


const renderHomePage = (req, res) => {
	res.render("home", {
        css: ['home.css'],
    });
};

router.get("/", renderHomePage);

module.exports = router;