const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const route = require('./routes');

const app = express();
const port = 3000

// EXPRESS STATIC
app.use(express.static(path.join(__dirname, 'public')));

// MIDDEWARE
app.use(express.urlencoded({ extended: true })); //from formData to server
app.use(express.json()); // from JS file to server

// HTTP logger
app.use(morgan('combined'));

// Template engine - config extname .handlebars->.hbs
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));


//ROUTES inits
route(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})