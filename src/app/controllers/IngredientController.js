class IngredientController {

    // [GET] /ingredients
    index(req, res) {
        res.render('ingredients');
    }
}
module.exports = new IngredientController;