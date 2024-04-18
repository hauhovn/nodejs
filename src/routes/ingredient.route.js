const express = require('express');
const router = express.Router();

const ingredientController = require('../app/controllers/IngredientController');

// [GET] ingredients
router.use('/', ingredientController.index)

module.exports = router;