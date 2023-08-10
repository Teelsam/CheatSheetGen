const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

// Inform Express.js on which template engine to use

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);



  app.listen(PORT, () => {console.log(`Now listening ${PORT}`)})
