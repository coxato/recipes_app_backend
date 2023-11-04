const router = require("express").Router();
const response = require("../middlewares/response");
const recipesServices = require("../services/recipesServices");

router.post('/createRecipe', createRecipe);
router.post('/SearchRecipesByIngredients', SearchRecipesByIngredients);
router.get('/getRecipe/:id', getRecipe);

// routes handlers

function createRecipe(req, res, next) {
    recipesServices.createRecipe(req.body)
        .then((data) => response.success(res, 200, data))
        .catch(next);
}

function SearchRecipesByIngredients(req, res, next) {
    recipesServices.getRecipesByIngredients(req.body)
    .then((data) => response.success(res, 200, data))
    .catch(next);
}

function getRecipe(req, res, next) {
    recipesServices.getRecipe({ id: req.params.id })
        .then((data) => response.success(res, 200, data))
        .catch(next);
}

module.exports = router;