const ingredientRouter = require('./ingredient.route');
const siteRouter = require('./site.route');

function route(app) {

    // [GET] ingredients
    app.get('/ingredients', ingredientRouter);

    // Sites
    app.get('/', siteRouter);


}

module.exports = route;