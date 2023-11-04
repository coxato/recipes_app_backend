const { getRecipesModel } = require("../models/recipes");
const { v4: uuidv4 } = require('uuid');


async function createRecipe(body) {
    const Recipes = getRecipesModel();
    const { name, description, ingredients, image } = body;

    const newRecipe = new Recipes({
        id: uuidv4(),
        name,
        description, 
        ingredients, 
        image
        // can also save it like ...body, but that way doesn't show enough information
    })
    await newRecipe.save();
    return newRecipe.id;
}


async function getRecipe({ id }) {
    const Recipes = getRecipesModel();
    const recipe = await Recipes.findOne({ where: { id } });

    return {
        recipe
    }
}


async function getRecipesByIngredients({ ingredients }) {
    const Recipes = getRecipesModel();
    const recipe = await Recipes.findAll({});

    return {
        recipe
    }
}




module.exports = {
    createRecipe,
    getRecipe,
    getRecipesByIngredients
}