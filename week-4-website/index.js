const express = require('express');
const app = express();
const hbs = require('hbs');
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/partials')

app.get("/", require("./routes/indexRouter.js"));
app.get("/works", require("./routes/galleryRouter.js"));
app.get("/about", require('./routes/aboutRouter.js'));

app.listen(4000)